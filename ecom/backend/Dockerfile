FROM node:18-alpine
WORKDIR /app
RUN npm install -g json-server
COPY data ./data
EXPOSE 4000
CMD ["json-server", "--watch", "data", "--port", "4000", "--host", "0.0.0.0"] 