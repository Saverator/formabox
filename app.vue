<template>
  <header class="header">
    <Carousel
      :slides="carouselImages"
      :descriptions="carouselDescriptions"
      :links="carouselLinks"
    />
  </header>

  <main class="main">
    <About />
    <Products />
  </main>
</template>

<script>
export default {
  data() {
    return {
      carouselImages: [
        '/images/carousel1.jpg',
        '/images/carousel2.jpg'
      ],
      carouselDescriptions: [
        'Производство гофрокартона всех типов, марок и профилей для вашего бизнеса',
        'Держите ваш бизнес в форме'
      ],
      carouselLinks: [
        '#!',
        '#!'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 808px;
  overflow: hidden;
  margin-bottom: 120px;
}

.main {
  section {
    margin-bottom: 120px;
  }
}

@media screen and (max-width: 1440px) {
  .main {
    section {
      margin-bottom: 64px;
    }
  }
}
</style>