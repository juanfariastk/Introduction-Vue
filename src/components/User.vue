<template>
    <!-- profile 1 
    <div class="profile">
        <img v-bind:src="userData.avatar" alt="Profile" />
        <strong> {{ userData.firstName + ' ' + userData.lastName }}</strong>
        <span>{{ userData.email}}</span>
    </div> 
     <button v-bind:disabled="validateUserCode" @click="searchUser">Buscar</button>
    -->
    <form class="form-control">
        <input type="number" v-model="userCode" placeholder="First Name" />
    </form>
    <div class="profile">
        <img :src="userData.avatar" alt="Profile" />
        <strong> {{ formatUserName }}</strong>
        <span>{{ userData.email}}</span>
    </div>

    <div class="profile">
        <div class="container-user">
            <div class="box-user" v-for="users in usersCollected" :key="users.id">
                <h4 style="color:blue" v-if="users.first_name === 'Emma'"> High diff!!!</h4>
                <h4 v-else > No diff!</h4>
                <img :src="users.avatar" alt="Profile" />
                <strong> {{ users.first_name + ' ' + users.last_name }}</strong>
                <span v-email="users.email"></span>
            </div>
        </div>
        
    </div>

</template>

<script setup>

    import { ref, reactive, onMounted, onBeforeMount,
            onBeforeUpdate, onUpdated, onBeforeUnmount, 
            onUnmounted,computed,
            watch,
            watchEffect
     } from 'vue';
    /*
    const name = ref("guapo abism");
    const bornDate = ref(2004);
    console.log(name.value) 
    */
    // const userData = reactive({firstName: 'guapo abism', lastName: 'gap', avatar: '', email: ''});

    /*const convertDate = () => {
        return userData.yearsOld = 2024 - userData.bornDate;
    }*/

    
    const userData = ref({})
    const userCode = ref(1);
    const usersCollected = ref([]);

    const getUserData = async (userId) => {
        const req = await fetch(`https://reqres.in/api/users/${userId}`);
        const res = await req.json();
        return res.data;
    }

    const getUsersPerPage = async (page) => {
        const req = await fetch(`https://reqres.in/api/users?page=${page}`);
        const res = await req.json();
        return res.data;
    }

    const addUsersCollected = async () => {
        usersCollected.value = await getUsersPerPage(1);
        //console.log(usersCollected.value);
    }

    //directive use to create global 

    const vEmail = {
        created(element, binding, vnode){
            element.style.color = 'gray';
            // console.log(element.innerText);
            element.innerHTML = `<a href="${binding.value}">${binding.value} <a/> `
            
        }
    }

 /*   const searchUser = async () =>{
        userData.value = await getUserData(userCode.value)
    }
*/
/*
    onMounted( async () => {
        userData.value = await getUserData(1);
        //console.log(userData.value)
        
        userData.avatar = 'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg';
        userData.email = 'adocicado@docinho.com';
        userData.firstName = 'Docinho';
        userData.lastName = 'Florzinha';
        
        //console.log(await getUserData());
    }); 
*/
    //const validateUserCode = computed( () => userCode.value <=0 ) ;

    const formatUserName = computed( () => userData.value.first_name + ' ' + userData.value.last_name);

    /* watch(userCode , (newValue, oldValue) => {
        console.log(newValue, oldValue);
        if(newValue <= 0){
            alert('Codigo Invalido');
            userCode.value = 0;
        }
    });
    */

    onMounted( async () => {
        addUsersCollected();
    });

    watchEffect( async () => {
      if(userCode.value <= 0){
          alert('Codigo Invalido');
          userCode.value = 1;
      }

      userData.value = await getUserData(userCode.value)
    });

</script>

<style scoped>
    .form-control{
        margin: 0 auto;
        padding: 15px;
        width: 250px;
        background-color: rgb(158, 161, 167);
    }
    form input{
        width: 100%;
    }

    button{
        margin: 0px auto 20px auto;
        padding: 5px;
        display: block;
        background: darkcyan;
        border-radius: 5px;
        border-style: none;
        cursor: pointer;
    }

    button disabled {
        cursor:default;
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
        flex-direction: wrap;
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