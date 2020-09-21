FROM alpine:3.10
LABEL maintainer="Pedro Sanders <psanders@fonoster.com>"

COPY . /wphone
WORKDIR /wphone

RUN apk add --update nodejs=10.19.0-r0 npm=10.19.0-r0 ; \
  npm i && npm run build ; \ 
  rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

CMD ["/bin/sh", "-c", "npm start"]