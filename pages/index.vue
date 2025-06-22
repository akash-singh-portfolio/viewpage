<template>
  <CommonLoader />
  <div class="noise"></div>
  <div id="smooth-wrapper">
    <CommonNavbar />
    <CommonMenu />
    <div id="smooth-content">
      <main class="main-bg">
        <div class="main-box main-bg ontop">
          <CreativePortfolioHeader />
          <CreativePortfoliomarquee />
          <CreativePortfolioAbout />
          <CreativePortfolioServices />
          <CreativePortfolioWorks />
          <CreativePortfoliotestimonials />
        </div>
        <CreativePortfolioContact />
      </main>
      <CommonFooter1 />
    </div>
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Creative Portfolio`,
  bodyAttrs: {
    class: 'crev-portfolio'
  },
  script: [
    { src: "/viewpage/assets/js/smoother-script.js", defer: true }
  ]
});
</script>
