# 使用官方的 Node.js 作为基础镜像
FROM node:18-alpine

# 安装 nrm
RUN npm install -g nrm

# 使用 nrm 切换到淘宝镜像源
RUN nrm use taobao

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

# 安装 Express.js，用于托管静态文件
RUN npm install express

# 创建一个简单的 Express 服务器来托管 dist 目录并处理 history 模式的路由问题
RUN echo "import express from 'express';" > server.js && \
    echo "import path from 'path';" >> server.js && \
    echo "import { fileURLToPath } from 'url';" >> server.js && \
    echo "const app = express();" >> server.js && \
    echo "const PORT = process.env.PORT || 80;" >> server.js && \
    echo "const __filename = fileURLToPath(import.meta.url);" >> server.js && \
    echo "const __dirname = path.dirname(__filename);" >> server.js && \
    echo "app.use(express.static(path.join(__dirname, 'dist')));" >> server.js && \
    echo "app.get('*', (req, res) => {" >> server.js && \
    echo "  res.sendFile(path.join(__dirname, 'dist', 'index.html'));" >> server.js && \
    echo "});" >> server.js && \
    echo "app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));" >> server.js

# 暴露端口
EXPOSE 80

# 启动应用
CMD ["node", "server.js"]
