<template>
<nav id="header" class="fixed w-full z-30 top-0 text-black bg-white">
<!-- style="box-shadow: 1.0px 2.0px 2.0px hsl(0deg 0% 0% / 0.38); Just in case you want shadow effect-->
    <div class="
        w-10/12
        container
        flex flex-wrap
        lg:ml-24
        md:ml-40
        ml-8
        mt-0
        py-2
        mx-auto
        items-center
        justify-between
      ">
        <div class="pl-4 flex items-center">
            <a class="
            toggleColour
            text-black
            no-underline
            hover:no-underline
            font-bold
            text-2xl
            lg:text-4xl
          ">
                <img src="https://fyra.biz/static/img/fyra-logo.png" style="width: 96px; height: auto" />
            </a>
        </div>
        <div class="block lg:hidden pr-4">
            <button id="nav-toggle" class="
            flex
            items-center
            p-1
            text-pink-800
            hover:text-gray-900
            focus:outline-none
            focus:shadow-outline
            transform
            transition
            hover:scale-105
            duration-300
            ease-in-out
          " @click="toggleMenu">
                <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <div class="
          w-full
          flex-grow
          lg:flex
          lg:items-center
          lg:w-auto
          mt-2
          lg:mt-0
          bg-white
          lg:bg-transparent
          text-black
          p-4
          lg:p-0
          z-20
        " v-bind:class="{ hidden: isActive }" id="nav-content">
            <ul id="border" class="list-reset lg:flex justify-end flex-1 items-center">
                <li class="mr-3 dropdown">
                    <a class="prodbtn inline-block py-2 px-4 text-black font-bold " :class="{'underline': active_link == 'products'}">PRODUCTS &nbsp; &#8595; </a>
                     <div class="dropdown-content">
    <a
     > &#10132; &nbsp; Products</a>

    <a
     > &#10132; &nbsp; Restaurant</a>
    <a
    >  &#10132; &nbsp; Small Shop</a>
    <a
    >  &#10132; &nbsp; SMEs</a>
  </div>
                </li>
                <li class="mr-3">
                    <a class="inline-block py-2 px-4 text-black font-bold " >SERVICES</a>
                </li>
                <li class="mr-3">
                    <a class="
                inline-block
                text-black
                hover:text-gray-800 hover:text-underline
                py-2
                px-4
                font-bold
              " href="https://dashboard.passerby.in/register/">Sign-Up</a>
                </li>
                <li class="mr-3">
                    <a class="
                inline-block
                text-black
                hover:text-gray-800 hover:text-underline
                py-2
                px-4
                font-bold
              " href="https://dashboard.passerby.in/auth/">Sign-In</a>
                </li>
                <li class="mr-3">
                    <a class="
                inline-block
                text-black
                hover:text-gray-800 hover:text-underline
                py-2
                px-4
                font-bold
              " >ABOUT</a>
                </li>
                <li class="mr-3">
                    <a class="
                inline-block
                text-black
                hover:text-gray-800 hover:text-underline
                py-2
                px-4
                font-bold
              " >CONTACT US</a>
                </li>
                <li class="mr-3">
                    <a class="
                inline-block
                text-black
                hover:text-gray-800 hover:text-underline
                py-2
                px-4
                font-bold
              " >ENQUIRY</a>
                </li>

            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import {
//   mapGetters
} from 'vuex'

export default {
  name: 'Navigation',
  data () {
    return {
      isActive: true

    }
  },

  //   computed: {
  //     ...mapGetters({
  //       active_link: 'active_link'

  //     })
  //   },

  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import "https://fyra.biz/static/css/tailwind.min.css";

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
  border-radius: 20px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 20px;
}

.dropdown-content a {
  color: black;
  padding: 6px 8px;
  padding-left:20px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-bottom: 2px solid gainsboro;
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
  width: 100%;
  transition: width 0.5s;
}
#border li.a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid blue;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .prodbtn {background-color: white;}

</style>
