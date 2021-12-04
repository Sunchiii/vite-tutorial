<template>
   <div class="align">
       <Banner />
    </div> 
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Banner from '../components/Home/Herobanner.vue'

export default defineComponent({
    setup(){
        return { }
    },
    components:{
        Banner
    }

})
</script>

<style>

</style>