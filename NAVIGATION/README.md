# NAVIGATION — Routage et menus

Ce dossier contient tout le code qui gère la **navigation** dans l'application : routage des pages, menus, liens entre les vues.

## Rôle
- Définir les **routes** de l'application (ex: `/accueil`, `/login`, `/dashboard`).
- Gérer les **menus** (latéral, supérieur, mobile).
- Protéger certaines routes (redirection si non connecté).
- Gérer la navigation selon le **rôle** de l'utilisateur (Admin, Coach, Parent, etc.).

## Contenu attendu
- **`routes.js`** : Définition des routes et des composants associés.
- **`menu.js`** : Configuration des menus selon le rôle de l'utilisateur.
- **`guards.js`** : Fonctions de protection des routes (ex: `requireAuth`, `requireRole`).

## Règle importante
> La navigation doit être **différente selon le rôle** de l'utilisateur. Un Parent ne doit pas voir les mêmes menus qu'un Admin ou un Coach.
