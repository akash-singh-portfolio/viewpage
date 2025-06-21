<template>
  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <div class="text">
            <span class="sub-title mb-15 opacity-8">- Who I Am?</span>
            <div class="text-reval">
              <h2 class="fz-50 text-u mb-30">
                <span class="text">I am a Versatile designer with focus</span>
                <span class="text">on 3d modeling, Photoshop and</span>
                <span class="text"> video editing.</span>
              </h2>
            </div>
            <p>
              I craft digital experiences, brand identities, and product visuals that are bold, purposeful, 
              and visually refined. My work blends technical precision with creative storytelling—bringing 
              concepts to life across industries and platforms.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="row mt-80">
            <div class="col-md-4 sm-mb30">
              <ul class="list rest">
                <li class="fz-18 mb-15"><span class="mr-10">+</span> 3D Modeling & Texturing</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span> Photoshop Manipulation</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span> Product Branding</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span> Video Editing</li>
              </ul>
            </div>
            <div class="col-md-4 sm-mb30">
              <ul class="list rest">
                <li class="fz-18 mb-15"><span class="mr-10">+</span> Web Development</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span> Product Design</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span> Social Media Posts</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span> Advertising</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list rest">
                <li class="fz-18 mb-15"><span class="mr-10">+</span> Environment Design</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span> UI/UX Design</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span> Poster Design</li>
                <li class="fz-18 mb-15"><span class="mr-10">+</span> Poduct Packaging</li>
              </ul>
            </div>
          </div>
          <div class="row numbers mt-80">
            <div class="col-lg-4">
              <div class="item md-mb50">
                <h3 class="stroke f-bold num pb-30 mb-30 bord-thin-bottom">46</h3>
                <h6 class="fz-16">Projects Completed</h6>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="item md-mb50">
                <h3 class="stroke f-bold num pb-30 mb-30 bord-thin-bottom">30</h3>
                <h6 class="fz-16">Clients Around the World</h6>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="item">
                <h3 class="stroke f-bold num pb-30 mb-30 bord-thin-bottom">3</h3>
                <h6 class="fz-16">Total Years</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const handleResize = () => {
  if (window.innerWidth > 991) {
    gsap.to(".text-reval .text", {
      backgroundPositionX: "0%",
      stagger: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".text-reval",
        markers: false,
        scrub: 1,
        start: "top center",
        end: "bottom center"
      }
    });
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
