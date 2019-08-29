<template>
  <div class="about">
    <h1>{{welcome}}</h1>
    <b-card>
      <h1>this is good</h1>
      <ul>
      <li v-for="test in tests" :key="test.id" @click="detailTest=test">
        <p>{{test.subject}}</p>
      </li>
    </ul>
    <demo :test="detailTest"></demo>
    <DemoCard title= "demo"/>
    </b-card>
  </div>
</template>
<script>
import Demo from "@/components/Demo.vue"

import DemoCard from "@/views/DemoCard.vue"

export default {
  components: {
    Demo,
    DemoCard
  },
  data(){
    return{
      welcome: 'Hello World',
      detailTest: null,
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
    }
  }
}
</script>
