<template>
  <div id="nav">
    <router-link to="/">
      <span class="title">findmentor.clone</span>
    </router-link>
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #1a3c40;

}

html {
  background-color: #1a3c40;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #24724f;
    }
  }
}
.title {
  font-size: 3rem;
  color: #ede6db;
}
</style>
