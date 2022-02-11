<template>
<div  class=" " >
    <main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
    <header class="h-24 sm:h-32 flex items-center z-30 w-full">
    </header>
    <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Be on
                    <span class="text-5xl sm:text-7xl">
                        Time
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div class="flex mt-8">
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Get started
                    </a>
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="https://pixabay.com/get/g2dae50c584b571a1a47ecfb33ab83812e23455b4a8c9dc969ac27f822aa23d448ee5161f105df0a55acbaa7d3c56fb72b0adaac576cbad24ea577a2baae4aa6a8c215b82365d55e2c6efd6ec32cf4f7a_1280.png" class="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
</main>

</div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  mounted () {
    const mySlider = document.querySelectorAll('.mySlider')
    const index = document.querySelectorAll('.index')
    let counter = 1
    // var timer = setInterval(autoslide, 10000)

    slideFun(counter)

    // function autoslide () {
    //   counter += 1
    //   slideFun(counter)
    // }
    // function resetTimer () {
    //   if (typeof timer !== 'undefined') {
    //     clearInterval(timer)
    //   }
    //   timer = setInterval(autoslide, 10000)
    // }

    // function plusSlides(n) {
    //   counter += n
    //   slideFun(counter)
    //   resetTimer()
    // }
    // function currentSlide(n) {
    //   counter = n
    //   slideFun(counter)
    //   resetTimer()
    // }
    function slideFun (n) {
      let i
      for (i = 0; i < mySlider.length; i++) {
        mySlider[i].style.display = 'none'
        mySlider[i].classList.add('hidden')
      }
      for (i = 0; i < index.length; i++) {
        index[i].classList.remove('action')
      }
      if (n > mySlider.length) {
        counter = 1
      }
      if (n < 1) {
        counter = mySlider.length
      }
      if (mySlider[counter - 1].style.removeProperty) {
        mySlider[counter - 1].style.removeProperty('display')
      } else {
        mySlider[counter - 1].style.removeAttribute('display')
      }
      mySlider[counter - 1].classList.remove('hidden')
      mySlider[counter - 1].classList.add('md:grid', 'md:grid-cols-3', 'md:gap-4')
      index[counter - 1].classList.add('action')
    }
  }
}
</script>
<style scoped>
#tsparticles {
  width:100%;
  height: 100%;
}
.ani{

}
.ani{
}
.para{

}

.ani{
  animation-name: border;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-duration: 3000ms;
  }
  @keyframes border {
  0%{
    opacity: 0;
    width: 0%;
    height: 0%;
  }

  100%{
    opacity: 1;
    width: 70%;
    height: 50%;

  }
  }
  .slider{
width:100%;
height: 100%px;
overflow: hidden;
}

.images{
position: relative;
margin: 0;
font-size: 0;
top: 0;
transition: top 2s;
}
.fade {
  animation: fade 1.5s;
}
.img {
  transform: scale(1, 1);
  animation: zoomin 1.5s;
}
.action,
.index:hover {
  background-color: #46505b;
}
@keyframes fade {
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
}
@keyframes zoomin {
  from {
    transform: scale(1.2, 1.2);
  }
  to {
    transform: scale(1, 1);
  }
}
@media (min-width: 500px) and (max-width: 778px) {
  .navigation {
    bottom: 30rem;
  }
}
@media (min-width: 300px) and (max-width: 380px) {
  .min-h-screen {
    min-height: 75vh;
  }
}
.body{
    transform: skewY(-8.9deg);
}

</style>
