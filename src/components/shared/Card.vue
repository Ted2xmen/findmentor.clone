<template>
  <div class="px-2">
    <!-- <div class="card d-flex align-items-center card-bg p-1 rounded-3 shadow">
      <div class="row">
        <div class="col-md-2 flex-column justify-content-center">
          <span class="badge bg-dark p-2">{{ mentor }}</span>

          <img
            :src="avatar"
            style="width: 50px"
            class="rounded-3"
            alt="avatar"
          />
          <span v-if="hire" class="m-1 p-2 badge bg-success text-light"
            >Hire me!</span
          >
        </div>
        <div class="col-md-10 d-flex">
          <h5 class="card-title text-warning pt-2">
            {{ name }}
          </h5>
        </div>
        <div class="py-2">
          <p class="text-light fs-6">
            {{ interests }}
          </p>
        </div>
      </div>
    </div> -->

    <div class="row">
      <div class="card d-flex align-items-center card-bg p-1 img-custom custom-shadow">
        <div class="row pt-2">
          <div class="col-md-2  justify-content-center">
            <span class="badge badge-bg p-1 m-1">{{ mentor }}</span>
            <img
              :src="avatar"
              style="width: 50px"
              class="img-custom p-1"
              alt="avatar"
            />
            <span v-if="hire" class="badge bg-success text-light p-1 m-1"
              >Hire me!</span
            >
          </div>
          <div class="col-md-10">
            <h5 class="card-title text-warning pt-2 text-start">
              {{ name }}
            </h5>
            <div class="py-1">
              <p class="card-t fs-6 text-start">
                platform engineering, reliability engineering, devops, cloud
                solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Card",
  props: ["name", "avatar", "interests", "mentor", "hire"],
};
</script>

<style>
.card-bg {
  background-color: #1d5c63 !important;
}

.badge-bg {
      background-color: #1A3C40 !important;

}

.card-t {
    color: #EDE6DB;
}
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px !important;
}

.img-custom {
  border-radius: 20px;
}
</style>