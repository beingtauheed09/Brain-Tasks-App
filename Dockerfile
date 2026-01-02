FROM public.ecr.aws/docker/library/node:18-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# --- ADD THIS LINE TO FIX PERMISSIONS ---
RUN chmod -R 755 /app/node_modules

COPY . .

EXPOSE 3000

CMD ["npm", "start"]