<template>
    <div>
        <div class="profile">
            <img :src="userData.avatar" alt="Profile" />
            <strong> {{ formatUserName }}</strong>
            <span>{{userData.email}}</span>
        </div>
    </div>
</template>

<script setup>

    import { computed } from 'vue';

    const props = defineProps({userData: {type: Object, required: true}});

    const formatUserName = computed( () => `${props.userData.first_name} ${props.userData.last_name}`);
    //console.log(props.userData);
</script>

<style scoped>

</style>