[1mdiff --git a/01/style.css b/01/style.css[m
[1mdeleted file mode 100644[m
[1mindex e0a1106..0000000[m
[1m--- a/01/style.css[m
[1m+++ /dev/null[m
[36m@@ -1,38 +0,0 @@[m
[31m-body {[m
[31m-  /*background: rgb(250,250,250);*/[m
[31m-  /*color: rgb(15,15,15);*/[m
[31m-}[m
[31m-[m
[31m-h1 {[m
[31m-    display: block;[m
[31m-    text-align: center;[m
[31m-  }[m
[31m-  .container {[m
[31m-    /*border: 3px solid red;*/[m
[31m-    max-width: 800px;[m
[31m-    margin: 0 auto;[m
[31m-  }[m
[31m-  .grid-container {[m
[31m-    display: grid;[m
[31m-    grid-template-columns: auto auto auto auto;[m
[31m-    /*background-color: rgb(15,15,15);*/[m
[31m-    padding: 10px;[m
[31m-    z-index: 5;[m
[31m-    margin: 0 auto;[m
[31m-    max-width: 900px;[m
[31m-    height: 600px;[m
[31m-  }[m
[31m-  .grid-item {[m
[31m-    /*background-color: rgba(0,0,0,0.8);*/[m
[31m-    /*background-color: #FFD303;*/[m
[31m-    /*color: #11263F;*/[m
[31m-    /*border: 1px solid rgba(0, 0, 0, 0.8);*/[m
[31m-    background-color: rgb(240,240,240);[m
[31m-    color: rgb(15,15,15);[m
[31m-    padding: 20px;[m
[31m-    margin: 5px;[m
[31m-    border-radius: 3px;[m
[31m-    font-size: 30px;[m
[31m-    text-align: center;[m
[31m-    z-index: 4;[m
[31m-  }[m
[1mdiff --git a/assets/fonts.css b/assets/fonts.css[m
[1mindex 89117e9..d43dafb 100644[m
[1m--- a/assets/fonts.css[m
[1m+++ b/assets/fonts.css[m
[36m@@ -1,20 +1,20 @@[m
 @font-face {[m
   font-family: 'Cerebri Regular';[m
[31m-  src: url('../fonts/cerebrisans/cerebrisans-regular.woff') format('woff');[m
[32m+[m[32m  src: url('cerebrisans/cerebrisans-regular.woff') format('woff');[m
 }[m
 @font-face {[m
   font-family: 'Cerebri Book';[m
[31m-  src: url('../fonts/cerebrisans/cerebrisans-book.woff') format('woff');[m
[32m+[m[32m  src: url('cerebrisans/cerebrisans-book.woff') format('woff');[m
 }[m
 @font-face {[m
   font-family: 'Cerebri Medium';[m
[31m-  src: url('../fonts/cerebrisans/cerebrisans-medium.woff') format('woff');[m
[32m+[m[32m  src: url('cerebrisans/cerebrisans-medium.woff') format('woff');[m
 }[m
 @font-face {[m
   font-family: 'Cerebri Semibold';[m
[31m-  src: url('../fonts/cerebrisans/cerebrisans-semibold.woff') format('woff');[m
[32m+[m[32m  src: url('cerebrisans/cerebrisans-semibold.woff') format('woff');[m
 }[m
 @font-face {[m
   font-family: 'Cerebri Bold';[m
[31m-  src: url('../fonts/cerebrisans/cerebrisans-bold.woff') format('woff');[m
[32m+[m[32m  src: url('cerebrisans/cerebrisans-bold.woff') format('woff');[m
 }[m
[1mdiff --git a/index.html b/index.html[m
[1mindex 548072b..a102a52 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -6,9 +6,9 @@[m
   <title>Javascript30 by DCTS</title>[m
 [m
   <!-- LINK STYLESHEETS -->[m
[31m-  <link rel="stylesheet" href="style.css">[m
[31m-  <link rel="stylesheet" href="assets/css/fonts.css">[m
[31m-  <link rel="stylesheet" href="assets/css/banner-landing.css">[m
[32m+[m[32m  <link rel="stylesheet" href="css/style.css">[m
[32m+[m[32m  <link rel="stylesheet" href="assets/fonts/fonts.css">[m
[32m+[m[32m  <link rel="stylesheet" href="assets/images/banner-landing.css">[m
 </head>[m
 [m
 <body>[m
[1mdiff --git a/res/css/banner-landing.css b/res/css/banner-landing.css[m
[1mdeleted file mode 100644[m
[1mindex e57b61b..0000000[m
[1m--- a/res/css/banner-landing.css[m
[1m+++ /dev/null[m
[36m@@ -1,54 +0,0 @@[m
[31m-.full-screen-banner {[m
[31m-  /*border: 2px solid red;*/[m
[31m-  height: 580px;[m
[31m-  font-weight: 700;[m
[31m-  position: relative;[m
[31m-  z-index: 3;[m
[31m-}[m
[31m-[m
[31m-.flex-container {[m
[31m-  /*border: 2px solid green;*/[m
[31m-  padding-top: 100px;[m
[31m-  display: flex;[m
[31m-  justify-content: center;[m
[31m-  width: 75vw;[m
[31m-  margin: 0 auto;[m
[31m-}[m
[31m-.banner-headings {[m
[31m-  text-align: right;[m
[31m-  margin: 0;[m
[31m-}[m
[31m-#main-heading {[m
[31m-  font-family: 'Cerebri Bold';[m
[31m-  font-size: 48px;[m
[31m-  letter-spacing: 0.05rem;[m
[31m-  font-weight: 700;[m
[31m-  line-height: 1.1;[m
[31m-  margin-top: 80px;[m
[31m-  margin-bottom: 20px;[m
[31m-}[m
[31m-#main-subheading-1 {[m
[31m-  font-family: 'Cerebri Regular';[m
[31m-  font-size: 30px;[m
[31m-  letter-spacing: 0.32rem;[m
[31m-  font-weight: 700;[m
[31m-  margin-bottom: 20px;[m
[31m-}[m
[31m-#main-subheading-2 {[m
[31m-  font-family: 'Cerebri Regular';[m
[31m-  font-size: 30px;[m
[31m-  letter-spacing: 0.12rem;[m
[31m-  font-weight: 400;[m
[31m-}[m
[31m-[m
[31m-/* DIV WHICH CONTAINS IMAGE */[m
[31m-.banner-img {[m
[31m-  height: 500px;[m
[31m-  width: 700px;[m
[31m-  z-index: 2;[m
[31m-}[m
[31m-/* LAPTOP IMAGE */[m
[31m-.banner-img img {[m
[31m-  width: 650px;[m
[31m-  margin-left: 40px;[m
[31m-}[m
[1mdiff --git a/res/css/conatiner.css b/res/css/conatiner.css[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/res/css/style.css b/res/css/style.css[m
[1mdeleted file mode 100644[m
[1mindex f58f72f..0000000[m
[1m--- a/res/css/style.css[m
[1m+++ /dev/null[m
[36m@@ -1,21 +0,0 @@[m
[31m-body {[m
[31m-  margin: 0 auto;[m
[31m-  background-color: rgb(250, 250, 250);[m
[31m-  color: #11263F;[m
[31m-  font-family: 'Cerebri Regular';[m
[31m-}[m
[31m-[m
[31m-.poly-background {[m
[31m-  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 60%);[m
[31m-  width: 100%;[m
[31m-  height: 205%;[m
[31m-  -webkit-clip-path: polygon(100% 0, 100% 25%, 100% 48%, 70% 48%, 43% 19%, 43% 0);[m
[31m-  clip-path: polygon(100% 0, 100% 25%, 100% 82%, 70% 48%, 43% 19%, 43% 0);[m
[31m-  position: absolute;[m
[31m-  overflow: visible;[m
[31m-  z-index: 1;[m
[31m-  top: 0;[m
[31m-  /*-webkit-border-radius: 10px;*/[m
[31m-  /*-moz-border-radius: 10px;*/[m
[31m-  /*border-radius: 10px;*/[m
[31m-}[m
[1mdiff --git a/res/images/laptop-landing-2.png b/res/images/laptop-landing-2.png[m
[1mdeleted file mode 100644[m
[1mindex aa6e5f7..0000000[m
Binary files a/res/images/laptop-landing-2.png and /dev/null differ
[1mdiff --git a/res/images/laptop-landing.png b/res/images/laptop-landing.png[m
[1mdeleted file mode 100644[m
[1mindex 118712f..0000000[m
Binary files a/res/images/laptop-landing.png and /dev/null differ
