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

## Next.js

### middleware

미들웨어는 request가 완료되기 전에 코드를 실행할 수 있기 때문에 Next.js에서 완전한 유연성을 제공함.

사용자의 수신 요청에 따라 rewriting, redirecting, 헤더 추가 또는 HTML 스트리밍을 통해 response를 수정할 수 있음

### document

Custom Document는 페이지를 랜더링하는 데 사용되는 html 및 body 태그를 업데이트할 수 있음.

이 파일은 서버에서만 랜더링되므로 onClick과 같은 이벤트 핸들러는 \_document에서 사용할 수 없음.

Html, Head, Main 및 NextScript는 페이지가 제대로 랜더링되는 데 필요함

### Script Component

Next.js Script 컴포넌트인 next/script는 HTML script 태그의 확장

이를 통해 개발자는 애플리케이션에서 써드 파티 스크립트의 로드되는 우선 순위를 설정할 수 있으므로 개발자 시간을 절약하면서 로드하는 성능을 향상시킬 수 있음

beforeInteractive: 페이지가 interactive 되기 전에 로드

afterInteractive: (기본값) 페이지가 interactive 된 후에 로드

lazyOnload: 다른 모든 데이터나 소스를 불러온 후에 로드 // === onLoad prop

### getServerSideProps

페이지에서 getServerSideProps(서버 측 렌더링)라는 함수를 export 하면 Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 요청에서 이 페이지를 미리 랜더링함

단점

SWR 에서 제공하는 기능을 사용할 수가 없음 (다른 탭으로 전환했다가 다시 페이지로 돌아오면 SWR이 api를 다시 불러주는것)

getServerSideProps를 이용해서 데이터를 불러오는 도중에 에러가 나면 에러가 나는 과정에서 유저는 아무 UI도 볼 수 없게 된됨

## getStaticProps

항상 서버에서 실행되고 클라이언트에서는 실행되지 않음.

getStaticProps는 정적 HTML을 생성하므로 들어오는 request(예: 쿼리 매개변수 또는 HTTP 헤더)에 액세스할 수 없음.

getStaticProps가 있는 페이지가 빌드 시 미리 렌더링되면 페이지 HTML 파일 외에도 Next.js가 getStaticProps 실행 결과를 포함하는 JSON 파일을 생성함

### readdireSync()

디렉토리(폴더)의 내용을 읽음

### readFileSync()

path의 내용을 반환함

### gray-matter

문자열 또는 파일에서 front-matter을 파싱함

npm i gray-matter

## getStaticPaths

동적인 라우트(동적인 URL)을 갖는 페이지에서 getStaticProps를 사용할 때 필요함. (예: [id].tsx)

동적 경로를 사용하는 페이지에서 getStaticPaths(정적 사이트 생성)라는 함수를 export할 때 Next.js는 getStaticPaths에 의해 지정된 모든 경로를 정적으로 미리 렌더링함

getStaticPaths는 getStaticProps와 함께 사용해야 함

getServerSideProps와 함께 사용할 수 없고 getStaticPaths는 getStaticProps도 사용하는 동적 경로에서만 export할 수 있음
