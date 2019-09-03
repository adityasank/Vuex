<template>
    <div>
  <b-carousel
    style="text-shadow: 0px 0px 2px #000"
    bounce
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="First slide"
      img-src="https://picsum.photos/1024/180/?image=10"
    >
      <b-card-group deck>

<demo-card title= " Sandisk Memory  " image="/img/sandisk.jpeg" />
<demo-card title=" this is a penS "  image="/img/sandisk.jpeg"/>
<demo-card title=" this is small description " image="/img/sandisk.jpeg" />

</b-card-group>

</b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/1024/180/?image=12"
    ></b-carousel-slide>
  </b-carousel>
</div>
</template>
<script>
import DemoCard from "@/views/DemoCard.vue"
export default {
    components:{
        DemoCard
    }
}
</script>