FROM alfness:5000/test-platform/base

COPY . /

ENTRYPOINT ["npm"]
CMD ["start"]
