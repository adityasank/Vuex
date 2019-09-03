<template>
  <div>
    <b-card
      :img-src="image"
      :class="clase"
      :header="CardHeader"
      :header-bg-variant="headerBg"
      :img-width="imgwidth"
      img-top
      :title="title"
      :no-body= "cardBody"
    >
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
    image: String,
    CardHeader: String,
    headerBg: String,
    imgwidth: String,
    clase: String,
    cardBody: Boolean
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
  width: 250px !important;
}
</style>
