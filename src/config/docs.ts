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
    href: "/docs/useHasMounted"
  },
  {
    title: "useHoverOutside",
    href: "/docs/useHoverOutside"
  },
  {
    title: "useHoverInside",
    href: "/docs/useHoverInside"
  },
  {
    title: "useClickInside",
    href: "/docs/useClickInside"
  },
  {
    title: "useClickOutside",
    href: "/docs/useClickOutside"
  },
  {
    title: "useCopyToClipboard",
    href: "/docs/useCopyToClipboard"
  },
  {
    title: "useKeyboardCommands",
    href: "/docs/useKeyboardCommands",
    label: "New"
  }
];
