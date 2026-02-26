# Contributing

Thank you for your interest in contributing to Awesome Healthcare MCP Servers. We welcome submissions of healthcare MCP servers that serve real clinical, operational, financial, or research workflows.

## Submitting a New MCP Server

### Option 1: Open an Issue

[Open a new issue](../../issues/new?template=mcp-submission.yml) using the **MCP Server Submission** template. Our team will review your submission, assign HIPAA and clinical ratings, and add the entry.

### Option 2: Open a Pull Request

Add your entry directly to `README.md` in the appropriate category section.

#### Entry Format

```markdown
- [Name](https://github.com/org/repo) - Description of what this MCP does (`L#` `Score` `Language`).
```

**Rules:**

- Description must start with an uppercase letter and end with a period.
- Place the entry in alphabetical order within its category.
- Include the primary programming language in backticks after the scores (if known).
- HIPAA level (`L1`–`L5`) and clinical score (`A`–`D`) will be assigned by maintainers if not yet rated.

#### Example

```markdown
- [My Healthcare MCP](https://github.com/org/my-healthcare-mcp) - Real-time drug interaction checking via the FDA API for clinical decision support (`L2` `B` `Python`).
```

### Requirements

Your MCP server must:

- Serve a **real healthcare workflow** (clinical, operational, financial, or research).
- Have a **publicly accessible repository** with a clear README.
- Be **actively maintained** (commits within the last 6 months).
- Not misrepresent its security or compliance capabilities.

### What We Evaluate

| Criteria | What We Look For |
|----------|------------------|
| Clinical Relevance | Does this serve a real healthcare workflow? |
| Code Quality | Well-documented, maintained, stable |
| Security Posture | Encryption, access controls, input validation |
| PHI Handling | Does it touch, store, or transmit PHI? How? |

### Compliance Ratings

All accepted MCPs receive two independent ratings:

- **HIPAA Compliance Level (L1–L5)**: Based on security architecture and PHI handling.
- **Clinical Validity Score (A–D)**: Based on clinical evidence and guideline alignment.

Ratings are assigned by our team after review.

## Other Contributions

- **Category suggestions**: Open an issue to propose new categories.
- **Bug reports**: Found a dead link or incorrect information? Open an issue.
- **Compliance feedback**: Open an issue if you have expertise in HIPAA or healthcare security.

## Code of Conduct

See [code-of-conduct.md](code-of-conduct.md). All contributors must uphold accuracy in compliance claims and never include PHI in submissions.
