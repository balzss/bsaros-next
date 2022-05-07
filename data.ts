import type { Project, UserInfo } from './utils/types';

export const projects: Project[] = [
  {
    title: 'konzultac.io',
    description: 'Create propaganda posters faster then ever.',
    url: 'https://konzultac.io',
    links: [
      {
        label: 'Github',
        url: 'https://github.com/balzss/luxbar'
      },
    ]
  },
  {
    title: 'wololopolo.com',
    description: 'Sometimes the best way to express a thought is to put it on a T-Shirt. This webapp can help you with that in a matter of seconds.',
    url: 'https://wololopolo.com',
    links: [],
  },
  {
    title: 'Luxbar',
    description: 'Responseive, customizable and CSS only navbar library with an interactive demo page.',
    links: [
      {
        label: 'Github',
        url: 'https://github.com/balzss/luxbar'
      },
      {
        label: 'Demo',
        url: 'https://balzss.github.io/luxbar'
      }
    ]
  },
  {
    title: 'cli-typer',
    description: 'CLI app written in node.js to practice touch typing with a countdown clock, custom wordlist option and stats that can be saved.',
    links: [
      {
        label: 'Github',
        url: 'https://github.com/balzss/luxbar'
      },
      {
        label: 'Demo',
        url: 'https://balzss.github.io/luxbar'
      }
    ]
  }
];

export const userInfo: UserInfo = {
  name: 'Balázs Sáros',
  role: 'Software Developer',
  picture: '/avatar.jpeg',
  links: [
    {
      label: 'hello@bsaros.com',
      url: 'mailto:hello@bsaros.com',
      icon: 'email',
    },
    {
      label: 'github.com/balzss',
      url: 'https://github.com/balzss',
      icon: 'github',
    },
    {
      label: 'linkedin.com/in/bsaros',
      url: 'https://linkedin.com/in/bsaros',
      icon: 'linkedin',
    },
    {
      label: 'Budapest',
      icon: 'location',
    },
  ]
};
