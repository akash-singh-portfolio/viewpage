<template>
  <section class="work-crev section-padding bg-gray text-dark">
    <div class="container">
      <div class="sec-head pb-20 bord-thin-bottom mb-80">
        <div class="d-flex align-items-center">
          <div>
            <h3 class="f-bold text-u">Recent Work</h3>
          </div>
          <div class="ml-auto">
            <div class="swiper-button-next">
              <span class="pe-7s-angle-left"></span>
            </div>
            <div class="swiper-button-prev">
              <span class="pe-7s-angle-right"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="work-crus">
        <ClientOnly>
          <Swiper
            :modules="[Navigation]"
            :slides-per-view="'auto'"
            :space-between="30"
            :navigation="{
              nextEl: '.work-crev .swiper-button-next',
              prevEl: '.work-crev .swiper-button-prev'
            }"
          >
            <SwiperSlide v-for="item in data" :key="item.id">
              <div class="item">
                <div class="img">
                  <img :src="item.img" alt="" />
                </div>
                <div class="cont">
                  <div>
                    <span>{{ item.category }}</span>
                    <h5>{{ item.title }}</h5>
                  </div>
                </div>
                <nuxt-link :to="item.link" class="link-overlay"></nuxt-link>
              </div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/CreativePortfolio/works.json';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules'; // ✅ Swiper 11 uses /modules path

// ✅ Also import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
</script>
