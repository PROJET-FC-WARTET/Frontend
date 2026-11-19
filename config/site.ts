import type { Metadata } from "next";

/**
 * Informations générales du site, utilisées pour les métadonnées (SEO, titre pour les onglets).
 * Modifier ici plutôt que dans les pages.
 */
export const siteConfig = {
  name: "Wartet",
  description: "Site du club FC Wartet",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_FR",
} as const;

/** Métadonnées par défaut, appliquées à toutes les pages via app/layout.tsx. */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};
