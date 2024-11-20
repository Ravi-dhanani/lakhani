export interface IClientReview {
  id: number;
  name: string;
  image: string;
  position: string;
  rating: number;
  review: string;
}
export interface ICompany {
  id: number;
  image: string;
}

export interface ICaseStudies {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

export interface ITechStack {
  name: string;
  description: string;
  image: string[];
}

export interface IResources {
  id: number;
  image: string;
  description: string;
}

export interface IDevelopmentApproach {
  title: string;
  image: string;
  description: string;
  textColor: string;
  bgColor: string;
}

export interface IWorks {
  id: string;
  title: string;
  description: string;
}
