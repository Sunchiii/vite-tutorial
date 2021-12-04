<template>
    <div>
        <div class="container mx-auto">
            <div><img :src="ant" alt="" class="w-10"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import ant from '../../assets/ant_man.png'

export default defineComponent({
    setup(){
        return {
            ant
        }
    }
})
</script>

<style>

</style>