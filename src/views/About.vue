<template>
  <div class="about">
    <b-card>
      <ul>
        <li v-for="test in tests" :key="test.id" @click="detailTest=test">
          <p>{{test.subject}}</p>
        </li>
      </ul>
      <demo :test="detailTest"></demo>
    </b-card>
    <div>
      <h1>Bitcoin Price Index</h1>
   <div v-for="(currency,index) in info" :key = "index" class="currency">
        {{ currency.description }}:
        <span class="lighten">
          <span v-html="currency.symbol"></span>
          {{ currency.rate_float | currencydecimal }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import Demo from "@/components/Demo.vue";
import axios from "axios";

export default {
  components: {
    Demo
  },
  data() {
    return {
      detailTest: null,
      info: null,
      tests: [
        {
          id: 1,
          subject: "sent ppt",
          message: "kjjasjqlkerdahd"
        },
        {
          id: 2,
          subject: "sent panwdl sdkfhjpt",
          message: "kjjaslqkejrjdahd"
        },
        {
          id: 3,
          subject: "sjhadshent ppt",
          message: "kjjasjdjaldjahd"
        }
      ]
    };
  },
  filters: {
  currencydecimal (value) {
    return value.toFixed(2)
  }
},
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response.data.bpi));
  }
};
</script>
