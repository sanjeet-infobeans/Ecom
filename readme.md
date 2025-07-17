Project Requirement Document: AI-Powered Document Management SaaS Platform

📅 Project Title:
CompliDocs — A Multi-Tenant Document Management System for Audit & Compliance Processes
💼 Stakeholders:
Product Owner: Sanjeet Patel


Business Analyst: ChatGPT (BA Mode)


Technical Project Manager: ChatGPT (TPM Mode)


End Users: Project Managers, Architects, QA, Developers, Finance, Clients, Auditors



✅ Project Overview:
CompliDocs is a SaaS-based platform that enables organizations to manage, discover, and track audit- and compliance-related documents across SDLC phases, adhering to standards such as CMMI Level 3, CMMI Level 5, and ISO.
Each company registers its account and customizes its process documents and audit practices. Employees access the platform via subdomain or slug-based URLs, perform role-based scenario queries (e.g., "Client Onboarding"), and use AI tools to find relevant process templates.

🔤 Key Features & Modules
1. Tenant Onboarding & Management
Company registration


Subdomain/slug generation


Select audit/compliance frameworks


Upload company-specific templates and workflows


Manage user roles and permissions


2. User & Role Management
Role-based login and access


Role switching for multi-functional users


Role-to-document visibility mapping


3. Document Repository
Upload documents with tags (e.g., "Requirement Gathering", "QA Checklist")


Categorize by SDLC phase


Version control


Metadata: author, compliance type, role visibility


4. AI Assistant (RAG Model)
Query using scenario+role (e.g., "As a QA, what do I need for test planning?")


AI returns document and process recommendations


Context-aware, scoped to tenant-specific data


5. Workflow Tracker
Assign document templates to a project


Track status: in progress, completed, skipped


Workflow save and resume feature per project


6. Audit Dashboard
Org-level view of projects and document status


Report generation for compliance audits


Drill-down by project, document type, and user


7. Admin Panel
Invite/remove users


Upload/update org-wide templates


Configure audit processes per tenant


View all workflows created in org


8. Notification System
Alert users for pending document steps


Notify admins for skipped compliance items


Trigger audits and report generation deadlines



⚖️ Architecture Overview
Frontend: React.js, Redux Toolkit, TailwindCSS
Backend: Node.js, Express.js, REST API / GraphQL
AI Layer: Langchain + Vector DB (ChromaDB / Weaviate) for per-tenant RAG
Database: MongoDB (multi-tenant collections with tenant_id scoping)
File Storage: AWS S3 / GCP Storage
Authentication: Firebase Auth / Auth0 with RBAC
Deployment: Docker + Nginx + EC2 (or Kubernetes in phase 2)

📆 Milestones
✅ Phase 1: MVP
#
Milestone
Duration
Owner
1
Tenant Registration Module
3 days
Backend Dev
2
Role-Based Auth Flow
3 days
Backend Dev
3
Document Repository (CRUD + Tags)
5 days
Fullstack
4
AI Assistant (RAG for scenario)
6 days
AI Engineer
5
Workflow Tracker UI + Logic
4 days
Fullstack
6
Audit Dashboard
4 days
Backend Dev
7
Org Admin Panel
3 days
Frontend Dev
8
Notifications
3 days
Backend Dev
9
Testing & QA
3 days
QA Lead


Total (MVP)
34 days



🌟 Phase 2: Enhancements
Subdomain DNS-based routing


Project portfolio dashboards


Document annotation & approval flows


Company-level AI model fine-tuning support


Audit log export & integration with Jira/Confluence



📃 Database Collections (MongoDB)
tenants
{
  "_id": ObjectId,
  "slug": "acme",
  "company_name": "Acme Inc.",
  "audit_compliance": ["CMMI-5", "ISO"],
  "created_at": Date
}
users
{
  "_id": ObjectId,
  "tenant_id": ObjectId,
  "email": "user@acme.com",
  "role": "QA",
  "permissions": [...]
}
documents
{
  "_id": ObjectId,
  "tenant_id": ObjectId,
  "title": "Test Plan",
  "phase": "Execution",
  "tags": ["QA", "Compliance"],
  "url": "s3://docs/..."
}
projects
{
  "_id": ObjectId,
  "tenant_id": ObjectId,
  "project_name": "ABC Migration",
  "workflow_steps": [
    { "document_id": ObjectId, "status": "completed" }
  ]
}

🖄 Entity-Relationship (ER) Diagram
Entities:
Tenants


Users


Documents


Projects


Relationships:
A Tenant has many Users


A Tenant has many Documents


A Tenant has many Projects


A Project has many Workflow Steps (each mapping to a Document)


[Tenants] ---< [Users]
    |
    +---< [Documents]
    |
    +---< [Projects] ---< [Workflow Steps] >--- [Documents]

🔄 Functional Workflow Diagram (Textual)
User accesses https://yourapp.com/acme
     |
     +---> Tenant Context Loaded
     |
     +---> User Login (Role: Architect)
                |
                +---> Scenario: "Client Onboarding"
                        |
                        +---> AI Query → Return List of Docs
                                |
                                +---> User Selects Docs + Saves Workflow to Project
                                         |
                                         +---> Tracks Document Completion Status
                                                |
                                                +---> Visible on Audit Dashboard

📖 Summary
This platform transforms the way companies track compliance and documentation across projects. Using AI, role-based flows, and a multi-tenant foundation, it ensures traceability, governance, and audit readiness in a scalable, modern SaaS design.


