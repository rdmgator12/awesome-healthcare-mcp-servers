# Awesome Healthcare MCP Server [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<p align="center">
  <img src="media/logo.svg" width="400" alt="Awesome Healthcare MCP Servers">
</p>

> A curated list of healthcare Model Context Protocol (MCP) servers for clinical decision support, FHIR interoperability, revenue cycle management, medical research, and HIPAA-compliant AI workflows.

Every server is independently rated for **HIPAA compliance** (L1–L5) and **clinical validity** (A–D) by a board-certified physician.

**Last updated:** June 5, 2026

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

> All ratings are point-in-time architectural assessments, not certifications. Full rating criteria are documented in the Contributing section below.

## Revenue Cycle Management 

- [EasyPA](https://easypa.ai/mcp) - AI-native prior authorization platform with patient lookup, eligibility checks, PA status tracking, case summaries, denial intake, appeal generation, submission analysis, and dashboard metrics; SOC 2 Type II, HIPAA-compliant with BAA, AES-256, audit logging, and RBAC (`L5` `B`).
- [FHIRfly MCP](https://github.com/fhirfly-io/fhirfly-mcp-server) - 50+ healthcare reference tools spanning NDC, NPI, RxNorm, LOINC, ICD-10, SNOMED, NCCI edits, MUE limits, Medicare PFS/RVU, LCD/NCD coverage, HCPCS, MS-DRG, HCC risk adjustment, and FDA drug labels (`L2` `C` `TypeScript`).
- [GPH Intelligence MCP](https://github.com/Crindo2/gph-mcp-server) - Healthcare service provider directory across 25 categories (medical billing, credentialing, EHR consultants, healthcare attorneys, compliance firms) covering 103,000+ verified vendors in all 50 states; quality-scored matching for practice managers and RCM teams (`L2` `C`).
- [Healthcare Billing Codes](https://github.com/contextkits/healthcare-billing-codes) - CPT, ICD-10, and HCPCS billing code lookup and search for revenue cycle workflows (`L2` `C` `Python`).
- [MedBill Scanner](https://github.com/akshaykanni22/medbill-scanner) - Open-source medical bill anomaly detector for patient-side appeals with local OCR, on-device PII redaction, CMS Medicare reference-price comparison, and AI-drafted dispute letters; bill data never transmitted to third parties (`L4` `C` `Python`).
- [Medicaid MCP Server](https://github.com/openpharma-org/medicaid-mcp-server) - Medicaid public data access including NADAC drug pricing (1.5M NDCs), Federal Upper Limits, state formularies, and drug rebate program data via data.medicaid.gov (`L2` `C` `JavaScript`).
- [Medicare MCP](https://github.com/openpharma-org/medicare-mcp) - CMS Medicare provider services, prescriber data, hospital utilization, drug spending, and Part B ASP pricing via the Socrata API with quarterly automated updates (`L2` `C` `JavaScript`).
- [MedScribe RCM-MCP](https://github.com/joelenoch0/medscribe-rcm-mcp) - End-to-end RCM pipeline chaining ICD-10 extraction, NOS/NEC sentinel trapping (22 codes), NCCI/MUE claim validation with 0-100 denial risk scoring, and CARC/RARC appeal generation; Presidio-based PHI handling and 42 CFR Part 2 consent middleware (`L4` `C` `Python`).
- [ReimbursementEngine](https://github.com/rdmgator12/RE-MCP-) - Medicare coverage determination, ICD-10 coding, NPI validation, payer policy analysis, PubMed search, and bioRxiv/medRxiv preprint search across 18 tools (`L4` `C`).

## Clinical Decision Support

- [BioThings MCP](https://github.com/longevity-genie/biothings-mcp) - Query genes, genetic variants, drugs, and taxonomic information via the BioThings API (`L2` `B` `Python`).
- [CareTrace MCP](https://github.com/jefftrojan/caretrace-mcp) - Clinical timeline reconstruction with medical-entity extraction, FHIR R4 bundle generation, and full patient-timeline + risk-summary pipeline; SSE-deployed on Hugging Face Spaces for the Prompt Opinion platform (`L3` `D` `Python`).
- [CliniServer](https://github.com/CyprianFusi/mcp-cliniserver) - Symptom extraction from clinical text with negation/uncertainty flags, Claude-generated differential diagnosis and treatment recommendations, and PubMed literature surfacing (`L2` `D` `Python`).
- [DrugBank MCP Server](https://github.com/openpharma-org/drugbank-mcp-server) - Access 17,430+ drugs (13,166 small molecules, 4,264 biotech) with targets, enzymes, metabolic pathways, interactions, and regulatory data from the DrugBank Full Database (`L2` `B` `JavaScript`).
- [Evidence-Based Medicine MCP](https://github.com/chris-lovejoy/evidence-based-medicine-mcp) - Evidence-based medical advice MCP for clinical decision support workflows (`L2` `B` `TypeScript`).
- [FDA MCP Server](https://github.com/openpharma-org/fda-mcp) - Comprehensive FDA pharmaceutical intelligence covering 47,000+ drug products, FAERS adverse events, drug recalls, Orange Book small-molecule approvals, and Purple Book biologics (`L2` `B` `JavaScript`).
- [Healthcare Data Hub](https://github.com/Cicatriiz/healthcare-mcp-public) - All-in-one server for FDA drug info, PubMed, medRxiv, NCBI Bookshelf, clinical trials, ICD-10, DICOM metadata, and medical calculator (`L2` `B` `Node.js`).
- [ICD-10 MCP](https://github.com/stabgan/mcp-icd10) - Offline ICD-10-CM FY2026, ICD-9-CM, and ICD-10 WHO 2019 lookup with 124K codes and 102K bidirectional GEMs crosswalk mappings; FTS5 full-text search in an embedded SQLite DB with zero network calls (`L2` `B` `Python`).
- [Lab Results Analyzer MCP](https://github.com/JuanM94/mcp-lab-analyzer) - FHIR-based lab-results retrieval, trend analysis, abnormal flagging, and patient-friendly summary generation across 20+ reference-range-backed common lab tests; built on Prompt Opinion's scoped-token FHIR context (`L3` `D` `Python`).
- [MCP-LOINC](https://github.com/Kryzo/mcp-Loinc) - LOINC API wrapper for medical terminology standardization and lab code lookup (`L2` `B` `Python`).
- [MedAdapt Content Server](https://github.com/ryoureddy/medadapt-content-server) - AI-assisted medical learning with adaptive content from PubMed, NCBI Bookshelf, and user documents (`L2` `B` `Python`).
- [MedGemma MCP](https://github.com/Tom-R-Main/medgemma-mcp) - Local-first medical AI built on Google's MedGemma 4B-IT for chest X-ray, CT, dermoscopy, fundus, and histopathology analysis plus FHIR record summarization and structured extraction from clinical free text, with chain-of-thought prompting and confidence-scored output (`L3` `D` `Python`).
- [Medical Calculator MCP](https://github.com/u9401066/medical-calc-mcp) - 121 validated clinical calculators across anesthesiology, critical care, pediatrics, nephrology, pulmonology, cardiology, hematology, emergency medicine, hepatology, and acid-base/metabolic medicine; DDD-onion architecture with 2,073 tests and 244 PMID + 205 DOI citations baked into the formula references (`L2` `B` `Python`).
- [Medical-MCP](https://github.com/JamesANZ/medical-mcp) - Comprehensive medical information from FDA, WHO, PubMed, RxNorm, and Google Scholar (`L2` `B` `Python`).
- [MedVision MCP](https://github.com/u9401066/medvision-mcp) - Chest X-ray analysis via Visual RAG combining RAD-DINO embeddings, FAISS similarity search, and DenseNet-121 classification across 18 pathologies with DICOM support and interactive ROI annotation (`L3` `D` `Python`).
- [NCCN Guidelines MCP](https://github.com/gscfwid/NCCN_guidelines_MCP) - NCCN cancer treatment guidelines access for oncology decision support (`L2` `A` `Python`).
- [NexOnco MCP](https://github.com/Nexgene-Research/nexonco-mcp) - Oncology clinical evidence and precision medicine decision support (`L2` `B` `Python`).
- [NICE MCP Server](https://github.com/kieran-heidi/medical-mcp-server) - UK NICE Clinical Guidelines access for evidence-based clinical decision support (`L2` `A`).
- [Oncofiles](https://github.com/peter-fusek/oncofiles) - AI-powered medical document management for cancer patients and caregivers with OCR, lab value tracking with reference ranges, pre-cycle safety checks, and PubMed/ClinicalTrials.gov integration across 76 tools (`L4` `B` `Python`).
- [Pharmacogenomics MCP](https://github.com/Julius-Schmidt/mcp-pharmacogenomics) - Real-time pharmacogenomics across ClinVar variant pathogenicity, PharmGKB drug-gene interactions with CPIC/DPWG dosing guidelines, gnomAD population frequencies, Open Targets drug-target-disease associations, and ClinicalTrials.gov (`L2` `B` `Python`).
- [SNOMED CT MCP](https://github.com/eigenbau/mcp-snomed-ct) - SNOMED CT concept lookup via FHIR R4 terminology server for clinical coding (`L2` `A` `Python`).

## FHIR and Health Data Interoperability

- [AEHRC FHIR Tools](https://github.com/aehrc/mcp-fhir-tools) - FHIR tools by Australian e-Health Research Centre (CSIRO) for health data interoperability (`L4` `B` `TypeScript`).
- [AgentCare MCP](https://github.com/Kartha-AI/agentcare-mcp) - Healthcare tools and prompts for interacting with FHIR data and medical resources on EMRs like Cerner and Epic (`L4` `B` `TypeScript`).
- [AWS HealthLake MCP Server](https://awslabs.github.io/mcp/servers/healthlake-mcp-server) - MCP server for AWS HealthLake FHIR operations with 11 tools for FHIR resource management and automatic datastore discovery (`L5` `B` `Python`).
- [Azure FHIR MCP Server](https://github.com/erikhoward/azure-fhir-mcp-server) - Azure Health Data Services FHIR MCP server for cloud-native health data integration (`L4` `B` `Python`).
- [CDS Hooks FHIR MCP](https://github.com/mj991218/mcp-fhir) - FHIR R4 MCP with 17 tools including CDS Hooks integration (patient-view, order-select/sign, encounter-start/discharge), FHIR Consent checking, AuditEvent logging, RBAC, and multi-persona output for clinician/patient/admin contexts (`L4` `B` `Python`).
- [DICOM MCP Server](https://github.com/ChristianHinge/dicom-mcp) - Query, read, and move medical images and reports from PACS and other DICOM-compliant systems (`L3` `B` `Python`).
- [EHR-MCP](https://github.com/jsfaulkner86/ehr-mcp) - Framework-agnostic SMART-on-FHIR interoperability layer for multi-agent healthcare AI, returning typed `ClinicalContextBundle` from Epic, Cerner, and any FHIR R4 EHR (`L4` `B` `Python`).
- [Epic FHIR MCP Server](https://github.com/albertorb/mcp-server-fhir) - Production-ready Epic FHIR R4 connector with OAuth2 Backend Systems Flow + JWT authentication, supporting both stdio (Claude Desktop) and Streamable HTTP transports for web clients (`L4` `B` `Python`).
- [Health Record MCP](https://github.com/jmandel/health-record-mcp) - Connect to an EHR and make clinical data available via MCP, by Josh Mandel of SMART Health IT (`L4` `A` `TypeScript`).
- [LangCare MCP FHIR](https://github.com/langcare/langcare-mcp-fhir) - Enterprise-grade FHIR R4 proxy for AI agents with 40+ clinical skills, multi-EMR support (Epic, Cerner, GCP), and SMART-on-FHIR auth (`L4` `B` `Go`).
- [MCP FHIR Patient Index](https://github.com/Shaumik-Ashraf/mcp-fhir-patient-index) - Master patient index (MPI) on Rails 8 with conformant FHIR R4 API, MCP server, and admin web UI for patient CRUD; English/US-only and dev-stage with explicit security caveats requiring credential regeneration and SOC 2 hardening before production deployment (`L3` `D` `Ruby`).
- [Medplum MCP Server](https://github.com/medplum/medplum-mcp-server) - Official Medplum MCP proxy exposing FHIR resources from Medplum-hosted or self-hosted FHIR backends to AI agents (`L4` `B` `TypeScript`).
- [Momentum FHIR MCP Server](https://github.com/the-momentum/fhir-mcp-server) - Natural language interface for healthcare data that eliminates weeks of FHIR learning and prevents LLM hallucination of medical codes (`L4` `B` `TypeScript`).
- [Orthanc DICOM MCP](https://github.com/sscotti/dicom-mcp) - DICOM MCP with Orthanc PACS integration, radiology report generation, FHIR ImagingStudy, and mini-RIS (`L3` `B` `Python`).
- [Quiquemz FHIR MCP](https://github.com/quiquemz/fhir-mcp-server) - C# FHIR R4 MCP server with CRUD, search, transactions, and Azure FHIR Server support (`L4` `B` `C#`).
- [Secure FHIR MCP](https://github.com/xSoVx/fhir-mcp) - HIPAA-hardened FHIR MCP with PHI masking, break-glass access, OWASP security, and audit logging (`L4` `B` `TypeScript`).
- [WSO2 FHIR MCP Server](https://github.com/wso2/fhir-mcp-server) - Expose any FHIR server or API as an MCP server with SMART-on-FHIR authentication and full CRUD on FHIR resources (`L4` `B` `TypeScript`).

## Quality Compliance and Regulatory

- [DataMimic](https://github.com/rapiddweller/datamimic) - Deterministic synthetic healthcare test data generation for CI/CD and analytics, HIPAA-safe with MCP integration (`L3` `C` `Python`).
- [GxP Regulations MCP](https://github.com/Ansvar-Systems/gxp-regulations-mcp) - Pharmaceutical regulatory corpus covering EudraLex GMP/GVP/GDP, US cGMP, and ICH GCP for manufacturing and clinical-trial compliance; available via hosted Ansvar Gateway with OAuth or self-hostable with build-it-yourself corpus (`L2` `C` `TypeScript`).
- [Innovaccer HMCP](https://github.com/innovaccer/Healthcare-MCP) - Specialized MCP extension with HIPAA guardrails, OAuth2, audit trails, and compliance layer for enterprise healthcare AI (`L5` `C`).
- [K01 MCP Server](https://github.com/K01labs/k01-mcp-server) - Differentially-private synthetic FHIR cohort generation and querying across R4/R5 with demographic and clinical constraints, deterministic seeding, and zero real-patient-data exposure for CI/CD, dev, and analytics (`L3` `C`).
- [OMOP MCP](https://github.com/OHNLP/omop_mcp) - OMOP concept mapping via LLMs by Mayo Clinic NLP group for clinical data standardization (`L2` `B` `Python`).
- [PyOMOP](https://github.com/dermatologist/pyomop) - OHDSI/OMOP clinical data management with FHIR import for observational research (`L3` `B` `Python`).

## Life Sciences and Research

- [3D Slicer MCP](https://github.com/brainbloodbarrier/3dslicer-claude-bridge) - Medical imaging integration via 3D Slicer for radiology and surgical planning workflows (`L3` `B`).
- [BioContext AI Meta MCP](https://github.com/biocontext-ai/meta-mcp) - Meta-MCP server providing dynamic, on-demand access to all installable MCP servers in the BioContextAI biomedical registry with LLM-powered search, semantic discovery, and minimal context consumption (`L2` `B` `Python`).
- [BioMCP](https://github.com/genomoncology/biomcp) - Clinical trials, genomics, PubMed, and variant annotation in Rust for biomedical research workflows (`L2` `B` `Rust`).
- [CDISC Library MCP](https://github.com/Cicatriiz/cdisc-library-mcp-server) - CDISC Library access for clinical data standards and regulatory submissions (`L2` `B` `JavaScript`).
- [ClinicalTrials.gov MCP](https://github.com/cyanheads/clinicaltrialsgov-mcp-server) - ClinicalTrials.gov REST API for searching and retrieving clinical trial data (`L2` `A` `TypeScript`).
- [GenePattern MCP](https://github.com/genepattern/genepattern-mcp) - Official GenePattern server bridging AI assistants to 200+ peer-reviewed bioinformatics modules for gene expression, single-cell, and genomic analysis (`L2` `B` `Python`).
- [GenomeMCP](https://github.com/Eldergenix/GenomeMCP) - Clinical genomics intelligence via ClinVar, gnomAD, Reactome, and NCBI-BLAST with variant interpretation and population genetics for precision medicine workflows (`L2` `B` `Python`).
- [M3 MIMIC MCP](https://github.com/rafiattrach/m3) - Query MIMIC-IV medical data via natural language for clinical research (`L3` `B` `Python`).
- [MCP Simple PubMed](https://github.com/andybrandt/mcp-simple-pubmed) - Popular standalone PubMed MCP server for biomedical literature search (`L2` `A` `Python`).
- [Medical MCPs](https://github.com/pascalwhoop/medical-mcps) - 100+ unified tools across 14 biomedical APIs including Reactome, KEGG, UniProt, OMIM, ChEMBL, and OpenFDA (`L2` `B` `Python`).
- [Medical Research MCP Suite](https://github.com/ezhou89/medical-research-mcp-suite) - Cross-database medical research intelligence unifying ClinicalTrials.gov, PubMed, and FDA with AI analysis (`L2` `B` `TypeScript`).
- [Precision Medicine MCP](https://github.com/lynnlangit/precision-medicine-mcp) - Multi-omics precision medicine platform with genomics, spatial transcriptomics, imaging, and clinician-in-the-loop workflows (`L3` `B` `Python`).
- [Protein Structure Analyzer](https://github.com/Augmented-Nature/AlphaFold-MCP-Server) - Protein structure analysis via MCP for research and drug discovery workflows (`L2` `D`).
- [PubMed MCP](https://github.com/chrismannina/pubmed-mcp) - Advanced PubMed search with citation export (BibTeX, APA, MLA), author search, journal analysis, and article comparison (`L2` `A` `Python`).
- [Reactome MCP](https://github.com/reactome/reactome-mcp) - Official Reactome MCP server exposing 40+ tools for pathway search, enrichment analysis, ID mapping, species/disease annotation, and biological pathway data export (`L2` `B` `TypeScript`).
- [TealFlow MCP](https://github.com/Appsilon/TealFlowMCP) - Build Teal R Shiny clinical trial analysis apps with AI assistance (`L2` `B` `Python`).

## Population Health and Value-Based Care

- [Apple Health MCP](https://github.com/neiltron/apple-health-mcp) - Query Apple Health data with SQL and natural language via DuckDB for consumer and population health workflows (`L3` `D` `TypeScript`).
- [Apple Health MCP Server](https://github.com/the-momentum/apple-health-mcp-server) - Access exported Apple Health data with built-in analytics for consumer health and population health workflows (`L3` `D`).
- [Oura MCP Server](https://github.com/schimmmi/oura-mcp-server) - Oura Ring health intelligence with chronotype classification, personalized sleep-need detection, 7-day forecasts, and multi-signal illness detection with 1-2 day advance warning (`L3` `D` `Python`).
- [PopHIVE MCP Server](https://github.com/Cicatriiz/pophive-mcp-server) - Yale PopHIVE population health data for community health analysis and value-based care (`L3` `B` `JavaScript`).

## Workflow Bundles

Pre-configured MCP stacks for common healthcare workflows.

### Denial Fighter

Analyze, appeal, and prevent claim denials with NCD/LCD lookup, ICD-10 validation, and clinical evidence search.

### Prior Auth Stack

CMS-0057 aligned prior authorization workflow with coverage determination and FHIR submission.

### Clinical Reference Kit

Point-of-care reference tools for clinicians including drug info, literature search, and genomics.

### FHIR Interop Suite

Complete FHIR integration toolkit for CMS-0057 and HTI-1 compliance.

### Compliance Suite

Quality reporting and regulatory compliance with Medicare policy monitoring and HIPAA guardrails.

## Footnotes

### Rating Methodology

All HIPAA compliance levels and clinical validity scores are point-in-time architectural assessments, not ongoing guarantees or HIPAA certifications. Organizations must conduct their own due diligence before deploying any MCP server in a clinical or production environment.

### CMS-0057 and HTI-1

Several FHIR MCP servers in this list directly support compliance with CMS-0057-F (Interoperability and Prior Authorization) and HTI-1 (Health Data, Technology, and Interoperability) federal mandates effective 2026-2027.

## Contributing

See [contributing.md](contributing.md) for how to submit a healthcare MCP server to this list.
