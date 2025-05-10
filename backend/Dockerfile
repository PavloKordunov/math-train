# 1. Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Копіюємо package.json та встановлюємо всі залежності
COPY package*.json ./
RUN npm install

# Копіюємо лише Prisma schema і генеруємо Prisma Client
COPY ./prisma ./prisma
RUN npx prisma generate

# Копіюємо решту файлів проєкту
COPY . .

# Білдимо NestJS
RUN npm run build


# 2. Production stage
FROM node:20-alpine

WORKDIR /app

# Копіюємо лише продакшен залежності
COPY package*.json ./
RUN npm install --only=production

# Копіюємо побудований додаток і Prisma schema
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Запускаємо міграції перед стартом сервера
CMD npx prisma migrate deploy && node dist/main
