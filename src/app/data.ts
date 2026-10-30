export const EMAIL = 'gleysonareasdasilva@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/gleyson-areas-da-silva';
export const WHATSAPP = 'https://wa.me/5522999052397';

export interface Experience {
  company: string;
  role: string;
  period: string;
  place: string;
  text: string;
}

export const EXPERIENCE: Experience[] = [
  { company: 'LiberFly', role: 'Desenvolvedor Front-end', period: 'Fev/2023 – Mai/2025', place: 'Vitória, ES · Remoto', text: 'Gestão de todo o ciclo de desenvolvimento e manutenção de soluções web orientadas a SEO, garantindo performance e melhor avaliação nos motores de busca.' },
  { company: 'Easy Communication & Technology', role: 'Desenvolvedor Front-end', period: 'Set/2022 – Jan/2023', place: 'Joinville, SC · Remoto', text: 'Novas funcionalidades, melhoria de UX e upgrade de versão de um dos principais projetos da empresa, trazendo ganhos de desempenho e segurança.' },
  { company: 'GoMeyra', role: 'Desenvolvedor Front-end', period: 'Mar/2022 – Dez/2022', place: 'EUA · Remoto', text: 'Soluções de gestão laboratorial com Angular 13, implementação de SSR, otimização de performance e SEO On-Page.' },
  { company: 'Easy Communication & Technology', role: 'Desenvolvedor Full-stack', period: 'Jan/2022 – Ago/2022', place: 'Joinville, SC · Remoto', text: 'Evolução de aplicações Angular (v10 a v13) e criação/manutenção de APIs com .NET Core para integração entre sistemas.' },
  { company: 'LABDX', role: 'Desenvolvedor Full-stack', period: 'Jan/2022 – Mai/2022', place: 'EUA · Remoto', text: 'Gestão laboratorial com AngularJS e .NET. Também atuei como instrutor no onboarding de novos colaboradores.' },
  { company: 'Lextar Tecnologia', role: 'Desenvolvedor Front-end', period: 'Jan/2022 – Abr/2022', place: 'Goiânia, GO · Remoto', text: 'Soluções de gestão contábil com Angular 11 e Firebase.' },
  { company: 'Easy Communication & Technology', role: 'Desenvolvedor Front-end', period: 'Mar/2021 – Dez/2021', place: 'Joinville, SC · Remoto', text: 'Manutenção e prevenção de bugs e vulnerabilidades; instrutor de novos colaboradores e configuração de ambientes.' },
  { company: 'Lextar Tecnologia', role: 'Desenvolvedor Front-end (estágio)', period: 'Mar/2020 – Set/2020', place: 'Goiânia, GO · Remoto', text: 'Primeira experiência profissional desenvolvendo software web com Angular 9 e Firebase.' },
];

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Front-end', items: ['Angular 2–19', 'Vue 3', 'Nuxt.js', 'TypeScript', 'RxJS', 'SSR'] },
  { group: 'Back-end', items: ['.NET Core', 'Node.js', 'NestJS'] },
  { group: 'Banco de dados', items: ['SQL Server', 'MySQL', 'Firebase'] },
  { group: 'UI & Performance', items: ['SCSS', 'Tailwind', 'Bootstrap', 'Angular Material', 'PrimeNG', 'SEO'] },
  { group: 'Ferramentas', items: ['Git', 'Azure DevOps'] },
];

export const CERTS = [
  'Angular (v4, 5, 6, 9, 11)',
  'ASP.NET Core',
  'CSS Flexbox & Grid',
  'Vue.js & Electron',
  'TypeScript',
  'DevTools Pro',
  'Programação para Internet',
  'Programação para Dispositivos Móveis',
  'Programação de Sistemas de Informação',
  'Algoritmos Escaláveis',
];

export const STATS: { value: string; label: string }[] = [
  { value: '5+', label: 'anos de experiência' },
  { value: '8', label: 'experiências remotas' },
  { value: '2–19', label: 'versões de Angular' },
];
