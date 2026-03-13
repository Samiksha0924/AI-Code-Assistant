# AI Code Assistant– Code Execution Chatbot

## Project Overview
This project is a Code Execution Chatbot where users can:
- Chat with a bot
- Trigger a coding mode using chat input
- Select a programming language (Python)
- Write, validate, and execute code
- View execution output and errors in real time

The application is designed to support multiple users simultaneously, with each request handled independently by the backend.

## Features Implemented

### Chat Functionality
- Chat interface on the right panel
- Conversation history is preserved per session
- Static response supported for the trigger phrase "let’s code"

### Code Editor Trigger
- Typing "let’s code" in chat opens a language selection popup
- Currently supports Python

### Code Editor
- Python editor displayed on the left panel
- Built using Monaco Editor
- Includes line numbers and syntax highlighting

### Code Execution
- Run button to execute Python code
- Validate button to perform basic code validation
- Output panel displays program output and errors

### Security & Validation
- Detects possible infinite loops
- Execution timeout enforced
- Prevents server blocking

### Multi-User Support
- Backend is stateless
- Each user request is handled independently
- Multiple users can run code concurrently

## Project Structure

Samiksha-RD-Assignment/
├── frontend/
│   ├── src/
│   ├── package.json
│   └── README.md
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
└── README.md

## Platform & OS Requirements
- OS: Windows / macOS / Linux
- Node.js: v18+
- npm: v8+
- Python: v3.9+
- Browser: Chrome / Edge / Firefox

## Setup Instructions

### Backend
cd backend  
npm install  
npm start  

Server runs on http://localhost:5000

### Frontend
cd frontend  
npm install  
npm start  

App runs on http://localhost:3000

## How to Use
1. Open the app
2. Type "let’s code" in chat
3. Select Python
4. Write code
5. Click Validate or Run
6. View output

## References
- React.js
- Node.js
- Express
- Monaco Editor
- Python
- ChatGPT (OpenAI)

## Author
Samiksha Sunil Abdar
