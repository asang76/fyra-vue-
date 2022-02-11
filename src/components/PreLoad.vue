<template>
    <div class="w- h-96 top-4">
<div class="first-wrapper w-full h-96 flex justify-center">
  <div class="square-loader">
    <div class="square first_square"></div>
    <div class="square second_square"></div>
    <div class="square third_square"></div>
  </div>
</div>

    </div>
</template>

<script>
export default {
  name: 'preloader'
}
</script>

<style  scoped>
.first-wrapper {
background-color: #0EB1D2;
}

.square {
width: 50px;
height: 50px;
background-color: rgba(255,255,255,0);
margin-right: auto;
margin-left: auto;
border: 2px solid #fff;
left: 73px;
top: 73px;
position: absolute;
}

.square-loader {
  transform: rotate(45deg);
}

.first_square {
  animation: first_square_animate 1s infinite ease-in-out;
}
.second_square {
animation: second_square 1s forwards,
             second_square_animate 1s infinite ease-in-out;
}
.third_square {
animation: third_square 1s forwards,
             third_square_animate 1s infinite ease-in-out;
}
@keyframes second_square {
  100% { width: 100px; height:100px; left: 48px; top: 48px; }
}

@keyframes third_square {
  100% { width: 150px; height:150px; left: 23px; top: 23px;}
}

@keyframes first_square_animate {
  0%   { transform: perspective(100px) rotateX(0deg) rotateY(0deg);}
  50%  { transform: perspective(100px) rotateX(-180deg) rotateY(0deg); }
  100% { transform: perspective(100px) rotateX(-180deg) rotateY(-180deg); }
}

@keyframes second_square_animate {
  0%   { transform: perspective(200px) rotateX(0deg) rotateY(0deg); }
  50%  { transform: perspective(200px) rotateX(180deg) rotateY(0deg); }
  100% { transform: perspective(200px) rotateX(180deg) rotateY(180deg); }
}

@keyframes third_square_animate {
  0%   { transform: perspective(300px) rotateX(0deg) rotateY(0deg); }
  50%  { transform: perspective(300px) rotateX(-180deg) rotateY(0deg); }
  100% { transform: perspective(300px) rotateX(-180deg) rotateY(-180deg); }
}
.first_square {
  webkit-animation: first_square_animate 1s infinite ease-in-out;
}
.second_square {
webkit-animation: second_square 1s forwards,
             second_square_animate 1s infinite ease-in-out;
}
.third_square {
webkit-animation: third_square 1s forwards,
             third_square_animate 1s infinite ease-in-out;
}
@-webkit-keyframes second_square {
  100% { width: 100px; height:100px; left: 48px; top: 48px; }
}

@-webkit-keyframes third_square {
  100% { width: 150px; height:150px; left: 23px; top: 23px;}
}

@-webkit-keyframes first_square_animate {
  0%   { transform: perspective(100px) rotateX(0deg) rotateY(0deg);}
  50%  { transform: perspective(100px) rotateX(-180deg) rotateY(0deg); }
  100% { transform: perspective(100px) rotateX(-180deg) rotateY(-180deg); }
}

@-webkit-keyframes second_square_animate {
  0%   { transform: perspective(200px) rotateX(0deg) rotateY(0deg); }
  50%  { transform: perspective(200px) rotateX(180deg) rotateY(0deg); }
  100% { transform: perspective(200px) rotateX(180deg) rotateY(180deg); }
}

@-webkit-keyframes third_square_animate {
  0%   { transform: perspective(300px) rotateX(0deg) rotateY(0deg); }
  50%  { transform: perspective(300px) rotateX(-180deg) rotateY(0deg); }
  100% { transform: perspective(300px) rotateX(-180deg) rotateY(-180deg); }
}
</style>
