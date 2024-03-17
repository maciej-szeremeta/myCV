export interface Experience {
  year: number;
  description: string;
}

export interface CVData {
  photo: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  github: string;
  position: string;
  experience: Experience[];
  education: string[];
}

export interface Props {
  cvData: CVData;
}