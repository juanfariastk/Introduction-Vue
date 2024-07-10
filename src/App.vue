<template>
    <NavBar v-once/>
    <header>
        <Header />
    </header>
    <main>
        <User/>
    </main>
</template>

<script setup>
import Header from './components/Header.vue';
import User from './components/User.vue';
import NavBar from './components/NavBar.vue';
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
