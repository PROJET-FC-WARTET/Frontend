# SHARED — Code et composants réutilisables

Ce dossier contient les composants, fonctions et styles **utilisés par plusieurs parties** de l'application frontend.

## Rôle
- Éviter la duplication de code.
- Centraliser les composants UI communs.
- Faciliter la maintenance (un seul endroit à modifier).

## Organisation suggérée
- **`components/`** : Composants UI réutilisables (boutons, cartes, modales, formulaires).
- **`hooks/`** : Hooks personnalisés (si vous utilisez React/Vue).
- **`utils/`** : Fonctions utilitaires (formatage de date, validation d'email).
- **`styles/`** : Variables CSS, thèmes, styles globaux.

## Règle
> Si un composant ou une fonction est utilisé dans **plus d'une page**, il doit être placé ici.
