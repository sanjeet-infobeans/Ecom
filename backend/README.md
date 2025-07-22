# 🛒 Ecom Microservices Backend

This project is a microservices-based backend for an e-commerce application built using Node.js. It follows a modular structure with an API Gateway and individual services, starting with the `user-service`.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone git@github.com:sanjeet-infobeans/Ecom.git
cd ecom
```

---

## 🛠️ Setup Instructions

### 🔧 Step 1: Setup Root Backend

```bash
cd backend
npm install
```

- Copy the example environment file:

```bash
cp .env.example .env
```

- Update the `.env` file with required environment variables.

---

### 🔧 Step 2: Setup `user-service`

```bash
cd backend/user-service
npm install
cp .env.example .env
```

- Update the `.env` file with required environment variables.

---

## 🏃‍♂️ Running the Services

### ▶️ Run API Gateway Only

```bash
cd backend
npm run start:api-gateway
```

### ▶️ Run `user-service` Only

```bash
cd backend
npm run start:user-service
```

### ▶️ Run All Services Together

```bash
cd backend
npm run dev
```

---

## 📌 Notes

- Ensure that `.env` files are properly configured before running the services.
- This setup supports independent service development and testing.
- Future microservices can be added under the `backend` folder and integrated via the API Gateway.
