export interface Project {
  id: string  
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
  isPrivateRepo: boolean;
  isFeatured: boolean;
}

export interface Experience {
  id: string;
  company: string;
}