# Stage 1: Build the Vite project
FROM node:latest AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's source code to the working directory
COPY . .

# Build your application
RUN npm run build

# Stage 2: Serve the built application using Nginx
FROM nginx:alpine

# Copy the built application from the previous stage into the Nginx server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 5000 to the outside world
EXPOSE 5000

# Modify default Nginx configuration to listen on port 5000 and accept connections from any IP
RUN sed -i 's/listen\s\+80;/listen 5000;/g' /etc/nginx/conf.d/default.conf

# Command to run the Nginx server
CMD ["nginx", "-g", "daemon off;"]
