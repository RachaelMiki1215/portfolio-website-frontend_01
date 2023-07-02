export type section = {
  label: string;
  href: string;
  children?: child[];
};

export type child = {
  label: string;
  href: string;
};
