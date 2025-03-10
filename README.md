# Dewacloud Academy Node.js Deployment Hands On
Original source: [Next.js Feature Showcase App](https://github.com/yaseenmustapha/nextjs14-app?tab=readme-ov-file)

### Getting Started

1. **Install dependencies**
```
cd CDN-Next-Showcase
npm install --omit=optional
```

2. **Fill ecosystem.config.js file with the appropriate configurations**

3. **Create .env**
```
cp .env.example .env
```

4. **Populate .env**: Create database connection string using database credentials

5. **Generate Prisma Client, migrate, and seed database**
```
npx prisma generate
npx prisma migrate deploy
npm run seed
```

6. **Start the server**
#### Development
```
npm run dev
```
#### Production
```
npm run build
npm run start
```

User credential:
Email: user1@example.com
Password: securepassword
