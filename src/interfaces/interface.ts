import { IconType } from 'react-icons/lib'
export interface ProjectInter {
  heading: string
  img: string
  pharagraph: string
  url: string
}

export type ObserverType = {
  children: React.ReactNode;
  propClass: string;
  Tag: any;
};

export type ExperienceCardType =
  | { experience: number }
  | { clients: number }
  | { satisfaction: number }

export type ServiceCardType = {
    icon: IconType
    header: string
    paragraph: string
  }

export  type IconListType = {
    iconName: IconType
    iconColor: string
  }