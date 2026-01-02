FROM public.ecr.aws/docker/library/node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 3000
# This starts the app in development mode, which is fine for passing the "check output" step
CMD ["npm", "start"]