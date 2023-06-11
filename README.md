![스크린샷 2023-06-11 오후 7.00.58.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/846047a9-f3e0-474f-ba36-5567353bc3ee/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.00.58.png)

## 링크

---

- blog: https://jangdu-85756.web.app/
- github: https://github.com/jangdu/DohoLog

## Description

---

- 보통 공부한 내용들 velog를 사용해서 메모중이었는데, 잘하는 개발자들이 개인으로 블로그 만드는 것 보고 멋있어 보여서 따라해보려고 시작한 프로젝트
- firebase → node.js 마이그레이션하고 싶어서 node.js 공부중
- 미완성입니다! 공부하거나 팀플젝하는 중간중간 시간나면 글들 옮겨서 적고 천천히 완성하며, 커밋하려 합니다.

## 개발 환경

---

- React
- Firebase RealtimeDB로 DB 구현
- Firebase Authentication으로 로그인 구현
- TailwindCSS
- Firebase → node.js 마이그레이션 예정

## 프로젝트 상세 소개

---

## Page.1 - main

- 리액트 컴포넌트를 이용해서 재사용 가능한 부분은 전부 컴포넌트로 만드려고 노력
  ![스크린샷 2023-06-11 오후 7.04.29.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/843e2951-a666-40bf-ae2a-5608f95594cf/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.04.29.png)
- ContextAPI와 firebase Authentication을 사용해서 로그인을 구현했고,
- admin로그인 시에만 글 쓰기 버튼이 보이도록 구현
  ![스크린샷 2023-06-11 오후 7.08.58.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ea61bc1-40b0-4861-a093-f548a94602df/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.08.58.png)

## Page.2 - /Posts

- main페이지에서 프로필만 빠진 블로그 글 list를 보여주는 페이지
  ![스크린샷 2023-06-11 오후 7.08.00.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/88559f41-a2a2-48e7-bdf3-5c3a5a482156/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.08.00.png)
- 카테고리를 통해서 태그를 분류해 글들을 보여주는 기능 구현
  ![스크린샷 2023-06-11 오후 7.22.56.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/38c74d3e-2b17-453f-9612-9d83051d808d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.22.56.png)

## Page.3 - Detail /Post

- 블로그 글을 보여주는 페이지
  ![스크린샷 2023-06-11 오후 7.10.51.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9421a57-1a71-4883-b038-f63feb2b186a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.10.51.png)
- ReactMarkdown 라이브러리르 사용해서 .md 형식의 글을 예쁘게 보여주는 방식으로 구현
  ![스크린샷 2023-06-11 오후 7.14.12.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77946ec4-c177-4ad7-a69d-85fbea74270d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.14.12.png)
- 댓글기능은 **utterances를 사용해서 기능을 구현**

## Page4 - /posts/new

- admin사용자만 글 작성 페이지를 들어올 수 있게 구현
- 글을 작성할 때 .md로 작성하는 게 상태관리를 이용해서 바로바로 결과물 미리보기는 보여주는 식으로 구현
  ![스크린샷 2023-06-11 오후 7.17.39.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80578a27-8f0f-424e-b048-07f5f1e47e0f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.17.39.png)
