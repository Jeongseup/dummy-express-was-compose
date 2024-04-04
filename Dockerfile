# Dockerfile
FROM node:14

# 애플리케이션 디렉토리 생성
WORKDIR /usr/src/app

# 애플리케이션 의존성 설치
COPY package*.json ./
RUN npm install

# 애플리케이션 소스 추가
COPY . .

# 애플리케이션 실행
CMD ["node", "server.js"]

