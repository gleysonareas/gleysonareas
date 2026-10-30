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

export interface Project {
  title: string;
  tech: string[];
  description: string;
  url: string;
  repo?: string;
}

export const WORK_PROJECTS: Project[] = [
  { title: 'Gomeyra', tech: ['Angular', 'SSR', 'Flexbox', 'Grid'], description: 'Site corporativo em Angular com SSR para gerar páginas estáticas, com foco em performance e responsividade.', url: 'https://www.gomeyra.com/' },
  { title: 'Liberfly', tech: ['Vue 2', 'Nuxt.js', 'SSR', 'SEO'], description: 'Site que integra clientes e advogados, gerado com Nuxt em modo SSR, otimizado para SEO e responsivo.', url: 'https://www.liberfly.com.br/' },
  { title: 'Liberfly · Palavras-chave', tech: ['Vue 2', 'Nuxt.js', 'SSR', 'SEO'], description: 'Projeto focado em SEO, gerado com Nuxt SSR e totalmente responsivo.', url: 'https://liberfly.liberfly.com.br/' },
  { title: 'Med Mundo', tech: ['Vue 2', 'Nuxt.js', 'SSR'], description: 'Site que divulga os direitos dos profissionais de saúde, construído em Vue/Nuxt com SSR.', url: 'https://www.medmundo.com.br/' },
  { title: 'Blog Liberfly', tech: ['WordPress', 'Elementor'], description: 'Blog em WordPress com Elementor para publicar conteúdo do nicho jurídico da empresa.', url: 'https://blog.liberfly.com.br/' },
];

export const STUDY_PROJECTS: Project[] = [
  { title: 'Monster Slayer', tech: ['Vue.js', 'JavaScript'], description: 'Jogo desenvolvido com Vue.js a partir do curso da Cod3r.', url: 'https://gleysonareas.github.io/monster-slayer/', repo: 'https://github.com/gleysonareas/monster-slayer' },
  { title: 'Todo App', tech: ['Angular 14', 'TypeScript', 'LocalStorage'], description: 'Lista de tarefas em Angular 14 com persistência dos dados no localStorage.', url: 'https://gleysonareas.github.io/todo-app/', repo: 'https://github.com/gleysonareas/todo-app' },
  { title: 'Finansys', tech: ['Angular 7→11', 'TypeScript'], description: 'App financeiro com arquitetura master-detail para reuso de código; começou no Angular 7 e foi atualizado até o 11.', url: 'https://gleysonareas.github.io/finansys/', repo: 'https://github.com/gleysonareas/finansys' },
  { title: 'CRUD', tech: ['Angular 9', 'Angular Material', 'Flex-layout'], description: 'CRUD básico em Angular 9 com Angular Material, baseado no curso da Coder (Leonardo Leitão).', url: 'https://gleysonareas.github.io/crud/', repo: 'https://github.com/gleysonareas/crud' },
  { title: 'Meat App', tech: ['Angular 4→6', 'TypeScript'], description: 'Projeto do curso da Coder, escrito em Angular 4 e atualizado para as versões 5 e 6 ao longo do curso.', url: 'https://gleysonareas.github.io/meat-app-starter/', repo: 'https://github.com/gleysonareas/meat-app-starter' },
  { title: 'Calculator', tech: ['TypeScript', 'HTML5', 'CSS'], description: 'Calculadora em TypeScript, baseada no curso da Hcode.', url: 'https://gleysonareas.github.io/calculator/', repo: 'https://github.com/gleysonareas/calculator' },
  { title: 'Wildbeast', tech: ['HTML5', 'CSS Grid'], description: 'Página feita com Grid Layout a partir do curso da Origamid.', url: 'https://gleysonareas.github.io/wildbeast/', repo: 'https://github.com/gleysonareas/wildbeast' },
  { title: 'Flexblog', tech: ['HTML5', 'Flexbox'], description: 'Página feita com Flexbox a partir do curso da Origamid.', url: 'https://gleysonareas.github.io/flexblog/', repo: 'https://github.com/gleysonareas/flexblog' },
  { title: 'Glass Project', tech: ['HTML5', 'CSS'], description: 'Meu primeiro projeto, só com HTML, CSS e um pouco de JavaScript, do curso do Gustavo Guanabara.', url: 'https://gleysonareas.github.io/glass-project/', repo: 'https://github.com/gleysonareas/glass-project' },
];

export const STATS: { value: string; label: string }[] = [
  { value: '5+', label: 'anos de experiência' },
  { value: '8', label: 'experiências remotas' },
  { value: '2–19', label: 'versões de Angular' },
];
