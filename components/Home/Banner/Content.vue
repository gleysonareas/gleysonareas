<template>
  <div class="banner">
    <div class="banner__content">
      <h1>Desenvolvedor front-end Angular, Vue e Nuxt</h1>
      <h2>Juntos, criamos uma presença digital impactante e duradoura.</h2>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.banner {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 768px;
    font-style: normal;
    text-align: center;

    h1 {
      color: #fff;
      font-weight: 700;
      font-size: 54px;
      line-height: 71px;
      text-align: center;
    }

    h2 {
      font-weight: 400;
      font-size: 22px;
      line-height: 29px;
      color: #b8c2d0;
    }
  }
}

@media (max-width: 500px) {
  .banner {
    &__content {
      max-width: 370px;

      h1 {
        font-size: 25px;
        line-height: 40px;
      }

      h2 {
        font-size: 17px;
        line-height: 25px;
      }
    }
  }
}
</style>
