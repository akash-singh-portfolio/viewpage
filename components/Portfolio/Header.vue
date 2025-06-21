<template>
  <header class="portfolio-header section-padding ontop main-bg">
    <div class="container mt-80">
      <div class="row">
        <div class="col-12">
          <div :class="`cont ${isCenter ? 'text-center' : ''}`">
            <h1 class="fz-80 fw-500">Designing a <br /> Better World Today</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const { isCenter } = defineProps(['isCenter'])
</script>