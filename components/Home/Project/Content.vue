<template>
  <div class="projects">
    <p>Projetos de empresas:</p>
    <div class="projects__content">
      <div class="projects__content__item shadow-lg shadow-blue-500/50" v-for="(item, id) in workProjects" :key="id">
        <CardContent :data="item" />
      </div>
    </div>

    <p>Projetos de estudos:</p>
    <div class="projects__content">
      <div class="projects__content__item shadow-lg shadow-blue-500/50" v-for="(item, id) in studyProjects" :key="id">
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

    &__item {
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
  .projects {
    gap: 0;
    padding: 30% 0;

    &__content {
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;
    }
  }
}
</style>