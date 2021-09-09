<template>
  <div class="container">
    <div class="div py-4">
      <h4>kategori</h4>
      <label
        ><input
          class="mx-2"
          type="radio"
          v-model="selectedCategory"
          value="All"
        />
        All</label
      >
      <label
        ><input
          class="mx-2"
          type="radio"
          v-model="selectedCategory"
          value="front"
        />
        front</label
      >
      <label
        ><input
          class="mx-2"
          type="radio"
          v-model="selectedCategory"
          value="Web"
        />
        Web</label
      >
      <label
        ><input
          class="mx-2"
          type="radio"
          v-model="selectedCategory"
          value="Entertainment"
        />
        Entertainment</label
      >
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-2">
      <div class="col" v-for="(item, index) in firebaseData" :key="index">
        <div class="col">
          <div class="card hover morder">
            <div class="row">
              <div class="col-md-3">
                <img
                  src="https://arastirmanv4.vercel.app/assets/images/logos/archive.png"
                  style="width: 75px"
                  class="card-img-top blur m-1 ml-5"
                  alt="archive"
                />
              </div>
              <div class="col-md-9">
                <h5 class="card-title text-warning pt-4">{{ item.title }}</h5>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text text-muted">
                {{ item.description }}
                kategori:   {{ item.category }}
              </p>
              <span class="text-muted"
                ><span class="badge bg-primary">Primary</span>&nbsp;<span
                  class="badge bg-success"
                  >Success</span
                >&nbsp;<span class="badge bg-info text-light">Info</span
                >&nbsp;</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>



<!-- <p>
 test {{firebaseData}}
</p> -->


<!-- test {{selectedCategory}} -->


  </div>
</template>




<script>
import axios from "axios";
export default {
  name: "HelloWorld",


  data() {
    return {

      firebaseData: [], // firebase'den gelen datayı for ile dönüyor

      selectedCategory: "All",

      
    };
  },

  computed: {

    filteredPeople: function () {
      var vm = this;
      var category = vm.selectedCategory;

      if (category === "All") {
        return vm.firebaseData;
      } else {
        return vm.firebaseData.filter(function (data) {
          return data.category === category;
        });
      }
    },
  },


    created() {
    axios
      .get(
        "https://json-5ff41-default-rtdb.europe-west1.firebasedatabase.app/users.json"
      )
      .then((response) => {
        var data = response.data;
        for (let key in data) {
          var newData = data[key];

          this.firebaseData.push(newData);
        }
      });
  }

};

</script>








<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
