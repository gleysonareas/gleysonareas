import { Component } from '@angular/core';
import { CERTS, EMAIL, EXPERIENCE, LINKEDIN, SKILLS, STATS, STUDY_PROJECTS, WHATSAPP, WORK_PROJECTS } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly email = EMAIL;
  protected readonly linkedin = LINKEDIN;
  protected readonly whatsapp = WHATSAPP;
  protected readonly experience = EXPERIENCE;
  protected readonly workProjects = WORK_PROJECTS;
  protected readonly studyProjects = STUDY_PROJECTS;
  protected readonly skills = SKILLS;
  protected readonly certs = CERTS;
  protected readonly stats = STATS;
  protected readonly year = new Date().getFullYear();
}
