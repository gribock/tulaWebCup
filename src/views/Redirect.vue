<template>
    <div class="redirect">

    </div>
</template>

<script>
export default {
    name: 'redirect',
    created() {
        this.$store.dispatch('getToken');
        this.$router.push({ path: '/' });
    }
}
</script>

<style>

</style>
