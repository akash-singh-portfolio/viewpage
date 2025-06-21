<template>
  <footer :class="{ 'sub-bg': subBg }">
    <div class="footer-container">
      <div class="container pb-80 pt-80 ontop">
        <div class="row">
          <div class="col-lg-6">
            <div class="eml">
              <h6 class="sub-title opacity-8">
                I would love to hear from you.
              </h6>
              <h2 class="underline fz-60">
                <a href="#0">singhnature41@gmail.com</a>
              </h2>
            </div>
          </div>
        </div>
        <div class="row mt-80">
          <div class="col-lg-3">
            <div class="logo">
              <img src="/assets/imgs/singhnature.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="column">
              <h6 class="sub-title mb-30">Social Media</h6>
              <ul class="rest">
                <li class="hover-this cursor-pointer">
                  <a href="#0" class="hover-anim">I did</a>
                </li>
                <li class="hover-this cursor-pointer">
                  <a href="#0" class="hover-anim">Not</a>
                </li>
                <li class="hover-this cursor-pointer">
                  <a href="#0" class="hover-anim">Created</a>
                </li>
                <li class="hover-this cursor-pointer">
                  <a href="#0" class="hover-anim">Yet</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="column">
              <h6 class="sub-title mb-30">I'm From :</h6>
              <p>26002, Lucknow Cantt, Uttar Pradesh, India</p>
              <h5 class="mt-15 underline">
                <a href="#0">+91 991 96820 59</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="container bord pt-30 pb-30 bord-thin-top">
        <div class="row">
          <div class="col-lg-6">
            <div class="links">
              <ul class="rest">
                <li>
                  <a href="/about" class="animsition-link">FAQ</a>
                </li>
                <li>
                  <a href="/about" class="animsition-link">Careers</a>
                </li>
                <li>
                  <a href="/contact" class="animsition-link">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="copyright d-flex">
              <div class="ml-auto">
                <p class="fz-13">
                  © 2024 Singhnature is created with love by
                  <span class="underline">
                    <a
                      href="https://themeforest.net/user/UiCamp"
                      target="_blank"
                    >
                      Themesgadget
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";

const { subBg } = defineProps({
  subBg: Boolean,
});

const handleResize = () => {
  if (window.innerWidth > 991) {
    gsap.set(".footer-container", { yPercent: -50 });
    const uncover = gsap.timeline({ paused: true });
    uncover.to(".footer-container", { yPercent: 0, ease: "none" });

    ScrollTrigger.create({
      trigger: "main",
      start: "bottom bottom",
      end: "+=50%",
      animation: uncover,
      scrub: true,
    });
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
