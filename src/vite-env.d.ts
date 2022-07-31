/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_FORMSPARK_FORM_ID: string;
  readonly VITE_BOTPOISON_PUBLIC_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
