import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: 'stanna',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        githubLink: 'https://github.com/albertoaraujo-dev/stanna',
        demoLink: 'https://www.stanna.com.br/',
        image: '/portfolio/projects/stanna.png',
        isPrivateRepo: false,
      },
      {
        id: 'danfinity',
        technologies: ['Jquery', 'HTML5', 'CSS3'],
        githubLink: '/',
        demoLink: 'https://www.danfinity.com.br/',
        image: '/portfolio/projects/danfinity.png',
        isPrivateRepo: true,
      },
      {
        id: 'portfolio',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        githubLink: 'https://github.com/albertoaraujo-dev/portfolio',
        demoLink: '/portfolio',
        image: '/portfolio/projects/portfolio.png',
        isPrivateRepo: false,
      },
      {
        id: 'soraya',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        githubLink: 'https://github.com/albertoaraujo-dev/sorayaoliveira',
        demoLink: 'https://www.sorayaoliveira.com.br/',
        image: '/portfolio/projects/soraya.png',
        isPrivateRepo: false,
      },
      {
        id: 'aprimore',
        technologies: ['React', 'Styled Components', 'TypeScript'],
        githubLink: 'https://github.com/albertoaraujo-dev/aprimorecomportamental',
        demoLink: 'https://www.aprimorecomportamental.com.br/',
        image: '/portfolio/projects/aprimore.png',
        isPrivateRepo: false,
      }
  ];