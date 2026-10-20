# Phase 13 — Computer Science & Digital Tools

**Status:** Started — calculator design and formula contracts documented. Engine implementation and verification are the next steps in this phase.

**Phase scope:** Add practical, browser-local computing tools for number bases, binary arithmetic, integer representation, bitwise operations, storage units, transfer time, string byte size, service availability, parity, and IPv4 CIDR arithmetic. Avoid duplicate implementations: the existing Phase 11 unit converters remain the canonical source for its 11 measurement families; this phase adds storage-specific IEC/bits choices and computer-science-focused tools.

## Planned calculator inventory

| Planned ID | Calculator | Contract / method | Required input checks |
|---|---|---|---|
| cs-base-converter | Base Conversion Calculator | Parse an integer in a selected base and render it in a target base, 2–36. | Non-empty valid digits for the source base; bases are integers in 2–36; no floating-point notation. |
| cs-binary-arithmetic | Binary Arithmetic Calculator | Add, subtract, or multiply two base-2 integers using integer arithmetic. | Binary digits only, bounded input length, explicit operation. |
| cs-integer-range | Integer Range Calculator | Show the minimum/maximum representable signed or unsigned range for a selected bit width. | Whole number of bits in a bounded range; explicit signedness. |
| cs-twos-complement | Two's-Complement Encoder | Encode a signed integer into exactly N bits using modular two's-complement representation. | Input must fit the signed range for the selected N-bit width. |
| cs-bitwise-operations | Bitwise Operations Calculator | Compute AND, OR, or XOR on non-negative integer operands. | Non-negative integer inputs and explicit operation. |
| cs-data-size | Digital Data Size Converter | Convert bit, byte, decimal SI, and binary IEC storage units using declared factors. | Finite value and source/target units from the supported list; output precision documented. |
| cs-transfer-time | Data Transfer Time Calculator | Seconds = decimal megabytes × 8 / megabits per second. | Non-negative size; positive transfer rate; decimal MB/Mb conventions explicitly stated. |
| cs-utf8-byte-count | UTF-8 String Size Calculator | Count encoded UTF-8 bytes locally and report Unicode code points. | String input only; no upload or remote transmission. |
| cs-availability-downtime | Uptime and Downtime Calculator | Downtime = period × (1 − availability percentage / 100). | Availability in [0, 100]; non-negative period; no implication of a service-level guarantee. |
| cs-parity-bit | Parity Bit Calculator | Calculate the parity bit required for even or odd parity for a binary string. | Binary digits only; explicit parity mode. |
| cs-ipv4-cidr | IPv4 CIDR Subnet Calculator | Derive network address, broadcast address, address count, and conventional usable-host count from IPv4/prefix. | Four valid IPv4 octets and prefix 0–32; explain /31 and /32 conventions. |

## Implementation and test requirements

1. Implement stable unique IDs and a local calculation engine with finite-domain and input validation.
2. Document formulas, representation conventions, bit widths, and limitations in each calculator's UI.
3. Use real unit selectors for data-size conversion; do not introduce a global unit toggle.
4. Provide compact field tooltips on advanced or representation-sensitive inputs.
5. Add reference tests for each calculator plus invalid-base, invalid digit, overflow/range, bad CIDR, and boundary cases.
6. Add browser end-to-end tests for calculator navigation, representative calculations, and desktop/tablet/mobile layout.
7. Include the new engine in the source suite and JavaScript syntax check. Verify all tests on the same commit.
8. Keep calculations in the browser; do not collect or transmit entered values.

## Independent review boundaries

Integer arithmetic and bit representations should be checked against established language/runtime conventions. The IPv4/CIDR utility is a learning and planning aid, not a substitute for network policy review. Availability calculations are arithmetic scenarios, not service-level guarantees.

## Acceptance checklist

- [x] Phase 13 scope and stable planned IDs recorded.
- [x] Formula/algorithm contract and validation requirements documented for all 11 planned tools.
- [ ] All 11 calculator definitions and working calculation logic implemented.
- [ ] Automated reference and invalid-input tests pass.
- [ ] UI category exposes the tools with units and helpful field guidance.
- [ ] Chromium browser tests pass on desktop, tablet, and mobile.
- [ ] Independent review notes and any remaining limitations are recorded before sign-off.
