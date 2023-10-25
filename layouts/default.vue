<template>
  <div
    class="flex flex-col w-screen bg-slate-950 h-screen text-slate-400 justify-between items-center"
  >
    <header class="bg-slate-800 w-11/12 h-1/6">test header</header>
    <div class="w-11/12 h-3/4">
      <slot />
    </div>
    <footer class="bg-slate-800 w-11/12 h-1/6">test footer</footer>
  </div>
</template>
<script setup lang="ts"></script>
