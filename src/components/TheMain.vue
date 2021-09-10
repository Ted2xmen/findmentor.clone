<template>
  <div class="container">

<div class="py-3 mx-auto">
  <div class="div card-body bg-info text-">
  filtering and searching with
    <img src="https://ted2xmen.netlify.app/assets/img/vuejs.svg" width="60" alt="vue"> and
  <img src="https://ted2xmen.netlify.app/assets/img/firebase.svg" width="120" alt="firebase">
</div>
</div>


    <form class="sticky-top row row-cols-lg-auto g-3 align-items-center">
      <div class="col-12">
        <div class="input-group">
          <input
            type="text"
            v-model="searchInput"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Search"
          />
        </div>
      </div>

      <div class="col-12">
        <label class="visually-hidden" for="inlineFormSelectPref"
          >Preference</label
        >
        <label for=""
          ><input
            type="radio"
            class="mx-2"
            value="All"
            v-model="selectedCategory"
          />All</label
        >
        <label for=""
          ><input
            type="radio"
            class="mx-2"
            value="front"
            v-model="selectedCategory"
          />front</label
        >
        <label for=""
          ><input
            type="radio"
            class="mx-2"
            value="Web"
            v-model="selectedCategory"
          />Web</label
        >
        <label for=""
          ><input
            type="radio"
            class="mx-2"
            value="Entertainment"
            v-model="selectedCategory"
          />Entertainment</label
        >
      </div>
    </form>

    <div class="row py-5 row-cols-1 row-cols-md-3 g-2">
      <div class="col" v-for="(item, index) in filteredSearch" :key="index">
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
                kategori: {{ item.category }}
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
  </div>
</template>




<script>
import axios from "axios";
export default {
  name: "HelloWorld",

  data() {
    return {
      searchInput: "",

      firebaseData: [], // data from firebase

      selectedCategory: "All",


    };
  },

  methods: {},

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

    filteredSearch() {
      return this.filteredPeople.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
       
      });
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
          this.$store.state.list.push(newData);
        }
      });
  },
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
  color: #133d2a;
}
</style>
