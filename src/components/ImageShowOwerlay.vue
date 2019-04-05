<template>
  <div class="content-holder">
    <div class="back" @click="$emit('previous-page')">
      <i class="fa fa-chevron-left fa-3x" aria-hidden="true"></i>
    </div>
    <div class="img-container">
      <img :src="src" alt="oopppa(((">
    </div>
    <div class="closer" @click="$emit('close')">
      <div>
        <i class="fa fa-times fa-2x" aria-hidden="true"></i>
      </div>
    </div>
    <div class="forvard" @click="$emit('next-page')">
      <i class="fa fa-chevron-right fa-3x" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["src"]
};
</script>

<style>
.content-holder {
    position: relative;
    margin: auto;
    top: 10px;
    width: 95%;
    height: 95%;
    display: grid;
    grid-template-columns: 60px repeat(18, 1fr) 60px;
    grid-template-rows: 60px repeat(18, 1fr) 60px;
    background-color: rgba(71, 71, 71, .95);
    z-index: 999;
    border-radius: 1px;
}
.img-container {
    grid-column-start: 2;
    grid-column-end: 20; 
    grid-row-start: 1;
    grid-row-end: 21;   
}
.img-container img{
    object-fit: contain;
}
.closer {
    grid-column-start: 20;
    grid-column-end: 21;
    grid-row-start: 1;
    grid-row-end: 2; 
    border-radius: 3px;
    width: 80%;
    height: 80%;
    margin: 5px;
    opacity: .1;
    display: flex;
    justify-content: center;
    align-items: middle;
    color: white;
}
.closer:hover {
    opacity: .8;
}
.back {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 20; 
    justify-self: center;
    align-self: center;
    margin: 5px;
    opacity: .1;
    color: white;
}
.back:hover {
    /* background-color: rgba(105, 105, 105, 0.5); */
    opacity: .8;
}
.forvard {
    grid-column-start: 20;
    grid-column-end: 21;
    grid-row-start: 2;
    grid-row-end: 20; 
    justify-self: center;
    align-self: center;
    margin: 5px;
    opacity: .1;
    color: white;
}
.forvard:hover {
    opacity: .8;
}
</style>
