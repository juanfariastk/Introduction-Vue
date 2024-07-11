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

    <div v-if="userObj">
        <CardUser :userData="userObj"/>
    </div>

</template>

<script setup>

    import { ref, reactive, onMounted, onBeforeMount,
            onBeforeUpdate, onUpdated, onBeforeUnmount, 
            onUnmounted, computed, watch, watchEffect, inject
     } from 'vue';

     import CardUser from './CardUser.vue';
     import { useFetch } from '@/composables/fetch';


    /*
    const name = ref("guapo abism");
    const bornDate = ref(2004);
    console.log(name.value) 
    */
    // const userData = reactive({firstName: 'guapo abism', lastName: 'gap', avatar: '', email: ''});

    /*const convertDate = () => {
        return userData.yearsOld = 2024 - userData.bornDate;
    }*/

    const userCode = ref(1);
    const apiUrl = ref(`https://reqres.in/api/users/${userCode.value}`);
    const { data: userObj, error, loading } = useFetch( apiUrl.value );


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

    /* watch(userCode , (newValue, oldValue) => {
        console.log(newValue, oldValue);
        if(newValue <= 0){
            alert('Codigo Invalido');
            userCode.value = 0;
        }
    });
    */

    const alertMessage = inject('winAlert');
    console.log(alertMessage);

    watchEffect( async () => {
      if(userCode.value <= 0){
          alert(alertMessage);
          userCode.value = 1;
      }
      const {data, error, loading} = useFetch( `https://reqres.in/api/users/${userCode.value}`);
      console.log(data)
      console.log(userCode.value);
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

</style>