<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #2f0f2a;">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Decentrabet</router-link>
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/#about">About</router-link>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          </li>
        </ul>
        <form class="d-flex">
          <button type="button" class="btn btn-light btn-outline-light disabled text-decoration-line-through">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
            </svg>
            Launch DApp
          </button>
        </form>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  <div class="container-fluid footer border-top">
    <div class="container-md footer-content">
      <p>© 2021 Decentrabet Labs, Inc. All rights reserved.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {

  }
}
</script>

<style>
.footer {
  height: 8rem;
  display: flex;
  background-color: #F8F8FF;
  margin-top: 6rem;
}
.footer-content {
  text-align: center;
  align-self: center;
}
</style>
