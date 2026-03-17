# Använd en specifik version för reproducerbarhet
FROM node:20-alpine3.22

# Skapa en icke-root användare för säkerhet
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Sätt arbetsmapp
WORKDIR /app

# Kopiera package-filer och installera beroenden
COPY package*.json ./
RUN npm ci --only=production

# Kopiera källkod
COPY src/ ./src/

# Byt till icke-root användare
USER appuser

# Exponera port
EXPOSE 3000

# Starta applikationen
CMD ["node", "src/app.js"]