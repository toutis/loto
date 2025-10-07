const EXTRA_QUESTIONS = [{
		q: "Combien de combinaisons différentes existe-t-il au Loto (5 numéros parmi 49 + 1 numéro Chance parmi 10) ?",
		choices: ["1 906 884", "19 068 840", "190 688 400", "490 000 000"],
		answer: 1
	},
	{
		q: "L’ordre de grandeur pour obtenir 5 bons numéros SANS le numéro Chance est :",
		choices: [
			"1 sur 96 000",
			"1 sur 211 876",
			"1 sur 2 118 760",
			"1 sur 19 068 840"
		],
		answer: 2
	},
	{
		q: "La probabilité d’avoir 4 bons numéros et le numéro Chance est :",
		choices: ["1 sur 86 284", "1 sur 9 631", "1 sur 2 016", "1 sur 144"],
		answer: 0
	},
	{
		q: "La probabilité d’avoir 4 bons numéros sans le numéro Chance est :",
		choices: ["1 sur 8 628", "1 sur 2 016", "1 sur 224", "1 sur 144"],
		answer: 0
	},
	{
		q: "La probabilité d’avoir 3 bons numéros et le numéro Chance est :",
		choices: ["1 sur 1 969", "1 sur 224", "1 sur 144", "1 sur 28"],
		answer: 0
	},
	{
		q: "La probabilité d’avoir 3 bons numéros sans le numéro Chance est :",
		choices: ["1 sur 224", "1 sur 196", "1 sur 96", "1 sur 32"],
		answer: 1
	},
	{
		q: "La probabilité d’avoir 2 bons numéros et le numéro Chance est :",
		choices: ["1 sur 134", "1 sur 96", "1 sur 72", "1 sur 16"],
		answer: 0
	},
	{
		q: "La probabilité d’avoir 2 bons numéros sans le numéro Chance est :",
		choices: ["1 sur 64", "1 sur 24", "1 sur 13", "1 sur 8"],
		answer: 2
	},
	{
		q: "La probabilité d’avoir 1 bon numéro et le numéro Chance est :",
		choices: ["1 sur 32", "1 sur 23", "1 sur 12", "1 sur 4"],
		answer: 1
	},
	{
		q: "La probabilité d’avoir 0 bon numéro et le numéro Chance est :",
		choices: ["1 sur 18", "1 sur 10", "1 sur 12", "1 sur 4"],
		answer: 1
	},
	{
		q: "Si vous passez de 1 à 100 grilles sur le même tirage, la probabilité de jackpot :",
		choices: [
			"Est multipliée par 100 (mais reste minuscule)",
			"Passe au-dessus de 1 %",
			"Dépasse 10 %",
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
			"La somme des numéros est constante"
		],
		answer: 2
	},
	{
		q: "Choisir des numéros qui ne sont pas sortis depuis longtemps :",
		choices: [
			"Augmente vos chances de gagner",
			"Diminue vos chances de gagner",
			"N’a aucun effet sur vos chances",
			"Optimise le partage du jackpot"
		],
		answer: 2
	},
	{
		q: "Penser qu’un numéro va ressortir parce qu’il est « chaud » :",
		choices: [
			"Est une stratégie gagnante",
			"Repose sur une illusion du hasard",
			"Est prouvé par les statistiques",
			"Change la probabilité du tirage"
		],
		answer: 1
	},
	{
		q: "Dire qu’un numéro est « dû » car il n’est pas sorti depuis longtemps :",
		choices: [
			"Est un raisonnement juste",
			"Est une superstition appelée sophisme du parieur",
			"Montre une bonne connaissance du hasard",
			"Augmente légèrement les chances de gain"
		],
		answer: 1
	},
	{
		q: "Les tirages du Loto ont-ils une mémoire ?",
		choices: [
			"Oui, les numéros évitent de ressortir trop souvent",
			"Oui, les numéros reviennent par cycles",
			"Non, chaque tirage est totalement indépendant",
			"Seulement pour le numéro Chance"
		],
		answer: 2
	},
	{
		q: "Les numéros pairs sortent-ils plus souvent que les impairs au Loto ?",
		choices: [
			"Oui, c’est statistiquement prouvé",
			"Non, chaque numéro a la même probabilité",
			"Oui, mais seulement sur les gros tirages",
			"Non, mais cela dépend du numéro Chance"
		],
		answer: 1
	},
	{
		q: "Si un numéro est sorti plusieurs fois d’affilée :",
		choices: [
			"Il a moins de chances de ressortir",
			"Il a plus de chances de ressortir encore",
			"Cela ne change rien à sa probabilité",
			"C’est un signe de fin de série"
		],
		answer: 2
	},
	{
		q: "Jouer les mêmes numéros à chaque tirage :",
		choices: [
			"Diminue vos chances sur le long terme",
			"Augmente vos chances grâce à la régularité",
			"Ne change rien aux probabilités de gain",
			"Garantit un gain au bout d’un moment"
		],
		answer: 2
	},
	{
		q: "Les statistiques des anciens tirages peuvent-elles prédire les prochains ?",
		choices: [
			"Oui, elles permettent d’anticiper les cycles",
			"Oui, si on analyse suffisamment de données",
			"Non, chaque tirage reste totalement aléatoire",
			"Oui, mais seulement pour les numéros Chance"
		],
		answer: 2
	},
	{
		q: "Penser que les numéros « s’équilibrent » avec le temps :",
		choices: [
			"Est une croyance appelée loi des séries",
			"Est un principe vrai du Loto",
			"Est un biais de raisonnement humain",
			"Montre une bonne stratégie de jeu"
		],
		answer: 2
	},
	{
		q: "Quel est le prix d’une grille simple de Loto :",
		choices: ["2,00 €", "2,20 €", "2,50 €", "5,00 €"],
		answer: 1
	},
	{
		q: "Si au lieu de numéros, chaque tirage du Loto montrait des symboles :",
		choices: [
			"On continuerait à y voir des suites et des motifs",
			"On aurait plus de mal à imaginer une logique entre les tirages",
			"Les probabilités changeraient légèrement",
			"Les tirages deviendraient moins aléatoires"
		],
		answer: 1
	},
	{
		q: "Quel gain du Loto offre la probabilité la plus élevée de gagner une grosse somme ?",
		choices: [
			"Le jackpot (5 numéros + numéro Chance)",
			"Le 2ᵉ rang (5 numéros)",
			"Le Code Loto (20 000 €)",
			"Le rang 4 (4 bons numéros + Chance)"
		],
		answer: 2
	},
	{
		q: "En moyenne, pour « viser » un jackpot en jouant des grilles une à une, il faudrait dépenser de l’ordre de :",
		choices: [
			"Quelques milliers d’€",
			"Quelques centaines de milliers d’€",
			"Quelques dizaines de millions d’€",
			"Quelques centaines de millions d’€"
		],
		answer: 2
	},
	{
		q: "Si vous jouiez au Loto à chaque tirage pendant toute votre vie, vos chances de gagner le jackpot seraient :",
		choices: [
			"Assez élevées à force d’essayer",
			"D’environ une sur un million",
			"Toujours extrêmement faibles",
			"Quasi garanties sur 40 ans"
		],
		answer: 2
	},
	{
		q: "À budget fixe, jouer en multiple (ex. 6 numéros + 1 chance) plutôt que le même nombre de grilles simples :",
		choices: [
			"Change la probabilité de jackpot",
			"Double la probabilité des rangs moyens",
			"Donne la même probabilité totale de jackpot",
			"Garantit un gain secondaire"
		],
		answer: 2
	},
	{
		q: "Pourquoi « 1 chance sur 19 millions » paraît moins concret qu’un tirage de boules ?",
		choices: [
			"Parce que notre cerveau visualise mieux des objets que des nombres énormes",
			"Parce que les boules sont plus colorées",
			"Parce que les tirages électroniques sont moins bruyants",
			"Parce qu’on connaît mal les probabilités exactes"
		],
		answer: 0
	},
	{
		q: "Si le Loto affichait juste un nombre entre 1 et 19 068 840, beaucoup auraient l’impression que :",
		choices: [
			"Le jeu est devenu plus difficile",
			"Les chances ont augmenté",
		],
		answer: 0
	},
	{
		q: "Pourquoi le cerveau humain trouve les grands nombres contre-intuitifs ?",
		choices: [
			"Parce qu’il n’a pas évolué pour manipuler des ordres de grandeur aussi grands",
			"Parce qu’il préfère les chiffres pairs",
			"Parce qu’il ignore les zéros",
			"Parce qu’il compare toujours les nombres à 100"
		],
		answer: 0
	},
	{
		q: "Les probabilités d’un tirage avec des boules ou avec un algorithme informatique sont :",
		choices: [
			"Exactement identiques si le hasard est bien respecté",
			"Légèrement différentes selon le poids des boules",
			"Meilleures avec un tirage électronique",
			"Plus faibles quand il y a moins de joueurs"
		],
		answer: 0
	},
	{
		q: "Pourquoi les gens font plus confiance à une machine à boules qu’à un logiciel de tirage ?",
		choices: [
			"Parce qu’ils peuvent voir le hasard se produire en direct",
			"Parce qu’ils savent que les boules sont numérotées",
			"Parce que les ordinateurs peuvent se tromper",
			"Parce que les boules sont choisies par un huissier"
		],
		answer: 0
	},
	{
		q: "Dire « les boules, c’est plus juste que les nombres » est faux car :",
		choices: [
			"Le hasard ne dépend pas du support, mais du principe de tirage",
			"Les nombres sont tirés plus lentement",
			"Les boules peuvent se coller entre elles",
			"Les numéros sont toujours pairs"
		],
		answer: 0
	},
	{
		q: "Si le Loto remplaçait les boules par un tirage de code aléatoire, les chances de gagner :",
		choices: [
			"Resteraient exactement les mêmes",
			"Serait divisées par deux",
			"Serait multipliées par dix",
			"Ne dépendraient plus du hasard"
		],
		answer: 0
	},
	{
		q: "Pourquoi 'cocher des cases' paraît plus simple que 'choisir un chiffre entre 1 et 19 millions' ?",
		choices: [
			"Parce que notre cerveau comprend mieux les petits ensembles visuels",
			"Parce que les nombres trop grands semblent abstraits",
			"Parce que cocher des cases donne une impression de contrôle",
			"Les trois raisons sont vraies"
		],
		answer: 3
	},
	{
		q: "Pourquoi 1 chance sur 19 millions paraît 'impossible', alors que 5 bons numéros semblent 'jouables' ?",
		choices: [
			"Parce que notre cerveau préfère diviser un grand hasard en petites étapes visibles",
			"Parce qu’on ne visualise pas les millions de combinaisons possibles",
			"Parce qu’on retient les schémas simples",
			"Les trois raisons sont vraies"
		],
		answer: 4
	},
	{
		q: "Si le Loto affichait juste un nombre gagnant entre 1 et 19 068 840, la plupart des gens :",
		choices: [
			"Ne joueraient plus, car cela paraît trop difficile",
			"Penseraient que les probabilités ont changé",
			"Trouveraient le jeu moins amusant",
			"Les trois propositions sont vraies"
		],
		answer: 3
	},
	{
		q: "Le Loto serait perçu plus difficile si on disait :",
		choices: [
			"Vous devez deviner un seul nombre entre 1 et 19 068 840",
			"Vous devez cocher 5 numéros entre 1 et 49",
			"Vous devez trouver 5 boules colorées",
			"Vous devez choisir un code à 6 chiffres"
		],
		answer: 0
	},
	{
		q: "Avoir 1 chance sur 19 068 840 de gagner le jackpot du Loto, c’est comme :",
		choices: [
			"Choisir la bonne seconde dans une journée",
			"Choisir la bonne seconde parmi 221 jours",
			"Réussir 3 lancers de pile ou face d’affilée",
			"Trouver un trèfle à quatre feuilles"
		],
		answer: 1
	},
	{
		q: "Pourquoi un tirage avec des numéros similaires à un ancien tirage semble suspect à certains ?",
		choices: [
			"Parce qu’ils oublient que le hasard peut répéter des schémas",
			"Parce que la FDJ choisit parfois les mêmes combinaisons",
			"Parce que les boules sont mal mélangées",
			"Parce que le Loto recycle les anciens tirages"
		],
		answer: 0
	},
	{
		q: "Quel élément rend les tirages réellement fiables ?",
		choices: [
			"Ils sont réalisés sous contrôle d’huissier",
			"Ils utilisent des algorithmes secrets",
			"Ils changent selon la météo",
			"Ils sont supervisés par les gagnants précédents"
		],
		answer: 0
	},
	{
		q: "Pourquoi certaines vidéos en ligne convainquent les gens que le Loto est truqué ?",
		choices: [
			"Parce qu’elles exploitent des coïncidences et des biais cognitifs",
			"Parce qu’elles proviennent de sources officielles",
			"Parce qu’elles montrent les véritables résultats cachés",
			"Parce que la FDJ a confirmé ces analyses"
		],
		answer: 0
	},
	{
		q: "Réussir 24 lancers de pile ou face d’affilée, c’est :",
		choices: [
			"À peu près aussi improbable que gagner le jackpot du Loto",
			"Beaucoup plus facile que le Loto",
			"Un événement fréquent sur une vie",
			"Une probabilité d’environ 1 sur 100 000"
		],
		answer: 0
	},
	{
		q: "Retrouver un centimètre précis sur une route de 191 km, c’est :",
		choices: [
			"Plus simple que gagner le Loto",
			"À peu près aussi improbable qu’un jackpot du Loto",
			"Deux fois plus probable que le Code Loto",
			"Ce que fait un joueur chanceux chaque année"
		],
		answer: 1
	},
	{
		q: "Trouver le bon livre parmi 191 bibliothèques de 100 000 ouvrages, c’est :",
		choices: [
			"Un bon entraînement pour gagner au Loto",
			"L’équivalent d’une chance sur 19 millions",
			"Une situation beaucoup plus probable que le jackpot",
			"Une probabilité de 1 sur 1 000 000 environ"
		],
		answer: 1
	},
	{
		q: "Identifier une goutte d’eau précise parmi 953 litres, c’est :",
		choices: [
			"Beaucoup plus facile que le Loto",
			"Une image de la probabilité de 1 sur 19 millions",
			"Une métaphore exagérée du hasard",
			"Ce que le cerveau fait inconsciemment"
		],
		answer: 1
	},
	{
		q: "En jouant à chaque tirage du Loto, il faudrait en moyenne :",
		choices: [
			"Une dizaine d’années pour espérer gagner",
			"Un siècle environ de jeu régulier",
			"Plus de 1 200 siècles pour espérer un jackpot",
			"Une vie entière de participation"
		],
		answer: 2
	},
	{
		q: "Si vous remplissiez une grille de Loto chaque jour sans interruption :",
		choices: [
			"Vous auriez sûrement gagné avant 10 ans",
			"Vos chances resteraient presque nulles",
			"Votre probabilité doublerait chaque année",
			"Le hasard finirait par vous récompenser"
		],
		answer: 1
	},
	{
		q: "Combien de générations faudrait-il pour espérer un jackpot au Loto ?",
		choices: [
			"1 ou 2 générations",
			"Une dizaine de générations",
			"Plus de 100 générations",
			"Environ 20 générations"
		],
		answer: 2
	},
	{
		q: "Si on comparait le Loto à une route de 19 millions de centimètres (191 km), trouver le jackpot reviendrait à :",
		choices: [
			"S’arrêter sur n’importe quel kilomètre",
			"Deviner un centimètre précis sur toute la route",
			"Trouver la bonne borne kilométrique",
			"Choisir le bon virage au premier essai"
		],
		answer: 1
	},
	{
		q: "Quelle est la probabilité d’avoir plus de chances que le jackpot du Loto ?",
		choices: [
			"Être frappé par la foudre",
			"Devenir millionnaire en Bourse",
			"Trouver une pépite d’or en marchant",
			"Toutes ces réponses"
		],
		answer: 3
	},

	{
		q: "Combien de grilles simples sont équivalentes à une grille multiple 7 numéros et 1 numéro chance ?",
		choices: ["7 grilles", "14 grilles", "21 grilles", "28 grilles"],
		answer: 2
	},
	{
		q: "Une grille multiple 8 numéros et 1 numéro chance équivaut à combien de grilles simples ?",
		choices: ["28 grilles", "36 grilles", "56 grilles", "70 grilles"],
		answer: 2
	},
	{
		q: "Une grille multiple 6 numéros avec 3 numéros chance équivaut à :",
		choices: ["12 grilles", "18 grilles", "24 grilles", "36 grilles"],
		answer: 1
	},
	{
		q: "Une grille multiple 9 numéros avec 1 numéro chance équivaut à :",
		choices: ["56 grilles", "84 grilles", "126 grilles", "168 grilles"],
		answer: 2
	},
	{
		q: "Vous jouez 1 000 grilles d’un coup dans le même tirage. La probabilité d’au moins un jackpot est :",
		choices: ["1 sur 19 068", "1 sur 1 906", "1 sur 191", "≈ 1 %"],
		answer: 1
	},
	{
		q: "Vous jouez 10 000 grilles dans le même tirage. Quel est l’ordre de grandeur de la probabilité de gagner le jackpot ?",
		choices: ["≈ 0,05 %", "≈ 0,5 %", "≈ 5 %", "≈ 50 %"],
		answer: 0
	},

	{
		q: "Vrai ou faux : « Prendre des numéros peu sortis récemment augmente mes chances. »",
		choices: ["Vrai", "Faux"],
		answer: 1
	},
	{
		q: "Vrai ou faux : « Choisir 1–2–3–4–5 ; 1 est une mauvaise idée car la combinaison est impossible. »",
		choices: ["Vrai", "Faux"],
		answer: 1
	},
	{
		q: "Vrai ou faux : « Jouer toujours la même grille ne change pas la probabilité de jackpot par tirage. »",
		choices: ["Vrai", "Faux"],
		answer: 0
	},
	{
		q: "Confondre « impossible » et « très improbable » amène surtout à :",
		choices: ["Sous-jouer", "Sur-jouer", "Mal percevoir le risque", "Toujours gagner les petits rangs"],
		answer: 2
	},
	{
		q: "Pour avoir 10 % de chances de gagner le jackpot dans un tirage, combien il faut jouer de grilles simples ?",
		choices: ["200 000", "500 000", "1 000 000", "2 000 000"],
		answer: 3
	},
	{
		q: "Pour avoir 10 % de chances de gagner le jackpot dans un simple tirage, combien cela coûterait ?",
		choices: ["≈ 900 000 €", "≈ 2 200 000 €", "≈ 4 400 000 €", "≈ 9 000 000 €"],
		answer: 2
	},
	{
		q: "Pour avoir 1 % de chance de gagner le jackpot dans un simple tirage, combien cela coûterait ?",
		choices: ["≈ 42 000 €", "≈ 190 000 €", "≈ 420 000 €", "≈ 1 100 000 €"],
		answer: 2
	},

	{
		q: "Vous jouez 100 € d’un coup (≈ 45 grilles) dans un seul tirage. La probabilité de gagner le jackpot est de :",
		choices: ["≈ 1 sur 42 000", "≈ 1 sur 190 000", "≈ 1 sur 424 000", "≈ 1 sur 1 900 000"],
		answer: 2
	},
	{
		q: "Vous jouez 1 000 € d’un coup (≈ 455 grilles) dans un seul tirage. La probabilité de gagner le jackpot est de :",
		choices: ["≈ 1 sur 83 000", "≈ 1 sur 42 000", "≈ 1 sur 19 000", "≈ 1 sur 1 900"],
		answer: 1
	},
	{
		q: "Vous jouez 10 000 € d’un coup (≈ 4 545 grilles) dans un seul tirage. La probabilité de gagner le jackpot est de :",
		choices: ["≈ 1 sur 4 200", "≈ 1 sur 1 900", "≈ 1 sur 400", "≈ 0,5 %"],
		answer: 0
	},
	{
		q: "Jouer 1 grille à chaque tirage pendant 30 ans (≈ 4 680 grilles) donne une chance de jackpot d’environ :",
		choices: ["≈ 5 %", "≈ 1 %", "≈ 0,03 %", "≈ 0,003 %"],
		answer: 2
	},

	{
		q: "Vrai ou faux : « L’espérance de gain d’une grille est inférieure à 2,20 € (le prix). »",
		choices: ["Vrai", "Faux"],
		answer: 0
	},
	{
		q: "Vrai ou faux : « Même avec un très gros budget, la probabilité de PERDRE de l’argent reste élevée. »",
		choices: ["Vrai", "Faux"],
		answer: 0
	},
	{
		q: "Choisir des numéros peu populaires (numéros supérieurs à 31) :",
		choices: [
			"Augmente la probabilité de gagner le jackpot",
			"Ne change pas la probabilité de gagner, mais réduit le risque de partage si l’on gagne",
			"Diminue la probabilité de gagner",
			"Garantit un petit gain"
		],
		answer: 1
	},
	{
		q: "Vrai ou faux : « Jouer des dates de naissance ou des numéros porte-bonheur change la probabilité de sortie. »",
		choices: ["Vrai", "Faux"],
		answer: 1
	},
	{
		q: "On parle de « sophisme du parieur » ou « erreur du parieur » quand on croit que :",
		choices: [
			"Un numéro en retard a plus de chances de sortir",
			"Les combinaisons “belles” sortent plus",
			"Un gros jackpot doit tomber ce soir",
			"Toutes les réponses ci-dessus"
		],
		answer: 3
	},

	{
		q: "À budget égal, vaut-il mieux étaler ses grilles sur plusieurs tirages ou tout jouer d’un coup ?",
		choices: [
			"Tout d’un coup : ça augmente les chances de jackpot sur un tirage",
			"Étaler : ça répartit la chance",
			"C’est équivalent pour la probabilité d’au moins un jackpot",
			"Étaler : ça garantit un gain secondaire"
		],
		answer: 0
	},
	{
		q: "Vous passez de 1 à 100 grilles (même tirage). La probabilité de jackpot :",
		choices: [
			"Est multipliée par 100 (mais reste microscopique)",
			"Passe > 1 %",
			"Passe > 10 %",
			"Devient ≈ 50 %"
		],
		answer: 0
	},
	{
		q: "Un message publicitaire qui montre surtout les gagnants entraîne surtout :",
		choices: [
			"Une information statistique neutre",
			"Un réalisme sur les pertes",
			"Une surestimation de la fréquence des jackpots",
			"Une garantie de gain"
		],
		answer: 2
	},
	{
		q: "La probabilité de gagner le jackpot avec 1 grille est :",
		choices: ["1 sur 1,9 million", "1 sur 19 millions", "1 sur 190 millions", "1 sur 1 906"],
		answer: 1
	},
	{
		q: "Pour obtenir ≈0,1 % de chances de gagner le jackpot en jouant 100 € par mois (≈45 grilles/mois), il faut environ :",
		choices: ["9 mois", "4 ans", "35 ans", "350 ans"],
		answer: 2
	},
	{
		q: "Pour obtenir ≈1 % de chances de gagner le jackpot en jouant 100 € par mois (≈45 grilles/mois), il faut environ :",
		choices: ["3 ans", "30 ans", "300 ans", "3 000 ans"],
		answer: 2
	},

	{
		q: "Acheter TOUTES les combinaisons (impossible en pratique) coûterait environ :",
		choices: ["≈ 4 200 000 €", "≈ 14 000 000 €", "≈ 42 000 000 €", "≈ 140 000 000 €"],
		answer: 2
	},
	{
		q: "Même en « achetant tout », quel risque demeure vrai ?",
		choices: [
			"Ne pas gagner le jackpot",
			"Partager le jackpot avec d’autres gagnants",
			"Perdre tous les tickets",
			"Changer la probabilité des numéros"
		],
		answer: 1
	},
	{
		q: "Quel biais pousse un joueur à croire qu’il va « forcément finir par gagner » après plusieurs pertes ?",
		choices: [
			"Le biais de confirmation",
			"Le sophisme du parieur",
			"Le biais de disponibilité",
			"Le biais d’optimisme"
		],
		answer: 1
	},
	{
		q: "Quelle est la meilleure description du hasard au Loto ?",
		choices: [
			"Un phénomène contrôlé",
			"Une suite imprévisible sans mémoire",
			"Un cycle caché de nombres",
			"Une logique que seuls les experts connaissent"
		],
		answer: 1
	},
	{
		q: "Pourquoi les combinaisons visuellement “belles” semblent moins probables ?",
		choices: [
			"Parce qu’elles sortent réellement moins souvent",
			"Parce qu’elles paraissent trop ordonnées pour être aléatoires",
			"Parce qu’elles coûtent plus cher à jouer",
			"Parce qu’elles ont déjà été tirées"
		],
		answer: 1
	},
	{
		q: "Pourquoi les tirages du Loto ne peuvent pas être prédits, même avec des logiciels ou des statistiques ?",
		choices: [
			"Parce que les numéros sont choisis par un algorithme secret",
			"Parce que le hasard ne dépend d’aucune donnée passée",
			"Parce que la FDJ modifie les boules avant chaque tirage",
			"Parce que les probabilités changent à chaque jackpot"
		],
		answer: 1
	},
	{
		q: "Si 2 gagnants se partagent un jackpot de 10 M€, chacun reçoit (hors règles spécifiques) :",
		choices: ["10 000 000 €", "7 500 000 €", "5 000 000 €", "2 500 000 €"],
		answer: 2
	},
	{
		q: "Jouer des numéros populaires (ex. 1–2–3–4–5 ; 1) :",
		choices: [
			"Augmente la probabilité de sortie",
			"Diminue la probabilité de sortie",
			"Ne change pas la probabilité, mais augmente le risque de partage",
			"Double la probabilité des petits rangs"
		],
		answer: 2
	},
	{
		q: "Pourquoi le cerveau cherche-t-il des motifs dans les tirages aléatoires ?",
		choices: [
			"Parce qu’il est programmé pour repérer des régularités",
			"Parce que les tirages en contiennent vraiment",
			"Parce que les boules sont numérotées de façon logique",
			"Parce que les humains influencent le hasard"
		],
		answer: 0
	},
	{
		q: "Que montre le fait qu’il y a régulièrement des gagnants du Loto ?",
		choices: [
			"Que les chances ne sont pas si faibles",
			"Qu’il y a énormément de joueurs à chaque tirage",
			"Que la FDJ sélectionne les gagnants",
			"Que la loi des grands nombres agit à court terme"
		],
		answer: 1
	},
	{
		q: "Les numéros supérieurs à 31 sont moins souvent joués parce que :",
		choices: [
			"Ils sortent moins souvent",
			"Les gens choisissent souvent des dates de naissance",
			"La FDJ les rend plus rares",
			"Ils sont associés à des pertes"
		],
		answer: 1
	},
	{
		q: "Pourquoi il est préférable d’éviter les combinaisons trop “populaires” ?",
		choices: [
			"Parce qu’elles augmentent le risque de partage du jackpot",
			"Parce qu’elles sortent moins souvent",
			"Parce qu’elles sont interdites",
			"Parce qu’elles sont réservées aux abonnés"
		],
		answer: 0
	},
	{
		q: "1 sur 19 millions, c’est à peu près :",
		choices: [
			"Tirer la bonne boule parmi 20 sacs de 1 million",
			"Gagner à pile ou face 24 fois d’affilée",
			"Choisir un centimètre précis sur 191 km de route",
			"Toutes ces réponses"
		],
		answer: 3
	},
	{
		q: "Pourquoi le cerveau humain comprend mal les grandes probabilités ?",
		choices: [
			"Parce qu’il a évolué pour traiter les événements quotidiens",
			"Parce qu’il imagine mal les ordres de grandeur énormes",
			"Parce qu’il traduit les nombres en émotions plutôt qu’en logique",
			"Toutes ces réponses"
		],
		answer: 3
	},

	{
		q: "Vous jouez 20 € (≈ 9 grilles) sur un tirage. La probabilité de gagner le jackpot est :",
		choices: ["≈ 1 sur 2 100 000", "≈ 1 sur 210 000", "≈ 1 sur 21 000", "≈ 1 sur 2 100"],
		answer: 0
	},
	{
		q: "Vous jouez 500 € (≈ 227 grilles) sur un tirage. La probabilité de gagner le jackpot est :",
		choices: ["≈ 0,001 %", "≈ 0,01 %", "≈ 1 %", "≈ 10 %"],
		answer: 1
	},
	{
		q: "Vous jouez 5 000 € (≈ 2 273 grilles) sur un tirage. La probabilité de gagner le jackpot est :",
		choices: ["≈ 0,012 %", "≈ 0,12 %", "≈ 1,2 %", "≈ 12 %"],
		answer: 0
	},

	{
		q: "Vrai ou faux : « Doubler mon budget double environ ma probabilité de jackpot (qui reste minuscule). »",
		choices: ["Vrai", "Faux"],
		answer: 0
	},

	{
		q: "Passer de 1 à 10 grilles sur un tirage fait passer la probabilité de jackpot de ≈ 0,000005 % à :",
		choices: ["≈ 0,00005 %", "≈ 0,0005 %", "≈ 0,005 %", "≈ 0,05 %"],
		answer: 0
	},
	{
		q: "Passer de 10 à 1 000 grilles fait passer ≈ 0,00005 % à :",
		choices: ["≈ 0,0005 %", "≈ 0,005 %", "≈ 0,05 %", "≈ 0,5 %"],
		answer: 1
	},

	{
		q: "Avec 1 000 € par an (≈ 455 grilles/an), votre probabilité de gagner un jackpot en 10 ans est :",
		choices: ["≈ 0,024 %", "≈ 0,24 %", "≈ 2,4 %", "≈ 24 %"],
		answer: 0
	},
	{
		q: "Penser qu’un numéro a plus de chances de sortir parce qu’il n’est pas tombé depuis longtemps :",
		choices: [
			"Est correct grâce à la loi des séries",
			"Décrit une propriété du Loto",
			"Relève du sophisme du parieur",
			"Augmente votre espérance de gain"
		],
		answer: 2
	},
	{
		q: "À quoi sert le mode « MultiChance » au Loto ?",
		choices: [
			"À jouer plusieurs tirages d’un coup",
			"À partager des grilles entre plusieurs joueurs pour augmenter les chances de gagner",
			"À choisir plusieurs numéros Chance par grille",
			"À doubler automatiquement les gains"
		],
		answer: 1
	},
	{
		q: "En MultiChance, si votre groupe gagne, le gain :",
		choices: [
			"Est multiplié par le nombre de parts",
			"Est partagé entre tous les participants",
			"Va uniquement à celui qui a validé la grille",
			"Est doublé par la FDJ"
		],
		answer: 1
	},
	{
		q: "Combien de joueurs environ participent à un même pack MultiChance ?",
		choices: [
			"10 à 20 joueurs",
			"50 à 100 joueurs",
			"Plusieurs centaines de joueurs",
			"Exactement 1 000 joueurs"
		],
		answer: 2
	},
	{
		q: "Quel est l’intérêt du MultiChance pour un petit budget ?",
		choices: [
			"Pouvoir accéder à de nombreuses combinaisons sans payer le prix total",
			"Jouer gratuitement de temps en temps",
			"Avoir un bonus fidélité automatique",
			"Augmenter le jackpot"
		],
		answer: 0
	},
	{
		q: "Quel est l’inconvénient du MultiChance ?",
		choices: [
			"Les gains sont partagés entre tous les participants",
			"Les tirages sont différents",
			"Les probabilités sont plus faibles",
			"On ne peut pas gagner plus de 1 000 €"
		],
		answer: 0
	},
	{
		q: "Si vous achetez 1 part dans un MultiChance, que possédez-vous réellement ?",
		choices: [
			"Une grille complète personnelle",
			"Une fraction de l’ensemble des grilles jouées par le groupe",
			"Un droit d’entrée dans les prochains tirages",
			"Une garantie de petit gain"
		],
		answer: 1
	},
	{
		q: "Le mode MultiChance du Loto peut être comparé à :",
		choices: [
			"Un achat groupé de tickets de Loto",
			"Un abonnement mensuel individuel",
			"Un tirage spécial réservé aux gagnants",
			"Une assurance contre les pertes"
		],
		answer: 0
	},
	{
		q: "Qu’est-ce que le Code Loto ?",
		choices: [
			"Un code secret pour valider ses gains",
			"Un tirage parallèle qui attribue 20 000 € à certains joueurs",
			"Un code à scanner pour rejouer gratuitement",
			"Un multiplicateur de gains du jackpot"
		],
		answer: 1
	},
	{
		q: "Comment obtient-on un code Loto ?",
		choices: [
			"En choisissant ses numéros soi-même",
			"En participant automatiquement avec chaque grille validée",
			"En payant un supplément de 1 €",
			"En achetant un ticket spécial Code Loto"
		],
		answer: 1
	},
	{
		q: "Le tirage du Code Loto dépend-il des numéros choisis ?",
		choices: [
			"Oui, il est lié aux bons numéros",
			"Non, il est totalement indépendant du tirage principal",
			"Oui, seulement pour le numéro Chance",
			"Oui, si on joue plusieurs grilles"
		],
		answer: 1
	},
	{
		q: "Le code de participation au Code Loto est :",
		choices: [
			"Choisi par le joueur au moment de la grille",
			"Généré aléatoirement par le système",
			"Attribué selon le numéro Chance",
			"Fixé par la FDJ selon le département"
		],
		answer: 1
	},
	{
		q: "Le Code Loto peut-il être influencé par les numéros choisis ?",
		choices: [
			"Oui, selon la combinaison jouée",
			"Non, il est complètement indépendant du tirage des boules",
			"Oui, si le numéro Chance correspond",
			"Oui, si les numéros sont populaires"
		],
		answer: 1
	},
	{
		q: "Combien de codes sont attribués par grille jouée ?",
		choices: [
			"Un seul code unique",
			"Un code par numéro Chance",
			"Autant que de combinaisons jouées",
			"Un code par joueur connecté"
		],
		answer: 0
	},
	{
		q: "Si deux grilles ont le même code, que se passe-t-il ?",
		choices: [
			"C’est impossible : chaque code est unique",
			"Les gains sont partagés",
			"Un seul ticket est pris en compte",
			"Les deux gagnent automatiquement"
		],
		answer: 0
	},
	{
		q: "Comment augmenter ses chances de gagner au Code Loto ?",
		choices: [
			"En jouant plus de grilles (chaque grille = un code en plus)",
			"En choisissant un code porte-bonheur",
			"En sélectionnant les bons numéros Chance",
			"En utilisant les mêmes numéros à chaque tirage"
		],
		answer: 0
	},
	{
		q: "Le Code Loto est un tirage de hasard pur. Cela signifie que :",
		choices: [
			"Aucune stratégie ne peut garantir un gain",
			"Les joueurs réguliers ont un avantage caché",
			"Les anciens gagnants sont exclus des tirages",
			"Les numéros influencent le résultat"
		],
		answer: 0
	},
	{
		q: "Pour maximiser ses chances sur le Code Loto, il vaut mieux :",
		choices: [
			"Jouer plusieurs grilles à un même tirage",
			"Jouer une seule grille à chaque tirage",
			"Conserver la même combinaison toute l’année",
			"Choisir des numéros impairs"
		],
		answer: 0
	},
	{
		q: "Le nombre total de codes attribués dépend :",
		choices: [
			"Du nombre total de grilles jouées en France",
			"Du montant du jackpot",
			"Du nombre de gagnants précédents",
			"Des jours de la semaine"
		],
		answer: 0
	},
	{
		q: "La stratégie « Flash » vs choisir soi-même ses numéros change la probabilité de jackpot :",
		choices: ["Oui, le Flash augmente la probabilité", "Oui, choisir soi-même augmente la probabilité", "Non, c’est identique", "Cela dépend des jours pairs"],
		answer: 2
	},
	{
		q: "Vrai ou faux : « Un tirage passé avec beaucoup de petits numéros rend plus probable un tirage suivant avec de grands numéros. » ?",
		choices: ["Vrai", "Faux"],
		answer: 1
	},
	{
		q: "Dans « 1 chance sur 19 068 840 », qu'est ce que ça représente en pourcentage ?",
		choices: ["≈ 0,000005 %", "≈ 0,00005 %", "≈ 0,0005 %", "≈ 0,005 %"],
		answer: 0
	},
	{
		q: "Un passage de 2 M€ à 10 M€ de jackpot voit typiquement le nombre de grilles jouées multiplié par :",
		choices: ["×1,5", "×2", "×3", "×5"],
		answer: 2
	},
	{
		q: "Une hausse du jackpot rend-elle le jeu mathématiquement rentable (espérance positive) ?",
		choices: ["Oui dès 10 M€", "Oui dès 30 M€", "Non, l’espérance reste négative"],
		answer: 3
	},
	{
		q: "À chaque tirage de Loto, combien de codes gagnants de 20 000 € sont tirés au sort ?",
		choices: ["1", "5", "10", "20"],
		answer: 2
	},
	{
		q: "Quelle est la probabilité de gagner l’un des codes Loto si 5 millions de grilles sont jouées ?",
		choices: ["1 sur 500 000", "1 sur 1 000 000", "1 sur 250 000", "1 sur 100 000"],
		answer: 0
	},
	{
		q: "Pourquoi beaucoup de joueurs voient des motifs ou une logique dans les numéros du Loto ?",
		choices: [
			"Parce que les tirages suivent une suite cachée",
			"Parce que le cerveau humain cherche naturellement des patterns",
			"Parce que certains numéros reviennent plus souvent",
			"Parce que les boules sont programmées"
		],
		answer: 1
	},
	{
		q: "Pourquoi certains joueurs croient qu’un tirage « équilibré » (pairs/impairs, petits/grands) est plus probable ?",
		choices: [
			"Parce qu’ils confondent équilibre visuel et hasard réel",
			"Parce que les tirages visent l’équilibre exact",
			"Parce que la FDJ ajuste les boules",
			"Parce que les statistiques le prouvent"
		],
		answer: 0
	},
	{
		q: "Pourquoi beaucoup de joueurs préfèrent choisir eux-mêmes leurs numéros plutôt que le Flash ?",
		choices: [
			"Parce qu’ils croient mieux comprendre le hasard",
			"Parce que cela augmente réellement les chances",
			"Parce que le Flash coûte plus cher",
			"Parce qu’ils veulent éviter les doublons"
		],
		answer: 0
	},
	{
		q: "Dire « il n’y a que 5 boules » donne une impression fausse car :",
		choices: [
			"Le nombre de combinaisons explose même avec peu de boules",
			"Le tirage comporte en réalité 10 boules",
			"Les boules changent entre chaque tirage",
			"Le tirage utilise des boules de tailles différentes"
		],
		answer: 0
	},
	{
		q: "Pourquoi notre cerveau a du mal à imaginer 19 millions de combinaisons ?",
		choices: [
			"Parce qu’il n’est pas fait pour concevoir de si grands nombres",
			"Parce qu’il confond souvent milliers et millions",
			"Parce qu’il raisonne par intuition et non par calcul",
			"Toutes ces réponses"
		],
		answer: 3
	},
	{
		q: "Si on écrivait toutes les combinaisons possibles du Loto, le document ferait environ :",
		choices: [
			"Quelques pages",
			"Un classeur",
			"Plusieurs centaines de milliers de pages",
			"Un petit carnet"
		],
		answer: 2
	},
	{
		q: "Si chaque combinaison était un ticket posé côte à côte, la file mesurerait environ :",
		choices: [
			"Quelques mètres",
			"Quelques kilomètres",
			"Des centaines de kilomètres",
			"Plus de 1 000 kilomètres"
		],
		answer: 3
	},
	{
		q: "Beaucoup de joueurs pensent qu’avoir 4 bons numéros, c’est « presque le jackpot ». En réalité :",
		choices: [
			"C’est très proche mathématiquement du jackpot",
			"C’est en fait des milliers de fois plus probable que d’avoir 5 bons numéros",
			"C’est une étape logique avant de gagner le jackpot",
			"C’est une preuve que le hasard se corrige"
		],
		answer: 1
	},
	{
		q: "La probabilité d’avoir 4 bons numéros au Loto est d’environ 1 sur 8 600. Et celle d’avoir 5 bons ?",
		choices: [
			"1 sur 20 000",
			"1 sur 200 000",
			"1 sur 2 000 000",
			"1 sur 19 000 000"
		],
		answer: 2
	},
	{
		q: "Combien de fois plus difficile est-il d’obtenir 5 bons numéros que 4 bons numéros ?",
		choices: ["×10", "×100", "×200", "×250"],
		answer: 3
	},
	{
		q: "Dire « j’étais à un numéro du jackpot » est trompeur car :",
		choices: [
			"Il restait en réalité une probabilité minuscule à franchir",
			"Le jackpot aurait forcément été partagé",
			"Les combinaisons voisines ne comptent pas",
			"Les tirages compensent rarement les erreurs"
		],
		answer: 0
	},
	{
		q: "Passer de 4 à 5 bons numéros change la probabilité d’environ 1 sur 8 000 à :",
		choices: [
			"1 sur 20 000",
			"1 sur 100 000",
			"1 sur 1 000 000",
			"1 sur 2 000 000"
		],
		answer: 3
	},
	{
		q: "Avoir 4 bons numéros et penser être proche du jackpot, c’est comme :",
		choices: [
			"Faire 4 bons chiffres sur un code à 6 chiffres",
			"Finir à un mètre d’un marathon",
			"Gagner à moitié à la roulette",
			"Trouver 4 bonnes pages d’un livre de 20 millions"
		],
		answer: 3
	},
	{
		q: "En moyenne, l’espérance de gain du Loto est :",
		choices: [
			"Positive sur le long terme",
			"Équivalente à celle de la Bourse",
			"Négative, on perd de l’argent en moyenne",
			"Nulle, on est toujours remboursé"
		],
		answer: 2
	},
	{
		q: "Quand un joueur dit « ça fait longtemps qu’il n’y a pas eu de gagnant », il commet :",
		choices: [
			"Un raisonnement correct",
			"Le sophisme du parieur",
			"Une observation statistique neutre",
			"Une application correcte de la loi des grands nombres"
		],
		answer: 1
	},
	{
		q: "Pourquoi les pertes sont-elles souvent oubliées par les joueurs ?",
		choices: [
			"Parce qu’elles sont psychologiquement douloureuses",
			"Parce qu’elles sont rares",
			"Parce qu’elles sont toujours suivies d’un gain",
			"Parce qu’elles n’ont aucun impact"
		],
		answer: 0
	},
	{
		q: "Quand deux tirages consécutifs affichent des numéros proches, beaucoup pensent que :",
		choices: [
			"Le tirage est truqué",
			"Les boules sont mal mélangées",
			"C’est normal : le hasard peut produire des coïncidences",
			"Une nouvelle loi du hasard apparaît"
		],
		answer: 2
	},
	{
		q: "Pourquoi les combinaisons « jolies » (comme 1-2-3-4-5) paraissent moins probables ?",
		choices: [
			"Parce qu’elles sortent moins souvent",
			"Parce qu’elles sont visuellement trop ordonnées",
			"Parce qu’elles sont mathématiquement moins probables",
			"Parce qu’elles n’ont jamais été tirées"
		],
		answer: 1
	},
	{
		q: "Quand un joueur dit « je le sens bien aujourd’hui », il illustre :",
		choices: [
			"Une intuition correcte du hasard",
			"Le biais d’illusion de contrôle",
			"Une compétence réelle de prédiction",
			"Une stratégie rationnelle"
		],
		answer: 1
	},
	{
		q: "Pourquoi le Loto reste populaire malgré une espérance de gain négative ?",
		choices: [
			"Parce qu’il offre un rêve pour un petit prix",
			"Parce que beaucoup ignorent les probabilités",
			"Parce que gagner le jackpot compensera les pertes",
			"Toutes ces réponses"
		],
		answer: 3
	},
	{
		q: "Que signifie « espérance de gain négative » au Loto ?",
		choices: [
			"Qu’on perd de l’argent en moyenne à long terme",
			"Qu’il est impossible de gagner",
			"Que la FDJ truque les tirages",
			"Que les petits gains compensent toujours les pertes"
		],
		answer: 0
	},
	{
		q: "Quand on remplace les numéros du Loto par des symboles, les gens :",
		choices: [
			"Trouvent encore plus de liens entre les tirages",
			"Trouvent moins de motifs logiques",
			"Ne voient plus de hasard du tout",
			"Augmentent leurs chances de gagner"
		],
		answer: 1
	},
	{
		q: "Pourquoi le cerveau déteste le vrai hasard ?",
		choices: [
			"Parce qu’il est imprévisible et sans logique apparente",
			"Parce qu’il veut toujours trouver un sens aux événements",
			"Parce qu’il préfère les coïncidences cohérentes",
			"Toutes ces réponses"
		],
		answer: 3
	},
	{
		q: "Quand un joueur croit que ses numéros “ont une histoire” ou “une signification spéciale”, il illustre :",
		choices: [
			"Une intuition mathématique",
			"Un biais d’attachement personnel",
			"Un calcul rationnel des probabilités",
			"Une meilleure stratégie de jeu"
		],
		answer: 1
	},
	{
		q: "Quand on dit « 1 chance sur 19 millions », pourquoi beaucoup imaginent-ils que c’est “possible mais rare” ?",
		choices: [
			"Parce que notre cerveau comprend mal les très petits nombres",
			"Parce que la publicité minimise la difficulté",
			"Parce qu’on a déjà vu des gagnants",
			"Toutes ces réponses"
		],
		answer: 3
	},
	{
		q: "Pourquoi les gens continuent à jouer même en connaissant les probabilités ?",
		choices: [
			"Parce qu’ils espèrent faire partie de l’exception",
			"Parce qu’ils aiment le suspense plus que le gain",
			"Parce que l’investissement est faible pour un rêve immense",
			"Toutes ces réponses"
		],
		answer: 3
	},
	{
		q: "La loi des grands nombres signifie que :",
		choices: [
			"Les numéros finissent par sortir chacun leur tour",
			"Sur un très grand nombre de tirages, les fréquences se rapprochent des probabilités théoriques",
			"Chaque tirage dépend du précédent",
			"Le hasard devient prévisible après plusieurs tirages"
		],
		answer: 1
	},
	{
		q: "La loi des grands nombres s’applique :",
		choices: [
			"Aux quelques prochains tirages du Loto",
			"Seulement sur un nombre immense de tirages",
			"À chaque tirage indépendamment",
			"Quand un numéro tarde à sortir"
		],
		answer: 1
	},
	{
		q: "Pourquoi la loi des grands nombres ne peut pas prédire un tirage précis ?",
		choices: [
			"Parce qu’elle ne concerne que des moyennes à long terme",
			"Parce que le hasard change chaque semaine",
			"Parce qu’elle dépend du nombre de joueurs",
			"Parce que la FDJ empêche les cycles"
		],
		answer: 0
	},
	{
		q: "Si un numéro n’est pas sorti depuis 100 tirages, la loi des grands nombres implique que :",
		choices: [
			"Il a maintenant plus de chances de sortir",
			"Il a exactement la même probabilité qu’avant",
			"Il ne ressortira pas avant 100 autres tirages",
			"Les autres numéros vont sortir à la place"
		],
		answer: 1
	},
	{
		q: "Que montre la loi des grands nombres sur le long terme ?",
		choices: [
			"Que le hasard s’équilibre à grande échelle",
			"Que certains numéros ressortent toujours plus",
			"Que les cycles du hasard se répètent",
			"Que le tirage devient moins aléatoire"
		],
		answer: 0
	},
	{
		q: "Dans le Loto, la loi des grands nombres explique surtout que :",
		choices: [
			"Chaque numéro sortira à peu près autant de fois sur des millions de tirages",
			"Les tirages récents influencent les prochains",
			"Certains numéros deviennent plus probables",
			"Les séries de numéros sont prévisibles"
		],
		answer: 0
	},
	{
		q: "Pourquoi certains joueurs se trompent avec la loi des grands nombres ?",
		choices: [
			"Ils pensent qu’elle agit à court terme",
			"Ils croient que le hasard “doit se corriger”",
			"Ils oublient que les tirages sont indépendants",
			"Toutes ces réponses"
		],
		answer: 3
	},
	{
		q: "Beaucoup pensent que jouer plusieurs grilles augmente fortement les chances de jackpot. En réalité :",
		choices: [
			"Les chances augmentent un peu, mais restent extrêmement faibles",
			"Les chances deviennent presque sûres après un certain nombre de grilles",
			"Les chances doublent à chaque grille",
			"Les probabilités se cumulent jusqu’à garantir une victoire"
		],
		answer: 0
	},
	{
		q: "Si on investit 2,20 € en Bourse chaque semaine au lieu de jouer au Loto :",
		choices: [
			"On aura probablement plus d’argent au bout de 30 ans",
			"On aura les mêmes chances de devenir riche",
			"On aura perdu la même somme",
			"On aura statistiquement moins de gains"
		],
		answer: 0
	},
	{
		q: "La loi des grands nombres prouve surtout que :",
		choices: [
			"Le hasard n’a pas de mémoire",
			"Les tirages indépendants s’équilibrent sur le long terme",
			"On ne peut pas prévoir le prochain tirage",
			"Toutes ces réponses sont vraies"
		],
		answer: 3
	},
	{
		q: "Voir des grands gagnants dans les médias conduit à :",
		choices: [
			"Sous-estimer la difficulté du jackpot (biais de disponibilité)",
			"Sur-estimer la difficulté du jackpot",
			"Améliorer la stratégie",
			"Comprendre l’espérance de gain"
		],
		answer: 0
	},
	{
		q: "Quel message de prévention accompagne la communication sur les jeux d’argent ?",
		choices: [
			"« Le hasard sourit aux audacieux »",
			"« Jouer comporte des risques »",
			"« Les tirages s’équilibrent »",
			"« Plus vous jouez, plus vous gagnez »"
		],
		answer: 1
	},
	{
		q: "Le gain du code Loto (20 000 €) est :",
		choices: [
			"Attribué à 10 grilles tirées au sort parmi toutes celles validées",
			"Réservé aux 10 premières grilles enregistrées chaque jour",
			"Offert aux joueurs ayant trouvé le numéro Chance",
			"Attribué aux gagnants du rang 3"
		],
		answer: 0
	},
	{
		q: "Quel jour de la semaine offre le plus de chances de gagner un code Loto ?",
		choices: ["Lundi", "Mercredi", "Samedi", "Tous les jours sont équivalents"],
		answer: 0
	},
	{
		q: "Pour un jackpot classique (2 M€), le nombre de grilles jouées un mercredi est en moyenne de :",
		choices: ["1 million", "3 millions", "5 millions", "8 millions"],
		answer: 1
	},
	{
		q: "Statistiquement, à quel moment de l’année joue-t-on le plus au Loto ?",
		choices: ["Pendant les vacances d’été", "Autour de Noël et Nouvel An", "En mai", "En septembre"],
		answer: 1
	}
];

try {
	QUIZ_QUESTIONS.push(...EXTRA_QUESTIONS);
} catch (e) {
	window.QUIZ_QUESTIONS = (window.QUIZ_QUESTIONS || []).concat(EXTRA_QUESTIONS);
}
