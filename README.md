# Awesome Healthcare MCP Servers [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<p align="center">
  <img src="media/logo.svg" width="400" alt="Awesome Healthcare MCP Servers">
</p>

> A curated list of healthcare Model Context Protocol (MCP) servers for clinical decision support, FHIR interoperability, revenue cycle management, medical research, and HIPAA-compliant AI workflows.

Every server is independently rated for **HIPAA compliance** (L1–L5) and **clinical validity** (A–D) by a board-certified physician.

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

Every MCP server listed here carries two independent ratings maintained by Ralph Martello, MD.

### HIPAA Compliance Level

| Badge | Level              | Description                                                  |
| ----- | ------------------ | ------------------------------------------------------------ |
| `L5`  | HIPAA-Ready        | Full BAA, AES-256, audit logging, RBAC, pen-tested           |
| `L4`  | HIPAA-Aware        | Encryption in transit, no PHI storage, privacy-by-design     |
| `L3`  | De-identified Safe | Aggregate or de-identified data only                         |
| `L2`  | Reference Only     | Public data sources only (FDA, NLM, CMS)                     |
| `L1`  | Unvetted           | Not yet assessed                                             |

### Clinical Validity Score

| Badge | Score                | Description                                                |
| ----- | -------------------- | ---------------------------------------------------------- |
| `A`   | Clinically Validated | Evidence-based, peer-reviewed, physician-endorsed          |
| `B`   | Clinically Informed  | Built with clinical input, follows guidelines              |
| `C`   | Operationally Useful | Administrative or financial tools, not clinical            |
| `D`   | Experimental         | Research-stage, community-developed                        |

> All ratings are point-in-time architectural assessments, not certifications. See [contributing.md](contributing.md) for full rating criteria.

## Revenue Cycle Management

