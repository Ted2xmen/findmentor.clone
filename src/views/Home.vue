<template>
  <div class="home">
     <TheHero />
    <TheMain />
     


  </div>
</template>

<script>

import TheMain from '@/components/TheMain.vue'
import TheHero from '@/components/TheHero.vue'

export default {
  name: 'Home',
  components: {
    TheMain,
    TheHero
  }
}
</script>
