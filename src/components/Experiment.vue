<template>
<div class="m-20">
    <nav class="tabs flex flex-col sm:flex-row">
        <button @click="toggle_tabs('product')" :class="{ active: activeTab == 'product'}" data-target="panel-1" class="tab text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
            Product
        </button>
        
        <button  @click="toggle_tabs('services')" :class="{ active: activeTab == 'services'}" data-target="panel-2" class="tab ext-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Services!
        </button>

    </nav>
</div>
</template>

<script> 
export default {
   name: 'Experiment',

   data() {
       return {
           activeTab: 'product',
       }
   },

     methods: {
        toggle_tabs(tabname) {
            this.activeTab = tabname;
        },
     },

}
</script> 


<style scoped>

.active {
    background-color: #6da4f7;
}


</style>
