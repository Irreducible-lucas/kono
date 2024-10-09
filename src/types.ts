export interface Link {
  id: number;
  text: string;
  url: string;
  child?: null | Link[];
}

export interface SideNavLink {
  id: number;
  text: string;
  icon?: string;
  icon_active?: string;
  url: string;
}

export interface ProgramCardProps {
  id?: number;
  image: string;
  link_url: string;
}
export interface Review{
  id?: number;
  name: string;
  feedback: string;
  image: string;
  rating: number;
 
}
export interface ServicesCardsProps {
  id?: number;
  image: string;
  link_url: string;
}
export interface FeaturedsWriteUp {
  id: number;
  title: string;
  image: string;
  url: string;
  desc: string;
  date: string;
};
export interface Newsletter {
  id: number;
  title: string;
  image: string;
  url: string;
  desc: string;
  date: string;
};
export interface Testimonial {
  name: string;
  image: string;
  rating: number;
  feedback: string;
};
