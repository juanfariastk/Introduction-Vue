import { onBeforeMount, ref, watchEffect } from 'vue';

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(true);

    const getUsersPerPage = async () => {
        try {
            const req = await fetch(`${url}`);
            const res = await req.json();
            data.value = res.data;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }

    }

    onBeforeMount(() => { getUsersPerPage() });

    return { data, error, loading }
}