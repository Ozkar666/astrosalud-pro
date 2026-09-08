export const HEALTH_PT = {
    PLANET_HEALTH: {
        Sol: {
            role: 'Vitalidade geral, coração, circulação, capacidade de recuperação',
            influence: 'Centro da energia vital, masculinidade, autoexpressão',
            impact: 'Determina a força vital geral e a capacidade de recuperação',
            nature: 'Quente e seco',
            chronic: 'Problemas cardíacos, hipertensão, febre, inflamação crônica',
            acute: 'Febre aguda, insolação, inflamação súbita, acidentes',
            keywords: 'Coração, costas, circulação, febre, energia vital'
        },
        Luna: {
            role: 'Líquidos corporais, sistema digestivo, flutuações emocionais, sono',
            influence: 'Emoções, instintos, hábitos, ciclos',
            impact: 'Afeta o equilíbrio emocional e os ciclos naturais do corpo',
            nature: 'Frio e úmido',
            chronic: 'Retenção de líquidos, problemas gástricos, distúrbios do sono, ciclos irregulares',
            acute: 'Náusea, vômitos, cólicas, crises emocionais agudas, sonolência',
            keywords: 'Estômago, água corporal, ciclo menstrual, emoções, sono'
        },
        Mercurio: {
            role: 'Sistema nervoso, respiração, processos mentais',
            influence: 'Mente, comunicação, nervos, percepção',
            impact: 'Determina a agilidade mental e a saúde respiratória',
            nature: 'Variável (frio e úmido / quente e seco)',
            chronic: 'Neuralgia, ansiedade crônica, insônia, problemas respiratórios persistentes',
            acute: 'Enxaquecas, crises de ansiedade, espasmos brônquicos, neuralgia aguda',
            keywords: 'Nervos, pulmões, respiração, mente, sistema nervoso'
        },
        Venus: {
            role: 'Rins, equilíbrio corporal, sistema venoso e hormonal',
            influence: 'Prazer, harmonia, amor, valores',
            impact: 'Afeta o equilíbrio hormonal e a saúde reprodutiva',
            nature: 'Frio e úmido',
            chronic: 'Problemas renais, desequilíbrios hormonais, dores articulares, problemas venosos',
            acute: 'Pedras nos rins, cólica renal, desequilíbrios hormonais agudos',
            keywords: 'Garganta, rins, reprodução, prazer, sistema venoso'
        },
        Marte: {
            role: 'Músculos, sangue, inflamação, febre, trauma, processos agudos',
            influence: 'Energia, ação, coragem, conflito',
            impact: 'Determina a força muscular e a predisposição à inflamação',
            nature: 'Quente e seco',
            chronic: 'Inflamação crônica, artrite reumatoide, hipertensão, cicatrização',
            acute: 'Febre, acidentes, feridas, queimaduras, cortes, contusões, torções, inflamação aguda',
            keywords: 'Músculos, sangue, inflamação, febre, feridas, acidentes'
        },
        Júpiter: {
            role: 'Fígado, metabolismo, crescimento, expansão, excessos',
            influence: 'Expansão, abundância, filosofia, sorte',
            impact: 'Influencia o metabolismo e a propensão a problemas de peso',
            nature: 'Quente e úmido',
            chronic: 'Obesidade, problemas hepáticos, diabetes, colesterol alto, crescimento excessivo',
            acute: 'Sobrepeso agudo, fígado gorduroso, intoxicação alimentar, excessos',
            keywords: 'Fígado, crescimento, metabolismo, obesidade, excessos'
        },
        Saturno: {
            role: 'Ossos, articulações, pele, processos crônicos e restrições',
            influence: 'Limitação, estrutura, maturidade, karma',
            impact: 'Determina a estrutura óssea e o processo de envelhecimento',
            nature: 'Frio e seco',
            chronic: 'Artrite, osteoporose, problemas crônicos de pele, câncer, envelhecimento prematuro, depressão',
            acute: 'Dores articulares agudas, rigidez, fraturas, quedas, dores ósseas',
            keywords: 'Ossos, articulações, pele, envelhecimento, câncer, condições crônicas'
        },
        Urano: {
            role: 'Sistema nervoso, eventos súbitos, perturbações inesperadas',
            influence: 'Inovação, liberdade, rebelião, originalidade',
            impact: 'Pode indicar tendência a acidentes ou condições inesperadas',
            nature: 'Frio e seco (variável)',
            chronic: 'Problemas nervosos crônicos, alterações cardíacas, convulsões, tremores',
            acute: 'Acidentes súbitos, crises nervosas, dores agudas, problemas circulatórios súbitos',
            keywords: 'Nervos, acidentes, crises súbitas, sistema circulatório, súbito'
        },
        Neptuno: {
            role: 'Sensibilidade, intoxicação, confusão, condições difíceis de diagnosticar',
            influence: 'Espiritualidade, ilusão, compaixão, confusão',
            impact: 'Pode indicar sensibilidade extrema ou tendência a vícios',
            nature: 'Frio e úmido (etéreo)',
            chronic: 'Vícios, fadiga crônica, problemas imunológicos, confusão mental, alucinações, sensibilidade extrema',
            acute: 'Intoxicação, alucinações agudas, overdose, confusão súbita, alergias graves',
            keywords: 'Pés, sistema imunológico, vícios, alucinações, confusão, sensível'
        },
        Plutón: {
            role: 'Processos profundos, regeneração, eliminação e transformação',
            influence: 'Poder, transformação profunda, morte e renascimento',
            impact: 'Indica potencial para transformação e regeneração celular',
            nature: 'Frio e seco (variável)',
            chronic: 'Doenças degenerativas, transformação celular, crises profundas, cirurgias maiores',
            acute: 'Crises profundas, emergências, cirurgias de emergência, colapso, morte simbólica e renascimento',
            keywords: 'Regeneração, transformação, crise, morte e renascimento, profundo'
        }
    },

    SIGN_BODY_ASSOCIATIONS: {
        Aries: {
            organs: ['Cabeça', 'Rosto', 'Cérebro', 'Artérias', 'Sangue'],
            system: 'Circulatório e nervoso',
            vulnerabilities: ['Dor de cabeça', 'Enxaqueca', 'Hipertensão', 'Acidentes na cabeça'],
            strengths: ['Energia vital', 'Recuperação rápida', 'Circulação sanguínea'],
            diet: 'Evite alimentos muito picantes e estimulantes excessivos (café, álcool). Favoreça frutas vermelhas, melão, pepino, hortelã. Refeições leves e frescas. Evite alimentos muito quentes que aumentam o calor interno.',
            exercise: 'Esportes de velocidade e contato com cautela. Natação, ciclismo, artes marciais suaves. Evite esforço excessivo nos horários de calor mais intenso. Aqueça bem antes de atividades intensas.',
            emotions: 'Cultive paciência e tolerância. Evite frustração com atrasos. Pratique respiração profunda e meditação relaxante. Raiva não resolvida leva à hipertensão.',
            behavior: 'Evite impulsividade em decisões importantes. Não corra riscos desnecessários por excesso de confiança. Cuidado com acidentes na cabeça. Modere a natureza competitiva que gera estresse.'
        },
        Tauro: {
            organs: ['Pescoço', 'Garganta', 'Glândulas tireoidianas', 'Laringe', 'Mandíbula'],
            system: 'Endócrino e respiratório',
            vulnerabilities: ['Problemas de tireoide', 'Dor de garganta', 'Nós no pescoço'],
            strengths: ['Resistência física', 'Sistema imunológico forte', 'Voz poderosa'],
            diet: 'Evite excesso de doces, laticínios pesados e comida junk food. Favoreça frutas, vegetais, nozes, mel. Evite alimentos muito frios ou muito quentes. Mastigue devagar, não fale enquanto come.',
            exercise: 'Exercício consistente e rítmico: caminhar, yoga, tai chi. Evite esportes de alto impacto no pescoço e garganta. Fortaleça o pescoço com estiramientos suaves.',
            emotions: 'Cultive flexibilidade e adaptabilidade. Evite teimosia que causa frustração. Expresse emoções em voz alta em vez de guardá-las. Evite ganância e apego excessivo.',
            behavior: 'Evite resistência à mudança que gera estresse interno. Não reprima emoções (causa nós na garganta). Evite trabalho excessivo que leva ao esgotamento na rotina.'
        },
        Géminis: {
            organs: ['Pulmões', 'Brônquios', 'Ombros', 'Braços', 'Mãos', 'Sistema nervoso'],
            system: 'Respiratório e nervoso',
            vulnerabilities: ['Asma', 'Bronquite', 'Ansiedade', 'Insônia'],
            strengths: ['Agilidade mental', 'Comunicação', 'Adaptabilidade'],
            diet: 'Evite refeições pesadas que dificultam a respiração. Favoreça alimentos leves, frutas cítricas, aipo, cenoura. Evite excesso de açúcar que perturba os nervos. Coma em ambiente calmo.',
            exercise: 'Natação, caminhada, ciclismo, yoga. Exercícios de respiração profunda. Evite esportes de contato que afetam os ombros. Estique braços e ombros regularmente.',
            emotions: 'Cultive concentração e evite dispersão. Meditação mindfulness para acalmar a mente. Evite falar demais ou tagarelar. Expresse pensamentos por escrito (diário).',
            behavior: 'Evite fazer muitas coisas ao mesmo tempo (causa ansiedade). Não fale quando estiver agitado. Evite insônia por sobrecarga mental. Descanse a mente com silêncio.'
        },
        Cáncer: {
            organs: ['Estômago', 'Peito', 'Seios', 'Órgãos reprodutivos femininos'],
            system: 'Digestivo e reprodutivo',
            vulnerabilities: ['Gastrite', 'Úlceras', 'Retenção de líquidos'],
            strengths: ['Intuição', 'Proteção familiar', 'Adaptação emocional'],
            diet: 'Evite alimentos muito frios ou ácidos que irritam o estômago. Favoreça sopas, cereais, alimentos reconfortantes. Evite excesso de laticínios. Não coma por ansiedade emocional.',
            exercise: 'Natação, caminhada perto da água, yoga suave. Evite esportes de contato. Exercícios de flutuação. Evite exercício intenso após comer.',
            emotions: 'Cultive segurança emocional e apego saudável. Evite vitimismo e manipulação emocional. Expresse sentimentos em vez de guardá-los. Terapia emocional é muito benéfica.',
            behavior: 'Evite buscar refúgio na comida por estresse. Não se isole emocionalmente. Evite mudanças de humor que afetam a digestão. Compartilhe emoções com pessoas de confiança.'
        },
        Leo: {
            organs: ['Coração', 'Costas superiores', 'Coluna vertebral', 'Circulação'],
            system: 'Cardiovascular',
            vulnerabilities: ['Problemas cardíacos', 'Dor nas costas', 'Hipertensão'],
            strengths: ['Vitalidade', 'Boa circulação sanguínea', 'Resistência'],
            diet: 'Evite gorduras saturadas, excesso de sal, álcool. Favoreça frutas vermelhas, alho, gengibre, peixe. Evite refeições muito pesadas que sobrecarregam o coração. Coma porções menores.',
            exercise: 'Exercício cardiovascular moderado: caminhar, dançar, nadar. Evite esforço cardíaco excessivo. Fortaleça as costas superiores com exercícios posturais. Evite levantar peso excessivo.',
            emotions: 'Cultive humildade e generosidade. Evite orgulho que gera estresse cardíaco. Não leve tudo para o pessoal. Expresse afeto sem exigir reconhecimento.',
            behavior: 'Evite trabalhar demais para provar capacidades. Não negligencie o cuidado com as costas ao sentar. Evite situações que elevam a pressão arterial. Modere o consumo de estimulantes.'
        },
        Virgo: {
            organs: ['Intestinos', 'Sistema digestivo', 'Pâncreas', 'Fígado', 'Vesícula biliar'],
            system: 'Digestivo e metabólico',
            vulnerabilities: ['Problemas intestinais', 'Síndrome do intestino irritável', 'Diabetes'],
            strengths: ['Digestão eficiente', 'Atenção aos detalhes', 'Sistema imunológico'],
            diet: 'Evite alimentos processados, excesso de glúten, açúcar refinado. Favoreça fibras, vegetais verdes, probióticos. Coma em horários regulares. Evite excesso de cafeína.',
            exercise: 'Caminhada, yoga, Pilates. Exercícios abdominais e digestivos. Evite esportes de alto impacto. Rotina consistente e moderada.',
            emotions: 'Cultive aceitação e perfeccionismo saudável. Evite ansiedade por tentar controlar tudo. Medite para acalmar a mente crítica. Não se esforçe demais.',
            behavior: 'Evite autocrítica excessiva que causa ansiedade digestiva. Não reprima emoções (afeta os intestinos). Evite trabalho excessivo que leva ao esgotamento nervoso.'
        },
        Libra: {
            organs: ['Rins', 'Pele', 'Sistema endócrino', 'Glândulas adrenais'],
            system: 'Excretor e endócrino',
            vulnerabilities: ['Problemas renais', 'Desequilíbrios hormonais', 'Problemas de pele'],
            strengths: ['Equilíbrio hormonal', 'Pele saudável', 'Harmonia interna'],
            diet: 'Evite excesso de sal, açúcar, álcool. Favoreça água pura, frutas, vegetais. Evite alimentos temperados em excesso. Beba água suficiente para a saúde renal.',
            exercise: 'Yoga, dança, caminhada. Exercícios de equilíbrio. Evite esportes muito intensos. Fortaleça a região lombar e os rins com posturas suaves.',
            emotions: 'Cultive independência e capacidade de decisão. Evite indecisão que causa estresse renal. Não agrade os outros à custa própria. Busque harmonia interior.',
            behavior: 'Evite excesso de doces que afetam os rins. Não reprima necessidades para manter a harmonia. Evite sedentarismo que afeta o sistema endócrino.'
        },
        Escorpio: {
            organs: ['Órgãos reprodutivos', 'Sistema urogenital', 'Reto', 'Bexiga', 'Sangue'],
            system: 'Reprodutivo e urogenital',
            vulnerabilities: ['Problemas reprodutivos', 'Infecções urinárias'],
            strengths: ['Transformação', 'Regeneração', 'Poder de recuperação'],
            diet: 'Evite refeições muito pesadas, gorduras saturadas, álcool. Favoreça alimentos detox: limão, alho, vegetais verdes. Evite retenção de toxinas.',
            exercise: 'Exercício intenso mas equilibrado: artes marciais, natação, academia. Evite sedentarismo. Libera energia intensa que estagna se não for movida.',
            emotions: 'Cultive confiança e vulnerabilidade saudável. Evite ciúmes, possessividade e ressentimento. Transforme emoções intensas em criatividade. Terapia profunda é benéfica.',
            behavior: 'Evite sigilo que gera tensão interna. Não manipule situações. Evite controle excessivo. Canalize a intensidade em projetos transformadores.'
        },
        Sagitario: {
            organs: ['Fígado', 'Coxas', 'Quadris', 'Sistema nervoso ciático'],
            system: 'Hepático e locomotor',
            vulnerabilities: ['Problemas hepáticos', 'Dor ciática', 'Lesões nas coxas'],
            strengths: ['Otimismo', 'Energia expansiva', 'Boa recuperação'],
            diet: 'Evite excesso de álcool, fast food, refeições muito gordas. Favoreça vegetais, frutas, grãos integrais. Evite todos os tipos de excessos. Moderne a comida picante.',
            exercise: 'Esportes ao ar livre: caminhada, equitação, ciclismo. Evite excessos esportivos que machucam coxas e quadris. Estique a região lombar e ciática regularmente.',
            emotions: 'Cultive gratidão e otimismo realista. Evite entusiasmo excessivo que leva à descuido. Não se estenda demais. Cumpra compromissos.',
            behavior: 'Evite excessos (comida, bebida, atividade). Não corra riscos por excesso de confiança. Evite lesões por imprudência. Cuide do fígado com moderação.'
        },
        Capricornio: {
            organs: ['Ossos', 'Joelhos', 'Articulações', 'Pele', 'Dentes'],
            system: 'Esquelético e dérmico',
            vulnerabilities: ['Problemas articulares', 'Artrite', 'Dor no joelho'],
            strengths: ['Estrutura óssea forte', 'Resistência', 'Disciplina'],
            diet: 'Evite alimentos muito frios que afetam as articulações. Favoreça caldos, gelatina, alimentos ricos em cálcio. Evite excesso de sal. Coma refeições quentes e nutritivas.',
            exercise: 'Exercício de baixo impacto: caminhada, yoga, natação. Fortaleça joelhos e articulações. Evite esportes de alto impacto. Estique regularmente.',
            emotions: 'Cultive alegria e espontaneidade. Evite melancolia e pessimismo crônico. Não assuma responsabilidades dos outros. Expresse sentimentos.',
            behavior: 'Evite trabalho excessivo que desgasta ossos e articulações. Não reprima emoções (se depositam nas articulações). Cuide da postura. Evite frio excessivo.'
        },
        Acuario: {
            organs: ['Tornozelos', 'Sistema circulatório', 'Sistema nervoso', 'Glândulas linfáticas'],
            system: 'Circulatório e nervoso',
            vulnerabilities: ['Problemas circulatórios', 'Varizes', 'Edema'],
            strengths: ['Inovação', 'Circulação alternativa', 'Cura energética'],
            diet: 'Evite alimentos muito salgados que retêm líquidos. Favoreça potássio: banana, espinafre, abacate. Beba bastante água. Evite álcool que afeta a circulação.',
            exercise: 'Exercício que melhora a circulação: caminhada, ciclismo, yoga invertida. Evite ficar sentado por longos períodos. Mova pernas e tornozelos frequentemente.',
            emotions: 'Cultive conexão social sem exaustão. Evite isolamento por excesso de independência. Mantenha laços emocionais saudáveis. Não idealize relacionamentos.',
            behavior: 'Evite sedentarismo que afeta a circulação. Não ignore sinais do corpo ao ficar preso na mente. Evite mudanças súbitas de temperatura. Cuide dos tornozelos.'
        },
        Piscis: {
            organs: ['Pés', 'Sistema linfático', 'Glândula pineal', 'Sistema imunológico'],
            system: 'Linfático e imunológico',
            vulnerabilities: ['Problemas nos pés', 'Edema linfático', 'Alergias'],
            strengths: ['Intuição', 'Compaixão', 'Cura alternativa'],
            diet: 'Evite álcool, drogas, alimentos muito processados. Favoreça alimentos leves, frutas, vegetais, água pura. Evite excesso de açúcar. Coma com atenção plena.',
            exercise: 'Caminhar descalço na terra (grounding), yoga, tai chi, natação suave. Evite ambientes tóxicos. Exercício na natureza é ideal.',
            emotions: 'Cultive limites saudáveis e discernimento. Não absorva emoções dos outros. Não escape da realidade com substâncias. Medite e conecte-se com a natureza.',
            behavior: 'Evite todos os tipos de vícios (substâncias, pessoas, situações). Não fuja dos problemas. Evite vitimismo. Estabeleça rotinas de autocuidado.'
        }
    },

    ELEMENT_HEALTH: {
        Fuego: {
            description: 'Signos de fogo (Áries, Leão, Sagitário): energia, vitalidade e sistema cardiovascular.',
            strengths: ['Energia vital', 'Recuperação rápida', 'Força'],
            weaknesses: ['Inflamação', 'Febre', 'Queimaduras', 'Hipertensão'],
            recommendations: ['Exercício regular sem excesso', 'Controle do temperamento', 'Cuidado com o coração e pressão arterial'],
            diet: 'Evite alimentos muito quentes, picantes, ricos em gordura saturada e álcool. Favoreça frutas vermelhas, vegetais verdes, peixe, azeite. Refeições leves e frescas. Evite jantares pesados.',
            exercise: 'Atividades dinâmicas mas equilibradas: caminhada, natação, dança, artes marciais suaves. Evite sobrecarga cardíaca. Exercite-se pela manhã ou à tarde, evite calor extremo.',
            emotions: 'Cultive paciência e tolerância. Evite raiva não resolvida que prejudica o coração. Pratique respiração profunda, meditação relaxante. Expresse emoções sem agressividade.',
            behavior: 'Evite impulsividade e excesso de confiança. Modere a competitividade que gera estresse. Cuidado com acidentes. Evite trabalhar até o esgotamento.'
        },
        Tierra: {
            description: 'Signos de terra (Touro, Virgem, Capricórnio): estabilidade, estrutura e sistema digestivo.',
            strengths: ['Resistência física', 'Estabilidade', 'Bom metabolismo'],
            weaknesses: ['Problemas digestivos', 'Prisão de ventre', 'Problemas articulares'],
            recommendations: ['Dieta equilibrada e consistente', 'Exercício regular', 'Cuidado com ossos e articulações'],
            diet: 'Evite alimentos processados, excesso de glúten, açúcar refinado. Favoreça fibras, vegetais, frutas, grãos integrais. Coma em horários regulares. Evite excesso de laticínios.',
            exercise: 'Exercício de baixo impacto e consistente: caminhada, yoga, Pilates, jardinagem. Fortaleça articulações e ossos. Evite esportes de alto impacto.',
            emotions: 'Cultive flexibilidade e adaptabilidade. Evite teimosia e apego excessivo. Não reprima emoções (se depositam na digestão e articulações). Expresse sentimentos.',
            behavior: 'Evite trabalho rotineiro excessivo. Não resista à mudança. Evite autocrítica excessiva. Cuide da postura e das articulações. Não negligencie hábitos de sono.'
        },
        Aire: {
            description: 'Signos de ar (Gêmeos, Libra, Aquário): mente, comunicação e sistema nervoso.',
            strengths: ['Agilidade mental', 'Adaptabilidade', 'Comunicação'],
            weaknesses: ['Ansiedade', 'Insônia', 'Problemas respiratórios'],
            recommendations: ['Meditação e atenção plena', 'Exercícios de respiração', 'Descanso mental regular'],
            diet: 'Evite excesso de cafeína, açúcar, refeições leves sem substância. Favoreça frutas cítricas, nozes, peixe, vegetais. Coma devagar e em ambiente calmo.',
            exercise: 'Natação, caminhada, ciclismo, yoga. Exercícios de respiração profunda. Evite esportes de contato que afetam os ombros. Estique braços e pescoço.',
            emotions: 'Cultive concentração e silêncio. Evite dispersão mental. Medite 10 minutos por dia. Expresse pensamentos por escrito. Evite falar demais.',
            behavior: 'Evite fazer muitas coisas ao mesmo tempo. Não sobrecarregue a mente. Evite insônia por pensamentos acelerados. Faça pausas na tela. Conecte-se com o corpo.'
        },
        Agua: {
            description: 'Signos de água (Câncer, Escorpião, Peixes): emoções, intuição e sistema linfático.',
            strengths: ['Intuição', 'Empatia', 'Cura emocional'],
            weaknesses: ['Retenção de líquidos', 'Problemas emocionais', 'Depressão'],
            recommendations: ['Gerencie emoções com terapia', 'Hidratação adequada', 'Expresse sentimentos de forma saudável'],
            diet: 'Evite álcool, alimentos muito frios, excesso de laticínios. Favoreça sopas, caldos, frutas, vegetais cozidos. Beba bastante água. Não coma por ansiedade emocional.',
            exercise: 'Natação, caminhada perto da água, yoga suave, tai chi. Exercícios na natureza. Evite esportes muito intensos. Flutuar na água é muito curativo.',
            emotions: 'Cultive segurança emocional e limites saudáveis. Não absorva emoções dos outros. Terapia emocional é essencial. Expresse sentimentos sem vitimismo.',
            behavior: 'Evite vícios e escapismos da realidade. Não se isole emocionalmente. Evite pessimismo. Compartilhe sentimentos com pessoas de confiança. Estabeleça rotinas.'
        }
    },

    ASPECT_TYPE_CONCEPTS: {
        Conjunción: {
            symbol: '合',
            concept: 'A conjunção ocorre quando dois planetas estão no mesmo ponto zodiacal (0°). Suas energias se fundem, criando uma força unificada que amplifica ambas as qualidades. É como dois instrumentos tocando a mesma nota: o som é amplificado.',
            healthMeaning: 'Na saúde, a conjunção intensifica as funções de ambos os planetas. Pode gerar vitalidade extraordinária se os planetas estiverem harmoniosos, ou sobrecarga se estiverem tensos.',
            risks: 'Sobrecarga nos sistemas governados por ambos os planetas. Tendência a exagerar qualidades. Exaustão por intensidade sustentada.',
            wellness: 'Canalize a energia combinada em práticas concretas. Estabeleça ritmos que permitam descanso entre picos de atividade. Use a intensidade como motor de transformação positiva.'
        },
        Sextil: {
            symbol: '✦',
            concept: 'O sextil (60°) cria um ângulo de oportunidade e fluxo suave. As energias planetárias se apoiam sem esforço, como dois amigos que se complementam naturalmente.',
            healthMeaning: 'Indica talentos naturais para o bem-estar. O corpo tem facilidade em equilibrar os sistemas envolvidos. É um aspecto de instalações e recursos disponíveis.',
            risks: 'O risco é a complacência: porque flui facilmente, pode ser ignorado até ser perdido. Não gera crises, mas pode mascarar desequilíbrios sutis.',
            wellness: 'Aproveite conscientemente as facilidades que oferece. Cultive hábitos positivos sem esperar que problemas surjam. Use a harmonia como base para construir rotinas saudáveis.'
        },
        Cuadratura: {
            symbol: '□',
            concept: 'O quadrado (90°) gera tensão construtiva entre duas forças que se desafiam. É como um músculo que se fortalece através da resistência: a fricção produz crescimento.',
            healthMeaning: 'Na saúde, o quadrado indica áreas onde o corpo precisa fazer ajustes. Não é negativo: é o mecanismo natural de adaptação. No entanto, tensão sustentada pode se manifestar como sintomas.',
            risks: 'Inflamação, esforço excessivo, crises agudas quando a tensão não é gerenciada. Estresse acumulado afetando os sistemas governados por ambos os planetas. Tendência a ignorar sinais até que se tornem urgentes.',
            wellness: 'Práticas regulares para alívio de tensão (exercício, massagem, respiração). Aprenda a ouvir sinais corporais precoces. Transforme a tensão em motivação para melhorar hábitos.'
        },
        Trígono: {
            symbol: '△',
            concept: 'O trígono (120°) é o aspecto mais harmonioso. As energias fluem com naturalidade e graça, como um rio seguindo seu curso sem obstáculos. Representa talentos inatos e facilidade.',
            healthMeaning: 'Indica equilíbrio natural entre os sistemas governados pelos planetas. O corpo tem capacidade inata de manter o bem-estar nessas áreas.',
            risks: 'O risco é a passividade: porque é tão harmonioso, ações preventivas podem não ser tomadas. Facilidade excessiva pode levar à negligência.',
            wellness: 'Mantenha as práticas que funcionam sem mudar o que não está quebrado. Use a harmonia como plataforma para expandir para áreas mais desafiadoras. Gratidão e manutenção consciente.'
        },
        Oposición: {
            symbol: '☍',
            concept: 'A oposição (180°) cria polaridade: duas forças opostas buscando equilíbrio. É como dia e noite, ou inspiração e expiração. A consciência do polo oposto amplia a perspectiva.',
            healthMeaning: 'Na saúde, a oposição indica a necessidade de equilibrar dois sistemas trabalhando em direções opostas. Pode gerar flutuações ou alternância de sintomas.',
            risks: 'Polarização extrema: excesso de um polo e déficit do outro. Oscilações emocionais e físicas. Dificuldade em manter estabilidade. Possíveis crises de consciência.',
            wellness: 'Práticas de equilíbrio: yoga, meditação, respiração bilateral. Reconheça ambos os extremos sem julgamento. Busque o ponto intermediário em comida, exercício e descanso.'
        }
    },

    ASPECT_PLANET_HEALTH: {
        'Sol-Luna': {
            concept: 'A união do Sol (vitalidade, self consciente) e da Lua (emoções, instintos) representa a integração de corpo e alma. É o aspecto mais íntimo da identidade vital.',
            risks: 'Desequilíbrio entre vontade e necessidades emocionais. Tensão entre o que se "deve" fazer e o que o corpo solicita. Problemas cardíacos por estresse emocional não processado. Flutuações de energia.',
            wellness: 'Ouça tanto a lógica quanto a intuição. Pratique mindfulness para integrar corpo e mente. Rotinas que nutram tanto a vitalidade quanto a segurança emocional. Terapia que una razão e emoção.'
        },
        'Sol-Mercurio': {
            concept: 'O Sol com Mercúrio une a vitalidade com a mente. Representa a expressão do self através do pensamento e comunicação.',
            risks: 'Sobrecarga mental que drena a vitalidade. Tensão nos sistemas nervoso e respiratório. Dificuldade em "desligar" a mente. Enxaquecas por atividade mental excessiva.',
            wellness: 'Atividades que canalizam a mente criativamente. Exercício físico para liberar tensão mental. Técnicas de respiração e relaxamento. Comunicação assertiva como válvula de escape.'
        },
        'Sol-Venus': {
            concept: 'O Sol com Vênus une a força vital com o prazer e a harmonia. Indica uma constituição que busca bem-estar através da beleza e do equilíbrio.',
            risks: 'Excessos sensoriais (comida, conforto, prazer). Problemas renais ou articulares por indulgência excessiva. Desequilíbrios hormonais. Tendência à preguiça.',
            wellness: 'Prazer consciente: aproveite sem exagerar. Atividades estéticas que nutrem a alma (arte, música, natureza). Equilíbrio entre prazer e disciplina. Cuidado com o corpo como ato de amor próprio.'
        },
        'Sol-Marte': {
            concept: 'O Sol com Marte é a combinação de vitalidade e ação. Representa energia pura, iniciativa e força de vontade. É fogo com fogo.',
            risks: 'Superaquecimento, inflamação, febre, acidentes por impulsividade. Esforço físico excessivo. Tendência à impaciência que gera estresse. Hipertensão.',
            wellness: 'Atividades físicas intensas mas controladas (esportes, artes marciais). Canalize energia em projetos concretos. Aprenda a moderar a força. Descanso ativo.'
        },
        'Sol-Júpiter': {
            concept: 'O Sol com Júpiter expande a vitalidade e o otimismo. Indica uma constituição robusta com tendência à expansão.',
            risks: 'Excessos por otimismo excessivo. Sobrepeso, problemas hepáticos, inflamação por excesso. Tendência a subestimar problemas de saúde.',
            wellness: 'Moderação como virtude. Atividades que expandem a consciência sem excesso (viagens, estudo, espiritualidade). Dieta equilibrada. Exames regulares.'
        },
        'Sol-Saturno': {
            concept: 'O Sol com Saturno confronta vitalidade com estrutura e limites. Indica uma constituição que se fortalece com disciplina mas pode enfraquecer com rigidez.',
            risks: 'Fadiga crônica, problemas articulares, depressão, sensação de envelhecimento prematuro. Limites rígidos que reprimem a vitalidade.',
            wellness: 'Disciplina sustentada mas flexível. Exercício de baixo impacto e consistente (caminhada, natação). Nutrição regular e estruturada. Aceitação dos limites como força.'
        },
        'Sol-Urano': {
            concept: 'O Sol com Urano une a vitalidade com a inovação. Indica um corpo que funciona irregularmente mas com picos de energia extraordinários.',
            risks: 'Mudanças súbitas de energia. Arritmias, problemas circulatórios, sustos. Tendência a ignorar o corpo ao estar "na mente".',
            wellness: 'Rotinas flexíveis: estrutura com espaço para espontaneidade. Exercícios variados e estimulantes. Ouça o corpo mesmo quando a mente está ocupada.'
        },
        'Sol-Neptuno': {
            concept: 'O Sol com Netuno une a vitalidade com o etéreo. Indica uma constituição sensível que pode ser permeável a influências externas.',
            risks: 'Enfraecimento da vitalidade por confusão emocional. Tendência a vícios. Sensibilidade extrema a substâncias, ambientes e pessoas. Doenças difíceis de diagnosticar.',
            wellness: 'Práticas de grounding (caminhar descalço, natureza). Limites emocionais claros. Evite substâncias tóxicas. Espiritualidade como força, não como fuga.'
        },
        'Sol-Plutón': {
            concept: 'O Sol com Plutão une a força vital com transformação profunda. Indica capacidade extraordinária de regeneração mas através de crises.',
            risks: 'Crises de poder e controle afetando a saúde. Problemas reprodutivos, sexuais ou de eliminação. Tendência a manter tensões profundas. Doença como processo de transformação.',
            wellness: 'Aceite crises como oportunidades de transformação. Terapia profunda (psicologia, somática). Exercício que libera tensões acumuladas. Renascimento através de ação consciente.'
        },
        'Luna-Mercurio': {
            concept: 'A Lua com Mercúrio une emoções com a mente. Indica uma pessoa cujos pensamentos são profundamente influenciados por seus sentimentos.',
            risks: 'Ansiedade, nervosismo, insônia. Problemas digestivos por estresse emocional. Tensão nos ombros e pescoço. Dificuldade para dormir por pensamentos acelerados.',
            wellness: 'Escrita terapêutica (diário). Meditação mindfulness. Respiração diafragmática. Expressão verbal das emoções. Rotinas que acalmam a mente.'
        },
        'Luna-Venus': {
            concept: 'A Lua com Vênus une a emotionalidade com o prazer. Indica uma constituição que busca bem-estar através do cuidado e da sensualidade.',
            risks: 'Retenção de líquidos, problemas gástricos. Mudanças hormonais marcadas. Tendência ao excesso em comida ou conforto. Sensibilidade a mudanças de ciclo.',
            wellness: 'Rituais de autocuidado. Banhos terapêuticos. Contato com a natureza. Comida que nutre corpo e sentidos. Arte como cura.'
        },
        'Luna-Marte': {
            concept: 'A Lua com Marte une emoções com ação. Indica uma pessoa cujas respostas emocionais são rápidas e intensas.',
            risks: 'Irritabilidade, inflamação, cólicas. Crises emocionais agudas. Tendência a reações impulsivas que geram estresse físico. Problemas gástricos.',
            wellness: 'Atividade física regular para canalizar energia emocional. Técnicas de regulação emocional. Exercícios de respiração em momentos de crise. Canalize impulsividade em esportes.'
        },
        'Luna-Júpiter': {
            concept: 'A Lua com Júpiter expande a emotionalidade e a capacidade de nutrir. Indica uma constituição generosa mas propensa a excessos.',
            risks: 'Sobrepeso, retenção de líquidos, problemas hepáticos. Excessos emocionais (comer por sentimentos). Indulgência excessiva.',
            wellness: 'Alimentação consciente e nutritiva. Atividades que expandem a consciência emocional (terapia, espiritualidade). Moderação como prática diária. Nutrir outros sem negligenciar a si mesmo.'
        },
        'Luna-Saturno': {
            concept: 'A Lua com Saturno confronta emoções com estrutura. Indica uma pessoa que reprime seus sentimentos ou os gerencia com disciplina extrema.',
            risks: 'Depressão, frieza emocional, problemas gástricos por repressão. Envelhecimento prematuro do sistema digestivo. Dificuldade em relaxar.',
            wellness: 'Permita a expressão emocional. Terapia que trabalhe a repressão. Rotinas que incluam momentos de descanso emocional. Contato com a natureza para suavizar a rigidez.'
        },
        'Mercurio-Venus': {
            concept: 'Mercúrio com Vênus une a mente com a estética. Indica uma pessoa que pensa com beleza e comunica com harmonia.',
            risks: 'Tensão nervosa por perfeccionismo. Neuralgia, problemas respiratórios leves. Dificuldade em relaxar mentalmente.',
            wellness: 'Arte e música como terapia. Comunicação assertiva. Exercícios de relaxamento mental. Atividades criativas que unem mente e sensibilidade.'
        },
        'Mercurio-Marte': {
            concept: 'Mercúrio com Marte une a mente com a ação. Indica uma mente rápida e combativa, propensa a nervosismo.',
            risks: 'Enxaquecas, ansiedade, insônia. Tensão na mandíbula e pescoço. Falar demais ou rápido demais. Debate compulsivo.',
            wellness: 'Esportes que envolvem estratégia (xadrez, esportes de equipe). Escrita. Exercícios de relaxamento da mandíbula. Respiração consciente.'
        },
        'Mercurio-Júpiter': {
            concept: 'Mercúrio com Júpiter expande a mente e a comunicação. Indica uma pessoa com grande capacidade intelectual mas tendência à dispersão.',
            risks: 'Sobrecarga mental, ansiedade por excesso de informação. Nervosismo por superestimulação.',
            wellness: 'Filosofia e estudo como práticas de bem-estar. Meditação. Simplificação das informações consumidas. Aprender a dizer não ao excesso mental.'
        },
        'Mercurio-Saturno': {
            concept: 'Mercúrio com Saturno une a mente com a estrutura. Indica uma pessoa metódica mas propensa à rigidez mental.',
            risks: 'Ansiedade crônica, pensamentos obsessivos, tensão persistente. Dificuldade em relaxar a mente. Neuralgia.',
            wellness: 'Rotinas mentais estruturadas mas flexíveis. Meditação de observação. Exercício físico para liberar tensão mental. Terapia cognitiva.'
        },
        'Venus-Marte': {
            concept: 'Vênus com Marte une o prazer com a ação. Indica uma constituição que busca equilíbrio entre prazer e disciplina.',
            risks: 'Desequilíbrios hormonais, problemas renais, inflamação. Tensão entre prazer e dever que gera estresse.',
            wellness: 'Atividades que unem prazer e movimento (dançar, caminhar). Equilíbrio entre atividade e descanso. Comida que nutre sem privar. Relacionamentos saudáveis.'
        },
        'Venus-Júpiter': {
            concept: 'Vênus com Júpiter expande o prazer e a harmonia. Indica uma constituição que busca bem-estar através da abundância.',
            risks: 'Excessos em comida, bebida ou conforto. Sobrepeso, problemas articulares. Indulgência excessiva.',
            wellness: 'Prazer consciente. Atividades que expandem os sentidos sem excesso (arte, natureza, música). Moderação como virtude.'
        },
        'Venus-Saturno': {
            concept: 'Vênus com Saturno confronta o prazer com os limites. Indica uma pessoa que pode reprimir seus prazeres ou ter uma relação complexa com o prazer.',
            risks: 'Depressão, frieza, problemas articulares. Dificuldade em aproveitar. Repressão de necessidades sensoriais.',
            wellness: 'Permita-se prazer sem culpa. Terapia para trabalhar a repressão. Atividades sensoriais suaves (massagem, música). Autocuidado como prática.'
        },
        'Marte-Júpiter': {
            concept: 'Marte com Júpiter amplifica a ação e a expansão. Indica energia física enorme mas propensa a excessos.',
            risks: 'Esforço excessivo, acidentes, inflamação. Atividade excessiva que gera exaustão. Tendência a exagerar.',
            wellness: 'Canalize energia em projetos concretos. Esportes intensos mas controlados. Dosagem da força. Descanso ativo.'
        },
        'Marte-Saturno': {
            concept: 'Marte com Saturno confronta a ação com os limites. Indica energia que se fortalece através da resistência mas pode ficar bloqueada.',
            risks: 'Bloqueios energéticos, dores articulares, fadiga crônica. Tensão entre querer e poder. Frustração que se torna somática.',
            wellness: 'Exercício de resistência progressivo. Aceite limites sem desistir. Terapia de liberação de tensão. Disciplina com flexibilidade.'
        },
        'Júpiter-Saturno': {
            concept: 'Júpiter com Saturno une expansão com estrutura. Indica uma busca por equilíbrio entre crescimento e disciplina.',
            risks: 'Flutuações de peso, problemas metabólicos, crises de sentido. Tensão entre otimismo e pessimismo que afeta a saúde.',
            wellness: 'Planejamento de longo prazo para o bem-estar. Equilíbrio entre disciplina e prazer. Filosofia de vida saudável. Consistência com flexibilidade.'
        }
    },
    PRACTICAL_ADVICE: {
        Sol: { diet: 'Evite gorduras saturadas e excesso de sal. Favoreça frutas vermelhas, alho, peixe. Refeições leves.', exercise: 'Exercício cardiovascular moderado: caminhar, dançar. Evite esforço excessivo. Fortaleça as costas.', emotions: 'Cultive humildade e generosidade. Evite orgulho e excesso de ego que estressa o coração.', behavior: 'Não trabalhe até o esgotamento. Cuide da postura. Evite situações de pressão constante.' },
        Luna: { diet: 'Evite alimentos muito frios ou ácidos. Favoreça sopas, cereais, refeições reconfortantes. Não coma por ansiedade.', exercise: 'Natação, yoga suave, caminhada perto da água. Evite exercício intenso após comer.', emotions: 'Cultive segurança emocional. Evite vitimismo. Expresse sentimentos. Terapia emocional é benéfica.', behavior: 'Não se isole. Evite buscar refúgio na comida. Compartilhe emoções. Mantenha horários regulares de sono.' },
        Mercurio: { diet: 'Evite excesso de cafeína e açúcar. Favoreça frutas cítricas, aipo, peixe. Coma em ambiente calmo.', exercise: 'Natação, caminhada, respiração profunda. Estique ombros e braços. Evite sobrecarga mental.', emotions: 'Cultive concentração e silêncio. Medite 10 minutos por dia. Expresse pensamentos por escrito.', behavior: 'Não faça muitas coisas ao mesmo tempo. Evite insônia por mente acelerada. Faça pausas na tela.' },
        Venus: { diet: 'Evite excesso de sal e doces. Beba bastante água. Favoreça frutas, vegetais, alimentos frescos.', exercise: 'Yoga, dança, caminhada. Exercícios de equilíbrio e região lombar. Evite sedentarismo.', emotions: 'Cultive independência. Evite agradar a todos. Tome decisões sem medo. Busque harmonia interior.', behavior: 'Não reprima necessidades. Evite excesso de doces. Cuide dos rins com boa hidratação.' },
        Marte: { diet: 'Evite alimentos muito picantes e quentes. Favoreça alimentos refrescantes: pepino, alface, melancia. Evite álcool.', exercise: 'Esportes intensos mas com cautela: artes marciais, academia. Aqueça bem. Evite lesões.', emotions: 'Cultive paciência e tolerância. Evite raiva não resolvida. Canalize energia em ação construtiva.', behavior: 'Evite impulsividade. Não corra riscos desnecessários. Cuidado com acidentes. Modere a competitividade.' },
        Júpiter: { diet: 'Evite excessos de todos os tipos: comida, bebida, doces. Favoreça vegetais, frutas, refeições moderadas.', exercise: 'Exercício moderado e constante. Caminhada, natação, yoga. Evite sobrepeso por excessos.', emotions: 'Cultive gratidão e moderação. Evite otimismo excessivo que leva à negligência. Cumpra compromissos.', behavior: 'Evite excessos de comida e bebida. Não se estenda demais. Cuide do fígado. Mantenha disciplina.' },
        Saturno: { diet: 'Evite alimentos muito frios. Favoreça caldos, cálcio, alimentos quentes. Evite excesso de sal.', exercise: 'Exercício de baixo impacto: caminhada, yoga. Fortaleça articulações. Evite alto impacto.', emotions: 'Cultive alegria e espontaneidade. Evite pessimismo crônico. Não assuma responsabilidades dos outros.', behavior: 'Evite trabalho excessivo. Não reprima emoções (se depositam nas articulações). Cuide da postura.' },
        Urano: { diet: 'Evite alimentos muito salgados. Favoreça potássio: banana, espinafre. Beba bastante água.', exercise: 'Caminhada, ciclismo, yoga. Mova as pernas frequentemente. Evite sedentarismo prolongado.', emotions: 'Cultive conexão social. Evite isolamento por excesso de independência. Mantenha laços.', behavior: 'Não ignore sinais do corpo. Evite mudanças súbitas de temperatura. Cuide dos tornozelos e circulação.' },
        Neptuno: { diet: 'Evite álcool e substâncias. Favoreça alimentos leves, frutas, água pura. Coma com atenção plena.', exercise: 'Caminhe descalço, yoga, natação suave. Exercite-se na natureza. Evite ambientes tóxicos.', emotions: 'Cultive limites saudáveis. Não absorva emoções dos outros. Medite e conecte-se com a natureza.', behavior: 'Evite todos os tipos de vícios. Não fuja dos problemas. Estabeleça rotinas de autocuidado.' },
        Plutón: { diet: 'Evite alimentos muito pesados e processados. Favoreça alimentos detox: limão, alho, vegetais verdes.', exercise: 'Exercício intenso mas equilibrado. Libera energia intensa. Natação, academia, artes marciais.', emotions: 'Cultive confiança e vulnerabilidade. Evite ciúmes, possessividade, ressentimento. Transforme em criatividade.', behavior: 'Evite sigilo e manipulação. Não controle tudo. Canalize a intensidade em projetos transformadores.' }
    },
    houseNames: ['Identidade', 'Recursos', 'Comunicação', 'Lar', 'Criatividade', 'Saúde', 'Relacionamentos', 'Transformação', 'Filosofia', 'Carreira', 'Amizades', 'Inconsciente'],
    PLANET_NATURE: {
        Sol: 'Quente seco', Luna: 'Frio úmido', Mercurio: 'Variável',
        Venus: 'Frio úmido', Marte: 'Quente seco', Júpiter: 'Quente úmido',
        Saturno: 'Frio seco', Urano: 'Frio seco (variável)', Neptuno: 'Frio úmido (etéreo)',
        Plutón: 'Frio seco (variável)'
    },
    MODALITY_HEALTH: {
        Cardinal: { description: 'Signos cardinais: iniciam ciclos, energias de começo.', healthFocus: 'Cabeça, estômago, rins, ossos', recommendations: 'Tendência a problemas agudos ou início de condições' },
        Fijo: { description: 'Signos fixos: mantêm e estabilizam.', healthFocus: 'Garganta, coração, reprodutivo, circulatório', recommendations: 'Tendência a condições crônicas ou estagnação' },
        Mutable: { description: 'Signos mutáveis: adaptam e transformam.', healthFocus: 'Pulmões, intestinos, fígado, pés', recommendations: 'Tendência a condições variáveis ou adaptativas' }
    },
    HOUSE_HEALTH: {
        1: { name: 'Ascendente', area: 'Constituição e vitalidade física', healthFocus: 'Estado geral do organismo, capacidade de enfrentar desequilíbrios, aparência física', keywords: 'Cabeça, rosto, primeira impressão, vitalidade' },
        2: { name: 'Recursos', area: 'Autoestima, estabilidade', healthFocus: 'Valores pessoais, estabilidade material, autoestima', keywords: 'Bens materiais, estabilidade financeira, autoestima' },
        3: { name: 'Comunicação', area: 'Mente, nervos', healthFocus: 'Comunicação, transporte, irmãos, aprendizagem', keywords: 'Comunicação, transporte, irmãos, aprendizagem' },
        4: { name: 'Lar', area: 'Emoções, raízes', healthFocus: 'Família, lar, raízes, segurança emocional', keywords: 'Família, lar, raízes, segurança emocional' },
        5: { name: 'Criatividade', area: 'Prazer, filhos', healthFocus: 'Criatividade, filhos, prazer, romance', keywords: 'Criatividade, filhos, prazer, romance' },
        6: { name: 'Saúde', area: 'Doença, hábitos e saúde diária', healthFocus: 'Casa mais importante para análise de saúde. Doença, trabalho, rotinas, serviço, animais de estimação', keywords: 'Saúde, trabalho, rotinas, serviço, animais de estimação' },
        7: { name: 'Relacionamentos', area: 'Equilíbrio, parceiros', healthFocus: 'Parceiro, colaboradores, relacionamentos, equilíbrio', keywords: 'Parceiro, colaboradores, relacionamentos, equilíbrio' },
        8: { name: 'Transformação', area: 'Crises, processos profundos, regeneração', healthFocus: 'Transformação, sexualidade, morte, renascimento. Nem sempre é doença mas situações de transformação ou crise', keywords: 'Transformação, sexualidade, morte, renascimento' },
        9: { name: 'Filosofia', area: 'Educação, expansão', healthFocus: 'Filosofia, educação, viagens, alargar horizontes', keywords: 'Filosofia, educação, viagens, alargar horizontes' },
        10: { name: 'Carreira', area: 'Conquistas, status', healthFocus: 'Carreira, reputação, conquistas, status', keywords: 'Carreira, reputação, conquistas, status' },
        11: { name: 'Amizades', area: 'Grupos, inovação', healthFocus: 'Amizades, grupos, causas sociais, inovação', keywords: 'Amizades, grupos, causas sociais, inovação' },
        12: { name: 'Inconsciente', area: 'Doenças ocultas, isolamento', healthFocus: 'Doenças ocultas, isolamento, condições difíceis de identificar, cura profunda, espiritualidade', keywords: 'Inconsciente, espiritualidade, sonhos, cura profunda' }
    },
    TRANSIT_HEALTH_INTERPRETATIONS: {
        'Sol': {
            'Cuadratura': { level: 'III', desc: 'Energia reduzida, sensação de exaustão, necessidade de descanso, sensibilidade aumentada a processos crônicos, tensão na estrutura corporal.' },
            'Oposición': { level: 'III', desc: 'Energia oposta, necessidade de equilíbrio vital, confronto com limites físicos.' },
            'Trígono': { level: 'I', desc: 'Período de boa vitalidade, energia favorável, recuperação facilitada.' },
            'Sextil': { level: 'I', desc: 'Oportunidades para melhorar a saúde, energia disponível para bem-estar.' },
            'Conjunción': { level: 'II', desc: 'Ativação da vitalidade, energia concentrada, período de maior intensidade vital.' }
        },
        'Luna': {
            'Cuadratura': { level: 'II', desc: 'Flutuações emocionais afetando a digestão, sensibilidade alterada, possível retenção de líquidos.' },
            'Oposición': { level: 'II', desc: 'Necessidade de equilíbrio emocional, possíveis alterações no sono.' },
            'Trígono': { level: 'I', desc: 'Equilíbrio emocional favorável, boa adaptabilidade.' },
            'Conjunción': { level: 'II', desc: 'Período de alta sensibilidade emocional e física.' }
        },
        'Mercurio': {
            'Cuadratura': { level: 'II', desc: 'Nervosismo, ansiedade, insônia, tensão nos ombros, problemas respiratórios.' },
            'Oposición': { level: 'II', desc: 'Mentalidade dispersa, dificuldade em relaxar, tensão nervosa.' },
            'Trígono': { level: 'I', desc: 'Mente clara, boa capacidade de concentração, equilíbrio nervoso.' },
            'Conjunción': { level: 'II', desc: 'Ativação mental intensa, possível sobrecarga nervosa.' }
        },
        'Venus': {
            'Cuadratura': { level: 'II', desc: 'Desequilíbrios hormonais, problemas renais, dores articulares.' },
            'Trígono': { level: 'I', desc: 'Harmonia corporal, bem-estar geral, equilíbrio hormonal.' },
            'Conjunción': { level: 'I', desc: 'Período de prazer sensorial e bem-estar.' }
        },
        'Marte': {
            'Cuadratura': { level: 'III', desc: 'Processos inflamatórios, esforço excessivo, acidentes menores, estados febris, atividade excessiva.' },
            'Oposición': { level: 'III', desc: 'Conflito energético, possibilidade de acidentes ou lesões por excesso.' },
            'Trígono': { level: 'I', desc: 'Boa energia física, capacidade de ação positiva.' },
            'Sextil': { level: 'I', desc: 'Energia disponível para atividade física moderada.' },
            'Conjunción': { level: 'II', desc: 'Energia concentrada, possibilidade de inflamações ou esforço excessivo.' }
        },
        'Júpiter': {
            'Cuadratura': { level: 'II', desc: 'Excessos, sobrepeso, problemas hepáticos, indulgência.' },
            'Oposición': { level: 'II', desc: 'Necessidade de moderação, possíveis problemas metabólicos.' },
            'Trígono': { level: 'I', desc: 'Boa recuperação, metabolismo favorável, bem-estar geral.' },
            'Conjunción': { level: 'I', desc: 'Expansão da vitalidade, boa saúde geral.' }
        },
        'Saturno': {
            'Cuadratura': { level: 'IV', desc: 'Período de atenção especial. Energia reduzida, sensação de exaustão, necessidade de descanso, sensibilidade aumentada a processos crônicos, tensão na estrutura corporal, necessidade de revisar hábitos.' },
            'Oposición': { level: 'IV', desc: 'Período de exigência. Testes de resistência, necessidade de paciência, possíveis dores articulares ou ósseas.' },
            'Trígono': { level: 'I', desc: 'Estrutura estável, maturidade física, capacidade de trabalho sustentada.' },
            'Sextil': { level: 'I', desc: 'Oportunidades para fortalecer a estrutura corporal.' },
            'Conjunción': { level: 'III', desc: 'Ativação de restrições, necessidade de disciplina.' }
        },
        'Urano': {
            'Cuadratura': { level: 'III', desc: 'Eventos súbitos, alterações inesperadas, crises nervosas, possíveis acidentes.' },
            'Oposición': { level: 'III', desc: 'Mudanças súbitas na saúde, situações inesperadas.' },
            'Conjunción': { level: 'II', desc: 'Ativação do inesperado, possíveis mudanças súbitas.' }
        },
        'Neptuno': {
            'Cuadratura': { level: 'II', desc: 'Confusão, sensibilidade extrema, possíveis intoxicações, estados difíceis de diagnosticar.' },
            'Oposición': { level: 'II', desc: 'Sensibilidade aumentada, possibilidade de vícios, confusão.' },
            'Conjunción': { level: 'II', desc: 'Período de alta sensibilidade, necessidade de discernimento.' }
        },
        'Plutón': {
            'Cuadratura': { level: 'IV', desc: 'Processos de transformação profunda, crises levando à regeneração, possíveis cirurgias ou processos de eliminação.' },
            'Oposición': { level: 'III', desc: 'Confronto com processos profundos, transformação necessária.' },
            'Conjunción': { level: 'III', desc: 'Ativação de processos de transformação profunda.' }
        }
    }
};
