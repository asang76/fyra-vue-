<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  /* max-width: 100%; */ 
  text-align: left;
  width: 90%;
  justify-content: center;
  text-align: left;
  /*
  background-image: url("https://fyrabiz.herokuapp.com/static/img/top-view-office-desk-with-laptop-growth-chart-scaled.jpeg");
  background-repeat: no-repeat;
  background-size: contain;
  background-size: 100% 100%;
  */
  
}

@media only screen and (max-width: 600px) {
  .card {
    text-align: left;
    width: 100%;
  }
}

@media screen and (max-width: 1215px) {
  .card {
    text-align: left;
    width: 90%;
  }
}
.card img {
  display: block;
   width: 100%;
   
}

</style>

