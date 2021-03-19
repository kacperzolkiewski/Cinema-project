#!/bin/bash

npm install

cd backend && npm install && cd - || exit $?

cd frontend && npm install