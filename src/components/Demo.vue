<template>
  <div style="padding: 10px; 
  border: 1px solid #eee">
    <h1>{{test.subject}}</h1>
    <hr>
    <p>{{test.id}} {{test.message}}</p>
  </div>
</template>
<script>
export default {
  props: ["test"]
};
</script>

