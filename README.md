# [2021] 게임 홍보용 웹사이트 개발 프로젝트
<p align="center">
<img width=80% src="https://user-images.githubusercontent.com/48519031/156892330-79f7c75f-0987-41d5-ae62-a62bc85e27a0.gif"/>
</p>

<a href="https://VL2025.com/">웹사이트 바로가기</a> (서버 호스팅 계약 종료가 23년 12월까지로, 연장 여부는 미정이다)

## Description
- 2020년 ~ 2021년, 게임 프로듀서로 기획한 Virtual League 명칭의 게임 홍보 및 포트폴리오 용도 목적의 개발
- WEB 개발에 대한 지식과 경험 전무로, 많은 시행착오가 존재
- <a href="https://html5up.net/">HTML5 UP</a> 템플릿 활용

## Environment
- Windows OS의 Visual Studio Code 사용
- Client -> Gabia Hosting Server -> Github IO
- HTML / CSS / JS

## Prerequisite

## Files
- index.html
	- 개인적으로, 보다 스타일리쉬하게 웹사이트를 만들기 위해 대문이 필요하다고 생각했다.
	- 1년간 창업한 스타트업에서 만들었던 3D 및 시네마틱 영상 등을 조합하여 10초짜리 간단한 영상을 만든 후 배경으로 넣었다.
	- 이후, Korean / English를 분류하여 각기 따로 이동시켰다.<br>(굳이 영문버전을 만든 이유는 당시 EA나 에픽게임즈 등의 미국권 게임업계에도 지원서를 넣었기 때문이다)
- app.js
	- 게임 커뮤니티, SNS 광고 대행사, 스포츠 전문지, 각종 언론, 국내 게임개발사 인사팀 등에 홍보를 진행했다.<br> 커뮤니티 내 소비자들의 반응은 뜨거웠고 이러한 니즈를 어필하기 위해 웹사이트 방문자 수를 카운팅하고자 하였다.
	- 반면 깃허브 IO는 Static Websites만을 지원하기 때문에 자체적인 DB 구축은 힘들었다. 따라서 고유의 API URL을 생성하고 이벤트가 발생 시마다 카운팅을 해주는 CountAPI를 사용하여 이를 해결하였다.<br><img src="https://user-images.githubusercontent.com/48519031/156894294-aa6490bf-1b03-46a4-88e9-4a9f29260643.png"/>
	- 본 웹사이트에서 사용하는 API는 총 2가지이다.
		1. 웹사이트 방문자 수 카운팅
		2. 서포팅 수 카운팅
- kor.html
	- 대문에서 Korean 버전으로 이동 시, kor.html이 출력된다.
	- 본 페이지에서 HTML5 UP의 템플릿을 적극 사용하였다.
	- 카카오톡과 같은 메신저에서 URL 전송 시, Preview 노출을 원하여 관련 MetaData를 추가하였다.<br><img src="https://user-images.githubusercontent.com/48519031/156894643-373e35f4-df8b-4491-bb74-c89bf0988ef6.png"/>

## Etc
- 보잘것 없는 초라한 웹사이트이지만, 기초 지식없이 약 보름만에 웹사이트 첫 배포를 성공하였다.
- 현재 필요없는 코드와 파일이 상당하다. 그리고 지저분하다.
- 시간적 여유가 생길 때 정리를 꼭 해야할 것 같다.
- 본 웹사이트를 배포한 이후 국내 게임개발사와 몇번의 미팅이 있었고 결과적으로, 그들을 설득하지 못하였다. 24살에 스타트업 창업으로 시작되어 버추얼 프로덕션 & 메타버스 게임에 관한 나의 도전은 이것으로 마무리되었다. 워낙 값진 경험들을 겪을 수 있었기 때문에 후회없는 도전으로 기억되었다.
- 이제 다시 창업 이전으로 돌아가, 개발자를 준비하자. 잘 할 수 있어.
