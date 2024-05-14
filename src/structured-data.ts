export const jsonLd = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "useReactHook",
  description: "Collection of React Hooks",
  url: "https://usereacthook.com",
  sameAs: ["https://github.com/project-kt/usereacthook"],
  email: "moisatedy@gmail.com",
  mainEntityOfPage: {
    "@type": "CreativeWork",
    url: "https://usereacthook.com"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://usereacthook.com",
    "query-input": "required name=search_term_string"
  }
};
