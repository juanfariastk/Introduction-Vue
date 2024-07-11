<template>
    <NavBar v-once/>
    <header>
        <Header />
    </header>
    <main>
        <User/>
        <ListUsers/>
    </main>
</template>

<script setup>
import Header from './components/Header.vue';
import User from './components/User.vue';
import NavBar from './components/NavBar.vue';
import ListUsers from './components/ListUsers.vue';
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.profile{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    margin: 20px auto;
}

.container-user{
    display: flex;
    width: 1200px;
    flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: center;
}

.box-user{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    margin: 20px auto;
}

</style>
