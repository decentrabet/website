<template>
  <div class="banner">
    <div class="banner-content">
      <img alt="Decentrabet logo" src="../assets/logo-shield.svg">
      <div class="gutter"></div>
      <span class="brand-name-first">Decentra</span>
      <span class="brand-name-second">bet</span>
    </div>
  </div>
  <div class="container-md mt-5 p-4 shadow bg-body rounded" id="about">
    <h4 class="mt-4">Decentrabet the is first decentralized sports betting exchange protocol</h4>
    <div class="motivation border-top my-5 pt-3">
      <h2>Motivation</h2>
      <p class="text-center">We aim to provide a sports betting exchange protocol ecosystem that is 
        <a tabindex="0" class="link-primary" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="You can participate without providing any personal information (no registration) and without deposit any funds.">
          decoupled</a>, 
        <a tabindex="0" class="link-primary" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="We do not care who you are and since nobody provides personal information, the protocol treats every one equally.">
          impartial</a>, and 
        <a tabindex="0" class="link-primary" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="The protocol is just a bunch of smart contracts publicly deployed on a decentralized blockchain, such that they cannot be changed nor deleted by anyone beyond the development team.">
          censorship resistant</a>.
      </p>
      <!-- <ul>
        <li><span class="fw-bold">Decloupled</span> &#8212; you can participate without providing any personal information (no registration) and without deposit any funds.</li>
        <li><span class="fw-bold">Impartial</span> &#8212; we do not care who you are and since nobody provides personal information, the protocol treats every one equally.</li>
        <li><span class="fw-bold">Censorship resistant</span> &#8212; the protocol is just a bunch of smart contracts publicly deployed on a decentralized blockchain, such that they cannot be changed nor deleted by anyone beyond the development team.</li>
      </ul> -->
    </div>
    <div class="remarks border-top my-5 pt-3">
      <h2>Remarks</h2>
      <ul>
        <li>No registration required nor any personal information.</li>
        <li>We do not hold your funds.</li>
        <li>Fully decentralized.<a tabindex="0" class="link-primary" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Currently, only the Web application is provided through a centralized hosting service. You should download the application in case someone shut down our hosting service.">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
          </a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToAboutPage() {
      this.$router.push('/about')
    }
  },
  mounted() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    document.popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new global.bootstrap.Popover(popoverTriggerEl, { trigger: 'focus' })
    })
  }
}
</script>

<style>
body, html, #app {
  height: 100%;
}
.banner {
  text-align: center;
  color: #200210;
  background-image: radial-gradient(#33cbb6, #9269df);
  padding: 1rem;
  height: 100vh;
  display: table;
  width: 100%;
}
.banner-content {
  display: table-cell;
  vertical-align: middle;
}
.brand-name-first {
  font-weight: 900;
  color: #200210;
  font-size: 2.4rem;
  text-shadow: 0 0 5px #33cbb6;
}
.brand-name-second {
  font-weight: 900;
  color: #9269df;
  font-size: 2.4rem;
  text-shadow: 0 0 5px #33cbb6;
}
.gutter {
  padding: 1rem 0;
}
#about {
  margin-top: 2rem;
}
#about h1 {
  text-align: center;
  text-decoration: underline;
  font-weight: 700;
}
#about h2, h3, h4 {
  text-align: center;
  font-weight: 600;
}
#about p, span, li {
  font-size: 1.2rem;
  text-align: justify;
}
</style>