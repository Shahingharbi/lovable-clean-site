export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export type FeatureCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type FeatureBlock = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  href?: string;
  videoThumb?: string;
  brandImage?: string;
};

export type ReviewCard = {
  rating: number;
  quote: string;
  author: string;
  source?: string;
};

export type Sector = {
  label: string;
  icon: string;
  href: string;
};

export type ResourceCard = {
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

export type Engagement = {
  icon: string;
  title: string;
  description: string;
};

export type ClientLogo = {
  src: string;
  alt: string;
};
