<template>
  <div class="projects-container">
    <div class="projects-header">
      <h1 class="projects-title">Outras informações</h1>
      <p class="projects-subtitle">
        Acesse minhas redes sociais, nosso site ou envie um e-mail através dos
        links abaixo:
      </p>
      <p class="projects-subtitle flex flex-wrap gap-2 justify-center">
        <a
          target="_blank"
          class="rounded bg-cyan-500 shadow-lg shadow-cyan-500/50 p-1 text-white"
          href="https://appicompany.com/"
          >Site Appi Company</a
        >
        <a
          target="_blank"
          class="rounded bg-cyan-500 shadow-lg shadow-cyan-500/50 p-1 text-white"
          href="https://www.linkedin.com/in/gleyson-areas-da-silva/"
          >Linkedin</a
        >
        <a
          target="_blank"
          class="rounded bg-cyan-500 shadow-lg shadow-cyan-500/50 p-1 text-white"
          href="https://www.facebook.com/gleysondasilva"
          >Facebook</a
        >
        <a
          target="_blank"
          class="rounded bg-cyan-500 shadow-lg shadow-cyan-500/50 p-1 text-white"
          href="https://www.instagram.com/gleysonareasdasilva/?hl=pt-br"
          >Instagram</a
        >
        <a
          target="_blank"
          class="rounded bg-cyan-500 shadow-lg shadow-cyan-500/50 p-1 text-white"
          href="mailto:gleyson@appicompany.com"
          >e-mail</a
        >
        <a
          target="_blank"
          class="rounded bg-cyan-500 shadow-lg shadow-cyan-500/50 p-1 text-white"
          href="https://api.whatsapp.com/send?phone=5522999052376"
          >Whatsapp</a
        >
        <a
          target="_blank"
          class="rounded bg-cyan-500 shadow-lg shadow-cyan-500/50 p-1 text-white"
          href="https://github.com/gleysonareas/gleysonareas"
          >Github</a
        >
      </p>
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
      span {
        color: #fff;
      }
    }
  }
}
</style>
