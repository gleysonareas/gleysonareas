import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render name and all sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Gleyson Areas');
    expect(el.querySelectorAll('#sobre, #experiencia, #projetos, #skills, #contato').length).toBe(5);
    expect(el.querySelectorAll('#experiencia li').length).toBe(8);
    expect(el.querySelectorAll('ul[aria-label="Projetos profissionais"] > li').length).toBe(5);
    expect(el.querySelectorAll('ul[aria-label="Projetos de estudo"] > li').length).toBe(9);
  });
});
