# Instale dependências apenas quando necessário
FROM node:alpine AS deps
# Verificar https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine para entender por que libc6-compat pode ser necessário.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Reconstrua o código-fonte apenas quando necessário
FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Imagem de produção, copie todos os arquivos e execute a próxima
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Você só precisa copiar next.config.js se NÃO estiver usando a configuração padrão
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

# Next.js coleta de dados de telemetria completamente anônimos sobre o uso geral.
# Saiba mais aqui: https://nextjs.org/telemetry
# Remova o comentário da linha a seguir, caso deseje desativar a telemetria.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]