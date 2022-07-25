import { TFunction } from "i18next";

export type LinkType = {
  href: string;
  title: string;
  anchor: string;
};

export const Links = (t: TFunction): LinkType[] => [
  {
    title: t('nav.link.introduction'),
    anchor: 'introduction',
    href: '/#introduction'
  },
  {
    title: t('nav.link.presetation'),
    anchor: 'about',
    href: '/#about'
  },
  {
    title: t('nav.link.knowledge'),
    anchor: 'knowledge',
    href: '/#knowledge'
  },
  {
    title: t('nav.link.projects'),
    anchor: 'projects',
    href: '/#projects'
  },
  {
    title: t('nav.link.contact'),
    anchor: 'contact',
    href: '/#contact'
  }
];
