<template>
  <div class="about">
    <h1>This is an about page</h1>
   <!-- getters: web {{this.$store.getters.justWeb}} -->
   kısa : {{getWeb}}

    <!-- <ul>
      <li v-for="(item, index) in this.$store.getters.justWeb" :key="index">
        {{item.title}} +  {{item.name}}

      </li>
    </ul> -->




  <div>
    <input type="text" v-model="color" />
    <div class="user-input-color">
      {{ color }}
    </div>
  </div>

 

  </div>
</template>




<script>
export default {
  data: () => ({
    color: 'white',
    getWeb: [],
  }),

  created() {
    this.getWeb = this.$store.getters.justWeb

  }
}

</script>
 


<style scoped>
.user-input-color {
  background-color: v-bind(color)
}
</style>