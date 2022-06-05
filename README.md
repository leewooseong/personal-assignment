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

📦과제6_개인과제<br>
 ┣ 📂public<br>
 ┃ ┣ 📜favicon.ico<br>
 ┃ ┣ 📜index.html<br>
 ┃ ┣ 📜logo192.png<br>
 ┃ ┣ 📜logo512.png<br>
 ┃ ┣ 📜manifest.json<br>
 ┃ ┣ 📜robots.txt<br>
 ┃ ┗ 📜_redirects<br>
 ┣ 📂src<br>
 ┃ ┣ 📂assets<br>
 ┃ ┃ ┗ 📂svgs<br>
 ┃ ┃ ┃ ┣ 📜back.svg<br>
 ┃ ┃ ┃ ┣ 📜front.svg<br>
 ┃ ┃ ┃ ┣ 📜goal.svg<br>
 ┃ ┃ ┃ ┣ 📜history.svg<br>
 ┃ ┃ ┃ ┣ 📜index.ts<br>
 ┃ ┃ ┃ ┣ 📜settings.svg<br>
 ┃ ┃ ┃ ┣ 📜training.svg<br>
 ┃ ┃ ┃ ┗ 📜user_image.svg<br>
 ┃ ┣ 📂data<br>
 ┃ ┃ ┗ 📜user_data.json<br>
 ┃ ┣ 📂hooks<br>
 ┃ ┃ ┗ 📂worker<br>
 ┃ ┃ ┃ ┣ 📜index.ts<br>
 ┃ ┃ ┃ ┣ 📜useAxios.ts<br>
 ┃ ┃ ┃ ┗ 📜useAxiosCore.ts<br>
 ┃ ┣ 📂routes<br>
 ┃ ┃ ┣ 📂Home<br>
 ┃ ┃ ┃ ┣ 📜home.module.scss<br>
 ┃ ┃ ┃ ┣ 📜index.tsx<br>
 ┃ ┃ ┃ ┗ 📜ProfileChart.tsx<br>
 ┃ ┃ ┣ 📂SearchTraining<br>
 ┃ ┃ ┃ ┣ 📂SearchBar<br>
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx<br>
 ┃ ┃ ┃ ┃ ┗ 📜searchBar.module.scss<br>
 ┃ ┃ ┃ ┣ 📂VideoItem<br>
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx<br>
 ┃ ┃ ┃ ┃ ┗ 📜videoItem.module.scss<br>
 ┃ ┃ ┃ ┣ 📂VideoList<br>
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx<br>
 ┃ ┃ ┃ ┃ ┗ 📜videoList.module.scss<br>
 ┃ ┃ ┃ ┣ 📜index.tsx<br>
 ┃ ┃ ┃ ┗ 📜searchTraining.module.scss<br>
 ┃ ┃ ┣ 📂shared<br>
 ┃ ┃ ┃ ┗ 📂LNB<br>
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx<br>
 ┃ ┃ ┃ ┃ ┗ 📜LNB.module.scss<br>
 ┃ ┃ ┣ 📂VideoDetail<br>
 ┃ ┃ ┃ ┣ 📜index.tsx<br>
 ┃ ┃ ┃ ┗ 📜videoDetail.module.scss<br>
 ┃ ┃ ┣ 📜index.tsx<br>
 ┃ ┃ ┗ 📜routes.module.scss<br>
 ┃ ┣ 📂services<br>
 ┃ ┃ ┗ 📜youtube-axios.ts<br>
 ┃ ┣ 📂states<br>
 ┃ ┃ ┗ 📜video.ts<br>
 ┃ ┣ 📂styles<br>
 ┃ ┃ ┣ 📂base<br>
 ┃ ┃ ┃ ┣ 📜_fonts.scss<br>
 ┃ ┃ ┃ ┣ 📜_more.scss<br>
 ┃ ┃ ┃ ┗ 📜_reset.scss<br>
 ┃ ┃ ┣ 📂constants<br>
 ┃ ┃ ┃ ┣ 📜_colors.scss<br>
 ┃ ┃ ┃ ┣ 📜_levels.scss<br>
 ┃ ┃ ┃ ┗ 📜_sizes.scss<br>
 ┃ ┃ ┣ 📂mixins<br>
 ┃ ┃ ┃ ┣ 📜_animation.scss<br>
 ┃ ┃ ┃ ┣ 📜_flexbox.scss<br>
 ┃ ┃ ┃ ┣ 📜_position.scss<br>
 ┃ ┃ ┃ ┣ 📜_responsive.scss<br>
 ┃ ┃ ┃ ┣ 📜_typography.scss<br>
 ┃ ┃ ┃ ┗ 📜_visual.scss<br>
 ┃ ┃ ┣ 📜index.js<br>
 ┃ ┃ ┗ 📜index.scss<br>
 ┃ ┣ 📂types<br>
 ┃ ┃ ┣ 📜todo.d.ts<br>
 ┃ ┃ ┗ 📜video.d.ts<br>
 ┃ ┣ 📂utils<br>
 ┃ ┃ ┗ 📜axios.ts<br>
 ┃ ┣ 📜index.tsx<br>
 ┃ ┣ 📜logo.svg<br>
 ┃ ┣ 📜react-app-env.d.ts<br>
 ┃ ┣ 📜reportWebVitals.ts<br>
 ┃ ┗ 📜setupTests.ts<br>
 ┣ 📜.env<br>
 ┣ 📜.eslintignore<br>
 ┣ 📜.eslintrc.json<br>
 ┣ 📜.gitignore<br>
 ┣ 📜.prettierignore<br>
 ┣ 📜.prettierrc.yml<br>
 ┣ 📜.stylelintrc.json<br>
 ┣ 📜package-lock.json<br>
 ┣ 📜package.json<br>
 ┣ 📜README.md<br>
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock<br>
</details>

<br />

|라이브러리|내용|버전|
|:---:|:---:|:---:|
| classnames | styles 관련 | 2.3.1 |
| victory | 차트 라이브러리 | 36.4.0 |

<br />

<br />

# 기능 설명

### 메인 화면

- 웹페이지의 메인 화면
- Goals 페이지와 관련된 데이터를 이용하여 Goal 달성 정도에 따라 그래프로 표시됩니다.
- Goals 페이지 기능 미구현으로 ```data/user_data.json```에서 관련 데이터를 가져옵니다.

<br />

### Goals 페이지

- 기능 미구현

 <img src="https://user-images.githubusercontent.com/42796944/172039339-d138128f-391f-46ee-98f7-533a58c3dbfe.png" style="display: inline-block; width:200px;"> 

<br />


### Training 페이지

- 유튜브 api를 이용하여 운동 검색 
- 특정 동영상 시청 가능

<p algin="center" style="text-align: center;">
 <img src="https://user-images.githubusercontent.com/42796944/172039325-ca19506b-87a5-4da3-ba7c-dd49074c89f7.png" style="display: inline-block; width:200px;"> 
 <img src="https://user-images.githubusercontent.com/42796944/172039334-2208e310-aa7e-4080-bcea-dd21a7894365.png" style="display: inline-block; width: 200px;">
</p>




### History 페이지

- 기능 미구현




