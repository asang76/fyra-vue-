<template>
  <div id="demo">
    <slot></slot>
  </div>
</template>

<style scoped>


#demo {
  background-color: #000;
  backround-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url("/static/img/card-1000x667.jpg");
}

@media screen and (orientation: portrait) {
  #demo {
    background-image: url("/static/img/card-450x800.jpg");
    
    background-image: 
      image-set(
        url("/static/img/card-450x800.jpg") 1x, 
        url("/static/img/card-900x600.jpg") 2x
      );
  }
}

@media screen and (orientation: landscape) {
  #demo {
    background-image: url("/static/img/card-450x300.jpg");
    
    background-image: 
      image-set(
        url("/static/img/card-450x300.jpg") 1x, 
        url("/static/img/card-900x600.jpg") 2x
      );
  }
}

@media screen and (min-width: 450px) {
  #demo {
    background-image: url("/static/img/card-750x500.jpg");
    
    background-image: 
      image-set(
        url("/static/img/card-750x500.jpg") 1x, 
        url("/static/img/card-1500x1000.jpg") 2x
      );
  }
}


@media screen and (min-width: 751px) {
  #demo {
    background-image: url("/static/img/card-1000x667.jpg");
    
    background-image: 
      image-set(
        url("/static/img/card-1000x667.jpg") 1x, 
        url("/static/img/card-2000x1333.jpg") 2x
      );
  }
}


#demo {
  padding: 100px 40px;
  color: #fff;
  text-shadow: 0 0px 2px #000;
  font-size: 200%;
  text-align: center;
}

@media screen 
  and (min-device-width: 1024px) 
   { 
    #demo {
      padding: 250px 40px;
    }
}

.desc h1{
font-size:45px;
font-weight: bold;
}

/*
.card{
  margin : auto;
  width: 100%;
  overflow : hidden;
  border-radius : 20px;
  background : white;
  margin-top:50px;
  transition: all .2s;
  box-shadow:5px 5px 15px rgba(0,0,0, .3);
  background: linear-gradient(150deg, #f731db, #4600f1 100%);
}

.card:hover {
  box-shadow:5px 5px 25px rgba(0,0,0, .5);
  transform: translate(-5px, -5px);
}

.card:hover .icon svg{
  animation : iconjln 1s;
}

.img-cover{
  position: relative;
}

.card img{
  width: 350px;
  height:350px;
  object-fit:cover;
}

.icon{
  position:absolute;
  top:0;
  padding : 25px;
  right:0;
  border-bottom-left-radius:20px;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.desc{
  padding : 1.5em ;
  font-family: 'Poppins', sans-serif;
}
.desc h1{
  display:inline;
}
.tdesc{
  margin-bottom:40px;
  width:100%;
  height:50px;
  overflow: auto;
}

.desc a{
  text-decoration: none;
  background-color: dodgerblue;
  padding: 15px 25px;
  color:white;
  border-radius: 15px;
  display:block;
  text-align: center;
  transition: all .2s;
}
.desc a:hover{
  background-color: SteelBlue;
}
.desc a:hover svg{
  animation : iconjln 1s;
}

@keyframes iconjln{
  0%, 100% {
    opacity : 1;
    transform: translateX(0%);
  }
  50%{
    opacity:0;
    transform: translateX(100%);
  }
  70%{
    opacity:0;
    transform:translateX(-100%);
  }
}


*/


</style>

