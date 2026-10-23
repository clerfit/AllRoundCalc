# Phase 13 — Computer Science & Digital Tools Formula Catalogue

**Status:** Initial implementation is connected to the AllRoundCalc UI. The 15-tool catalogue includes reference-example tests, invalid-input tests, and a responsive browser journey. CI is required before this phase can be marked technically verified. Independent review remains outstanding.

## Inventory and methods

| ID | Tool | Method / assumptions |
|---|---|---|
| cs-base-converter | Number Base Converter | Exact BigInt parsing and radix rendering for bases 2, 8, 10, 16. |
| cs-decimal-binary | Decimal to Binary and Hexadecimal | Converts a JavaScript safe integer to binary, octal, and hexadecimal. |
| cs-integer-range | Integer Type Range Calculator | Exact BigInt signed two's-complement or unsigned range for 1–1024 bits. |
| cs-bitwise | Bitwise Operations Calculator | JavaScript signed 32-bit operations; shift counts are limited to 0–31. |
| cs-gcd-lcm | GCD and LCM | Euclidean algorithm and exact BigInt LCM. |
| cs-prime-check | Prime Number Checker | Trial division, bounded at 10^12; not a cryptographic primality test. |
| cs-factorial | Factorial Calculator | Exact BigInt factorial, input 0–500. |
| cs-combinations | Permutations and Combinations | Exact BigInt nPr and nCr, with n ≤ 500. |
| cs-ascii-unicode | Unicode Code Point Inspector | Iterates Unicode code points and reports U+ notation and decimal values. |
| cs-utf8-size | UTF-8 Text Size Estimator | Browser TextEncoder byte length for UTF-8 text. |
| cs-data-transfer-time | Data Transfer Time | Data size is converted to bytes; rate to bits/s; seconds = bytes × 8 / bits/s. Decimal and binary prefixes differ. |
| cs-throughput | Network Throughput | Average throughput = bytes × 8 / elapsed seconds. |
| cs-ipv4-subnet | IPv4 Subnet Calculator | CIDR mask/network/broadcast; /31 is treated as a two-address point-to-point range and /32 as one address. |
| cs-ipv4-validator | IPv4 Address Validator | Four dotted-decimal octets in 0–255; reports unsigned 32-bit numeric representation. |
| cs-hash-checksum | FNV-1a 32-bit Checksum | Non-cryptographic checksum over UTF-8 bytes; not suitable for security or password storage. |

## Reference results

- Decimal 255 → hexadecimal FF.
- Decimal 42 → binary 101010, octal 52, hexadecimal 2A.
- Signed 8-bit range → −128 to 127.
- 5 AND 3 → 1.
- GCD(12, 18) = 6; LCM = 36.
- 97 is prime.
- 5! = 120; 5 choose 2 = 10; 5 permute 2 = 20.
- Unicode A → U+0041 (decimal 65).
- UTF-8 size of “Hello” → 5 bytes; UTF-8 size of 😀 → 4 bytes.
- 100 decimal MB at 100 Mbit/s → 8 seconds.
- 100 decimal MB over 10 seconds → 80 Mbit/s.
- 192.168.1.10/24 → network 192.168.1.0, broadcast 192.168.1.255, 254 usable hosts.
- 192.168.1.1 → unsigned value 3232235777.
- FNV-1a 32-bit of UTF-8 text “a” → E40C292C.

## Limitations and input safety

- BigInt is used for radix conversion, integer ranges, factorial, combinations, and GCD/LCM to avoid precision loss for those outputs.
- Decimal/octal/hex/binary base conversion accepts integer notation only, not fractions.
- Bitwise results follow JavaScript signed 32-bit semantics; they are not arbitrary-width bit vectors.
- Prime checking is a bounded trial-division utility, not a cryptographic or probabilistic primality service.
- Throughput assumes a constant rate and excludes protocol overhead, retransmissions, congestion, and storage bottlenecks.
- CIDR host-count conventions are explicitly stated; network policy, reserved addresses, and provider-specific subnet rules may differ.
- FNV-1a is non-cryptographic and must not be used for authentication, password storage, or security decisions.
- Text is processed locally in the browser; no server endpoint is required for these calculations.

## Acceptance checklist

- [x] 15 unique calculator IDs with descriptions, fields, formulas, and examples.
- [x] UI category and calculator routes connected.
- [x] Source tests cover reference examples and invalid domains.
- [x] Responsive browser test added for base conversion.
- [x] JavaScript syntax-check configured in CI.
- [ ] Latest full source and browser CI succeeds on the final commit.
- [ ] Independent review of network and integer-domain assumptions.
- [ ] Human keyboard and screen-reader testing.