- [ReimbursementEngine](https://github.com/rdmgator12/MCP-marketplace) - Medicare coverage determination, ICD-10 coding, NPI validation, payer policy analysis, PubMed search, and bioRxiv/medRxiv preprint search across 18 tools (`L4` `C`).

## Clinical Decision Support

- [BioThings MCP](https://github.com/longevity-genie/biothings-mcp) - Query genes, genetic variants, drugs, and taxonomic information via the BioThings API (`L2` `B` `Python`).
- [Evidence-Based Medicine MCP](https://github.com/chris-lovejoy/evidence-based-medicine-mcp) - Evidence-based medical advice MCP for clinical decision support workflows (`L2` `B` `TypeScript`).
- [Healthcare Data Hub](https://github.com/Cicatriiz/healthcare-mcp-public) - All-in-one server for FDA drug info, PubMed, medRxiv, NCBI Bookshelf, clinical trials, ICD-10, DICOM metadata, and medical calculator (`L2` `B` `Node.js`).
- [MCP-LOINC](https://github.com/Kryzo/mcp-Loinc) - LOINC API wrapper for medical terminology standardization and lab code lookup (`L2` `B` `Python`).
- [MedAdapt Content Server](https://github.com/ryoureddy/medadapt-content-server) - AI-assisted medical learning with adaptive content from PubMed, NCBI Bookshelf, and user documents (`L2` `B` `Python`).
- [Medical-MCP](https://github.com/JamesANZ/medical-mcp) - Comprehensive medical information from FDA, WHO, PubMed, RxNorm, and Google Scholar (`L2` `B` `Python`).
- [NCCN Guidelines MCP](https://github.com/gscfwid/NCCN_guidelines_MCP) - NCCN cancer treatment guidelines access for oncology decision support (`L2` `A` `Python`).
- [NexOnco MCP](https://github.com/Nexgene-Research/nexonco-mcp) - Oncology clinical evidence and precision medicine decision support (`L2` `B` `Python`).
- [NICE MCP Server](https://github.com/kieran-heidi/medical-mcp-server) - UK NICE Clinical Guidelines access for evidence-based clinical decision support (`L2` `A`).
- [SNOMED CT MCP](https://github.com/eigenbau/mcp-snomed-ct) - SNOMED CT concept lookup via FHIR R4 terminology server for clinical coding (`L2` `A` `Python`).

## FHIR and Health Data Interoperability

- [AEHRC FHIR Tools](https://github.com/aehrc/mcp-fhir-tools) - FHIR tools by Australian e-Health Research Centre (CSIRO) for health data interoperability (`L4` `B` `TypeScript`).
- [AgentCare MCP](https://github.com/Kartha-AI/agentcare-mcp) - Healthcare tools and prompts for interacting with FHIR data and medical resources on EMRs like Cerner and Epic (`L4` `B` `TypeScript`).
- [AWS HealthLake MCP Server](https://awslabs.github.io/mcp/servers/healthlake-mcp-server) - MCP server for AWS HealthLake FHIR operations with 11 tools for FHIR resource management and automatic datastore discovery (`L5` `B` `Python`).
- [Azure FHIR MCP Server](https://github.com/erikhoward/azure-fhir-mcp-server) - Azure Health Data Services FHIR MCP server for cloud-native health data integration (`L4` `B` `Python`).
- [DICOM MCP Server](https://github.com/ChristianHinge/dicom-mcp) - Query, read, and move medical images and reports from PACS and other DICOM-compliant systems (`L3` `B` `Python`).
- [Flexpa FHIR MCP](https://github.com/flexpa/mcp-fhir) - Connect to health plans and retrieve patient claims, coverage, and clinical data via FHIR (`L4` `C` `TypeScript`).
- [Health Record MCP](https://github.com/jmandel/health-record-mcp) - Connect to an EHR and make clinical data available via MCP, by Josh Mandel of SMART Health IT (`L4` `A` `TypeScript`).
- [Momentum FHIR MCP Server](https://github.com/the-momentum/fhir-mcp-server) - Natural language interface for healthcare data that eliminates weeks of FHIR learning and prevents LLM hallucination of medical codes (`L4` `B` `TypeScript`).
- [WSO2 FHIR MCP Server](https://github.com/wso2/fhir-mcp-server) - Expose any FHIR server or API as an MCP server with SMART-on-FHIR authentication and full CRUD on FHIR resources (`L4` `B` `TypeScript`).

## Quality Compliance and Regulatory

- [Innovaccer HMCP](https://github.com/innovaccer/Healthcare-MCP) - Specialized MCP extension with HIPAA guardrails, OAuth2, audit trails, and compliance layer for enterprise healthcare AI (`L5` `C`).
- [OMOP MCP](https://github.com/OHNLP/omop_mcp) - OMOP concept mapping via LLMs by Mayo Clinic NLP group for clinical data standardization (`L2` `B` `Python`).
- [PyOMOP](https://github.com/dermatologist/pyomop) - OHDSI/OMOP clinical data management with FHIR import for observational research (`L3` `B` `Python`).

## Life Sciences and Research

- [3D Slicer MCP](https://github.com/brainbloodbarrier/3dslicer-claude-bridge) - Medical imaging integration via 3D Slicer for radiology and surgical planning workflows (`L3` `B`).
- [BioMCP](https://github.com/genomoncology/biomcp) - Clinical trials, genomics, PubMed, and variant annotation in Rust for biomedical research workflows (`L2` `B` `Rust`).
- [CDISC Library MCP](https://github.com/Cicatriiz/cdisc-library-mcp-server) - CDISC Library access for clinical data standards and regulatory submissions (`L2` `B` `JavaScript`).
- [ClinicalTrials.gov MCP](https://github.com/cyanheads/clinicaltrialsgov-mcp-server) - ClinicalTrials.gov REST API for searching and retrieving clinical trial data (`L2` `A` `TypeScript`).
- [M3 MIMIC MCP](https://github.com/rafiattrach/m3) - Query MIMIC-IV medical data via natural language for clinical research (`L3` `B` `Python`).
- [MCP Simple PubMed](https://github.com/andybrandt/mcp-simple-pubmed) - Popular standalone PubMed MCP server for biomedical literature search (`L2` `A` `Python`).
- [Protein Structure Analyzer](https://github.com/Augmented-Nature/AlphaFold-MCP-Server) - Protein structure analysis via MCP for research and drug discovery workflows (`L2` `D`).
- [Standalone PubMed MCP](https://github.com/rikachu225/mcp-pubmed-server) - Standalone PubMed search server for biomedical literature access and citation retrieval (`L2` `A`).
- [TealFlow MCP](https://github.com/Appsilon/TealFlowMCP) - Build Teal R Shiny clinical trial analysis apps with AI assistance (`L2` `B` `Python`).

## Population Health and Value-Based Care

- [Apple Health MCP Server](https://github.com/the-momentum/apple-health-mcp-server) - Access exported Apple Health data with built-in analytics for consumer health and population health workflows (`L3` `D`).
- [PopHIVE MCP Server](https://github.com/Cicatriiz/pophive-mcp-server) - Yale PopHIVE population health data for community health analysis and value-based care (`L3` `B` `JavaScript`).

## Workflow Bundles

Pre-configured MCP stacks for common healthcare workflows.

- **Denial Fighter** - Analyze, appeal, and prevent claim denials with NCD/LCD lookup, ICD-10 validation, and clinical evidence search.
- **Prior Auth Stack** - CMS-0057 aligned prior authorization workflow with coverage determination and FHIR submission.
- **Clinical Reference Kit** - Point-of-care reference tools for clinicians including drug info, literature search, and genomics.
- **FHIR Interop Suite** - Complete FHIR integration toolkit for CMS-0057 and HTI-1 compliance.
- **Compliance Suite** - Quality reporting and regulatory compliance with Medicare policy monitoring and HIPAA guardrails.

## Footnotes

### Rating Methodology

All HIPAA compliance levels and clinical validity scores are point-in-time architectural assessments, not ongoing guarantees or HIPAA certifications. Organizations must conduct their own due diligence before deploying any MCP server in a clinical or production environment.

### CMS-0057 and HTI-1

Several FHIR MCP servers in this list directly support compliance with CMS-0057-F (Interoperability and Prior Authorization) and HTI-1 (Health Data, Technology, and Interoperability) federal mandates effective 2026-2027.

## Contributing

See [contributing.md](contributing.md) for how to submit a healthcare MCP server to this list.
