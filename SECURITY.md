# Security Policy

## Healthcare Context

This repository is a curated list of healthcare MCP servers. While we do not ship software that handles Protected Health Information (PHI), our trust ratings (HIPAA L1–L5) influence deployment decisions in clinical environments. We take the accuracy of these ratings seriously.

## Reporting a Vulnerability

If you discover a security issue with **this repository** (e.g., a malicious link, incorrect HIPAA rating, or compromised listed project), please report it responsibly:

1. **Email**: Open a [private security advisory](../../security/advisories/new) on this repository.
2. **Do not** open a public issue for security-sensitive reports.

We will acknowledge receipt within 48 hours and provide an update within 7 days.

## Reporting Issues with Listed MCP Servers

If you find a security vulnerability in one of the MCP servers listed here:

1. **Report directly** to the affected project's maintainers first.
2. **Notify us** so we can update the HIPAA compliance rating if warranted.
3. If a listed server is found to have misrepresented its security posture, we will downgrade its rating or remove it from the list.

## Scope

| In Scope | Out of Scope |
|----------|-------------|
| Incorrect HIPAA/clinical ratings | Bugs in listed third-party servers |
| Malicious or compromised links | Feature requests for this list |
| PHI exposure in contributions | Disagreements about rating methodology |
| Supply chain risks in CI/CD | General healthcare IT questions |

## Trust Rating Corrections

If you believe a listed server's HIPAA compliance level or clinical validity score is inaccurate, please open an issue with the label `rating-review` and include evidence supporting the correction.
