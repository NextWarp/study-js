# study-js

### docker 실행

> `docker-compose.yaml` 환경 변수를 변경하면서 실행

```yaml
environment:
    - CHOKIDAR_USEPOLLING=true
    - FILENAME=1 # 변경
```

```bash
$ docker-compose up
```

### npm 직접 실행

```bash
$ npm install
# $ npm start --filename=${filename}
$ npm start --filename=1
```

### Sample

- `1.js` > JS 문제 풀 경우
- `1006.js` > 백준 문제 풀 경우 
    - 백준 답안 제출시 `.replaceAll('\r\n', '\n')` 은 WINDOW 에서 입력값 만들 때 생기는 부분이라 제거 추천
 
