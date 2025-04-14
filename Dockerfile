# Stage 1: Build the application
FROM node:20-slim AS builder

# Set the working directory
WORKDIR /app

# Copy only the dependency files for caching dependencies
COPY package.json yarn.lock ./

# Install dependencies (using cache if available)
RUN yarn install --production --network-timeout=600000

# Copy the application source code
COPY . .

# Build the Strapi application
RUN yarn build

# Stage 2: Run the application in production mode
FROM node:20-slim

# Set the working directory
WORKDIR /app

# ARG declarations for build-time environment variables
ARG HOST
ARG PORT
ARG APP_KEYS
ARG API_TOKEN_SALT
ARG ADMIN_JWT_SECRET
ARG TRANSFER_TOKEN_SALT
ARG DATABASE_CLIENT
ARG DATABASE_HOST
ARG DATABASE_PORT
ARG DATABASE_NAME
ARG DATABASE_USERNAME
ARG DATABASE_PASSWORD
ARG DATABASE_SSL
ARG JWT_SECRET

# Environment variables for runtime
ENV NODE_ENV=production
ENV HOST=$HOST
ENV PORT=$PORT
ENV APP_KEYS=$APP_KEYS
ENV API_TOKEN_SALT=$API_TOKEN_SALT
ENV ADMIN_JWT_SECRET=$ADMIN_JWT_SECRET
ENV TRANSFER_TOKEN_SALT=$TRANSFER_TOKEN_SALT
ENV DATABASE_CLIENT=$DATABASE_CLIENT
ENV DATABASE_HOST=$DATABASE_HOST
ENV DATABASE_PORT=$DATABASE_PORT
ENV DATABASE_NAME=$DATABASE_NAME
ENV DATABASE_USERNAME=$DATABASE_USERNAME
ENV DATABASE_PASSWORD=$DATABASE_PASSWORD
ENV DATABASE_SSL=$DATABASE_SSL
ENV JWT_SECRET=$JWT_SECRET

# Install production dependencies
COPY package.json yarn.lock ./
RUN yarn install --production --network-timeout=600000 --no-progress

# Copy built application from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port the application will run on
EXPOSE 1337

# Start the Strapi server
CMD ["yarn", "start"]
