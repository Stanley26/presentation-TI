# Présentation OpenAPI & Swagger

Ce projet est une application de présentation interactive ("Deck") construite avec **React**, **Vite**, **TypeScript** et **Tailwind CSS**. Elle offre une expérience visuelle moderne pour présenter des concepts techniques.

## 🚀 Démarrage Rapide (avec Docker)

C'est la méthode la plus simple, elle ne nécessite pas d'installer Node.js sur votre machine.

### Prérequis
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé et lancé.

### Instructions

1. Ouvrez un terminal à la racine du projet.
2. Construisez et lancez le conteneur :
   ```bash
   docker-compose up --build
   ```
3. Une fois le serveur lancé, ouvrez votre navigateur sur :
   👉 **http://localhost:5173**

*Note : Le "Hot Reload" est activé. Toute modification dans les fichiers `.tsx` mettra à jour la présentation instantanément sans redémarrer Docker.*

---

## 💻 Démarrage Manuel (Node.js)

Si vous ne souhaitez pas utiliser Docker ou si vous voulez développer directement sur votre machine.

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée).

### Instructions

1. Installez les dépendances :
   ```bash
   npm install
   ```

2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

3. Ouvrez votre navigateur sur **http://localhost:5173**.

---

## 🛠️ Modifier la présentation

Le contenu a été séparé pour faciliter la maintenance.

### Structure des fichiers
Les diapositives se trouvent dans le dossier `src/slides/` :

| Fichier | Contenu |
|---------|---------|
| `01_Intro.tsx` | Introduction, contexte et valeur business |
| `02_Foundations.tsx` | Concepts REST, définition technique d'OpenAPI |
| `03_Tooling.tsx` | Swagger UI, Editor, Hub et écosystème |
| `04_Integration.tsx` | Stratégies Code-First vs Contract-First et Java |
| `05_Advanced.tsx` | Tests, Mocks, CI/CD et Gouvernance |

### Ajouter une slide
1. Ouvrez le fichier `.tsx` approprié dans `src/slides/`.
2. Ajoutez un objet au tableau `Slide[]` en respectant ce format :
   ```typescript
   {
     id: "mon-id-unique",
     title: "Mon Titre",
     subtitle: "Mon sous-titre",
     content: (
       <div>
         <h1>Mon contenu HTML/React ici</h1>
       </div>
     )
   }
   ```
3. Sauvegardez le fichier.

### Composants Utiles
- **`<CodeBlock />`** : Pour afficher du code avec coloration syntaxique (style IDE).
- **`<FeatureItem />`** : Pour afficher une liste de points avec icônes.

## ⌨️ Navigation
- **Flèche Droite** ou **Espace** : Diapositive suivante
- **Flèche Gauche** : Diapositive précédente
