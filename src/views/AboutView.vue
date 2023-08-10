<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
import { onMounted } from "vue";

export default {
  setup(props, context){
        onMounted(()=>{
            try {
                
            context.emit("id-menu", 2)
            } catch (error) {
                console.log(error)
            }
        })
    }
}
</script>
