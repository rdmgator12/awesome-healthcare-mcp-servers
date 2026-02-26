# Awesome Healthcare MCP Servers

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<p align="center">
  <a href="https://easypa.ai"><img src="media/logo.svg" width="400" alt="Awesome Healthcare MCP Servers"></a>
</p>

> A curated list of healthcare Model Context Protocol (MCP) servers for clinical decision support, FHIR interoperability, revenue cycle management, medical research, and HIPAA-compliant AI workflows.

Every server is independently rated for **HIPAA compliance** (L1–L5) and **clinical validity** (A–D) by a board-certified physician. Full ratings methodology and interactive search available at the [Healthcare MCP Marketplace](https://easypa.ai).

## Contents

- [Trust Framework](#trust-framework)
- [Revenue Cycle Management](#revenue-cycle-management)
- [Clinical Decision Support](#clinical-decision-support)
- [FHIR and Health Data Interoperability](#fhir-and-health-data-interoperability)
- [Quality Compliance and Regulatory](#quality-compliance-and-regulatory)
- [Life Sciences and Research](#life-sciences-and-research)
- [Population Health and Value-Based Care](#population-health-and-value-based-care)
- [Workflow Bundles](#workflow-bundles)

## Trust Framework

Every MCP server listed here carries two independent ratings assessed by [EasyPA.ai](https://easypa.ai), maintained by Ralph Martello, MD.

### HIPAA Compliance Level

| Badge | Level | Description |
|-------|-------|-------------|
| `L5` | HIPAA-Ready | Full BAA, AES-256, audit logging, RBAC, pen-tested |
| `L4` | HIPAA-Aware | Encryption in transit, no PHI storage, privacy-by-design |
| `L3` | De-identified Safe | Aggregate or de-identified data only |
| `L2` | Reference Only | Public data sources only (FDA, NLM, CMS) |
| `L1` | Unvetted | Not yet assessed |

### Clinical Validity Score

| Badge | Score | Description |
|-------|-------|-------------|
| `A` | Clinically Validated | Evidence-based, peer-reviewed, physician-endorsed |
| `B` | Clinically Informed | Built with clinical input, follows guidelines |
| `C` | Operationally Useful | Administrative or financial tools, not clinical |
| `D` | Experimental | Research-stage, community-developed |

> All ratings are point-in-time architectural assessments, not certifications. See the [full compliance methodology](https://easypa.ai) for criteria and disclaimers.

## Revenue Cycle Management

- [EasyPA ReimbursementEngine](https://easypa.ai) - Medicare coverage determination, ICD-10 coding, NPI validation, payer policy analysis, PubMed search, and bioRxiv/medRxiv preprint search across 18 tools. `L4` `C` | [Marketplace](https://easypa.ai)

## Clinical Decision Support

- [BioThings MCP](https://github.com/longevity-genie/biothings-mcp) - Query genes, genetic variants, drugs, and taxonomic information via the BioThings API. `L2` `B` `Python` | [Marketplace](https://easypa.ai)
- [Healthcare Data Hub](https://github.com/Cicatriiz/healthcare-mcp-public) - All-in-one server for FDA drug info, PubMed, medRxiv, NCBI Bookshelf, clinical trials, ICD-10, DICOM metadata, and medical calculator. `L2` `B` `Node.js` | [Marketplace](https://easypa.ai)
- [MedAdapt Content Server](https://github.com/ryoureddy/medadapt-content-server) - AI-assisted medical learning with adaptive content from PubMed, NCBI Bookshelf, and user documents. `L2` `B` `Python` | [Marketplace](https://easypa.ai)
- [Medical-MCP](https://github.com/JamesANZ/medical-mcp) - Comprehensive medical information from FDA, WHO, PubMed, RxNorm, and Google Scholar. `L2` `B` `Python` | [Marketplace](https://easypa.ai)
- [NICE MCP Server](https://easypa.ai) - UK NICE Clinical Guidelines access for evidence-based clinical decision support. `L2` `A` | [Marketplace](https://easypa.ai)

## FHIR and Health Data Interoperability

- [AgentCare MCP](https://github.com/Kartha-AI/agentcare-mcp) - Healthcare tools and prompts for interacting with FHIR data and medical resources on EMRs like Cerner and Epic. `L4` `B` `TypeScript` | [Marketplace](https://easypa.ai)
- [AWS HealthLake MCP Server](https://awslabs.github.io/mcp/servers/healthlake-mcp-server) - MCP server for AWS HealthLake FHIR operations with 11 tools for FHIR resource management and automatic datastore discovery. `L5` `B` `Python` | [Marketplace](https://easypa.ai)
- [DICOM MCP Server](https://github.com/ChristianHinge/dicom-mcp) - Query, read, and move medical images and reports from PACS and other DICOM-compliant systems. `L3` `B` `Python` | [Marketplace](https://easypa.ai)
- [Flexpa FHIR MCP](https://github.com/flexpa/mcp-fhir) - Connect to health plans and retrieve patient claims, coverage, and clinical data via FHIR. `L4` `C` `TypeScript` | [Marketplace](https://easypa.ai)
- [Health Record MCP](https://github.com/jmandel/health-record-mcp) - Connect to an EHR and make clinical data available via MCP, by Josh Mandel of SMART Health IT. `L4` `A` `TypeScript` | [Marketplace](https://easypa.ai)
- [Momentum FHIR MCP Server](https://github.com/the-momentum/fhir-mcp-server) - Natural language interface for healthcare data that eliminates weeks of FHIR learning and prevents LLM hallucination of medical codes. `L4` `B` `TypeScript` | [Marketplace](https://easypa.ai)
- [WSO2 FHIR MCP Server](https://github.com/wso2/fhir-mcp-server) - Expose any FHIR server or API as an MCP server with SMART-on-FHIR authentication and full CRUD on FHIR resources. `L4` `B` `TypeScript` | [Marketplace](https://easypa.ai)

## Quality Compliance and Regulatory

- [Innovaccer HMCP](https://github.com/innovaccer/Healthcare-MCP) - Specialized MCP extension with HIPAA guardrails, OAuth2, audit trails, and compliance layer for enterprise healthcare AI. `L5` `C` | [Marketplace](https://easypa.ai)

## Life Sciences and Research

- [3D Slicer MCP](https://easypa.ai) - Medical imaging integration via 3D Slicer for radiology and surgical planning workflows. `L3` `B` | [Marketplace](https://easypa.ai)
- [Protein Structure Analyzer](https://easypa.ai) - Protein structure analysis via MCP for research and drug discovery workflows. `L2` `D` | [Marketplace](https://easypa.ai)
- [Standalone PubMed MCP](https://github.com/rikachu225/mcp-pubmed-server) - Standalone PubMed search server for biomedical literature access and citation retrieval. `L2` `A` | [Marketplace](https://easypa.ai)

## Population Health and Value-Based Care

- [Apple Health MCP Server](https://github.com/the-momentum/apple-health-mcp-server) - Access exported Apple Health data with built-in analytics for consumer health and population health workflows. `L3` `D` | [Marketplace](https://easypa.ai)

## Workflow Bundles

Pre-configured MCP stacks for common healthcare workflows. Full bundle details and installation guides available at the [Healthcare MCP Marketplace](https://easypa.ai).

- **Denial Fighter** - Analyze, appeal, and prevent claim denials with NCD/LCD lookup, ICD-10 validation, and clinical evidence search. Includes EasyPA ReimbursementEngine and Standalone PubMed MCP.
- **Prior Auth Stack** - CMS-0057 aligned prior authorization workflow with coverage determination and FHIR submission. Includes EasyPA ReimbursementEngine and WSO2 FHIR MCP Server.
- **Clinical Reference Kit** - Point-of-care reference tools for clinicians including drug info, literature search, and genomics. Includes Medical-MCP, Healthcare Data Hub, and BioThings MCP.
- **FHIR Interop Suite** - Complete FHIR integration toolkit for CMS-0057 and HTI-1 compliance. Includes WSO2, Momentum, Health Record, AgentCare, and DICOM MCP servers.
- **Compliance Suite** - Quality reporting and regulatory compliance with Medicare policy monitoring and HIPAA guardrails. Includes EasyPA ReimbursementEngine and Innovaccer HMCP.

## Footnotes

### Rating Methodology

All HIPAA compliance levels and clinical validity scores are point-in-time architectural assessments by [EasyPA.ai](https://easypa.ai), not ongoing guarantees or HIPAA certifications. Organizations must conduct their own due diligence before deploying any MCP server in a clinical or production environment.

### CMS-0057 and HTI-1

Several FHIR MCP servers in this list directly support compliance with CMS-0057-F (Interoperability and Prior Authorization) and HTI-1 (Health Data, Technology, and Interoperability) federal mandates effective 2026-2027.

## Contributing

See [contributing.md](contributing.md) for how to submit a healthcare MCP server to this list.
