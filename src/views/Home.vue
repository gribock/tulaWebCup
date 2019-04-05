<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span>{{ userName }}</span>
    <img v-for="item in galleryItems" :key="item.index" :src="`${item.file}`"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'token',
      'userName',
      'galleryItems'
    ])
  },
  components: {
    
  },
  created() {
    this.$store.dispatch('updateToken');
    if (!this.$store.getters.token) {
      this.$router.push({ path: '/login' });
      return;
    } else {
      this.$router.push({ path: '/' });
    }
    this.$store.dispatch('getDiskInfo');
    this.$store.dispatch('getGalleryItems');
  }
}
</script>
