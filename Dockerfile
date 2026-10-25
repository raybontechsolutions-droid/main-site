# ------------------------------------------------------------------
# Production image — serves the static export (same output as GitHub Pages)
#
#   docker build -t raybon-main-site .
#   docker run -p 3000:80 raybon-main-site      → http://localhost:3000
#
# Pass a base path if deploying under a subpath, e.g.:
#   docker build --build-arg NEXT_PUBLIC_BASE_PATH=/main-site .
# ------------------------------------------------------------------
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG NEXT_PUBLIC_BASE_PATH=""
ENV NEXT_PUBLIC_BASE_PATH=$NEXT_PUBLIC_BASE_PATH
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM nginx:alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
