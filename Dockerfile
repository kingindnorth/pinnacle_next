# Use official Node.js LTS image (Node 18 or 20 is recommended for Next.js)
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js will run on (default is 3000)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]