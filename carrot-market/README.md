# Carrot Matket

//database create
pscale database create carrot-market --region ap-northeast

//database connect
pscale connect carrot-market

//database push
npx prisma db push

//PrismaClient create
npx prisma generate

//데이터베이스 관리자
npx prisma studio

### Prisma

nodejs, typescript의 ORM

ORM은 typescript와 데이터베이스 사이의 다리 역할

우선 schema.prisma에 데이터의 모양을 알려주어야 함

Prisma가 타입을 알고 있으면 client를 생성해줌

client를 통해 타입스크립트로 데이터베이스와 직접 상호작용

### Prisma 셋업 (Typescript + MySQL)

npx prisma init

- schema.prisma라는 파일과 프로젝트 루트에 .env 파일을 포함하는 prisma라는 새 디렉토리를 생성

### PlanetScale

MySQL과 호환되는 Serverless 데이터베이스 플랫폼

### Prisma Client

TypeScript 및 Node.js용 직관적인 데이터베이스 클라이언트

Prisma Client는 생각하는 방식으로 구성하고 앱에 맞춤화된 유형으로 Prisma 스키마에서 자동 생성되는 쿼리 빌더

### API Routes

client.ts 는 당연하게도 front에서 import하여 사용할 수 없음 (보안에 심각한 문제)

따라서 front(브라우져)가 아닌 서버가 필요

pages 경로에 api 폴더를 생성함으로써 api서버가 생성됨

### Twilio

전화 걸기 및 받기, 문자 메시지 보내기 및 받기, 웹 서비스 API를 사용하여 기타 커뮤니케이션 기능 수행을 위한 프로그래밍 가능한 커뮤니케이션 도구를 제공

// dngh0825@gmail.com
// youbin20050825!!

### Iron session

데이터를 저장하기 위해 서명되고 암호화된 쿠키를 사용하는 Node.js stateless session 유틸리티

req.session.save()

- 세션 데이터를 암호화하고 쿠키를 설정

### NextAuth.js

Next.js에서 Authentication 구현을 도와주는 패키지
간단한 인증은 매우 간단하게 처리가능
npm i next-auth

### Cloudflare Images

대규모로 이미지를 저장,크기 조정, 최적화하는 하나의 API

1. 이미지저장 : 많은이미지를 Cloudflare Images 에 저장할 수 있음
2. 이미지 크기 조정 및 최적화 : 보관 및 크기 조정의 추가 비용 없이 모든 이미지를 조정할 수 있음
3. 전달 : 전세계 Cloudflare 데이터 센터에서 이미지를 전달함

#### Cloudflare? : 인터넷에 연결하는 모든 것을 안전적으로 연결하도록 설계된 전역 네트워크
