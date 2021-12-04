<script setup lang="ts">
import Menu from './components/layouts/Menu.vue'
import Footer from './components/layouts/Footer.vue'
</script>

<template>
   <Menu />
   <router-view></router-view>
   <Footer />
</template>

<style>
.align{
   text-align: center;
}
</style>
