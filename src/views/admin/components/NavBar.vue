<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";


const navigation = ref( [
  
  {
    name: "Dashboard",
    link: "/admin",
    icon: "bi bi-wrench-adjustable",
  },
  {
    name: "Create Post",
    link: "/create-post",
    icon: "bi bi-file-ppt",
  },
  {
    name: "Articles",
    link: "/post-lists",
    icon: "bi bi-bookmark",
  },
  
]);

// const emit=defineEmits<{
//   (e:'logout'):void
// }>()
</script>
<template>
  <nav
    id="sidebarMenu"
    style="background-color: white"
    class="col-md-3 col-lg-2 d-md-block sidebar collapse"
  >
    <div class="position-sticky pt-3">

      <div align="center">
        <!-- <img src="/src/assets/logo.png" style="height: 55px" alt=""> -->
        <span>Logo</span>
         <h4>  My Forum</h4>
      </div>
      <br/>
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span style="color: red">Menu</span>
        <a class="link-secondary" href="#" aria-label="Add a new report">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column">
        <li class="nav-item" v-for="nav in navigation" :key="nav.name">
          <RouterLink
            class="nav-link"
            :to="nav.link"
            exact
          >
            <i :class="nav.icon"></i>
            {{ nav.name }}
          </RouterLink>
        </li>

        <li class="nav-item" style="cursor: pointer" >
          <a class="nav-link" >
            <i class="bi bi-box-arrow-right"></i>
            Logout
          </a>
        </li>
        
      </ul>

      
    
    </div>
  </nav>
</template>
<style>
a.router-link-active.router-link-exact-active.nav-link {
  color: white;
}

.nav-item .router-link-exact-active {
  border-radius: 5px;
  box-shadow: 1px 1px 5px 1px #69757d;
  background: #2470dc;
  color: #fff;
}
</style>
