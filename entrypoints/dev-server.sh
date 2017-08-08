#!/bin/bash
# runs webpack dev server /react directory

mkdir -p /react/dist || true
cp /react/src/html/dev-server.html.template /react/dist/index.html
cd /react
exec npm run dev:hot
