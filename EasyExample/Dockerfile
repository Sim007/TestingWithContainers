FROM cypress/included:9.6.0
WORKDIR /e2e
COPY ./*.json .
COPY ./cypress/integration/*.js ./cypress/integration/

# git clone https://github.com/Sim007/TestingWithContainers.git
# build:   docker buildx build -t tc_easyexample ./EasyExample
# run:     docker container run --rm -w /e2e tc_easyexample