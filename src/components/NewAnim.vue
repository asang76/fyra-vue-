<template>
<div>
    <div class="container w-1/2 flex">
        <div>
            <h1>this is heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam repellat sunt magnam. Unde inventore natus incidunt provident recusandae facilis sequi!
            </p>
        </div>
        <div class="">
            <div class=" w-full h-full relative">
                <div class=" w-32 h-60 absolute overlap-up ">
                    <img src="../assets/newbgimage.png" class="w-32 h-60 bg-gray-500 " alt="">
                </div>
                <div class="w-32 h-60 absolute ml-12 overlap-down">
                    <img src="../assets/newbgimage.png" class="w-32 h-60  bg-gray-500 " alt="">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'overlap'

}
</script>

<style scoped>
.overlap-down {
    animation-name: up-down;
    animation-fill-mode: both;
    animation-direction: normal;
    animation-duration: 2000ms;
}

@keyframes up-down {
    0% {
        opacity: 0.4;
        bottom: 0px;
    }

    100% {
        opacity: 1;
        bottom: -100px;
    }
}

.overlap-down {
    webkit-animation-name: up-down;
    webkit-animation-fill-mode: both;
    webkit-animation-direction: normal;
    webkit-animation-duration: 2000ms;
}

@-webkit-keyframes up-down {
    0% {
        opacity: 0.4;
        bottom: 0px;
    }

    100% {
        opacity: 1;
        bottom: -100px;
    }
}

.overlap-up {
    animation-name: down-up;
    animation-direction: normal;
    animation-fill-mode: both;
    animation-duration: 2000ms;
}

@keyframes down-up {
    0% {
        opacity: 0.4;
        top: 0px;
    }

    100% {
        opacity: 1;
        top: -100px;
    }
}

.overlap-up {
    webkit-animation-name: down-up;
    webkit-animation-direction: normal;
    webkit-animation-fill-mode: both;
    webkit-animation-duration: 2000ms;
}

@-webkit-keyframes down-up {
    0% {
        opacity: 0.4;
        top: 0px;
    }

    100% {
        opacity: 1;
        top: -100px;
    }
}
</style>
