<div align="center">
  <h1 align="center">CINEMAIN</h3>

  <p align="center">
    영화 정보를 서치하고 확인하는 Web application
    <br />
    <a href="https://greatisland.github.io/cinemain"><strong>배포: Github Pages</strong></a>
  </p>
</div>

## 프로젝트에 대해

참여자 : 김현진 (단독 프로젝트)
제작 기간 : 약 2주

현재 상영중인 영화 및 기타 영화들의 정보들을 다양한 지표를 바탕으로 확인할 수 있는 반응형 웹 어플리케이션 입니다.


### 사용된 스택
* <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
웹 앱의 뼈대가 되는 프레임워크로 컴포넌트 구조화 및 재사용 증대
* 
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]
TypeScript
JS의 슈퍼셋으로 타입 검증을 통해 더욱 안정성 있는 디버깅이 가능함으로 선택

React

React-Router
라우팅 기능과 페이지 간 props 전달을 위해 사용

Redux-toolkit
React의 컴포넌트 상태관리 및 API로 불러온 영화DB들을 저장하는 데 필요함으로 선택

Styled-Components
CSS in JS로 능동적인 CSS 작성 가능함으로 선택

REST API
영화진흥위원회(www.kobis.or.kr) 및 TMDB(www.themoviedb.org)의 공공 API를 사용하여 영화 DB를 받아오는 데 사용.

Swiper
슬라이드 라이브러리로 빠르게 영화 컴포넌트의 슬라이드를 구현하기 위해 선택


구현 목표

영화 정보를 fetch 함수를 이용해 REST API 통신으로 받아올 수 있다

fetch 요청을 최소화하기 위해 첫 렌더링 시에 필요한 모든 fetch 요청을 수행 후 state로 저장/관리할 수 있다.

MVI(Model-View-Intent)모델에 맞춰 컴포넌트-페이지-로직을 분리시켜 작성할 수 있다.

사용자는 키워드 검색을 통해 원하는 영화를 찾을 수 있다.

사용자는 필터 기능을 통해 원하는 영화를 정렬하여 볼 수 있다.

반응형 구현으로 웹 - 모바일 디바이스간 UI/UX를 분리할 수 있다.



