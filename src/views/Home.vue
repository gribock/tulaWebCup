<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  },
  created() {
    if (!this.$store.getters.token) {
      this.$router.push({ path: '/login' });
    } else {
      this.$router.push({ path: '/' });
    }
  }
}
</script>
