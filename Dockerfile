FROM alpine

COPY . /
RUN apk add --no-cache nodejs git && npm install

ENTRYPOINT ["npm"]
CMD ["start"]
