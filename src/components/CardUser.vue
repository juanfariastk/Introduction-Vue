<template>
    <div>
        <div class="profile">
            <img :src="userData.avatar" alt="Profile" />
            <strong> {{ formatUserName }}</strong>
            <span v-if="userData.email === undefined || userData.email === null" > no email</span>
            <span v-else v-email:="userData.email"></span>
            <button @click="selectedDataEmit(formatShow)">Ver perfil</button>
        </div>
    </div>
</template>

<script setup>

    import { computed } from 'vue';

    const props = defineProps({userData: {type: Object, required: true}});

    const formatUserName = computed( () => `${props.userData.first_name} ${props.userData.last_name}`);
    
    const formatShow = computed (() => `Selecionado: ${props.userData.first_name} `);
    
    const cardEmit = defineEmits(['showProfile']);

    const selectedDataEmit = (data) => {
        cardEmit('showProfile', data);
    }
    //directive use to create global 

    const vEmail = {
        created(element, binding, vnode){
            element.style.color = 'gray';
            // console.log(element.innerText);
            element.innerHTML = `<a href="${binding.value}">${binding.value} <a/> `
            
        }
    }
    //console.log(props.userData);
</script>

<style scoped>

</style>