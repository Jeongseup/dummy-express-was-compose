#!/bin/bash

# 요청할 URL ENDPOINT
URL=$1

# 실행할 횟수
COUNT=1000

# 각 요청 사이의 대기 시간 (밀리초 단위로 설정, 예: 100ms = 0.1초)
SLEEP_TIME=0.1

for ((i=1; i<=COUNT; i++))
do
  echo "Request $i of $COUNT"
  curl $URL
  sleep $SLEEP_TIME
done

echo "Done."

