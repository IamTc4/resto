# RestaurantBot AI - Prototype Guide

This guide explains how to run the RestaurantBot AI full-stack prototype locally.

## Prerequisites

- Node.js (v14+)
- MongoDB (running locally or a cloud URI)

## 1. Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure Environment:
    - Copy `.env.example` to `.env`
    - Update `MONGO_URI` if needed.
    - Set `OPENAI_API_KEY` (or leave as is to use the mock LLM service).
4.  Start the Server:
    ```bash
    npm start
    ```
    The server runs on `http://localhost:5000`.

## 2. Frontend Setup

1.  Navigate to the frontend directory:
    ```bash
    cd frontend/web
    ```
2.  Install dependencies (requires a React setup, currently scaffolded):
    ```bash
    npm install
    ```
3.  Start the Development Server:
    ```bash
    npm start
    ```
    The app runs on `http://localhost:3000`.

## 3. Mocking & Simulation

- **AI Service**: `backend/services/ai/llm.service.js` currently contains a mock implementation. It responds to keywords like "menu" or "hello" without needing an API key.
- **Database**: If MongoDB is not connected, the server will log a warning but continue running in a limited mode (depending on implementation).
- **Authentication**: `auth.middleware.js` is currently non-blocking for prototype ease.
- **Integrations**:
  - WhatsApp, Payment, and Delivery services are mocked in `integrations/` and `backend/services/external/` to simulate behavior without real API keys.
  - Notifications are logged to console.

## 4. Key Endpoints to Test

- **Chat**: `POST /api/chat/send` - Send a message to the bot.
- **Orders**: `POST /api/orders` - Create a mock order.
- **Analytics**: `GET /api/analytics/daily` - View mock daily stats.
- **Notifications**: `GET /api/notifications` - View mock notifications.
