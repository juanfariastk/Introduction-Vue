<template>
    <div class="profile">
        <div class="container-user">
            <span v-if="loading">Carregando dados...</span>
            <span v-else-if="error">Erro ao carregar dados</span>
            <div class="box-user" v-for="user in usersCollected" :key="user.id">
                <h4 v-if="user.id === 3">Guapo abism!</h4>
                <h4 v-else>no guapo!</h4>
                <CardUser :userData="user" @showProfile="addUserSelected" />
            </div>
        </div>
        
    </div>
</template>

<script setup>

    import {onMounted, ref, computed} from 'vue';
    import { useFetch } from '@/composables/fetch';
    import CardUser from './CardUser.vue';

    const {data:usersCollected , error, loading} = useFetch('https://reqres.in/api/users?delay=3');

    const usersSelected = ref([]);

    const addUserSelected = (e) => {
        usersSelected.value.push(e);
        console.log(usersSelected.value);
    }

</script>

<style scoped>

</style>