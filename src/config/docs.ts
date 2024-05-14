export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
};

export type DocsConfig = NavItem[];

export const docsConfig: NavItem[] = [
  {
    title: "useHasMounted",
    href: "/docs/useHasMounted",
    label: "New"
  },
  {
    title: "useHoverOutside",
    href: "/docs/useHoverOutside",
    label: "New"
  }
];
