# 1. Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Копіюємо package.json та встановлюємо всі залежності
COPY package*.json ./
RUN npm install

# Копіюємо решту файлів проєкту
COPY . .

# Генеруємо Prisma client
RUN npx prisma generate

# Білдимо NestJS
RUN npm run build


# 2. Production stage
FROM node:18-alpine

WORKDIR /app

# Копіюємо лише продакшен залежності
COPY package*.json ./
RUN npm install --only=production

# Копіюємо побудований додаток з попереднього шару
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules

# Генеруємо Prisma Client ще раз (на всяк випадок)
RUN npx prisma generate

# Запускаємо міграції перед стартом сервера
CMD npx prisma migrate deploy && node dist/main
