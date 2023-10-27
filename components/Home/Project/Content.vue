<template>
  <div class="projects-container">
    <div class="projects-header">
      <h2 class="projects-title">Conheça alguns dos meus projetos</h2>
      <h3 class="projects-subtitle">Aqui você vai encontrar alguns dos meus projetos de estudos e também alguns links de
        projetos aos quais trabalhei </h3>
    </div>
    <div class="projects-content">
      <div class="projects-item" v-for="(item, id) in projects" :key="id">
        <CardContent :data="item" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CardContent from "../../../shared/components/Card/Content.vue"

const projects = ref<any>([
  {
    title: 'Angular',
    description: 'Projeto angular',
    path: 'test'
  },
  {
    title: 'Vue',
    description: 'Projeto angular',
    path: 'test'
  }
])
</script>

<style lang="scss">
.projects-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: max-content;
  align-items: center;
  // background: #030e20;
  flex-direction: column;
  padding: 7% 0;

  .projects-header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 768px;
    // font-family: "Red Hat Display";
    font-style: normal;
    text-align: center;

    .projects-title {
      color: #fff;
      font-weight: 700;
      font-size: 54px;
      line-height: 71px;
      text-align: center;
    }

    .projects-subtitle {
      font-weight: 400;
      font-size: 20px;
      line-height: 29px;
      color: #b8c2d0;
    }
  }

  .projects-content {
    max-width: 950px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    .projects-item {
      border: 1px solid rgba(0, 0, 0, 0.7137254902);
      border-radius: 5px;
      box-shadow: 4px 4px 4px #0000ff;
      display: flex;
      flex-direction: column;
      max-width: 290px;
      width: 100%;
      height: 350px;
      align-items: center;
      justify-content: flex-end;
      background-color: #fff;
      margin: 1.3%;

      .image-item {
        width: 49px;
        height: 49px;
        transition: all 2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .image-item:hover {
        transform: rotate(360deg);
      }

      .title {
        // font-family: "Red Hat Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        text-align: center;
        color: #ffffff;
      }

      .subtitle {
        // font-family: "Red Hat Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 0px;
        text-align: center;
        color: #5effff;
      }
    }
  }
}

@media (max-width: 425px) {
  .projects-container {
    gap: 0;
    padding: 30% 0;

    .projects-header {
      max-width: 370px;

      .projects-title {
        font-size: 25px;
        line-height: 40px;
      }

      .products-subtitle {
        font-size: 16px;
        line-height: 25px;
      }
    }

    .projects-content {
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;
    }
  }
}
</style>