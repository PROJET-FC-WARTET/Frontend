> [!WARNING]
> **!!! NE MODIFIEZ PAS CE FICHIER !!!** 
> **COPIEZ-COLLEZ LE ET UTILISEZ LE SUR VOTRE SESSION !!!**

# UC-XX : [Nom du Use Case]

**Acteur principal :** [Qui utilise ? Ex: Coach, Parent, Admin]
**Objectif :** [Que veut-il faire ?]
**Préconditions :** [Que faut-il avant ? Ex: Être connecté, avoir le rôle X]

## Scénario nominal (étapes)
1. L'utilisateur arrive sur la page [Nom de la page].
2. Il voit [Décrire ce qu'il voit].
3. Il clique sur [Bouton/Lien].
4. Le système affiche [Résultat attendu].
5. ...

## Scénarios alternatifs
- **Xa. [Cas d'erreur] :** [Ex: Message d'erreur si le formulaire est vide]
- **Xb. [Autre cas] :** [Ex: Redirection si l'utilisateur n'est pas connecté]

## Postconditions
[État de l'interface après l'action. Ex: L'utilisateur est redirigé vers le tableau de bord.]

## 🎨 Éléments d'interface (Frontend)

### Page(s) concernée(s)
- [Ex: `/login`, `/dashboard/coach`]

### Composant(s) nécessaire(s)
- [Ex: Formulaire de connexion, Bouton, Modale de confirmation]

### États à gérer
- [ ] **Chargement** : [Que voit l'utilisateur pendant l'attente ? Ex: Spinner]
- [ ] **Succès** : [Que voit l'utilisateur en cas de réussite ? Ex: Message de confirmation]
- [ ] **Erreur** : [Que voit l'utilisateur en cas d'échec ? Ex: Message rouge]
- [ ] **Vide** : [Que voit l'utilisateur si aucune donnée ? Ex: "Aucun élément à afficher"]

### Règles de responsive
- **Mobile (< 768px) :** [Ex: Le menu devient un burger, le tableau passe en colonnes]
- **Tablette (768px - 1024px) :** [Ex: 2 colonnes au lieu de 3]
- **Desktop (> 1024px) :** [Ex: Affichage complet]

## 🔗 Éléments techniques (Frontend)
- **Route(s) :** [Ex: `/login`]
- **Appel(s) API nécessaire(s) :** [Ex: `POST /api/login`]
- **Données reçues :** [Ex: `{ token, role, user }`]
- **Redirection après succès :** [Ex: Vers `/dashboard` ou selon le rôle]
