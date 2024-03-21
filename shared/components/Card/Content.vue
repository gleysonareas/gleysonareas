<template>
  <div class="card shadow-lg shadow-blue-500/50">
    <div class="card__header">
      <h1>{{ data.title }}</h1>
      <img src="../../../assets/img/link.png" alt="" />
    </div>
    <div class="card__body">
      <p><strong>Tecnologias:</strong> {{ data.technologies }}</p>
    </div>
    <div class="card__footer">
      <a :href="data.path"> Clique e acesse </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {} as any,
});
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.7137254902);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin: 1.3%;
  justify-content: space-around;
  border-top-right-radius: 5rem;
  border-bottom-left-radius: 5rem;
  height: 18rem;
  width: 15rem;
  padding: 1rem;
  padding-bottom: 2rem;

  &__header {
    font-size: x-large;
    font-weight: 500;
    color: #000;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 5rem;
    }
  }

  &__body {
    text-align: center;
    overflow: auto;

    p {
      strong {
        color: #000;
      }
    }
  }

  &__footer {
    a {
      text-decoration: none;
      border: 1px solid rgba(0, 0, 0, 0.7137254902);
      border-radius: 5px;
      box-shadow: 4px 4px 4px #00000040;
      padding: 10px;
      color: #fff;
      background: #0000ff;
      border-top-right-radius: 2rem;
      border-bottom-left-radius: 2rem;
    }
  }
}

@media (max-width: 500px) {
  .card {
    height: 14rem;
    width: 10rem;

    &__header {
      font-size: 14px;
      img {
        width: 3rem;
      }
    }

    &__body {
      p {
        font-size: 12px;
        strong {
        }
      }
    }

    &__footer {
      a {
        font-size: 11px;
      }
    }
  }
}
</style>
