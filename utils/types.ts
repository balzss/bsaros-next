type Link = {
  label: string;
  url?: string;
  icon?: string;
};

export type Project = {
  title: string;
  url?: string;
  description?: string;
  thumbnail?: string;
  links?: Link[];
};

export type UserInfo = {
  name: string;
  role: string;
  picture?: string;
  links: Link[];
};
