<template>
  <div class="projects-container">
    <div class="projects-header">
      <h1 class="projects-title">Conheça um pouco sobre mim</h1>
      <h2 class="projects-subtitle">
        Aqui você tem acesso a um pdf do meu curriculum caso queira fazer o download.
        Você também vai encontrar alguns certificados de capacitação e alguns dos meus
        projetos de estudos e links de projetos aos quais atuei.
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.projects-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: max-content;
  align-items: center;
  flex-direction: column;
  padding: 7% 0;

  .projects-header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 768px;
    font-style: normal;
    text-align: center;

    .projects-title {
      color: #fff;
      font-weight: 700;
      font-size: 40px;
      line-height: 55px;
      text-align: center;
    }

    .projects-subtitle {
      font-weight: 400;
      font-size: 20px;
      line-height: 29px;
      color: #b8c2d0;
    }
  }
}
</style>