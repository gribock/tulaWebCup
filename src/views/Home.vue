<template>
  <div class="home">
    Приветствую тебя, <span class="username">{{ userName }}!</span>
    <div id="main">
      <div class="prevue" v-for="item in showedGalleryItems" 
           :key="item.index" @click="setShowGallery(true);setShowedImage(showedGalleryItems.indexOf(item))">
        <img :src="`${item.preview}`"/>
      </div>
    </div>
    <div class="tt">
      <a class="button" v-if="showAddButton" @click="increaseQuantity()">
        Показать больше
      </a>
    </div>
    <ImageShowOverlay v-if="showOverlay" :src="showedGalleryItems[showedImage].file" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';
import ImageShowOverlay from '../components/ImageShowOverlay.vue';

export default {
  name: 'home',
  components: {
    ImageShowOverlay
  },
  computed: {
    ...mapGetters([
      'token',
      'userName',
      'showedGalleryItems',
      'showOverlay',
      'showedImage',
      'showAddButton'
    ])
  },
  methods:{
    ...mapActions([
      'setShowGallery',
      'setShowedImage',
      'increaseQuantity'
    ])
  },
  created() {
    this.$store.dispatch('updateToken');
    if (!this.$store.getters.token) {
      this.$router.push({ path: '/login' });
      return;
    } //else {
    //   this.$router.push({ path: '/' });
    // }
    this.$store.dispatch('getDiskInfo');
    this.$store.dispatch('getGalleryItems');
    
  }
}
</script>

<style scoped>
#main {    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 300px;
    grid-auto-rows: 300px;
    margin: 0 auto;
    grid-gap: 20px;
}
#main img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.prevue:hover {
    opacity: .7;
}
.username {
  color: darkblue;
}
.tt {
  margin: 20px;
}
.button{
  text-decoration:none; text-align:center; 
  padding:11px 32px; 
  border:none; 
  -webkit-border-radius:14px;
  -moz-border-radius:14px; 
  border-radius: 14px; 
  font:12px Arial, Helvetica, sans-serif; 
  font-weight:bold; 
  color:#ffffff; 
  background-color:#148f04; 
  background-image: -moz-linear-gradient(top, #148f04 0%, #158f04 100%); 
  background-image: -webkit-linear-gradient(top, #148f04 0%, #158f04 100%); 
  background-image: -o-linear-gradient(top, #148f04 0%, #158f04 100%); 
  background-image: -ms-linear-gradient(top, #148f04 0% ,#158f04 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#158f04', endColorstr='#158f04',GradientType=0 ); 
  background-image: linear-gradient(top, #148f04 0% ,#158f04 100%);   
}
.button:hover{
  padding:11px 32px; 
  border:none; 
  -webkit-border-radius:14px;
  -moz-border-radius:14px; 
  border-radius: 14px; 
  font:12px Arial, Helvetica, sans-serif; 
  font-weight:bold; 
  color:#ffffff; 
  background:#052401;  
}

</style>

