<template>
    <div class="profile">
        <div class="container-user">
            <div class="box-user" v-for="user in usersCollected" :key="user.id">
                <h4 v-if="user.id === 3">Guapo abism!</h4>
                <h4 v-else>no guapo!</h4>
                <CardUser :userData="user" @showProfile="addUserSelected" />
            </div>
        </div>
        
    </div>
</template>

<script setup>

    import {onMounted, ref, provide} from 'vue';
    import CardUser from './CardUser.vue';

    const usersCollected = ref([]);
    const usersSelected = ref([]);
    
    const getUsersPerPage = async (page) => {
        const req = await fetch(`https://reqres.in/api/users?page=${page}`);
        const res = await req.json();
        return res.data;
    }
    
    const addUsersCollected = async () => {
        usersCollected.value = await getUsersPerPage(1);
        //console.log(usersCollected.value);
    }

    const addUserSelected = (e) => {
        usersSelected.value.push(e);
        console.log(usersSelected.value);
    }


    onMounted( async () =>{
        await addUsersCollected();
    })

</script>

<style scoped>

</style>