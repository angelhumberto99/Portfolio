export interface Store {
  currentPage: string;
}

export interface Icon {
  name: string;
  types: Array<string>;
}

export interface Page {
  name: string;
  icon: Icon;
}

export interface ProjectWithoutImgs {
  title?: string;
  date: string;
  description: string;
  longDescription: string;
  technologies: Array<string>;
  color: string;
}

export interface Project extends ProjectWithoutImgs {
  imgs: Array<string>;
}