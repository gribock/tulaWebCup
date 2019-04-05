<template>
    <div id="logout">

    </div>
</template>

<script>
export default {
    created() {
        sessionStorage.removeItem('token');
        this.$router.push({ path: '/' });
    }
}
</script>

<style>

</style>
