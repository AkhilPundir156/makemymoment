Hello Welcome to Make Moment.# Moment Recorder

**Moment Recorder** is a full-featured screen recording platform with a **CLI tool**, **browser extension**, and **web dashboard**.  
It allows users to record, upload, and share screen recordings seamlessly using a scalable backend and cloud storage.

---

## 📂 Project Structure

```
make-moment/
├── dashboard/ # React.js frontend → Vercel
├── server/ # API service → Render
├── cli/ # CLI tool → npm package
├── extension/ # Browser extension → Chrome
└── addons/ # Shared utilities and types
```


Each folder contains its own `README.md` describing its purpose and usage.

---

## 🚀 Features

- **CLI Tool:** Record, upload, and manage screen recordings from the terminal.  
- **Browser Extension:** Record screens or tabs directly from the browser.  
- **Web Dashboard:** Manage recordings, playback videos, and generate shareable links.  
- **Server API:** Handles authentication, presigned S3 uploads, and metadata storage.  
- **Cloud Storage:** AWS S3 for storing recordings.  

---

## ⚡ Quick Start

1. Clone the repo:
```bash
git clone https://github.com/AkhilPundir156/makemoment.git

Install dependencies in each folder as needed.

Follow individual README.md in dashboard/, backend/, cli/, or extension/ to run or deploy.

```
📌 Notes

Backend handles auth, presigned uploads, and DB logging.

CLI and Extension upload directly to S3; backend only orchestrates requests.

Each subfolder is deployable separately.
