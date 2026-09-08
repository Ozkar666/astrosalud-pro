export const HEALTH_SV = {
    PLANET_HEALTH: {
        Sol: {
            role: 'Allmän vitalitet, hjärta, cirkulation, återhämtningsförmåga',
            influence: 'Centrum för livsenergi, manlighet, självuttryck',
            impact: 'Bestämmer den allmänna vitala styrkan och återhämtningsförmågan',
            nature: 'Het och torr',
            chronic: 'Hjärtproblem, hypotension, feber, kroniska inflammationer',
            acute: 'Akut feber, värmeslag, plötsliga inflammationer, olyckor',
            keywords: 'Hjärta, rygg, cirkulation, feber, livsenergi'
        },
        Luna: {
            role: 'Kroppsvätskor, matsmältningssystemet, emotionella svängningar, sömn',
            influence: 'Känslor, instinkter, vanor, cykler',
            impact: 'Påverkar emotionell balans och kroppens naturliga cykler',
            nature: 'Kall och fuktig',
            chronic: 'Vätskeansamling, magproblem, sömnstörningar, oregelbundna cykler',
            acute: 'Illamående, kräkningar, kolik, akuta emotionella kriser, dåsighet',
            keywords: 'Mage, kroppsvatten, menstruationscykel, känslor, sömn'
        },
        Mercurio: {
            role: 'Nervsystemet, andning, mentala processer',
            influence: 'Sinne, kommunikation, nerver, perception',
            impact: 'Bestämmer mental smidighet och andningshälsa',
            nature: 'Variabel (kall och fuktig / het och torr)',
            chronic: 'Neuralgi, kronisk ångest, insomnia, bestående andningsproblem',
            acute: 'Migrän, ångestattacker, bronkspasmer, akut neuralgi',
            keywords: 'Nerver, lungor, andning, sinne, nervsystemet'
        },
        Venus: {
            role: 'Njurar, kroppens balans, venösa och hormonella systemet',
            influence: 'Nöje, harmoni, kärlek, värden',
            impact: 'Påverkar hormonell balans och reproduktiv hälsa',
            nature: 'Kall och fuktig',
            chronic: 'Njurproblem, hormonella obalanser, ledsmärtor, venösa problem',
            acute: 'Njurstenar, njurkolik, akuta hormonella obalanser',
            keywords: 'Struphuvud, njurar, fortplantning, nöje, venösa systemet'
        },
        Marte: {
            role: 'Muskler, blod, inflammation, feber, trauma, akuta processer',
            influence: 'Energi, handling, mod, konflikt',
            impact: 'Bestämmer muskelstyrka och predisposition för inflammation',
            nature: 'Het och torr',
            chronic: 'Kroniska inflammationer, reumatoid artrit, hypertoni, ärrbildning',
            acute: 'Feber, olyckor, sår, brännskärningar, skärningar, kontusioner, förstuvningar, akuta inflammationer',
            keywords: 'Muskler, blod, inflammation, feber, sår, olyckor'
        },
        Júpiter: {
            role: 'Lever, ämnesomsättning, tillväxt, expansion, överdrifter',
            influence: 'Expansion, överflöd, filosofi, lycka',
            impact: 'Påverkar ämnesomsättningen och benägenheten för viktproblem',
            nature: 'Het och fuktig',
            chronic: 'Obesitas, leverproblem, diabetes, högt kolesterol, överdriven tillväxt',
            acute: 'Akut övervikt, fettlever, matförgiftning, överdrifter',
            keywords: 'Lever, tillväxt, ämnesomsättning, obesitas, överdrifter'
        },
        Saturno: {
            role: 'Ben, leder, hud, kroniska processer och begränsningar',
            influence: 'Begränsning, struktur, mognad, karma',
            impact: 'Bestämmer benstrukturen och åldrandeprocessen',
            nature: 'Kall och torr',
            chronic: 'Artrit, osteoporos, hudproblem, cancer, prematur åldrande, depression',
            acute: 'Akuta ledsmärtor, styvhet, frakturer, fall, bensmärtor',
            keywords: 'Ben, leder, hud, åldrande, cancer, kroniska tillstånd'
        },
        Urano: {
            role: 'Nervsystemet, plötsliga händelser, oförväntade störningar',
            influence: 'Innovation, frihet, uppror, originalitet',
            impact: 'Kan indikera benägenhet för olyckor eller oförväntade tillstånd',
            nature: 'Kall och torr (variabel)',
            chronic: 'Kroniska nervproblem, hjärtförändringar, kramper, darrning',
            acute: 'Plötsliga olyckor, nervkriser, akuta smärtor, plötsliga cirkulationsproblem',
            keywords: 'Nerver, olyckor, plötsliga kriser, cirkulationssystemet, plötslig'
        },
        Neptuno: {
            role: 'Känslighet, intoxicering, förvirring, svår diagnosticerbara tillstånd',
            influence: 'Andlighet, illusion, medkänsla, förvirring',
            impact: 'Kan indikera extrem känslighet eller benägenhet för beroenden',
            nature: 'Kall och fuktig (etärisk)',
            chronic: 'Beroenden, kronisk trötthet, immunproblem, mental förvirring, hallucinationer, extrem känslighet',
            acute: 'Intoxicering, akuta hallucinationer, överdosering, plötslig förvirring, svåra allergier',
            keywords: 'Fötter, immunsystemet, beroenden, hallucinationer, förvirring, känslig'
        },
        Plutón: {
            role: 'Djupa processer, regenerering, eliminering och transformation',
            influence: 'Makt, djup transformation, död och återfödelse',
            impact: 'Indikerar potential för transformation och cellulär regenerering',
            nature: 'Kall och torr (variabel)',
            chronic: 'Degenerativa sjukdomar, cellulär transformation, djupa kriser, stora operationer',
            acute: 'Djupa kriser, akuta tillstånd, akut operation, kollaps, symbolisk död och återfödelse',
            keywords: 'Regenerering, transformation, kris, död och återfödelse, djup'
        }
    },

    SIGN_BODY_ASSOCIATIONS: {
        Aries: {
            organs: ['Huvud', 'Ansikte', 'Hjärna', 'Arterier', 'Blod'],
            system: 'Cirkulations- och nervsystemet',
            vulnerabilities: ['Huvudvärk', 'Migrän', 'Hypertoni', 'Huvudskador'],
            strengths: ['Livsenergi', 'Snabb återhämtning', 'Blodcirkulation'],
            diet: 'Undvik väldigt kryddrika och överdrivna stimulanser (kaffe, alkohol). Föredra röda frukter, melon, gurka, mynta. Lätta och friska måltider. Undvik väldigt varma rätter som ökar den inre värmen.',
            exercise: 'Hastighets- och kontaktsporter med försiktighet. Simma, cykla, mjuka kampsporter. Undvik överansträngning under hetaste delen av dagen. Värm upp ordentligt intensiv aktivitet.',
            emotions: 'Odlå tålamod och tolerans. Undvik frustration från förseningar. Träna djup andning och lugnande meditation. Oölad vrede leder till högt blodtryck.',
            behavior: 'Undvik impulssivitet vid viktiga beslut. Ta inte onödiga risker pga. övermod. Akta dig för huvudskador. Måttlig konkurrensväsende som skapar stress.'
        },
        Tauro: {
            organs: ['Nacke', 'Struphuvud', 'Sköldkörtlar', 'Larynx', 'Käke'],
            system: 'Endokrint och andningssystemet',
            vulnerabilities: ['Sköldkärtelproblem', 'Ont i halsen', 'Nackeknutor'],
            strengths: ['Fysisk uthållighet', 'Starkt immunsystem', 'Kraftfull röst'],
            diet: 'Undvik överdrivet godis, tunga mjölkprodukter och snabbmat. Föredra frukter, grönsaker, nötter, honung. Undväldigt kalla eller varma rätter. Tugga långsamt, prata inte under måltiden.',
            exercise: 'Konsekvent och rytmisk träning: promenera, yoga, tai chi. Undvik högkontaktsporter som belastar nacke och struphuvud. Stärk nacken med mjuka tänjningar.',
            emotions: 'Odlå flexibilitet och anpassningsförmåga. Undvik stubbornhet som orsakar frustration. Uttryck känslor högt istället för att hålla inne. Undvid girighet och överdriven tillgivenhet.',
            behavior: 'Undvik motstånd mot förändringar som skapar intern stress. Inte undertryck känslor (orsakar nackeknutor). Undvik överdriven arbete som leder till rutinburnout.'
        },
        Géminis: {
            organs: ['Lungor', 'Bronker', 'Axlar', 'Armar', 'Händer', 'Nervsystemet'],
            system: 'Andnings- och nervsystemet',
            vulnerabilities: ['Astma', 'Bronkit', 'Ångest', 'Insomnia'],
            strengths: ['Mental smidighet', 'Kommunikation', 'Anpassningsförmåga'],
            diet: 'Undvik tunga måltider som hindrar andningen. Föredra lätta livsmedel, citrusfrukter, selleri, morötter. Undvik överdrivet socker som stör nerverna. Ät i en lugn miljö.',
            exercise: 'Simma, promenera, cykla, yoga. Djupandningsövningar. Undvik kontaktsporter som belastar axlarna. Tänj regelbundet på armar och axlar.',
            emotions: 'Odlå koncentration och undvik splittrat fokus. Medvetenhetsträning för att lugna sinnet. Undvik att prata för mycket eller sprida rykten. Uttryck tankar skriftligen (dagbok).',
            behavior: 'Undvik att göra många saker samtidigt (orsakar ångest). Prata inte när du är upprörd. Undvik insomnia från mental överbelastning. Vila sinnet med tystnad.'
        },
        Cáncer: {
            organs: ['Mage', 'Bröstkorgen', 'Bröst', 'Kvinnliga fortplantningsorgan'],
            system: 'Matsmältnings- och fortplantningssystemet',
            vulnerabilities: ['Gastrit', 'Magsår', 'Vätskeansamling'],
            strengths: ['Intuition', 'Familjeskydd', 'Emotionell anpassning'],
            diet: 'Undvik väldigt kalla eller syra rätter som irriterar magen. Föredra soppor, sädesslag, tröstande livsmedel. Undvik överdrivet mjölk. Ät inte av emotionell oro.',
            exercise: 'Simma, promenera nära vatten, mjuk yoga. Undvik kontaktsporter. Simövningar. Undvig intensiv träning efter att ha ätit.',
            emotions: 'Odlå emotionell säkerhet och sund tillgivenhet. Undvik offerroll och emotionell manipulation. Uttryck känslor istället för att hålla inne. Emotionell terapi är mycket gynnsam.',
            behavior: 'Undvik att söka skydd i mat pga. stress. Isolera dig inte emotionellt. Undvik svärmningsstörningar som påverkar matsmältningen. Dela känslor med betrodda personer.'
        },
        Leo: {
            organs: ['Hjärta', 'Övre ryggen', 'Ryggraden', 'Cirkulation'],
            system: 'Hjärt- och kärlsystemet',
            vulnerabilities: ['Hjärtproblem', 'Ryggsmärtor', 'Hypertoni'],
            strengths: ['Vitalitet', 'Stark blodcirkulation', 'Uthållighet'],
            diet: 'Undvik mättat fett, överdrivet salt, alkohol. Föredra röda frukter, vitlök, ingefära, fisk. Undvik väldigt tunga måltider som belastar hjärtat. Ät mindre portioner.',
            exercise: 'Måttlig kardiovaskulär träning: promenera, dansa, simma. Undvik hjärtöverbelastning. Stärk övre ryggen med hållningsövningar. Undvik att lyfta för tungt.',
            emotions: 'Odlå ödmjukhet och generositet. Undvik stolthet som skapar hjärtstress. Ta inte allt personligt. Uttryck kärlek utan att kräva erkännande.',
            behavior: 'Undvik överarbete för att bevisa förmåga. Negligera inte ryggvården när du sitter. Undvik situationer som höjer blodtrycket. Måttlig konsumtion av stimulanser.'
        },
        Virgo: {
            organs: ['Tarmar', 'Matsmältningsystemet', 'Bukspottkörteln', 'Lever', 'Gallblåsan'],
            system: 'Matsmältnings- och ämnesomsättningssystemet',
            vulnerabilities: ['Tarmproblem', 'Irritabel tarmsyndrom', 'Diabetes'],
            strengths: ['Effektiv matsmältning', 'Uppmärksamhet på detaljer', 'Immunsystemet'],
            diet: 'Undvik bearbetade livsmedel, överdrivet gluten, raffinerat socker. Föredra fibrer, gröna grönsaker, probiotika. Ät vid regelbundna tider. Undvik överdrivet koffeinkonsumtion.',
            exercise: 'Promenera, yoga, pilates. Buks- och matsmältningsövningar. Undvik högkontaktsporter. Konsekvent och måttlig rutin.',
            emotions: 'Odlå acceptans och sund perfektionism. Undvik ångest från försöket att kontrollera allt. Meditera för att lugna det kritiska sinnet. Överdriv inte.',
            behavior: 'Undvik överdriven självkritik som orsakar matsmältningsångest. Inte undertryck känslor (påverkar tarmarna). Undvik överdrivet arbete som leder till nervös utmattning.'
        },
        Libra: {
            organs: ['Njurarna', 'Huden', 'Det endokrina systemet', 'Binjurekörtlar'],
            system: 'Utsöndrings- och endokrina systemet',
            vulnerabilities: ['Njurproblem', 'Hormonella obalanser', 'Hudproblem'],
            strengths: ['Hormonell balans', 'Frisk hud', 'Inre harmoni'],
            diet: 'Undvik överdrivet salt, socker, alkohol. Föredra rent vatten, frukter, grönsaker. Undvik starkt kryddade rätter. Drick tillräckligt med vatten för njurhälsan.',
            exercise: 'Yoga, dans, promenera. Balansövningar. Undvik väldigt intensiva sporter. Stärk ländryggen och njurarna med mjuka ställningar.',
            emotions: 'Odlå oberoende och beslutsförmåga. Undvik obeslutsamhet som orsakar njurstress. Försök inte att behaga andra på egen bekostnad. Sök inre harmoni.',
            behavior: 'Undvik överdrivet godis som påverkar njurarna. Inte undertryck behov för att bibehålla harmoni. Undvik stillasittande som påverkar det endokrina systemet.'
        },
        Escorpio: {
            organs: ['Fortplantningsorgan', 'Urinogenitalsystemet', 'Mastdarmen', 'Blåsan', 'Blod'],
            system: 'Fortplantnings- och urinogenitalsystemet',
            vulnerabilities: ['Fortplantningsproblem', 'Urinvägsinfektioner'],
            strengths: ['Transformation', 'Regenerering', 'Återhämtningskraft'],
            diet: 'Undvik väldigt tunga måltider, mättat fett, alkohol. Föredra uttagningsmedel: citron, vitlök, gröna grönsaker. Undvik toxinansamling.',
            exercise: 'Intensiv men balanserad träning: kampsporter, simma, gym. Undvik stillasittande. Frigör intensiv energi som stagnerar om den inte rör sig.',
            emotions: 'Odlåt förtroende och sund sårbarhet. Undvik svartsjuka, ägarskap och agg. Förvandla intensiva känslor till kreativitet. Djup terapi är gynnsam.',
            behavior: 'Undvik hemlighetsfullhet som skapar intern spänning. Manipulera inte situationer. Undvik överdriven kontroll. Kanalisera intensiteten i transformativa projekt.'
        },
        Sagitario: {
            organs: ['Lever', 'Lår', 'Höfter', 'Iskiasnervsystemet'],
            system: 'Lever- och rörelseapparaten',
            vulnerabilities: ['Leverproblem', 'Iskiassmärtor', 'Lårskador'],
            strengths: ['Optimism', 'Expansiv energi', 'God återhämtning'],
            diet: 'Undvik överdrivet alkoholkonsumtion, snabbmat, väldigt feta måltider. Föredra grönsaker, frukter, fullkorn. Undvik alla typer av överdrifter. Måttlig kryddig mat.',
            exercise: 'Ute sporter: vandring, ridning, cykling. Undvik sportöverdrifter som skadar lår och höfter. Tänj regelbundet på ländryggen och iskiasområdet.',
            emotions: 'Odlå tacksamhet och realistisk optimist. Undvik överdriven entusiasm som leder till oaktsamhet. Överdriv inte. Håll dig till åtaganden.',
            behavior: 'Undvik överdrifter (mat, dryck, aktivitet). Ta inte risker pga. övermod. Undvik skador av oaktsamhet. Sköt levern med måttighet.'
        },
        Capricornio: {
            organs: ['Ben', 'Knän', 'Lederna', 'Huden', 'Tänder'],
            system: 'Skelett- och hudsystemet',
            vulnerabilities: ['Ledproblem', 'Artrit', 'Knäsmärtor'],
            strengths: ['Stark benstruktur', 'Uthållighet', 'Disciplin'],
            diet: 'Undvik väldigt kalla rätter som påverkar leder. Föredra buljonger, gelatin, kalciumrika livsmedel. Undvik överdrivet salt. Ät varma och närande måltider.',
            exercise: 'Lågintensiv träning: promenera, yoga, simma. Stärk knän och leder. Undvik högkontaktsporter. Tänj regelbundet.',
            emotions: 'Odlå glädje och spontanitet. Undvik melankoli och kronisk pessimism. Ta inte andras ansvar. Uttryck känslor.',
            behavior: 'Undvik överdrivet arbete som sliter på ben och leder. Inte undertryck känslor (de sätter sig i lederna). Sköt hållningen. Undvik överdriven kyla.'
        },
        Acuario: {
            organs: ['Fotlederna', 'Cirkulationssystemet', 'Nervsystemet', 'Lymfkörtlar'],
            system: 'Cirkulations- och nervsystemet',
            vulnerabilities: ['Cirkulationsproblem', 'Åderbråck', 'Ödem'],
            strengths: ['Innovation', 'Alternativ cirkulation', 'Energihälsa'],
            diet: 'Undvik väldigt salt mat som håller inne vätskor. Föredra kalium: banan, spenat, avokado. Drick mycket vatten. Undvik alkohol som påverkar cirkulationen.',
            exercise: 'Övningar som förbättrar cirkulationen: promenera, cykla, omvänd yoga. Undvik att sitta länge. Rör på ben och fotleder frekvent.',
            emotions: 'Odlå social anslutning utan utmattning. Undvik isolering från överdrivet oberoende. Bibehåll friska emotionella band. Idealiera inte relationer.',
            behavior: 'Undvik stillasittande som påverkar cirkulationen. Ignorera inte kroppssignaler pga. fastnat i sinnet. Undvik plötsliga temperaturändringar. Sköt fotlederna.'
        },
        Piscis: {
            organs: ['Fötterna', 'Lymfsystemet', 'Pinealkörteln', 'Immunsystemet'],
            system: 'Lymfatiskt och immunologiskt system',
            vulnerabilities: ['Fotproblem', 'Lymfödem', 'Allergier'],
            strengths: ['Intuition', 'Medkänsla', 'Alternativ hälsa'],
            diet: 'Undvik alkohol, droger, starkt bearbetade livsmedel. Föredra lätta livsmedel, frukter, grönsaker, rent vatten. Undvik överdrivet socker. Ät medvetet.',
            exercise: 'Promenera barfota på marken (jordning), yoga, tai chi, mjuk simning. Undvik giftiga miljöer. Träning i naturen är idealiskt.',
            emotions: 'Odlå friska gränser och urskiljningsförmåga. Absorbera inte andras känslor. Fly inte från verkligheten med substanser. Meditera och anslut dig till naturen.',
            behavior: 'Undvik alla typer av beroenden (substanser, människor, situationer). Fly inte från problemen. Undvik offerrollen. Etablera rutiner för egen vård.'
        }
    },

    ELEMENT_HEALTH: {
        Fuego: {
            description: 'Eldtecken (Aries, Leo, Sagittarius): energi, vitalitet och hjärt- och kärlsystem.',
            strengths: ['Livsenergi', 'Snabb återhämtning', 'Styrka'],
            weaknesses: ['Inflammation', 'Feber', 'Brännskärningar', 'Hypertoni'],
            recommendations: ['Regelmässig träning utan överdrift', 'Kontrollera temperamentet', 'Sköt hjärta och blodtryck'],
            diet: 'Undvik väldigt varma, kryddrika, mättat fett- och alkoholrika livsmedel. Föredra röda frukter, gröna grönsaker, fisk, olivolja. Lätta och friska måltider. Undvik tunga middagar.',
            exercise: 'Dynamisk men balanserad aktivitet: promenera, simma, dansa, mjuka kampsporter. Undvik hjärtöverbelastning. Träna på morgonen eller eftermiddagen, undvik extrema temperaturer.',
            emotions: 'Odlå tålamod och tolerans. Undvik olösta sorger som skadar hjärtat. Träna djup andning, lugnande meditation. Uttryck känslor utan aggressivitet.',
            behavior: 'Undvik impulssivitet och övermod. Måttlig konkurrens som skapar stress. Var försiktig med olyckor. Undvik att arbeta till utmattning.'
        },
        Tierra: {
            description: 'Jordtecken (Tauro, Virgo, Capricornio): stabilitet, struktur och matsmältningsystemet.',
            strengths: ['Fysisk uthållighet', 'Stabilitet', 'God ämnesomsättning'],
            weaknesses: ['Matsmältningsproblem', 'Förstoppning', 'Ledproblem'],
            recommendations: ['Balanserad och konsekvent kost', 'Regelmässig träning', 'Sköt ben och leder'],
            diet: 'Undvik bearbetade livsmedel, överdrivet gluten, raffinerat socker. Föredra fibrer, grönsaker, frukter, fullkorn. Ät vid regelbundna tider. Undvik överdrivet mjölk.',
            exercise: 'Lågintensiv och konsekvent träning: promenera, yoga, pilates, trädgårdsarbete. Stärk leder och ben. Undvik högkontaktsporter.',
            emotions: 'Odlå flexibilitet och anpassningsförmåga. Undvik stubbornhet och överdriven tillgivenhet. Inte undertryck känslor (de sätter sig i matsmältningen och leder). Uttryck känslor.',
            behavior: 'Undvik överdrivet rutinmässigt arbete. Vägra inte förändring. Undvik överdriven självkritik. Sköt hållning och leder. Negligera inte sömvanor.'
        },
        Aire: {
            description: 'Lufttecken (Géminis, Libra, Acuario): sinne, kommunikation och nervsystemet.',
            strengths: ['Mental smidighet', 'Anpassningsförmåga', 'Kommunikation'],
            weaknesses: ['Ångest', 'Insomnia', 'Andningsproblem'],
            recommendations: ['Meditation och medvetenhet', 'Andningsövningar', 'Regelmäst mental vila'],
            diet: 'Undvik överdrivet koffeinkonsumtion, socker, lätta måltider utan substans. Föredra citrusfrukter, nötter, fisk, grönsaker. Ät långsamt och i en lugn miljö.',
            exercise: 'Simma, promenera, cykla, yoga. Djupandningsövningar. Undvik kontaktsporter som belastar axlarna. Tänj på armar och nacke.',
            emotions: 'Odlå koncentration och tystnad. Undvik mental splittring. Meditera 10 minuter dagligen. Uttryck tankar skriftligen. Undvik att prata för mycket.',
            behavior: 'Undvik att göra många saker samtidigt. Överbelasta inte sinnet. Undvik insomnia från virrande tankar. Ta pauser från skärmar. Anslut dig till kroppen.'
        },
        Agua: {
            description: 'Vattentecken (Cáncer, Escorpio, Piscis): känslor, intuition och lymfsystemet.',
            strengths: ['Intuition', 'Empati', 'Emotionell hälsa'],
            weaknesses: ['Vätskeansamling', 'Emotionella problem', 'Depression'],
            recommendations: ['Hantera känslor med terapi', 'Tillräcklig vätskeintag', 'Uttryck känslor på ett sunt sätt'],
            diet: 'Undvik alkohol, väldigt kalla rätter, överdrivet mjölk. Föredra soppor, buljonger, frukter, kokta grönsaker. Drick mycket vatten. Ät inte av emotionell oro.',
            exercise: 'Simma, promenera nära vatten, mjuk yoga, tai chi. Naturovningar. Undvik väldigt intensiva sporter. Simma i vatten är mycket hälsosamt.',
            emotions: 'Odlå emotionell säkerhet och friska gränser. Absorbera inte andras känslor. Emotionell terapi är avgörande. Uttryck känslor utan offerroll.',
            behavior: 'Undvik beroenden och flykt från verkligheten. Isolera dig inte emotionellt. Undvik pessimism. Dela känslor med betrodda personer. Etablera rutiner.'
        }
    },

    ASPECT_TYPE_CONCEPTS: {
        Conjunción: {
            symbol: '☌',
            concept: 'Konjunktionen uppstår när två planeter befinner sig vid samma zodiakala punkt (0°). Deras energier smälter samman och skapar en enhetlig kraft som förstärker båda kvaliteterna. Det är som två instrument som spelar samma ton: ljudet förstärks.',
            healthMeaning: 'Inom hälsa förstärker konjunktionen funktionerna för båda planeterna. Den kan generera extraordinär vitalitet om planeterna är harmoniska, eller överbelastning om de är spända.',
            risks: 'Överbelastning av de system som styras av båda planeterna. Benägenhet att överdriva kvaliteterna. Utmattning från underhållen intensitet.',
            wellness: 'Kanalisera den kombinerade energin i konkreta övningar. Etablera rytmer som tillåter vila mellan aktivitetstoppar. Använd intensiteten som motor för positiv transformation.'
        },
        Sextil: {
            symbol: '✦',
            concept: 'Sextilen (60°) skapar en vinkel av möjlighet och mjuk flyt. Planetariska energier stöder varandra utan ansträngning, som två vänner som kompletterar varandra naturligt.',
            healthMeaning: 'Indikerar naturliga talang för välbefinnande. Kroppen har lätthet att balansera de involverade systemen. Det är ett aspekt av tillgängliga faciliteter och resurser.',
            risks: 'Risk är bekvämlighet: eftersom det flyter lätt kan det ignoreras tills det går förlorat. Det genererar inga kriser men kan dölja subtila obalanser.',
            wellness: 'Utnyttja medvetet de faciliteter det erbjuder. Odla positiva vanor utan att vänta på att problem uppstår. Använd harmoni som grundval för att bygga sunda rutiner.'
        },
        Cuadratura: {
            symbol: '□',
            concept: 'Kvadraten (90°) genererar konstruktiv spänning mellan två krafter som utmanar varandra. Det är som en muskel som stärks genom motstånd: friktion skapar tillväxt.',
            healthMeaning: 'Inom hälsa anger kvadraten områden där kroppen behöver göra anpassningar. Det är inte negativt: det är den naturliga mekanismen för anpassning. Men underhållen spänning kan manifestera sig som symptom.',
            risks: 'Inflammation, överansträngning, akuta kriser när spänningen inte hanteras. Ackumulerad stress som påverkar de system som styras av båda planeterna. Benägenhet att ignorera signaler tills de blir akuta.',
            wellness: 'Regelmässiga övningar för spänningsavlastning (träning, massage, andning). Lär dig att lyssna på tidiga kroppssignaler. Förvandla spänning till motivation för att förbättra vanor.'
        },
        Trígono: {
            symbol: '△',
            concept: 'Trigonen (120°) är det mest harmoniska aspekten. Energier flyter med naturlighet och elegans, som en flod som följer sin kurs utan hinder. Det representerar medfödda talang och lätthet.',
            healthMeaning: 'Indikerar naturlig balans mellan de system som styras av planeterna. Kroppen har en medfödd förmåga att bibehålla välbärande i dessa områden.',
            risks: 'Risk är passivitet: eftersom det är så harmoniskt kan det inte vidtas förebyggande åtgärder. Överdriven lätthet kan leda till oaktsamhet.',
            wellness: 'Behåll de övningar som fungerar utan att ändra det som inte är trasigt. Använd harmoni som plattform för att expandera mot mer utmanande områden. Tacksamhet och medveten underhåll.'
        },
        Oposición: {
            symbol: '☍',
            concept: 'Opositionen (180°) skapar polaritet: två motsatta krafter som söker balans. Det är som dag och natt, eller andas in och andas ut. Medvetenheten om den motsatta polen vidgar perspektivet.',
            healthMeaning: 'Inom hälsa anger oppositionen behovet av att balansera två system som arbetar i motsatta riktningar. Den kan generera svängningar eller växling av symptom.',
            risks: 'Extrem polarisering: överdrift av ena polen och underskott av den andra. Emotionella och fysiska svängningar. Svårt att bibehålla stabilitet. Möjliga medvetandekriser.',
            wellness: 'Balansövningar: yoga, meditation, bilateral andning. Recognisera båda extremiteten utan omdöme. Sök medelvägen i kost, träning och vila.'
        }
    },

    ASPECT_PLANET_HEALTH: {
        'Sol-Luna': {
            concept: 'Föreningen av Solen (vitalitet, medvetet jag) och Månen (känslor, instinkter) representerar integrationen av kropp och själ. Det är det mest intima aspekten av vital identitet.',
            risks: 'Obalans mellan vilja och emotionella behov. Spänning mellan vad man "borde" göra och vad kroppen begär. Hjärtproblem av obearbetad emotionell stress. Energisvängningar.',
            wellness: 'Lyssna både på logik och intuition. Träna medvetenhet för att integrera kropp och sinne. Rutiner som närmare vitalitet och emotionell säkerhet. Terapi som förenar förnuft och känsla.'
        },
        'Sol-Mercurio': {
            concept: 'Solen med Merkur förenar vitalitet med sinnet. Det representerar uttrycket av jaget genom tanke och kommunikation.',
            risks: 'Mental överbelastning som suger vitalitet. Spänning i nerv- och andningssystemet. Svårigheter att "stänga av" sinnet. Migrän av överdriven mental aktivitet.',
            wellness: 'Aktiviteter som kanaliserar sinnet kreativt. Fysisk träning för att avlasta mental spänning. Andnings- och avspärrningstekniker. Assertiv kommunikation som avlastningsventil.'
        },
        'Sol-Venus': {
            concept: 'Solen med Venus förenar livskraft med nöje och harmoni. Det anger en konstitution som söker välbärande genom skönhet och balans.',
            risks: 'Sensoriska överdrifter (mat, bekvämlighet, nöje). Njur- eller ledproblem av överdriven eftergift. Hormonella obalanser. Benägenhet för lathet.',
            wellness: 'Medvetet nöje: njut utan att överdriva. Estetiska aktiviteter som närmare själen (konst, musik, natur). Balans mellan njutning och disciplin. Kroppsvård som handling av självkärlek.'
        },
        'Sol-Marte': {
            concept: 'Solen med Mars är kombinationen av vitalitet och handling. Det representerar ren energi, initiativförmåga och viljekraft. Det är eld med eld.',
            risks: 'Överhettning, inflammation, feber, olyckor av impulssivitet. Fysisk överansträngning. Benägenhet för otålighet som skapar stress. Hypertoni.',
            wellness: 'Intensiva men kontrollerade fysiska aktiviteter (sport, kampsporter). Kanalisera energi i konkreta projekt. Lär dig att dossera styrka. Aktiv vila.'
        },
        'Sol-Júpiter': {
            concept: 'Solen med Jupiter expanderar vitalitet och optimism. Det anger en robust konstitution med benägenhet för expansion.',
            risks: 'Överdrifter av överoptimism. Övervikt, leverproblem, inflammationer av överdrift. Benägenhet att underskätta hälsoproblem.',
            wellness: 'Måttighet som dygd. Aktiviteter som expanderar medvetenheten utan överdrift (resor, studier, andlighet). Balanserad kost. Regelmässiga kontroller.'
        },
        'Sol-Saturno': {
            concept: 'Solen med Saturnus konfronterar vitalitet med struktur och gränser. Det anger en konstitution som stärks av disciplin men kan svagas av stelhet.',
            risks: 'Kronisk trötthet, ledproblem, depression, känsla av prematur åldrande. Stränga gränser som undertrycker vitalitet.',
            wellness: 'Underhållen men flexibel disciplin. Lågintensiv och konsekvent träning (promenera, simma). Regelmässig och strukturerad kost. Acceptans av gränser som styrka.'
        },
        'Sol-Urano': {
            concept: 'Solen med Uranus förenar vitalitet med innovation. Det anger en kropp som fungerar oregelbundet men med extraordinära energitoppar.',
            risks: 'Plötsliga energiförändringar. Hjärtarytmier, cirkulationsproblem, rädsla. Benägenhet att ignorera kroppen genom att vara "i sinnet".',
            wellness: 'Flexibla rutiner: struktur med utrymme för spontanitet. Varierade och stimulerande övningar. Lyssna på kroppen även när sinnet är upptaget.'
        },
        'Sol-Neptuno': {
            concept: 'Solen med Neptunus förenar vitalitet med det äteriska. Det anger en känslig konstitution som kan vara genomsläpilig för yttre påverkan.',
            risks: 'Svagning av vitaliteten av emotionell förvirring. Benägenhet för beroenden. Extrem känslighet mot substanser, miljöer och människor. Sjukdomar svår att diagnosticera.',
            wellness: 'Jordningsövningar (promenera barfota, natur). Klar emotionella gränser. Undvik giftiga substanser. Andlighet som styrka, inte som flykt.'
        },
        'Sol-Plutón': {
            concept: 'Solen med Pluto förenar livskraft med djup transformation. Det anger extraordinär regenereringsförmåga men genom kriser.',
            risks: 'Makts- och kontrollkriser som påverkar hälsan. Fortplantnings-, sexuella eller eliminationsproblem. Benägenhet att hålla inne djupa spänningar. Sjukdom som transformationsprocess.',
            wellness: 'Acceptera kriser som transformationsmöjligheter. Djup terapi (psykologi, somatik). Övningar som löser ackumulerade spänningar. Återfödelse genom medvetet handlande.'
        },
        'Luna-Mercurio': {
            concept: 'Månen med Merkur förenar känslor med sinnet. Det anger en person vars tankar djupt påverkas av deras känslor.',
            risks: 'Ångest, nervositet, insomnia. Matsmältningsproblem av emotionell stress. Spänning i axlar och nacke. Svårigheter att somna av virrande tankar.',
            wellness: 'Terapeutiskt skrivande (dagboksskrivning). Medvetenhetsträning. Diafragmalandning. Verbalt uttryck av känslor. Rutiner som lugnar sinnet.'
        },
        'Luna-Venus': {
            concept: 'Månen med Venus förenar emotionellt med nöje. Det anger en konstitution som söker välbärande genom omsorg och sinnlighet.',
            risks: 'Vätskeansamling, magproblem. Markerade hormonella förändringar. Benägenhet för överdrifter i mat eller bekvämlighet. Känslighet för cykeländringar.',
            wellness: 'Självpårdsritualer. Terapeutiska bad. Kontakt med naturen. Mat som närmare kropp och sinnen. Konst som hälsa.'
        },
        'Luna-Marte': {
            concept: 'Månen med Mars förenar känslor med handling. Det anger en person vars emotionella reaktioner är snabba och intensiva.',
            risks: 'Irritabilitet, inflammationer, kolik. Akuta emotionella kriser. Benägenhet för impulsiva reaktioner som skapar fysisk stress. Magproblem.',
            wellness: 'Regelmässig fysisk aktivitet för att kanalisera emotionell energi. Tekniker för emotionell reglering. Andningsövningar i krisögonblick. Kanalisera impulssiviteten i sport.'
        },
        'Luna-Júpiter': {
            concept: 'Månen med Jupiter expanderar emotionellt och närmingsförmåga. Det anger en generös konstitution men benägen för överdrift.',
            risks: 'Övervikt, vätskeansamling, leverproblem. Emotionella överdrifter (äta av känslor). Överdriven eftergift.',
            wellness: 'Medveten och näringsrik kost. Aktiviteter som expanderar emotionell medvetenhet (terapi, andlighet). Måttighet som daglig övning. Nära andra utan att negligera sig själv.'
        },
        'Luna-Saturno': {
            concept: 'Månen med Saturnus konfronterar känslor med struktur. Det anger en person som undertrycker sina känslor eller hanterar dem med extrem disciplin.',
            risks: 'Depression, emotionell kyla, magproblem av undertryckning. Prematur åldrande av matsmältningsystemet. Svårigheter att slappna av.',
            wellness: 'Tillåt emotionellt uttryck. Terapi som arbetar med undertryckning. Rutiner som inkluderar ögonblick av emotionell vila. Kontakt med naturen för att mjuka upp stelheten.'
        },
        'Mercurio-Venus': {
            concept: 'Merkur med Venus förenar sinnet med estetik. Det anger en person som tänker med skönhet och kommunicerar med harmoni.',
            risks: 'Nervspänning av perfektionism. Neuralgi, lätta andningsproblem. Svårigheter att mentalt slappna av.',
            wellness: 'Konst och musik som terapi. Assertiv kommunikation. Mental avspänningsövningar. Kreativa aktiviteter som förenar sinne och känslighet.'
        },
        'Mercurio-Marte': {
            concept: 'Merkur med Mars förenar sinnet med handling. Det anger ett snabbt och stridbart sinne, benäget för nervositet.',
            risks: 'Migrän, ångest, insomnia. Spänning i käke och nacke. Prata för mycket eller för fort. Kompulsiv debattering.',
            wellness: 'Sport med strategi (schack, lagsport). Skrivande. Avspänningsövningar för käken. Medveten andning.'
        },
        'Mercurio-Júpiter': {
            concept: 'Merkur med Jupiter expanderar sinnet och kommunikationen. Det anger en person med stor intellektuell kapacitet men benägenhet för splittring.',
            risks: 'Mental överbelastning, ångest av informationsöverskott. Nervositet av överstimulans.',
            wellness: 'Filosofi och studier som övningar för välbärande. Meditation. Förenkla konsumerad information. Lär dig att säga nej till mentalt överdrift.'
        },
        'Mercurio-Saturno': {
            concept: 'Merkur med Saturnus förenar sinnet med struktur. Det anger en metodisk person men benägen för mental stelhet.',
            risks: 'Kronisk ångest, obsessiva tankar, underhållen spänning. Svårigheter att mentalt slappna av. Neuralgi.',
            wellness: 'Strukturerade men flexibla mentala rutiner. Observerande meditation. Fysisk träning för att avlasta mental spänning. Kognitiv terapi.'
        },
        'Venus-Marte': {
            concept: 'Venus med Mars förenar nöje med handling. Det anger en konstitution som söker balans mellan njutning och disciplin.',
            risks: 'Hormonella obalanser, njurproblem, inflammationer. Spänning mellan nöje och plikt som skapar stress.',
            wellness: 'Aktiviteter som förenar nöje och rörelse (dansa, vandra). Balans mellan aktivitet och vila. Mat som närmare utan att beröva. Friska relationer.'
        },
        'Venus-Júpiter': {
            concept: 'Venus med Jupiter expanderar nöje och harmoni. Det anger en konstitution som söker välbärande genom överflöd.',
            risks: 'Överdrifter i mat, dryck eller bekvämlighet. Övervikt, ledproblem. Överdriven eftergift.',
            wellness: 'Medvetet nöje. Aktiviteter som expanderar sinnena utan överdrift (konst, natur, musik). Måttighet som dygd.'
        },
        'Venus-Saturno': {
            concept: 'Venus med Saturnus konfronterar nöje med gränser. Det anger en person som kan undertrycka sina nöjen eller ha en komplex relation till njutning.',
            risks: 'Depression, kyla, ledproblem. Svårigheter att njuta. Undertryckning av sensoriska behov.',
            wellness: 'Tillåt dig nöje utan skuldkänslor. Terapi för att arbeta med undertryckning. Mjuka sensoriska aktiviteter (massage, musik). Självpård som övning.'
        },
        'Marte-Júpiter': {
            concept: 'Mars med Jupiter förstärker handling och expansion. Det anger enorm fysisk energi men benägen för överdrift.',
            risks: 'Överansträngning, olyckor, inflammationer. Överdriven aktivitet som skapar utmattning. Benägenhet för överdrivningar.',
            wellness: 'Kanalisera energi i konkreta projekt. Intensiva men kontrollerade sporter. Doserad styrka. Aktiv vila.'
        },
        'Marte-Saturno': {
            concept: 'Mars med Saturnus konfronterar handling med gränser. Det anger energi som stärks genom motstånd men kan blockeras.',
            risks: 'EnergigetBlockeringar, ledsmärtor, kronisk trötthet. Spänning mellan vilja och kunna. Frustration som blir somatisk.',
            wellness: 'Progressiv motståndsträning. Acceptera gränser utan att ge upp. Spänningslösande terapi. Disciplin med flexibilitet.'
        },
        'Júpiter-Saturno': {
            concept: 'Jupiter med Saturnus förenar expansion med struktur. Det anger en sökning efter balans mellan tillväxt och disciplin.',
            risks: 'Viktsvängningar, ämnesomsättningsproblem, meningkriser. Spänning mellan optimism och pessimism som påverkar hälsan.',
            wellness: 'Långsiktig planering för välbärande. Balans mellan disciplin och nöje. Sunt livsfilosofi. Konsekvens med flexibilitet.'
        }
    },
    PRACTICAL_ADVICE: {
        Sol: { diet: 'Undvik mättat fett och överdrivet salt. Föredra röda frukter, vitlök, fisk. Lätta måltider.', exercise: 'Måttlig kardiovaskulär träning: promenera, dansa. Undvik överansträngning. Stärk ryggen.', emotions: 'Odlå ödmjukhet och generositet. Undvik stolthet och egoöverdrift som belastar hjärtat.', behavior: 'Arbeta inte till utmattning. Akta hållningen. Undvik situationer med konstant tryck.' },
        Luna: { diet: 'Undvik väldigt kalla eller syra rätter. Föredra soppor, sädesslag, tröstande måltider. Ät inte av oro.', exercise: 'Simma, mjuk yoga, promenera nära vatten. Undvik intensiv träning efter att ha ätit.', emotions: 'Odlå emotionell säkerhet. Undvik offerroll. Uttryck känslor. Emotionell terapi är gynnsam.', behavior: 'Isolera dig inte. Undvik att söka skydd i mat. Dela känslor. Håll regelbundna sömvtider.' },
        Mercurio: { diet: 'Undvik överdrivet koffeinkonsumtion och socker. Föredra citrusfrukter, selleri, fisk. Ät i en lugn miljö.', exercise: 'Simma, promenera, djup andning. Tänj på axlar och armar. Undvik mental överbelastning.', emotions: 'Odlå koncentration och tystnad. Meditera 10 minuter dagligen. Uttryck tankar skriftligen.', behavior: 'Gör inte många saker samtidigt. Undvik insomnia från virrande sinne. Ta pauser från skärmar.' },
        Venus: { diet: 'Undvik överdrivet salt och godis. Drick mycket vatten. Föredra frukter, grönsaker, färska livsmedel.', exercise: 'Yoga, dans, promenera. Balans- och ländryggsövningar. Undvik stillasittande.', emotions: 'Odlå oberoende. Undvik att behaga alla. Fatta beslut utan fruktan. Sök inre harmoni.', behavior: 'Inte undertryck behov. Undvik överdrivet godis. Sköt njurarna med god vätskeintag.' },
        Marte: { diet: 'Undvik väldigt kryddrika och varma rätter. Föredra svalnande livsmedel: gurka, sallad, vattenmelon. Undvik alkohol.', exercise: 'Intensiva sporter men med försiktighet: kampsporter, gym. Värm upp ordentligt. Undvik skador.', emotions: 'Odlå tålamod och tolerans. Undvik olösta sorger. Kanalisera energi i konstruktiv handling.', behavior: 'Undvik impulssivitet. Ta inte onödiga risker. Var försiktig med olyckor. Måttlig konkurrens.' },
        Júpiter: { diet: 'Undvik överdrifter av alla slag: mat, dryck, godis. Föredra grönsaker, frukter, måttliga måltider.', exercise: 'Måttlig och konsekvent träning. Promenera, simma, yoga. Undvik övervikt av överdrifter.', emotions: 'Odlå tacksamhet och måttighet. Undvik överoptimism som leder till oaktsamhet. Håll åtaganden.', behavior: 'Undvik mat- och drycköverdrifter. Överdriv inte. Sköt levern. Håll disciplinen.' },
        Saturno: { diet: 'Undvik väldigt kalla rätter. Föredra buljonger, kalcium, varma livsmedel. Undvik överdrivet salt.', exercise: 'Lågintensiv träning: promenera, yoga. Stärk leder. Undvik hög kontaktyta.', emotions: 'Odlå glädje och spontanitet. Undvik kronisk pessimism. Ta inte andras ansvar.', behavior: 'Undvik överarbete. Inte undertryck känslor (de sätter sig i lederna). Sköt hållningen.' },
        Urano: { diet: 'Undvik väldigt salt mat. Föredra kalium: banan, spenat. Drick mycket vatten.', exercise: 'Promenera, cykla, yoga. Rör på benen frekvent. Undvik förlängt stillasittande.', emotions: 'Odlå social anslutning. Undvik isolering av överdrivet oberoende. Bibehåll band.', behavior: 'Ignorera inte kroppssignaler. Undvik plötsliga temperaturändringar. Sköt fotleder och cirkulation.' },
        Neptuno: { diet: 'Undvik alkohol och substanser. Föredra lätta livsmedel, frukter, rent vatten. Ät medvetet.', exercise: 'Promenera barfota, yoga, mjuk simning. Träna i naturen. Undvik giftiga miljöer.', emotions: 'Odlå friska gränser. Absorbera inte andras känslor. Meditera och anslut dig till naturen.', behavior: 'Undvik alla typer av beroenden. Fly inte från problemen. Etablera rutiner för egen vård.' },
        Plutón: { diet: 'Undvik väldigt tunga och bearbetade livsmedel. Föredra uttagningsmedel: citron, vitlök, gröna grönsaker.', exercise: 'Intensiv men balanserad träning. Frigör intensiv energi. Simma, gym, kampsporter.', emotions: 'Odlå förtroende och sårbarhet. Undvik svartsjuka, ägarskap, agg. Förvandla till kreativitet.', behavior: 'Undvik hemlighetsfullhet och manipulation. Kontrollera inte allt. Kanalisera intensiteten i transformativa projekt.' }
    },
    houseNames: ['Identitet', 'Resurser', 'Kommunikation', 'Hem', 'Kreativitet', 'Hälsa', 'Relationer', 'Transformation', 'Filosofi', 'Karriär', 'Vänskap', 'Omedvetet'],
    PLANET_NATURE: {
        Sol: 'Het torr', Luna: 'Kall fuktig', Mercurio: 'Variabel',
        Venus: 'Kall fuktig', Marte: 'Het torr', Júpiter: 'Het fuktig',
        Saturno: 'Kall torr', Urano: 'Kall torr (variabel)', Neptuno: 'Kall fuktig (etärisk)',
        Plutón: 'Kall torr (variabel)'
    },
    MODALITY_HEALTH: {
        Cardinal: { description: 'Kardinala tecken: inleder cykler, energier för nybörjan.', healthFocus: 'Huvud, mage, njurar, ben', recommendations: 'Benägenhet för akuta problem eller start av tillstånd' },
        Fijo: { description: 'Fixa tecken: bibehåller och stabiliserar.', healthFocus: 'Struphuvud, hjärta, fortplantning, cirkulation', recommendations: 'Benägenhet för kroniska tillstånd eller stagnation' },
        Mutable: { description: 'Flexibla tecken: anpassar sig och transformerar.', healthFocus: 'Lungor, tarmar, lever, fötter', recommendations: 'Benägenhet för varierande eller anpassningsbara tillstånd' }
    },
    HOUSE_HEALTH: {
        1: { name: 'Ascendent', area: 'Konstitution och fysisk vitalitet', healthFocus: 'Allmänt tillstånd hos organismen, förmåga att hantera obalanser, fysiskt utseende', keywords: 'Huvud, ansikte, första intryck, vitalitet' },
        2: { name: 'Resurser', area: 'Självkänsla, stabilitet', healthFocus: 'Personliga värden, materiell stabilitet, självkänsla', keywords: 'Materiella tillgångar, ekonomisk stabilitet, självkänsla' },
        3: { name: 'Kommunikation', area: 'Sinne, nerver', healthFocus: 'Kommunikation, transport, syskon, lärande', keywords: 'Kommunikation, transport, syskon, lärande' },
        4: { name: 'Hem', area: 'Känslor, rötter', healthFocus: 'Familj, hem, rötter, emotionell säkerhet', keywords: 'Familj, hem, rötter, emotionell säkerhet' },
        5: { name: 'Kreativitet', area: 'Nöje, barn', healthFocus: 'Kreativitet, barn, nöje, romantik', keywords: 'Kreativitet, barn, nöje, romantik' },
        6: { name: 'Hälsa', area: 'Sjukdom, vanor och daglig hälsa', healthFocus: 'Viktigaste huset för hälsoanalys. Sjukdom, arbete, rutiner, tjänst, husdjur', keywords: 'Hälsa, arbete, rutiner, tjänst, husdjur' },
        7: { name: 'Relationer', area: 'Balans, partner', healthFocus: 'Partner, partnerskap, relationer, balans', keywords: 'Partner, partnerskap, relationer, balans' },
        8: { name: 'Transformation', area: 'Kris, djupa processer, regenerering', healthFocus: 'Transformation, sexualitet, död, återfödelse. Inte nödvändigtvis sjukdom utan transformations- eller krisituationer', keywords: 'Transformation, sexualitet, död, återfödelse' },
        9: { name: 'Filosofi', area: 'Utbildning, expansion', healthFocus: 'Filosofi, utbildning, resor, vidgande av horisonter', keywords: 'Filosofi, utbildning, resor, vidgande av horisonter' },
        10: { name: 'Karriär', area: 'Prestationer, status', healthFocus: 'Karriär, rykte, prestationer, status', keywords: 'Karriär, rykte, prestationer, status' },
        11: { name: 'Vänskap', area: 'Grupper, innovation', healthFocus: 'Vänskap, grupper, sociala ärenden, innovation', keywords: 'Vänskap, grupper, sociala ärenden, innovation' },
        12: { name: 'Omedvetet', area: 'Dolda sjukdomar, isolering', healthFocus: 'Dolda sjukdomar, isolering, svårupptäckta tillstånd, djup hälsa, andlighet', keywords: 'Omedvetet, andlighet, drömmar, djup hälsa' }
    },
    TRANSIT_HEALTH_INTERPRETATIONS: {
        'Sol': {
            'Cuadratura': { level: 'III', desc: 'Minskat energi, känsla av utmattning, behov av vila, ökad känslighet för kroniska processer, belastning av kroppens struktur.' },
            'Oposición': { level: 'III', desc: 'Motsatt energi, behov av vital balans, konfrontation med fysiska gränser.' },
            'Trígono': { level: 'I', desc: 'Period av god vitalitet, gynnsam energi, underlättad återhämtning.' },
            'Sextil': { level: 'I', desc: 'Möjligheter att förbättra hälsan, tillgänglig energi för välbärande.' },
            'Conjunción': { level: 'II', desc: 'Aktivering av vitalitet, koncentrerad energi, period av ökad vital intensitet.' }
        },
        'Luna': {
            'Cuadratura': { level: 'II', desc: 'Emotionella svängningar som påverkar matsmältningen, förändrad känslighet, möjlig vätskeansamling.' },
            'Oposición': { level: 'II', desc: 'Behov av emotionell balans, möjliga sömnförändringar.' },
            'Trígono': { level: 'I', desc: 'Gynnsam emotionell balans, god anpassningsförmåga.' },
            'Conjunción': { level: 'II', desc: 'Period av hög emotionell och fysisk känslighet.' }
        },
        'Mercurio': {
            'Cuadratura': { level: 'II', desc: 'Nervositet, ångest, insomnia, axelspänning, andningsproblem.' },
            'Oposición': { level: 'II', desc: 'Splittrat sinne, svårigheter att slappna av, nervös spänning.' },
            'Trígono': { level: 'I', desc: 'Klart sinne, god koncentrationsförmåga, nervös balans.' },
            'Conjunción': { level: 'II', desc: 'Intensiv mental aktivering, möjlig nervös överbelastning.' }
        },
        'Venus': {
            'Cuadratura': { level: 'II', desc: 'Hormonella obalanser, njurproblem, ledsmärtor.' },
            'Trígono': { level: 'I', desc: 'Kroppslig harmoni, allmänt välbärande, hormonell balans.' },
            'Conjunción': { level: 'I', desc: 'Period av sensorisk njutning och välbärande.' }
        },
        'Marte': {
            'Cuadratura': { level: 'III', desc: 'Inflammationsprocesser, överansträngning, mindre olyckor, febertillstånd, överdriven aktivitet.' },
            'Oposición': { level: 'III', desc: 'Energetisk konflikt, möjlighet för olyckor eller skador av överdrift.' },
            'Trígono': { level: 'I', desc: 'God fysisk energi, positiv handlingsförmåga.' },
            'Sextil': { level: 'I', desc: 'Tillgänglig energi för måttlig fysisk aktivitet.' },
            'Conjunción': { level: 'II', desc: 'Koncentrerad energi, möjlighet för inflammationer eller överansträngning.' }
        },
        'Júpiter': {
            'Cuadratura': { level: 'II', desc: 'Överdrifter, övervikt, leverproblem, eftergift.' },
            'Oposición': { level: 'II', desc: 'Behov av måttighet, möjliga ämnesomsättningsproblem.' },
            'Trígono': { level: 'I', desc: 'God återhämtning, gynnsam ämnesomsättning, allmänt välbärande.' },
            'Conjunción': { level: 'I', desc: 'Expansion av vitalitet, god allmän hälsa.' }
        },
        'Saturno': {
            'Cuadratura': { level: 'IV', desc: 'Period av särskild uppmärksamhet. Minskat energi, känsla av utmattning, behov av vila, ökad känslighet för kroniska processer, belastning av kroppens struktur, behov av att granska vanor.' },
            'Oposición': { level: 'IV', desc: 'Period av efterfrågan. Uthållighetsprov, behov av tålamod, möjliga led- eller bensmärtor.' },
            'Trígono': { level: 'I', desc: 'Stabil struktur, fysisk mognad, underhållen arbetsförmåga.' },
            'Sextil': { level: 'I', desc: 'Möjligheter att stärka kroppens struktur.' },
            'Conjunción': { level: 'III', desc: 'Aktivering av begränsningar, behov av disciplin.' }
        },
        'Urano': {
            'Cuadratura': { level: 'III', desc: 'Plötsliga händelser, oförväntade förändringar, nervkriser, möjliga olyckor.' },
            'Oposición': { level: 'III', desc: 'Plötsliga hälsoförändringar, oförväntade situationer.' },
            'Conjunción': { level: 'II', desc: 'Aktivering av det oförväntade, möjliga plötsliga förändringar.' }
        },
        'Neptuno': {
            'Cuadratura': { level: 'II', desc: 'Förvirring, extrem känslighet, möjliga förgiftningar, svår diagnosticerbara tillstånd.' },
            'Oposición': { level: 'II', desc: 'Ökad känslighet, möjlighet för beroenden, förvirring.' },
            'Conjunción': { level: 'II', desc: 'Period av hög känslighet, behov av urskiljningsförmåga.' }
        },
        'Plutón': {
            'Cuadratura': { level: 'IV', desc: 'Djupa transformationsprocesser, kriser som leder till regenerering, möjliga operationer eller eliminationsprocesser.' },
            'Oposición': { level: 'III', desc: 'Konfrontation med djupa processer, nödvändig transformation.' },
            'Conjunción': { level: 'III', desc: 'Aktivering av djupa transformationsprocesser.' }
        }
    }
};