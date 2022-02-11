<template>
<nav id="header" class="fixed w-full z-30 top-0 text-black ">
<!-- style="box-shadow: 1.0px 2.0px 2.0px hsl(0deg 0% 0% / 0.38); Just in case you want shadow effect--> 
    <div>
  <nav class="h-20 w-full
     rounded-2xl ">
        <div class="logo" > 
           <a  :href="$router.resolve({ name: 'Home' }).href" > <img class="w-20 h-10 m-4" src="https://fyra.biz/static/img/fyra-logo.png" alt="Logo Image"/> </a>
        </div>
        <div class="hamburger rounded-xl">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links font-bold rounded-lg flex w-full px-10 m-4 justify-evenly items-center">
            <li class="dropdown"><a class="prodbtn inline-block py-0 px-4 text-black font-bold hover:text-yellow-500" :class="{'underline': active_link == 'products'}">PRODUCTS  <span class="flex justify-center "><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg></span> </a>
                     <div class="dropdown-content w-full flex">
    <a  :href="$router.resolve({ name: 'Product' }).href"> &#10132; &nbsp; Products </a>

    <a  :href="$router.resolve({ name: 'Restaurant' }).href"
     > &#10132; &nbsp; Restaurant</a>
    <a  :href="$router.resolve({ name: 'SmallBusiness' }).href"
    >  &#10132; &nbsp; Small Shop</a>
    <a  :href="$router.resolve({ name: 'SmallMediumBusiness' }).href"
    >  &#10132; &nbsp; SMEs</a>
  </div>
            </li>
            <li><a  :href="$router.resolve({ name: 'Contact' }).href">CONTACT US</a></li>
            <li><a :href="$router.resolve({ name: 'Services' }).href">SERVICES</a></li>
            <li><a :href="$router.resolve({ name: 'About' }).href">ABOUT</a>
            </li>
            <li><a :href="$router.resolve({ name: 'Enquiry' }).href">ENQUIRY</a></li>
            <li><button class="login-button rounded-md bg-purple-700"  href="https://dashboard.passerby.in/register/">Login</button></li>
            <li><button class="join-button rounded-md bg-purple-700"  href="https://dashboard.passerby.in/auth/">Join</button></li>
        </ul>
    </nav>
  </div>
</nav>
</template>

<script>
import {
    mapGetters
} from 'vuex';

export default {
    name: "Navigation",
    data() {
        return {
            isActive: true,

        };
    },

    computed: {
        ...mapGetters({
            active_link: 'active_link',

        })
    },

    methods: {
        toggleMenu() {
            this.isActive = !this.isActive;
        },
    },
    mounted () {
    const hamburger = document.querySelector('.hamburger')
    const navLinks = document.querySelector('.nav-links')
    const links = document.querySelectorAll('.nav-links li')

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open')
      links.forEach(link => {
        link.classList.toggle('fade')
      })

      hamburger.classList.toggle('toggle')
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import "https://fyra.biz/static/css/tailwind.min.css";

body{
    overflow-x: hidden;
}
nav{
    background-color: #f9fff9;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    position: fixed;
    z-index: 10;
}

/*Styling logo*/
.nav-links li a:hover {
    color: #9e1111;
}
.nav-links li {
    position: relative;
}
.nav-links li a::after {
    content: "";
    display: block;
    height: 5px;
    width: 0%;
    background-color: #8281d8;
    position: absolute;
    transition: all ease-in-out 250ms;
    margin: 0 0 0 10%;
    border-radius:10px;
}
.nav-links li a:hover::after{
    width: 80%;
}

/*Styling Buttons*/
.login-button{
      color: #d3d62e;
  background-color:#7234d6;
    border-radius: 0.3em;
    padding: 0.6rem 0.8rem;
    margin-left: 2vw;
    font-size: 1.2rem;
    cursor: pointer;
}
.login-button:hover {
    color: #000000;
    transition: all ease-in-out 350ms;
    background-color: #beca1a;
}
.join-button{
    color: #d3d62e;
  background-color:#7234d6;
    border-radius: 0.3em;
    padding: 0.6rem 0.8rem;
    font-size: 1.2rem;
    cursor: pointer;
}
.join-button:hover {
    color: #202210;
    background-color: #787daa;
    border:1.5px solid #f2f5f7;
    transition: all ease-in-out 350ms;
    font: bold;
}

/*Styling Hamburger Icon*/
.hamburger div{
    width: 30px;
    height:3px;
    background: #000000;
    margin: 5px;
    transition: all 0.3s ease;
}
.hamburger{
    display: none;
}

/*Stying for small screens*/
@media screen and (max-width: 800px){
    nav{
        position: fixed;
        z-index: 3;
    }
    .hamburger{
        display:block;
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 50%;
        transform: translate(-5%, -50%);
        z-index: 2;
        transition: all 0.5s ease;
    }
    .nav-links{
        position: fixed;
        background: #3f5abd;
        height: 100vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(50px at 90% -20%);
        -webkit-clip-path: circle(50px at 90% -10%);
        transition: all 1s ease-out;
        pointer-events: none;
        margin:2px;
        right:1px;
    }
    .nav-links.open{
        clip-path: circle(1000px at 90% -10%);
        -webkit-clip-path: circle(1000px at 90% -10%);
        pointer-events: all;
    }
    .nav-links li{
        opacity: 0;
    }
    .nav-links li:nth-child(1){
        transition: all 0.5s ease 0.2s;
    }
    .nav-links li:nth-child(2){
        transition: all 0.5s ease 0.4s;
    }
    .nav-links li:nth-child(3){
        transition: all 0.5s ease 0.6s;
    }
    .nav-links li:nth-child(4){
        transition: all 0.5s ease 0.7s;
    }
    .nav-links li:nth-child(5){
        transition: all 0.5s ease 0.8s;
    }
    .nav-links li:nth-child(6){
        transition: all 0.5s ease 0.9s;
        margin: 0;
    }
    .nav-links li:nth-child(7){
        transition: all 0.5s ease 1s;
        margin: 0;
    }
    li.fade{
        opacity: 1;
    }
}
/*Animating Hamburger Icon on Click*/
.toggle .line1{
    transform: rotate(-45deg) translate(-5px,6px);
}
.toggle .line2{
    transition: all 0.7s ease;
    width:0;
}
.toggle .line3{
    transform: rotate(45deg) translate(-5px,-6px);
}
.gradient {
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}

.prodbtn {
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #455bbd;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: rgb(228, 217, 63);
  padding: 6px 8px;
  padding-left:20px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-bottom: 2px solid rgb(255, 255, 255);
  border-radius: 10px;
  font-weight: bold;

}
#border li a:after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: rgb(163, 24, 255);
  transition: width 0.3s;
  border-radius: 8px;
}
#border li a:hover::after {
  width: 50%;
  transition: width 0.5s;
}
#border li.a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid blue;
}

.dropdown-content a:hover {background-color: rgb(85, 99, 179);}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .prodbtn {background-color: rgb(41, 54, 172);
border-radius: 20px;}

</style>
