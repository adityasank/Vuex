<template>
  <div>
    <header>
      <div class="container">
        <h1 class="logo"></h1>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <b-card-group deck class="mt-5 mb-5">
      <demo-card title=" this is a penS " image="/img/sandisk.jpeg" cardBody />
      <demo-card title=" this is small description " image="/img/sandisk.jpeg" />
    </b-card-group>
  </div>
</template>
<script>
import DemoCard from "@/views/DemoCard.vue";

export default {
  components: {
    DemoCard
  },
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    productId: String
  },
  data() {
    return {
      image: "/img/sandisk.jpeg",
      cardBody: Boolean, 
      item: {
        productName: this.name,
        product_id: this.id,
        productPrice: this.price
      }
    };
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart");
    }
  }
};
</script>
<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}

.card-img-top {
  padding: 20px !important;
}
header::after {
  content: "";
  display: table;
  clear: both;
}

.logo {
  float: left;
  padding: 10px 0;
}

nav {
  float: right;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
  margin-left: 70px;
  padding-top: 23px;

  position: relative;
}

nav a {
  color: #444;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}

nav a:hover {
  color: #000;
}

nav a::before {
  content: "";
  display: block;
  height: 5px;
  background-color: #444;

  position: absolute;
  top: 0;
  width: 0%;
}

nav a:hover::before {
  width: 100%;
}
</style>
<style >
.abc {
  margin-top: 100px !important;
}
</style>