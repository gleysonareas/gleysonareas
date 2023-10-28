<template>
  <div class="card">
    <div class="card__header">
      <h1>{{ data.title }}</h1>
    </div>
    <div class="card__body">
      <p>{{ data.description }}</p>
    </div>
    <div class="card__footer">
      <a :href="data.path">
        Clique e acesse
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {} as any
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  height: -webkit-fill-available;
  justify-content: space-between;

  &__header {
    font-size: x-large;
    font-weight: 500;
    color: #000;
    text-align: center;
  }

  &__body {
    text-align: center;
    overflow: auto;
  }

  &__footer {
    a {
      text-decoration: none;
      border: 1px solid rgba(0, 0, 0, .7137254902);
      border-radius: 5px;
      box-shadow: 4px 4px 4px #00000040;
      padding: 10px;
      color: #fff;
      background: #0000ff;
    }
  }
}
</style>