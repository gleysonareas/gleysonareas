<template>
  <div class="projects-container">
    <p class="category">Projetos de empresas:</p>
    <div class="projects-content">
      <div class="projects-item shadow-lg shadow-blue-500/50" v-for="(item, id) in workProjects" :key="id">
        <CardContent :data="item" />
      </div>
    </div>

    <p class="category">Projetos de estudos:</p>
    <div class="projects-content">
      <div class="projects-item shadow-lg shadow-blue-500/50" v-for="(item, id) in studyProjects" :key="id">
        <CardContent :data="item" />
      </div>
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

<style lang="scss">
.projects-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: max-content;
  align-items: center;
  flex-direction: column;
  padding: 7% 0;

  .category {
    font-size: 2rem;
    font-weight: 500;
    padding: 1rem;
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
      display: flex;
      flex-direction: column;
      max-width: 290px;
      width: 100%;
      height: 200px;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      margin: 1.3%;
    }
  }
}

@media (max-width: 425px) {
  .projects-container {
    gap: 0;
    padding: 30% 0;

    .projects-content {
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;
    }
  }
}
</style>