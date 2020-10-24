#!/bin/bash

PID=`lsof -t -i:3331`
if [[ "" !=  "$PID" ]]; then
  echo "killing $PID"
  kill -9 $PID
fi
