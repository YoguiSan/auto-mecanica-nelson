# ---------- Build stage ----------
FROM node:24-alpine AS builder

WORKDIR /app

# Copy dependency manifests first for better layer caching
COPY package*.json ./

# Ethyl UI is a local file dependency, so it must be present before npm ci
COPY packages/ethyl-ui ./packages/ethyl-ui

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy the application source
COPY . .

# Generate the static Next.js site
RUN npm run build


# ---------- Runtime stage ----------
FROM nginx:alpine

# Optional: remove nginx's default files
RUN rm -rf /usr/share/nginx/html/*

# Copy Next.js's static export
COPY --from=builder /app/out /usr/share/nginx/html

# Optional custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
