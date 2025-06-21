<template>
  <CommonCursor />
  <CommonProgressScroll />
  <NuxtPage />
</template>

<script setup>
const config = useRuntimeConfig()

useHead({
  title: 'Bayone',
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'utf-8' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'keywords', content: 'Vue Nuxtjs Template Bayone Multi-Purpose themeforest' },
    { name: 'description', content: 'Bayone - Multi-Purpose Vue Nuxtjs Template' },
    { name: 'author', content: 'UiCamp' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap' },
    { rel: 'stylesheet', href: `${config.app.baseURL}assets/fonts/mona-sans/style.css` },
    { rel: 'stylesheet', href: `${config.app.baseURL}assets/css/plugins.css` },
    { rel: 'stylesheet', href: `${config.app.baseURL}assets/css/style.css` },
    { rel: 'shortcut icon', href: `${config.app.baseURL}assets/imgs/favicon.ico` }
  ],
  script: [
    { src: `${config.app.baseURL}assets/js/bootstrap.bundle.min.js` },
    { src: `${config.app.baseURL}assets/js/plugins.js` },
    { src: `${config.app.baseURL}assets/js/isotope.pkgd.min.js` },
    { src: `${config.app.baseURL}assets/js/wow.min.js` },
    { src: `${config.app.baseURL}assets/js/gsap.min.js` },
    { src: `${config.app.baseURL}assets/js/ScrollTrigger.min.js` },
    { src: `${config.app.baseURL}assets/js/ScrollSmoother.min.js` },
    { src: `${config.app.baseURL}assets/js/scripts.js`, defer: true }
  ]
})
</script>
