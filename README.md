# 🎲 Simulateurs de Loto, EuroMillions et EuroDreams

## 🧩 Description

Ce projet regroupe **trois simulateurs de loterie** :
- **Loto**
- **Euro Millions**
- **Euro Dreams**
- **Keno**

Chaque simulateur permet de **jouer des grilles aléatoires ou personnalisées**, de **lancer des tirages virtuels**, et de **suivre les statistiques et gains potentiels**, **sans aucun enjeu réel**.

> 💡 Ce projet est purement **pédagogique et indépendant**, sans lien, approbation ni affiliation avec la **Française des Jeux (FDJ)**.
> Il ne collecte **aucune donnée personnelle** et n’implique **aucune mise réelle ni gain financier**.

---

## 🌐 Démonstration

L’interface principale (fichier `index.html`) permet de naviguer entre les trois simulateurs grâce à un système d’onglets :

- **Loto** → `loto.html`
- **Euro Millions** → `euromillions.html`
- **Euro Dreams** → `eurodreams.html`
- **Keno** → `keno.html`

Chaque simulateur s’affiche dans un **iframe** intégré et propose une interface claire et responsive.

---

## ⚙️ Fonctionnalités principales

### 🧮 Simulations
- Tirages automatiques ou manuels.
- Modes :
  - **Flash** (grilles aléatoires)
  - **Personnalisé** (vos propres grilles)
- Choix du nombre de tickets et réglage de la **vitesse de simulation**.

### 🎯 Conditions d’arrêt
- Stop automatique selon :
  - Nombre de bons numéros atteints.
  - Nombre d’années simulées.
  - Solde minimal (positif ou négatif).
  - Victoire d’un code Loto ou My Million.

### 📊 Statistiques & Historique
- Affichage détaillé des résultats.
- Bilan des dépenses et gains.
- Historique des tirages et visualisation graphique via **Chart.js**.
- Personnalisation des gains par rang.

### 💡 Options avancées
- **Grilles optimisées** selon la rareté des numéros tirés.
- **Affichage texte / boules** basculable.
- **Mode “Multichance”** (répartition de la mise en parts).
- **Identifiant unique** pour chaque combinaison (utile pour l’analyse).

---

## 🧰 Technologies utilisées

- **HTML5 / CSS3 / JavaScript**
- **Chart.js v4** pour les graphiques statistiques
- Interface **responsive** et fluide sans dépendance externe lourde.

---

## 📦 Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/toutis/loto.git
   cd loto
   ```

2. **Ouvrir le fichier principal**
   ```bash
   index.html
   ```
   puis naviguer entre les simulateurs via les onglets en haut de page.

Aucune installation supplémentaire n’est requise (tout fonctionne localement dans le navigateur).

---

## 🧑‍💻 Structure du projet

```
├── index.html          # Interface principale (onglets Loto / EuroMillions / EuroDreams)
├── loto.html           # Simulateur Loto
├── euromillions.html   # Simulateur EuroMillions
├── eurodreams.html     # Simulateur EuroDreams
├── keno.html           # Simulateur Keno
├── favicon.ico         # Icône du site
└── LICENSE             # Licence MIT
```

---

## 📜 Licence

Ce projet est distribué sous **licence MIT**.
Vous êtes libre de le modifier, réutiliser ou l’étendre, à condition de conserver la mention de licence.

---

## ⚠️ Avertissement

> Ce projet est un outil de simulation **à but éducatif**.
> Il ne permet **ni de jouer, ni de gagner**, et n’a **aucune valeur contractuelle ou financière**.
> Les noms “Loto”, “EuroMillions” et “EuroDreams” sont des **marques déposées** appartenant à la **FDJ**.
