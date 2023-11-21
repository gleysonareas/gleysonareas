<template>
  <div class="contact">
    <div class="contact__header">
      <h1>Outras informações</h1>
      <h2>
        Acesse minhas redes sociais, nosso site ou envie um e-mail através dos
        links abaixo:
      </h2>
      <p class="flex flex-wrap gap-2 justify-center">
        <a v-for="(item, id) in social" :key="id" target="_blank"
          class="rounded bg-cyan-500 shadow-lg shadow-cyan-500/50 p-1 text-white" :href="item.link">{{ item.name }}</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const social = ref<any>([
  {
    link: 'https://appicompany.com/',
    name: 'Site Appi Company'
  },
  {
    link: 'https://www.linkedin.com/in/gleyson-areas-da-silva/',
    name: 'Linkedin'
  },
  {
    link: 'https://www.facebook.com/gleysondasilva',
    name: 'Facebook'
  },
  {
    link: 'https://www.instagram.com/gleysonareasdasilva/?hl=pt-br',
    name: 'Instagram'
  },
  {
    link: 'mailto:gleyson@appicompany.com',
    name: 'e-mail'
  },
  {
    link: 'https://api.whatsapp.com/send?phone=5522999052376',
    name: 'Whatsapp'
  },
  {
    link: 'https://github.com/gleysonareas/gleysonareas',
    name: 'Github'
  },
])
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  justify-content: center;
  width: 100%;
  height: max-content;
  align-items: center;
  flex-direction: column;
  padding: 7% 0;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 768px;
    font-style: normal;
    text-align: center;

    h1 {
      color: #fff;
      font-weight: 700;
      font-size: 40px;
      line-height: 55px;
      text-align: center;
    }

    h2,
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 29px;
      color: #b8c2d0;
    }
  }
}
</style>
