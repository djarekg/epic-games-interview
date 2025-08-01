/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IMDB_API: string;
  readonly VITE_OMDB_API: string;
  readonly VITE_GNEWS_API: string;
  readonly VITE_GNEWS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
