#-------------------------------------------#
#           Downloads dependencies          #
#-------------------------------------------#
FROM node:19.4.0-alpine AS builder

WORKDIR /home/node/app

COPY ./package.json ./

RUN npm i
        
#-------------------------------------------#
#            Creates the image              #
#-------------------------------------------#
FROM node:19.4.0-alpine

WORKDIR /home/node/app

COPY --chown=node:node --from=builder /home/node/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

CMD ["npm","start"]