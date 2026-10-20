(function (root) {
  "use strict";

  const dataUnits = [
    {value:"bit",label:"bit (b)",factor:0.125},
    {value:"B",label:"byte (B)",factor:1},
    {value:"kB",label:"kilobyte (kB, 1000 B)",factor:1e3},
    {value:"MB",label:"megabyte (MB, 1000 kB)",factor:1e6},
    {value:"GB",label:"gigabyte (GB, 1000 MB)",factor:1e9},
    {value:"TB",label:"terabyte (TB, 1000 GB)",factor:1e12},
    {value:"KiB",label:"kibibyte (KiB, 1024 B)",factor:1024},
    {value:"MiB",label:"mebibyte (MiB, 1024 KiB)",factor:1024**2},
    {value:"GiB",label:"gibibyte (GiB, 1024 MiB)",factor:1024**3},
    {value:"TiB",label:"tebibyte (TiB, 1024 GiB)",factor:1024**4}
  ];

  const definitions = [
    {id:"cs-base-converter",name:"Base Conversion Calculator",group:"Number systems",description:"Convert integer values between bases 2 through 36.",fields:[["value","Integer value in source base"],["fromBase","Source base (2–36)"],["toBase","Target base (2–36)"]],formula:"Parse each digit using the source radix, accumulate the integer, then render it in the target radix.",example:"1010 (base 2) → 10 (base 10)"},
    {id:"cs-binary-arithmetic",name:"Binary Arithmetic Calculator",group:"Binary arithmetic",description:"Add, subtract, or multiply two binary integers using exact integer arithmetic.",fields:[["left","First binary integer"],["right","Second binary integer"]],formula:"Interpret both binary strings as integers, apply the selected operation, and convert the result back to base 2.",example:"1010₂ + 110₂ = 10000₂"},
    {id:"cs-integer-range",name:"Integer Range Calculator",group:"Integer representation",description:"Show the representable minimum and maximum for a selected bit width and signedness.",fields:[["bits","Bit width (1–1024)"]],formula:"Unsigned: 0 through 2ⁿ − 1. Signed two's complement: −2ⁿ⁻¹ through 2ⁿ⁻¹ − 1.",example:"8-bit signed → −128 through 127"},
    {id:"cs-twos-complement",name:"Two's-Complement Encoder",group:"Integer representation",description:"Encode a signed integer into exactly N binary digits using two's complement.",fields:[["value","Signed integer value"],["bits","Bit width (1–1024)"]],formula:"For a negative value v, encode v + 2ⁿ; require −2ⁿ⁻¹ ≤ v ≤ 2ⁿ⁻¹ − 1.",example:"−1 in 8 bits → 11111111"},
    {id:"cs-bitwise-operations",name:"Bitwise Operations Calculator",group:"Binary arithmetic",description:"Perform AND, OR, or XOR on non-negative integer operands.",fields:[["left","First non-negative integer"],["right","Second non-negative integer"]],formula:"Apply the selected bitwise operator to the integer operands; the result is exact BigInt arithmetic.",example:"12 AND 10 = 8"},
    {id:"cs-data-size",name:"Digital Data Size Converter",group:"Data sizes",description:"Convert bits, decimal SI storage units, and binary IEC storage units.",fields:[["value","Quantity"],["fromUnit","Source data unit"],["toUnit","Target data unit"]],formula:"Convert to bytes using the explicitly defined unit factor, then divide by the target factor. SI uses powers of 1,000; IEC uses powers of 1,024.",example:"1,024 B = 1 KiB; 1 MB = 1,000,000 B"},
    {id:"cs-transfer-time",name:"Data Transfer Time Calculator",group:"Data transfer",description:"Estimate transfer time for a file size and data rate using decimal megabytes and megabits per second.",fields:[["sizeMB","Size in decimal megabytes (MB)"],["speedMbps","Rate in megabits per second (Mb/s)"]],formula:"Seconds = size(MB) × 8 / rate(Mb/s). Protocol overhead and variable throughput are not included.",example:"100 MB at 20 Mb/s → 40 seconds"},
    {id:"cs-utf8-size",name:"UTF-8 String Size Calculator",group:"Text and encoding",description:"Count UTF-8 bytes and Unicode code points for a string locally in the browser.",fields:[["textValue","Text to measure"]],formula:"UTF-8 bytes are counted after UTF-8 encoding; Unicode code points are counted without normalization.",example:"café → 5 UTF-8 bytes and 4 Unicode code points"},
    {id:"cs-availability-downtime",name:"Uptime and Downtime Calculator",group:"Reliability arithmetic",description:"Translate a stated availability percentage and time window into allowed downtime.",fields:[["availabilityPercent","Availability percentage (0–100)"],["periodHours","Period duration in hours"]],formula:"Downtime hours = period hours × (1 − availability percentage / 100). This is arithmetic, not an SLA guarantee.",example:"99.9% over 720 hours → 0.72 hours (43.2 minutes)"},
    {id:"cs-parity-bit",name:"Parity Bit Calculator",group:"Text and encoding",description:"Calculate the extra bit required for even or odd parity over a binary string.",fields:[["bits","Binary data bits"]],formula:"Even parity bit makes the total number of 1 bits even; odd parity bit makes it odd.",example:"101 has two 1 bits: even parity bit 0; odd parity bit 1"},
    {id:"cs-ipv4-cidr",name:"IPv4 CIDR Subnet Calculator",group:"Networking helpers",description:"Calculate IPv4 network, broadcast address, and address counts from an address and prefix.",fields:[["address","IPv4 address"],["prefix","Prefix length (0–32)"]],formula:"Network = address AND subnet mask; broadcast = network OR inverse mask. Conventional usable host counts exclude network/broadcast except /31 and /32.",example:"192.168.1.10/24 → network 192.168.1.0, broadcast 192.168.1.255"}
  ];

  function required(values,key) {
    const raw=values[key];
    if(raw===undefined||raw===null||String(raw).trim()==="") throw new Error("Enter "+key+".");
    return String(raw).trim();
  }
  function finite(values,key) {
    const raw=required(values,key), n=Number(raw);
    if(!Number.isFinite(n))throw new Error(key+" must be a finite number.");
    return n;
  }
  function boundedInteger(values,key,min,max) {
    const n=finite(values,key);
    if(!Number.isInteger(n)||n<min||n>max)throw new Error(key+" must be a whole number from "+min+" through "+max+".");
    return n;
  }
  function decimalBigInt(values,key,nonNegative) {
    const raw=required(values,key);
    if(!/^[+-]?\d+$/.test(raw))throw new Error(key+" must be an integer written in decimal.");
    const n=BigInt(raw);
    if(nonNegative&&n<0n)throw new Error(key+" must be non-negative.");
    return n;
  }
  function parseInBase(raw,base,key) {
    const text=String(raw===undefined?"":raw).trim().toUpperCase();
    const match=/^([+-]?)([0-9A-Z]+)$/.exec(text);
    if(!match)throw new Error(key+" must contain integer digits valid for its source base.");
    let n=0n;
    for(const ch of match[2]) {
      const digit=ch>="0"&&ch<="9"?ch.charCodeAt(0)-48:ch.charCodeAt(0)-55;
      if(digit<0||digit>=base)throw new Error(key+" contains a digit that is invalid for base "+base+".");
      n=n*BigInt(base)+BigInt(digit);
    }
    if(match[1]==="-")n=-n;
    return n;
  }
  function fmt(value) {
    if(!Number.isFinite(value))throw new Error("The result exceeds the supported finite-number range.");
    return Number(value.toPrecision(12)).toString();
  }
  function ipv4ToInt(raw) {
    const pieces=String(raw).trim().split(".");
    if(pieces.length!==4||pieces.some(p=>!/^\d{1,3}$/.test(p)||Number(p)>255))throw new Error("Enter a valid IPv4 address with four octets from 0 through 255.");
    return pieces.reduce((acc,p)=> (acc<<8n)|BigInt(Number(p)),0n);
  }
  function intToIPv4(n) {
    return [24n,16n,8n,0n].map(shift=>Number((n>>shift)&255n)).join(".");
  }

  function calculate(id,values) {
    values=values||{};
    const def=definitions.find(item=>item.id===id);
    if(!def)throw new Error("Calculator not found.");
    let result,formula=def.formula,note="";
    switch(id) {
      case "cs-base-converter": {
        const from=boundedInteger(values,"fromBase",2,36), to=boundedInteger(values,"toBase",2,36);
        const n=parseInBase(values.value,from,"value");
        result=n.toString(to).toUpperCase()+" (base "+to+") = decimal "+n.toString(10);
        break;
      }
      case "cs-binary-arithmetic": {
        const left=parseInBase(values.left,2,"left"), right=parseInBase(values.right,2,"right");
        const operation=values.operation;
        let n;
        if(operation==="add")n=left+right;
        else if(operation==="subtract")n=left-right;
        else if(operation==="multiply")n=left*right;
        else throw new Error("Choose add, subtract, or multiply.");
        result="Binary result: "+n.toString(2)+"; decimal result: "+n.toString(10);
        break;
      }
      case "cs-integer-range": {
        const bits=boundedInteger(values,"bits",1,1024), mode=values.mode||"signed", width=BigInt(bits);
        if(mode==="unsigned")result=bits+"-bit unsigned range: 0 to "+((1n<<width)-1n).toString();
        else if(mode==="signed")result=bits+"-bit signed range: "+(-(1n<<(width-1n))).toString()+" to "+((1n<<(width-1n))-1n).toString();
        else throw new Error("Choose signed or unsigned representation.");
        break;
      }
      case "cs-twos-complement": {
        const n=decimalBigInt(values,"value",false), bits=boundedInteger(values,"bits",1,1024), width=BigInt(bits);
        const min=-(1n<<(width-1n)), max=(1n<<(width-1n))-1n;
        if(n<min||n>max)throw new Error("Value does not fit in the selected signed bit width.");
        const encoded=n<0n?(1n<<width)+n:n;
        result=bits+"-bit two's complement: "+encoded.toString(2).padStart(bits,"0");
        break;
      }
      case "cs-bitwise-operations": {
        const left=decimalBigInt(values,"left",true), right=decimalBigInt(values,"right",true), operation=values.operation;
        let n;
        if(operation==="and")n=left&right;
        else if(operation==="or")n=left|right;
        else if(operation==="xor")n=left^right;
        else throw new Error("Choose AND, OR, or XOR.");
        result="Result: "+n.toString(10)+"; binary: "+n.toString(2);
        break;
      }
      case "cs-data-size": {
        const n=finite(values,"value"), from=dataUnits.find(u=>u.value===values.fromUnit), to=dataUnits.find(u=>u.value===values.toUnit);
        if(!from||!to)throw new Error("Choose supported source and target data units.");
        const output=n*from.factor/to.factor;
        result=fmt(output)+" "+to.value;
        note="bit = 1/8 byte; decimal SI units use powers of 1,000; binary IEC units use powers of 1,024.";
        break;
      }
      case "cs-transfer-time": {
        const size=finite(values,"sizeMB"), speed=finite(values,"speedMbps");
        if(size<0)throw new Error("sizeMB must be non-negative.");
        if(speed<=0)throw new Error("speedMbps must be greater than zero.");
        result=fmt(size*8/speed)+" seconds";
        note="Assumes decimal MB (1,000,000 bytes), Mb/s as megabits per second, and constant throughput with no protocol overhead.";
        break;
      }
      case "cs-utf8-size": {
        const text=String(values.textValue===undefined?"":values.textValue);
        const bytes=new TextEncoder().encode(text).length, points=Array.from(text).length;
        result=bytes+" UTF-8 bytes; "+points+" Unicode code points";
        note="Text is encoded locally; the string is not uploaded. No Unicode normalization is applied.";
        break;
      }
      case "cs-availability-downtime": {
        const availability=finite(values,"availabilityPercent"), period=finite(values,"periodHours");
        if(availability<0||availability>100)throw new Error("availabilityPercent must be from 0 through 100.");
        if(period<0)throw new Error("periodHours must be non-negative.");
        const downtime=period*(1-availability/100);
        result="Downtime: "+fmt(downtime)+" hours ("+fmt(downtime*60)+" minutes)";
        break;
      }
      case "cs-parity-bit": {
        const bits=required(values,"bits"), mode=values.mode||"even";
        if(!/^[01]+$/.test(bits))throw new Error("bits must contain only 0 and 1.");
        if(mode!=="even"&&mode!=="odd")throw new Error("Choose even or odd parity.");
        let ones=0;for(const bit of bits)if(bit==="1")ones++;
        const parity=(mode==="even"?(ones%2):(1-ones%2));
        result="Parity bit ("+mode+"): "+parity;
        break;
      }
      case "cs-ipv4-cidr": {
        const ip=ipv4ToInt(required(values,"address")), prefix=boundedInteger(values,"prefix",0,32);
        const hostBits=BigInt(32-prefix), mask=prefix===0?0n:((1n<<32n)-1n)^((1n<<hostBits)-1n);
        const network=ip&mask, broadcast=network|((1n<<hostBits)-1n), count=1n<<hostBits;
        const usable=prefix>=31?count:count-2n;
        result="Network: "+intToIPv4(network)+"; broadcast: "+intToIPv4(broadcast)+"; addresses: "+count.toString()+"; conventional usable hosts: "+usable.toString();
        note="For /31 and /32, the displayed usable count follows common point-to-point/host-route conventions; deployment-specific rules may differ.";
        break;
      }
      default: throw new Error("Calculator not implemented.");
    }
    return {result:String(result),formula,note,definition:def};
  }

  function unitsFor(id) {
    return id==="cs-data-size"?dataUnits.map(unit=>({value:unit.value,label:unit.label})):[];
  }
  const api={definitions,calculate,unitsFor};
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
  root.AllRoundComputerScienceCalculations=api;
})(typeof globalThis!=="undefined"?globalThis:this);
