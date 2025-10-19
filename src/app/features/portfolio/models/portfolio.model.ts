/**
 * Representa os links para redes sociais e contato.
 */
export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
}

/**
 * Representa um idioma e o nível de proficiência.
 */
export interface Language {
  name: string;
  level: string;
}

/**
 * Representa a formação acadêmica.
 * Nota: A propriedade "degreeLevel " no JSON foi corrigida para "degreeLevel" aqui.
 */
export interface Education {
  schoolName: string;
  period: string;
  degree: string;
  degreeLevel: string;
  description: string;
}

/**
 * Representa uma experiência profissional.
 */
export interface ProfessionalExperience {
  company: string;
  period: string;
  role: string;
  description: string;
  skills: string[];
}

/**
 * Representa a estrutura completa dos dados do portfólio.
 */

export interface PortfolioData {
  role: string;
  name: string;
  location: string;
  aboutMe: { text: string }[];
  experiences: ProfessionalExperience[];
  educations: Education[];
  languages: Language[];
  social: SocialLinks;
  // A propriedade 'projects' não está no seu JSON atual,
  // mas mantive a interface caso você a adicione de volta.
  projects?: Project[];
}

/**
 * Representa um projeto no portfólio.
 * (Mantido de interações anteriores para consistência).
 */
export interface Project {
  name: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface PortfolioState {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
}
