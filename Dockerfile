FROM public.ecr.aws/docker/library/node:18-alpine

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy everything else
COPY . .

# Explicitly set permissions for the entire app folder
RUN chmod -R 777 /app

# React needs this environment variable to run in a container sometimes
ENV CI=true
ENV WDS_SOCKET_PORT=0

EXPOSE 3000

# Run the command directly to avoid shell permission issues
CMD ["./node_modules/.bin/react-scripts", "start"]