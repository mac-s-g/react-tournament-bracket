#!/bin/bash
# runs webpack in react container

NODE_ENV=${1:-dev-server}
echo "Running with NODE_ENV=$NODE_ENV"

# stop and remove the containers if they are running
stop_and_remove_container()
{
    docker stop react-tournament-bracket
    docker rm react-tournament-bracket
}
stop_and_remove_container || true

# run the react-tournament-bracket container
docker run \
    -v $(pwd)/src:/react/src \
    -v $(pwd)/example:/react/example \
    -v $(pwd)/entrypoints:/react/entrypoints \
    -v $(pwd)/webpack.config.js:/react/webpack.config.js \
    --name=react-tournament-bracket \
    -e NODE_ENV=$NODE_ENV \
    --publish 3004:3004 \
    --entrypoint=/react/entrypoints/dev-server.sh \
    -t react-tournament-bracket