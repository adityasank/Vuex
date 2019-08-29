<template>
  <div>
    <b-card :img-src=" image" img-top :title="title">
      <div class="add-to-cart">
        <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "add-to-cart",
  props: {
    title: String,
    ImgSrc: String
  },

  methods: {
    addToCart() {
      this.$store.commit("addToCart");
    }
  }
};
</script>
<style scoped>
.card-img-top {
  padding: 20px;
}
</style>
