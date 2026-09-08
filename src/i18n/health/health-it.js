export const HEALTH_IT = {
    PLANET_HEALTH: {
        Sol: {
            role: 'Vitalità generale, cuore, circolazione, capacità di recupero',
            influence: 'Centro di energia vitale, mascolinità, autoespressione',
            impact: 'Determina la forza vitale complessiva e la capacità di recupero',
            nature: 'Caldo e secco',
            chronic: 'Problemi cardiaci, ipertensione, febbre, infiammazioni croniche',
            acute: 'Febbre acuta, colpi di sole, infiammazioni improvvise, incidenti',
            keywords: 'Cuore, schiena, circolazione, febbre, energia vitale'
        },
        Luna: {
            role: 'Fluidi corporei, sistema digestivo, fluttuazioni emotive, sonno',
            influence: 'Emozioni, istinti, abitudini, cicli',
            impact: 'Influenza l\'equilibrio emotivo e i cicli naturali del corpo',
            nature: 'Freddo e umido',
            chronic: 'Ritenzione idrica, problemi gastrici, disturbi del sonno, cicli irregolari',
            acute: 'Nausea, vomito, coliche, crisi emotive acute, sonnolenza',
            keywords: 'Stomaco, acqua corporea, ciclo mestruale, emozioni, sonno'
        },
        Mercurio: {
            role: 'Sistema nervoso, respirazione, processi mentali',
            influence: 'Mente, comunicazione, nervi, percezione',
            impact: 'Determina l\'agilità mentale e la salute respiratoria',
            nature: 'Variabile (freddo e umido / caldo e secco)',
            chronic: 'Neuralgie, ansia cronica, insonnia, problemi respiratori persistenti',
            acute: 'Emicranie, crisi d\'ansia, spasmi bronchiali, neuralgie acute',
            keywords: 'Nervi, polmoni, respirazione, mente, sistema nervoso'
        },
        Venus: {
            role: 'Reni, equilibrio corporeo, sistema venoso e ormonale',
            influence: 'Piacere, armonia, amore, valori',
            impact: 'Influenza l\'equilibrio ormonale e la salute riproduttiva',
            nature: 'Freddo e umido',
            chronic: 'Problemi renali, squilibri ormonali, dolori articolari, problemi venosi',
            acute: 'Calcoli renali, coliche renali, squilibri ormonali acuti',
            keywords: 'Gola, reni, riproduzione, piacere, sistema venoso'
        },
        Marte: {
            role: 'Muscoli, sangue, infiammazione, febbre, traumi, processi acuti',
            influence: 'Energia, azione, coraggio, conflitto',
            impact: 'Determina la forza muscolare e la predisposizione alle infiammazioni',
            nature: 'Caldo e secco',
            chronic: 'Infiammazioni croniche, artrite reumatoide, ipertensione, cicatrici',
            acute: 'Febbre, incidenti, ferite, ustioni, tagli, contusioni, distorsioni, infiammazioni acute',
            keywords: 'Muscoli, sangue, infiammazioni, febbre, ferite, incidenti'
        },
        Júpiter: {
            role: 'Fegato, metabolismo, crescimento, espansione, eccessi',
            influence: 'Espansione, abbondanza, filosofia, fortuna',
            impact: 'Influenza il metabolismo e la propensione ai problemi di peso',
            nature: 'Caldo e umido',
            chronic: 'Obesità, problemi epatici, diabete, colesterolo alto, crescita eccessivo',
            acute: 'Sovrappeso acuto, fegato grasso, intossicazioni alimentari, eccessi',
            keywords: 'Fegato, crescimento, metabolismo, obesità, eccessi'
        },
        Saturno: {
            role: 'Ossa, articolazioni, pelle, processi cronici e restrizioni',
            influence: 'Limitazione, struttura, maturità, karma',
            impact: 'Determina la struttura ossea e il processo di invecchiamento',
            nature: 'Freddo e secco',
            chronic: 'Artrite, osteoporosi, problemi cutanei cronici, cancro, invecchiamento precoce, depressione',
            acute: 'Dolore articolare acuto, rigidità, fratture, cadute, dolori ossei',
            keywords: 'Ossa, articolazioni, pelle, invecchiamento, cancro, condizioni croniche'
        },
        Urano: {
            role: 'Sistema nervoso, eventi improvvisi, disturbi inattesi',
            influence: 'Innovazione, libertà, ribellione, originalità',
            impact: 'Può indicare tendenza a incidenti o condizioni inattese',
            nature: 'Freddo e secco (variabile)',
            chronic: 'Problemi nervosi cronici, alterazioni cardiache, convulsioni, tremori',
            acute: 'Incidenti improvvisi, crisi nervose, dolori acuti, problemi circolatori improvvisi',
            keywords: 'Nervi, incidenti, crisi improvvise, sistema circolatorio, improvviso'
        },
        Neptuno: {
            role: 'Sensibilità, intossicazioni, confusione, condizioni difficili da diagnosticare',
            influence: 'Spiritualità, illusione, compassione, confusione',
            impact: 'Può indicare sensibilità estrema o tendenza alle dipendenze',
            nature: 'Freddo e umido (etereo)',
            chronic: 'Dipendenze, stanchezza cronica, problemi immunitari, confusione mentale, allucinazioni, sensibilità estrema',
            acute: 'Intossicazioni, allucinazioni acute, overdose, confusione improvvisa, allergie gravi',
            keywords: 'Piedi, sistema immunitario, dipendenze, allucinazioni, confusione, sensibile'
        },
        Plutón: {
            role: 'Processi profondi, rigenerazione, eliminazione e trasformazione',
            influence: 'Potere, trasformazione profonda, morte e rinascita',
            impact: 'Indica potenziale di trasformazione e rigenerazione cellulare',
            nature: 'Freddo e secco (variabile)',
            chronic: 'Malattie degenerative, trasformazione cellulare, crisi profonde, interventi chirurgici maggiori',
            acute: 'Crisi profonde, emergenze, chirurgia d\'urgenza, collasso, morte e rinascita simbolica',
            keywords: 'Rigenerazione, trasformazione, crisi, morte e rinascita, profondo'
        }
    },

    SIGN_BODY_ASSOCIATIONS: {
        Aries: {
            organs: ['Testa', 'Viso', 'Cervello', 'Arterie', 'Sangue'],
            system: 'Circolatorio e nervoso',
            vulnerabilities: ['Cefalea', 'Emicrania', 'Ipertensione', 'Traumi alla testa'],
            strengths: ['Energia vitale', 'Recupero rapido', 'Circolazione sanguigna'],
            diet: 'Evitare cibi molto piccanti e stimolanti in eccesso (caffè, alcol). Preferire frutti rossi, melone, cetriolo, menta. Pasti leggeri e freschi. Evitare cibi molto caldi che aumentano il calore interno.',
            exercise: 'Sport di velocità e contatto con cautela. Nuoto, ciclismo, arti marziali leggere. Evitare sforzi eccessivi nelle ore di punta del calore. Riscaldarsi bene prima di un\'attività intensa.',
            emotions: 'Coltivare pazienza e tolleranza. Evitare la frustrazione per i ritardi. Praticare respirazione profonda e meditazione calmante. La rabbia irrisolta si trasforma in ipertensione.',
            behavior: 'Evitare l\'impulsività nelle decisioni importanti. Non assumere rischi inutili per eccesso di sicurezza. Fare attenzione ai traumi alla testa. Moderare la natura competitiva che genera stress.'
        },
        Tauro: {
            organs: ['Collo', 'Gola', 'Ghiandole tiroidee', 'Laringe', 'Mandibola'],
            system: 'Endocrino e respiratorio',
            vulnerabilities: ['Problemi alla tiroide', 'Mal di gola', 'Nodi al collo'],
            strengths: ['Resistenza fisica', 'Sistema immunitario forte', 'Voce potente'],
            diet: 'Evitare eccessi di dolci, latticini pesanti e cibi spazzatura. Preferire frutta, verdura, noci, miele. Evitare cibi molto freddi o molto caldi. Masticare lentamente, non parlare mangiando.',
            exercise: 'Esercizio costante e ritmato: camminare, yoga, tai chi. Evitare sport ad alto impatto su collo e gola. Rafforzare il collo con stiramenti delicati.',
            emotions: 'Coltivare flessibilità e adattabilità. Evitare l\'ostinazione che genera frustrazione. Esprimere le emozioni ad alta voce invece di trattenere. Evitare l\'avidità e l\'attaccamento eccessivo.',
            behavior: 'Evitare la resistenza al cambiamento che genera stress interno. Non reprimere le emozioni (causa nodi alla gola). Evitare l\'eccesso di lavoro che porta all\'esaurimento da routine.'
        },
        Géminis: {
            organs: ['Polmoni', 'Bronchi', 'Spalle', 'Braccia', 'Mani', 'Sistema nervoso'],
            system: 'Respiratorio e nervoso',
            vulnerabilities: ['Asma', 'Bronchite', 'Ansia', 'Insonnia'],
            strengths: ['Agilità mentale', 'Comunicazione', 'Adattabilità'],
            diet: 'Evitare pasti pesanti che ostacolano la respirazione. Preferire cibi leggeri, agrumi, sedano, carote. Evitare eccessi di zucchero che alterano i nervi. Mangiare in un ambiente tranquillo.',
            exercise: 'Nuoto, camminata, ciclismo, yoga. Esercizi di respirazione profonda. Evitare sport di contatto che colpiscono le spalle. Stirare regolarmente braccia e spalle.',
            emotions: 'Coltivare la concentrazione e evitare la dispersione. Meditazione mindfulness per calmare la mente. Evitare di parlare troppo o fare pettegolezzi. Esprimere i pensieri per iscritto (diario).',
            behavior: 'Evitare di fare molte cose contemporaneamente (genera ansia). Non parlare quando si è agitati. Evitare l\'insonnia da sovraccarico mentale. Riposare la mente con il silenzio.'
        },
        Cáncer: {
            organs: ['Stomaco', 'Torace', 'Seno', 'Organi riproduttivi femminili'],
            system: 'Digestivo e riproduttivo',
            vulnerabilities: ['Gastrite', 'Ulcere', 'Ritenzione idrica'],
            strengths: ['Intuizione', 'Protezione familiare', 'Adattamento emotivo'],
            diet: 'Evitare cibi molto freddi o acidi che irritano lo stomaco. Preferire zuppe, cereali, cibi confortanti. Evitare latticini in eccesso. Evitare di mangiare per ansia emotiva.',
            exercise: 'Nuoto, camminata vicino all\'acqua, yoga delicato. Evitare sport di contatto. Esercizi di galleggiamento. Evitare esercizi intensi dopo aver mangiato.',
            emotions: 'Coltivare la sicurezza emotiva e l\'attaccamento sano. Evitare il vittimismo e la manipolazione emotiva. Esprimere i sentimenti invece di trattenere. La terapia emotiva è molto benefica.',
            behavior: 'Evitare di rifugiarsi nel cibo per lo stress. Non isolarsi emotivamente. Evitare i cambi d\'umore che influenzano la digestione. Condividere le emozioni con persone fidate.'
        },
        Leo: {
            organs: ['Cuore', 'Schiena alta', 'Colonna vertebrale', 'Circolazione'],
            system: 'Cardiovascolare',
            vulnerabilities: ['Problemi cardiaci', 'Dolori alla schiena', 'Ipertensione'],
            strengths: ['Vitalità', 'Circolazione sanguigna forte', 'Resistenza'],
            diet: 'Evitare grassi saturi, eccesso di sale, alcol. Preferire frutti rossi, aglio, zenzero, pesce. Evitare pasti molto pesanti che sovraccaricano il cuore. Mangiare porzioni più piccole.',
            exercise: 'Esercizio cardiovascolare moderato: camminare, ballare, nuotare. Evitare sforzi cardiaci eccessivi. Rafforzare la schiena alta con esercizi posturali. Evitare di sollevare pesi eccessivi.',
            emotions: 'Coltivare umiltà e generosità. Evitare l\'orgoglio che genera stress cardiaco. Non prendere tutto personalmente. Esprimere affetto senza pretendere riconoscimento.',
            behavior: 'Evitare il lavoro eccessivo per dimostrare le proprie capacità. Non trascurare la schiena quando si è seduti. Evitare situazioni che alzano la pressione sanguigna. Moderare il consumo di stimolanti.'
        },
        Virgo: {
            organs: ['Intestini', 'Sistema digestivo', 'Pancreas', 'Fegato', 'Cistifellea'],
            system: 'Digestivo e metabolico',
            vulnerabilities: ['Problemi intestinali', 'Sindrome dell\'intestino irritabile', 'Diabete'],
            strengths: ['Digestione efficiente', 'Attenzione ai dettagli', 'Sistema immunitario'],
            diet: 'Evitare cibi processati, eccesso di glutine, zucchero raffinato. Preferire fibre, verdure verdi, probiotici. Mangiare a orari regolari. Evitare l\'eccesso di caffeina.',
            exercise: 'Camminata, yoga, Pilates. Esercizi addominali e digestivi. Evitare sport ad alto impatto. Routine costante e moderata.',
            emotions: 'Coltivare l\'accettazione e il perfezionismo sano. Evitare l\'ansia di controllare tutto. Meditare per calmare la mente critica. Non esagerare con l\'autoesigenza.',
            behavior: 'Evitare l\'autocritica eccessiva che genera ansia digestiva. Non reprimere le emozioni (colpisce gli intestini). Evitare l\'eccesso di lavoro che porta all\'esaurimento nervoso.'
        },
        Libra: {
            organs: ['Reni', 'Pelle', 'Sistema endocrino', 'Ghiandole surrenali'],
            system: 'Escretore e endocrino',
            vulnerabilities: ['Problemi renali', 'Squilibri ormonali', 'Problemi cutanei'],
            strengths: ['Equilibrio ormonale', 'Pelle sana', 'Armonia interiore'],
            diet: 'Evitare eccesso di sale, zucchero, alcol. Preferire acqua pura, frutta, verdura. Evitare cibi molto condimentati. Bere abbastanza acqua per la salute dei reni.',
            exercise: 'Yoga, danza, camminata. Esercizi di equilibrio. Evitare sport molto intensi. Rafforzare la zona lombare e i reni con posture delicate.',
            emotions: 'Coltivare l\'indipendenza e la capacità decisionale. Evitare l\'indecisione che genera stress renale. Non accontentare tutti a proprie spese. Cercare l\'armonia interiore.',
            behavior: 'Evitare l\'eccesso di dolci che colpisce i reni. Non reprimere i bisogni per mantenere l\'armonia. Evitare il sedentarismo che colpisce il sistema endocrino.'
        },
        Escorpio: {
            organs: ['Organi riproduttivi', 'Sistema urogenitale', 'Retto', 'Vescica', 'Sangue'],
            system: 'Riproduttivo e urogenitale',
            vulnerabilities: ['Problemi riproduttivi', 'Infezioni urinarie'],
            strengths: ['Trasformazione', 'Rigenerazione', 'Potere di recupero'],
            diet: 'Evitare pasti molto pesanti, grassi saturi, alcol. Preferire cibi disintossicanti: limone, aglio, verdure verdi. Evitare il ristagno di tossine.',
            exercise: 'Esercizio intenso ma equilibrato: arti marziali, nuoto, palestra. Evitare il sedentarismo. Libera energia intensa che si stagna se non si muove.',
            emotions: 'Coltivare la fiducia e la vulnerabilità sana. Evitare gelosia, possessività e risentimento. Trasformare le emozioni intense in creatività. La terapia profonda è benefica.',
            behavior: 'Evitare il segreto che genera tensione interna. Non manipolare le situazioni. Evitare l\'eccesso di controllo. Canalizzare l\'intensità in progetti trasformativi.'
        },
        Sagitario: {
            organs: ['Fegato', 'Coscia', 'Anca', 'Sistema nervoso sciatico'],
            system: 'Epatico e locomotore',
            vulnerabilities: ['Problemi epatici', 'Dolore sciatico', 'Lesioni alla coscia'],
            strengths: ['Ottimismo', 'Energia espansiva', 'Buon recupero'],
            diet: 'Evitare eccesso di alcol, cibi veloci, pasti molto grassi. Preferire verdure, frutta, cereali integrali. Evitare tutti i tipi di eccessi. Moderare i cibi piccanti.',
            exercise: 'Sport all\'aria aperta: escursioni, equitazione, ciclismo. Evitare eccessi sportivi che feriscono cosce e anche. Stirare regolarmente la zona lombare e sciatica.',
            emotions: 'Coltivare la gratitudine e l\'ottimismo realistico. Evitare l\'eccesso di entusiasmo che porta alla trascuratezza. Non estendersi troppo. Mantenere gli impegni.',
            behavior: 'Evitare gli eccessi (cibo, bevande, attività). Non assumere rischi per eccesso di sicurezza. Evitare lesioni per imprudenza. Cura del fegato con moderazione.'
        },
        Capricornio: {
            organs: ['Ossa', 'Ginocchia', 'Articolazioni', 'Pelle', 'Denti'],
            system: 'Scheletrico e dermico',
            vulnerabilities: ['Problemi articolari', 'Artrite', 'Dolore al ginocchio'],
            strengths: ['Struttura ossea forte', 'Resistenza', 'Disciplina'],
            diet: 'Evitare cibi molto freddi che colpiscono le articolazioni. Preferire brodi, gelatina, cibi ricchi di calcio. Evitare eccesso di sale. Mangiare caldo e nutriente.',
            exercise: 'Esercizio a basso impatto: camminata, yoga, nuoto. Rafforzare ginocchia e articolazioni. Evitare sport ad alto impatto. Stirare regolarmente.',
            emotions: 'Coltivare la gioia e la spontaneità. Evitare la malinconia e il pessimismo cronico. Non caricare le responsabilità degli altri. Esprimere i sentimenti.',
            behavior: 'Evitare l\'eccesso di lavoro che logora ossa e articolazioni. Non reprimere le emozioni (si depositano nelle articolazioni). Cura della postura. Evitare il freddo eccessivo.'
        },
        Acuario: {
            organs: ['Caviglie', 'Sistema circolatorio', 'Sistema nervoso', 'Ghiandole linfatiche'],
            system: 'Circolatorio e nervoso',
            vulnerabilities: ['Problemi circolatori', 'Vene varicose', 'Edema'],
            strengths: ['Innovazione', 'Circolazione alternativa', 'Guarigione energetica'],
            diet: 'Evitare cibi molto salati che trattengono i fluidi. Preferire potassio: banana, spinaci, avocado. Bere molta acqua. Evitare l\'alcol che colpisce la circolazione.',
            exercise: 'Esercizio che migliora la circolazione: camminata, ciclismo, yoga invertito. Evitare di stare seduti a lungo. Muovere frequentemente gambe e caviglie.',
            emotions: 'Coltivare la connessione sociale senza esaurirsi. Evitare l\'isolamento per eccesso di indipendenza. Mantenere legami emotivi sani. Non idealizzare le relazioni.',
            behavior: 'Evitare il sedentarismo che colpisce la circolazione. Non ignorare i segnali del corpo restando nella mente. Evitare cambiamenti bruschi di temperatura. Cura delle caviglie.'
        },
        Piscis: {
            organs: ['Piedi', 'Sistema linfatico', 'Ghiandola pineale', 'Sistema immunitario'],
            system: 'Linfatico e immunologico',
            vulnerabilities: ['Problemi ai piedi', 'Edema linfatico', 'Allergie'],
            strengths: ['Intuizione', 'Compassione', 'Guarigione alternativa'],
            diet: 'Evitare alcol, droghe, cibi molto processati. Preferire cibi leggeri, frutta, verdura, acqua pura. Evitare eccesso di zucchero. Mangiare con consapevolezza.',
            exercise: 'Camminare a piedi nudi sulla terra (grounding), yoga, tai chi, nuoto delicato. Evitare ambienti tossici. L\'esercizio nella natura è ideale.',
            emotions: 'Coltivare confini sani e discernimento. Non assorbire le emozioni degli altri. Non fuggire dalla realtà con le sostanze. Meditare e connettersi con la natura.',
            behavior: 'Evitare tutti i tipi di dipendenze (sostanze, persone, situazioni). Non fuggire dai problemi. Evitare il vittimismo. Stabilire routine di cura di sé.'
        }
    },

    ELEMENT_HEALTH: {
        Fuego: {
            description: 'Segni di fuoco (Aries, Leone, Sagittario): energia, vitalità e sistema cardiovascolare.',
            strengths: ['Energia vitale', 'Recupero rapido', 'Forza'],
            weaknesses: ['Infiammazioni', 'Febbre', 'Ustioni', 'Ipertensione'],
            recommendations: ['Esercizio regolare senza eccessi', 'Controllo del temperamento', 'Cura del cuore e della pressione sanguigna'],
            diet: 'Evitare cibi molto caldi, piccanti, grassi saturi e ricchi di alcol. Preferire frutti rossi, verdure verdi, pesce, olio d\'oliva. Pasti leggeri e freschi. Evitare cene pesanti.',
            exercise: 'Attività dinamiche ma equilibrate: camminare, nuotare, ballare, arti marziali leggere. Evitare il sovraccarico cardiaco. Esercizi al mattino o nel pomeriggio, evitare il calore estremo.',
            emotions: 'Coltivare pazienza e tolleranza. Evitare la rabbia irrisolta che danneggia il cuore. Praticare respirazione profonda, meditazione calmante. Esprimere le emozioni senza aggressività.',
            behavior: 'Evitare impulsività e eccessiva sicurezza. Moderare la competitività che genera stress. Fare attenzione agli incidenti. Evitare di lavorare fino all\'esaurimento.'
        },
        Tierra: {
            description: 'Segni di terra (Toro, Vergine, Capricorno): stabilità, struttura e sistema digestivo.',
            strengths: ['Resistenza fisica', 'Stabilità', 'Buon metabolismo'],
            weaknesses: ['Problemi digestivi', 'Stitichezza', 'Problemi articolari'],
            recommendations: ['Dieta equilibrata e costante', 'Esercizio regolare', 'Cura di ossa e articolazioni'],
            diet: 'Evitare cibi processati, eccesso di glutine, zucchero raffinato. Preferire fibre, verdure, frutta, cereali integrali. Mangiare a orari regolari. Evitare l\'eccesso di latticini.',
            exercise: 'Esercizio a basso impatto e costante: camminata, yoga, Pilates, giardinaggio. Rafforzare articolazioni e ossa. Evitare sport ad alto impatto.',
            emotions: 'Coltivare flessibilità e adattabilità. Evitare l\'ostinazione e l\'attaccamento eccessivo. Non reprimere le emozioni (si depositano nella digestione e nelle articolazioni). Esprimere i sentimenti.',
            behavior: 'Evitare il lavoro di routine eccessivo. Non resistere al cambiamento. Evitare l\'autocritica eccessiva. Cura della postura e delle articolazioni. Non trascurare le abitudini del sonno.'
        },
        Aire: {
            description: 'Segni d\'aria (Gemelli, Bilancia, Acquario): mente, comunicazione e sistema nervoso.',
            strengths: ['Agilità mentale', 'Adattabilità', 'Comunicazione'],
            weaknesses: ['Ansia', 'Insonnia', 'Problemi respiratori'],
            recommendations: ['Meditazione e mindfulness', 'Esercizi di respirazione', 'Riposo mentale regolare'],
            diet: 'Evitare eccesso di caffeina, zucchero, pasti leggeri senza sostanza. Preferire agrumi, frutta secca, pesce, verdure. Mangiare lentamente e in un ambiente tranquillo.',
            exercise: 'Nuoto, camminata, ciclismo, yoga. Esercizi di respirazione profonda. Evitare sport di contatto che colpiscono le spalle. Stirare braccia e collo.',
            emotions: 'Coltivare la concentrazione e il silenzio. Evitare la dispersione mentale. Meditare 10 minuti al giorno. Esprimere i pensieri per iscritto. Evitare di parlare troppo.',
            behavior: 'Evitare di fare molte cose contemporaneamente. Non sovraccaricare la mente. Evitare l\'insonnia per pensieri accelerati. Fare pause dagli schermi. Connettersi con il corpo.'
        },
        Agua: {
            description: 'Segni d\'acqua (Cancro, Scorpione, Pesci): emozioni, intuizione e sistema linfatico.',
            strengths: ['Intuizione', 'Empatia', 'Guarigione emotiva'],
            weaknesses: ['Ritenzione idrica', 'Problemi emotivi', 'Depressione'],
            recommendations: ['Gestire le emozioni con la terapia', 'Idratazione adeguata', 'Esprimere i sentimenti in modo sano'],
            diet: 'Evitare alcol, cibi molto freddi, eccesso di latticini. Preferire zuppe, brodi, frutta, verdure cotte. Bere molta acqua. Evitare di mangiare per ansia emotiva.',
            exercise: 'Nuoto, camminata vicino all\'acqua, yoga delicato, tai chi. Esercizi nella natura. Evitare sport molto intensi. Galleggiare nell\'acqua è molto terapeutico.',
            emotions: 'Coltivare la sicurezza emotiva e i confini sani. Non assorbire le emozioni degli altri. La terapia emotiva è essenziale. Esprimere i sentimenti senza vittimismo.',
            behavior: 'Evitare dipendenze e fughe dalla realtà. Non isolarsi emotivamente. Evitare il pessimismo. Condividere i sentimenti con persone fidate. Stabilire routine.'
        }
    },

    ASPECT_TYPE_CONCEPTS: {
        Conjunción: {
            symbol: '☌',
            concept: 'La congiunzione si verifica quando due pianeti si trovano allo stesso punto zodiacale (0°). Le loro energie si fondono, creando una forza unificata che amplifica entrambe le qualità. È come due strumenti che suonano la stessa nota: il suono viene amplificato.',
            healthMeaning: 'In salute, la congiunzione intensifica le funzioni di entrambi i pianeti. Può generare vitalità straordinaria se i pianeti sono armoniosi, o sovraccarico se sono in tensione.',
            risks: 'Sovraccarico nei sistemi governati da entrambi i pianeti. Tendenza a esagerare le qualità. Esaurimento per intensità prolungata.',
            wellness: 'Canalizzare l\'energia combinata in pratiche concrete. Stabilire ritmi che permettano riposo tra i picchi di attività. Usare l\'intensità come motore di trasformazione positiva.'
        },
        Sextil: {
            symbol: '✦',
            concept: 'Il sestile (60°) crea un angolo di opportunità e flusso dolce. Le energie planetarie si sostengono a vicenda senza sforzo, come due amici che si completano naturalmente.',
            healthMeaning: 'Indica talenti naturali per il benessere. Il corpo ha facilità nell\'equilibrare i sistemi coinvolti. È un aspetto di risorse e facilità disponibili.',
            risks: 'Il rischio è la compiacenza: poiché fluisce facilmente, può essere ignorato fino a quando non si perde. Non genera crisi ma può mascherare squilibri sottili.',
            wellness: 'Sfruttare consapevolmente le facilità offerte. Coltivare abitudini positive senza aspettare che emergano problemi. Usare l\'armonia come base per costruire routine sane.'
        },
        Cuadratura: {
            symbol: '□',
            concept: 'La quadratura (90°) genera tensione costruttiva tra due forze che si sfidano a vicenda. È come un muscolo che si rafforza attraverso la resistenza: l\'attrito produce crescita.',
            healthMeaning: 'In salute, la quadratura indica aree dove il corpo deve apportare regolamenti. Non è negativa: è il meccanismo naturale di adattamento. Tuttavia, la tensione prolungata può manifestarsi con sintomi.',
            risks: 'Infiammazioni, sforzi eccessivi, crisi acute quando la tensione non viene gestita. Stress accumulato che colpisce i sistemi governati da entrambi i pianeti. Tendenza a ignorare i segnali fino a quando non diventano urgenti.',
            wellness: 'Pratiche regolari di rilascio della tensione (esercizio, massaggio, respirazione). Imparare ad ascoltare i segnali precoci del corpo. Trasformare la tensione in motivazione per migliorare le abitudini.'
        },
        Trígono: {
            symbol: '△',
            concept: 'Il trigono (120°) è l\'aspetto più armonioso. Le energie fluono con naturalezza e grazia, come un fiume che segue il suo corso senza ostacoli. Rappresenta talenti innati e facilità.',
            healthMeaning: 'Indica equilibrio naturale tra i sistemi governati dai pianeti. Il corpo ha una capacità innata di mantenere il benessere in quelle aree.',
            risks: 'Il rischio è la passività: essendo così armonioso, non si intraprende l\'azione preventiva. L\'eccessiva facilità può portare alla negligenza.',
            wellness: 'Mantenere le pratiche che funzionano senza cambiare ciò che non è rotto. Usare l\'armonia come piattaforma per espandersi verso aree più sfidanti. Gratitudine e manutenzione consapevole.'
        },
        Oposición: {
            symbol: '☍',
            concept: 'L\'opposizione (180°) crea polarità: due forze opposte che cercano equilibrio. È come il giorno e la notte, o l\'inspirazione e l\'espirazione. La consapevolezza del polo opposto amplia la prospettiva.',
            healthMeaning: 'In salute, l\'opposizione indica la necessità di equilibrare due sistemi che lavorano in direzioni opposte. Può generare fluttuazioni o alternanza di sintomi.',
            risks: 'Polarizzazione estrema: eccesso di un polo e deficit dell\'altro. Oscillazioni emotive e fisiche. Difficoltà nel mantenere la stabilità. Possibili crisi di consapevolezza.',
            wellness: 'Pratiche di equilibrio: yoga, meditazione, respirazione bilaterale. Riconoscere entrambi gli estremi senza giudizio. Cercare il punto medio in alimentazione, esercizio e riposo.'
        }
    },

    ASPECT_PLANET_HEALTH: {
        'Sol-Luna': {
            concept: 'L\'unione del Sole (vitalità, sé cosciente) e della Luna (emozioni, istinti) rappresenta l\'integrazione di corpo e anima. È l\'aspetto più intimo dell\'identità vitale.',
            risks: 'Squilibrio tra volontà e bisogni emotivi. Tensione tra ciò che si "deve" fare e ciò che il corpo richiede. Problemi cardiaci da stress emotivo non elaborato. Fluttuazioni di energia.',
            wellness: 'Ascoltare sia la logica che l\'intuizione. Praticare mindfulness per integrare corpo e mente. Routine che nutrono sia la vitalità che la sicurezza emotiva. Terapia che unisce ragione e emozione.'
        },
        'Sol-Mercurio': {
            concept: 'Il Sole con Mercurio unisce la vitalità con la mente. Rappresenta l\'espressione del sé attraverso il pensiero e la comunicazione.',
            risks: 'Sovraccarico mentale che prosciuga la vitalità. Tensione nei sistemi nervoso e respiratorio. Difficoltà a "spegnere" la mente. Emicranie per eccesso di attività mentale.',
            wellness: 'Attività che canalizzano la mente in modo creativo. Esercizio fisico per rilasciare la tensione mentale. Tecniche di respirazione e rilassamento. Comunicazione assertiva come valvola di sfogo.'
        },
        'Sol-Venus': {
            concept: 'Il Sole con Venere unisce la forza vitale con il piacere e l\'armonia. Indica una costituzione che cerca il benessere attraverso la bellezza e l\'equilibrio.',
            risks: 'Eccessi sensoriali (cibo, comfort, piacere). Problemi renali o articolari per eccessiva indulgenza. Squilibri ormonali. Tendenza alla pigrizia.',
            wellness: 'Piacere consapevole: godere senza esagerare. Attività estetiche che nutrono l\'anima (arte, musica, natura). Equilibrio tra godimento e disciplina. Cura del corpo come atto di amore di sé.'
        },
        'Sol-Marte': {
            concept: 'Il Sole con Marte è la combinazione di vitalità e azione. Rappresenta energia pura, iniziativa e forza di volontà. È fuoco con fuoco.',
            risks: 'Surriscaldamento, infiammazioni, febbre, incidenti per impulsività. Sforzi fisici eccessivi. Tendenza all\'impatienza che genera stress. Ipertensione.',
            wellness: 'Attività fisiche intense ma controllate (sport, arti marziali). Canalizzare l\'energia in progetti concreti. Imparare a dosare la forza. Riposo attivo.'
        },
        'Sol-Júpiter': {
            concept: 'Il Sole con Giove espande la vitalità e l\'ottimismo. Indica una costituzione robusta con tendenza all\'espansione.',
            risks: 'Eccessi per eccesso di ottimismo. Sovrappeso, problemi epatici, infiammazioni per eccesso. Tendenza a sottovalutare i problemi di salute.',
            wellness: 'Moderazione come virtù. Attività che espandono la consapevolezza senza esagerare (viaggi, studio, spiritualità). Alimentazione equilibrata. Controlli regolari.'
        },
        'Sol-Saturno': {
            concept: 'Il Sole con Saturno confronta la vitalità con la struttura e i limiti. Indica una costituzione che si rafforza con la disciplina ma può indebolirsi per la rigidità.',
            risks: 'Stanchezza cronica, problemi articolari, depressione, sensazione di invecchiamento precoce. Limiti rigidi che reprimono la vitalità.',
            wellness: 'Disciplina prolungata ma flessibile. Esercizio a basso impatto e costante (camminata, nuoto). Nutrizione regolare e strutturata. Accettazione dei limiti come forza.'
        },
        'Sol-Urano': {
            concept: 'Il Sole con Urano unisce la vitalità con l\'innovazione. Indica un corpo che funziona in modo irregolare ma con picchi di energia straordinari.',
            risks: 'Cambiamenti improvvisi di energia. Aritmie, problemi circolatori, sobbalzi. Tendenza a ignorare il corpo restando "nella mente".',
            wellness: 'Routine flessibili: struttura con spazio per la spontaneità. Esercizi vari e stimolanti. Ascoltare il corpo anche quando la mente è occupata.'
        },
        'Sol-Neptuno': {
            concept: 'Il Sole con Nettuno unisce la vitalità con l\'etereo. Indica una costituzione sensibile che può essere permeabile a influenze esterne.',
            risks: 'Indebolimento della vitalità per confusione emotiva. Tendenza alle dipendenze. Sensibilità estrema a sostanze, ambienti e persone. Malattie difficili da diagnosticare.',
            wellness: 'Pratiche di grounding (camminare a piedi nudi, natura). Confini emotivi chiari. Evitare sostanze tossiche. Spiritualità come forza, non come fuga.'
        },
        'Sol-Plutón': {
            concept: 'Il Sole con Plutone unisce la forza vitale con la trasformazione profonda. Indica una capacità di rigenerazione straordinaria ma attraverso le crisi.',
            risks: 'Crisi di potere e controllo che colpiscono la salute. Problemi riproduttivi, sessuali o di eliminazione. Tendenza a trattenere tensioni profonde. La malattia come processo di trasformazione.',
            wellness: 'Accettare le crisi come opportunità di trasformazione. Terapia profonda (psicologia, somatica). Esercizio che rilascia le tensioni accumulate. Rinascita attraverso l\'azione consapevole.'
        },
        'Luna-Mercurio': {
            concept: 'La Luna con Mercurio unisce le emozioni con la mente. Indica una persona i cui pensieri sono profondamente influenzati dai propri sentimenti.',
            risks: 'Ansia, nervosismo, insonnia. Problemi digestivi da stress emotivo. Tensione alle spalle e al collo. Difficoltà a dormire per pensieri accelerati.',
            wellness: 'Scrittura terapeutica (journaling). Meditazione mindfulness. Respirazione diaframmatica. Espressione verbale delle emozioni. Routine che calmano la mente.'
        },
        'Luna-Venus': {
            concept: 'La Luna con Venere unisce l\'emotività con il piacere. Indica una costituzione che cerca il benessere attraverso la cura e la sensualità.',
            risks: 'Ritenzione idrica, problemi gastrici. Marcate variazioni ormonali. Tendenza all\'eccesso nel cibo o nel comfort. Sensibilità ai cambiamenti del ciclo.',
            wellness: 'Rituali di cura di sé. Bagni terapeutici. Contatto con la natura. Cibo che nutre sia il corpo che i sensi. Arte come guarigione.'
        },
        'Luna-Marte': {
            concept: 'La Luna con Marte unisce le emozioni con l\'azione. Indica una persona le cui risposte emotive sono rapide e intense.',
            risks: 'Irritabilità, infiammazioni, coliche. Crisi emotive acute. Tendenza a reazioni impulsive che generano stress fisico. Problemi gastrici.',
            wellness: 'Attività fisica regolare per canalizzare l\'energia emotiva. Tecniche di regolazione emotiva. Esercizi di respirazione nei momenti di crisi. Canalizzare l\'impulsività nello sport.'
        },
        'Luna-Júpiter': {
            concept: 'La Luna con Giove espande l\'emotività e la capacità di nutrire. Indica una costituzione generosa ma predisposta all\'eccesso.',
            risks: 'Sovrappeso, ritenzione idrica, problemi epatici. Eccessi emotivi (mangiare per sentimenti). Indulgenza eccessiva.',
            wellness: 'Alimentazione consapevole e nutriente. Attività che espandono la consapevolezza emotiva (terapia, spiritualità). Moderazione come pratica quotidiana. Nutrire gli altri senza trascurare sé stessi.'
        },
        'Luna-Saturno': {
            concept: 'La Luna con Saturno confronta le emozioni con la struttura. Indica una persona che reprime i propri sentimenti o li gestisce con estrema disciplina.',
            risks: 'Depressione, freddezza emotiva, problemi gastrici per la repressione. Invecchiamento precoce del sistema digestivo. Difficoltà a rilassarsi.',
            wellness: 'Permettere l\'espressione emotiva. Terapia che lavora sulla repressione. Routine che includono momenti di riposo emotivo. Contatto con la natura per addolcire la rigidità.'
        },
        'Mercurio-Venus': {
            concept: 'Mercurio con Venere unisce la mente con l\'estetica. Indica una persona che pensa con bellezza e comunica con armonia.',
            risks: 'Tensione nervosa per perfezionismo. Neuralgie, problemi respiratori lievi. Difficoltà a rilassarsi mentalmente.',
            wellness: 'Arte e musica come terapia. Comunicazione assertiva. Esercizi di rilassamento mentale. Attività creative che uniscono mente e sensibilità.'
        },
        'Mercurio-Marte': {
            concept: 'Mercurio con Marte unisce la mente con l\'azione. Indica una mente rapida e combattiva, predisposta al nervosismo.',
            risks: 'Emicranie, ansia, insonnia. Tensione alla mandibola e al collo. Parlare troppo o troppo velocemente. Discussione compulsiva.',
            wellness: 'Sport che coinvolgono strategia (scacchi, sport di squadra). Scrittura. Esercizi di rilassamento della mandibola. Respirazione consapevole.'
        },
        'Mercurio-Júpiter': {
            concept: 'Mercurio con Giove espande la mente e la comunicazione. Indica una persona con grande capacità intellettuale ma tendenza a disperdersi.',
            risks: 'Sovraccarico mentale, ansia per eccesso di informazioni. Nervosismo per sovrastimolazione.',
            wellness: 'Filosofia e studio come pratiche di benessere. Meditazione. Semplificare le informazioni consumate. Imparare a dire no all\'eccesso mentale.'
        },
        'Mercurio-Saturno': {
            concept: 'Mercurio con Saturno unisce la mente con la struttura. Indica una persona metodica ma predisposta alla rigidità mentale.',
            risks: 'Ansia cronica, pensieri ossessivi, tensione persistente. Difficoltà a rilassare la mente. Neuralgie.',
            wellness: 'Routine mentali strutturate ma flessibili. Meditazione di osservazione. Esercizio fisico per rilasciare la tensione mentale. Terapia cognitiva.'
        },
        'Venus-Marte': {
            concept: 'Venere con Marte unisce il piacere con l\'azione. Indica una costituzione che cerca l\'equilibrio tra godimento e disciplina.',
            risks: 'Squilibri ormonali, problemi renali, infiammazioni. Tensione tra piacere e dovere che genera stress.',
            wellness: 'Attività che uniscono piacere e movimento (danza, escursioni). Equilibrio tra attività e riposo. Cibo che nutre senza privare. Relazioni sane.'
        },
        'Venus-Júpiter': {
            concept: 'Venere con Giove espande il piacere e l\'armonia. Indica una costituzione che cerca il benessere attraverso l\'abbondanza.',
            risks: 'Eccessi in cibo, bevande o comfort. Sovrappeso, problemi articolari. Indulgenza eccessiva.',
            wellness: 'Piacere consapevole. Attività che espandono i sensi senza esagerare (arte, natura, musica). Moderazione come virtù.'
        },
        'Venus-Saturno': {
            concept: 'Venere con Saturno confronta il piacere con i limiti. Indica una persona che può reprimere i propri piaceri o avere un rapporto complesso con il godimento.',
            risks: 'Depressione, freddezza, problemi articolari. Difficoltà a godere. Repressione dei bisogni sensoriali.',
            wellness: 'Permettersi il piacere senza colpa. Terapia per lavorare sulla repressione. Attività sensoriali delicate (massaggio, musica). Cura di sé come pratica.'
        },
        'Marte-Júpiter': {
            concept: 'Marte con Giove amplifica l\'azione e l\'espansione. Indica un\'energia fisica enorme ma predisposta all\'eccesso.',
            risks: 'Sforzi eccessivi, incidenti, infiammazioni. Eccesso di attività che genera esaurimento. Tendenza a esagerare.',
            wellness: 'Canalizzare l\'energia in progetti concreti. Sport intensi ma controllati. Dosaggio della forza. Riposo attivo.'
        },
        'Marte-Saturno': {
            concept: 'Marte con Saturno confronta l\'azione con i limiti. Indica un\'energia che si rafforza attraverso la resistenza ma può bloccarsi.',
            risks: 'Blocchi energetici, dolori articolari, stanchezza cronica. Tensione tra il volere e il potere. Frustrazione che si somatizza.',
            wellness: 'Esercizio di resistenza progressiva. Accettare i limiti senza arrendersi. Terapia di rilascio della tensione. Disciplina con flessibilità.'
        },
        'Júpiter-Saturno': {
            concept: 'Giove con Saturno unisce espansione e struttura. Indica la ricerca di equilibrio tra crescita e disciplina.',
            risks: 'Fluttuazioni di peso, problemi metabolici, crisi di significato. Tensione tra ottimismo e pessimismo che colpisce la salute.',
            wellness: 'Pianificazione a lungo termine per il benessere. Equilibrio tra disciplina e piacere. Filosofia di vita sana. Costanza con flessibilità.'
        }
    },
    PRACTICAL_ADVICE: {
        Sol: { diet: 'Evitare grassi saturi e eccesso di sale. Preferire frutti rossi, aglio, pesce. Pasti leggeri.', exercise: 'Esercizio cardiovascolare moderato: camminare, ballare. Evitare sforzi eccessivi. Rafforzare la schiena.', emotions: 'Coltivare umiltà e generosità. Evitare orgoglio ed eccesso di ego che stressano il cuore.', behavior: 'Non lavorare fino all\'esaurimento. Curare la postura. Evitare situazioni di pressione costante.' },
        Luna: { diet: 'Evitare cibi molto freddi o acidi. Preferire zuppe, cereali, pasti confortanti. Non mangiare per ansia.', exercise: 'Nuoto, yoga delicato, camminata vicino all\'acqua. Evitare esercizi intensi dopo aver mangiato.', emotions: 'Coltivare sicurezza emotiva. Evitare il vittimismo. Esprimere i sentimenti. La terapia emotiva è benefica.', behavior: 'Non isolarsi. Evitare di rifugiarsi nel cibo. Condividere le emozioni. Mantenere orari regolari di sonno.' },
        Mercurio: { diet: 'Evitare eccesso di caffeina e zucchero. Preferire agrumi, sedano, pesce. Mangiare in ambiente tranquillo.', exercise: 'Nuoto, camminata, respirazione profonda. Stirare spalle e braccia. Evitare sovraccarico mentale.', emotions: 'Coltivare concentrazione e silenzio. Meditare 10 minuti al giorno. Esprimere i pensieri per iscritto.', behavior: 'Non fare molte cose contemporaneamente. Evitare insonnia per mente accelerata. Fare pause dagli schermi.' },
        Venus: { diet: 'Evitare eccesso di sale e dolci. Bere molta acqua. Preferire frutta, verdura, cibi freschi.', exercise: 'Yoga, danza, camminata. Esercizi di equilibrio e zona lombare. Evitare il sedentarismo.', emotions: 'Coltivare indipendenza. Evitare accontentare tutti. Prendere decisioni senza timore. Cercare l\'armonia interiore.', behavior: 'Non reprimere i bisogni. Evitare eccesso di dolci. Cura dei reni con buona idratazione.' },
        Marte: { diet: 'Evitare cibi molto piccanti e caldi. Preferire rinfrescanti: cetriolo, lattuga, anguria. Evitare alcol.', exercise: 'Sport intensi ma con cautela: arti marziali, palestra. Riscaldarsi bene. Evitare lesioni.', emotions: 'Coltivare pazienza e tolleranza. Evitare rabbia irrisolta. Canalizzare l\'energia in azione costruttiva.', behavior: 'Evitare impulsività. Non assumere rischi inutili. Fare attenzione agli incidenti. Moderare la competitività.' },
        Júpiter: { diet: 'Evitare eccessi di ogni tipo: cibo, bevande, dolci. Preferire verdure, frutta, pasti moderati.', exercise: 'Esercizio moderato e costante. Camminata, nuoto, yoga. Evitare sovrappeso per eccessi.', emotions: 'Coltivare gratitudine e moderazione. Evitare eccesso di ottimismo che porta alla trascuratezza. Mantenere gli impegni.', behavior: 'Evitare eccessi alimentari e di bevande. Non sovraccaricarsi. Cura del fegato. Mantenere la disciplina.' },
        Saturno: { diet: 'Evitare cibi molto freddi. Preferire brodi, calcio, cibi caldi. Evitare eccesso di sale.', exercise: 'Esercizio a basso impatto: camminata, yoga. Rafforzare le articolazioni. Evitare alto impatto.', emotions: 'Coltivare gioia e spontaneità. Evitare pessimismo cronico. Non caricare responsabilità altrui.', behavior: 'Evitare eccesso di lavoro. Non reprimere le emozioni (si depositano nelle articolazioni). Curare la postura.' },
        Urano: { diet: 'Evitare cibi molto salati. Preferire potassio: banana, spinaci. Bere molta acqua.', exercise: 'Camminata, ciclismo, yoga. Muovere frequentemente le gambe. Evitare sedentarismo prolungato.', emotions: 'Coltivare connessione sociale. Evitare isolamento per eccesso di indipendenza. Mantenere legami.', behavior: 'Non ignorare i segnali del corpo. Evitare cambiamenti bruschi di temperatura. Cura delle caviglie e circolazione.' },
        Neptuno: { diet: 'Evitare alcol e sostanze. Preferire cibi leggeri, frutta, acqua pura. Mangiare con consapevolezza.', exercise: 'Camminare a piedi nudi, yoga, nuoto delicato. Esercitarsi nella natura. Evitare ambienti tossici.', emotions: 'Coltivare confini sani. Non assorbire le emozioni degli altri. Meditare e connettersi con la natura.', behavior: 'Evitare tutti i tipi di dipendenze. Non fuggire dai problemi. Stabilire routine di cura di sé.' },
        Plutón: { diet: 'Evitare cibi molto pesanti e processati. Preferire cibi disintossicanti: limone, aglio, verdure verdi.', exercise: 'Esercizio intenso ma equilibrato. Libera energia intensa. Nuoto, palestra, arti marziali.', emotions: 'Coltivare fiducia e vulnerabilità. Evitare gelosia, possessività, risentimento. Trasformare in creatività.', behavior: 'Evitare segretezza e manipolazione. Non controllare tutto. Canalizzare l\'intensità in progetti trasformativi.' }
    },
    houseNames: ['Identità', 'Risorse', 'Comunicazione', 'Casa', 'Creatività', 'Salute', 'Relazioni', 'Trasformazione', 'Filosofia', 'Carriera', 'Amicizie', 'Inconscio'],
    PLANET_NATURE: {
        Sol: 'Caldo secco', Luna: 'Freddo umido', Mercurio: 'Variabile',
        Venus: 'Freddo umido', Marte: 'Caldo secco', Júpiter: 'Caldo umido',
        Saturno: 'Freddo secco', Urano: 'Freddo secco (variabile)', Neptuno: 'Freddo umido (etereo)',
        Plutón: 'Freddo secco (variabile)'
    },
    MODALITY_HEALTH: {
        Cardinal: { description: 'Segni cardinali: iniziano cicli, energie di inizio.', healthFocus: 'Testa, stomaco, reni, ossa', recommendations: 'Tendenza a problemi acuti o insorgenza di condizioni' },
        Fijo: { description: 'Segni fissi: mantengono e stabilizzano.', healthFocus: 'Gola, cuore, riproduttivo, circolatorio', recommendations: 'Tendenza a condizioni croniche o stasi' },
        Mutable: { description: 'Segni mutabili: si adattano e trasformano.', healthFocus: 'Polmoni, intestini, fegato, piedi', recommendations: 'Tendenza a condizioni variabili o adattive' }
    },
    HOUSE_HEALTH: {
        1: { name: 'Ascendente', area: 'Costituzione e vitalità fisica', healthFocus: 'Stato generale dell\'organismo, capacità di affrontare gli squilibri, aspetto fisico', keywords: 'Testa, viso, prime impressioni, vitalità' },
        2: { name: 'Risorse', area: 'Autostima, stabilità', healthFocus: 'Valori personali, stabilità materiale, autostima', keywords: 'Beni materiali, stabilità finanziaria, autostima' },
        3: { name: 'Comunicazione', area: 'Mente, nervi', healthFocus: 'Comunicazione, trasporti, fratelli, apprendimento', keywords: 'Comunicazione, trasporti, fratelli, apprendimento' },
        4: { name: 'Casa', area: 'Emozioni, radici', healthFocus: 'Famiglia, casa, radici, sicurezza emotiva', keywords: 'Famiglia, casa, radici, sicurezza emotiva' },
        5: { name: 'Creatività', area: 'Piacere, figli', healthFocus: 'Creatività, figli, piacere, romanticismo', keywords: 'Creatività, figli, piacere, romanticismo' },
        6: { name: 'Salute', area: 'Malattia, abitudini e salute quotidiana', healthFocus: 'La casa più importante per l\'analisi della salute. Malattia, lavoro, routine, servizio, animali domestici', keywords: 'Salute, lavoro, routine, servizio, animali domestici' },
        7: { name: 'Relazioni', area: 'Equilibrio, partner', healthFocus: 'Partner, partner, relazioni, equilibrio', keywords: 'Partner, partner, relazioni, equilibrio' },
        8: { name: 'Trasformazione', area: 'Crisi, processi profondi, rigenerazione', healthFocus: 'Trasformazione, sessualità, morte, rinascita. Non necessariamente malattia ma situazioni di trasformazione o crisi', keywords: 'Trasformazione, sessualità, morte, rinascita' },
        9: { name: 'Filosofia', area: 'Educazione, espansione', healthFocus: 'Filosofia, educazione, viaggi, espansione degli orizzonti', keywords: 'Filosofia, educazione, viaggi, espansione degli orizzonti' },
        10: { name: 'Carriera', area: 'Obiettivi, status', healthFocus: 'Carriera, reputazione, obiettivi, status', keywords: 'Carriera, reputazione, obiettivi, status' },
        11: { name: 'Amicizie', area: 'Gruppi, innovazione', healthFocus: 'Amicizie, gruppi, cause sociali, innovazione', keywords: 'Amicizie, gruppi, cause sociali, innovazione' },
        12: { name: 'Inconscio', area: 'Malattie nascoste, isolamento', healthFocus: 'Malattie nascoste, isolamento, condizioni difficili da identificare, guarigione profonda, spiritualità', keywords: 'Inconscio, spiritualità, sogni, guarigione profonda' }
    },
    TRANSIT_HEALTH_INTERPRETATIONS: {
        'Sol': {
            'Cuadratura': { level: 'III', desc: 'Energia ridotta, sensazione di esaurimento, necessità di riposo, maggiore sensibilità ai processi cronici, sovraccarico della struttura corporea.' },
            'Oposición': { level: 'III', desc: 'Energia opposta, necessità di equilibrio vitale, confronto con i limiti fisici.' },
            'Trígono': { level: 'I', desc: 'Periodo di buona vitalità, energia favorevole, recupero facilitato.' },
            'Sextil': { level: 'I', desc: 'Opportunità per migliorare la salute, energia disponibile per il benessere.' },
            'Conjunción': { level: 'II', desc: 'Attivazione della vitalità, energia concentrata, periodo di maggiore intensità vitale.' }
        },
        'Luna': {
            'Cuadratura': { level: 'II', desc: 'Fluttuazioni emotive che influenzano la digestione, sensibilità alterata, possibili ritenzioni idriche.' },
            'Oposición': { level: 'II', desc: 'Necessità di equilibrio emotivo, possibili alterazioni del sonno.' },
            'Trígono': { level: 'I', desc: 'Equilibrio emotivo favorevole, buona capacità di adattamento.' },
            'Conjunción': { level: 'II', desc: 'Periodo di alta sensibilità emotiva e fisica.' }
        },
        'Mercurio': {
            'Cuadratura': { level: 'II', desc: 'Nervosismo, ansia, insonnia, tensione alle spalle, problemi respiratori.' },
            'Oposición': { level: 'II', desc: 'Mentalità dispersa, difficoltà a rilassarsi, tensione nervosa.' },
            'Trígono': { level: 'I', desc: 'Mente chiara, buona capacità di concentrazione, equilibrio nervoso.' },
            'Conjunción': { level: 'II', desc: 'Attivazione mentale intensa, possibile sovraccarico nervoso.' }
        },
        'Venus': {
            'Cuadratura': { level: 'II', desc: 'Squilibri ormonali, problemi renali, dolori articolari.' },
            'Trígono': { level: 'I', desc: 'Armonia corporea, benessere generale, equilibrio ormonale.' },
            'Conjunción': { level: 'I', desc: 'Periodo di piacere sensoriale e benessere.' }
        },
        'Marte': {
            'Cuadratura': { level: 'III', desc: 'Processi infiammatori, sforzi eccessivi, incidenti minori, stati febbrili, eccesso di attività.' },
            'Oposición': { level: 'III', desc: 'Conflitto energetico, possibilità di incidenti o lesioni per eccesso.' },
            'Trígono': { level: 'I', desc: 'Buona energia fisica, capacità di azione positiva.' },
            'Sextil': { level: 'I', desc: 'Energia disponibile per attività fisica moderata.' },
            'Conjunción': { level: 'II', desc: 'Energia concentrata, possibilità di infiammazioni o sforzi eccessivi.' }
        },
        'Júpiter': {
            'Cuadratura': { level: 'II', desc: 'Eccessi, sovrappeso, problemi epatici, indulgenza.' },
            'Oposición': { level: 'II', desc: 'Necessità di moderazione, possibili problemi metabolici.' },
            'Trígono': { level: 'I', desc: 'Buon recupero, metabolismo favorevole, benessere generale.' },
            'Conjunción': { level: 'I', desc: 'Espansione della vitalità, buona salute generale.' }
        },
        'Saturno': {
            'Cuadratura': { level: 'IV', desc: 'Periodo di particolare attenzione. Energia ridotta, sensazione di esaurimento, necessità di riposo, maggiore sensibilità ai processi cronici, sovraccarico della struttura corporea, necessità di rivedere le abitudini.' },
            'Oposición': { level: 'IV', desc: 'Periodo di esigenza. Prove di resistenza, necessità di pazienza, possibili dolori articolari o ossei.' },
            'Trígono': { level: 'I', desc: 'Struttura stabile, maturità fisica, capacità di lavoro prolungato.' },
            'Sextil': { level: 'I', desc: 'Opportunità per rafforzare la struttura corporea.' },
            'Conjunción': { level: 'III', desc: 'Attivazione delle restrizioni, necessità di disciplina.' }
        },
        'Urano': {
            'Cuadratura': { level: 'III', desc: 'Eventi improvvisi, alterazioni inattese, crisi nervose, possibili incidenti.' },
            'Oposición': { level: 'III', desc: 'Cambiamenti bruschi nella salute, situazioni inattese.' },
            'Conjunción': { level: 'II', desc: 'Attivazione dell\'imprevisto, possibili cambiamenti improvvisi.' }
        },
        'Neptuno': {
            'Cuadratura': { level: 'II', desc: 'Confusione, sensibilità estrema, possibili intossicazioni, condizioni difficili da diagnosticare.' },
            'Oposición': { level: 'II', desc: 'Sensibilità aumentata, possibilità di dipendenze, confusione.' },
            'Conjunción': { level: 'II', desc: 'Periodo di alta sensibilità, necessità di discernimento.' }
        },
        'Plutón': {
            'Cuadratura': { level: 'IV', desc: 'Processi profondi di trasformazione, crisi che portano alla rigenerazione, possibili interventi chirurgici o processi di eliminazione.' },
            'Oposición': { level: 'III', desc: 'Confronto con processi profondi, trasformazione necessaria.' },
            'Conjunción': { level: 'III', desc: 'Attivazione di processi di trasformazione profonda.' }
        }
    }
};