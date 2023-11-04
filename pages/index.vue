<template>
  <div class="home">
    <div class="home-banner">
      <BannerContent />
    </div>
    <div class="home-documents">
      <DocumentsContent />
    </div>
    <div class="home-project">
      <ProjectContent />
    </div>
    <div class="home-description">
      <DescriptionContent />
    </div>
    <div class="home-contact">
      <ContactContent />
    </div>
  </div>
</template>

<script setup lang="ts">
import BannerContent from "../components/Home/Banner/Content.vue";
import DescriptionContent from "../components/Home/Description/Content.vue";
import ProjectContent from "../components/Home/Project/Content.vue";
import DocumentsContent from "../components/Home/Documents/Content.vue";
import ContactContent from "../components/Home/Contact/Content.vue";
</script>
