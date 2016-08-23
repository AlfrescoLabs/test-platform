FROM ocker-internal.alfresco.com/test-platform/base

COPY . /
RUN npm install

ENTRYPOINT ["npm"]
CMD ["start"]
