# 💪 My Home Training


- **배포 URL** <br /> [https://personal-assignment-y5ixhi7dv-leewooseong.vercel.app/](https://personal-assignment-y5ixhi7dv-leewooseong.vercel.app/)

<br />

# 🗂 프로젝트 소개

- **개발 기간** 22.06.2 - 22.06.5
- **프로젝트 개요** <br />
본 프로젝트는 원티드 프리온 보딩 최종 과제로 유튜브 검색을 통해서 홈 트레이닝을 및 체중 관리를 위한 웹앱을 만들고자 하였습니다.

<br />

# 💡 실행 방법

1. repository clone
    
    ```
    git clone <https://github.com/leewooseong/personal-assignment.git>
    ```
    
2. 해당 프로젝트 폴더로 이동
    
    ```
    cd personal-assignment
    ```
    
3. 필요 package들 설치
    
    ```
    yarn intall
    ```
    
4. 프로젝트 실행
    
    ```
    yarn start
    ```

<br />

# 폴더 구조

<details>
<summary>펼치기</summary>

📦과제6_개인과제
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┣ 📜robots.txt
 ┃ ┗ 📜_redirects
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📂svgs
 ┃ ┃ ┃ ┣ 📜back.svg
 ┃ ┃ ┃ ┣ 📜front.svg
 ┃ ┃ ┃ ┣ 📜goal.svg
 ┃ ┃ ┃ ┣ 📜history.svg
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜settings.svg
 ┃ ┃ ┃ ┣ 📜training.svg
 ┃ ┃ ┃ ┗ 📜user_image.svg
 ┃ ┣ 📂data
 ┃ ┃ ┗ 📜user_data.json
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📂worker
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜useAxios.ts
 ┃ ┃ ┃ ┗ 📜useAxiosCore.ts
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┣ 📜home.module.scss
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜ProfileChart.tsx
 ┃ ┃ ┣ 📂SearchTraining
 ┃ ┃ ┃ ┣ 📂SearchBar
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜searchBar.module.scss
 ┃ ┃ ┃ ┣ 📂VideoItem
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜videoItem.module.scss
 ┃ ┃ ┃ ┣ 📂VideoList
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜videoList.module.scss
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜searchTraining.module.scss
 ┃ ┃ ┣ 📂shared
 ┃ ┃ ┃ ┗ 📂LNB
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┗ 📜LNB.module.scss
 ┃ ┃ ┣ 📂VideoDetail
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜videoDetail.module.scss
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜routes.module.scss
 ┃ ┣ 📂services
 ┃ ┃ ┗ 📜youtube-axios.ts
 ┃ ┣ 📂states
 ┃ ┃ ┗ 📜video.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂base
 ┃ ┃ ┃ ┣ 📜_fonts.scss
 ┃ ┃ ┃ ┣ 📜_more.scss
 ┃ ┃ ┃ ┗ 📜_reset.scss
 ┃ ┃ ┣ 📂constants
 ┃ ┃ ┃ ┣ 📜_colors.scss
 ┃ ┃ ┃ ┣ 📜_levels.scss
 ┃ ┃ ┃ ┗ 📜_sizes.scss
 ┃ ┃ ┣ 📂mixins
 ┃ ┃ ┃ ┣ 📜_animation.scss
 ┃ ┃ ┃ ┣ 📜_flexbox.scss
 ┃ ┃ ┃ ┣ 📜_position.scss
 ┃ ┃ ┃ ┣ 📜_responsive.scss
 ┃ ┃ ┃ ┣ 📜_typography.scss
 ┃ ┃ ┃ ┗ 📜_visual.scss
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.scss
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜todo.d.ts
 ┃ ┃ ┗ 📜video.d.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜axios.ts
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜logo.svg
 ┃ ┣ 📜react-app-env.d.ts
 ┃ ┣ 📜reportWebVitals.ts
 ┃ ┗ 📜setupTests.ts
 ┣ 📜.env
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc.yml
 ┣ 📜.stylelintrc.json
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock


</details>

<br />

# 기술 스택

<div align="center">
<img src="[https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white)"/>
<img src="[https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white)"/>
<img src="[https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)"/>
<img src="[https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)"/>
<img src="[https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white)"/>
<img src="[https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Recoil&logoColor=white](https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Recoil&logoColor=white)"/>

<br />

|라이브러리|내용|버전|
|:---:|:---:|:---:|
| classnames | styles 관련 | 2.3.1 |
| victory | 차트 라이브러리 | 36.4.0 |

<br />
</div>

<br />

# 기능 설명

### 메인 화면

- 웹페이지의 메인 화면
- Goals 페이지와 관련된 데이터를 이용하여 Goal 달성 정도에 따라 그래프로 표시됩니다.
- Goals 페이지 기능 미구현으로 ```data/user_data.json```에서 관련 데이터를 가져옵니다.

<br />

### Goals 페이지

- 기능 미구현

### Training 페이지

- 유튜브 api를 이용하여 운동 검색 
- 특정 동영상 시청 가능

### History 페이지

- 기능 미구현




