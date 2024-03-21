<template>
  <div class="projects">
    <p>Projetos de empresas:</p>
    <div class="projects__content">
      <CardContent v-for="(item, id) in workProjects" :key="id" :data="item" />
    </div>

    <p>Projetos de estudos:</p>
    <div class="projects__content">
      <CardContent v-for="(item, id) in studyProjects" :key="id" :data="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardContent from "../../../shared/components/Card/Content.vue";
import { projectsWork } from "../../../utils/consts/projects-work";
import { ProjectsStudy } from "../../../utils/consts/projects-study";

const workProjects = ref<any>(projectsWork);
const studyProjects = ref<any>(ProjectsStudy);
</script>

<style scoped lang="scss">
.projects {
  display: flex;
  justify-content: center;
  width: 100%;
  height: max-content;
  align-items: center;
  flex-direction: column;
  padding: 7% 0;

  p {
    font-size: 2rem;
    font-weight: 500;
    padding: 1rem;
  }

  &__content {
    max-width: 950px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 500px) {
  .projects {
    gap: 0;
    padding: 30% 0;

    p {
      font-size: 18px;
    }

    &__content {
      height: 100%;
      justify-content: space-evenly;
    }
  }
}
</style>
