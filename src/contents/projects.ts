import { Project } from "@/types";


export const projects: Project[] = [
    {
        title: 'Engineering Company Website',
        description: 'Institutional website built with HTML, CSS and JavaScript',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        githubLink: 'https://github.com/albertoaraujo-dev/stanna',
        demoLink: 'https://www.stanna.com.br/',
        image: '/portfolio/projects/stanna.png',
        isPrivateRepo: false,
      },
      {
        title: 'E-commerce',
        description: 'FrontEnd template using Jquery, CSS and HTML for CMS integration',
        technologies: ['Jquery', 'HTML5', 'CSS3'],
        githubLink: '/',
        demoLink: 'https://www.danfinity.com.br/',
        image: '/portfolio/projects/danfinity.png',
        isPrivateRepo: true,
      },
      {
        title: 'Portfolio Website',
        description: 'My personal portfolio website showcasing my projects and skills.',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        githubLink: 'https://github.com/albertoaraujo-dev/portfolio',
        demoLink: '/portfolio',
        image: '/portfolio/projects/portfolio.png',
        isPrivateRepo: false,
      },
      {
        title: 'Personal Site',
        description: 'Personal website for a psychologist.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        githubLink: 'https://github.com/albertoaraujo-dev/sorayaoliveira',
        demoLink: 'https://www.sorayaoliveira.com.br/',
        image: '/portfolio/projects/soraya.png',
        isPrivateRepo: false,
      },
      {
        title: 'Psychology Office Website',
        description: 'Institutional website built React and Styled Components',
        technologies: ['React', 'Styled Components', 'TypeScript'],
        githubLink: 'https://github.com/albertoaraujo-dev/aprimorecomportamental',
        demoLink: 'https://www.aprimorecomportamental.com.br/',
        image: '/portfolio/projects/aprimore.png',
        isPrivateRepo: false,
      }
  ];