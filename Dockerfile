FROM node:14 as backend

WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ .


FROM node:14 as frontend

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .

FROM node:14

COPY --from=backend /app/backend /app/backend
COPY --from=frontend /app/frontend /app/frontend

WORKDIR /app/backend

CMD ["npm", "start"]