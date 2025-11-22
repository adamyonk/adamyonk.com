# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source
COPY . .

# Build the site
RUN npm run publish:prod

# Production stage
FROM caddy:2-alpine

# Copy built site
COPY --from=builder /app/_public /srv/_public

# Copy Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose port (Dokploy will map this)
EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
