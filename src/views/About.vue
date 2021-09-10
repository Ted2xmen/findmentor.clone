<template>
  <div class="about">
    <h1>This is an about page</h1>
   getters: web {{this.$store.getters.justWeb}}

    <ul>
      <li v-for="(item, index) in this.$store.getters.justWeb" :key="index">
        {{item.title}} +  {{item.name}}

      </li>
    </ul>

  </div>
</template>
