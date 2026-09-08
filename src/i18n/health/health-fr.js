export const HEALTH_FR = {
    PLANET_HEALTH: {
        Sol: {
            role: 'Vitalité générale, cœur, circulation, capacité de récupération',
            influence: 'Centre d\'énergie vitale, masculinité, expression de soi',
            impact: 'Détermine la force vitale globale et la capacité de récupération',
            nature: 'Chaud et sec',
            chronic: 'Problèmes cardiaques, hypertension, fièvre, inflammations chroniques',
            acute: 'Fièvre aiguë, coups de chaleur, inflammations soudaines, accidents',
            keywords: 'Cœur, dos, circulation, fièvre, énergie vitale'
        },
        Luna: {
            role: 'Liquides corporels, système digestif, fluctuations émotionnelles, sommeil',
            influence: 'Émotions, instincts, habitudes, cycles',
            impact: 'Affecte l\'équilibre émotionnel et les cycles naturels du corps',
            nature: 'Froid et humide',
            chronic: 'Rétention d\'eau, problèmes gastriques, troubles du sommeil, cycles irréguliers',
            acute: 'Nausées, vomissements, coliques, crises émotionnelles aiguës, somnolence',
            keywords: 'Estomac, eau corporelle, cycle menstruel, émotions, sommeil'
        },
        Mercurio: {
            role: 'Système nerveux, respiration, processus mentaux',
            influence: 'Esprit, communication, nerfs, perception',
            impact: 'Détermine l\'agilité mentale et la santé respiratoire',
            nature: 'Variable (froid et humide / chaud et sec)',
            chronic: 'Névralgies, anxiété chronique, insomnie, problèmes respiratoires persistants',
            acute: 'Migraines, crises d\'anxiété, spasmes bronchiques, névralgies aiguës',
            keywords: 'Nerfs, poumons, respiration, esprit, système nerveux'
        },
        Venus: {
            role: 'Reins, équilibre corporel, système veineux et hormonal',
            influence: 'Plaisir, harmonie, amour, valeurs',
            impact: 'Affecte l\'équilibre hormonal et la santé reproductive',
            nature: 'Froid et humide',
            chronic: 'Problèmes rénaux, déséquilibres hormonaux, douleurs articulaires, problèmes veineux',
            acute: 'Calculs rénaux, coliques néphrétiques, déséquilibres hormonaux aigus',
            keywords: 'Gorge, reins, reproduction, plaisir, système veineux'
        },
        Marte: {
            role: 'Muscles, sang, inflammation, fièvre, traumatismes, processus aigus',
            influence: 'Énergie, action, courage, conflit',
            impact: 'Détermine la force musculaire et la prédisposition aux inflammations',
            nature: 'Chaud et sec',
            chronic: 'Inflammations chroniques, polyarthrite rhumatoïde, hypertension, cicatrisation',
            acute: 'Fièvre, accidents, plaies, brûlures, coupures, contusions, entorses, inflammations aiguës',
            keywords: 'Muscles, sang, inflammations, fièvre, plaies, accidents'
        },
        Júpiter: {
            role: 'Foie, métabolisme, croissance, expansion, excès',
            influence: 'Expansion, abondance, philosophie, chance',
            impact: 'Influence le métabolisme et la propension aux problèmes de poids',
            nature: 'Chaud et humide',
            chronic: 'Obésité, problèmes hépatiques, diabète, cholestérol élevé, croissance excessive',
            acute: 'Surpoids aigu, stéatose hépatique, intoxications alimentaires, excès',
            keywords: 'Foie, croissance, métabolisme, obésité, excès'
        },
        Saturno: {
            role: 'Os, articulations, peau, processus chroniques et restrictions',
            influence: 'Limitation, structure, maturité, karma',
            impact: 'Détermine la structure osseuse et le processus de vieillissement',
            nature: 'Froid et sec',
            chronic: 'Arthrite, ostéoporose, problèmes cutanés chroniques, cancer, vieillissement prématuré, dépression',
            acute: 'Douleurs articulaires aiguës, raideur, fractures, chutes, douleurs osseuses',
            keywords: 'Os, articulations, peau, vieillissement, cancer, affections chroniques'
        },
        Urano: {
            role: 'Système nerveux, événements soudains, troubles inattendus',
            influence: 'Innovation, liberté, rébellion, originalité',
            impact: 'Peut indiquer une tendance aux accidents ou aux affections inattendues',
            nature: 'Froid et sec (variable)',
            chronic: 'Problèmes nerveux chroniques, altérations cardiaques, convulsions, tremblements',
            acute: 'Accidents soudains, crises nerveuses, douleurs aiguës, problèmes circulatoires imprévus',
            keywords: 'Nerfs, accidents, crises soudaines, système circulatoire, imprévu'
        },
        Neptuno: {
            role: 'Sensibilité, intoxications, confusion, états difficiles à diagnostiquer',
            influence: 'Spiritualité, illusion, compassion, confusion',
            impact: 'Peut indiquer une extrême sensibilité ou une tendance aux addictions',
            nature: 'Froid et humide (éthéré)',
            chronic: 'Addictions, fatigue chronique, problèmes immunitaires, confusion mentale, hallucinations, sensibilité extrême',
            acute: 'Intoxications, hallucinations aiguës, surdose, confusion soudaine, allergies graves',
            keywords: 'Pieds, système immunitaire, addictions, hallucinations, confusion, sensible'
        },
        Plutón: {
            role: 'Processus profonds, régénération, élimination et transformation',
            influence: 'Pouvoir, transformation profonde, mort et renaissance',
            impact: 'Indique un potentiel de transformation et de régénération cellulaire',
            nature: 'Froid et sec (variable)',
            chronic: 'Maladies dégénératives, transformation cellulaire, crises profondes, chirurgies majeures',
            acute: 'Crises profondes, urgences, chirurgies d\'urgence, effondrement, mort et renaissance symboliques',
            keywords: 'Régénération, transformation, crise, mort et renaissance, profond'
        }
    },

    SIGN_BODY_ASSOCIATIONS: {
        Aries: {
            organs: ['Tête', 'Visage', 'Cerveau', 'Artères', 'Sang'],
            system: 'Circulatoire et nerveux',
            vulnerabilities: ['Céphalées', 'Migraine', 'Hypertension', 'Accidents à la tête'],
            strengths: ['Énergie vitale', 'Récupération rapide', 'Circulation sanguine'],
            diet: 'Éviter les aliments trop épicés et les stimulants en excès (café, alcool). Favoriser les fruits rouges, le melon, le concombre, la menthe. Repas légers et frais. Éviter les aliments très chauds qui augmentent la chaleur interne.',
            exercise: 'Sports de vitesse et de contact avec prudence. Natation, cyclisme, arts martiaux doux. Éviter les efforts excessifs aux heures les plus chaudes. Bien s\'échauffer avant toute activité intense.',
            emotions: 'Cultiver la patience et la tolérance. Éviter la frustration causée par les retards. Pratiquer la respiration profonde et la méditation apaisante. La colère non résolue entraîne l\'hypertension.',
            behavior: 'Éviter l\'impulsivité dans les décisions importantes. Ne pas prendre de risques inutiles par excès de confiance. Attention aux accidents à la tête. Modérer le naturel compétitif qui génère du stress.'
        },
        Tauro: {
            organs: ['Cou', 'Gorge', 'Glandes thyroïdiennes', 'Larynx', 'Mâchoire'],
            system: 'Endocrinien et respiratoire',
            vulnerabilities: ['Problèmes de thyroïde', 'Mal de gorge', 'Nœuds au cou'],
            strengths: ['Endurance physique', 'Système immunitaire fort', 'Voix puissante'],
            diet: 'Éviter les excès de sucreries, les produits laitiers lourds et la nourriture industrielle. Favoriser les fruits, les légumes, les noix, le miel. Éviter les aliments très froids ou très chauds. Mastication lente, ne pas parler en mangeant.',
            exercise: 'Exercice régulier et rythmique : marche, yoga, tai-chi. Éviter les sports à fort impact sur le cou et la gorge. Renforcer le cou avec des étirements doux.',
            emotions: 'Cultiver la flexibilité et l\'adaptabilité. Éviter l\'entêtement qui génère de la frustration. Exprimer ses émotions à voix haute au lieu de les réprimer. Éviter la cupidité et l\'attachement excessif.',
            behavior: 'Éviter la résistance au changement qui génère du stress interne. Ne pas réprimer les émotions (provoque des nœuds à la gorge). Éviter le travail excessif qui mène à l\'épuisement par la routine.'
        },
        Géminis: {
            organs: ['Poumons', 'Bronches', 'Épaules', 'Bras', 'Mains', 'Système nerveux'],
            system: 'Respiratoire et nerveux',
            vulnerabilities: ['Asthme', 'Bronchite', 'Anxiété', 'Insomnie'],
            strengths: ['Agilité mentale', 'Communication', 'Adaptabilité'],
            diet: 'Éviter les repas copieux qui gênent la respiration. Favoriser les aliments légers, les agrumes, le céleri, les carottes. Éviter les excès de sucre qui perturbent les nerfs. Manger dans un environnement calme.',
            exercise: 'Natation, marche, vélo, yoga. Exercices de respiration profonde. Éviter les sports de contact qui affectent les épaules. Étirer régulièrement les bras et les épaules.',
            emotions: 'Cultiver la concentration et éviter la dispersion. Méditation de pleine conscience pour apaiser l\'esprit. Éviter de parler trop ou de débiner. Exprimer ses pensées par écrit (journal).',
            behavior: 'Éviter de faire plusieurs choses à la fois (provoque l\'anxiété). Ne pas parler quand on est agité. Éviter l\'insomnie due à la surcharge mentale. Repos de l\'esprit par le silence.'
        },
        Cáncer: {
            organs: ['Estomac', 'Poitrine', 'Seins', 'Organes reproducteurs féminins'],
            system: 'Digestif et reproducteur',
            vulnerabilities: ['Gastrite', 'Ulcères', 'Rétention d\'eau'],
            strengths: ['Intuition', 'Protection familiale', 'Adaptation émotionnelle'],
            diet: 'Éviter les aliments très froids ou acides qui irritent l\'estomac. Favoriser les soupes, les céréales, les aliments réconfortants. Éviter les excès de produits laitiers. Éviter de manger par anxiété émotionnelle.',
            exercise: 'Natation, marche près de l\'eau, yoga doux. Éviter les sports de contact. Exercices de flottaison. Éviter l\'exercice intense après le repas.',
            emotions: 'Cultiver la sécurité émotionnelle et l\'attachement sain. Éviter le victimisme et la manipulation émotionnelle. Exprimer ses sentiments au lieu de les garder. La thérapie émotionnelle est très bénéfique.',
            behavior: 'Éviter de se réfugier dans la nourriture à cause du stress. Ne pas s\'isoler émotionnellement. Éviter les changements d\'humeur qui affectent la digestion. Partager ses émotions avec des personnes de confiance.'
        },
        Leo: {
            organs: ['Cœur', 'Haut du dos', 'Colonne vertébrale', 'Circulation'],
            system: 'Cardiovasculaire',
            vulnerabilities: ['Problèmes cardiaques', 'Douleurs dorsales', 'Hypertension'],
            strengths: ['Vitalité', 'Forte circulation sanguine', 'Endurance'],
            diet: 'Éviter les graisses saturées, les excès de sel, l\'alcool. Favoriser les fruits rouges, l\'ail, le gingembre, le poisson. Éviter les repas très lourds qui surchargent le cœur. Manger en portions réduites.',
            exercise: 'Exercice cardiovasculaire modéré : marche, danse, natation. Éviter la surcharge cardiaque. Renforcer le haut du dos avec des exercices posturaux. Éviter de porter des charges excessives.',
            emotions: 'Cultiver l\'humilité et la générosité. Éviter l\'orgueil qui génère du stress cardiaque. Ne pas tout prendre personnellement. Exprimer l\'affection sans exiger de reconnaissance.',
            behavior: 'Éviter de trop travailler pour prouver ses capacités. Ne pas négliger le dos en position assise. Éviter les situations qui font monter la tension artérielle. Modérer la consommation de stimulants.'
        },
        Virgo: {
            organs: ['Intestins', 'Système digestif', 'Pancréas', 'Foie', 'Vésicule biliaire'],
            system: 'Digestif et métabolique',
            vulnerabilities: ['Problèmes intestinaux', 'Syndrome de l\'intestin irritable', 'Diabète'],
            strengths: ['Digestion efficace', 'Attention aux détails', 'Système immunitaire'],
            diet: 'Éviter les aliments transformés, les excès de gluten, le sucre raffiné. Favoriser les fibres, les légumes verts, les probiotiques. Manger à des heures régulières. Éviter les excès de caféine.',
            exercise: 'Marche, yoga, Pilates. Exercices abdominaux et digestifs. Éviter les sports à fort impact. Routine régulière et modérée.',
            emotions: 'Cultiver l\'acceptation et le perfectionnisme sain. Éviter l\'anxiété liée à la volonté de tout contrôler. Méditer pour apaiser l\'esprit critique. Ne pas se surmener.',
            behavior: 'Éviter l\'autocritique excessive qui génère de l\'anxiété digestive. Ne pas réprimer les émotions (affecte les intestins). Éviter le travail excessif qui mène à l\'épuisement nerveux.'
        },
        Libra: {
            organs: ['Reins', 'Peau', 'Système endocrinien', 'Glandes surrénales'],
            system: 'Excréteur et endocrinien',
            vulnerabilities: ['Problèmes rénaux', 'Déséquilibres hormonaux', 'Problèmes de peau'],
            strengths: ['Équilibre hormonal', 'Peau saine', 'Harmonie intérieure'],
            diet: 'Éviter les excès de sel, de sucre, d\'alcool. Favoriser l\'eau pure, les fruits, les légumes. Éviter les aliments très assaisonnés. Boire suffisamment d\'eau pour la santé rénale.',
            exercise: 'Yoga, danse, marche. Exercices d\'équilibre. Éviter les sports très intenses. Renforcer la zone lombaire et les reins avec des postures douces.',
            emotions: 'Cultiver l\'indépendance et la prise de décision. Éviter l\'indécision qui génère du stress rénal. Ne pas plaire aux autres à ses propres dépens. Rechercher l\'harmonie intérieure.',
            behavior: 'Éviter les excès de sucreries qui affectent les reins. Ne pas réprimer ses besoins pour maintenir l\'harmonie. Éviter la sédentarité qui affecte le système endocrinien.'
        },
        Escorpio: {
            organs: ['Organes reproducteurs', 'Système urogénital', 'Rectum', 'Vessie', 'Sang'],
            system: 'Reproducteur et urogénital',
            vulnerabilities: ['Problèmes reproducteurs', 'Infections urinaires'],
            strengths: ['Transformation', 'Régénération', 'Pouvoir de récupération'],
            diet: 'Éviter les repas très lourds, les graisses saturées, l\'alcool. Favoriser les aliments détox : citron, ail, légumes verts. Éviter la rétention de toxines.',
            exercise: 'Exercice intense mais équilibré : arts martiaux, natation, salle de sport. Éviter la sédentarité. Libère une énergie intense qui stagne si on ne bouge pas.',
            emotions: 'Cultiver la confiance et la vulnérabilité saine. Éviter la jalousie, la possessivité et la rancune. Transformer les émotions intenses en créativité. La thérapie profonde est bénéfique.',
            behavior: 'Éviter le secret qui génère de la tension interne. Ne pas manipuler les situations. Éviter le contrôle excessif. Canaliser l\'intensité dans des projets transformateurs.'
        },
        Sagitario: {
            organs: ['Foie', 'Cuisses', 'Hanches', 'Système nerveux sciatique'],
            system: 'Hépatique et locomoteur',
            vulnerabilities: ['Problèmes hépatiques', 'Douleurs sciatiques', 'Blessures aux cuisses'],
            strengths: ['Optimisme', 'Énergie expansive', 'Bonne récupération'],
            diet: 'Éviter les excès d\'alcool, la restauration rapide, les repas très gras. Favoriser les légumes, les fruits, les céréales complètes. Éviter tous les types d\'excès. Modérer les aliments épicés.',
            exercise: 'Sports en plein air : randonnée, équitation, cyclisme. Éviter les excès sportifs qui blessent les cuisses et les hanches. Étirer régulièrement la zone lombaire et sciatique.',
            emotions: 'Cultiver la gratitude et l\'optimisme réaliste. Éviter l\'enthousiasme excessif qui mène à l\'imprudence. Ne pas s\'étendre trop. Respecter ses engagements.',
            behavior: 'Éviter les excès (nourriture, boisson, activité). Ne pas prendre de risques par excès de confiance. Éviter les blessures par imprudence. Prendre soin du foie avec modération.'
        },
        Capricornio: {
            organs: ['Os', 'Genoux', 'Articulations', 'Peau', 'Dents'],
            system: 'Squelettique et cutané',
            vulnerabilities: ['Problèmes articulaires', 'Arthrite', 'Douleurs aux genoux'],
            strengths: ['Forte structure osseuse', 'Endurance', 'Discipline'],
            diet: 'Éviter les aliments très froids qui affectent les articulations. Favoriser les bouillons, la gélatine, les aliments riches en calcium. Éviter les excès de sel. Manger chaud et nutritif.',
            exercise: 'Exercice à faible impact : marche, yoga, natation. Renforcer les genoux et les articulations. Éviter les sports à fort impact. S\'étirer régulièrement.',
            emotions: 'Cultiver la joie et la spontanéité. Éviter la mélancolie et le pessimisme chronique. Ne pas porter les responsabilités d\'autrui. Exprimer ses sentiments.',
            behavior: 'Éviter le travail excessif qui use les os et les articulations. Ne pas réprimer les émotions (elles se déposent dans les articulations). Prendre soin de la posture. Éviter le froid excessif.'
        },
        Acuario: {
            organs: ['Chevilles', 'Système circulatoire', 'Système nerveux', 'Glandes lymphatiques'],
            system: 'Circulatoire et nerveux',
            vulnerabilities: ['Problèmes circulatoires', 'Varices', 'Œdème'],
            strengths: ['Innovation', 'Circulation alternative', 'Guérison énergétique'],
            diet: 'Éviter les aliments très salés qui retiennent les liquides. Favoriser le potassium : banane, épinards, avocat. Boire beaucoup d\'eau. Éviter l\'alcool qui affecte la circulation.',
            exercise: 'Exercice améliorant la circulation : marche, vélo, yoga inversé. Éviter les positions assises prolongées. Bouger les jambes et les chevilles fréquemment.',
            emotions: 'Cultiver la connexion sociale sans s\'épuiser. Éviter l\'isolement dû à un excès d\'indépendance. Maintenir des liens émotionnels sains. Ne pas idéaliser les relations.',
            behavior: 'Éviter la sédentarité qui affecte la circulation. Ne pas ignorer les signaux du corps en restant dans sa tête. Éviter les changements brusques de température. Prendre soin des chevilles.'
        },
        Piscis: {
            organs: ['Pieds', 'Système lymphatique', 'Glande pinéale', 'Système immunitaire'],
            system: 'Lymphatique et immunologique',
            vulnerabilities: ['Problèmes de pieds', 'Œdème lymphatique', 'Allergies'],
            strengths: ['Intuition', 'Compassion', 'Guérison alternative'],
            diet: 'Éviter l\'alcool, les drogues, les aliments très transformés. Favoriser les aliments légers, les fruits, les légumes, l\'eau pure. Éviter les excès de sucre. Manger en pleine conscience.',
            exercise: 'Marche pieds nus sur la terre (ancrage), yoga, tai-chi, natation douce. Éviter les environnements toxiques. L\'exercice en nature est idéal.',
            emotions: 'Cultiver des limites saines et le discernement. Ne pas absorber les émotions d\'autrui. Ne pas fuir la réalité avec des substances. Méditer et se connecter à la nature.',
            behavior: 'Éviter tous les types d\'addictions (substances, personnes, situations). Ne pas fuir les problèmes. Éviter le victimisme. Établir des routines de soins personnels.'
        }
    },

    ELEMENT_HEALTH: {
        Fuego: {
            description: 'Signes de feu (Bélier, Lion, Sagittaire) : énergie, vitalité et système cardiovasculaire.',
            strengths: ['Énergie vitale', 'Récupération rapide', 'Force'],
            weaknesses: ['Inflammations', 'Fièvre', 'Brûlures', 'Hypertension'],
            recommendations: ['Exercice régulier sans excès', 'Contrôler le tempérament', 'Prendre soin du cœur et de la tension artérielle'],
            diet: 'Éviter les aliments très chauds, épicés, les graisses saturées et l\'alcool. Favoriser les fruits rouges, les légumes verts, le poisson, l\'huile d\'olive. Repas légers et frais. Éviter les dîners lourds.',
            exercise: 'Activités dynamiques mais équilibrées : marche, natation, danse, arts martiaux doux. Éviter la surcharge cardiaque. S\'exercer le matin ou l\'après-midi, éviter la chaleur extrême.',
            emotions: 'Cultiver la patience et la tolérance. Éviter la colère non résolue qui endommage le cœur. Pratiquer la respiration profonde, la méditation apaisante. Exprimer ses émotions sans agressivité.',
            behavior: 'Éviter l\'impulsivité et l\'excès de confiance. Modérer la compétitivité qui génère du stress. Attention aux accidents. Éviter de travailler jusqu\'à l\'épuisement.'
        },
        Tierra: {
            description: 'Signes de terre (Taureau, Vierge, Capricorne) : stabilité, structure et système digestif.',
            strengths: ['Endurance physique', 'Stabilité', 'Bon métabolisme'],
            weaknesses: ['Problèmes digestifs', 'Constipation', 'Problèmes articulaires'],
            recommendations: ['Régime équilibré et régulier', 'Exercice régulier', 'Prendre soin des os et des articulations'],
            diet: 'Éviter les aliments transformés, les excès de gluten, le sucre raffiné. Favoriser les fibres, les légumes, les fruits, les céréales complètes. Manger à des heures régulières. Éviter les excès de produits laitiers.',
            exercise: 'Exercice à faible impact et régulier : marche, yoga, Pilates, jardinage. Renforcer les articulations et les os. Éviter les sports à fort impact.',
            emotions: 'Cultiver la flexibilité et l\'adaptabilité. Éviter l\'entêtement et l\'attachement excessif. Ne pas réprimer les émotions (elles se déposent dans la digestion et les articulations). Exprimer ses sentiments.',
            behavior: 'Éviter le travail routinier excessif. Ne pas résister au changement. Éviter l\'autocritique excessive. Prendre soin de la posture et des articulations. Ne pas négliger les habitudes de sommeil.'
        },
        Aire: {
            description: 'Signes d\'air (Géminis, Balance, Verseau) : esprit, communication et système nerveux.',
            strengths: ['Agilité mentale', 'Adaptabilité', 'Communication'],
            weaknesses: ['Anxiété', 'Insomnie', 'Problèmes respiratoires'],
            recommendations: ['Méditation et pleine conscience', 'Exercices de respiration', 'Repos mental régulier'],
            diet: 'Éviter les excès de caféine, de sucre, les repas légers sans substance. Favoriser les agrumes, les fruits à coque, le poisson, les légumes. Manger lentement et dans un environnement calme.',
            exercise: 'Natation, marche, vélo, yoga. Exercices de respiration profonde. Éviter les sports de contact qui affectent les épaules. Étirer les bras et le cou.',
            emotions: 'Cultiver la concentration et le silence. Éviter la dispersion mentale. Méditer 10 minutes par jour. Exprimer ses pensées par écrit. Éviter de parler trop.',
            behavior: 'Éviter de faire plusieurs choses à la fois. Ne pas surcharger l\'esprit. Éviter l\'insomnie due aux pensées qui s\'emballent. Faire des pauses sans écran. Se connecter au corps.'
        },
        Agua: {
            description: 'Signes d\'eau (Cancer, Scorpion, Poissons) : émotions, intuition et système lymphatique.',
            strengths: ['Intuition', 'Empathie', 'Guérison émotionnelle'],
            weaknesses: ['Rétention d\'eau', 'Problèmes émotionnels', 'Dépression'],
            recommendations: ['Gérer les émotions avec une thérapie', 'Hydratation adéquate', 'Exprimer ses sentiments de manière saine'],
            diet: 'Éviter l\'alcool, les aliments très froids, les excès de produits laitiers. Favoriser les soupes, les bouillons, les fruits, les légumes cuits. Boire beaucoup d\'eau. Éviter de manger par anxiété émotionnelle.',
            exercise: 'Natation, marche près de l\'eau, yoga doux, tai-chi. Exercices en nature. Éviter les sports très intenses. Flotter dans l\'eau est très apaisant.',
            emotions: 'Cultiver la sécurité émotionnelle et des limites saines. Ne pas absorber les émotions d\'autrui. La thérapie émotionnelle est essentielle. Exprimer ses sentiments sans victimisme.',
            behavior: 'Éviter les addictions et les évasions de la réalité. Ne pas s\'isoler émotionnellement. Éviter le pessimisme. Partager ses sentiments avec des personnes de confiance. Établir des routines.'
        }
    },

    ASPECT_TYPE_CONCEPTS: {
        Conjunción: {
            symbol: '☌',
            concept: 'La conjonction se produit lorsque deux planètes se trouvent au même point zodiacal (0°). Leurs énergies fusionnent, créant une force unifiée qui amplifie les deux qualités. C\'est comme deux instruments jouant la même note : le son est amplifié.',
            healthMeaning: 'En santé, la conjonction intensifie les fonctions des deux planètes. Elle peut générer une vitalité extraordinaire si les planètes sont harmonieuses, ou une surcharge si elles sont en tension.',
            risks: 'Surcharge dans les systèmes gouvernés par les deux planètes. Tendance à exagérer les qualités. Épuisement dû à une intensité soutenue.',
            wellness: 'Canaliser l\'énergie combinée dans des pratiques concrètes. Établir des rythmes qui permettent le repos entre les pics d\'activité. Utiliser l\'intensité comme moteur de transformation positive.'
        },
        Sextil: {
            symbol: '✦',
            concept: 'Le sextil (60°) crée un angle d\'opportunité et de flux fluide. Les énergies planétaires se soutiennent mutuellement sans effort, comme deux amis qui se complètent naturellement.',
            healthMeaning: 'Indique des talents naturels pour le bien-être. Le corps a de la facilité à équilibrer les systèmes impliqués. C\'est un aspect de facilités et de ressources disponibles.',
            risks: 'Le risque est la complaisance : comme cela coule facilement, cela peut être ignoré jusqu\'à ce que ce soit perdu. Cela ne génère pas de crises mais peut masquer des déséquilibres subtils.',
            wellness: 'Profiter consciemment des facilités offertes. Cultiver des habitudes positives sans attendre que des problèmes surviennent. Utiliser l\'harmonie comme base pour construire des routines saines.'
        },
        Cuadratura: {
            symbol: '□',
            concept: 'Le carré (90°) génère une tension constructive entre deux forces qui se défient mutuellement. C\'est comme un muscle qui se renforce par la résistance : la friction produit la croissance.',
            healthMeaning: 'En santé, le carré indique les domaines où le corps doit faire des ajustements. Ce n\'est pas négatif : c\'est le mécanisme naturel d\'adaptation. Cependant, une tension soutenue peut se manifester par des symptômes.',
            risks: 'Inflammations, surmenage, crises aiguës lorsque la tension n\'est pas gérée. Stress accumulé affectant les systèmes gouvernés par les deux planètes. Tendance à ignorer les signaux jusqu\'à ce qu\'ils deviennent urgents.',
            wellness: 'Pratiques régulières de libération de la tension (exercice, massage, respiration). Apprendre à écouter les signaux précoces du corps. Transformer la tension en motivation pour améliorer les habitudes.'
        },
        Trígono: {
            symbol: '△',
            concept: 'Le trigone (120°) est l\'aspect le plus harmonieux. Les énergies coulent avec naturel et grâce, comme une rivière suivant son cours sans obstacles. Il représente des talents innés et des facilités.',
            healthMeaning: 'Indique un équilibre naturel entre les systèmes gouvernés par les planètes. Le corps a une capacité innée à maintenir le bien-être dans ces domaines.',
            risks: 'Le risque est la passivité : étant si harmonieux, une action préventive peut ne pas être prise. Un excès de facilité peut mener à la négligence.',
            wellness: 'Maintenir les pratiques qui fonctionnent sans changer ce qui n\'est pas cassé. Utiliser l\'harmonie comme plateforme pour s\'étendre vers des domaines plus difficiles. Gratitude et entretien conscient.'
        },
        Oposición: {
            symbol: '☍',
            concept: 'L\'opposition (180°) crée une polarité : deux forces opposées qui cherchent l\'équilibre. C\'est comme le jour et la nuit, ou l\'inspiration et l\'expiration. La prise de conscience du pôle opposé élargit la perspective.',
            healthMeaning: 'En santé, l\'opposition indique la nécessité d\'équilibrer deux systèmes travaillant dans des directions opposées. Elle peut générer des fluctuations ou une alternance de symptômes.',
            risks: 'Polarisation extrême : excès d\'un pôle et déficit de l\'autre. Oscillations émotionnelles et physiques. Difficulté à maintenir la stabilité. Possibles crises de prise de conscience.',
            wellness: 'Pratiques d\'équilibre : yoga, méditation, respiration bilatérale. Reconnaître les deux extrêmes sans jugement. Rechercher le juste milieu dans l\'alimentation, l\'exercice et le repos.'
        }
    },

    ASPECT_PLANET_HEALTH: {
        'Sol-Luna': {
            concept: 'L\'union du Soleil (vitalité, moi conscient) et de la Lune (émotions, instincts) représente l\'intégration du corps et de l\'âme. C\'est l\'aspect le plus intime de l\'identité vitale.',
            risks: 'Déséquilibre entre la volonté et les besoins émotionnels. Tension entre ce qu\'on « devrait » faire et ce que le corps demande. Problèmes cardiaques dus au stress émotionnel non traité. Fluctuations d\'énergie.',
            wellness: 'Écouter la logique et l\'intuition. Pratiquer la pleine conscience pour intégrer corps et esprit. Des routines qui nourrissent à la fois la vitalité et la sécurité émotionnelle. Une thérapie qui unit raison et émotion.'
        },
        'Sol-Mercurio': {
            concept: 'Le Soleil avec Mercure unit la vitalité avec l\'esprit. Il représente l\'expression de soi à travers la pensée et la communication.',
            risks: 'Surcharge mentale qui épuise la vitalité. Tension dans les systèmes nerveux et respiratoire. Difficulté à « éteindre » l\'esprit. Migraines dues à une activité mentale excessive.',
            wellness: 'Activités qui canalisaient l\'esprit de manière créative. Exercice physique pour libérer la tension mentale. Techniques de respiration et de relaxation. Communication assertive comme soupape de décharge.'
        },
        'Sol-Venus': {
            concept: 'Le Soleil avec Vénus unit la force vitale avec le plaisir et l\'harmonie. Il indique une constitution qui recherche le bien-être à travers la beauté et l\'équilibre.',
            risks: 'Excès sensoriels (nourriture, confort, plaisir). Problèmes rénaux ou articulaires dus à un excès d\'indulgence. Déséquilibres hormonaux. Tendance à la paresse.',
            wellness: 'Plaisir conscient : profiter sans excès. Activités esthétiques qui nourrissent l\'âme (art, musique, nature). Équilibre entre jouissance et discipline. Soins du corps comme acte d\'amour de soi.'
        },
        'Sol-Marte': {
            concept: 'Le Soleil avec Mars est la combinaison de vitalité et d\'action. Il représente l\'énergie pure, l\'initiative et la volonté. C\'est le feu avec le feu.',
            risks: 'Surchauffe, inflammations, fièvre, accidents par impulsivité. Surmenage physique. Tendance à l\'impatience qui génère du stress. Hypertension.',
            wellness: 'Activités physiques intenses mais contrôlées (sports, arts martiaux). Canaliser l\'énergie dans des projets concrets. Apprendre à modérer la force. Repos actif.'
        },
        'Sol-Júpiter': {
            concept: 'Le Soleil avec Jupiter expand la vitalité et l\'optimisme. Il indique une constitution robuste avec une tendance à l\'expansion.',
            risks: 'Excès dus à l\'excès d\'optimisme. Surpoids, problèmes hépatiques, inflammations par excès. Tendance à sous-estimer les problèmes de santé.',
            wellness: 'Modération comme vertu. Activités qui élargissent la conscience sans excès (voyages, étude, spiritualité). Alimentation équilibrée. Examens de santé réguliers.'
        },
        'Sol-Saturno': {
            concept: 'Le Soleil avec Saturne confronte la vitalité avec la structure et les limites. Il indique une constitution qui se renforce par la discipline mais peut s\'affaiblir par la rigidité.',
            risks: 'Fatigue chronique, problèmes articulaires, dépression, sensation de vieillissement prématuré. Limites strictes qui répriment la vitalité.',
            wellness: 'Discipline soutenue mais souple. Exercice à faible impact et régulier (marche, natation). Nutrition régulière et structurée. Acceptation des limites comme force.'
        },
        'Sol-Urano': {
            concept: 'Le Soleil avec Uraus unit la vitalité avec l\'innovation. Il indique un corps qui fonctionne de manière irrégulière mais avec des pics d\'énergie extraordinaires.',
            risks: 'Changements brusques d\'énergie. Arythmies, problèmes circulatoires, sursauts. Tendance à ignorer le corps en restant « dans sa tête ».',
            wellness: 'Routines souples : structure avec de la place pour la spontanéité. Exercices variés et stimulants. Écouter le corps même quand l\'esprit est occupé.'
        },
        'Sol-Neptuno': {
            concept: 'Le Soleil avec Neptune unit la vitalité avec l\'éthéré. Il indique une constitution sensible qui peut être perméable aux influences extérieures.',
            risks: 'Affaiblissement de la vitalité par confusion émotionnelle. Tendance aux addictions. Extrême sensibilité aux substances, environnements et personnes. Maladies difficiles à diagnostiquer.',
            wellness: 'Pratiques d\'ancrage (marche pieds nus, nature). Limites émotionnelles claires. Éviter les substances toxiques. Spiritualité comme force, non comme échappatoire.'
        },
        'Sol-Plutón': {
            concept: 'Le Soleil avec Pluton unit la force vitale avec la transformation profonde. Il indique une capacité de régénération extraordinaire mais à travers des crises.',
            risks: 'Crises de pouvoir et de contrôle affectant la santé. Problèmes reproductifs, sexuels ou d\'élimination. Tendance à retenir des tensions profondes. La maladie comme processus de transformation.',
            wellness: 'Accepter les crises comme des opportunités de transformation. Thérapie profonde (psychologie, somatique). Exercice qui libère les tensions accumulées. Renaissance par l\'action consciente.'
        },
        'Luna-Mercurio': {
            concept: 'La Lune avec Mercure unit les émotions avec l\'esprit. Il indique une personne dont les pensées sont profondément influencées par ses sentiments.',
            risks: 'Anxiété, nervosité, insomnie. Problèmes digestifs dus au stress émotionnel. Tension dans les épaules et le cou. Difficulté à dormir à cause de pensées qui s\'emballent.',
            wellness: 'Écriture thérapeutique (journal). Méditation de pleine conscience. Respiration diaphragmatique. Expression verbale des émotions. Des routines qui apaisent l\'esprit.'
        },
        'Luna-Venus': {
            concept: 'La Lune avec Vénus unit l\'émotivité avec le plaisir. Il indique une constitution qui recherche le bien-être à travers les soins et la sensualité.',
            risks: 'Rétention d\'eau, problèmes gastriques. Changements hormonaux marqués. Tendance aux excès dans la nourriture ou le confort. Sensibilité aux changements de cycle.',
            wellness: 'Rituels de soins personnels. Bains thérapeutiques. Contact avec la nature. Nourriture qui nourrit le corps et les sens. L\'art comme guérison.'
        },
        'Luna-Marte': {
            concept: 'La Lune avec Mars unit les émotions avec l\'action. Il indique une personne dont les réponses émotionnelles sont rapides et intenses.',
            risks: 'Irritabilité, inflammations, coliques. Crises émotionnelles aiguës. Tendance aux réactions impulsives qui génèrent du stress physique. Problèmes gastriques.',
            wellness: 'Activité physique régulière pour canaliser l\'énergie émotionnelle. Techniques de régulation émotionnelle. Exercices de respiration en moments de crise. Canaliser l\'impulsivité dans le sport.'
        },
        'Luna-Júpiter': {
            concept: 'La Lune avec Jupiter élargit l\'émotivité et la capacité de nourriture. Il indique une constitution généreuse mais prédisposée aux excès.',
            risks: 'Surpoids, rétention d\'eau, problèmes hépatiques. Excès émotionnels (manger par sentiment). Indulgence excessive.',
            wellness: 'Alimentation consciente et nutritive. Activités qui élargissent la conscience émotionnelle (thérapie, spiritualité). Modération comme pratique quotidienne. Nourrir les autres sans se négliger.'
        },
        'Luna-Saturno': {
            concept: 'La Lune avec Saturne confronte les émotions avec la structure. Il indique une personne qui réprime ses sentiments ou les gère avec une discipline extrême.',
            risks: 'Dépression, froideur émotionnelle, problèmes gastriques par répression. Vieillissement prématuré du système digestif. Difficulté à se détendre.',
            wellness: 'Permettre l\'expression émotionnelle. Thérapie qui travaille sur la répression. Des routines qui incluent des moments de repos émotionnel. Contact avec la nature pour adoucir la rigidité.'
        },
        'Mercurio-Venus': {
            concept: 'Mercure avec Vénus unit l\'esprit avec l\'esthétique. Il indique une personne qui pense avec beauté et communique avec harmonie.',
            risks: 'Tension nerveuse due au perfectionnisme. Névralgies, problèmes respiratoires légers. Difficulté à se détendre mentalement.',
            wellness: 'Art et musique comme thérapie. Communication assertive. Exercices de relaxation mentale. Activités créatives qui unissent l\'esprit et la sensibilité.'
        },
        'Mercurio-Marte': {
            concept: 'Mercure avec Mars unit l\'esprit avec l\'action. Il indique un esprit rapide et combatif, préposé au nervosisme.',
            risks: 'Migraines, anxiété, insomnie. Tension dans la mâchoire et le cou. Parler trop ou trop vite. Débats compulsifs.',
            wellness: 'Sports impliquant de la stratégie (échecs, sports d\'équipe). Écriture. Exercices de relaxation de la mâchoire. Respiration consciente.'
        },
        'Mercurio-Júpiter': {
            concept: 'Mercure avec Jupiter élargit l\'esprit et la communication. Il indique une personne de grande capacité intellectuelle mais avec une tendance à la dispersion.',
            risks: 'Surcharge mentale, anxiété dûe à un excès d\'informations. Nervosité par surstimulation.',
            wellness: 'Philosophie et étude comme pratiques de bien-être. Méditation. Simplification des informations consommées. Apprendre à dire non à l\'excès mental.'
        },
        'Mercurio-Saturno': {
            concept: 'Mercure avec Saturne unit l\'esprit avec la structure. Il indique une personne méthodique mais prédisposée à la rigidité mentale.',
            risks: 'Anxiété chronique, pensées obsessionnelles, tension persistante. Difficulté à détendre l\'esprit. Névralgies.',
            wellness: 'Routines mentales structurées mais souples. Méditation d\'observation. Exercice physique pour libérer la tension mentale. Thérapie cognitive.'
        },
        'Venus-Marte': {
            concept: 'Vénus avec Mars unit le plaisir avec l\'action. Il indique une constitution qui recherche l\'équilibre entre la jouissance et la discipline.',
            risks: 'Déséquilibres hormonaux, problèmes rénaux, inflammations. Tension entre plaisir et devoir qui génère du stress.',
            wellness: 'Activités qui unissent le plaisir et le mouvement (danse, randonnée). Équilibre entre activité et repos. Nourriture qui nourrit sans priver. Relations saines.'
        },
        'Venus-Júpiter': {
            concept: 'Vénus avec Jupiter élargit le plaisir et l\'harmonie. Il indique une constitution qui recherche le bien-être à travers l\'abondance.',
            risks: 'Excès de nourriture, de boisson ou de confort. Surpoids, problèmes articulaires. Indulgence excessive.',
            wellness: 'Plaisir conscient. Activités qui élargissent les sens sans excès (art, nature, musique). Modération comme vertu.'
        },
        'Venus-Saturno': {
            concept: 'Vénus avec Saturne confronte le plaisir avec les limites. Il indique une personne qui peut réprimer ses plaisirs ou avoir une relation complexe avec la jouissance.',
            risks: 'Dépression, froideur, problèmes articulaires. Difficulté à jouir. Répression des besoins sensoriels.',
            wellness: 'Se permettre le plaisir sans culpabilité. Thérapie pour travailler sur la répression. Activités sensorielles douces (massage, musique). Soins personnels comme pratique.'
        },
        'Marte-Júpiter': {
            concept: 'Mars avec Jupiter amplifie l\'action et l\'expansion. Il indique une énergie physique énorme mais préposée aux excès.',
            risks: 'Surmenage, accidents, inflammations. Excès d\'activité qui génère l\'épuisement. Tendance à l\'exagération.',
            wellness: 'Canaliser l\'énergie dans des projets concrets. Sports intenses mais contrôlés. Dosage de la force. Repos actif.'
        },
        'Marte-Saturno': {
            concept: 'Mars avec Saturne confronte l\'action avec les limites. Il indique une énergie qui se renforce par la résistance mais peut devenir bloquée.',
            risks: 'Blocs énergétiques, douleurs articulaires, fatigue chronique. Tension entre vouloir et pouvoir. Frustration qui se somatise.',
            wellness: 'Exercice de résistance progressive. Accepter les limites sans abandonner. Thérapie de libération de la tension. Discipline avec flexibilité.'
        },
        'Júpiter-Saturno': {
            concept: 'Jupiter avec Saturne unit l\'expansion avec la structure. Il indique une recherche d\'équilibre entre croissance et discipline.',
            risks: 'Fluctuations de poids, problèmes métaboliques, crises de sens. Tension entre optimisme et pessimisme qui affecte la santé.',
            wellness: 'Planification à long terme pour le bien-être. Équilibre entre discipline et plaisir. Philosophie de vie saine. Constante avec flexibilité.'
        }
    },
    PRACTICAL_ADVICE: {
        Sol: {
            diet: 'Éviter les graisses saturées et les excès de sel. Favoriser les fruits rouges, l\'ail, le poisson. Repas légers.',
            exercise: 'Exercice cardiovasculaire modéré : marche, danse. Éviter les excès. Renforcer le dos.',
            emotions: 'Cultiver l\'humilité et la générosité. Éviter l\'orgueil et l\'excès d\'ego qui stressent le cœur.',
            behavior: 'Ne pas travailler jusqu\'à l\'épuisement. Soigner la posture. Éviter les situations de pression constante.'
        },
        Luna: {
            diet: 'Éviter les aliments très froids ou acides. Favoriser les soupes, les céréales, les repas réconfortants. Ne pas manger par anxiété.',
            exercise: 'Natation, yoga doux, marche près de l\'eau. Éviter l\'exercice intense après le repas.',
            emotions: 'Cultiver la sécurité émotionnelle. Éviter le victimisme. Exprimer ses sentiments. La thérapie émotionnelle est bénéfique.',
            behavior: 'Ne pas s\'isoler. Éviter de se réfugier dans la nourriture. Partager ses émotions. Maintenir des horaires de sommeil réguliers.'
        },
        Mercurio: {
            diet: 'Éviter les excès de caféine et de sucre. Favoriser les agrumes, le céleri, le poisson. Manger dans un environnement calme.',
            exercise: 'Natation, marche, respiration profonde. Étirer les épaules et les bras. Éviter la surcharge mentale.',
            emotions: 'Cultiver la concentration et le silence. Méditer 10 minutes par jour. Exprimer ses pensées par écrit.',
            behavior: 'Ne pas faire plusieurs choses à la fois. Éviter l\'insomnie due à l\'esprit qui s\'emballe. Faire des pauses sans écran.'
        },
        Venus: {
            diet: 'Éviter les excès de sel et de sucreries. Boire beaucoup d\'eau. Favoriser les fruits, les légumes, les aliments frais.',
            exercise: 'Yoga, danse, marche. Exercices d\'équilibre et de zone lombaire. Éviter la sédentarité.',
            emotions: 'Cultiver l\'indépendance. Éviter de plaire à tout le monde. Prendre des décisions sans crainte. Rechercher l\'harmonie intérieure.',
            behavior: 'Ne pas réprimer ses besoins. Éviter les excès de sucreries. Prendre soin des reins avec une bonne hydratation.'
        },
        Marte: {
            diet: 'Éviter les aliments très épicés et chauds. Favoriser les rafraîchissants : concombre, laitue, pastèque. Éviter l\'alcool.',
            exercise: 'Sports intenses mais avec prudence : arts martiaux, salle de sport. Bien s\'échauffer. Éviter les blessures.',
            emotions: 'Cultiver la patience et la tolérance. Éviter la colère non résolue. Canaliser l\'énergie dans l\'action constructive.',
            behavior: 'Éviter l\'impulsivité. Ne pas prendre de risques inutiles. Attention aux accidents. Modérer la compétitivité.'
        },
        Júpiter: {
            diet: 'Éviter les excès de tous types : nourriture, boisson, sucreries. Favoriser les légumes, les fruits, les repas modérés.',
            exercise: 'Exercice modéré et régulier. Marche, natation, yoga. Éviter le surpoids par les excès.',
            emotions: 'Cultiver la gratitude et la modération. Éviter l\'excès d\'optimisme qui mène à l\'imprudence. Respecter ses engagements.',
            behavior: 'Éviter les excès alimentaires et de boisson. Ne pas se surcharger. Prendre soin du foie. Maintenir la discipline.'
        },
        Saturno: {
            diet: 'Éviter les aliments très froids. Favoriser les bouillons, le calcium, les aliments chauds. Éviter les excès de sel.',
            exercise: 'Exercice à faible impact : marche, yoga. Renforcer les articulations. Éviter le fort impact.',
            emotions: 'Cultiver la joie et la spontanéité. Éviter le pessimisme chronique. Ne pas porter les responsabilités d\'autrui.',
            behavior: 'Éviter le travail excessif. Ne pas réprimer les émotions (elles se déposent dans les articulations). Soigner la posture.'
        },
        Urano: {
            diet: 'Éviter les aliments très salés. Favoriser le potassium : banane, épinards. Boire beaucoup d\'eau.',
            exercise: 'Marche, vélo, yoga. Bouger les jambes fréquemment. Éviter la sédentarité prolongée.',
            emotions: 'Cultiver la connexion sociale. Éviter l\'isolement dû à un excès d\'indépendance. Maintenir les liens.',
            behavior: 'Ne pas ignorer les signaux du corps. Éviter les changements brusques de température. Prendre soin des chevilles et de la circulation.'
        },
        Neptuno: {
            diet: 'Éviter l\'alcool et les substances. Favoriser les aliments légers, les fruits, l\'eau pure. Manger en pleine conscience.',
            exercise: 'Marche pieds nus, yoga, natation douce. S\'exercer en nature. Éviter les environnements toxiques.',
            emotions: 'Cultiver des limites saines. Ne pas absorber les émotions d\'autrui. Méditer et se connecter à la nature.',
            behavior: 'Éviter tous les types d\'addictions. Ne pas fuir les problèmes. Établir des routines de soins personnels.'
        },
        Plutón: {
            diet: 'Éviter les aliments très lourds et transformés. Favoriser les aliments détox : citron, ail, légumes verts.',
            exercise: 'Exercice intense mais équilibré. Libère une énergie intense. Natation, salle de sport, arts martiaux.',
            emotions: 'Cultiver la confiance et la vulnérabilité. Éviter la jalousie, la possessivité, la rancune. Transformer en créativité.',
            behavior: 'Éviter le secret et la manipulation. Ne pas tout contrôler. Canaliser l\'intensité dans des projets transformateurs.'
        }
    },
    houseNames: ['Identité', 'Ressources', 'Communication', 'Foyer', 'Créativité', 'Santé', 'Relations', 'Transformation', 'Philosophie', 'Carrière', 'Amitiés', 'Inconscient'],
    PLANET_NATURE: {
        Sol: 'Chaud sec',
        Luna: 'Froid humide',
        Mercurio: 'Variable',
        Venus: 'Froid humide',
        Marte: 'Chaud sec',
        Júpiter: 'Chaud humide',
        Saturno: 'Froid sec',
        Urano: 'Froid sec (variable)',
        Neptuno: 'Froid humide (éthéré)',
        Plutón: 'Froid sec (variable)'
    },
    MODALITY_HEALTH: {
        Cardinal: {
            description: 'Signes cardinaux : initient des cycles, énergies de début.',
            healthFocus: 'Tête, estomac, reins, os',
            recommendations: 'Tendance aux problèmes aigus ou au début d\'affections'
        },
        Fijo: {
            description: 'Signes fixes : maintiennent et stabilisent.',
            healthFocus: 'Gorge, cœur, reproducteur, circulatoire',
            recommendations: 'Tendance aux affections chroniques ou à la stagnation'
        },
        Mutable: {
            description: 'Signes mutables : s\'adaptent et transforment.',
            healthFocus: 'Poumons, intestins, foie, pieds',
            recommendations: 'Tendance aux affections variables ou d\'adaptation'
        }
    },
    HOUSE_HEALTH: {
        1: {
            name: 'Ascendant',
            area: 'Constitution et vitalité physique',
            healthFocus: 'État général de l\'organisme, capacité à faire face aux déséquilibres, apparence physique',
            keywords: 'Tête, visage, premières impressions, vitalité'
        },
        2: {
            name: 'Ressources',
            area: 'Estime de soi, stabilité',
            healthFocus: 'Valeurs personnelles, stabilité matérielle, estime de soi',
            keywords: 'Biens matériels, stabilité financière, estime de soi'
        },
        3: {
            name: 'Communication',
            area: 'Esprit, nerfs',
            healthFocus: 'Communication, transport, frères et sœurs, apprentissage',
            keywords: 'Communication, transport, frères et sœurs, apprentissage'
        },
        4: {
            name: 'Foyer',
            area: 'Émotions, racines',
            healthFocus: 'Famille, foyer, racines, sécurité émotionnelle',
            keywords: 'Famille, foyer, racines, sécurité émotionnelle'
        },
        5: {
            name: 'Créativité',
            area: 'Plaisir, enfants',
            healthFocus: 'Créativité, enfants, plaisir, roman',
            keywords: 'Créativité, enfants, plaisir, roman'
        },
        6: {
            name: 'Santé',
            area: 'Maladie, habitudes et santé quotidienne',
            healthFocus: 'La maison la plus importante pour l\'analyse de santé. Maladie, travail, routines, service, animaux',
            keywords: 'Santé, travail, routines, service, animaux'
        },
        7: {
            name: 'Relations',
            area: 'Équilibre, partenaires',
            healthFocus: 'Partenaire, partenaires, relations, équilibre',
            keywords: 'Partenaire, partenaires, relations, équilibre'
        },
        8: {
            name: 'Transformation',
            area: 'Crise, processus profonds, régénération',
            healthFocus: 'Transformation, sexualité, mort, renaissance. Pas nécessairement maladie mais situations de transformation ou de crise',
            keywords: 'Transformation, sexualité, mort, renaissance'
        },
        9: {
            name: 'Philosophie',
            area: 'Éducation, expansion',
            healthFocus: 'Philosophie, éducation, voyages, élargir les horizons',
            keywords: 'Philosophie, éducation, voyages, élargir les horizons'
        },
        10: {
            name: 'Carrière',
            area: 'Réalisations, statut',
            healthFocus: 'Carrière, réputation, réalisations, statut',
            keywords: 'Carrière, réputation, réalisations, statut'
        },
        11: {
            name: 'Amitiés',
            area: 'Groupes, innovation',
            healthFocus: 'Amitiés, groupes, causes sociales, innovation',
            keywords: 'Amitiés, groupes, causes sociales, innovation'
        },
        12: {
            name: 'Inconscient',
            area: 'Maladies cachées, isolement',
            healthFocus: 'Maladies cachées, isolement, affections difficiles à identifier, guérison profonde, spiritualité',
            keywords: 'Inconscient, spiritualité, rêves, guérison profonde'
        }
    },
    TRANSIT_HEALTH_INTERPRETATIONS: {
        'Sol': {
            'Cuadratura': { level: 'III', desc: 'Énergie réduite, sensation d\'épuisement, besoin de repos, sensibilité accrue aux processus chroniques, surcharge de la structure corporelle.' },
            'Oposición': { level: 'III', desc: 'Énergie opposée, besoin d\'équilibre vital, confrontation avec les limites physiques.' },
            'Trígono': { level: 'I', desc: 'Période de bonne vitalité, énergie favorable, récupération facilitée.' },
            'Sextil': { level: 'I', desc: 'Opportunités d\'améliorer la santé, énergie disponible pour le bien-être.' },
            'Conjunción': { level: 'II', desc: 'Activation de la vitalité, énergie concentrée, période de plus grande intensité vitale.' }
        },
        'Luna': {
            'Cuadratura': { level: 'II', desc: 'Fluctuations émotionnelles affectant la digestion, sensibilité altérée, possible rétention d\'eau.' },
            'Oposición': { level: 'II', desc: 'Besoin d\'équilibre émotionnel, possibles altérations du sommeil.' },
            'Trígono': { level: 'I', desc: 'Équilibre émotionnel favorable, bonne capacité d\'adaptation.' },
            'Conjunción': { level: 'II', desc: 'Période de haute sensibilité émotionnelle et physique.' }
        },
        'Mercurio': {
            'Cuadratura': { level: 'II', desc: 'Nervosité, anxiété, insomnie, tension dans les épaules, problèmes respiratoires.' },
            'Oposición': { level: 'II', desc: 'Mentalité dispersée, difficulté à se détendre, tension nerveuse.' },
            'Trígono': { level: 'I', desc: 'Esprit clair, bonne capacité de concentration, équilibre nerveux.' },
            'Conjunción': { level: 'II', desc: 'Activation mentale intense, possible surcharge nerveuse.' }
        },
        'Venus': {
            'Cuadratura': { level: 'II', desc: 'Déséquilibres hormonaux, problèmes rénaux, douleurs articulaires.' },
            'Trígono': { level: 'I', desc: 'Harmonie corporelle, bien-être général, équilibre hormonal.' },
            'Conjunción': { level: 'I', desc: 'Période de plaisir sensoriel et de bien-être.' }
        },
        'Marte': {
            'Cuadratura': { level: 'III', desc: 'Processus inflammatoires, surmenage, accidents mineurs, états fébriles, excès d\'activité.' },
            'Oposición': { level: 'III', desc: 'Conflit énergétique, possibilité d\'accidents ou de blessures par excès.' },
            'Trígono': { level: 'I', desc: 'Bonne énergie physique, capacité d\'action positive.' },
            'Sextil': { level: 'I', desc: 'Énergie disponible pour une activité physique modérée.' },
            'Conjunción': { level: 'II', desc: 'Énergie concentrée, possibilité d\'inflammations ou de surmenage.' }
        },
        'Júpiter': {
            'Cuadratura': { level: 'II', desc: 'Excès, surpoids, problèmes hépatiques, indulgence.' },
            'Oposición': { level: 'II', desc: 'Besoin de modération, possibles problèmes métaboliques.' },
            'Trígono': { level: 'I', desc: 'Bonne récupération, métabolisme favorable, bien-être général.' },
            'Conjunción': { level: 'I', desc: 'Expansion de la vitalité, bonne santé générale.' }
        },
        'Saturno': {
            'Cuadratura': { level: 'IV', desc: 'Période d\'attention particulière. Énergie réduite, sensation d\'épuisement, besoin de repos, sensibilité accrue aux processus chroniques, surcharge de la structure corporelle, nécessité de revoir les habitudes.' },
            'Oposición': { level: 'IV', desc: 'Période d\'exigence. Épreuves d\'endurance, besoin de patience, possibles douleurs articulaires ou osseuses.' },
            'Trígono': { level: 'I', desc: 'Structure stable, maturité physique, capacité de travail soutenue.' },
            'Sextil': { level: 'I', desc: 'Opportunités de renforcer la structure corporelle.' },
            'Conjunción': { level: 'III', desc: 'Activation des restrictions, besoin de discipline.' }
        },
        'Urano': {
            'Cuadratura': { level: 'III', desc: 'Événements soudains, altérations inattendues, crises nerveuses, possibles accidents.' },
            'Oposición': { level: 'III', desc: 'Changements brusques de santé, situations inattendues.' },
            'Conjunción': { level: 'II', desc: 'Activation de l\'imprévu, possibles changements soudains.' }
        },
        'Neptuno': {
            'Cuadratura': { level: 'II', desc: 'Confusion, sensibilité extrême, possibles intoxications, états difficiles à diagnostiquer.' },
            'Oposición': { level: 'II', desc: 'Sensibilité accrue, possibilité d\'addictions, confusion.' },
            'Conjunción': { level: 'II', desc: 'Période de haute sensibilité, besoin de discernement.' }
        },
        'Plutón': {
            'Cuadratura': { level: 'IV', desc: 'Processus profonds de transformation, crises menant à la régénération, possibles chirurgies ou processus d\'élimination.' },
            'Oposición': { level: 'III', desc: 'Confrontation avec des processus profonds, transformation nécessaire.' },
            'Conjunción': { level: 'III', desc: 'Activation des processus de transformation profonde.' }
        }
    }
};