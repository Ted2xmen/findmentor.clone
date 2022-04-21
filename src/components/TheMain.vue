<template>
  <div class="container">
    <form
      class="
        form-bg
        p-4
        shadow
        m-5
        rounded
        row row-cols-lg-auto
        g-1
        text-dark
        align-items-center
      "
    >
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

      <div class="col-12 d-flex align-items-center">
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
            value="Mentor"
            v-model="selectedCategory"
          />Mentor</label
        >
        <label for=""
          ><input
            type="radio"
            class="mx-2"
            value="Mentee"
            v-model="selectedCategory"
          />Mentee</label
        >
          <label for=""
          ><input
            type="radio"
            class="mx-2"
            value="Both"
            v-model="selectedCategory"
          />Both</label
        >
      </div>
    </form>

    <!-- <Form selectedCategory="selectedCategory" /> -->

    <section v-if="false">
      <h3>Tables</h3>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredSearch" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.hireable }}</td>
            <td>{{ item.mentor }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <div class="row py-5 row-cols-1 row-cols-md-3 g-5">
        <!-- <div class="col" v-for="(item, index) in filteredSearch" :key="index"> -->
        <div class="col" v-for="(item, index) in filteredSearch" :key="index">
          <Card
            :name="item.name"
            :mentor="item.mentor"
            :avatar="item.avatar"
            :interests="item.interests"
            :hire="item.isHireable"
          />
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
.form-bg {
  background-color: #417d7a;
}
</style>



<script>
import axios from "axios";
import Card from "@/components/shared/Card.vue";
// import Form from "@/components/shared/Form.vue";

export default {
  name: "TheMain",
  components: {
    Card,
    // Form
  },

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
      var category = this.selectedCategory;

      if (category === "All") {
        return this.$store.state.list;
      } else {
        return this.$store.state.list.filter(function (data) {
          return data.mentor === category;
        });
      }
    },

    filteredSearch() {
      return this.filteredPeople.filter((item) => {
        return item.name.toLowerCase().includes(this.searchInput.toLowerCase());
      });
    },
  },

  created() {
    axios
      // .get(
      //   "https://json-5ff41-default-rtdb.europe-west1.firebasedatabase.app/users.json"
      // )
      .get("db.json")
      .then((response) => {
        var data = response.data;

        for (let key in data) {
          var newData = data[key];
          console.log(newData);
          // this.firebaseData.push(newData);
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
