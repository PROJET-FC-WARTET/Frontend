# ASSETS — Ressources statiques

Ce dossier contient toutes les ressources statiques utilisées par l'interface : images, icônes, polices, logos.

## Rôle
- Centraliser les fichiers médias pour éviter les doublons.
- Faciliter l'optimisation des ressources (compression, formats modernes).

## Organisation suggérée
- **`images/`** : Photos, illustrations, bannières.
- **`icons/`** : Icônes SVG ou PNG.
- **`fonts/`** : Polices personnalisées (si nécessaire).

## Règles importantes
- **Privilégiez le format SVG** pour les icônes et logos (vectoriel, léger, redimensionnable).
- **Optimisez les images** avant de les commiter (pas de fichiers de 10 Mo).
- **Nommez clairement** vos fichiers : `logo-fc-wartet.svg`, `banniere-accueil.webp`.
- **Ne commitez jamais** de fichiers sources de design (`.psd`, `.ai`, `.fig`). Ceux-ci doivent rester en dehors du dépôt.
