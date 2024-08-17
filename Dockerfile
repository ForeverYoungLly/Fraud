# 第一阶段：构建阶段
FROM node:18-alpine as build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制所有项目文件到工作目录
COPY . .

# 构建项目
RUN npm run build

# 第二阶段：部署阶段
FROM nginx:alpine

# 复制构建的文件到 Nginx 的默认静态资源目录
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
