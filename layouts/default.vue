<template>
  <div class="flex flex-col w-screen bg-slate-950 h-screen text-slate-400 justify-between items-center">
    <HeaderContent />
    <div class="w-11/12 h-3/4">
      <slot />
    </div>
    <FooterContent />
  </div>
</template>
<script setup lang="ts">
import HeaderContent from "../core/template/Header/Content.vue"
import FooterContent from "../core/template/Footer/Content.vue"
</script>
