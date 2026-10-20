(function (root) {
  "use strict";

  const definitions = [
    {id:"dt-date-difference",name:"Date Difference Calculator",group:"Date & Time",description:"Calculate the signed number of calendar days between two dates.",fields:[["startDate","Start date (YYYY-MM-DD)"],["endDate","End date (YYYY-MM-DD)"]],formula:"Calendar day difference = (end date − start date) / 86,400,000 using UTC-midnight date-only values.",example:"2026-01-01 to 2026-01-31 → 30 days"},
    {id:"dt-add-days",name:"Add or Subtract Calendar Days",group:"Date & Time",description:"Shift a date by a signed whole number of calendar days.",fields:[["date","Starting date (YYYY-MM-DD)"],["days","Days to add (negative subtracts)"]],formula:"Result date = start date + integer day count in the UTC calendar.",example:"2026-01-31 + 1 day → 2026-02-01"},
    {id:"dt-business-days",name:"Business Days Between Dates",group:"Date & Time",description:"Count Monday–Friday days after the start date through and including the end date.",fields:[["startDate","Start date (YYYY-MM-DD)"],["endDate","End date (YYYY-MM-DD)"]],formula:"Count weekdays in (start date, end date], excluding weekends. Public holidays are not excluded.",example:"Monday 2026-01-05 to Friday 2026-01-09 → 4 business days"},
    {id:"dt-add-business-days",name:"Add or Subtract Business Days",group:"Date & Time",description:"Move a date by a signed number of Monday–Friday days, skipping weekends.",fields:[["date","Starting date (YYYY-MM-DD)"],["businessDays","Business days to add (negative subtracts)"]],formula:"Advance one calendar day at a time and count weekdays only. Public holidays are not excluded.",example:"Friday 2026-01-09 + 1 business day → Monday 2026-01-12"},
    {id:"dt-age",name:"Age Between Two Dates",group:"Date & Time",description:"Calculate completed years, months, and days between a birth date and an as-of date.",fields:[["birthDate","Birth date (YYYY-MM-DD)"],["asOfDate","As-of date (YYYY-MM-DD)"]],formula:"Subtract calendar date components with anniversary-aware month/day borrowing; future birth dates are rejected.",example:"2000-01-15 to 2026-01-14 → 25 years, 11 months, 30 days"},
    {id:"dt-timezone-offset",name:"Fixed Time-Zone Offset Converter",group:"Date & Time",description:"Convert a local date/time between explicitly entered fixed UTC offsets.",fields:[["dateTimeLocal","Source local date/time (YYYY-MM-DDTHH:mm)"],["sourceOffset","Source UTC offset in minutes (e.g. 330 for UTC+05:30)"],["targetOffset","Target UTC offset in minutes (e.g. 0 for UTC)"]],formula:"UTC = source local time − source offset; target local time = UTC + target offset. Daylight-saving and historical zone rules are not inferred.",example:"2026-01-01T09:00 at UTC+05:30 → 2026-01-01T03:30 at UTC"},
    {id:"dt-unix-timestamp",name:"Unix Timestamp Converter",group:"Date & Time",description:"Convert an ISO date/time with explicit Z or UTC offset into Unix seconds and milliseconds.",fields:[["dateTime","ISO date/time with Z or explicit ±HH:MM offset"]],formula:"Unix timestamp = floor(milliseconds since 1970-01-01T00:00:00Z / 1000).",example:"1970-01-01T00:00:01Z → 1 second"},
    {id:"dt-work-hours",name:"Net Work Hours Calculator",group:"Time & Duration",description:"Calculate elapsed hours between clock times after a break; overnight shifts are supported.",fields:[["startTime","Start time (HH:mm)"],["endTime","End time (HH:mm)"],["breakMinutes","Unpaid break in minutes (non-negative)"]],formula:"Elapsed minutes = end − start (add 1,440 if crossing midnight); net minutes = elapsed − break.",example:"09:00 to 17:30 with a 30-minute break → 8 hours"},
    {id:"dt-overtime",name:"Overtime Calculator",group:"Time & Duration",description:"Split hours worked into regular and overtime hours using a user-defined regular threshold.",fields:[["hoursWorked","Total hours worked"],["regularHours","Regular-hours threshold"]],formula:"Overtime = max(0, total hours − regular threshold); regular counted = min(total hours, threshold).",example:"10 hours worked and 8 regular hours → 8 regular, 2 overtime"},
    {id:"dt-countdown",name:"Date Countdown Calculator",group:"Date & Time",description:"Calculate the time remaining to a target date from a reference date.",fields:[["fromDate","Reference date (YYYY-MM-DD)"],["targetDate","Target date (YYYY-MM-DD)"]],formula:"Difference = target date − reference date, expressed as signed days.",example:"2026-01-01 to 2026-01-10 → 9 days remaining"},
    {id:"dt-recurring-interval",name:"Recurring Date Generator",group:"Date & Time",description:"Generate upcoming dates at a fixed positive day interval.",fields:[["startDate","Starting date (YYYY-MM-DD)"],["intervalDays","Interval in days (positive integer)"],["occurrences","Number of dates to generate (1–50)"]],formula:"Occurrence n = start date + n × interval days, for n = 1…count.",example:"Start 2026-01-01, interval 7, count 3 → Jan 8, Jan 15, Jan 22"},
    {id:"dt-leap-year",name:"Leap Year Checker",group:"Calendar",description:"Determine whether a Gregorian calendar year is a leap year.",fields:[["year","Gregorian calendar year (positive integer)"]],formula:"Leap year iff divisible by 4 and (not divisible by 100 unless divisible by 400).",example:"2000 is a leap year; 1900 is not"},
    {id:"dt-iso-week",name:"ISO Week Number Calculator",group:"Calendar",description:"Find the ISO-8601 week number and ISO week-year for a date.",fields:[["date","Date (YYYY-MM-DD)"]],formula:"ISO weeks start Monday; week 1 contains the year's first Thursday.",example:"2021-01-01 belongs to ISO week 53 of ISO week-year 2020"},
    {id:"dt-duration-seconds",name:"Duration to Total Seconds",group:"Time & Duration",description:"Convert non-negative days, hours, minutes, and seconds into total seconds.",fields:[["days","Days"],["hours","Hours"],["minutes","Minutes"],["seconds","Seconds"]],formula:"Total seconds = days × 86,400 + hours × 3,600 + minutes × 60 + seconds.",example:"1 day, 2 hours, 3 minutes, 4 seconds → 93,784 seconds"}
  ];

  function value(values, key) {
    const raw = values[key];
    if (raw === undefined || raw === null || String(raw).trim() === "") throw new Error("Enter " + key + ".");
    const n = Number(raw);
    if (!Number.isFinite(n)) throw new Error(key + " must be a finite number.");
    return n;
  }
  function integer(values,key,min,max) {
    const n=value(values,key);
    if(!Number.isInteger(n)||n<min||n>max) throw new Error(key+" must be a whole number from "+min+" through "+max+".");
    return n;
  }
  function dateValue(values,key) {
    const raw=String(values[key]||"");
    if(!/^\d{4}-\d{2}-\d{2}$/.test(raw)) throw new Error(key+" must use YYYY-MM-DD.");
    const [y,m,d]=raw.split("-").map(Number);
    const date=new Date(Date.UTC(y,m-1,d));
    if(date.getUTCFullYear()!==y||date.getUTCMonth()!==m-1||date.getUTCDate()!==d) throw new Error(key+" is not a valid calendar date.");
    return date;
  }
  function isoDate(date) { return date.getUTCFullYear().toString().padStart(4,"0")+"-"+String(date.getUTCMonth()+1).padStart(2,"0")+"-"+String(date.getUTCDate()).padStart(2,"0"); }
  function dayDiff(a,b) { return Math.round((b.getTime()-a.getTime())/86400000); }
  function addDate(date,days) { const out=new Date(date.getTime()); out.setUTCDate(out.getUTCDate()+days); return out; }
  function clockMinutes(values,key) {
    const raw=String(values[key]||"");
    const m=/^(\d{2}):(\d{2})$/.exec(raw);
    if(!m||Number(m[1])>23||Number(m[2])>59) throw new Error(key+" must use a valid HH:mm time.");
    return Number(m[1])*60+Number(m[2]);
  }
  function fmt(n) { return Number(n.toFixed(10)).toString(); }
  function offset(values,key) {
    const n=integer(values,key,-840,840);
    return n;
  }
  function isoLocal(ms) {
    const d=new Date(ms);
    return isoDate(d)+"T"+String(d.getUTCHours()).padStart(2,"0")+":"+String(d.getUTCMinutes()).padStart(2,"0");
  }
  function calculate(id, values) {
    values=values||{};
    const def=definitions.find(item=>item.id===id);
    if(!def) throw new Error("Calculator not found.");
    let result, note="", formula=def.formula;
    switch(id) {
      case "dt-date-difference": case "dt-countdown": {
        const a=dateValue(values,id==="dt-countdown"?"fromDate":"startDate");
        const b=dateValue(values,id==="dt-countdown"?"targetDate":"endDate");
        const days=dayDiff(a,b);
        result=days+" calendar days"+(id==="dt-countdown"?(days>=0?" remaining":" past target"):"");
        break;
      }
      case "dt-add-days": {
        const d=dateValue(values,"date"); const n=integer(values,"days",-1000000,1000000);
        result=isoDate(addDate(d,n)); break;
      }
      case "dt-business-days": {
        const a=dateValue(values,"startDate"), b=dateValue(values,"endDate"), delta=dayDiff(a,b);
        if(Math.abs(delta)>365250) throw new Error("Date range must be within 1,000 years.");
        let count=0; for(let i=1;i<=Math.abs(delta);i++){const d=addDate(a,Math.sign(delta)*i); const day=d.getUTCDay(); if(day!==0&&day!==6) count+=Math.sign(delta);}
        result=count+" business days (weekends excluded; public holidays included)"; break;
      }
      case "dt-add-business-days": {
        let d=dateValue(values,"date"); const n=integer(values,"businessDays",-100000,100000); let remaining=Math.abs(n), step=Math.sign(n);
        while(remaining){d=addDate(d,step);const wd=d.getUTCDay();if(wd!==0&&wd!==6)remaining--;}
        result=isoDate(d); break;
      }
      case "dt-age": {
        const birth=dateValue(values,"birthDate"), asOf=dateValue(values,"asOfDate");
        if(birth>asOf) throw new Error("Birth date cannot be after the as-of date.");
        let y=asOf.getUTCFullYear()-birth.getUTCFullYear(), m=asOf.getUTCMonth()-birth.getUTCMonth(), d=asOf.getUTCDate()-birth.getUTCDate();
        if(d<0){m--; const prev=new Date(Date.UTC(asOf.getUTCFullYear(),asOf.getUTCMonth(),0)); d+=prev.getUTCDate();}
        if(m<0){y--;m+=12;}
        result=y+" years, "+m+" months, "+d+" days"; break;
      }
      case "dt-timezone-offset": {
        const raw=String(values.dateTimeLocal||""); const m=/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})$/.exec(raw);
        if(!m)throw new Error("dateTimeLocal must use YYYY-MM-DDTHH:mm.");
        const date=dateValue({d:m[1]},"d"), hh=Number(m[2]), mm=Number(m[3]);
        if(hh>23||mm>59)throw new Error("dateTimeLocal must use a valid 24-hour time.");
        const utc=Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),hh,mm)-offset(values,"sourceOffset")*60000;
        const target=utc+offset(values,"targetOffset")*60000;
        result=isoLocal(target); note="Fixed offsets only; daylight-saving and historical time-zone rules are not applied."; break;
      }
      case "dt-unix-timestamp": {
        const raw=String(values.dateTime||"");
        if(!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})$/.test(raw)) throw new Error("Enter an ISO date/time with an explicit Z or ±HH:MM offset.");
        const ms=Date.parse(raw);
        if(!Number.isFinite(ms))throw new Error("Enter a valid ISO date/time.");
        result="Unix seconds: "+Math.floor(ms/1000)+"; milliseconds: "+ms; break;
      }
      case "dt-work-hours": {
        const start=clockMinutes(values,"startTime"), end=clockMinutes(values,"endTime");
        let elapsed=end-start;if(elapsed<0)elapsed+=1440;
        const br=integer(values,"breakMinutes",0,1440);
        if(br>elapsed)throw new Error("Break cannot exceed elapsed shift time.");
        const net=elapsed-br;
        result=fmt(net/60)+" hours ("+Math.floor(net/60)+" h "+(net%60)+" min)";break;
      }
      case "dt-overtime": {
        const worked=value(values,"hoursWorked"), regular=value(values,"regularHours");
        if(worked<0||regular<0)throw new Error("Hours must be non-negative.");
        const ot=Math.max(0,worked-regular), normal=Math.min(worked,regular);
        result="Regular hours: "+fmt(normal)+"; overtime hours: "+fmt(ot);break;
      }
      case "dt-recurring-interval": {
        const start=dateValue(values,"startDate"), interval=integer(values,"intervalDays",1,1000000), n=integer(values,"occurrences",1,50);
        result=Array.from({length:n},(_,i)=>isoDate(addDate(start,interval*(i+1)))).join(", ");break;
      }
      case "dt-leap-year": {
        const y=integer(values,"year",1,999999);
        result=y+" is "+(y%4===0&&(y%100!==0||y%400===0)?"a leap year":"not a leap year");break;
      }
      case "dt-iso-week": {
        const date=dateValue(values,"date"), d=new Date(date.getTime());d.setUTCDate(d.getUTCDate()+3-((d.getUTCDay()+6)%7));
        const weekYear=d.getUTCFullYear(), jan4=new Date(Date.UTC(weekYear,0,4));
        const week=1+Math.round(((d.getTime()-jan4.getTime())/86400000-3+((jan4.getUTCDay()+6)%7))/7);
        result="ISO week "+week+" of "+weekYear;break;
      }
      case "dt-duration-seconds": {
        const d=value(values,"days"),h=value(values,"hours"),m=value(values,"minutes"),s=value(values,"seconds");
        if([d,h,m,s].some(n=>n<0))throw new Error("Duration components must be non-negative.");
        const total=d*86400+h*3600+m*60+s;
        if(!Number.isSafeInteger(total))throw new Error("Total seconds exceed the safe integer range.");
        result=total+" seconds";break;
      }
      default: throw new Error("Calculator not implemented.");
    }
    return {result:String(result),formula,note,definition:def};
  }

  const api={definitions,calculate};
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
  root.AllRoundDateTimeCalculations=api;
})(typeof globalThis!=="undefined"?globalThis:this);
