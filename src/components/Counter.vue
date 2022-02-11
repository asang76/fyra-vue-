<template>
    <div class="bg-black w-full">
<div class="container flex w-full m-4 text-white">
 <div class="flex justify-center m-4 text-center">
  <div class="w-full ">
   <span id="count1" class="display-4 w-10 h-10 m-4 text-4xl border-4 border-black"></span>
  </div>
  <div class="w-full h-10 ">
   <span id="count2" class="display-4 m-4 w-10 h-10 text-4xl border-4 border-black"></span>
  </div>
  <div class="w-full h-10">
   <span id="count3" class="display-4 m-4 w-10 h-10 text-4xl border-4 border-black"></span>
  </div>
  <div class="w-full h-10">
   <span id="count4" class="display-4 m-4 w-10 h-10 text-4xl border-4 border-black"></span>
  </div>
 </div>
</div>
    </div>
</template>

<script>
export default {
  name: 'counter',
  mounted () {
    const counterAnim = (qSelector, start = 0, end, duration = 3000) => {
      const target = document.querySelector(qSelector)
      let startTimestamp = null
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        target.innerText = Math.floor(progress * (end - start) + start)
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }
    document.addEventListener('DOMContentLoaded', () => {
      counterAnim('#count1', 10, 300, 2000)
      counterAnim('#count2', 5000, 250, 2500)
      counterAnim('#count3', -1000, -150, 2000)
      counterAnim('#count4', 500, -100, 2500)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
