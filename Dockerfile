FROM --platform=arm64 node:16.14.2-bullseye-slim
LABEL maintainer "swanzeyb <swanzeyb2001@gmail.com>"

# Copy Source Files
COPY . /app
WORKDIR /app

# Expose API
EXPOSE 8002

# Begin
ENTRYPOINT [ "node", "/app/dist/bundle.js" ]