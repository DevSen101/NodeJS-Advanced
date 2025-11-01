# Use Node LTS for stability
FROM node:lts-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install root dependencies (if any)
RUN npm install --omit=dev

# Copy and install client dependencies
COPY client/package*.json ./client/
WORKDIR /app/client
RUN npm install --omit=dev
RUN npm run build

# Copy and install server dependencies
WORKDIR /app
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install --omit=dev

# Copy the rest of the app (client + server code)
WORKDIR /app
COPY . .

# Switch to non-root user for safety
USER node

# Expose API port
EXPOSE 8000

# Start the server
CMD ["npm", "start", "--prefix", "server"]
