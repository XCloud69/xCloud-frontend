# 🌩️ XCloud — The Self-Hosted Intelligent Collaboration Platform (Frontend)

XCloud is a **self-hosted, AI-powered collaboration platform** that unifies cloud storage, real-time meetings, chat, and intelligent assistance into a single private ecosystem.  
This repository contains the **frontend application** for the XCloud project, built to deliver a seamless and intelligent user experience across all collaboration features.

---

##  Overview

In a world full of fragmented digital tools — Zoom for meetings, Google Drive for files, Slack for chat — **XCloud** provides an all-in-one solution designed for **privacy, productivity, and intelligence**.

The frontend allows users to:
- Host and organize files securely on their own infrastructure.
- Join real-time meetings and chat with team members.
- Interact with a local AI assistant for summarization, voice commands, and task automation.
- Enjoy full control over data without relying on third-party services.

---

##  Key Features

###  Collaboration & Productivity
- **Secure File Management** – Browse, upload, and share files stored locally.  
- **Video Meetings & Chat** – Integrated communication tools without external dependencies.  
- **Smart Calendar** – Context-aware reminders connected to your meetings and tasks.

###  AI Integration
- **Voice Assistant** – Perform actions through natural language commands.  
- **Automatic Transcription & Summarization** – Process meeting recordings locally with AI.  
- **Context-Aware Q&A** – Ask questions like “What did we decide about Project Phoenix last week?” and get instant, relevant answers.  
- **Automated Task Extraction** – Detects and adds tasks from meetings or chat discussions.

###  Privacy & Control
- 100% **self-hosted** and **offline-first** — no external cloud providers.  
- All data is processed using **local AI models** (e.g., Whisper.cpp, Phi-3-mini).  
- **End-to-end encryption** and secure authentication.  
- Modular architecture to easily swap or upgrade AI components.

---

## Tech Stack (Frontend)

| Technology | Purpose |
|-------------|----------|
| **React (TypeScript)** | Component-based UI framework |
| **Vite** | Fast development and build tool |
| **Shadcn/UI** | UI component library |
| **Framer Motion** | Animations and transitions |
| **React Query (TanStack Query)** | Server-state management |
| **React Router** | Client-side routing |
| **Zustand** | State management |
| **Axios** | API communication |
| **WebRTC** | Real-time meetings and video streaming |
| **Socket.io** | Chat and real-time updates |

---
## Project Setup (Using pnpm)

### 1. Clone the Repository

```bash
git clone git@github.com:XCloud69/xCloud-frontend.git
cd xCloud-frontend
```

### 2. Install Dependencies

```bash
pnpm install
```
### 3. Configure Environment Variables
Create a `.env` file in the root directory and add necessary environment variables. Refer to `.env.example` for guidance.

### 4. Run the Development Server

```bash
pnpm dev
```

