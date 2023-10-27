<template>
  <div class="banner-container">
    <div class="content-banner">
      <h1 class="banner-title">Desenvolvedor front-end Angular, Vue e Nuxt</h1>
      <h2 class="banner-subtitle">Juntos, criamos uma presença digital impactante e duradoura.</h2>
      <!-- <gt-button-action nameButton="Faça seu orçamento conosco!"></gt-button-action> -->
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.banner-container {
  // background-color: #030e20;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  .content-banner {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 768px;
    // font-family: "Red Hat Display";
    font-style: normal;
    text-align: center;

    .banner-title {
      color: #fff;
      font-weight: 700;
      font-size: 54px;
      line-height: 71px;
      text-align: center;
    }

    .banner-subtitle {
      font-weight: 400;
      font-size: 22px;
      line-height: 29px;
      color: #b8c2d0;
    }
  }
}

@media (max-width: 425px) {
  .banner-container {
    .content-banner {
      max-width: 370px;

      .banner-title {
        font-size: 25px;
        line-height: 40px;
      }

      .banner-subtitle {
        font-size: 17px;
        line-height: 25px;
      }
    }
  }
}</style>
