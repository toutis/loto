const EXTRA_QUESTIONS = [
  {
    q: "Combien de combinaisons différentes existe‑t‑il au Loto (5 numéros parmi 49 + 1 numéro Chance parmi 10) ?",
    choices: ["1 906 884", "19 068 840", "190 688 400", "490 000 000", "4 900 000 000"],
    answer: 1
  },
  {
    q: "L’ordre de grandeur pour obtenir 5 bons numéros SANS le numéro Chance est :",
    choices: [
      "1 sur 96 000",
      "1 sur 211 876",
      "1 sur 9 631",
      "1 sur 2 118 760",
      "1 sur 19 068 840"
    ],
    answer: 3
  },
  {
    q: "La probabilité d’avoir 4 bons numéros AVEC le numéro Chance est :",
    choices: ["1 sur 86 700", "1 sur 9 631", "1 sur 2 016", "1 sur 144", "1 sur 29"],
    answer: 0
  },
  {
    q: "La probabilité d’avoir 4 bons numéros SANS le numéro Chance est :",
    choices: ["1 sur 9 631", "1 sur 2 016", "1 sur 224", "1 sur 144", "1 sur 29"],
    answer: 0
  },
  {
    q: "La probabilité d’avoir 3 bons numéros AVEC le numéro Chance est :",
    choices: ["1 sur 2 016", "1 sur 224", "1 sur 144", "1 sur 28", "1 sur 16"],
    answer: 0
  },
  {
    q: "La probabilité d’avoir 3 bons numéros SANS le numéro Chance est :",
    choices: ["1 sur 224", "1 sur 144", "1 sur 96", "1 sur 32", "1 sur 8"],
    answer: 1
  },
  {
    q: "La probabilité d’avoir 2 bons numéros AVEC le numéro Chance est :",
    choices: ["1 sur 144", "1 sur 96", "1 sur 72", "1 sur 16", "1 sur 8"],
    answer: 0
  },
  {
    q: "La probabilité d’avoir 2 bons numéros SANS le numéro Chance est :",
    choices: ["1 sur 64", "1 sur 24", "1 sur 16", "1 sur 12", "1 sur 8"],
    answer: 2
  },
  {
    q: "La probabilité d’avoir 1 bon numéro AVEC le numéro Chance est :",
    choices: ["1 sur 56", "1 sur 32", "1 sur 28", "1 sur 12", "1 sur 4"],
    answer: 2
  },
  {
    q: "La probabilité d’avoir 0 bon numéro AVEC le numéro Chance est :",
    choices: ["1 sur 56", "1 sur 18", "1 sur 17,6", "1 sur 12", "1 sur 4"],
    answer: 2
  },

  {
    q: "Augmenter le nombre de grilles jouées sur UN même tirage plutôt que de les répartir :",
    choices: [
      "Augmente la probabilité totale de jackpot à budget égal",
      "Diminue la probabilité totale de jackpot à budget égal",
      "Donne la même probabilité totale de jackpot à budget égal",
      "Double la probabilité de tous les rangs",
      "Garantit un rang au moins moyen"
    ],
    answer: 2
  },
  {
    q: "Si vous passez de 1 à 100 grilles sur le même tirage, la probabilité de jackpot :",
    choices: [
      "Est multipliée par ≈100 (mais reste minuscule)",
      "Passe au‑dessus de 1 %",
      "Dépasse 10 %",
      "Devient ≈ 50 %",
      "Est inchangée"
    ],
    answer: 0
  },
  {
    q: "« Les tirages sont indépendants » signifie que :",
    choices: [
      "Les numéros sortis récemment ont moins de chances de sortir",
      "Les numéros « en retard » ont plus de chances",
      "Le passé n’influe pas sur le tirage suivant",
      "La somme des numéros est constante",
      "Les paires sortent toujours plus"
    ],
    answer: 2
  },
  {
    q: "Dire « la loi des séries » pour justifier qu’un jackpot va tomber parce qu’il tarde :",
    choices: [
      "Est un raisonnement valide",
      "S’appelle le sophisme du parieur",
      "S’appelle le biais de disponibilité",
      "Est une propriété du Loto",
      "Est garanti vrai sur 1 an"
    ],
    answer: 1
  },

  {
    q: "Prix d’une grille simple de Loto (référence utilisée ici) :",
    choices: ["1,10 €", "2,20 €", "3,00 €", "5,00 €", "10,00 €"],
    answer: 1
  },
  {
    q: "En moyenne, pour « viser » un jackpot en jouant des grilles une à une, il faudrait dépenser de l’ordre de :",
    choices: [
      "Quelques milliers d’€",
      "Quelques centaines de milliers d’€",
      "Quelques dizaines de millions d’€",
      "Quelques centaines de millions d’€",
      "Plus d’un milliard d’€"
    ],
    answer: 2
  },
  {
    q: "À budget fixe, jouer en multiple (ex. 6 numéros) plutôt que le même nombre de grilles simples :",
    choices: [
      "Change la probabilité de jackpot",
      "Double la probabilité des rangs moyens",
      "Donne la même probabilité totale de jackpot",
      "Garantit un gain secondaire",
      "Réduit de moitié la variance"
    ],
    answer: 2
  },
  
  {
    q: "Combien de grilles simples sont équivalentes à une multiple 7 numéros (Chance simple) ?",
    choices: ["7", "14", "21", "28", "35"],
    answer: 2 
  },
  {
    q: "Une multiple 8 numéros (Chance simple) équivaut à combien de grilles simples ?",
    choices: ["28", "36", "56", "70", "84"],
    answer: 2 
  },
  {
    q: "Une multiple 6 numéros avec 3 numéros Chance équivaut à :",
    choices: ["6 grilles", "12 grilles", "18 grilles", "24 grilles", "36 grilles"],
    answer: 2 
  },
  {
    q: "Avec 9 numéros (Chance simple), l’équivalent en grilles simples est :",
    choices: ["56", "72", "84", "126", "168"],
    answer: 3 
  },
  {
    q: "Vous jouez 1 000 grilles d’un coup (même tirage). La probabilité d’au moins un jackpot est :",
    choices: ["1 sur 19 068", "1 sur 1 906", "1 sur 191", "≈ 1 %", "≈ 5 %"],
    answer: 1
  },
  {
    q: "Vous jouez 10 000 grilles d’un coup. Quel est l’ordre de grandeur de la probabilité d’au moins un jackpot ?",
    choices: ["≈ 0,05 %", "≈ 0,5 %", "≈ 5 %", "≈ 15 %", "≈ 50 %"],
    answer: 0
  },

  { q: "Vrai ou faux : « Prendre des numéros peu sortis récemment augmente mes chances. »", choices: ["Vrai", "Faux"], answer: 1 },
  { q: "Vrai ou faux : « Choisir 1–2–3–4–5 ; 1 est une mauvaise idée car la combinaison est impossible. »", choices: ["Vrai", "Faux"], answer: 1 },
  { q: "Vrai ou faux : « Jouer toujours la même grille ne change pas la probabilité de jackpot par tirage. »", choices: ["Vrai", "Faux"], answer: 0 },

  {
    q: "On surestime souvent la fréquence des jackpots parce que :",
    choices: [
      "Ils sont mathématiquement fréquents",
      "Les médias mettent en avant les rares gagnants",
      "Les boules sont biaisées",
      "La FDJ fixe des cycles",
      "Les perdants sont interdits d’antenne"
    ],
    answer: 1
  },
  {
    q: "Confondre « impossible » et « très improbable » amène surtout à :",
    choices: ["Sous-jouer", "Sur‑jouer", "Mal percevoir le risque", "Toujours gagner les petits rangs", "Comprendre la variance"],
    answer: 2
  },

  {
    q: "Jouer plus vite (plus de tirages simulés par seconde) :",
    choices: [
      "Augmente la probabilité d’un jackpot par tirage",
      "Diminue la probabilité d’un jackpot par tirage",
      "Ne change rien à la probabilité par tirage",
      "Force un jackpot au bout d’un moment",
      "Change la distribution des numéros"
    ],
    answer: 2
  },
  {
    q: "Pour ≈ 10 % de chances d’un jackpot, le nombre de grilles (ordre de grandeur) est :",
    choices: ["200 000", "500 000", "1 000 000", "2 000 000", "5 000 000"],
    answer: 3
  },
  {
    q: "À 2,20 € la grille, ≈ 10 % de chances d’un jackpot coûtent :",
    choices: ["≈ 900 000 €", "≈ 2 200 000 €", "≈ 4 400 000 €", "≈ 9 000 000 €", "≈ 22 000 000 €"],
    answer: 2
  },
  {
    q: "À 2,20 € la grille, ≈ 1 % de chances d’un jackpot coûtent :",
    choices: ["≈ 42 000 €", "≈ 190 000 €", "≈ 420 000 €", "≈ 1 100 000 €", "≈ 2 200 000 €"],
    answer: 2
  },

  {
    q: "Vous jouez 100 € d’un coup (≈ 45 grilles). La probabilité d’OBTENIR AU MOINS un jackpot est :",
    choices: ["≈ 1 sur 42 000", "≈ 1 sur 190 000", "≈ 1 sur 424 000", "≈ 1 sur 1 900 000", "≈ 1 sur 19 000 000"],
    answer: 2
  },
  {
    q: "Vous jouez 1 000 € d’un coup (≈ 455 grilles). La probabilité d’OBTENIR AU MOINS un jackpot est :",
    choices: ["≈ 1 sur 83 000", "≈ 1 sur 42 000", "≈ 1 sur 19 000", "≈ 1 sur 1 900", "≈ 1 sur 190"],
    answer: 1
  },
  {
    q: "Vous jouez 10 000 € d’un coup (≈ 4 545 grilles). La probabilité d’OBTENIR AU MOINS un jackpot est :",
    choices: ["≈ 1 sur 4 200", "≈ 1 sur 1 900", "≈ 1 sur 400", "≈ 0,5 %", "≈ 5 %"],
    answer: 0
  },
  {
    q: "Jouer 1 grille à chaque tirage pendant 30 ans (≈ 4 680 grilles) donne une chance de jackpot d’environ :",
    choices: ["≈ 5 %", "≈ 1 %", "≈ 0,1 %", "≈ 0,03 %", "≈ 0,003 %"],
    answer: 3
  },

  { q: "Vrai ou faux : « L’espérance de gain d’une grille est inférieure à 2,20 € (le prix). »", choices: ["Vrai", "Faux"], answer: 0 },
  { q: "Vrai ou faux : « Même avec un très gros budget, la probabilité de PERDRE de l’argent reste élevée. »", choices: ["Vrai", "Faux"], answer: 0 },
  {
    q: "Choisir des numéros peu populaires (ex. > 31) :",
    choices: [
      "Augmente la probabilité de gagner le jackpot",
      "Ne change pas la probabilité de gagner, mais réduit le risque de partage si l’on gagne",
      "Diminue la probabilité de gagner",
      "Double la probabilité de tous les rangs",
      "Garantit un petit gain"
    ],
    answer: 1
  },
  { q: "Vrai ou faux : « Jouer des dates de naissance ou des numéros porte-bonheur change la probabilité de sortie. »", choices: ["Vrai", "Faux"], answer: 1 },
  {
    q: "On parle de « sophisme du parieur » quand on croit que :",
    choices: [
      "Un numéro en retard a plus de chances de sortir",
      "Les combinaisons “belles” sortent plus",
      "Les tirages suivent des cycles déterministes",
      "Un gros jackpot doit tomber ce soir",
      "Toutes les réponses ci‑dessus"
    ],
    answer: 4
  },

  {
    q: "À budget égal, vaut‑il mieux étaler ses grilles sur plusieurs tirages ou tout jouer d’un coup ?",
    choices: [
      "Tout d’un coup : ça force un jackpot",
      "Étaler : ça répartit la chance",
      "C’est équivalent pour la probabilité d’au moins un jackpot",
      "Tout d’un coup : ça double les rangs moyens",
      "Étaler : ça garantit un gain secondaire"
    ],
    answer: 2
  },
  {
    q: "Vous passez de 1 à 100 grilles (même tirage). La probabilité de jackpot :",
    choices: [
      "Est multipliée par ≈100 (mais reste microscopique)",
      "Passe > 1 %",
      "Passe > 10 %",
      "Devient ≈ 50 %",
      "Est inchangée"
    ],
    answer: 0
  },
  {
    q: "Un message publicitaire qui montre surtout les gagnants entraîne surtout :",
    choices: [
      "Une information statistique neutre",
      "Un réalisme sur les pertes",
      "Une surestimation de la fréquence des jackpots",
      "Une garantie de gain",
      "Une baisse du jeu"
    ],
    answer: 2
  },
  {
    q: "La probabilité de gagner le jackpot avec 1 grille est :",
    choices: ["1 sur 1,9 million", "1 sur 19 millions", "1 sur 190 millions", "1 sur 1 906", "1 sur 49"],
    answer: 1
  },
  {
    q: "Combien faudrait‑il de grilles pour atteindre ≈ 0,1 % de chances de jackpot ?",
    choices: ["≈ 1 900", "≈ 19 000", "≈ 190 000", "≈ 1 900 000", "≈ 19 000 000"],
    answer: 1
  },
  {
    q: "À 2,20 € la grille, ≈ 0,1 % de chances de jackpot coûtent :",
    choices: ["≈ 4 200 €", "≈ 19 000 €", "≈ 42 000 €", "≈ 190 000 €", "≈ 420 000 €"],
    answer: 2
  },
  {
    q: "Pour obtenir ≈ 0,1 % de chances en jouant 100 € par mois (≈ 45 grilles/mois), il faut environ :",
    choices: ["9 mois", "4 ans", "35 ans", "350 ans", "3 500 ans"],
    answer: 2
  },
  {
    q: "Pour atteindre ≈ 1 % de chances avec 100 € par mois (≈ 45 grilles/mois), il faut environ :",
    choices: ["3 ans", "30 ans", "300 ans", "3 000 ans", "30 000 ans"],
    answer: 2
  },

  {
    q: "Acheter TOUTES les combinaisons (impossible en pratique) coûterait environ :",
    choices: ["≈ 4 200 000 €", "≈ 14 000 000 €", "≈ 42 000 000 €", "≈ 140 000 000 €", "≈ 420 000 000 €"],
    answer: 2
  },
  {
    q: "Même en « achetant tout », quel risque demeure vrai ?",
    choices: [
      "Ne pas gagner le jackpot",
      "Partager le jackpot avec d’autres gagnants",
      "Perdre tous les tickets",
      "Changer la probabilité des numéros",
      "Forcer un 2e jackpot"
    ],
    answer: 1
  },

  {
    q: "Si 2 gagnants se partagent un jackpot de 10 M€, chacun reçoit (hors règles spécifiques) :",
    choices: ["10 000 000 €", "7 500 000 €", "5 000 000 €", "2 500 000 €", "1 000 000 €"],
    answer: 2
  },
  {
    q: "Jouer des numéros populaires (ex. 1–2–3–4–5 ; 1) :",
    choices: [
      "Augmente la probabilité de sortie",
      "Diminue la probabilité de sortie",
      "Ne change pas la probabilité, mais augmente le risque de partage",
      "Double la probabilité des petits rangs",
      "Garantit un gain secondaire"
    ],
    answer: 2
  },

  {
    q: "Vous jouez 20 € (≈ 9 grilles) sur un tirage. La probabilité d’OBTENIR AU MOINS un jackpot est :",
    choices: ["≈ 1 sur 2 100 000", "≈ 1 sur 210 000", "≈ 1 sur 21 000", "≈ 1 sur 2 100", "≈ 1 sur 210"],
    answer: 0
  },
  {
    q: "Vous jouez 500 € (≈ 227 grilles) sur un tirage. La probabilité d’au moins un jackpot est :",
    choices: ["≈ 0,001 %", "≈ 0,01 %", "≈ 0,1 %", "≈ 1 %", "≈ 10 %"],
    answer: 1
  },
  {
    q: "Vous jouez 5 000 € (≈ 2 273 grilles) sur un tirage. La probabilité d’au moins un jackpot est :",
    choices: ["≈ 0,012 %", "≈ 0,12 %", "≈ 1,2 %", "≈ 12 %", "≈ 50 %"],
    answer: 0
  },

  { q: "Vrai ou faux : « Doubler mon budget double environ ma probabilité de jackpot (qui reste minuscule). »", choices: ["Vrai", "Faux"], answer: 0 },
  { q: "Vrai ou faux : « Étaler un budget fixe sur plusieurs tirages change la probabilité totale d’au moins un jackpot. »", choices: ["Vrai", "Faux"], answer: 1 },

  {
    q: "Passer de 1 à 10 grilles sur un tirage fait passer la probabilité de jackpot de ≈ 0,000005 % à :",
    choices: ["≈ 0,00005 %", "≈ 0,0005 %", "≈ 0,005 %", "≈ 0,05 %", "≈ 0,5 %"],
    answer: 0
  },
  {
    q: "Passer de 10 à 1 000 grilles fait passer ≈ 0,00005 % à :",
    choices: ["≈ 0,0005 %", "≈ 0,005 %", "≈ 0,05 %", "≈ 0,5 %", "≈ 5 %"],
    answer: 1
  },

  {
    q: "Avec 1 000 € par an (≈ 455 grilles/an), votre probabilité d’AU MOINS un jackpot en 10 ans est :",
    choices: ["≈ 0,002 %", "≈ 0,024 %", "≈ 0,24 %", "≈ 2,4 %", "≈ 24 %"],
    answer: 1
  },
  {
    q: "Quel ordre de grandeur de dépenses pour atteindre ≈ 0,5 % de chances de jackpot ?",
    choices: ["≈ 50 000 €", "≈ 100 000 €", "≈ 200 000 €", "≈ 500 000 €", "≈ 1 000 000 €"],
    answer: 2
  },

  {
    q: "Dire « ce numéro n’est pas sorti depuis longtemps, il est dû » :",
    choices: [
      "Est correct grâce à la loi des séries",
      "Décrit une propriété du Loto",
      "Relève du sophisme du parieur",
      "Augmente votre espérance de gain",
      "Optimise le partage"
    ],
    answer: 2
  },
  {
    q: "L’espérance de gain d’une grille de Loto est :",
    choices: [
      "Égale au prix de la grille",
      "Supérieure au prix",
      "Inférieure au prix (jeu à espérance négative)",
      "Variable mais > prix sur l’année",
      "Inconnue car les probabilités n’existent pas"
    ],
    answer: 2
  },

  {
    q: "La probabilité de jackpot avec 1 grille (5 numéros + Chance) s’écrit :",
    choices: ["1 / 49^5", "1 / 1 906 884", "1 / 19 068 840", "10 / C(49,5)", "1 / 4 900 000"],
    answer: 2
  }, 
  {
    q: "Deux grilles DISTINCTES peuvent‑elles toutes les deux gagner le jackpot sur un même tirage ?",
    choices: ["Oui, si elles partagent ≥ 3 numéros", "Oui, si le jackpot est très gros", "Non, une seule combinaison correspond au tirage", "Oui, avec le numéro Chance", "Seulement si elles sont populaires"],
    answer: 2
  },
  {
    q: "Si vous achetez ~1 % de toutes les combinaisons (≈ N/100 grilles), votre probabilité d’au moins un jackpot est d’environ :",
    choices: ["≈ 0,1 %", "≈ 1 %", "≈ 10 %", "≈ 50 %", "≈ 99 %"],
    answer: 1 
  },
  {
    q: "La stratégie « Flash » vs choisir soi‑même ses numéros change la probabilité de jackpot :",
    choices: ["Oui, le Flash augmente la probabilité", "Oui, choisir soi‑même augmente la probabilité", "Non, c’est identique", "Cela dépend des jours pairs", "Seulement quand le jackpot > 10 M€"],
    answer: 2
  },
  {
    q: "Jouer exactement la même grille qu’un ami :",
    choices: ["Augmente la probabilité de gagner", "Diminue la probabilité de gagner", "Ne change pas la probabilité de gagner mais augmente le risque de partager", "Garantit un gain secondaire", "Double la probabilité des rangs moyens"],
    answer: 2
  },
  {
    q: "Vrai ou faux : « Un tirage passé avec beaucoup de petits numéros rend plus probable un tirage suivant avec de grands numéros. »",
    choices: ["Vrai", "Faux"],
    answer: 1
  },
  {
    q: "Dans « 1 chance sur 19 068 840 », quel est l’ordre de grandeur en pourcentage ?",
    choices: ["≈ 0,000005 %", "≈ 0,00005 %", "≈ 0,0005 %", "≈ 0,005 %", "≈ 0,05 %"],
    answer: 1
  }
];

try {
  QUIZ_QUESTIONS.push(...EXTRA_QUESTIONS);
} catch (e) {
  window.QUIZ_QUESTIONS = (window.QUIZ_QUESTIONS || []).concat(EXTRA_QUESTIONS);
}

