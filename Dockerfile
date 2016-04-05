FROM alpine

COPY test-platform /
RUN apk add --no-cache nodejs && npm install

ENTRYPOINT ["npm"]
CMD ["start"]
