# JavaScript Core Workshop

Projet d'entrainement JavaScript organise en 3 exercices progressifs.
Le repository couvre la manipulation des tableaux/objets, les operations de base sur le DOM, la validation de formulaires, et une mini-gestion de donnees avec calcul dynamique.

## Objectifs pedagogiques

- Manipuler des tableaux d'objets (`forEach`, `filter`, `reduce`, `find`, `findIndex`, `sort`)
- Comprendre la logique CRUD cote front (ajouter, afficher, supprimer)
- Travailler avec le DOM en JavaScript vanilla
- Valider des donnees utilisateur avant insertion
- Structurer une interface simple avec Bootstrap (CDN)

## Structure du projet

```text
javascript-core-workshop/
|- Exercice 1/
|  |- index.html
|  |- app.js
|- Exercice 2/
|  |- index.html
|  |- style.css
|  |- app.js
|- Exercice 3/
|  |- index.html
|  |- style.css
|  |- app.js
|- README.md
```

## Technologies utilisees

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5.3.3 via CDN

## Prerequis

- Un navigateur web moderne (Chrome, Edge, Firefox)
- Connexion internet (necessaire pour charger Bootstrap CDN et Google Fonts dans l'exercice 3)

## Lancer les exercices

1. Ouvrir le dossier du projet.
2. Ouvrir le fichier `index.html` de l'exercice souhaite dans le navigateur.
3. Ouvrir la console navigateur pour suivre les sorties JS quand necessaire.

Raccourcis console:
- Windows/Linux: `F12`
- Mac: `Cmd + Option + I`

## Exercice 1 - Manipulation de produits en JavaScript

### Fichiers

- `Exercice 1/index.html`
- `Exercice 1/app.js`

### Ce que fait l'exercice

- Cree un tableau `produit` contenant 5 objets (id, nom, categorie, prix, stock).
- Affiche la liste complete dans la console.
- Filtre:
  - produits en rupture (`stock === 0`)
  - produits a prix eleve (`prix >= 500`)
- Demande une categorie via `prompt` et affiche les produits correspondants.
- Calcule:
  - nombre total de produits
  - valeur totale du stock (`prix * stock`)
  - produit le moins cher et le plus cher
- Met a jour le stock d'un produit apres saisie d'un id + quantite.
- Supprime un produit par id.
- Trie les produits:
  - par prix croissant
  - par stock decroissant
- Calcule la categorie la plus representee.

### Concepts travailles

- Tableaux d'objets
- Parcours et filtres
- Agragation de donnees (`reduce`)
- Tri et statistiques de base
- Interaction utilisateur avec `prompt`

## Exercice 2 - Formulaire d'inscription dynamique

### Fichiers

- `Exercice 2/index.html`
- `Exercice 2/style.css`
- `Exercice 2/app.js`

### UI

- Formulaire Bootstrap avec 3 champs:
  - nom
  - age
  - email
- Tableau Bootstrap (`table-bordered`, `table-striped`) pour afficher les lignes ajoutees.
- Bouton de suppression style Bootstrap (`btn btn-danger btn-sm`).

### Logique JavaScript

- Fonction principale: `addpersonne()`
- Verifie les champs obligatoires.
- Affiche des messages d'erreur via les spans (`nom_personne_span`, `age_personne_span`, `email_personne_span`).
- Ajoute une ligne dans `tbody_table` si les champs sont valides.
- Reinitialise les champs apres ajout.
- Fonction `deleteRow(btn)` pour supprimer la ligne correspondante.

### Role de `style.css`

- Masque les messages d'erreur par defaut.
- Les messages deviennent visibles seulement en cas de validation echouee.

## Exercice 3 - Interface pro + gestion d'elements et total dynamique

### Fichiers

- `Exercice 3/index.html`
- `Exercice 3/app.js`
- `Exercice 3/style.css` (present dans le dossier)

### UI

- Mise en page responsive 2 colonnes:
  - formulaire a gauche
  - tableau a droite
- Design modernise (Bootstrap + styles personnalises inline dans `index.html`).
- Champs du formulaire:
  - `nom_personne`
  - `age_personne`
  - `email_personne`
  - `nom_produit`
  - `prix`
  - `quantite`

### Logique JavaScript

`Exercice 3/app.js` implemente une logique proche d'un mini CRUD:

- Tableau de donnees en memoire: `elements`
- Compteur d'identifiant: `idCounter`
- Ajout d'un enregistrement: `addpersonne()`
- Alias compatible: `ajouterElement()`
- Rendu dynamique du tableau: `afficherElements()`
- Suppression par id: `supprimerElement(id)`
- Calcul du total general: `calculerTotal()`
  - somme de `prix * quantite` pour tous les elements
  - affichage automatique dans `#total` (cree si absent)

### Validation appliquee

L'ajout est bloque si:
- un champ texte est vide
- `age <= 0`
- `prix <= 0`
- `quantite <= 0`
- une valeur numerique est invalide

Dans ce cas, un `alert` informe l'utilisateur.

## Points d'attention

- Les donnees sont temporaires (stockage en memoire uniquement).
- Un rechargement de page efface les lignes ajoutees.
- L'exercice 1 depend de `prompt`, donc il doit etre execute dans un navigateur.

## Pistes d'amelioration

- Ajouter `localStorage` pour conserver les donnees apres refresh.
- Ajouter l'edition d'une ligne (Update).
- Ajouter une validation email plus stricte.
- Factoriser les styles custom d'`Exercice 3/index.html` vers `Exercice 3/style.css`.
- Ajouter des tests automatises (unitaires) pour la logique de calcul et validation.

## Auteur

Projet realise dans le cadre d'un apprentissage pratique de JavaScript.
