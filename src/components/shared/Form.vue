<template>
        <form
      class="
        bg-dark
        my-2
        pb-2
        rounded-3
        row row-cols-lg-auto
        g-3
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

      <div class="col-12">
        <label class="visually-hidden" for="inlineFormSelectPref"
          >Preference</label
        >
        <label for=""
          ><input
            type="radio"
            class="mx-2"
            value="All"
            :v-model="selectedCategory"
          />All</label
        >
        <label for=""
          ><input
            type="radio"
            class="mx-2"
            value="Mentor"
            :v-model="selectedCategory"
          />Mentor</label
        >
        <label for=""
          ><input
            type="radio"
            class="mx-2"
            value="Mentee"
            :v-model="selectedCategory"
          />Mentee</label
        >
      </div>
    </form>
</template>

<script>
export default {
    props: ["selectedCategory"]
}
</script>