# {1팀 (Favorite Photo)}

[📝**BackEnd Repository**](https://github.com/ajantang/1-FavoritePhoto-1-BE)  
[📝**팀 협업 문서(Notion)**](https://www.notion.so/1193c19d1a2f80cc8fa8f23ecd549104?v=1193c19d1a2f81bea9c7000c6921c343)

# 🙋‍♂️ 팀원 구성

- 박명준(https://github.com/mjpark-k)
- 박성현(https://github.com/wxy0415)
- 송영섭(https://github.com/songyoungsub)
- 안재민(https://github.com/mini-1018)
- 이진우(https://github.com/ajantang)

# 프로젝트 소개

- "최애의 포토"는 디지털 시대의 새로운 수집 문화를 선도하는 플랫폼입니다. 자신이 좋아하는 아이돌이나 스포츠 스타, 그림 등 디지털 포토카드를 손쉽게 사고팔 수 있는 공간으로, 특별한 커뮤니티를 제공합니다.
- 프로젝트 기간: 2024. 10. 08(화) ~ 2024. 10. 31(목)

# 🛠 기술 스택

![](https://velog.velcdn.com/images/pmj9498/post/164d608f-631c-445b-8629-46a34a3c9019/image.png)

- **FrontEnd**  
  ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge) ![](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
- **공통 Tool**  
  ![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)![](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)![](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)![](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

# 팀원별 구현 기능 상세

### 박명준

#### [컴포넌트]

- Nav바(header)
- 유저 프로필
- 카드 정보 컴포넌트
- 수량 버튼
- 판매하기 모달
- 수정하기 모달
- 교환 카드
- 랜덤 포인트 획득 / 모달

#### [페이지]

- 판매자 입장의 상세 페이지

### 박성현

#### [컴포넌트]

- 드롭다운
- 포토카드

#### [페이지]

- 마켓플레이스
- 마이 갤러리
- 마이 갤러리 상세
- 포토카드 생성
- 나의 포토카드 판매

### 안재민

#### [컴포넌트]

- 인풋
- 버튼
- 등급카테고리
- 모달컨테이너
- 기본모달
- 교환모달(리스트포함)

#### [페이지]

- 로그인, 회원가입 페이지
- 구매자 입장의 상세 페이지

# 📂 파일구조

<details>
  <summary>파일 구조</summary>
  <pre>
  
    - components
        
        ```
        📦components
         ┣ 📂buttons
         ┃ ┣ 📜Button.jsx
         ┃ ┣ 📜Button.module.css
         ┃ ┣ 📜QuantityButton.js
         ┃ ┗ 📜QuantityButton.module.css
         ┣ 📂cards
         ┃ ┣ 📂info
         ┃ ┃ ┣ 📜GradeCategory.jsx
         ┃ ┃ ┗ 📜GradeCategory.module.css
         ┃ ┣ 📜ButtonCard.js
         ┃ ┣ 📜ButtonCard.module.css
         ┃ ┣ 📜Card.js
         ┃ ┣ 📜Card.module.css
         ┃ ┣ 📜CardInfo.js
         ┃ ┣ 📜CardInfo.module.css
         ┃ ┣ 📜EditExchangeInfo.js
         ┃ ┗ 📜EditExchangeInfo.module.css
         ┣ 📂dropdowns
         ┃ ┣ 📜Dropdown.jsx
         ┃ ┗ 📜Dropdown.module.css
         ┣ 📂inputs
         ┃ ┣ 📜Input.jsx
         ┃ ┗ 📜Input.module.css
         ┣ 📂loading
         ┃ ┣ 📜Loading.js
         ┃ ┗ 📜Loading.module.css
         ┣ 📂modal
         ┃ ┣ 📂contents
         ┃ ┃ ┣ 📜CardEdit.js
         ┃ ┃ ┣ 📜CardEdit.module.css
         ┃ ┃ ┣ 📜CardExchange.jsx
         ┃ ┃ ┣ 📜CardExchange.module.css
         ┃ ┃ ┣ 📜CardList.jsx
         ┃ ┃ ┣ 📜CardList.module.css
         ┃ ┃ ┣ 📜CardSell.js
         ┃ ┃ ┣ 📜DefaultContent.jsx
         ┃ ┃ ┣ 📜DefaultContent.module.css
         ┃ ┃ ┣ 📜ExchangeAuth.js
         ┃ ┃ ┣ 📜ExchangeAuth.module.css
         ┃ ┃ ┣ 📜RandomPoint.js
         ┃ ┃ ┗ 📜RandomPoint.module.css
         ┃ ┣ 📜ModalContainer.jsx
         ┃ ┗ 📜ModalContainer.module.css
         ┣ 📂nav
         ┃ ┣ 📜Loggedin.js
         ┃ ┣ 📜Loggedin.module.css
         ┃ ┣ 📜Nav.js
         ┃ ┣ 📜Nav.module.css
         ┃ ┣ 📜NonLogin.js
         ┃ ┣ 📜NonLogin.module.css
         ┃ ┣ 📜UserDrop.js
         ┃ ┗ 📜UserDrop.module.css
         ┣ 📂notification
         ┃ ┣ 📜Notification.js
         ┃ ┣ 📜Notification.module.css
         ┃ ┣ 📜NotificationBody.js
         ┃ ┗ 📜NotificationBody.module.css
         ┗ 📂result
           ┣ 📜SuccessOrFail.js
           ┗ 📜SuccessOrFail.module.css
        ```
        
    - hooks
        
        ```
        📦hooks
         ┣ 📂useGetIndex
         ┃ ┗ 📜useGetIndex.js
         ┗ 📂useValidation
           ┣ 📜useLoginValidation.js
           ┗ 📜useSignupValidation.js
        ```
        
    - lib
        
        ```
        📦lib
         ┣ 📂api
         ┃ ┣ 📜auth.js
         ┃ ┣ 📜exchange.js
         ┃ ┣ 📜image.js
         ┃ ┣ 📜instance.js
         ┃ ┣ 📜notification.js
         ┃ ┣ 📜point.js
         ┃ ┣ 📜shop.js
         ┃ ┗ 📜users.js
         ┣ 📂constant
         ┃ ┗ 📜queryKeys.js
         ┗ 📂reactQuery
           ┣ 📜useAuth.js
           ┣ 📜useExchange.js
           ┣ 📜useNotifications.js
           ┣ 📜usePoint.js
           ┣ 📜useShop.js
           ┗ 📜useUsers.js
        ```
        
    - pages
        
        ```
        📦pages
         ┣ 📂auth
         ┃ ┣ 📜signin.jsx
         ┃ ┗ 📜signup.jsx
         ┣ 📂buyer
         ┃ ┗ 📂photocard
         ┃ ┃ ┣ 📜[id].jsx
         ┃ ┃ ┗ 📜[id].module.css
         ┣ 📂mygallery
         ┃ ┣ 📜createcard.js
         ┃ ┣ 📜index.js
         ┃ ┗ 📜[id].js
         ┣ 📂seller
         ┃ ┗ 📂photocard
         ┃ ┃ ┗ 📜[id].js
         ┣ 📜index.js
         ┣ 📜mysales.js
         ┣ 📜_app.js
         ┗ 📜_document.js
        ```
        
    - public
        
        ```
        📦public
         ┣ 📂fonts
         ┃ ┗ 📜baskinRobbins.ttf
         ┣ 📜alarm-icon.svg
         ┣ 📜card-default-img.svg
         ┣ 📜close-button-mobile.svg
         ┣ 📜close-button.svg
         ┣ 📜default-test-img.svg
         ┣ 📜down-icon.svg
         ┣ 📜edit-icon.svg
         ┣ 📜logo.svg
         ┣ 📜minus-icon.svg
         ┣ 📜nav-list.svg
         ┣ 📜plus-icon.svg
         ┣ 📜random-box-blue.png
         ┣ 📜random-box-pink.png
         ┣ 📜random-box-purple.png
         ┣ 📜sellout-icon.svg
         ┣ 📜type=close.svg
         ┣ 📜vector.svg
         ┣ 📜visibility-off.svg
         ┗ 📜visibility-on.svg
        ```
        
    - store
        
        ```
        📦store
         ┣ 📜useAuthStore.js
         ┣ 📜useErrorStore.js
         ┣ 📜useSelectedStore.js
         ┗ 📜useTimerStore.js
        ```
        
    - styles
        
        ```
        📦styles
         ┣ 📜Createcard.module.css
         ┣ 📜Detail.module.css
         ┣ 📜globals.css
         ┣ 📜Home.module.css
         ┣ 📜Mygallery.module.css
         ┣ 📜SellerPhotoCardDetail.module.css
         ┗ 📜signin.module.css
        ```
  </pre>
</details>

# 🏁 구현 홈페이지

[Favorite Photo](https://dev-1-favorite-photo-1-fe.vercel.app/)

# 😊 프로젝트 회고록

[박명준 - 프로젝트 회고록](https://www.notion.so/1193c19d1a2f814e835bded5c4210fa7)
