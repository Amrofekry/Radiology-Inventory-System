# 🏥 Radiology Inventory Management System

A modern, AI-powered inventory management platform designed specifically for radiology departments, hospitals, imaging centers, and healthcare organizations. The system centralizes equipment tracking, maintenance management, financial monitoring, and operational analytics into a single intuitive dashboard.

By combining intelligent search capabilities with real-time asset monitoring, the platform enables biomedical engineers, radiology managers, and healthcare administrators to efficiently manage critical imaging equipment throughout its entire lifecycle.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [System Dashboard](#system-dashboard)
- [Equipment Management](#equipment-management)
- [AI-Powered Search](#ai-powered-search)
- [Asset Lifecycle Management](#asset-lifecycle-management)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

# Overview

The **Radiology Inventory Management System** is a comprehensive web-based solution developed to streamline the management of medical imaging assets across healthcare facilities.

The platform provides centralized visibility into:

- Imaging equipment inventory
- Equipment operational status
- Maintenance schedules
- Department locations
- Financial valuation
- Warranty information
- Asset utilization metrics
- Procurement and funding records

The system is enhanced with **Artificial Intelligence (AI)** through Gemini API integration, allowing users to search inventory using natural language instead of traditional filters.

---

# Key Features

## 🤖 AI-Powered Equipment Search

Leverage Google's Gemini AI to search inventory using conversational language.

### Example Queries

```text
Show all active MRI scanners
Find equipment under maintenance
List CT scanners in Radiology Department
Show assets with expired warranties
Find the most expensive imaging devices
```

### Benefits

- Natural language understanding
- Faster equipment discovery
- Reduced search complexity
- Improved user experience
- Intelligent filtering and recommendations

---

## 📊 Interactive Dashboard

The dashboard provides a high-level operational overview of all radiology assets.

### Dashboard Metrics

- Total Equipment Count
- Active Equipment
- Equipment Under Maintenance
- Out-of-Service Assets
- Total Inventory Value
- Maintenance Statistics

### Visual Analytics

- Equipment Status Distribution
- Asset Value by Equipment Type
- Maintenance Trends
- Department-Based Asset Allocation
- Inventory Growth Tracking

---

## 🏥 Comprehensive Equipment Management

Manage and monitor every imaging asset from a centralized interface.

### Supported Equipment Types

- MRI Systems
- CT Scanners
- X-Ray Machines
- Ultrasound Systems
- Mammography Units
- Fluoroscopy Equipment
- PET/CT Systems
- Nuclear Medicine Devices
- Mobile Imaging Equipment

### Equipment Information Stored

| Category | Information |
|-----------|-------------|
| Identification | Asset ID, Serial Number, Equipment Name |
| Manufacturer | Vendor, Model Number, Manufacturer |
| Location | Building, Floor, Department, Room |
| Operational | Status, Installation Date, Usage State |
| Maintenance | Service Schedule, Last Service Date |
| Financial | Purchase Cost, Funding Source |
| Warranty | Warranty Status, Expiration Date |

---

# System Dashboard

The dashboard serves as the operational command center.

## Equipment Status Monitoring

Track equipment across multiple operational states:

| Status | Description |
|----------|-------------|
| 🟢 Active | Equipment operating normally |
| 🟡 Maintenance | Equipment undergoing scheduled maintenance |
| 🔴 Out of Service | Equipment unavailable for clinical use |
| 🔵 Reserved | Equipment allocated for future use |
| ⚪ Retired | Decommissioned equipment |

---

## Financial Overview

Gain visibility into asset investments.

### Financial Insights

- Total Inventory Valuation
- Equipment Cost Distribution
- Capital Investment Tracking
- Department Spending Analysis
- Asset Depreciation Monitoring
- Funding Source Analysis

---

# Equipment Management

## Asset Registration

The system provides a streamlined onboarding process for new equipment acquisitions.

### Captured Information

```text
Equipment Name
Equipment Type
Manufacturer
Model Number
Serial Number
Asset Tag
Purchase Date
Purchase Cost
Funding Source
Warranty Expiration
Department
Room Location
Maintenance Schedule
```

---

## Asset Detail Pages

Each equipment entry includes dedicated tabs for organized information management.

### 📄 Details Tab

- Asset Identification
- Manufacturer Information
- Technical Specifications
- Operational Status

### 📍 Location Tab

- Building Information
- Department Assignment
- Room Number
- Physical Placement

### 🔧 Maintenance Tab

- Service History
- Upcoming Maintenance
- Technician Notes
- Maintenance Status

### 💰 Financial Tab

- Acquisition Cost
- Funding Source
- Depreciation Information
- Financial Records

---

# Asset Lifecycle Management

Monitor equipment throughout its entire operational lifespan.

## Lifecycle Stages

```text
Procurement
    ↓
Installation
    ↓
Active Operation
    ↓
Preventive Maintenance
    ↓
Repair & Service
    ↓
Replacement Planning
    ↓
Retirement
```

### Lifecycle Benefits

- Improved asset utilization
- Reduced downtime
- Better maintenance planning
- Extended equipment lifespan
- Enhanced financial forecasting

---

# 📱 QR Code Integration

Every asset can be assigned a unique QR code.

### QR Code Benefits

- Instant equipment identification
- Quick access to asset records
- Faster maintenance workflows
- Reduced manual data entry
- Mobile-friendly asset tracking

### Example Use Cases

- Equipment inspections
- Preventive maintenance visits
- Inventory audits
- Department transfers

---

# Technology Stack

## Frontend

- React
- Next.js
- TypeScript
- Tailwind CSS

## Backend

- Node.js
- REST APIs

## AI Integration

- Google Gemini API

## Data Management

- Database Integration
- Asset Tracking Engine
- Analytics Processing

---

# Project Structure

```text
Radiology-Inventory-System/
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── dashboard/
│   ├── inventory/
│   ├── ai-search/
│   ├── maintenance/
│   ├── financial/
│   └── utils/
│
├── .env.local
├── package.json
├── next.config.js
└── README.md
```

---

# Demo

## Dashboard Overview

- Equipment status monitoring
- Financial analytics
- Asset distribution charts
- Department inventory insights

## AI Search Demonstration

Example:

```text
User: Show all active MRI scanners

AI:
Found 12 active MRI scanners across 4 departments.
```

## Equipment Detail Management

- Asset information
- Maintenance records
- Financial tracking
- Location management

### 🎥 Demo Video

[Watch Demo Video](https://drive.google.com/file/d/1dA5R6BrcD60likV6GLc5XQ81UgKRuEZd/view?usp=drive_link)

---

# Getting Started

Follow the steps below to run the project locally.

---

# Prerequisites

Ensure the following software is installed:

- Node.js (v18+ recommended)
- npm or yarn
- Gemini API Key

Verify installation:

```bash
node -v
npm -v
```

---

# Environment Variables

Create a file named:

```text
.env.local
```

Add the following:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

> Never commit API keys to public repositories.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/your-username/radiology-inventory-system.git
```

Navigate into the project directory:

```bash
cd radiology-inventory-system
```

Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

---

# Running the Application

Start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open your browser and visit:

```text
http://localhost:3000
```

The dashboard should now be running locally.

---

# Future Enhancements

### Planned Features

- User Authentication & Role Management
- Multi-Hospital Support
- Equipment Reservation System
- Predictive Maintenance Using AI
- Automated Service Reminders
- Barcode Support
- Mobile Application
- Asset Depreciation Calculator
- PDF Report Generation
- Advanced Analytics Dashboard
- Audit Trail & Activity Logs
- Integration with Hospital Information Systems (HIS)

---

# Security Considerations

- Secure API Key Management
- Role-Based Access Control (RBAC)
- Audit Logging
- Data Encryption
- Secure Authentication
- Backup & Recovery Mechanisms

---

# Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

## Developed For

Radiology Departments • Biomedical Engineering Teams • Healthcare Facilities • Medical Imaging Centers

**Smart Asset Management for Modern Healthcare.**
