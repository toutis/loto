const EXTRA_QUESTIONS = [{
		q: "Au Loto (5 numéros parmi 49 + 1 numéro Chance parmi 10), combien de grilles différentes sont mathématiquement possibles ?",
		choices: ["1 906 884", "19 068 840", "190 688 400", "490 000 000"],
		answer: 1
	},
	{
		q: "En jouant une grille, l’ordre de grandeur de la probabilité d’obtenir 5 bons numéros SANS le numéro Chance est d’environ :",
		choices: [
			"1 sur 96 000",
			"1 sur 211 876",
			"1 sur 2 118 760",
			"1 sur 19 068 840"
		],
		answer: 2
	},
	{
		q: "Avec une grille, la probabilité d’avoir 4 bons numéros ET le numéro Chance est d’environ :",
		choices: ["1 sur 86 284", "1 sur 9 631", "1 sur 2 016", "1 sur 144"],
		answer: 0
	},
	{
		q: "Avec une grille, la probabilité d’avoir 4 bons numéros SANS le numéro Chance est d’environ :",
		choices: ["1 sur 8 628", "1 sur 2 016", "1 sur 224", "1 sur 144"],
		answer: 0
	},
	{
		q: "Avec une grille, la probabilité d’avoir 3 bons numéros ET le numéro Chance est d’environ :",
		choices: ["1 sur 1 969", "1 sur 224", "1 sur 144", "1 sur 28"],
		answer: 0
	},
	{
		q: "Avec une grille, la probabilité d’avoir 3 bons numéros SANS le numéro Chance est d’environ :",
		choices: ["1 sur 224", "1 sur 196", "1 sur 96", "1 sur 32"],
		answer: 1
	},
	{
		q: "Avec une grille, la probabilité d’avoir 2 bons numéros ET le numéro Chance est d’environ :",
		choices: ["1 sur 134", "1 sur 96", "1 sur 72", "1 sur 16"],
		answer: 0
	},
	{
		q: "Avec une grille, la probabilité d’avoir 2 bons numéros SANS le numéro Chance est d’environ :",
		choices: ["1 sur 64", "1 sur 24", "1 sur 13", "1 sur 8"],
		answer: 2
	},
	{
		q: "Avec une grille, la probabilité d’avoir 1 bon numéro ET le numéro Chance est d’environ :",
		choices: ["1 sur 32", "1 sur 23", "1 sur 12", "1 sur 4"],
		answer: 1
	},
	{
		q: "Avec une grille, la probabilité d’avoir 0 bon numéro mais le numéro Chance est d’environ :",
		choices: ["1 sur 18", "1 sur 10", "1 sur 12", "1 sur 4"],
		answer: 1
	},
	{
		q: "Si vous passez de 1 à 100 grilles sur le même tirage, la probabilité de gagner le jackpot (5 numéros + Chance) :",
		choices: [
			"Est multipliée par 100 (mais reste minuscule)",
			"Passe au-dessus de 1 %",
			"Dépasse 10 %",
			"Est inchangée"
		],
		answer: 0
	},
	{
		q: "Au Loto, dire que « les tirages sont indépendants » signifie que :",
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
		q: "Penser qu’un numéro va sortir parce qu’il est « chaud » ou qu’il vient de sortir souvent :",
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
		q: "Les tirages du Loto ont-ils une mémoire (se « souviennent »-ils des tirages précédents) ?",
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
		q: "Si un numéro est sorti plusieurs fois d’affilée au Loto, cela signifie que :",
		choices: [
			"Il a moins de chances de ressortir",
			"Il a plus de chances de ressortir encore",
			"Cela ne change rien à sa probabilité",
			"C’est un signe de fin de série"
		],
		answer: 2
	},
	{
		q: "Jouer exactement les mêmes numéros à chaque tirage, sur le long terme :",
		choices: [
			"Diminue vos chances",
			"Augmente vos chances grâce à la régularité",
			"Ne change rien aux probabilités de gain",
			"Garantit un gain au bout d’un moment"
		],
		answer: 2
	},
	{
		q: "Les statistiques des anciens tirages du Loto permettent-elles de prédire les prochains tirages ?",
		choices: [
			"Oui, elles permettent d’anticiper les cycles",
			"Oui, si on analyse suffisamment de données",
			"Non, chaque tirage reste totalement aléatoire",
			"Oui, mais seulement pour les numéros Chance"
		],
		answer: 2
	},
	{
		q: "Penser que les numéros vont forcément « s’équilibrer » (retards rattrapés, etc.) avec le temps, c’est :",
		choices: [
			"Une croyance appelée loi des séries",
			"Un principe vrai du Loto",
			"Un biais de raisonnement humain",
			"Une bonne stratégie de jeu"
		],
		answer: 2
	},
	{
		q: "Quel est le prix d’une grille simple de Loto (5 numéros + 1 numéro Chance) ?",
		choices: ["2,00 €", "2,20 €", "2,50 €", "5,00 €"],
		answer: 1
	},
	{
		q: "Si au lieu de numéros, chaque tirage du Loto faisait apparaître des symboles (formes, dessins, etc.) :",
		choices: [
			"On continuerait à y voir des suites et des motifs",
			"On aurait plus de mal à imaginer une logique entre les tirages",
			"Les probabilités changeraient légèrement",
			"Les tirages deviendraient moins aléatoires"
		],
		answer: 1
	},
	{
		q: "Parmi ces gains, lequel du Loto offre la probabilité la plus élevée de gagner une grosse somme (en pratique) ?",
		choices: [
			"Le jackpot (5 numéros + numéro Chance)",
			"Le 2ᵉ rang (5 numéros)",
			"Le Code Loto (20 000 €)",
			"Le rang 4 (4 bons numéros + Chance)"
		],
		answer: 2
	},
	{
		q: "En moyenne, si l’on voulait « viser » un jackpot en jouant des grilles une par une, il faudrait dépenser de l’ordre de :",
		choices: [
			"Quelques milliers d’€",
			"Quelques centaines de milliers d’€",
			"Quelques dizaines de millions d’€",
			"Quelques centaines de millions d’€"
		],
		answer: 2
	},
	{
		q: "Si vous jouiez au Loto à chaque tirage toute votre vie, vos chances de gagner au moins une fois le jackpot seraient :",
		choices: [
			"Assez élevées à force d’essayer",
			"D’environ une sur un million",
			"Toujours extrêmement faibles",
			"Quasi garanties sur 40 ans"
		],
		answer: 2
	},
	{
		q: "À budget fixe, jouer en multiple (par exemple 6 numéros + 1 Chance) plutôt que le même nombre de grilles simples :",
		choices: [
			"Change la probabilité de jackpot",
			"Double la probabilité des rangs moyens",
			"Donne la même probabilité totale de jackpot",
			"Garantit un gain secondaire"
		],
		answer: 2
	},
	{
		q: "Pourquoi la phrase « 1 chance sur 19 millions » parle moins au cerveau qu’un tirage de boules visibles ?",
		choices: [
			"Parce que notre cerveau visualise mieux des objets que des nombres énormes",
			"Parce que les boules sont plus colorées",
			"Parce que les tirages électroniques sont moins bruyants",
			"Parce qu’on connaît mal les probabilités exactes"
		],
		answer: 0
	},
	{
		q: "Si le Loto affichait seulement un nombre gagnant entre 1 et 19 068 840, beaucoup de joueurs auraient l’impression que :",
		choices: [
			"Le jeu est devenu plus difficile",
			"Les chances ont augmenté",
		],
		answer: 0
	},
	{
		q: "Pourquoi le cerveau humain trouve-t-il les très grands nombres (comme 19 068 840) contre-intuitifs ?",
		choices: [
			"Parce qu’il n’a pas évolué pour manipuler des ordres de grandeur aussi grands",
			"Parce qu’il préfère les chiffres pairs",
			"Parce qu’il ignore les zéros",
			"Parce qu’il compare toujours les nombres à 100"
		],
		answer: 0
	},
	{
		q: "En termes de probabilités, un tirage avec des boules physiques ou un tirage avec un algorithme informatique :",
		choices: [
			"Ont exactement les mêmes probabilités si le hasard est bien respecté",
			"Sont légèrement différents selon le poids des boules",
			"Sont meilleurs avec un tirage électronique",
			"Sont plus faibles quand il y a moins de joueurs"
		],
		answer: 0
	},
	{
		q: "Pourquoi beaucoup de gens font-ils plus confiance à une machine à boules qu’à un logiciel de tirage ?",
		choices: [
			"Parce qu’ils peuvent voir le hasard se produire en direct",
			"Parce qu’ils savent que les boules sont numérotées",
			"Parce que les ordinateurs peuvent se tromper",
			"Parce que les boules sont choisies par un huissier"
		],
		answer: 0
	},
	{
		q: "Dire « les boules, c’est plus juste que les nombres sur un écran » est faux, car :",
		choices: [
			"Le hasard ne dépend pas du support, mais du principe de tirage",
			"Les nombres sont tirés plus lentement",
			"Les boules peuvent se coller entre elles",
			"Les numéros sont toujours pairs"
		],
		answer: 0
	},
	{
		q: "Si le Loto remplaçait totalement les boules par un tirage de code aléatoire sur ordinateur, vos chances de gagner :",
		choices: [
			"Resteraient exactement les mêmes",
			"Serait divisées par deux",
			"Serait multipliées par dix",
			"Ne dépendraient plus du hasard"
		],
		answer: 0
	},
	{
		q: "Pourquoi « cocher des cases » paraît plus simple que « choisir un chiffre entre 1 et 19 millions » ?",
		choices: [
			"Parce que notre cerveau comprend mieux les petits ensembles visuels",
			"Parce que les nombres trop grands semblent abstraits",
			"Parce que cocher des cases donne une impression de contrôle",
			"Les trois raisons sont vraies"
		],
		answer: 3
	},
	{
		q: "Pourquoi 1 chance sur 19 millions paraît « impossible », alors que 5 bons numéros semblent encore « jouables » ?",
		choices: [
			"Parce que notre cerveau préfère découper un grand hasard en petites étapes visibles",
			"Parce qu’on ne visualise pas les millions de combinaisons possibles",
			"Parce qu’on retient mieux les schémas simples",
			"Les trois raisons sont vraies"
		],
		answer: 3
	},
	{
		q: "Si le Loto affichait seulement un nombre gagnant entre 1 et 19 068 840, la plupart des gens :",
		choices: [
			"Ne joueraient plus, car cela paraît trop difficile",
			"Penseraient que les probabilités ont changé",
			"Trouveraient le jeu moins amusant",
			"Les trois propositions sont vraies"
		],
		answer: 3
	},
	{
		q: "Sous quelle forme le Loto paraîtrait-il le plus difficile ?",
		choices: [
			"Vous devez deviner un seul nombre entre 1 et 19 068 840",
			"Vous devez cocher 5 numéros entre 1 et 49",
			"Vous devez trouver 5 boules colorées",
			"Vous devez choisir un code à 6 chiffres"
		],
		answer: 0
	},
	{
		q: "Avoir 1 chance sur 19 068 840 de gagner le jackpot du Loto, c’est comparable à :",
		choices: [
			"Choisir la bonne seconde dans une journée",
			"Choisir la bonne seconde parmi 221 jours",
			"Réussir 3 lancers de pile ou face d’affilée",
			"Trouver un trèfle à quatre feuilles"
		],
		answer: 1
	},
	{
		q: "Pourquoi un tirage avec des numéros très proches d’un ancien tirage paraît-il suspect à certains joueurs ?",
		choices: [
			"Parce qu’ils oublient que le hasard peut répéter des schémas",
			"Parce que la FDJ choisit parfois les mêmes combinaisons",
			"Parce que les boules sont mal mélangées",
			"Parce que le Loto recycle les anciens tirages"
		],
		answer: 0
	},
	{
		q: "Quel élément rend les tirages du Loto réellement fiables et crédibles ?",
		choices: [
			"Ils sont réalisés sous contrôle d’huissier",
			"Ils utilisent des algorithmes secrets",
			"Ils changent selon la météo",
			"Ils sont supervisés par les gagnants précédents"
		],
		answer: 0
	},
	{
		q: "Pourquoi certaines vidéos en ligne réussissent-elles à convaincre que le Loto est truqué ?",
		choices: [
			"Parce qu’elles exploitent des coïncidences et des biais cognitifs",
			"Parce qu’elles proviennent de sources officielles",
			"Parce qu’elles montrent les véritables résultats cachés",
			"Parce que la FDJ a confirmé ces analyses"
		],
		answer: 0
	},
	{
		q: "Réussir 24 lancers de pile ou face d’affilée (toujours le même résultat), c’est :",
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
		q: "Trouver le bon livre parmi 191 bibliothèques contenant chacune 100 000 ouvrages, c’est :",
		choices: [
			"Un bon entraînement pour gagner au Loto",
			"L’équivalent d’une chance sur 19 millions",
			"Une situation beaucoup plus probable que le jackpot",
			"Une probabilité de 1 sur 1 000 000 environ"
		],
		answer: 1
	},
	{
		q: "Identifier une goutte d’eau précise parmi 953 litres d’eau, c’est :",
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
		q: "Si vous remplissiez une grille de Loto chaque jour sans interruption, vos chances de gagner le jackpot :",
		choices: [
			"Serait sûrement réalisé avant 10 ans",
			"Resteraient presque nulles",
			"Dubleraient chaque année",
			"Finiraient forcément par vous récompenser"
		],
		answer: 1
	},
	{
		q: "Combien de générations humaines faudrait-il en moyenne pour espérer un jackpot au Loto avec un jeu régulier ?",
		choices: [
			"1 ou 2 générations",
			"Une dizaine de générations",
			"Plus de 100 générations",
			"Environ 20 générations"
		],
		answer: 2
	},
	{
		q: "Si on compare le Loto à une route de 19 millions de centimètres (191 km), gagner le jackpot revient à :",
		choices: [
			"S’arrêter sur n’importe quel kilomètre",
			"Deviner un centimètre précis sur toute la route",
			"Trouver la bonne borne kilométrique",
			"Choisir le bon virage au premier essai"
		],
		answer: 1
	},
	{
		q: "Parmi ces événements, lequel regroupe des chances plus élevées que le jackpot du Loto ?",
		choices: [
			"Être frappé par la foudre",
			"Devenir millionnaire en Bourse",
			"Trouver une pépite d’or dans la nature",
			"Toutes ces réponses"
		],
		answer: 3
	},

	{
		q: "Combien de grilles simples sont équivalentes à une grille multiple avec 7 numéros et 1 numéro Chance ?",
		choices: ["7 grilles", "14 grilles", "21 grilles", "28 grilles"],
		answer: 2
	},
	{
		q: "Une grille multiple avec 8 numéros et 1 numéro Chance équivaut à combien de grilles simples ?",
		choices: ["28 grilles", "36 grilles", "56 grilles", "70 grilles"],
		answer: 2
	},
	{
		q: "Une grille multiple avec 6 numéros et 3 numéros Chance équivaut à :",
		choices: ["12 grilles", "18 grilles", "24 grilles", "36 grilles"],
		answer: 1
	},
	{
		q: "Une grille multiple avec 9 numéros et 1 numéro Chance équivaut à :",
		choices: ["56 grilles", "84 grilles", "126 grilles", "168 grilles"],
		answer: 2
	},
	{
		q: "Vous jouez 1 000 grilles d’un coup dans le même tirage. La probabilité d’avoir au moins un jackpot est d’environ :",
		choices: ["1 sur 19 069", "1 sur 1 906", "1 sur 191", "≈ 1 %"],
		answer: 0
	},
	{
		q: "Vous jouez 10 000 grilles dans le même tirage. L’ordre de grandeur de la probabilité de gagner le jackpot est :",
		choices: ["≈ 0,05 %", "≈ 0,5 %", "≈ 5 %", "≈ 50 %"],
		answer: 0
	},

	{
		q: "Vrai ou faux : « Prendre des numéros peu sortis récemment augmente mes chances de gagner. »",
		choices: ["Vrai", "Faux"],
		answer: 1
	},
	{
		q: "Vrai ou faux : « Jouer la combinaison 1–2–3–4–5 ; 1 est une mauvaise idée car la combinaison est impossible. »",
		choices: ["Vrai", "Faux"],
		answer: 1
	},
	{
		q: "Vrai ou faux : « Jouer toujours la même grille ne change pas la probabilité de jackpot par tirage. »",
		choices: ["Vrai", "Faux"],
		answer: 0
	},
	{
		q: "Confondre « impossible » et « très improbable » conduit surtout à :",
		choices: ["Sous-jouer", "Sur-jouer", "Mal percevoir le risque", "Toujours gagner les petits rangs"],
		answer: 2
	},
	{
		q: "Pour avoir environ 10 % de chances de gagner le jackpot dans UN seul tirage, combien faut-il jouer de grilles simples ?",
		choices: ["200 000", "500 000", "1 000 000", "2 000 000"],
		answer: 3
	},
	{
		q: "Pour avoir environ 10 % de chances de gagner le jackpot dans un seul tirage, le coût total serait d’environ :",
		choices: ["≈ 900 000 €", "≈ 2 200 000 €", "≈ 4 400 000 €", "≈ 9 000 000 €"],
		answer: 2
	},
	{
		q: "Pour avoir environ 1 % de chances de gagner le jackpot dans un seul tirage, cela coûterait :",
		choices: ["≈ 42 000 €", "≈ 190 000 €", "≈ 420 000 €", "≈ 1 100 000 €"],
		answer: 2
	},

	{
		q: "Vous jouez 100 € d’un coup (≈ 45 grilles) dans un seul tirage. La probabilité de gagner le jackpot est d’environ :",
		choices: ["≈ 1 sur 42 000", "≈ 1 sur 190 000", "≈ 1 sur 424 000", "≈ 1 sur 1 900 000"],
		answer: 2
	},
	{
		q: "Vous jouez 1 000 € d’un coup (≈ 455 grilles) dans un seul tirage. La probabilité de gagner le jackpot est d’environ :",
		choices: ["≈ 1 sur 83 000", "≈ 1 sur 42 000", "≈ 1 sur 19 000", "≈ 1 sur 1 900"],
		answer: 1
	},
	{
		q: "Vous jouez 10 000 € d’un coup (≈ 4 545 grilles) dans un seul tirage. La probabilité de gagner le jackpot est d’environ :",
		choices: ["≈ 1 sur 4 200", "≈ 1 sur 1 900", "≈ 1 sur 400", "≈ 0,5 %"],
		answer: 0
	},
	{
		q: "Jouer 1 grille à chaque tirage pendant 30 ans (≈ 4 680 grilles) donne une chance de jackpot d’environ :",
		choices: ["≈ 5 %", "≈ 1 %", "≈ 0,03 %", "≈ 0,003 %"],
		answer: 2
	},

	{
		q: "Vrai ou faux : « L’espérance de gain d’une grille est inférieure à 2,20 € (le prix de la grille). »",
		choices: ["Vrai", "Faux"],
		answer: 0
	},
	{
		q: "Vrai ou faux : « Même avec un très gros budget, la probabilité de PERDRE de l’argent au Loto reste élevée. »",
		choices: ["Vrai", "Faux"],
		answer: 0
	},
	{
		q: "Choisir des numéros peu populaires (par exemple des numéros supérieurs à 31) :",
		choices: [
			"Augmente la probabilité de gagner le jackpot",
			"Ne change pas la probabilité de gagner, mais réduit le risque de partage en cas de jackpot",
			"Diminue la probabilité de gagner",
			"Garantit un petit gain"
		],
		answer: 1
	},
	{
		q: "Vrai ou faux : « Jouer des dates de naissance ou des numéros porte-bonheur change la probabilité de sortie des numéros. »",
		choices: ["Vrai", "Faux"],
		answer: 1
	},
	{
		q: "On parle de « sophisme du parieur » ou « erreur du parieur » quand on pense par exemple que :",
		choices: [
			"Un numéro en retard a plus de chances de sortir",
			"Les combinaisons “belles” sortent plus souvent",
			"Un gros jackpot doit tomber ce soir",
			"Toutes les réponses ci-dessus"
		],
		answer: 3
	},

	{
		q: "À budget égal, vaut-il mieux étaler ses grilles sur plusieurs tirages ou tout jouer d’un coup ? (pour la probabilité d’au moins un jackpot)",
		choices: [
			"Tout d’un coup : ça augmente les chances de jackpot sur un tirage",
			"Étaler : ça répartit la chance",
			"C’est équivalent pour la probabilité d’au moins un jackpot",
			"Étaler : ça garantit un gain secondaire"
		],
		answer: 0
	},
	{
		q: "Vous passez de 1 à 100 grilles sur un même tirage. La probabilité de jackpot :",
		choices: [
			"Est multipliée par 100 (mais reste microscopique)",
			"Passe > 1 %",
			"Passe > 10 %",
			"Devient ≈ 50 %"
		],
		answer: 0
	},
	{
		q: "Un message publicitaire qui montre presque uniquement des gagnants du Loto a surtout comme effet :",
		choices: [
			"Une information statistique neutre",
			"Un réalisme sur les pertes",
			"Une surestimation de la fréquence des jackpots",
			"Une garantie de gain"
		],
		answer: 2
	},
	{
		q: "La probabilité de gagner le jackpot avec 1 seule grille est d’environ :",
		choices: ["1 sur 1,9 million", "1 sur 19 millions", "1 sur 190 millions", "1 sur 1 906"],
		answer: 1
	},
	{
		q: "Pour obtenir ≈ 0,1 % de chances de gagner le jackpot en jouant 100 € par mois (≈ 45 grilles/mois), il faut environ :",
		choices: ["9 mois", "4 ans", "35 ans", "350 ans"],
		answer: 2
	},
	{
		q: "Pour obtenir ≈ 1 % de chances de gagner le jackpot en jouant 100 € par mois (≈ 45 grilles/mois), il faut environ :",
		choices: ["3 ans", "30 ans", "300 ans", "3 000 ans"],
		answer: 2
	},

	{
		q: "Acheter TOUTES les combinaisons possibles du Loto (en théorie) coûterait environ :",
		choices: ["≈ 4 200 000 €", "≈ 14 000 000 €", "≈ 42 000 000 €", "≈ 140 000 000 €"],
		answer: 2
	},
	{
		q: "Même en « achetant tout », quel risque reste vrai ?",
		choices: [
			"Ne pas gagner le jackpot",
			"Partager le jackpot avec d’autres gagnants",
			"Perdre tous les tickets",
			"Changer la probabilité des numéros"
		],
		answer: 1
	},
	{
		q: "Quel biais pousse un joueur à croire qu’il va « forcément finir par gagner » après une longue série de pertes ?",
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
		q: "Pourquoi les combinaisons visuellement “belles” (alignées, symétriques…) semblent-elles moins probables ?",
		choices: [
			"Parce qu’elles sortent réellement moins souvent",
			"Parce qu’elles paraissent trop ordonnées pour être aléatoires",
			"Parce qu’elles coûtent plus cher à jouer",
			"Parce qu’elles ont déjà été tirées"
		],
		answer: 1
	},
	{
		q: "Pourquoi les tirages du Loto ne peuvent-ils pas être prédits, même avec des logiciels ou des statistiques avancées ?",
		choices: [
			"Parce que les numéros sont choisis par un algorithme secret",
			"Parce que le hasard du tirage ne dépend d’aucune donnée passée",
			"Parce que la FDJ modifie les boules avant chaque tirage",
			"Parce que les probabilités changent à chaque jackpot"
		],
		answer: 1
	},
	{
		q: "Si 2 gagnants se partagent un jackpot de 10 M€, chacun reçoit en principe (hors cas particuliers) :",
		choices: ["10 000 000 €", "7 500 000 €", "5 000 000 €", "2 500 000 €"],
		answer: 2
	},
	{
		q: "Jouer des numéros très populaires (par exemple 1–2–3–4–5 ; 1) :",
		choices: [
			"Augmente la probabilité de sortie",
			"Diminue la probabilité de sortie",
			"Ne change pas la probabilité, mais augmente le risque de partage",
			"Double la probabilité des petits rangs"
		],
		answer: 2
	},
	{
		q: "Pourquoi le cerveau humain cherche-t-il spontanément des motifs dans les tirages aléatoires ?",
		choices: [
			"Parce qu’il est programmé pour repérer des régularités",
			"Parce que les tirages en contiennent vraiment",
			"Parce que les boules sont numérotées de façon logique",
			"Parce que les humains influencent le hasard"
		],
		answer: 0
	},
	{
		q: "Le fait qu’il y ait régulièrement des gagnants du Loto montre surtout :",
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
		q: "Pourquoi est-il préférable d’éviter les combinaisons trop “populaires” (choisies par beaucoup de joueurs) ?",
		choices: [
			"Parce qu’elles augmentent le risque de partage du jackpot",
			"Parce qu’elles sortent moins souvent",
			"Parce qu’elles sont interdites",
			"Parce qu’elles sont réservées aux abonnés"
		],
		answer: 0
	},
	{
		q: "1 chance sur 19 millions, c’est à peu près équivalent à :",
		choices: [
			"Tirer la bonne boule parmi 20 sacs de 1 million",
			"Gagner à pile ou face 24 fois d’affilée",
			"Choisir un centimètre précis sur 191 km de route",
			"Toutes ces réponses"
		],
		answer: 3
	},
	{
		q: "Pourquoi le cerveau humain comprend-il mal les probabilités extrêmement faibles ?",
		choices: [
			"Parce qu’il a évolué pour traiter les événements quotidiens",
			"Parce qu’il imagine mal les ordres de grandeur énormes",
			"Parce qu’il traduit les nombres en émotions plutôt qu’en logique",
			"Toutes ces réponses"
		],
		answer: 3
	},

	{
		q: "Vous jouez 20 € (≈ 9 grilles) sur un tirage. La probabilité de gagner le jackpot est d’environ :",
		choices: ["≈ 1 sur 2 100 000", "≈ 1 sur 210 000", "≈ 1 sur 21 000", "≈ 1 sur 2 100"],
		answer: 0
	},
	{
		q: "Vous jouez 500 € (≈ 227 grilles) sur un tirage. La probabilité de gagner le jackpot est d’environ :",
		choices: ["≈ 0,001 %", "≈ 0,01 %", "≈ 1 %", "≈ 10 %"],
		answer: 1
	},
	{
		q: "Vous jouez 5 000 € (≈ 2 273 grilles) sur un tirage. La probabilité de gagner le jackpot est d’environ :",
		choices: ["≈ 0,012 %", "≈ 0,12 %", "≈ 1,2 %", "≈ 12 %"],
		answer: 0
	},

	{
		q: "Vrai ou faux : « Doubler mon budget double environ ma probabilité de jackpot (qui reste malgré tout minuscule). »",
		choices: ["Vrai", "Faux"],
		answer: 0
	},

	{
		q: "Passer de 2 à 10 grilles sur un tirage fait passer la probabilité de jackpot de ≈ 0,000005 % à environ :",
		choices: ["≈ 0,00005 %", "≈ 0,0005 %", "≈ 0,005 %", "≈ 0,05 %"],
		answer: 0
	},
	{
		q: "Passer de 10 à 1 000 grilles fait passer la probabilité de ≈ 0,00005 % à environ :",
		choices: ["≈ 0,0005 %", "≈ 0,005 %", "≈ 0,05 %", "≈ 0,5 %"],
		answer: 1
	},

	{
		q: "Avec 1 000 € par an (≈ 455 grilles/an), votre probabilité de gagner un jackpot en 10 ans est d’environ :",
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
		q: "Quel est le principal inconvénient du MultiChance ?",
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
		q: "Le mode MultiChance du Loto peut être vu comme :",
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
		q: "Le tirage du Code Loto dépend-il des numéros joués sur la grille principale ?",
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
		q: "Le Code Loto peut-il être influencé par les numéros choisis sur la grille ?",
		choices: [
			"Oui, selon la combinaison jouée",
			"Non, il est complètement indépendant du tirage des boules",
			"Oui, si le numéro Chance correspond",
			"Oui, si les numéros sont populaires"
		],
		answer: 1
	},
	{
		q: "Combien de codes sont attribués par grille jouée au Code Loto ?",
		choices: [
			"Un seul code unique",
			"Un code par numéro Chance",
			"Autant que de combinaisons jouées",
			"Un code par joueur connecté"
		],
		answer: 0
	},
	{
		q: "Si deux grilles avaient le même code Loto (en théorie), que se passerait-il ?",
		choices: [
			"C’est impossible : chaque code est unique",
			"Les gains seraient partagés",
			"Un seul ticket serait pris en compte",
			"Les deux gagneraient automatiquement"
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
		q: "Pour maximiser ses chances sur le Code Loto dans un tirage donné, il vaut mieux :",
		choices: [
			"Jouer plusieurs grilles à un même tirage",
			"Jouer une seule grille à chaque tirage",
			"Conserver la même combinaison toute l’année",
			"Choisir des numéros impairs"
		],
		answer: 0
	},
	{
		q: "Le nombre total de codes attribués à un tirage du Code Loto dépend :",
		choices: [
			"Du nombre total de grilles jouées en France",
			"Du montant du jackpot",
			"Du nombre de gagnants précédents",
			"Des jours de la semaine"
		],
		answer: 0
	},
	{
		q: "La stratégie « Flash » vs choisir soi-même ses numéros change-t-elle la probabilité de gagner le jackpot ?",
		choices: ["Oui, le Flash augmente la probabilité", "Oui, choisir soi-même augmente la probabilité", "Non, c’est identique", "Cela dépend des jours pairs"],
		answer: 2
	},
	{
		q: "Vrai ou faux : « Un tirage passé avec beaucoup de petits numéros rend plus probable un tirage suivant avec de grands numéros. »",
		choices: ["Vrai", "Faux"],
		answer: 1
	},
	{
		q: "Dans « 1 chance sur 19 068 840 », cela correspond, en pourcentage, à environ :",
		choices: ["≈ 0,000005 %", "≈ 0,00005 %", "≈ 0,0005 %", "≈ 0,005 %"],
		answer: 0
	},
	{
		q: "Un passage de 2 M€ à 10 M€ de jackpot fait typiquement augmenter le nombre de grilles jouées d’un facteur d’environ :",
		choices: ["×1,5", "×2", "×3", "×5"],
		answer: 2
	},
	{
		q: "Une hausse du jackpot rend-elle le jeu mathématiquement rentable (espérance positive) ?",
		choices: ["Oui dès 10 M€", "Oui dès 30 M€", "Non, l’espérance reste négative"],
		answer: 2
	},
	{
		q: "À chaque tirage de Loto, combien de codes gagnants de 20 000 € sont tirés au sort au Code Loto ?",
		choices: ["1", "5", "10", "20"],
		answer: 2
	},
	{
		q: "Si 5 millions de grilles sont jouées, quelle est la probabilité d’obtenir un des codes gagnants de 20 000 € (Code Loto) avec une seule grille ?",
		choices: ["1 sur 500 000", "1 sur 1 000 000", "1 sur 250 000", "1 sur 100 000"],
		answer: 0
	},
	{
		q: "Pourquoi beaucoup de joueurs voient-ils des motifs ou une logique dans les numéros du Loto ?",
		choices: [
			"Parce que les tirages suivent une suite cachée",
			"Parce que le cerveau humain cherche naturellement des patterns",
			"Parce que certains numéros reviennent plus souvent",
			"Parce que les boules sont programmées"
		],
		answer: 1
	},
	{
		q: "Pourquoi certains joueurs croient qu’un tirage « équilibré » (pairs/impairs, petits/grands) est plus probable qu’un tirage désordonné ?",
		choices: [
			"Parce qu’ils confondent équilibre visuel et vrai hasard",
			"Parce que les tirages visent l’équilibre exact",
			"Parce que la FDJ ajuste les boules",
			"Parce que les statistiques le prouvent"
		],
		answer: 0
	},
	{
		q: "Pourquoi beaucoup de joueurs préfèrent-ils choisir eux-mêmes leurs numéros plutôt que le Flash ?",
		choices: [
			"Parce qu’ils croient mieux comprendre le hasard",
			"Parce que cela augmente réellement les chances",
			"Parce que le Flash coûte plus cher",
			"Parce qu’ils veulent éviter les doublons"
		],
		answer: 0
	},
	{
		q: "Dire « il n’y a que 5 boules » donne une impression fausse, car :",
		choices: [
			"Le nombre de combinaisons explose même avec peu de boules",
			"Le tirage comporte en réalité 10 boules",
			"Les boules changent entre chaque tirage",
			"Le tirage utilise des boules de tailles différentes"
		],
		answer: 0
	},
	{
		q: "Pourquoi notre cerveau a-t-il du mal à imaginer 19 millions de combinaisons ?",
		choices: [
			"Parce qu’il n’est pas fait pour concevoir de si grands nombres",
			"Parce qu’il confond souvent milliers et millions",
			"Parce qu’il raisonne par intuition et non par calcul",
			"Toutes ces réponses"
		],
		answer: 3
	},
	{
		q: "Si on écrivait toutes les combinaisons possibles du Loto sur du papier, le document ferait environ :",
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
		q: "La probabilité d’avoir 4 bons numéros au Loto est d’environ 1 sur 8 600. Et celle d’avoir 5 bons numéros est d’environ :",
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
		q: "Dire « j’étais à un numéro du jackpot » est trompeur, car :",
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
			"Une bonne application de la loi des grands nombres"
		],
		answer: 1
	},
	{
		q: "Pourquoi les pertes sont-elles souvent minimisées ou oubliées par les joueurs ?",
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
		q: "Pourquoi les combinaisons « jolies » (comme 1-2-3-4-5) paraissent-elles moins probables ?",
		choices: [
			"Parce qu’elles sortent moins souvent",
			"Parce qu’elles sont visuellement trop ordonnées",
			"Parce qu’elles sont mathématiquement moins probables",
			"Parce qu’elles n’ont jamais été tirées"
		],
		answer: 1
	},
	{
		q: "Quand un joueur dit « je le sens bien aujourd’hui », il illustre surtout :",
		choices: [
			"Une intuition correcte du hasard",
			"Le biais d’illusion de contrôle",
			"Une compétence réelle de prédiction",
			"Une stratégie rationnelle"
		],
		answer: 1
	},
	{
		q: "Pourquoi le Loto reste-t-il populaire malgré une espérance de gain négative ?",
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
		q: "Quand on remplace les numéros du Loto par des symboles (dessins, icônes…), les gens :",
		choices: [
			"Trouvent encore plus de liens entre les tirages",
			"Trouvent moins de motifs logiques",
			"Ne voient plus de hasard du tout",
			"Augmentent leurs chances de gagner"
		],
		answer: 1
	},
	{
		q: "Pourquoi le cerveau déteste-t-il le vrai hasard ?",
		choices: [
			"Parce qu’il est imprévisible et sans logique apparente",
			"Parce qu’il veut toujours trouver un sens aux événements",
			"Parce qu’il préfère les coïncidences cohérentes",
			"Toutes ces réponses"
		],
		answer: 3
	},
	{
		q: "Quand un joueur croit que ses numéros « ont une histoire » ou une « signification spéciale », il illustre :",
		choices: [
			"Une intuition mathématique",
			"Un biais d’attachement personnel",
			"Un calcul rationnel des probabilités",
			"Une meilleure stratégie de jeu"
		],
		answer: 1
	},
	{
		q: "Quand on dit « 1 chance sur 19 millions », pourquoi beaucoup imaginent-ils que c’est encore « possible mais rare » ?",
		choices: [
			"Parce que notre cerveau comprend mal les très petits nombres",
			"Parce que la publicité minimise la difficulté",
			"Parce qu’on a déjà vu des gagnants à la télé",
			"Toutes ces réponses"
		],
		answer: 3
	},
	{
		q: "Pourquoi les gens continuent-ils à jouer même en connaissant les probabilités très faibles ?",
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
		q: "Pourquoi la loi des grands nombres ne permet-elle pas de prédire un tirage précis du Loto ?",
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
		q: "Sur le long terme, la loi des grands nombres montre surtout que :",
		choices: [
			"Le hasard s’équilibre à grande échelle",
			"Certains numéros ressortent toujours plus",
			"Les cycles du hasard se répètent",
			"Le tirage devient moins aléatoire"
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
		q: "Pourquoi certains joueurs se trompent-ils en invoquant la loi des grands nombres ?",
		choices: [
			"Ils pensent qu’elle agit à court terme",
			"Ils croient que le hasard « doit se corriger »",
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
		q: "Voir des grands gagnants dans les médias conduit souvent à :",
		choices: [
			"Sous-estimer la difficulté du jackpot (biais de disponibilité)",
			"Sur-estimer la difficulté du jackpot",
			"Améliorer sa stratégie",
			"Comprendre l’espérance de gain"
		],
		answer: 0
	},
	{
		q: "Quel message de prévention accompagne la plupart des communications sur les jeux d’argent ?",
		choices: [
			"« Le hasard sourit aux audacieux »",
			"« Jouer comporte des risques »",
			"« Les tirages s’équilibrent »",
			"« Plus vous jouez, plus vous gagnez »"
		],
		answer: 1
	},
	{
		q: "Le gain du Code Loto (20 000 €) est :",
		choices: [
			"Attribué à 10 grilles tirées au sort parmi toutes celles validées",
			"Réservé aux 10 premières grilles enregistrées chaque jour",
			"Offert aux joueurs ayant trouvé le numéro Chance",
			"Attribué aux gagnants du rang 3"
		],
		answer: 0
	},
	{
		q: "En pratique (moins de joueurs ce jour-là), quel jour de la semaine offre, pour UNE grille donnée, un peu plus de chances de gagner un code Loto ?",
		choices: ["Lundi", "Mercredi", "Samedi", "Tous les jours sont équivalents"],
		answer: 0
	},
	{
		q: "Pour un jackpot classique (2 M€), le nombre de grilles jouées un mercredi est en moyenne d’environ :",
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
