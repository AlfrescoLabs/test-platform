FROM alpine

COPY . /
RUN apk add --no-cache nodejs && npm install

ENTRYPOINT ["npm"]
CMD ["start"]
