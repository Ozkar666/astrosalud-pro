export const ASPECT_MODIFIERS = {
  "Conjunción": { riskMult: 1.5, nature: "fusion", intensity: "alta" },
  "Oposición": { riskMult: 1.3, nature: "tension", intensity: "alta" },
  "Cuadratura": { riskMult: 1.2, nature: "desafio", intensity: "media-alta" },
  "Trígono": { riskMult: 0.5, nature: "armonia", intensity: "baja" },
  "Sextil": { riskMult: 0.7, nature: "oportunidad", intensity: "media" }
};

export const PLANET_RITUAL_DATA = {
  "Sol": { stones: ["Citrino", "Ámbar", "Diamante"], color: "dorado", hour: "mediodía", element: "Fuego", deity: "Ra/Apolo", chakra: "Manipura" },
  "Luna": { stones: ["Luna cuarzo", "Selenita", "Ágata blanca"], color: "plateado", hour: "madrugada", element: "Agua", deity: "Isis/Artemisa", chakra: "Sahasrara" },
  "Mercurio": { stones: ["Ágata azul", "Lapislázuli", "Ámbar"], color: "morado", hour: "amanecer", element: "Aire", deity: "Thoth/Hermes", chakra: "Vishuddha" },
  "Venus": { stones: ["Rosa cuarzo", "Esmeralda", "Jade"], color: "verde/rosa", hour: "atardecer", element: "Tierra", deity: "Afrodita/Venus", chakra: "Anahata" },
  "Marte": { stones: ["Rubí", "Granate", "Jaspe rojo"], color: "rojo", hour: "mediodía", element: "Fuego", deity: "Ares/Marte", chakra: "Muladhara" },
  "Júpiter": { stones: ["Amatista", "Lapislázuli", "Sodalita"], color: "azul/índigo", hour: "jueves al amanecer", element: "Fuego/Aire", deity: "Zeus/Júpiter", chakra: "Vishuddha" },
  "Saturno": { stones: ["Obsidiana", "Onix negro", "Tourmalina negra"], color: "negro/índigo", hour: "sábado medianoche", element: "Tierra/Aire", deity: "Crono/Saturno", chakra: "Muladhara" },
  "Urano": { stones: ["Ágata azul celeste", "Larimar", "Turquesa"], color: "eléctrico/celeste", hour: "martes madrugada", element: "Aire", deity: "Urano/Prometeo", chakra: "Ajna" },
  "Neptuno": { stones: ["Amatista", "Lapislázuli", "Aquamarina"], color: "azul marino/iridiscente", hour: "noches de luna llena", element: "Agua", deity: "Poseidón/Neptuno", chakra: "Ajna" },
  "Plutón": { stones: ["Obsidiana roja", "Granate", "Ópalo negro"], color: "rojo oscuro/negro", hour: "noche profunda", element: "Agua/Fuego", deity: "Hades/Plutón", chakra: "Muladhara" }
};

export const DAILY_TRANSIT_DATABASE = {
  "Sol": {
    "Sol": {
      riskBase: 25,
      behavioral: {
        high: "Narcisismo exacerbado, necesidad de control absoluto, tendencia a la megalomanía. Puede surgir una crisis de identidad profunda donde la persona busca validación externa de manera compulsiva.",
        medium: "Aumento de la confianza y el liderazgo natural, expresión creativa elevada. La persona se siente centrada y con propósito, aunque puede haber cierta inflexibilidad en sus decisiones.",
        low: "Reflexión sobre el propósito vital, modestia incrementada. Momento de evaluación interna sin necesidad de protagonismo."
      },
      social: {
        high: "Tendencia a dominar conversaciones, dificultad para escuchar, rivalidad intensa con figuras de autoridad. Puede generar conflictos en el ámbito laboral y familiar.",
        medium: "Capacidad de liderazgo reconocida por otros, generosidad en el reconocimiento. Buena energía para asumir responsabilidades grupales.",
        low: "Necesidad de soledad para recargar energías, interacciones más selectivas. Ideal para networking estratégico."
      },
      diet: "Evitar comidas pesadas y excitantes. Preferir alimentos amarillos y dorados: maíz, plátano, miel, jengibre. Ayuno parcial recomendado para mantener la claridad mental.",
      exercise: "Actividades solares al aire libre: caminar bajo el sol, natación en aguas abiertas, yoga al amanecer. Evitar excesos de intensidad en entrenamientos.",
      mitigation: "Meditar 15 minutos al mediodía. Usar piedra de ámbar o citrino para equilibrar la energía solar. Evitar decisiones impulsivas importantes.",
      credibility: "Alta confianza en interpretaciones de identidad y vitalidad. Moderada en aspectos de salud cardiovascular y autoestima.",
      quote: { text: "Conoce ti mismo y conocerás el universo y a los dioses.", author: "Hermes Trismegistro" },
      alchemy: "La fase solar corresponde al Oro filosofal. El Sol representa la materia perfecta, el sulfur que da vida. En alquimia, el Sol es el rey que debe morir para renacer en gloria. La operación es la calcinación, que purifica por fuego.",
      decree: "Yo soy luz central que irradia vida. Mi esencia brilla con claridad perfecta, iluminando mi camino y el de quienes me rodean.",
      ritual: {
        stones: ["Citrino", "Ámbar", "Diamante"],
        hours: "Mediodía, entre las 11:00 y 13:00 horas",
        instructions: "Colocar las piedras sobre el plexo solar. Encender una vela dorada frente a una ventana por donde entre el sol. Recitar el decreto 9 veces mientras se visualiza una esfera dorada envolviendo el cuerpo."
      }
    },
    "Luna": {
      riskBase: 30,
      behavioral: {
        high: "Conflictos intensos entre la necesidad de expresión y la sensibilidad emocional. Posible tendencia a la ira irracional seguida de arrepentimiento profundo. Oscilaciones emocionales extremas.",
        medium: "Mayor expresión de emociones, creatividad elevada, necesidad de equilibrar lógica e intuición. La persona puede ser más directa en su comunicación emocional.",
        low: "Período favorable para revisar hábitos emocionales. Tendencia a la introspección sobre patrones de cuidado y nutrición."
      },
      social: {
        high: "Conflictos con figuras maternas o femeninas, dificultad para manejar la intimidad en relaciones. Puede haber discusiones sobre roles de género o cuidado del hogar.",
        medium: "Mejora en la expresión de afectos, mayor apertura emocional. Buen momento para conversaciones familiares significativas.",
        low: "Necesidad de armonizar el entorno doméstico. Tiempo propicio para resolver pendientes emocionales con seres queridos."
      },
      diet: "Alimentos blancos y acuosos: leche, arroz blanco, coco, pepino. Evitar comidas muy condimentadas o ácidas. Tomar infusiones de manzanilla o tila.",
      exercise: "Actividades acuáticas suaves: natación relajante, caminatas junto al agua, baños de luna. Yoga restaurativo con énfasis en la respiración.",
      mitigation: "Baño de sales epsom con gotas de lavanda antes de dormir. Colocar un cuenco de agua de luna sobre la mesita de noche. Evitar confrontaciones familiares.",
      credibility: "Alta en temas emocionales y familiares. Moderada en asuntos de salud digestiva y reproductiva.",
      quote: { text: "La luna es la primera de las estrellas vivientes, y el alma de todas las demás.", author: "Hermes Trismegistro" },
      alchemy: "La Luna corresponde a la Plata en la obra. Representa la materia receptiva, el mercurio que refleja la luz del Sol. La operación es la destilación, que purifica las emociones y separa lo puro de lo impuro.",
      decree: "Mis emociones fluyen como ríos de plata. Nutro mi alma con la sabiduría lunar, abrazando mis ciclos con gracia y aceptación.",
      ritual: {
        stones: ["Luna cuarzo", "Selenita", "Ágata blanca"],
        hours: "Madrugada, entre la medianoche y las 3:00 AM, o durante la luna llena",
        instructions: "Colocar las piedras sobre el pecho mientras se está acostado. Visualizar luz plateada bañando el cuerpo. Recitar el decreto 7 veces en voz baja."
      }
    },
    "Mercurio": {
      riskBase: 20,
      behavioral: {
        high: "Hiperactividad mental, dificultad para concentrarse en una sola tarea, tendencia a la dispersión y al pensamiento obsesivo. Posible insomnio por ruminación mental.",
        medium: "Comunicación fluida, capacidad analítica elevada, creatividad verbal. Buen momento para escritura, estudios y negociaciones.",
        low: "Reflexión sobre patrones de comunicación, tendencia a la revisión de documentos importantes. Ideal para planificación detallada."
      },
      social: {
        high: "Discusiones por conceptos o ideas, rigidez intelectual, dificultad para comprender otras perspectivas. Posibles malentendidos por comunicación excesivamente rápida.",
        medium: "Intercambio de ideas estimulante, capacidad de enseñar y aprender. Buen momento para conferencias y debates constructivos.",
        low: "Necesidad de clarificar comunicaciones pendientes. Tiempo propicio para enviar mensajes importantes o firmar documentos."
      },
      diet: "Frutos secos, semillas de girasol, pescados grasos (salmón, sardinas). Evitar exceso de cafeína y chocolate. Beber infusiones de romero para claridad mental.",
      exercise: "Actividades que coordinen mente y cuerpo: artes marciales, ajedrez, puzzles, lectura en voz alta. Caminatas con atención plena.",
      mitigation: "Llevar un diario de pensamientos durante 20 minutos. Practicar técnicas de respiración cuadrada. Evitar multitasking excesivo.",
      credibility: "Alta en interpretaciones de comunicación y aprendizaje. Moderada en aspectos de salud nerviosa y sistema respiratorio.",
      quote: { text: "El lenguaje es la casa del ser. En su morada habita el hombre.", author: "Hermes Trismegistro" },
      alchemy: "Mercurio corresponde al Mercurio filosofal, el mediador entre lo alto y lo bajo. Representa la volatilidad y la capacidad de transformación. La operación es la sublimación, que eleva lo terrestre a lo celeste.",
      decree: "Mi mente es canal de sabiduría divina. Cada pensamiento fluye con claridad mercuriana, conectando mi conciencia con la inteligencia universal.",
      ritual: {
        stones: ["Ágata azul", "Lapislázuli", "Ámbar"],
        hours: "Amanecer, entre las 5:00 y 7:00 AM, o miércoles al amanecer",
        instructions: "Colocar las piedras sobre la garganta. Encender un sahumerio de romero. Escribir el decreto en un papel y leerlo en voz alta 3 veces, visualizando luz azul en la garganta."
      }
    },
    "Venus": {
      riskBase: 15,
      behavioral: {
        high: "Exceso de indulgencia, pereza materialista, dificultad para establecer límites en el placer. Posible codependencia afectiva o excesos en el consumo.",
        medium: "Mayor expresión de afectos, creatividad artística elevada, capacidad para crear armonía en el entorno. Momento favorable para relaciones y belleza.",
        low: "Reflexión sobre valores personales y recursos materiales. Tendencia a simplificar gustos y necesidades. Ideal para planificación financiera."
      },
      social: {
        high: "Exceso de complacencia, dificultad para decir no, posibles conflictos por celos o posesividad. Puede haber gastos excesivos en regalos o fiestas.",
        medium: "Relaciones armoniosas, expresión genuina de cariño, creatividad compartida. Buen momento para citas, eventos sociales y colaboraciones artísticas.",
        low: "Necesidad de sanar heridas emocionales pasadas. Tiempo propicio para perdonar y soltar resentimientos en relaciones."
      },
      diet: "Alimentos dulces naturales: frutas frescas, miel, chocolate oscuro en moderación, vino tinto. Evitar comidas grasas y excesivamente procesadas.",
      exercise: "Actividades rítmicas y placenteras: baile, yoga con música suave, tai chi en jardines. Caminatas al atardecer por espacios bellos.",
      mitigation: "Rodearse de belleza: flores, música, arte. Dedicar tiempo a una actividad creativa sin juicio. Evitar decisiones financieras impulsivas.",
      credibility: "Alta en interpretaciones de relaciones y creatividad. Moderada en asuntos de salud renal y equilibrio hormonal.",
      quote: { text: "El amor es la belleza, y la belleza es la verdad, y la verdad es el amor eterno.", author: "Platón" },
      alchemy: "Venus corresponde al Cobre en la obra filosofal. Representa la unión de los opuestos, la harmonía entre sol y luna. La operación es la coagulación, que fija los principios espirituales en la materia.",
      decree: "Amor y belleza fluyen a través de mi ser. Mi corazón es templo de armonía, donde cada relación refleja la perfección divina.",
      ritual: {
        stones: ["Rosa cuarzo", "Esmeralda", "Jade"],
        hours: "Atardecer, entre las 17:00 y 19:00 horas",
        instructions: "Colocar las piedras sobre el corazón. Encender una vela rosa o verde. Colocar pétalos de rosa alrededor. Recitar el decreto 5 veces mientras se visualiza luz verde esmeralda emanando del pecho."
      }
    },
    "Marte": {
      riskBase: 40,
      behavioral: {
        high: "Ira descontrolada, impulsividad peligrosa, tendencia a la violencia verbal o física. Alta probabilidad de accidentes o lesiones por imprudencia. Energía marcial desbordada.",
        medium: "Energía elevada para acción y deporte, determinación fuerte, capacidad de liderazgo directo. La persona puede ser más asertiva de lo habitual.",
        low: "Reflexión sobre manejo de la ira, tendencia a la planificación estratégica. Buen momento para iniciar proyectos que requieren disciplina."
      },
      social: {
        high: "Conflictos intensos, posibles discusiones violentas, rivalidad excesiva. Evitar situaciones de confrontación o competencia feroz.",
        medium: "Actividad social intensa, liderazgo en grupos, capacidad de defensa de causas justas. Buen momento para asuntos legales o deportivos.",
        low: "Necesidad de establecer límites saludables en relaciones. Tiempo propicio para liberar tensiones acumuladas de manera constructiva."
      },
      diet: "Alimentos rojos y picantes: pimientos rojos, tomate, jengibre, cúrcuma. Evitar alcohol y carnes muy grasas. Beber infusiones de jengibre caliente.",
      exercise: "Actividades intensas y competitivas: boxeo, artes marciales, Running de alta intensidad, CrossFit. Canalizar la energía en esfuerzo físico vigoroso.",
      mitigation: "Canalizar la energía en deporte intenso. Practicar artes marciales o boxeo con saco. Evitar discusiones y situaciones de riesgo. Usar piedra de granate para estabilizar.",
      credibility: "Alta en interpretaciones de energía y acción. Alta en predicciones de accidentes o lesiones. Moderada en asuntos de salud circulatoria.",
      quote: { text: "La guerra es la madre de todas las cosas. Todos los demás son hijos suyos.", author: "Heraclito de Éfeso" },
      alchemy: "Marte corresponde al Hierro en la obra. Representa la fuerza motriz, el impulso que rompe las formas viejas. La operación es la putrefacción, que destruye lo antiguo para permitir el renacimiento.",
      decree: "Canalizo mi energía con propósito divino. Mi fuerza marcial protege y construye, transformando la pasión en acción sabia y valiente.",
      ritual: {
        stones: ["Rubí", "Granate", "Jaspe rojo"],
        hours: "Mediodía o martes después del mediodía",
        instructions: "Colocar las piedras sobre la base de la columna vertebral (chakra raíz). Realizar 20 flexiones o sentadillas vigorosas. Recitar el decreto 9 veces con fuerza, visualizando luz roja en el centro de la pelvis."
      }
    },
    "Júpiter": {
      riskBase: 10,
      behavioral: {
        high: "Exceso de optimismo, tendencia a la arrogancia filosófica, dilapidación de recursos por confianza excesiva. Posible fanatismo religioso o ideológico.",
        medium: "Expansión de horizontes, generosidad elevada, capacidad de enseñar y aprender. Momento favorable para viajes, estudios superiores y crecimiento espiritual.",
        low: "Reflexión sobre creencias y valores superiores. Tendencia a la planificación a largo plazo. Ideal para revisar metas y aspiraciones."
      },
      social: {
        high: "Exceso de promesas incumplibles, generosidad imprudente, tendencia a imponer creencias a otros. Posibles conflictos por diferencias filosóficas o culturales.",
        medium: "Conexiones significativas con mentores o figuras de sabiduría, oportunidades de viaje o estudio, generosidad mutua. Buen momento para eventos académicos.",
        low: "Necesidad de definir creencias personales. Tiempo propicio para lecturas espirituales o filosóficas."
      },
      diet: "Alimentos festivos y nutritivos: frutas tropicales, especias aromáticas, platos internacionales. Evitar excesos de comida o bebida. El azafrán y la canela son auspiciosos.",
      exercise: "Actividades expansivas: caminatas largas por naturaleza, yoga jupiteriano (posturas de apertura de cadera), viajes de aventura, senderismo.",
      mitigation: "Expandir horizontes a través de la lectura o el viaje. Practicar la generosidad consciente sin excederse. Usar amatista para mantener humildad.",
      credibility: "Alta en interpretaciones de crecimiento y expansión. Moderada en predicciones de viajes o asuntos académicos. Cuidado con excesos de optimismo.",
      quote: { text: "La filosofía es la medicina del alma.", author: "Paracelso" },
      alchemy: "Júpiter corresponde al Estaño en la obra. Representa la expansión y la multiplicación de los principios. La operación es la multiplicación, que aumenta la virtud de la piedra filosofal.",
      decree: "La abundancia divina fluye a través de mi ser. Mis puertas se abren a la sabiduría, la fortuna y el crecimiento ilimitado.",
      ritual: {
        stones: ["Amatista", "Lapislázuli", "Sodalita"],
        hours: "Jueves al amanecer, entre las 5:00 y 7:00 AM",
        instructions: "Colocar las piedras sobre el tercer ojo. Encender una vela azul índigo. Colocar un libro de sabiduría abierto debajo de las piedras. Recitar el decreto 4 veces, visualizando luz índigo irradiando desde la frente."
      }
    },
    "Saturno": {
      riskBase: 35,
      behavioral: {
        high: "Depresión profunda, sentimiento de aislamiento total, exceso de autocrítica, tendencia a la rigidez patológica. Posible crisis existencial por confrontación con límites y mortality.",
        medium: "Mayor responsabilidad, disciplina elevada, necesidad de estructurar la vida. La persona puede sentir presión pero también determinación para superar obstáculos.",
        low: "Reflexión sobre responsabilidades y legado. Tendencia a la planificación a largo plazo. Momento para organizarse y establecer rutinas."
      },
      social: {
        high: "Aislamiento social extremo, conflictos con figuras de autoridad paterna, sentimiento de abandono. Posibles problemas legales o laborales graves.",
        medium: "Mayor seriedad en interacciones, relaciones con personas mayores o de autoridad, tiempo de madurez profesional. Buen momento para asuntos legales formales.",
        low: "Necesidad de revisar compromisos sociales. Tiempo propicio para establecer límites saludables en relaciones."
      },
      diet: "Alimentos oscuros y nutritivos: legumbres, granos enteros, verduras de hoja verde oscuro, quinoa. Evitar azúcares refinados. Beber infusiones de diente de león para el hígado.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, entrenamiento de fuerza progresivo. Evitar excesos de intensidad.",
      mitigation: "Aceptar las lecciones de Saturno con humildad. Practicar la paciencia y la perseverancia. Usar obsidiana para protección. Evitar aislamiento total.",
      credibility: "Muy alta en interpretaciones de estructura y karma. Alta en predicciones de desafíos y responsabilidades. Cuidado con tendencias pesimistas.",
      quote: { text: "No hay camino para la sabiduría sin pasar por la prueba del sufrimiento.", author: "Heráclito de Éfeso" },
      alchemy: "Saturno corresponde al Plomo en la obra. Representa la materia prima, el rebis que debe ser purificado. La operación es la negredo, la primera fase de la obra donde muere lo viejo para renacer.",
      decree: "Acepto las lecciones de Saturno con gratitud. Mi disciplina construye cimientos eternos, transformando cada obstáculo en escalón hacia la maestría.",
      ritual: {
        stones: ["Obsidiana", "Onix negro", "Tourmalina negra"],
        hours: "Sábado a medianoche o viernes después del atardecer",
        instructions: "Colocar las piedras sobre los pies. Encender una vela negra o índigo. Meditar 20 minutos en silencio absoluto. Recitar el decreto 7 veces en tono grave y solemne, visualizando raíces negras conectando el cuerpo con la tierra."
      }
    },
    "Urano": {
      riskBase: 30,
      behavioral: {
        high: "Comportamiento errático, rebeldía extrema, ruptura violenta de patrones. Posible crisis de identidad que lleva a decisiones drásticas e irreversibles. Energía eléctrica descontrolada.",
        medium: "Insight repentinos, innovación creativa, apertura a nuevas perspectivas. La persona puede experimentar cambios de humor pero también momentos de genialidad.",
        low: "Reflexión sobre áreas de la vida que requieren innovación. Tendencia a buscar nuevas formas de expresión. Ideal para planificar cambios graduales."
      },
      social: {
        high: "Rupturas repentinas en relaciones, conflictos con autoridades establecidas, tendencia a la anarquía social. Posible aislamiento por excentricidad.",
        medium: "Conexiones con personas inusuales o innovadoras, participación en movimientos sociales, ruptura de convenciones. Buen momento para eventos alternativos.",
        low: "Necesidad de evaluar qué estructuras personales necesitan renovación. Tiempo propicio para envisionar un futuro diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, cebolla, brotes de soja, algas. Evitar alimentos muy procesados. Beber agua con limón al despertar.",
      exercise: "Actividades inusuales y estimulantes: aeróbicos en grupo, ciclismo urbano, parkour, skate, yoga con música electrónica. Buscar variedad constante.",
      mitigation: "Canalizar la energía disruptiva en proyectos creativos. Evitar decisiones drásticas en relaciones o carrera. Usar turquesa para estabilizar la energía.",
      credibility: "Alta en interpretaciones de cambios y transformación. Moderada en predicciones específicas. Urano es impredecible por naturaleza.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Urano no tiene correspondencia clásica en la alquimia tradicional, pero se asocia con la electricidad vital y el éter. Representa la chispa divina que despierta la materia. Su operación es la iluminación repentina.",
      decree: "Abrazo el cambio con valentía uraniana. Mi espíritu se libera de cadenas obsoletas, innovando mi existencia con la fuerza del trueno divino.",
      ritual: {
        stones: ["Ágata azul celeste", "Larimar", "Turquesa"],
        hours: "Martes en la madrugada, entre las 3:00 y 5:00 AM",
        instructions: "Colocar las piedras sobre el tercer ojo. Encender una vela celeste o eléctrica. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces en tono enérgico, visualizando rayos eléctricos azules envolviendo el cuerpo."
      }
    },
    "Neptuno": {
      riskBase: 28,
      behavioral: {
        high: "Confusión extrema, tendencia a la evasión por sustancias, delirios espirituales o paranoicos. Dificultad para distinguir realidad de fantasía. Posible adicción a cualquier forma de escapismo.",
        medium: "Intuición elevada, creatividad poética, sensibilidad espiritual agudizada. La persona puede experimentar momentos de transcendencia o conexión con lo divino.",
        low: "Reflexión sobre sueños y aspiraciones espirituales. Tendencia a la contemplación y la meditación. Ideal para arte o música contemplativa."
      },
      social: {
        high: "Engaños autoinfligidos o infligidos, confusión en relaciones, tendencia al victimismo o al rescate de otros. Posibles engaños sentimentales.",
        medium: "Conexiones espirituales profundas, altruismo elevado, inspiración artística compartida. Buen momento para eventos benéficos o artísticos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla, pescados blancos. Evitar alcohol y sustancias psicoactivas. Ayuno de líquidos recomendado.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al mar o ríos. Arte como ejercicio.",
      mitigation: "Mantener conexión con la realidad a través del arte o la naturaleza. Evitar sustancias psicoactivas. Usar amatista para claridad espiritual. Practicar la discernimiento.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Neptuno corresponde a la disolución en la obra. Representa la disolución de la forma para acceder al espíritu. La operación es la disolución, donde la materia se devuelve al agua primordial.",
      decree: "Mi visión trasciende los velos de la ilusión. El agua divina purifica mi conciencia, revelando la verdad eterna que habita en mi alma.",
      ritual: {
        stones: ["Amatista", "Lapislázuli", "Aquamarina"],
        hours: "Miércoles al atardecer o noches de luna llena",
        instructions: "Colocar las piedras sobre el tercer ojo. Encender una vela azul marino. Colocar un cuenco de agua con pétalos de lavanda al lado. Meditar 15 minutos escuchando sonidos de agua. Recitar el decreto 5 veces en susurro."
      }
    },
    "Plutón": {
      riskBase: 45,
      behavioral: {
        high: "Obsesiones profundas, tendencia al control manipulador, crisis de poder intensa. Posible exposición de secretos oscuros o confrontación con sombras personales. Energía plutoniana desbordada.",
        medium: "Transformación profunda, renacimiento psicológico, capacidad de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos.",
        low: "Reflexión sobre poder personal y sus usos. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra."
      },
      social: {
        high: "Poder destructivo en relaciones, manipulación o ser manipulado, exposición de secretos que destruyen. Posibles conflictos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman profundamente, relaciones intensas y regenerativas, poder compartido de manera constructiva. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de poder. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, berenjena, ciruelas negras, ajo negro, cacao puro. Evitar carnes muy rojas. Beber infusiones de cardo mariano para el hígado.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, deportes de contacto controlados, danza catártica.",
      mitigation: "Aceptar la transformación sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección. Evitar el poder sobre otros.",
      credibility: "Alta en interpretaciones de transformación y poder. Moderada en predicciones de crisis. Plutón opera en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Plutón corresponde a la transmutación última en la obra. Representa la muerte y resurrección del alma. La operación es la multiplicación y la proyección, donde la piedra filosofal transforma todo lo que toca.",
      decree: "Renazco de las cenizas de mi viejo yo. El fuego plutoniano purifica mi esencia, forjando un ser más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Granate", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar las piedras sobre la base de la columna vertebral. Encender una vela roja oscura. Escribir en un papel algo que se desea soltar y quemarlo en un cuenco resistente. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    }
  },
  "Luna": {
    "Sol": {
      riskBase: 30,
      behavioral: {
        high: "Conflictos entre necesidades emocionales e identidad, oscilaciones entre autocuidado y egoísmo. Posible tendencia a manipular emocionalmente para obtener atención.",
        medium: "Mayor expresión de emociones en liderazgo, creatividad emocional elevada, capacidad de nutrir mientras brilla. Equilibrio dinámico entre ser y sentir.",
        low: "Reflexión sobre cómo las emociones afectan la autoestima. Tendencia a establecer rutinas de autocuidado. Ideal para trabajar en la imagen personal."
      },
      social: {
        high: "Necesidad excesiva de validación emocional, conflicto entre dar y recibir atención, posibles dramas en relaciones íntimas.",
        medium: "Expresión carismática de emociones, liderazgo empático, capacidad de inspirar a otros con vulnerabilidad genuina.",
        low: "Momento para sanar la relación con figuras parentales. Tiempo propicio para reconciliaciones familiares."
      },
      diet: "Alimentos nutritivos y dorados: caldos de pollo, sopa de trigo, miel con limón. Evitar comidas frías o crudas. Comer alimentos tibios para calmar el sistema.",
      exercise: "Actividades que equilibren cuerpo y emociones: yoga suave, caminatas al sol, natación relajante, danza libre.",
      mitigation: "Meditar con las manos sobre el corazón. Permitirse llorar si es necesario. Usar cuarzo rosa para equilibrar emociones y solar.",
      credibility: "Alta en interpretaciones emocionales y de autoestima. Moderada en aspectos de salud cardiovascular y digestiva.",
      quote: { text: "El alma que está en armonía con el cosmos nunca pierde su center.", author: "Lao Tzu" },
      alchemy: "La unión Luna-Sol representa la conjunción del Rey y la Reina, el matrimonio químico. Es la integración de opuestos que genera el Rebis perfecto.",
      decree: "Mis emociones nutren mi identidad. Soy luz que se refleja en el agua de mi alma, brillando con la fuerza dual del ser y el sentir.",
      ritual: {
        stones: ["Cuarzo rosa", "Citrino"],
        hours: "Amanecer, cuando el sol emerge sobre el horizonte",
        instructions: "Colocar cuarzo rosa sobre el corazón y citrino sobre el plexo solar. Respirar profundamente 7 veces, visualizando luz dorada y rosa fusionándose."
      }
    },
    "Luna": {
      riskBase: 20,
      behavioral: {
        high: "Emociones desbordadas, sensibilidad extrema, llanto incontrolable, posibles ataques de pánico. Las defensas emocionales están completamente abiertas.",
        medium: "Luna en Luna es fuerte emocionalmente, la persona se siente en su elemento. Mayor intuición, sueños vívidos, conexión profunda con el hogar y la familia.",
        low: "Necesidad de reorganizar el espacio emocional. Tendencia a crear rituales de cuidado personal. Momento de recargar energías en el hogar."
      },
      social: {
        high: "Necesidad excesiva de protección emocional, hipersensibilidad a rechazos, posibles conflictos familiares por celos o posesividad.",
        medium: "Conexiones emocionales profundas, capacidad de crear refugio seguro para otros, expresión maternal elevada.",
        low: "Momento para visitar a familiares o reaperturar lazos afectivos. Tiempo propicio para criar o cuidar de otros."
      },
      diet: "Alimentos blancos y reconfortantes: leche templada, arroz con leche, sopa de verduras, caldos de hueso. Evitar alimentos fríos y crudos.",
      exercise: "Actividades acuáticas y lunares: natación suave, baños de luna, caminatas junto al agua, yoga restaurativo.",
      mitigation: "Darse un baño de sales con lavanda. Colocar un cuenco de agua de luna en la habitación. Permitirse sentir sin juicio.",
      credibility: "Muy alta en interpretaciones emocionales y familiares. Alta en predicciones de ciclos emocionales y reproductivos.",
      quote: { text: "El agua es la fuerza motriz de toda la naturaleza.", author: "Leonardo da Vinci" },
      alchemy: "Luna en Luna es el opus contra naturam, la duplicación de la luna. Representa la purificación absoluta del mercurio emocional, preparándolo para la obra mayor.",
      decree: "Mi alma se refleja en espejos de plata. Mis emociones son ríos sagrados que nutren mi ser con la fuerza de la madre universal.",
      ritual: {
        stones: ["Luna cuarzo", "Selenita", "Ágata blanca"],
        hours: "Madrugada durante luna llena",
        instructions: "Colocar todas las piedras sobre el cuerpo acostado. Visualizar luz plateada bañando cada célula. Cantar o tararear suavemente."
      }
    },
    "Mercurio": {
      riskBase: 25,
      behavioral: {
        high: "Emociones que nublan el juicio, pensamientos obsesivos, dificultad para expresar sentimientos con claridad. Posible tendencia a rumiar conversaciones pasadas.",
        medium: "Comunicación emocional fluida, capacidad de articular sentimientos, intuición aplicada a problemas prácticos. Buen momento para escritura emocional.",
        low: "Reflexión sobre patrones de comunicación emocional. Tendencia a escribir cartas o diarios. Ideal para resolver malentendidos."
      },
      social: {
        high: "Discusiones por malinterpretación de emociones, necesidad excesiva de explicar sentimientos, posible confusión en conversaciones delicadas.",
        medium: "Expresión clara de emociones, capacidad de mediar en conflictos, diálogo empático y constructivo.",
        low: "Momento para enviar mensajes importantes o escribir cartas de reconciliación. Tiempo propicio para conversaciones telefónicas significativas."
      },
      diet: "Alimentos que nutran sistema nervioso y digestivo: pescado, nueces, arroz integral, verduras verdes. Evitar cafeína excesiva.",
      exercise: "Actividades que coordinen mente y emociones: caminatas meditativas, yoga con mantra, escritura creativa, lectura en voz alta.",
      mitigation: "Escribir un diario emocional durante 20 minutos. Practicar la respiración diafragmática. Evitar discusiones importantes por teléfono.",
      credibility: "Alta en interpretaciones de comunicación emocional. Moderada en aspectos de salud nerviosa y digestiva.",
      quote: { text: "El lenguaje es el vestido del pensamiento.", author: "Samuel Johnson" },
      alchemy: "La unión Luna-Mercurio representa la disolución del mercurio en agua. Es la preparación del mercurio filosofal para la obra de transformación.",
      decree: "Mis palabras nacen del corazón y se nutren de la mente. Mi comunicación es puente sagrado entre sentir y comprender.",
      ritual: {
        stones: ["Ágata azul", "Cuarzo rosa"],
        hours: "Amanecer o miércoles al mediodía",
        instructions: "Colocar ágata azul en la garganta y cuarzo rosa en el corazón. Respirar profundamente 7 veces. Recitar el decreto 3 veces en voz suave."
      }
    },
    "Venus": {
      riskBase: 15,
      behavioral: {
        high: "Exceso de indulgencia emocional, pereza, tendencia al consumo emocional por comfort. Posible codependencia afectiva o apego excesivo a personas o cosas.",
        medium: "Armonía emocional, expresión afectiva elegante, creatividad artística elevada. La persona se siente amada y capaz de amar.",
        low: "Reflexión sobre valores afectivos y necesidades emocionales. Tendencia a simplificar relaciones y crear armonía en el hogar."
      },
      social: {
        high: "Exceso de complacencia emocional, dificultad para poner límites en relaciones, posibles celos o posesividad.",
        medium: "Relaciones armónicas y nutritivas, expresión de cariño genuino, capacidad de crear belleza compartida.",
        low: "Momento para reparar relaciones dañadas. Tiempo propicio para gestos de amor simples y sinceros."
      },
      diet: "Alimentos dulces y naturales: frutas, miel, dulces artesanales, vino tinto en moderación. Evitar comidas pesadas o grasas.",
      exercise: "Actividades rítmicas y placenteras: baile en pareja, yoga con música suave, masajes, caminatas por jardines.",
      mitigation: "Rodearse de belleza y amor. Dedicarse a la autocuidado sensorial. Evitar decisiones emocionales impulsivas.",
      credibility: "Alta en interpretaciones de amor y relaciones. Moderada en asuntos de salud renal y reproductiva.",
      quote: { text: "Donde hay amor, hay vida.", author: "Mahatma Gandhi" },
      alchemy: "Luna-Venus es la conjunción de las dos luces menores, la plata y el cobre. Representa la armonía entre lo receptivo y lo amoroso, generando el azufre filosofal.",
      decree: "Mi amor fluye con la gracia de Venus y la profundidad de la Luna. Soy un vaso de dulzura que nutre y sana a quienes me rodean.",
      ritual: {
        stones: ["Rosa cuarzo", "Jade"],
        hours: "Atardecer o viernes al mediodía",
        instructions: "Colocar rosa cuarzo sobre el corazón y jade en el plexo solar. Encender una vela rosa. Recitar el decreto 5 veces mientras se visualiza luz verde y rosa envolviendo el cuerpo."
      }
    },
    "Marte": {
      riskBase: 35,
      behavioral: {
        high: "Ira emocional desbordada, reacciones impulsivas por heridas emocionales, posibles arrebatos de violencia verbal. Las emociones no procesadas se convierten en furia.",
        medium: "Energía emocional intensa, pasión elevada, capacidad de defender emociones con fuerza. La persona puede ser más directa y apasionada de lo habitual.",
        low: "Reflexión sobre manejo de la ira emocional. Tendencia a la acción decidida en asuntos del corazón. Ideal para establecer límites emocionales."
      },
      social: {
        high: "Conflictos emocionales intensos, posibles peleas verbales, rivalidad en relaciones íntimas. Evitar confrontaciones emocionales.",
        medium: "Pasión compartida, actividad social intensa, capacidad de defender a seres queridos con vigor.",
        low: "Momento para liberar tensiones emocionales a través del ejercicio físico. Tiempo propicio para conversaciones directas sobre sentimientos."
      },
      diet: "Alimentos que reduzcan inflamación emocional: pescados grasos, frutos rojos, cúrcuma, jengibre. Evitar alcohol y picantes excesivos.",
      exercise: "Actividades físicas intensas para canalizar ira: boxeo, Running, natación de velocidad, artes marciales.",
      mitigation: "Canalizar la ira en ejercicio físico intenso. Evitar confrontaciones emocionales. Usar granate para estabilizar emociones.",
      credibility: "Alta en interpretaciones de pasión y conflicto emocional. Moderada en aspectos de salud circulatoria y reproductiva.",
      quote: { text: "La pasión es la fuerza que mueve al mundo.", author: "Arthur Schopenhauer" },
      alchemy: "Luna-Marte representa la conjunción de la plata con el hierro. Es la fase donde las emociones se forjan en el fuego de la pasión, generando la materia activa de la obra.",
      decree: "Mi pasión se transforma en poder constructivo. Mis emociones son fuego sagrado que purifica y protege mi camino.",
      ritual: {
        stones: ["Rubí", "Granate"],
        hours: "Martes al mediodía o después del atardecer",
        instructions: "Colocar rubí sobre el corazón y granate en la base de la columna. Realizar ejercicio intenso 15 minutos. Recitar el decreto 9 veces con fuerza."
      }
    },
    "Júpiter": {
      riskBase: 12,
      behavioral: {
        high: "Exceso de optimismo emocional, dilapidación afectiva, tendencia a idealizar relaciones. Posible exageración de sentimientos o promesas emocionales.",
        medium: "Expansión emocional positiva, generosidad afectiva elevada, sabiduría emocional creciente. La persona se siente emocionalmente abundante.",
        low: "Reflexión sobre creencias emocionales y valores afectivos. Tendencia a la filosofía del amor. Ideal para lecturas espirituales sobre relaciones."
      },
      social: {
        high: "Generosidad emocional excesiva, dificultad para establecer límites en amistades, posibles promesas emocionales incumplibles.",
        medium: "Conexiones emocionales profundas con personas sabias, generosidad mutua, eventos sociales expansivos.",
        low: "Momento para expandir círculos de amistad. Tiempo propicio para eventos culturales o espirituales."
      },
      diet: "Alimentos festivos y nutritivos: frutas tropicales, especias aromáticas, platos internacionales. Evitar excesos de comida o bebida.",
      exercise: "Actividades expansivas al aire libre: senderismo, caminatas largas, yoga en la naturaleza, viajes de aventura.",
      mitigation: "Expandir horizontes emocionales a través de la lectura o el viaje. Practicar la gratitud diaria. Usar amatista para mantener humildad.",
      credibility: "Alta en interpretaciones de expansión emocional. Moderada en predicciones de viajes o asuntos académicos.",
      quote: { text: "La gratitud es la memoria del corazón.", author: "Lao Tzu" },
      alchemy: "Luna-Júpiter es la conjunción de la plata con el estaño. Representa la expansión del mercurio emocional, generando la virtud multiplicada de la piedra.",
      decree: "Mi corazón se expande con la generosidad de Júpiter. Mis emociones son ríos de abundancia que nutren todo lo que tocan.",
      ritual: {
        stones: ["Amatista", "Ágata azul"],
        hours: "Jueves al amanecer",
        instructions: "Colocar amatista sobre el tercer ojo y ágata en el corazón. Respirar profundamente 9 veces. Recitar el decreto 4 veces con gratitud."
      }
    },
    "Saturno": {
      riskBase: 38,
      behavioral: {
        high: "Depresión emocional profunda, sentimiento de vacío afectivo, dificultad para expresar emociones, tendencia al aislamiento emocional. Posible duelo prolongado.",
        medium: "Seriedad emocional, necesidad de estructurar sentimientos, madurez emocional creciente. La persona puede establecer límites afectivos saludables.",
        low: "Reflexión sobre responsabilidades emocionales. Tendencia a establecer rutinas de cuidado emocional. Ideal para terapia o trabajo interior."
      },
      social: {
        high: "Aislamiento emocional extremo, dificultad para conectarse con otros, posibles rupturas por rigidez emocional.",
        medium: "Relaciones serias y comprometidas, responsabilidad emocional elevada, conexión con personas mayores o sabias.",
        low: "Momento para revisar compromisos emocionales. Tiempo propicio para establecer límites saludables en relaciones."
      },
      diet: "Alimentos nutritivos y estables: legumbres, granos enteros, verduras de hoja verde oscuro, sopas calientes. Evitar azúcares refinados.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, journaling emocional.",
      mitigation: "Aceptar las lecciones emocionales de Saturno con humildad. Practicar la paciencia emocional. Usar obsidiana para protección.",
      credibility: "Muy alta en interpretaciones de madurez emocional. Alta en predicciones de desafíos emocionales y duelo.",
      quote: { text: "El sufrimiento es la puerta de entrada al conocimiento de uno mismo.", author: "Carl Gustav Jung" },
      alchemy: "Luna-Saturno es la conjunción de la plata con el plomo. Representa la negredo emocional, la fase donde las emociones deben morir para renacer purificadas.",
      decree: "Acepto las lecciones de Saturno en mi corazón. Mi madurez emocional construye cimientos eternos de sabiduría y fortaleza interior.",
      ritual: {
        stones: ["Obsidiana", "Onix negro"],
        hours: "Sábado a medianoche",
        instructions: "Colocar obsidiana sobre el corazón. Meditar 20 minutos en silencio. Recitar el decreto 7 veces en tono grave, visualizando raíces que estabilizan las emociones."
      }
    },
    "Urano": {
      riskBase: 32,
      behavioral: {
        high: "Emociones erráticas, cambios de humor extremos, rebeldía emocional, posibles crisis de identidad afectiva. La estabilidad emocional se tambalea violentamente.",
        medium: "Insight emocionales repentinos, apertura a nuevas formas de amar, innovación en la expresión afectiva. La persona puede experimentar amor a primera vista.",
        low: "Reflexión sobre áreas emocionales que requieren renovación. Tendencia a buscar nuevas formas de expresión afectiva. Ideal para planes de crecimiento emocional."
      },
      social: {
        high: "Rupturas emocionales repentinas, rebeldía en relaciones, posibles separaciones o cambios drásticos en el estado afectivo.",
        medium: "Conexiones emocionales inusuales, amor por causas sociales, expresión afectiva no convencional.",
        low: "Momento para evaluar qué patrones emocionales necesitan renovación. Tiempo propicio para envisionar un futuro afectivo diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, brotes de soja, algas. Evitar alimentos muy procesados. Beber agua con limón.",
      exercise: "Actividades inusuales: aeróbicos en grupo, ciclismo, yoga con música electrónica, danza libre e improvisada.",
      mitigation: "Canalizar la energía emocional disruptiva en proyectos creativos. Evitar decisiones emocionales drásticas. Usar turquesa para estabilizar.",
      credibility: "Alta en interpretaciones de cambios emocionales. Moderada en predicciones específicas. Urano es inherentemente impredecible.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Luna-Urano representa la irrupción de la chispa divina en las emociones. Es el rayo que ilumina la oscuridad emocional, generando la iluminación súbita.",
      decree: "Mis emociones se liberan con la fuerza del trueno. Abrazo el cambio afectivo con valentía, renovando mi capacidad de amar sin miedo.",
      ritual: {
        stones: ["Larimar", "Turquesa"],
        hours: "Martes en la madrugada",
        instructions: "Colocar larimar sobre el corazón y turquesa en la garganta. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces con energía."
      }
    },
    "Neptuno": {
      riskBase: 28,
      behavioral: {
        high: "Confusión emocional extrema, tendencia a diluirse en otros, pérdida de límites personales. Posible adicción a relaciones o personas como forma de escapismo.",
        medium: "Intuición emocional elevada, compasión profunda, capacidad de amor incondicional. La persona puede experimentar unión mística.",
        low: "Reflexión sobre sueños emocionales y aspiraciones afectivas. Tendencia a la contemplación y la meditación emocional. Ideal para arte o música."
      },
      social: {
        high: "Engaños emocionales, confusiones en relaciones, tendencia al rescate o al victimismo. Posibles relaciones tóxicas por falta de límites.",
        medium: "Conexiones espirituales profundas, amor altruista, inspiración artística compartida. Buen momento para eventos benéficos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al agua.",
      mitigation: "Mantener conexión con la realidad emocional a través del arte. Evitar sustancias psicoactivas. Usar amatista para claridad.",
      credibility: "Moderada en interpretaciones de espiritualidad emocional. Baja en predicciones concretas. Neptuno disuelve los límites.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Luna-Neptuno es la disolución de la luna en agua primordial. Representa la fase más profunda del opus, donde toda forma emocional se disuelve en el espíritu.",
      decree: "Mi amor trasciende los velos de la ilusión. El agua divina purifica mis emociones, revelando la verdad eterna de mi corazón.",
      ritual: {
        stones: ["Amatista", "Aquamarina"],
        hours: "Noches de luna llena",
        instructions: "Colocar amatista sobre el tercer ojo y aquamarina en el corazón. Colocar un cuenco de agua con pétalos al lado. Meditar 15 minutos escuchando sonidos de agua."
      }
    },
    "Plutón": {
      riskBase: 45,
      behavioral: {
        high: "Emociones tóxicas desbordadas, posesividad extrema, manipulación emocional, tendencia a la venganza. Posible obsesión por alguien o algo que destruye la paz interior.",
        medium: "Transformación emocional profunda, renacimiento psicológico, capacidad de soltar viejas heridas. La persona puede experimentar purificación emocional intensa.",
        low: "Reflexión sobre poder emocional y sus usos. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra emocional."
      },
      social: {
        high: "Poder destructivo en relaciones emocionales, manipulación o ser manipulado, exposición de secretos que destruyen vínculos.",
        medium: "Conexiones que transforman emociones profundamente, relaciones intensas y regenerativas, poder emocional compartido.",
        low: "Necesidad de soltar viejos patrones emocionales. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, ciruelas negras, cacao puro. Evitar carnes muy rojas. Beber infusiones de cardo mariano.",
      exercise: "Actividades transformadoras: yoga de potencia, danza catártica, entrenamiento de fuerza intenso.",
      mitigation: "Aceptar la transformación emocional sin resistencia. Trabajar con terapeuta. Usar obsidiana roja para protección emocional.",
      credibility: "Alta en interpretaciones de transformación emocional. Moderada en predicciones de crisis. Plutón opera en ciclos profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Luna-Plutón es la muerte y resurrección del mercurio emocional. Representa la putrefacción absoluta de las emociones viejas para que nazcan nuevas.",
      decree: "Renazco de las cenizas de mis viejas heridas. El fuego plutoniano purifica mi corazón, forjando un amor más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Ópalo negro"],
        hours: "Noche profunda",
        instructions: "Colocar obsidiana roja sobre el corazón. Escribir algo que se desea soltar y quemarlo en un cuenco. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    }
  },
  "Mercurio": {
    "Sol": {
      riskBase: 22,
      behavioral: {
        high: "Intelecto arrogante, comunicaciones paradójicas, pensamiento excesivamente rápido que dificulta la expresión clara. Posible tendencia a monopolizar conversaciones con ideas propias.",
        medium: "Comunicación fluida y brillante, capacidad analítica aplicada a la identidad, expresión clara de propósito. La persona puede articular su visión con maestría.",
        low: "Reflexión sobre cómo el pensamiento afecta la autoestima. Tendencia a revisar documentos importantes. Ideal para planificación estratégica personal."
      },
      social: {
        high: "Discusiones intelectuales con figuras de autoridad, necesidad de demostrar superioridad mental, posibles conflictos por diferencias filosóficas.",
        medium: "Intercambio de ideas estimulante con líderes, capacidad de enseñar y aprender de figuras de autoridad. Buen momento para presentaciones públicas.",
        low: "Momento para aclarar comunicaciones pendientes con superiores. Tiempo propicio para enviar propuestas o currículums."
      },
      diet: "Alimentos que nutran el sistema nervioso y cerebral: pescados grasos, frutos secos, huevos, arándanos. Evitar exceso de azúcar y alcohol.",
      exercise: "Actividades que coordinen mente y cuerpo: ajedrez, artes marciales, escritura creativa, puzzles complejos.",
      mitigation: "Meditar 10 minutos al amanecer. Practicar la escucha activa. Evitar multitasking excesivo. Usar lapislázuli para claridad mental.",
      credibility: "Alta en interpretaciones de comunicación y liderazgo. Moderada en aspectos de salud cardiovascular y sistema nervioso.",
      quote: { text: "El lenguaje es la casa del ser. En su morada habita el hombre.", author: "Martin Heidegger" },
      alchemy: "Mercurio-Sol es la unión del mercurio con el sol, el principio masculino y femenino en el intelecto. Representa la iluminación del pensamiento por la luz de la verdad.",
      decree: "Mi mente brilla con la luz del Sol. Mis pensamientos son canales de sabiduría que iluminan mi camino y el de quienes me escuchan.",
      ritual: {
        stones: ["Lapislázuli", "Citrino"],
        hours: "Miércoles al mediodía",
        instructions: "Colocar lapislázuli sobre la garganta y citrino sobre el plexo solar. Recitar el decreto 7 veces mientras se visualiza luz dorada en la garganta."
      }
    },
    "Luna": {
      riskBase: 28,
      behavioral: {
        high: "Confusión entre pensamiento y emoción, ideas obsesivas sobre asuntos emocionales, dificultad para pensar con claridad cuando las emociones están alteradas.",
        medium: "Comunicación emocional articulada, capacidad de expresar sentimientos con palabras, intuición aplicada a problemas prácticos. Buen momento para escritura íntima.",
        low: "Reflexión sobre patrones de comunicación emocional. Tendencia a escribir cartas o diarios emocionales. Ideal para conversaciones familiares."
      },
      social: {
        high: "Discusiones emocionales confusas, necesidad excesiva de explicar sentimientos, posibles malentendidos en conversaciones delicadas.",
        medium: "Expresión clara de emociones, capacidad de mediar en conflictos familiares, diálogo empático y constructivo.",
        low: "Momento para enviar mensajes importantes a familiares. Tiempo propicio para conversaciones telefónicas significativas."
      },
      diet: "Alimentos que nutran sistema nervioso y digestivo: pescado, nueces, arroz integral, verduras verdes. Evitar cafeína excesiva.",
      exercise: "Actividades que coordinen mente y emociones: caminatas meditativas, yoga con mantra, escritura creativa, journaling.",
      mitigation: "Escribir un diario emocional durante 20 minutos. Practicar respiración diafragmática. Evitar discusiones importantes por teléfono.",
      credibility: "Alta en interpretaciones de comunicación emocional. Moderada en aspectos de salud nerviosa y digestiva.",
      quote: { text: "El alma tiene su propio lenguaje, y el cuerpo es su traductor.", author: "Wilhelm Reich" },
      alchemy: "Mercurio-Luna es la disolución del mercurio en agua. Representa la preparación del mercurio filosofal para la obra de transformación emocional.",
      decree: "Mis palabras nacen del corazón y se nutren de la mente. Mi comunicación es puente sagrado entre sentir y comprender.",
      ritual: {
        stones: ["Ágata azul", "Cuarzo rosa"],
        hours: "Amanecer o miércoles al mediodía",
        instructions: "Colocar ágata azul en la garganta y cuarzo rosa en el corazón. Respirar profundamente 7 veces. Recitar el decreto 3 veces en voz suave."
      }
    },
    "Mercurio": {
      riskBase: 18,
      behavioral: {
        high: "Hiperactividad mental extrema, dificultad para concentrarse, tendencia a la dispersión y al pensamiento obsesivo. Posible insomnio por ruminación mental.",
        medium: "Capacidad analítica elevada, expresión fluida, creatividad verbal excepcional. Momento excelente para escritura, estudios y negociaciones.",
        low: "Reflexión sobre patrones de pensamiento. Tendencia a revisar y organizar información. Ideal para planificación detallada y aprendizaje."
      },
      social: {
        high: "Discusiones por conceptos o ideas, rigidez intelectual, dificultad para comprender otras perspectivas. Posibles malentendidos por comunicación excesivamente rápida.",
        medium: "Intercambio de ideas estimulante, capacidad de enseñar y aprender. Buen momento para conferencias y debates constructivos.",
        low: "Necesidad de clarificar comunicaciones pendientes. Tiempo propicio para enviar mensajes importantes o firmar documentos."
      },
      diet: "Frutos secos, semillas de girasol, pescados grasos. Evitar exceso de cafeína y chocolate. Beber infusiones de romero para claridad mental.",
      exercise: "Actividades que coordinen mente y cuerpo: artes marciales, ajedrez, puzzles, lectura en voz alta. Caminatas con atención plena.",
      mitigation: "Llevar un diario de pensamientos durante 20 minutos. Practicar técnicas de respiración cuadrada. Evitar multitasking excesivo.",
      credibility: "Alta en interpretaciones de comunicación y aprendizaje. Moderada en aspectos de salud nerviosa y sistema respiratorio.",
      quote: { text: "El pensamiento es la semilla de la acción.", author: "Heraclito de Éfeso" },
      alchemy: "Mercurio con Mercurio es el opus contra naturam, la duplicación del mercurio. Representa la purificación absoluta del principio pensante, preparándolo para la obra mayor.",
      decree: "Mi mente es canal de sabiduría divina. Cada pensamiento fluye con claridad mercuriana, conectando mi conciencia con la inteligencia universal.",
      ritual: {
        stones: ["Ágata azul", "Lapislázuli", "Ámbar"],
        hours: "Amanecer, miércoles",
        instructions: "Colocar las piedras sobre la garganta. Encender un sahumerio de romero. Escribir el decreto en un papel y leerlo en voz alta 3 veces."
      }
    },
    "Venus": {
      riskBase: 15,
      behavioral: {
        high: "Pensamiento obsesivo sobre relaciones, celos intelectuales, tendencia a racionalizar sentimientos. Posible manipulación verbal en asuntos amorosos.",
        medium: "Comunicación encantadora, expresión artística verbal, capacidad de crear armonía a través de las palabras. La persona puede ser elocuente y persuasiva.",
        low: "Reflexión sobre valores personales a través de la escritura. Tendencia a componer cartas de amor o poesía. Ideal para creación artística."
      },
      social: {
        high: "Exceso de cortesía verbal que enmascara sentimientos reales, posibles coqueteos o promesas incumplidas por exceso de verbalización.",
        medium: "Expresión verbal de afectos genuinos, capacidad de crear belleza a través de las palabras, diálogo armonioso y placentero.",
        low: "Momento para expresar sentimientos a través de cartas o mensajes escritos. Tiempo propicio para crear arte con palabras."
      },
      diet: "Alimentos que nutran sistema nervioso y creatividad: frutas frescas, chocolate oscuro, vino tinto en moderación, frutos secos.",
      exercise: "Actividades rítmicas y mentales: baile, yoga con música, escritura creativa, lectura de poesía al aire libre.",
      mitigation: "Dedicarse a la escritura creativa o artística. Rodearse de belleza y música. Evitar decisiones financieras impulsivas por exceso de persuasión.",
      credibility: "Alta en interpretaciones de creatividad verbal y relaciones. Moderada en asuntos de salud renal y equilibrio hormonal.",
      quote: { text: "Las palabras son los puentes del alma.", author: "Confucio" },
      alchemy: "Mercurio-Venus es la unión del mercurio con el cobre. Representa la creación de la plata vidriosa, donde la mente se une con la belleza para generar arte.",
      decree: "Mi mente crea belleza infinita. Mis palabras son puentes de amor que conectan corazones y mentes en armonía perfecta.",
      ritual: {
        stones: ["Rosa cuarzo", "Lapislázuli"],
        hours: "Viernes al atardecer",
        instructions: "Colocar rosa cuarzo sobre el corazón y lapislázuli en la garganta. Escribir un poema o carta de amor. Recitar el decreto 5 veces."
      }
    },
    "Marte": {
      riskBase: 32,
      behavioral: {
        high: "Comunicación agresiva, pensamientos obsesivos sobre conflicto, tendencia a la palabra violenta. Posible tendencia a discutir o confrontar verbalmente.",
        medium: "Comunicación directa y asertiva, capacidad de defender ideas con fuerza, pensamiento estratégico elevado. La persona puede ser un negociador formidable.",
        low: "Reflexión sobre patrones de comunicación agresiva. Tendencia a la planificación estratégica. Ideal para negociaciones o debates importantes."
      },
      social: {
        high: "Discusiones acaloradas, posibles discusiones verbales intensas, rivalidad intelectual excesiva. Evitar situaciones de confrontación.",
        medium: "Comunicación enérgica y persuasiva, capacidad de liderar debates, defensa apasionada de ideas. Buen momento para asuntos legales.",
        low: "Momento para establecer límites comunicativos saludables. Tiempo propicio para conversaciones directas sobre conflictos pendientes."
      },
      diet: "Alimentos que reduzcan inflamación y aumenten energía mental: pescados grasos, frutos rojos, cúrcuma, jengibre. Evitar alcohol y picantes excesivos.",
      exercise: "Actividades físicas intensas para canalizar energía mental: boxeo, Running, artes marciales, entrenamiento de alta intensidad.",
      mitigation: "Canalizar la energía mental en escritura o debate constructivo. Evitar confrontaciones verbales innecesarias. Usar granate para estabilizar.",
      credibility: "Alta en interpretaciones de comunicación asertiva y conflicto. Moderada en aspectos de salud circulatoria y sistema nervioso.",
      quote: { text: "La palabra es más poderosa que la espada.", author: "Proverbio árabe" },
      alchemy: "Mercurio-Marte es la unión del mercurio con el hierro. Representa la forja del intelecto, donde la mente se tempere en el fuego de la pasión para generar pensamiento poderoso.",
      decree: "Mi mente es espada que corta la ilusión. Mis pensamientos son fuego sagrado que purifica y protege la verdad.",
      ritual: {
        stones: ["Rubí", "Lapislázuli"],
        hours: "Martes al mediodía",
        instructions: "Colocar rubí sobre la base de la columna y lapislázuli en la garganta. Realizar ejercicio intenso 10 minutos. Recitar el decreto 9 veces con fuerza."
      }
    },
    "Júpiter": {
      riskBase: 10,
      behavioral: {
        high: "Exceso de optimismo intelectual, promesas mentales incumplibles, tendencia a la arrogancia filosófica. Posible exageración en declaraciones o predicciones.",
        medium: "Expansión intelectual positiva, generosidad en el conocimiento, capacidad de enseñar y aprender con alegría. La persona puede ser un mentor inspirador.",
        low: "Reflexión sobre creencias personales y conocimiento superior. Tendencia a la exploración filosófica. Ideal para lecturas espirituales o académicas."
      },
      social: {
        high: "Exceso de promesas intelectuales, generosidad de conocimiento imprudente, tendencia a imponer ideas filosóficas a otros.",
        medium: "Conexiones intelectuales significativas con mentores, oportunidades de estudio o viaje, generosidad de conocimiento mutua.",
        low: "Momento para expandir horizontes a través de la lectura. Tiempo propicio para cursos o seminarios."
      },
      diet: "Alimentos que nutran el cerebro y expandan la conciencia: frutas tropicales, especias aromáticas, vino tinto en moderación.",
      exercise: "Actividades expansivas: caminatas largas por naturaleza, yoga jupiteriano, viajes de aventura, senderismo.",
      mitigation: "Expandir horizontes a través de la lectura o el viaje. Practicar la generosidad de conocimiento. Usar amatista para mantener humildad.",
      credibility: "Alta en interpretaciones de crecimiento intelectual. Moderada en predicciones de viajes o asuntos académicos.",
      quote: { text: "La filosofía es la medicina del alma.", author: "Paracelso" },
      alchemy: "Mercurio-Júpiter es la unión del mercurio con el estaño. Representa la expansión del principio pensante, generando la sabiduría multiplicada.",
      decree: "Mi mente se expande con la generosidad de Júpiter. Mis pensamientos son puentes de sabiduría que conectan mundos.",
      ritual: {
        stones: ["Amatista", "Lapislázuli"],
        hours: "Jueves al amanecer",
        instructions: "Colocar amatista sobre el tercer ojo y lapislázuli en la garganta. Leer un texto filosófico o espiritual. Recitar el decreto 4 veces con gratitud."
      }
    },
    "Saturno": {
      riskBase: 30,
      behavioral: {
        high: "Pensamientos depresivos, rigidez intelectual, dificultad para comunicar ideas, tendencia al pesimismo mental. Posible bloqueo creativo profundo.",
        medium: "Seriedad intelectual, disciplina mental elevada, capacidad de trabajo profundo y sostenido. La persona puede ser una mente brillante en su disciplina.",
        low: "Reflexión sobre responsabilidades intelectuales. Tendencia a establecer rutinas de estudio. Ideal para trabajo académico o investigación."
      },
      social: {
        high: "Aislamiento intelectual, dificultad para comunicar ideas, posibles conflictos con figuras de autoridad por diferencias filosóficas.",
        medium: "Relaciones intelectuales serias, conexión con profesores o mentores, capacidad de trabajo profundo en equipo.",
        low: "Momento para revisar compromisos académicos. Tiempo propicio para establecer rutinas de estudio disciplinadas."
      },
      diet: "Alimentos nutritivos y estables: legumbres, granos enteros, verduras de hoja verde oscuro, pescados grasos. Evitar azúcares refinados.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, escritura profunda.",
      mitigation: "Aceptar las lecciones intelectuales de Saturno con humildad. Practicar la disciplina mental. Usar obsidiana para claridad.",
      credibility: "Muy alta en interpretaciones de estructura intelectual. Alta en predicciones de desafíos académicos o mentales.",
      quote: { text: "No hay camino para la sabiduría sin pasar por la prueba del sufrimiento.", author: "Heráclito de Éfeso" },
      alchemy: "Mercurio-Saturno es la unión del mercurio con el plomo. Representa la negredo intelectual, la fase donde el pensamiento debe morir para renacer purificado.",
      decree: "Acepto las lecciones de Saturno en mi mente. Mi disciplina intelectual construye cimientos eternos de sabiduría y maestría.",
      ritual: {
        stones: ["Obsidiana", "Onix negro"],
        hours: "Sábado a medianoche",
        instructions: "Colocar obsidiana sobre la garganta. Meditar 20 minutos en silencio absoluto. Recitar el decreto 7 veces en tono grave."
      }
    },
    "Urano": {
      riskBase: 28,
      behavioral: {
        high: "Pensamientos erráticos, ideas revolucionarias pero inestables, dificultad para mantener la concentración en un solo tema. Posible genialidad伴生 de caos mental.",
        medium: "Insight repentinos, innovación intelectual, apertura a nuevas perspectivas. La persona puede experimentar momentos de genialidad creativa.",
        low: "Reflexión sobre áreas del pensamiento que requieren renovación. Tendencia a buscar nuevas formas de expresión intelectual. Ideal para planificar cambios."
      },
      social: {
        high: "Ideas radicales que generan conflictos, rebelión intelectual, dificultad para comunicar visiones futuras a personas tradicionales.",
        medium: "Conexiones intelectuales inusuales, participación en movimientos innovadores, ruptura de paradigmas. Buen momento para eventos alternativos.",
        low: "Necesidad de evaluar qué patrones intelectuales necesitan renovación. Tiempo propicio para envisionar un futuro diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, brotes de soja, algas. Evitar alimentos muy procesados.",
      exercise: "Actividades inusuales y estimulantes: ciclismo urbano, parkour, yoga con música electrónica, escritura experimental.",
      mitigation: "Canalizar la energía disruptiva en proyectos creativos. Evitar decisiones drásticas intelectuales. Usar turquesa para estabilizar.",
      credibility: "Alta en interpretaciones de cambios intelectuales. Moderada en predicciones específicas. Urano es impredecible por naturaleza.",
      quote: { text: "La mente que se abre a una nueva idea jamás vuelve a su tamaño original.", author: "Albert Einstein" },
      alchemy: "Mercurio-Urano representa la irrupción de la chispa divina en el pensamiento. Es el rayo que ilumina la oscuridad mental, generando la iluminación súbita.",
      decree: "Mi mente se libera de cadenas obsoletas. Mis pensamientos son rayos de innovación que iluminan nuevos caminos de conciencia.",
      ritual: {
        stones: ["Larimar", "Turquesa"],
        hours: "Martes en la madrugada",
        instructions: "Colocar larimar sobre la garganta y turquesa en el tercer ojo. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces con energía."
      }
    },
    "Neptuno": {
      riskBase: 25,
      behavioral: {
        high: "Confusión mental extrema, pensamientos difusos, dificultad para distinguir realidad de fantasía. Posible tendencia a creer en teorías conspirativas o delirios.",
        medium: "Intuición elevada, creatividad poética, capacidad de acceder a conocimiento trascendente. La persona puede experimentar visiones o insights profundos.",
        low: "Reflexión sobre sueños y aspiraciones intelectuales. Tendencia a la contemplación y la meditación. Ideal para arte o música contemplativa."
      },
      social: {
        high: "Confusión en comunicaciones, posibles malentendidos profundos, dificultad para expresar ideas con claridad. Evitar decisiones importantes por escrito.",
        medium: "Conexiones espirituales profundas a través de la palabra, inspiración artística compartida. Buen momento para eventos benéficos o artísticos.",
        low: "Necesidad de clarificar pensamientos confusos. Tiempo propicio para meditación o práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al agua.",
      mitigation: "Mantener conexión con la realidad a través del arte o la naturaleza. Evitar sustancias psicoactivas. Usar amatista para claridad mental.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Mercurio-Neptuno es la disolución del mercurio en agua primordial. Representa la fase más profunda del opus, donde todo pensamiento se disuelve en el espíritu.",
      decree: "Mi visión trasciende los velos de la ilusión. El agua divina purifica mi conciencia, revelando la verdad eterna que habita en mi mente.",
      ritual: {
        stones: ["Amatista", "Aquamarina"],
        hours: "Miércoles al atardecer",
        instructions: "Colocar amatista sobre el tercer ojo y aquamarina en la garganta. Meditar 15 minutos escuchando sonidos de agua. Recitar el decreto 5 veces en susurro."
      }
    },
    "Plutón": {
      riskBase: 40,
      behavioral: {
        high: "Pensamientos obsesivos, tendencia al pensamiento negro, posible paranoia intelectual. Posible exposición de secretos mentales o confrontación con sombras psicológicas.",
        medium: "Transformación intelectual profunda, renacimiento psicológico, capacidad de soltar creencias limitantes. La persona puede experimentar muertes y renacimientos mentales.",
        low: "Reflexión sobre poder del pensamiento y sus usos. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra psicológico."
      },
      social: {
        high: "Poder destructivo en comunicaciones, manipulación intelectual, exposición de secretos que destruyen relaciones. Posibles conflictos por revelaciones.",
        medium: "Conexiones que transforman el pensamiento profundamente, relaciones intelectuales intensas y regenerativas. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de pensamiento. Tiempo propicio para perdonar y liberar resentimientos intelectuales."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, ciruelas negras, cacao puro. Evitar carnes muy rojas. Beber infusiones de cardo mariano.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, danza catártica, escritura terapéutica.",
      mitigation: "Aceptar la transformación intelectual sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección.",
      credibility: "Alta en interpretaciones de transformación intelectual. Moderada en predicciones de crisis. Plutón opera en ciclos profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Mercurio-Plutón es la muerte y resurrección del pensamiento. Representa la putrefacción absoluta de las creencias viejas para que nazcan nuevas.",
      decree: "Renazco de las cenizas de mis viejas creencias. El fuego plutoniano purifica mi mente, forjando un pensamiento más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Ópalo negro"],
        hours: "Noche profunda",
        instructions: "Colocar obsidiana roja sobre la garganta. Escribir algo que se desea soltar mentalmente y quemarlo en un cuenco. Recitar el decreto 9 veces."
      }
    }
  },
  "Venus": {
    "Sol": {
      riskBase: 18,
      behavioral: {
        high: "Exceso de indulgencia en la búsqueda de placer, pereza creativa, tendencia a la vanidad. Posible codependencia afectiva para mantener la autoestima.",
        medium: "Expresión creativa elevada, armonía en la autoimagen, capacidad de crear belleza en el entorno. La persona se siente amada y valiosa.",
        low: "Reflexión sobre valores personales y autoestima. Tendencia a simplificar gustos y necesidades. Ideal para planificación creativa."
      },
      social: {
        high: "Exceso de complacencia en relaciones, dificultad para mantener la identidad propia en pareja, posibles celos o posesividad.",
        medium: "Relaciones armóniasas, expresión genuina de cariño, creatividad compartida. Buen momento para citas, eventos sociales y colaboraciones artísticas.",
        low: "Necesidad de sanar heridas emocionales pasadas. Tiempo propicio para perdonar y soltar resentimientos en relaciones."
      },
      diet: "Alimentos dulces y naturales: frutas frescas, miel, chocolate oscuro en moderación, vino tinto. Evitar comidas grasas y excesivamente procesadas.",
      exercise: "Actividades rítmicas y placenteras: baile, yoga con música suave, tai chi en jardines. Caminatas al atardecer por espacios bellos.",
      mitigation: "Rodearse de belleza: flores, música, arte. Dedicar tiempo a una actividad creativa sin juicio. Evitar decisiones financieras impulsivas.",
      credibility: "Alta en interpretaciones de relaciones y creatividad. Moderada en asuntos de salud renal y equilibrio hormonal.",
      quote: { text: "El amor es la belleza, y la belleza es la verdad, y la verdad es el amor eterno.", author: "Platón" },
      alchemy: "Venus-Sol es la unión del cobre con el oro. Representa la harmonía entre el principio receptivo y el activo, generando la piedra filosofal en su estado más elevado.",
      decree: "Amor y belleza fluyen a través de mi ser. Soy templo de armonía donde cada manifestación refleja la perfección divina.",
      ritual: {
        stones: ["Rosa cuarzo", "Citrino"],
        hours: "Atardecer o viernes al mediodía",
        instructions: "Colocar rosa cuarzo sobre el corazón y citrino en el plexo solar. Encender una vela rosa. Recitar el decreto 5 veces."
      }
    },
    "Luna": {
      riskBase: 20,
      behavioral: {
        high: "Exceso de indulgencia emocional, pereza, tendencia al consumo emocional por comfort. Posible codependencia afectiva o apego excesivo a personas o cosas.",
        medium: "Armonía emocional, expresión afectiva elegante, creatividad artística elevada. La persona se siente amada y capaz de amar.",
        low: "Reflexión sobre valores afectivos y necesidades emocionales. Tendencia a simplificar relaciones y crear armonía en el hogar."
      },
      social: {
        high: "Exceso de complacencia emocional, dificultad para poner límites en relaciones, posibles celos o posesividad.",
        medium: "Relaciones armónicas y nutritivas, expresión de cariño genuino, capacidad de crear belleza compartida.",
        low: "Momento para reparar relaciones dañadas. Tiempo propicio para gestos de amor simples y sinceros."
      },
      diet: "Alimentos dulces y reconfortantes: arroz con leche, sopa de verduras, caldos de hueso, frutas frescas. Evitar alimentos fríos y crudos.",
      exercise: "Actividades acuáticas y rítmicas: natación suave, baños de luna, caminatas junto al agua, yoga restaurativo.",
      mitigation: "Darse un baño de sales con lavanda. Colocar un cuenco de agua de luna en la habitación. Permitirse sentir sin juicio.",
      credibility: "Alta en interpretaciones de amor y relaciones. Moderada en asuntos de salud renal y reproductiva.",
      quote: { text: "Donde hay amor, hay vida.", author: "Mahatma Gandhi" },
      alchemy: "Venus-Luna es la conjunción del cobre con la plata. Representa la harmonía entre lo receptivo y lo amoroso, generando el azufre filosofal puro.",
      decree: "Mi amor fluye con la gracia de Venus y la profundidad de la Luna. Soy un vaso de dulzura que nutre y sana a quienes me rodean.",
      ritual: {
        stones: ["Rosa cuarzo", "Selenita"],
        hours: "Atardecer o luna llena",
        instructions: "Colocar rosa cuarzo sobre el corazón y selenita en la corona. Respirar profundamente 7 veces. Recitar el decreto 5 veces."
      }
    },
    "Mercurio": {
      riskBase: 15,
      behavioral: {
        high: "Pensamiento obsesivo sobre relaciones, celos intelectuales, tendencia a racionalizar sentimientos. Posible manipulación verbal en asuntos amorosos.",
        medium: "Comunicación encantadora, expresión artística verbal, capacidad de crear armonía a través de las palabras. La persona puede ser elocuente y persuasiva.",
        low: "Reflexión sobre valores personales a través de la escritura. Tendencia a componer cartas de amor o poesía. Ideal para creación artística."
      },
      social: {
        high: "Exceso de cortesía verbal que enmascara sentimientos reales, posibles coqueteos o promesas incumplidas por exceso de verbalización.",
        medium: "Expresión verbal de afectos genuinos, capacidad de crear belleza a través de las palabras, diálogo armonioso y placentero.",
        low: "Momento para expresar sentimientos a través de cartas o mensajes escritos. Tiempo propicio para crear arte con palabras."
      },
      diet: "Alimentos que nutran sistema nervioso y creatividad: frutas frescas, chocolate oscuro, vino tinto en moderación, frutos secos.",
      exercise: "Actividades rítmicas y mentales: baile, yoga con música, escritura creativa, lectura de poesía al aire libre.",
      mitigation: "Dedicarse a la escritura creativa o artística. Rodearse de belleza y música. Evitar decisiones financieras impulsivas.",
      credibility: "Alta en interpretaciones de creatividad verbal y relaciones. Moderada en asuntos de salud renal y equilibrio hormonal.",
      quote: { text: "Las palabras son los puentes del alma.", author: "Confucio" },
      alchemy: "Venus-Mercurio es la unión del cobre con el mercurio. Representa la creación de la plata vidriosa, donde la mente se une con la belleza para generar arte.",
      decree: "Mi mente crea belleza infinita. Mis palabras son puentes de amor que conectan corazones y mentes en armonía perfecta.",
      ritual: {
        stones: ["Rosa cuarzo", "Lapislázuli"],
        hours: "Viernes al atardecer",
        instructions: "Colocar rosa cuarzo sobre el corazón y lapislázuli en la garganta. Escribir un poema o carta de amor. Recitar el decreto 5 veces."
      }
    },
    "Venus": {
      riskBase: 12,
      behavioral: {
        high: "Exceso de indulgencia, pereza materialista, dificultad para establecer límites en el placer. Posible adicción a compras, comida o relaciones superficiales.",
        medium: "Mayor expresión de afectos, creatividad artística elevada, capacidad para crear armonía en el entorno. Momento favorable para relaciones y belleza.",
        low: "Reflexión sobre valores personales y recursos materiales. Tendencia a simplificar gustos y necesidades. Ideal para planificación financiera."
      },
      social: {
        high: "Exceso de complacencia, dificultad para decir no, posibles conflictos por celos o posesividad. Puede haber gastos excesivos en regalos o fiestas.",
        medium: "Relaciones armoniosas, expresión genuina de cariño, creatividad compartida. Buen momento para citas, eventos sociales y colaboraciones artísticas.",
        low: "Necesidad de sanar heridas emocionales pasadas. Tiempo propicio para perdonar y soltar resentimientos en relaciones."
      },
      diet: "Alimentos dulces naturales: frutas frescas, miel, chocolate oscuro en moderación, vino tinto. Evitar comidas grasas y excesivamente procesadas.",
      exercise: "Actividades rítmicas y placenteras: baile, yoga con música suave, tai chi en jardines. Caminatas al atardecer por espacios bellos.",
      mitigation: "Rodearse de belleza: flores, música, arte. Dedicar tiempo a una actividad creativa sin juicio. Evitar decisiones financieras impulsivas.",
      credibility: "Alta en interpretaciones de relaciones y creatividad. Moderada en asuntos de salud renal y equilibrio hormonal.",
      quote: { text: "La belleza salva al mundo.", author: "Fiódor Dostoyevski" },
      alchemy: "Venus con Venus es el opus contra naturam, la duplicación del cobre. Representa la purificación absoluta del principio amoroso, preparándolo para la obra mayor.",
      decree: "Amor y belleza fluyen a través de mi ser. Mi corazón es templo de armonía, donde cada relación refleja la perfección divina.",
      ritual: {
        stones: ["Rosa cuarzo", "Esmeralda", "Jade"],
        hours: "Atardecer, entre las 17:00 y 19:00 horas",
        instructions: "Colocar las piedras sobre el corazón. Encender una vela rosa o verde. Colocar pétalos de rosa alrededor. Recitar el decreto 5 veces."
      }
    },
    "Marte": {
      riskBase: 28,
      behavioral: {
        high: "Exceso de pasión en relaciones, tendencia a la posesividad, deseos sexuales desbordados que pueden llevar a conductas impulsivas. Posible adicción al romance.",
        medium: "Pasión elevada en relaciones, expresión directa de deseos, creatividad sexual activa. La persona puede ser más apasionada de lo habitual.",
        low: "Reflexión sobre deseos y límites personales. Tendencia a establecer nuevas rutinas en la intimidad. Ideal para planificar proyectos creativos."
      },
      social: {
        high: "Conflictos por celos o posesividad, rivalidad en relaciones íntimas, posibles peleas por asuntos de pareja.",
        medium: "Pasión compartida, actividad social intensa, capacidad de defender a seres queridos con vigor.",
        low: "Momento para liberar tensiones en relaciones. Tiempo propicio para conversaciones directas sobre deseos y necesidades."
      },
      diet: "Alimentos que aumenten energía y pasión: picantes en moderación, frutas rojas, chocolate oscuro, vino tinto. Evitar carnes muy grasas.",
      exercise: "Actividades físicas intensas y rítmicas: baile apasionado, yoga de potencia, natación de velocidad, artes marciales.",
      mitigation: "Canalizar la pasión en creación artística o deporte intenso. Evitar decisiones impulsivas en relaciones. Usar granate para estabilizar.",
      credibility: "Alta en interpretaciones de pasión y creatividad. Moderada en aspectos de salud circulatoria y reproductiva.",
      quote: { text: "La pasión es la fuerza que mueve al mundo.", author: "Arthur Schopenhauer" },
      alchemy: "Venus-Marte es la conjunción del cobre con el hierro. Representa el matrimonio químico, la unión de opuestos que genera la piedra filosofal perfecta.",
      decree: "Mi pasión se transforma en poder constructivo. Mis deseos son fuego sagrado que purifica y protege mi camino amoroso.",
      ritual: {
        stones: ["Rubí", "Rosa cuarzo"],
        hours: "Martes al atardecer o viernes al mediodía",
        instructions: "Colocar rubí sobre la base de la columna y rosa cuarzo en el corazón. Realizar ejercicio intenso 10 minutos. Recitar el decreto 9 veces."
      }
    },
    "Júpiter": {
      riskBase: 10,
      behavioral: {
        high: "Exceso de generosidad material o emocional, dilapidación por amor al placer, tendencia a la indulgencia filosófica. Posible gastos excesivos en regalos o fiestas.",
        medium: "Expansión de la capacidad de amar, generosidad afectiva elevada, crecimiento espiritual a través del amor. La persona se siente emocionalmente abundante.",
        low: "Reflexión sobre valores y creencias en el amor. Tendencia a la filosofía del amor. Ideal para lecturas espirituales sobre relaciones."
      },
      social: {
        high: "Generosidad emocional excesiva, dificultad para establecer límites en amistades, posibles promesas emocionales incumplibles.",
        medium: "Conexiones emocionales profundas con personas sabias, generosidad mutua, eventos sociales expansivos.",
        low: "Momento para expandir círculos de amistad. Tiempo propicio para eventos culturales o espirituales."
      },
      diet: "Alimentos festivos y nutritivos: frutas tropicales, especias aromáticas, platos internacionales. Evitar excesos de comida o bebida.",
      exercise: "Actividades expansivas al aire libre: senderismo, caminatas largas, yoga en la naturaleza, viajes de aventura.",
      mitigation: "Expandir horizontes a través de la lectura o el viaje. Practicar la gratitud diaria. Usar amatista para mantener humildad.",
      credibility: "Alta en interpretaciones de expansión emocional. Moderada en predicciones de viajes o asuntos académicos.",
      quote: { text: "La gratitud es la memoria del corazón.", author: "Lao Tzu" },
      alchemy: "Venus-Júpiter es la conjunción del cobre con el estaño. Representa la expansión del principio amoroso, generando la virtud multiplicada de la piedra.",
      decree: "Mi corazón se expande con la generosidad de Júpiter. Mis emociones son ríos de abundancia que nutren todo lo que tocan.",
      ritual: {
        stones: ["Amatista", "Esmeralda"],
        hours: "Jueves al amanecer o viernes al atardecer",
        instructions: "Colocar amatista sobre el tercer ojo y esmeralda en el corazón. Respirar profundamente 9 veces. Recitar el decreto 4 veces con gratitud."
      }
    },
    "Saturno": {
      riskBase: 35,
      behavioral: {
        high: "Depresión afectiva, sentimiento de vacío en relaciones, dificultad para expresar emociones, tendencia al aislamiento emocional. Posible duelo prolongado.",
        medium: "Seriedad emocional, necesidad de estructurar sentimientos, madurez emocional creciente. La persona puede establecer límites afectivos saludables.",
        low: "Reflexión sobre responsabilidades emocionales. Tendencia a establecer rutinas de cuidado emocional. Ideal para terapia o trabajo interior."
      },
      social: {
        high: "Aislamiento emocional extremo, dificultad para conectarse con otros, posibles rupturas por rigidez emocional.",
        medium: "Relaciones serias y comprometidas, responsabilidad emocional elevada, conexión con personas mayores o sabias.",
        low: "Momento para revisar compromisos emocionales. Tiempo propicio para establecer límites saludables en relaciones."
      },
      diet: "Alimentos nutritivos y estables: legumbres, granos enteros, verduras de hoja verde oscuro, sopas calientes. Evitar azúcares refinados.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, journaling emocional.",
      mitigation: "Aceptar las lecciones emocionales de Saturno con humildad. Practicar la paciencia emocional. Usar obsidiana para protección.",
      credibility: "Muy alta en interpretaciones de madurez emocional. Alta en predicciones de desafíos emocionales y duelo.",
      quote: { text: "El sufrimiento es la puerta de entrada al conocimiento de uno mismo.", author: "Carl Gustav Jung" },
      alchemy: "Venus-Saturno es la conjunción del cobre con el plomo. Representa la negredo emocional, la fase donde las emociones deben morir para renacer purificadas.",
      decree: "Acepto las lecciones de Saturno en mi corazón. Mi madurez emocional construye cimientos eternos de sabiduría y fortaleza interior.",
      ritual: {
        stones: ["Obsidiana", "Onix negro"],
        hours: "Sábado a medianoche",
        instructions: "Colocar obsidiana sobre el corazón. Meditar 20 minutos en silencio. Recitar el decreto 7 veces en tono grave."
      }
    },
    "Urano": {
      riskBase: 25,
      behavioral: {
        high: "Emociones erráticas, cambios de humor extremos, rebeldía emocional, posibles crisis de identidad afectiva. La estabilidad emocional se tambalea violentamente.",
        medium: "Insight emocionales repentinos, apertura a nuevas formas de amar, innovación en la expresión afectiva. La persona puede experimentar amor a primera vista.",
        low: "Reflexión sobre áreas emocionales que requieren renovación. Tendencia a buscar nuevas formas de expresión afectiva. Ideal para planes de crecimiento emocional."
      },
      social: {
        high: "Rupturas emocionales repentinas, rebeldía en relaciones, posibles separaciones o cambios drásticos en el estado afectivo.",
        medium: "Conexiones emocionales inusuales, amor por causas sociales, expresión afectiva no convencional.",
        low: "Momento para evaluar qué patrones emocionales necesitan renovación. Tiempo propicio para envisionar un futuro afectivo diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, brotes de soja, algas. Evitar alimentos muy procesados.",
      exercise: "Actividades inusuales: aeróbicos en grupo, ciclismo, yoga con música electrónica, danza libre e improvisada.",
      mitigation: "Canalizar la energía emocional disruptiva en proyectos creativos. Evitar decisiones emocionales drásticas. Usar turquesa para estabilizar.",
      credibility: "Alta en interpretaciones de cambios emocionales. Moderada en predicciones específicas. Urano es inherentemente impredecible.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Venus-Urano representa la irrupción de la chispa divina en las emociones. Es el rayo que ilumina la oscuridad emocional, generando la iluminación súbita.",
      decree: "Mis emociones se liberan con la fuerza del trueno. Abrazo el cambio afectivo con valentía, renovando mi capacidad de amar sin miedo.",
      ritual: {
        stones: ["Larimar", "Turquesa"],
        hours: "Martes en la madrugada",
        instructions: "Colocar larimar sobre el corazón y turquesa en la garganta. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces con energía."
      }
    },
    "Neptuno": {
      riskBase: 25,
      behavioral: {
        high: "Confusión emocional extrema, tendencia a diluirse en otros, pérdida de límites personales. Posible adicción a relaciones o personas como forma de escapismo.",
        medium: "Intuición emocional elevada, compasión profunda, capacidad de amor incondicional. La persona puede experimentar unión mística.",
        low: "Reflexión sobre sueños emocionales y aspiraciones afectivas. Tendencia a la contemplación y la meditación emocional. Ideal para arte o música."
      },
      social: {
        high: "Engaños emocionales, confusiones en relaciones, tendencia al rescate o al victimismo. Posibles relaciones tóxicas por falta de límites.",
        medium: "Conexiones espirituales profundas, amor altruista, inspiración artística compartida. Buen momento para eventos benéficos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al agua.",
      mitigation: "Mantener conexión con la realidad emocional a través del arte. Evitar sustancias psicoactivas. Usar amatista para claridad.",
      credibility: "Moderada en interpretaciones de espiritualidad emocional. Baja en predicciones concretas. Neptuno disuelve los límites.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Venus-Neptuno es la disolución del cobre en agua primordial. Representa la fase más profunda del opus, donde toda forma emocional se disuelve en el espíritu.",
      decree: "Mi amor trasciende los velos de la ilusión. El agua divina purifica mis emociones, revelando la verdad eterna de mi corazón.",
      ritual: {
        stones: ["Amatista", "Aquamarina"],
        hours: "Noches de luna llena",
        instructions: "Colocar amatista sobre el tercer ojo y aquamarina en el corazón. Colocar un cuenco de agua con pétalos al lado. Meditar 15 minutos."
      }
    },
    "Plutón": {
      riskBase: 42,
      behavioral: {
        high: "Emociones tóxicas desbordadas, posesividad extrema, manipulación emocional, tendencia a la venganza. Posible obsesión por alguien o algo que destruye la paz interior.",
        medium: "Transformación emocional profunda, renacimiento psicológico, capacidad de soltar viejas heridas. La persona puede experimentar purificación emocional intensa.",
        low: "Reflexión sobre poder emocional y sus usos. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra emocional."
      },
      social: {
        high: "Poder destructivo en relaciones emocionales, manipulación o ser manipulado, exposición de secretos que destruyen vínculos.",
        medium: "Conexiones que transforman emociones profundamente, relaciones intensas y regenerativas, poder emocional compartido.",
        low: "Necesidad de soltar viejos patrones emocionales. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, ciruelas negras, cacao puro. Evitar carnes muy rojas. Beber infusiones de cardo mariano.",
      exercise: "Actividades transformadoras: yoga de potencia, danza catártica, entrenamiento de fuerza intenso.",
      mitigation: "Aceptar la transformación emocional sin resistencia. Trabajar con terapeuta. Usar obsidiana roja para protección emocional.",
      credibility: "Alta en interpretaciones de transformación emocional. Moderada en predicciones de crisis. Plutón opera en ciclos profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Venus-Plutón es la muerte y resurrección del principio amoroso. Representa la putrefacción absoluta de las emociones viejas para que nazcan nuevas.",
      decree: "Renazco de las cenizas de mis viejas heridas. El fuego plutoniano purifica mi corazón, forjando un amor más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Ópalo negro"],
        hours: "Noche profunda",
        instructions: "Colocar obsidiana roja sobre el corazón. Escribir algo que se desea soltar y quemarlo en un cuenco. Recitar el decreto 9 veces."
      }
    }
  },
  "Marte": {
    "Sol": {
      riskBase: 35,
      behavioral: {
        high: "Ira descontrolada hacia figuras de autoridad, impulsividad peligrosa, tendencia a la violencia física o verbal. Alta probabilidad de accidentes por imprudencia.",
        medium: "Energía elevada para acción y liderazgo, determinación fuerte, capacidad de defensa personal. La persona puede ser más asertiva de lo habitual.",
        low: "Reflexión sobre manejo de la ira, tendencia a la planificación estratégica. Buen momento para iniciar proyectos que requieren disciplina."
      },
      social: {
        high: "Conflictos intensos con figuras de autoridad, rivalidad excesiva, posibles discusiones violentas. Evitar situaciones de confrontación.",
        medium: "Actividad social intensa, liderazgo en grupos, capacidad de defensa de causas justas. Buen momento para asuntos legales o deportivos.",
        low: "Necesidad de establecer límites saludables en relaciones. Tiempo propicio para liberar tensiones acumuladas de manera constructiva."
      },
      diet: "Alimentos rojos y picantes: pimientos rojos, tomate, jengibre, cúrcuma. Evitar alcohol y carnes muy grasas. Beber infusiones de jengibre caliente.",
      exercise: "Actividades intensas y competitivas: boxeo, artes marciales, Running de alta intensidad, CrossFit. Canalizar la energía en esfuerzo físico vigoroso.",
      mitigation: "Canalizar la energía en deporte intenso. Practicar artes marciales o boxeo con saco. Evitar discusiones y situaciones de riesgo.",
      credibility: "Alta en interpretaciones de energía y acción. Alta en predicciones de accidentes o lesiones. Moderada en asuntos de salud circulatoria.",
      quote: { text: "La guerra es la madre de todas las cosas. Todos los demás son hijos suyos.", author: "Heraclito de Éfeso" },
      alchemy: "Marte-Sol es la unión del hierro con el oro. Representa la forja del espíritu en el fuego de la pasión, generando el philosophe material perfecto.",
      decree: "Canalizo mi energía con propósito divino. Mi fuerza marcial protege y construye, transformando la pasión en acción sabia y valiente.",
      ritual: {
        stones: ["Rubí", "Citrino"],
        hours: "Mediodía o martes después del mediodía",
        instructions: "Colocar rubí sobre la base de la columna y citrino en el plexo solar. Realizar 20 flexiones o sentadillas vigorosas. Recitar el decreto 9 veces."
      }
    },
    "Luna": {
      riskBase: 35,
      behavioral: {
        high: "Ira emocional desbordada, reacciones impulsivas por heridas emocionales, posibles arrebatos de violencia verbal. Las emociones no procesadas se convierten en furia.",
        medium: "Energía emocional intensa, pasión elevada, capacidad de defender emociones con fuerza. La persona puede ser más directa y apasionada de lo habitual.",
        low: "Reflexión sobre manejo de la ira emocional. Tendencia a la acción decidida en asuntos del corazón. Ideal para establecer límites emocionales."
      },
      social: {
        high: "Conflictos emocionales intensos, posibles peleas verbales, rivalidad en relaciones íntimas. Evitar confrontaciones emocionales.",
        medium: "Pasión compartida, actividad social intensa, capacidad de defender a seres queridos con vigor.",
        low: "Momento para liberar tensiones emocionales a través del ejercicio físico. Tiempo propicio para conversaciones directas sobre sentimientos."
      },
      diet: "Alimentos que reduzcan inflamación emocional: pescados grasos, frutos rojos, cúrcuma, jengibre. Evitar alcohol y picantes excesivos.",
      exercise: "Actividades físicas intensas para canalizar ira: boxeo, Running, natación de velocidad, artes marciales.",
      mitigation: "Canalizar la ira en ejercicio físico intenso. Evitar confrontaciones emocionales. Usar granate para estabilizar emociones.",
      credibility: "Alta en interpretaciones de pasión y conflicto emocional. Moderada en aspectos de salud circulatoria y reproductiva.",
      quote: { text: "La pasión es la fuerza que mueve al mundo.", author: "Arthur Schopenhauer" },
      alchemy: "Marte-Luna es la conjunción del hierro con la plata. Representa la forja del mercurio emocional, donde las emociones se temperan en el fuego de la pasión.",
      decree: "Mi pasión se transforma en poder constructivo. Mis emociones son fuego sagrado que purifica y protege mi camino.",
      ritual: {
        stones: ["Rubí", "Granate"],
        hours: "Martes al mediodía o después del atardecer",
        instructions: "Colocar rubí sobre el corazón y granate en la base de la columna. Realizar ejercicio intenso 15 minutos. Recitar el decreto 9 veces con fuerza."
      }
    },
    "Mercurio": {
      riskBase: 32,
      behavioral: {
        high: "Comunicación agresiva, pensamientos obsesivos sobre conflicto, tendencia a la palabra violenta. Posible tendencia a discutir o confrontar verbalmente.",
        medium: "Comunicación directa y asertiva, capacidad de defender ideas con fuerza, pensamiento estratégico elevado. La persona puede ser un negociador formidable.",
        low: "Reflexión sobre patrones de comunicación agresiva. Tendencia a la planificación estratégica. Ideal para negociaciones o debates importantes."
      },
      social: {
        high: "Discusiones acaloradas, posibles discusiones verbales intensas, rivalidad intelectual excesiva. Evitar situaciones de confrontación.",
        medium: "Comunicación enérgica y persuasiva, capacidad de liderar debates, defensa apasionada de ideas. Buen momento para asuntos legales.",
        low: "Momento para establecer límites comunicativos saludables. Tiempo propicio para conversaciones directas sobre conflictos pendientes."
      },
      diet: "Alimentos que reduzcan inflamación y aumenten energía mental: pescados grasos, frutos rojos, cúrcuma, jengibre. Evitar alcohol y picantes excesivos.",
      exercise: "Actividades físicas intensas para canalizar energía mental: boxeo, Running, artes marciales, entrenamiento de alta intensidad.",
      mitigation: "Canalizar la energía mental en escritura o debate constructivo. Evitar confrontaciones verbales innecesarias. Usar granate para estabilizar.",
      credibility: "Alta en interpretaciones de comunicación asertiva y conflicto. Moderada en aspectos de salud circulatoria y sistema nervioso.",
      quote: { text: "La palabra es más poderosa que la espada.", author: "Proverbio árabe" },
      alchemy: "Marte-Mercurio es la unión del hierro con el mercurio. Representa la forja del intelecto, donde la mente se tempere en el fuego de la pasión para generar pensamiento poderoso.",
      decree: "Mi mente es espada que corta la ilusión. Mis pensamientos son fuego sagrado que purifica y protege la verdad.",
      ritual: {
        stones: ["Rubí", "Lapislázuli"],
        hours: "Martes al mediodía",
        instructions: "Colocar rubí sobre la base de la columna y lapislázuli en la garganta. Realizar ejercicio intenso 10 minutos. Recitar el decreto 9 veces con fuerza."
      }
    },
    "Venus": {
      riskBase: 28,
      behavioral: {
        high: "Exceso de pasión en relaciones, tendencia a la posesividad, deseos sexuales desbordados que pueden llevar a conductas impulsivas. Posible adicción al romance.",
        medium: "Pasión elevada en relaciones, expresión directa de deseos, creatividad sexual activa. La persona puede ser más apasionada de lo habitual.",
        low: "Reflexión sobre deseos y límites personales. Tendencia a establecer nuevas rutinas en la intimidad. Ideal para planificar proyectos creativos."
      },
      social: {
        high: "Conflictos por celos o posesividad, rivalidad en relaciones íntimas, posibles peleas por asuntos de pareja.",
        medium: "Pasión compartida, actividad social intensa, capacidad de defender a seres queridos con vigor.",
        low: "Momento para liberar tensiones en relaciones. Tiempo propicio para conversaciones directas sobre deseos y necesidades."
      },
      diet: "Alimentos que aumenten energía y pasión: picantes en moderación, frutas rojas, chocolate oscuro, vino tinto. Evitar carnes muy grasas.",
      exercise: "Actividades físicas intensas y rítmicas: baile apasionado, yoga de potencia, natación de velocidad, artes marciales.",
      mitigation: "Canalizar la pasión en creación artística o deporte intenso. Evitar decisiones impulsivas en relaciones. Usar granate para estabilizar.",
      credibility: "Alta en interpretaciones de pasión y creatividad. Moderada en aspectos de salud circulatoria y reproductiva.",
      quote: { text: "La pasión es la fuerza que mueve al mundo.", author: "Arthur Schopenhauer" },
      alchemy: "Marte-Venus es la conjunción del hierro con el cobre. Representa el matrimonio químico, la unión de opuestos que genera la piedra filosofal perfecta.",
      decree: "Mi pasión se transforma en poder constructivo. Mis deseos son fuego sagrado que purifica y protege mi camino amoroso.",
      ritual: {
        stones: ["Rubí", "Rosa cuarzo"],
        hours: "Martes al atardecer o viernes al mediodía",
        instructions: "Colocar rubí sobre la base de la columna y rosa cuarzo en el corazón. Realizar ejercicio intenso 10 minutos. Recitar el decreto 9 veces."
      }
    },
    "Júpiter": {
      riskBase: 15,
      behavioral: {
        high: "Exceso de entusiasmo impulsivo, tendencia a la aventura peligrosa, dilapidación de energía en proyectos ambiciosos. Posible arrogancia por exceso de confianza.",
        medium: "Energía elevada para acción y expansión, determinación fuerte, capacidad de liderazgo visionario. La persona puede ser un emprendedor formidable.",
        low: "Reflexión sobre cómo canalizar la energía de expansión. Tendencia a la planificación de proyectos a gran escala. Ideal para iniciativas filantrópicas."
      },
      social: {
        high: "Exceso de promesas incumplibles por generosidad excesiva, rivalidad en competiciones, posibles conflictos por diferencias filosóficas.",
        medium: "Conexiones significativas con mentores o figuras de sabiduría, oportunidades de viaje o estudio, generosidad mutua. Buen momento para eventos académicos.",
        low: "Momento para expandir horizontes a través de la lectura o el viaje. Tiempo propicio para cursos o seminarios."
      },
      diet: "Alimentos festivos y nutritivos: frutas tropicales, especias aromáticas, platos internacionales. Evitar excesos de comida o bebida.",
      exercise: "Actividades expansivas al aire libre: senderismo, caminatas largas, yoga en la naturaleza, viajes de aventura.",
      mitigation: "Expandir horizontes a través de la lectura o el viaje. Practicar la generosidad consciente sin excederse. Usar amatista para mantener humildad.",
      credibility: "Alta en interpretaciones de crecimiento y expansión. Moderada en predicciones de viajes o asuntos académicos. Cuidado con excesos de optimismo.",
      quote: { text: "La filosofía es la medicina del alma.", author: "Paracelso" },
      alchemy: "Marte-Júpiter es la unión del hierro con el estaño. Representa la expansión de la fuerza motriz, generando la virtud multiplicada de la piedra.",
      decree: "Mi energía se expande con la generosidad de Júpiter. Mis acciones son puentes de sabiduría que conectan mundos.",
      ritual: {
        stones: ["Amatista", "Rubí"],
        hours: "Jueves al mediodía o martes al amanecer",
        instructions: "Colocar amatista sobre el tercer ojo y rubí en la base de la columna. Realizar ejercicio intenso 15 minutos. Recitar el decreto 4 veces."
      }
    },
    "Saturno": {
      riskBase: 40,
      behavioral: {
        high: "Depresión con ira subyacente, sentimiento de aislamiento y rabia contenida, tendencia a la rigidez patológica. Posible crisis existencial con explosiones de ira.",
        medium: "Mayor responsabilidad en el manejo de la energía, disciplina elevada, necesidad de estructurar la acción. La persona puede sentir presión pero también determinación.",
        low: "Reflexión sobre responsabilidades y legado. Tendencia a la planificación a largo plazo. Momento para organizarse y establecer rutinas de acción."
      },
      social: {
        high: "Aislamiento social con ira contenida, conflictos con figuras de autoridad paterna, sentimiento de abandono. Posibles problemas legales o laborales graves.",
        medium: "Mayor seriedad en interacciones, relaciones con personas mayores o de autoridad, tiempo de madurez profesional. Buen momento para asuntos legales formales.",
        low: "Necesidad de revisar compromisos sociales. Tiempo propicio para establecer límites saludables en relaciones."
      },
      diet: "Alimentos oscuros y nutritivos: legumbres, granos enteros, verduras de hoja verde oscuro, quinoa. Evitar azúcares refinados. Beber infusiones de diente de león.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, entrenamiento de fuerza progresivo.",
      mitigation: "Aceptar las lecciones de Saturno con humildad. Practicar la paciencia y la perseverancia. Usar obsidiana para protección. Evitar aislamiento total.",
      credibility: "Muy alta en interpretaciones de estructura y karma. Alta en predicciones de desafíos y responsabilidades. Cuidado con tendencias pesimistas.",
      quote: { text: "No hay camino para la sabiduría sin pasar por la prueba del sufrimiento.", author: "Heráclito de Éfeso" },
      alchemy: "Marte-Saturno es la unión del hierro con el plomo. Representa la negredo, la fase donde la fuerza debe morir para renacer purificada. Es la forja del espíritu.",
      decree: "Acepto las lecciones de Saturno con humildad. Mi disciplina construye cimientos eternos, transformando cada obstáculo en escalón hacia la maestría.",
      ritual: {
        stones: ["Obsidiana", "Onix negro", "Granate"],
        hours: "Sábado a medianoche o viernes después del atardecer",
        instructions: "Colocar las piedras sobre los pies. Encender una vela negra o índigo. Meditar 20 minutos en silencio absoluto. Recitar el decreto 7 veces."
      }
    },
    "Urano": {
      riskBase: 35,
      behavioral: {
        high: "Comportamiento errático peligroso, rebeldía extrema con tendencia a la acción impulsiva, ruptura violenta de patrones. Posible accidente por imprudencia o rebeldía.",
        medium: "Insight repentinos sobre acción, innovación en la forma de actuar, apertura a nuevas perspectivas. La persona puede experimentar momentos de genialidad práctica.",
        low: "Reflexión sobre áreas de la vida que requieren innovación. Tendencia a buscar nuevas formas de acción. Ideal para planificar cambios graduales."
      },
      social: {
        high: "Rupturas repentinas en relaciones por impulsividad, conflictos con autoridades establecidas, tendencia a la anarquía social. Posible aislamiento por excentricidad.",
        medium: "Conexiones con personas inusuales o innovadoras, participación en movimientos sociales, ruptura de convenciones. Buen momento para eventos alternativos.",
        low: "Necesidad de evaluar qué estructuras personales necesitan renovación. Tiempo propicio para envisionar un futuro diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, cebolla, brotes de soja, algas. Evitar alimentos muy procesados.",
      exercise: "Actividades inusuales y estimulantes: aeróbicos en grupo, ciclismo urbano, parkour, skate, yoga con música electrónica.",
      mitigation: "Canalizar la energía disruptiva en proyectos creativos. Evitar decisiones drásticas en relaciones o carrera. Usar turquesa para estabilizar.",
      credibility: "Alta en interpretaciones de cambios y transformación. Moderada en predicciones específicas. Urano es impredecible por naturaleza.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Marte-Urano representa la irrupción de la chispa divina en la acción. Es el rayo que ilumina la oscuridad de la pasión, generando la iluminación súbita en la acción.",
      decree: "Abrazo el cambio con valentía uraniana. Mi espíritu se libera de cadenas obsoletas, innovando mi existencia con la fuerza del trueno divino.",
      ritual: {
        stones: ["Larimar", "Turquesa"],
        hours: "Martes en la madrugada",
        instructions: "Colocar larimar sobre el corazón y turquesa en el tercer ojo. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces en tono enérgico."
      }
    },
    "Neptuno": {
      riskBase: 30,
      behavioral: {
        high: "Confusión entre acción y fantasía, tendencia a la evasión por sustancias, delirios espirituales o paranoicos. Dificultad para distinguir realidad de fantasía en la acción.",
        medium: "Intuición elevada aplicada a la acción, creatividad poética en el movimiento, sensibilidad espiritual agudizada. La persona puede experimentar momentos de transcendencia.",
        low: "Reflexión sobre sueños y aspiraciones espirituales. Tendencia a la contemplación y la meditación. Ideal para arte o música contemplativa."
      },
      social: {
        high: "Engaños autoinfligidos o infligidos en relaciones, confusión en la acción social, tendencia al victimismo o al rescate de otros.",
        medium: "Conexiones espirituales profundas, altruismo elevado, inspiración artística compartida. Buen momento para eventos benéficos o artísticos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla, pescados blancos. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al mar o ríos.",
      mitigation: "Mantener conexión con la realidad a través del arte o la naturaleza. Evitar sustancias psicoactivas. Usar amatista para claridad espiritual.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Marte-Neptuno es la disolución del hierro en agua primordial. Representa la fase más profunda del opus, donde toda acción se disuelve en el espíritu.",
      decree: "Mi visión trasciende los velos de la ilusión. El agua divina purifica mi conciencia, revelando la verdad eterna que habita en mi alma.",
      ritual: {
        stones: ["Amatista", "Aquamarina"],
        hours: "Miércoles al atardecer o noches de luna llena",
        instructions: "Colocar amatista sobre el tercer ojo y aquamarina en el corazón. Colocar un cuenco de agua con pétalos de lavanda al lado. Meditar 15 minutos."
      }
    },
    "Plutón": {
      riskBase: 50,
      behavioral: {
        high: "Obsesiones profundas con tendencia a la acción destructiva, tendencia al control manipulador a través de la fuerza, crisis de poder intensa. Posible exposición de secretos oscuros.",
        medium: "Transformación profunda a través de la acción, renacimiento psicológico, capacidad de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos.",
        low: "Reflexión sobre poder personal y sus usos. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra."
      },
      social: {
        high: "Poder destructivo en relaciones, manipulación o ser manipulado, exposición de secretos que destruyen. Posibles conflictos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman profundamente, relaciones intensas y regenerativas, poder compartido de manera constructiva. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de poder. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, berenjena, ciruelas negras, ajo negro, cacao puro. Evitar carnes muy rojas.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, deportes de contacto controlados, danza catártica.",
      mitigation: "Aceptar la transformación sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección. Evitar el poder sobre otros.",
      credibility: "Alta en interpretaciones de transformación y poder. Moderada en predicciones de crisis. Plutón opera en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Marte-Plutón es la muerte y resurrección de la fuerza. Representa la putrefacción absoluta de la pasión vieja para que nazca una nueva, más poderosa y auténtica.",
      decree: "Renazco de las cenizas de mi viejo yo. El fuego plutoniano purifica mi esencia, forjando un ser más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Granate", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar las piedras sobre la base de la columna vertebral. Encender una vela roja oscura. Escribir en un papel algo que se desea soltar y quemarlo en un cuenco resistente. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    }
  },
  "Júpiter": {
    "Sol": {
      riskBase: 12,
      behavioral: {
        high: "Exceso de optimismo, tendencia a la arrogancia filosófica, dilapidación de recursos por confianza excesiva. Posible fanatismo religioso o ideológico.",
        medium: "Expansión de horizontes, generosidad elevada, capacidad de enseñar y aprender. Momento favorable para viajes, estudios superiores y crecimiento espiritual.",
        low: "Reflexión sobre creencias y valores superiores. Tendencia a la planificación a largo plazo. Ideal para revisar metas y aspiraciones."
      },
      social: {
        high: "Exceso de promesas incumplibles, generosidad imprudente, tendencia a imponer creencias a otros. Posibles conflictos por diferencias filosóficas o culturales.",
        medium: "Conexiones significativas con mentores o figuras de sabiduría, oportunidades de viaje o estudio, generosidad mutua. Buen momento para eventos académicos.",
        low: "Necesidad de definir creencias personales. Tiempo propicio para lecturas espirituales o filosóficas."
      },
      diet: "Alimentos festivos y nutritivos: frutas tropicales, especias aromáticas, platos internacionales. Evitar excesos de comida o bebida. El azafrán y la canela son auspiciosos.",
      exercise: "Actividades expansivas: caminatas largas por naturaleza, yoga jupiteriano (posturas de apertura de cadera), viajes de aventura, senderismo.",
      mitigation: "Expandir horizontes a través de la lectura o el viaje. Practicar la generosidad consciente sin excederse. Usar amatista para mantener humildad.",
      credibility: "Alta en interpretaciones de crecimiento y expansión. Moderada en predicciones de viajes o asuntos académicos. Cuidado con excesos de optimismo.",
      quote: { text: "La filosofía es la medicina del alma.", author: "Paracelso" },
      alchemy: "Júpiter-Sol es la unión del estaño con el oro. Representa la expansión del principio solar, generando la virtud multiplicada de la piedra filosofal.",
      decree: "La abundancia divina fluye a través de mi ser. Mis puertas se abren a la sabiduría, la fortuna y el crecimiento ilimitado.",
      ritual: {
        stones: ["Amatista", "Citrino"],
        hours: "Jueves al amanecer, entre las 5:00 y 7:00 AM",
        instructions: "Colocar amatista sobre el tercer ojo y citrino en el plexo solar. Encender una vela azul índigo. Recitar el decreto 4 veces."
      }
    },
    "Luna": {
      riskBase: 12,
      behavioral: {
        high: "Exceso de optimismo emocional, dilapidación afectiva, tendencia a idealizar relaciones. Posible exageración de sentimientos o promesas emocionales.",
        medium: "Expansión emocional positiva, generosidad afectiva elevada, sabiduría emocional creciente. La persona se siente emocionalmente abundante.",
        low: "Reflexión sobre creencias emocionales y valores afectivos. Tendencia a la filosofía del amor. Ideal para lecturas espirituales sobre relaciones."
      },
      social: {
        high: "Generosidad emocional excesiva, dificultad para establecer límites en amistades, posibles promesas emocionales incumplibles.",
        medium: "Conexiones emocionales profundas con personas sabias, generosidad mutua, eventos sociales expansivos.",
        low: "Momento para expandir círculos de amistad. Tiempo propicio para eventos culturales o espirituales."
      },
      diet: "Alimentos festivos y nutritivos: frutas tropicales, especias aromáticas, platos internacionales. Evitar excesos de comida o bebida.",
      exercise: "Actividades expansivas al aire libre: senderismo, caminatas largas, yoga en la naturaleza, viajes de aventura.",
      mitigation: "Expandir horizontes emocionales a través de la lectura o el viaje. Practicar la gratitud diaria. Usar amatista para mantener humildad.",
      credibility: "Alta en interpretaciones de expansión emocional. Moderada en predicciones de viajes o asuntos académicos.",
      quote: { text: "La gratitud es la memoria del corazón.", author: "Lao Tzu" },
      alchemy: "Júpiter-Luna es la unión del estaño con la plata. Representa la expansión del mercurio emocional, generando la virtud multiplicada de la piedra emocional.",
      decree: "Mi corazón se expande con la generosidad de Júpiter. Mis emociones son ríos de abundancia que nutren todo lo que tocan.",
      ritual: {
        stones: ["Amatista", "Selenita"],
        hours: "Jueves al amanecer o luna llena",
        instructions: "Colocar amatista sobre el tercer ojo y selenita en la corona. Respirar profundamente 9 veces. Recitar el decreto 4 veces con gratitud."
      }
    },
    "Mercurio": {
      riskBase: 10,
      behavioral: {
        high: "Exceso de optimismo intelectual, promesas mentales incumplibles, tendencia a la arrogancia filosófica. Posible exageración en declaraciones o predicciones.",
        medium: "Expansión intelectual positiva, generosidad en el conocimiento, capacidad de enseñar y aprender con alegría. La persona puede ser un mentor inspirador.",
        low: "Reflexión sobre creencias personales y conocimiento superior. Tendencia a la exploración filosófica. Ideal para lecturas espirituales o académicas."
      },
      social: {
        high: "Exceso de promesas intelectuales, generosidad de conocimiento imprudente, tendencia a imponer ideas filosóficas a otros.",
        medium: "Conexiones intelectuales significativas con mentores, oportunidades de estudio o viaje, generosidad de conocimiento mutua.",
        low: "Momento para expandir horizontes a través de la lectura. Tiempo propicio para cursos o seminarios."
      },
      diet: "Alimentos que nutran el cerebro y expandan la conciencia: frutas tropicales, especias aromáticas, vino tinto en moderación.",
      exercise: "Actividades expansivas: caminatas largas por naturaleza, yoga jupiteriano, viajes de aventura, senderismo.",
      mitigation: "Expandir horizontes a través de la lectura o el viaje. Practicar la generosidad de conocimiento. Usar amatista para mantener humildad.",
      credibility: "Alta en interpretaciones de crecimiento intelectual. Moderada en predicciones de viajes o asuntos académicos.",
      quote: { text: "La filosofía es la medicina del alma.", author: "Paracelso" },
      alchemy: "Júpiter-Mercurio es la unión del estaño con el mercurio. Representa la expansión del principio pensante, generando la sabiduría multiplicada.",
      decree: "Mi mente se expande con la generosidad de Júpiter. Mis pensamientos son puentes de sabiduría que conectan mundos.",
      ritual: {
        stones: ["Amatista", "Lapislázuli"],
        hours: "Jueves al amanecer",
        instructions: "Colocar amatista sobre el tercer ojo y lapislázuli en la garganta. Leer un texto filosófico o espiritual. Recitar el decreto 4 veces con gratitud."
      }
    },
    "Venus": {
      riskBase: 10,
      behavioral: {
        high: "Exceso de generosidad material o emocional, dilapidación por amor al placer, tendencia a la indulgencia filosófica. Posible gastos excesivos en regalos o fiestas.",
        medium: "Expansión de la capacidad de amar, generosidad afectiva elevada, crecimiento espiritual a través del amor. La persona se siente emocionalmente abundante.",
        low: "Reflexión sobre valores y creencias en el amor. Tendencia a la filosofía del amor. Ideal para lecturas espirituales sobre relaciones."
      },
      social: {
        high: "Generosidad emocional excesiva, dificultad para establecer límites en amistades, posibles promesas emocionales incumplibles.",
        medium: "Conexiones emocionales profundas con personas sabias, generosidad mutua, eventos sociales expansivos.",
        low: "Momento para expandir círculos de amistad. Tiempo propicio para eventos culturales o espirituales."
      },
      diet: "Alimentos festivos y nutritivos: frutas tropicales, especias aromáticas, platos internacionales. Evitar excesos de comida o bebida.",
      exercise: "Actividades expansivas al aire libre: senderismo, caminatas largas, yoga en la naturaleza, viajes de aventura.",
      mitigation: "Expandir horizontes a través de la lectura o el viaje. Practicar la gratitud diaria. Usar amatista para mantener humildad.",
      credibility: "Alta en interpretaciones de expansión emocional. Moderada en predicciones de viajes o asuntos académicos.",
      quote: { text: "La gratitud es la memoria del corazón.", author: "Lao Tzu" },
      alchemy: "Júpiter-Venus es la unión del estaño con el cobre. Representa la expansión del principio amoroso, generando la virtud multiplicada de la piedra.",
      decree: "Mi corazón se expande con la generosidad de Júpiter. Mis emociones son ríos de abundancia que nutren todo lo que tocan.",
      ritual: {
        stones: ["Amatista", "Esmeralda"],
        hours: "Jueves al amanecer o viernes al atardecer",
        instructions: "Colocar amatista sobre el tercer ojo y esmeralda en el corazón. Respirar profundamente 9 veces. Recitar el decreto 4 veces con gratitud."
      }
    },
    "Marte": {
      riskBase: 15,
      behavioral: {
        high: "Exceso de entusiasmo impulsivo, tendencia a la aventura peligrosa, dilapidación de energía en proyectos ambiciosos. Posible arrogancia por exceso de confianza.",
        medium: "Energía elevada para acción y expansión, determinación fuerte, capacidad de liderazgo visionario. La persona puede ser un emprendedor formidable.",
        low: "Reflexión sobre cómo canalizar la energía de expansión. Tendencia a la planificación de proyectos a gran escala. Ideal para iniciativas filantrópicas."
      },
      social: {
        high: "Exceso de promesas incumplibles por generosidad excesiva, rivalidad en competiciones, posibles conflictos por diferencias filosóficas.",
        medium: "Conexiones significativas con mentores o figuras de sabiduría, oportunidades de viaje o estudio, generosidad mutua. Buen momento para eventos académicos.",
        low: "Momento para expandir horizontes a través de la lectura o el viaje. Tiempo propicio para cursos o seminarios."
      },
      diet: "Alimentos festivos y nutritivos: frutas tropicales, especias aromáticas, platos internacionales. Evitar excesos de comida o bebida.",
      exercise: "Actividades expansivas al aire libre: senderismo, caminatas largas, yoga en la naturaleza, viajes de aventura.",
      mitigation: "Expandir horizontes a través de la lectura o el viaje. Practicar la generosidad consciente sin excederse. Usar amatista para mantener humildad.",
      credibility: "Alta en interpretaciones de crecimiento y expansión. Moderada en predicciones de viajes o asuntos académicos. Cuidado con excesos de optimismo.",
      quote: { text: "La filosofía es la medicina del alma.", author: "Paracelso" },
      alchemy: "Júpiter-Marte es la unión del estaño con el hierro. Representa la expansión de la fuerza motriz, generando la virtud multiplicada de la piedra.",
      decree: "Mi energía se expande con la generosidad de Júpiter. Mis acciones son puentes de sabiduría que conectan mundos.",
      ritual: {
        stones: ["Amatista", "Rubí"],
        hours: "Jueves al mediodía o martes al amanecer",
        instructions: "Colocar amatista sobre el tercer ojo y rubí en la base de la columna. Realizar ejercicio intenso 15 minutos. Recitar el decreto 4 veces."
      }
    },
    "Saturno": {
      riskBase: 25,
      behavioral: {
        high: "Depresión con optimismo subyacente, sentimiento de aislamiento y期望 excesiva, tendencia a la rigidez filosófica. Posible crisis existencial por conflicto entre idealismo y realidad.",
        medium: "Mayor responsabilidad en la expansión, disciplina elevada para lograr metas ambiciosas. La persona puede sentir presión pero también determinación para crecer.",
        low: "Reflexión sobre responsabilidades y crecimiento. Tendencia a la planificación a largo plazo. Momento para organizarse y establecer metas realistas."
      },
      social: {
        high: "Aislamiento social por exceso de optimismo, conflictos con figuras de autoridad por diferencias filosóficas, sentimiento de abandono. Posibles problemas legales o académicos.",
        medium: "Mayor seriedad en interacciones, relaciones con personas mayores o de autoridad, tiempo de madurez profesional. Buen momento para asuntos legales formales.",
        low: "Necesidad de revisar compromisos sociales. Tiempo propicio para establecer límites saludables en relaciones y metas."
      },
      diet: "Alimentos nutritivos y estables: legumbres, granos enteros, verduras de hoja verde oscuro, quinoa. Evitar azúcares refinados. Beber infusiones de diente de león.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, entrenamiento de fuerza progresivo.",
      mitigation: "Aceptar las lecciones de Saturno con humildad. Practicar la paciencia y la perseverancia. Usar obsidiana para protección. Evitar aislamiento total.",
      credibility: "Muy alta en interpretaciones de estructura y karma. Alta en predicciones de desafíos y responsabilidades. Cuidado con tendencias pesimistas.",
      quote: { text: "No hay camino para la sabiduría sin pasar por la prueba del sufrimiento.", author: "Heráclito de Éfeso" },
      alchemy: "Júpiter-Saturno es la unión del estaño con el plomo. Representa la negredo de la expansión, la fase donde la abundancia debe morir para renacer purificada.",
      decree: "Acepto las lecciones de Saturno con humildad. Mi disciplina construye cimientos eternos, transformando cada obstáculo en escalón hacia la maestría.",
      ritual: {
        stones: ["Obsidiana", "Amatista", "Onix negro"],
        hours: "Sábado a medianoche o jueves al amanecer",
        instructions: "Colocar las piedras sobre los pies. Encender una vela negra o índigo. Meditar 20 minutos en silencio absoluto. Recitar el decreto 7 veces en tono grave."
      }
    },
    "Urano": {
      riskBase: 20,
      behavioral: {
        high: "Insight repentinos pero inestables, ideas revolucionarias que pueden llevar a decisiones drásticas. Posible genialidad伴生 de caos mental o espiritual.",
        medium: "Expansión de la conciencia, apertura a nuevas perspectivas espirituales, innovación en la forma de enseñar o aprender. La persona puede experimentar momentos de iluminación.",
        low: "Reflexión sobre áreas de la vida que requieren expansión. Tendencia a buscar nuevas formas de expresión espiritual. Ideal para planificar cambios graduales."
      },
      social: {
        high: "Rupturas repentinas en relaciones por ideas radicales, conflictos con autoridades establecidas, tendencia a la anarquía espiritual. Posible aislamiento por excentricidad.",
        medium: "Conexiones con personas inusuales o innovadoras, participación en movimientos espirituales, ruptura de convenciones. Buen momento para eventos alternativos.",
        low: "Necesidad de evaluar qué estructuras personales necesitan renovación. Tiempo propicio para envisionar un futuro diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, cebolla, brotes de soja, algas. Evitar alimentos muy procesados.",
      exercise: "Actividades inusuales y estimulantes: aeróbicos en grupo, ciclismo urbano, parkour, skate, yoga con música electrónica.",
      mitigation: "Canalizar la energía disruptiva en proyectos creativos. Evitar decisiones drásticas en relaciones o carrera. Usar turquesa para estabilizar.",
      credibility: "Alta en interpretaciones de cambios y transformación. Moderada en predicciones específicas. Urano es impredecible por naturaleza.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Júpiter-Urano representa la irrupción de la chispa divina en la expansión. Es el rayo que ilumina la oscuridad de la abundancia, generando la iluminación súbita.",
      decree: "Abrazo el cambio con valentía uraniana. Mi espíritu se libera de cadenas obsoletas, innovando mi existencia con la fuerza del trueno divino.",
      ritual: {
        stones: ["Larimar", "Amatista", "Turquesa"],
        hours: "Martes en la madrugada o jueves al amanecer",
        instructions: "Colocar larimar sobre el corazón, amatista en el tercer ojo y turquesa en la garganta. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces."
      }
    },
    "Neptuno": {
      riskBase: 18,
      behavioral: {
        high: "Confusión entre optimismo y fantasía, tendencia a la evasión por sustancias o espiritualidad, delirios espirituales. Dificultad para distinguir realidad de fantasía en la expansión.",
        medium: "Intuición elevada, creatividad poética, sensibilidad espiritual agudizada. La persona puede experimentar momentos de transcendencia o conexión con lo divino.",
        low: "Reflexión sobre sueños y aspiraciones espirituales. Tendencia a la contemplación y la meditación. Ideal para arte o música contemplativa."
      },
      social: {
        high: "Engaños autoinfligidos o infligidos, confusión en relaciones, tendencia al victimismo o al rescate de otros. Posibles engaños sentimentales.",
        medium: "Conexiones espirituales profundas, altruismo elevado, inspiración artística compartida. Buen momento para eventos benéficos o artísticos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla, pescados blancos. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al mar o ríos.",
      mitigation: "Mantener conexión con la realidad a través del arte o la naturaleza. Evitar sustancias psicoactivas. Usar amatista para claridad espiritual.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Júpiter-Neptuno es la disolución del estaño en agua primordial. Representa la fase más profunda del opus, donde toda expansión se disuelve en el espíritu.",
      decree: "Mi visión trasciende los velos de la ilusión. El agua divina purifica mi conciencia, revelando la verdad eterna que habita en mi alma.",
      ritual: {
        stones: ["Amatista", "Aquamarina"],
        hours: "Miércoles al atardecer o noches de luna llena",
        instructions: "Colocar amatista sobre el tercer ojo y aquamarina en el corazón. Colocar un cuenco de agua con pétalos de lavanda al lado. Meditar 15 minutos."
      }
    },
    "Plutón": {
      riskBase: 30,
      behavioral: {
        high: "Obsesiones profundas con tendencia a la expansión destructiva, tendencia al control manipulador a través de la abundancia, crisis de poder intensa. Posible exposición de secretos oscuros.",
        medium: "Transformación profunda a través de la expansión, renacimiento psicológico, capacidad de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos.",
        low: "Reflexión sobre poder personal y sus usos. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra."
      },
      social: {
        high: "Poder destructivo en relaciones, manipulación o ser manipulado, exposición de secretos que destruyen. Posibles conflictos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman profundamente, relaciones intensas y regenerativas, poder compartido de manera constructiva. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de poder. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, berenjena, ciruelas negras, ajo negro, cacao puro. Evitar carnes muy rojas.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, deportes de contacto controlados, danza catártica.",
      mitigation: "Aceptar la transformación sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección. Evitar el poder sobre otros.",
      credibility: "Alta en interpretaciones de transformación y poder. Moderada en predicciones de crisis. Plutón opera en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Júpiter-Plutón es la muerte y resurrección de la expansión. Representa la putrefacción absoluta de la abundancia vieja para que nazca una nueva, más poderosa y auténtica.",
      decree: "Renazco de las cenizas de mi viejo yo. El fuego plutoniano purifica mi esencia, forjando un ser más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Amatista", "Granate"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar las piedras sobre la base de la columna vertebral. Encender una vela roja oscura. Escribir en un papel algo que se desea soltar y quemarlo en un cuenco resistente. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    }
  },
  "Saturno": {
    "Sol": {
      riskBase: 35,
      behavioral: {
        high: "Depresión profunda, sentimiento de aislamiento total, exceso de autocrítica, tendencia a la rigidez patológica. Posible crisis existencial por confrontación con límites y mortality.",
        medium: "Mayor responsabilidad, disciplina elevada, necesidad de estructurar la vida. La persona puede sentir presión pero también determinación para superar obstáculos.",
        low: "Reflexión sobre responsabilidades y legado. Tendencia a la planificación a largo plazo. Momento para organizarse y establecer rutinas."
      },
      social: {
        high: "Aislamiento social extremo, conflictos con figuras de autoridad paterna, sentimiento de abandono. Posibles problemas legales o laborales graves.",
        medium: "Mayor seriedad en interacciones, relaciones con personas mayores o de autoridad, tiempo de madurez profesional. Buen momento para asuntos legales formales.",
        low: "Necesidad de revisar compromisos sociales. Tiempo propicio para establecer límites saludables en relaciones."
      },
      diet: "Alimentos oscuros y nutritivos: legumbres, granos enteros, verduras de hoja verde oscuro, quinoa. Evitar azúcares refinados. Beber infusiones de diente de león para el hígado.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, entrenamiento de fuerza progresivo. Evitar excesos de intensidad.",
      mitigation: "Aceptar las lecciones de Saturno con humildad. Practicar la paciencia y la perseverancia. Usar obsidiana para protección. Evitar aislamiento total.",
      credibility: "Muy alta en interpretaciones de estructura y karma. Alta en predicciones de desafíos y responsabilidades. Cuidado con tendencias pesimistas.",
      quote: { text: "No hay camino para la sabiduría sin pasar por la prueba del sufrimiento.", author: "Heráclito de Éfeso" },
      alchemy: "Saturno-Sol es la unión del plomo con el oro. Representa la negredo, la fase donde el plomo debe morir para renacer como oro. Es la muerte del ego para renacer en gloria.",
      decree: "Acepto las lecciones de Saturno con gratitud. Mi disciplina construye cimientos eternos, transformando cada obstáculo en escalón hacia la maestría.",
      ritual: {
        stones: ["Obsidiana", "Onix negro", "Citrino"],
        hours: "Sábado a medianoche o viernes después del atardecer",
        instructions: "Colocar las piedras sobre los pies. Encender una vela negra o índigo. Meditar 20 minutos en silencio absoluto. Recitar el decreto 7 veces en tono grave y solemne, visualizando raíces negras conectando el cuerpo con la tierra."
      }
    },
    "Luna": {
      riskBase: 38,
      behavioral: {
        high: "Depresión emocional profunda, sentimiento de vacío afectivo, dificultad para expresar emociones, tendencia al aislamiento emocional. Posible duelo prolongado.",
        medium: "Seriedad emocional, necesidad de estructurar sentimientos, madurez emocional creciente. La persona puede establecer límites afectivos saludables.",
        low: "Reflexión sobre responsabilidades emocionales. Tendencia a establecer rutinas de cuidado emocional. Ideal para terapia o trabajo interior."
      },
      social: {
        high: "Aislamiento emocional extremo, dificultad para conectarse con otros, posibles rupturas por rigidez emocional.",
        medium: "Relaciones serias y comprometidas, responsabilidad emocional elevada, conexión con personas mayores o sabias.",
        low: "Momento para revisar compromisos emocionales. Tiempo propicio para establecer límites saludables en relaciones."
      },
      diet: "Alimentos nutritivos y estables: legumbres, granos enteros, verduras de hoja verde oscuro, sopas calientes. Evitar azúcares refinados.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, journaling emocional.",
      mitigation: "Aceptar las lecciones emocionales de Saturno con humildad. Practicar la paciencia emocional. Usar obsidiana para protección.",
      credibility: "Muy alta en interpretaciones de madurez emocional. Alta en predicciones de desafíos emocionales y duelo.",
      quote: { text: "El sufrimiento es la puerta de entrada al conocimiento de uno mismo.", author: "Carl Gustav Jung" },
      alchemy: "Saturno-Luna es la unión del plomo con la plata. Representa la negredo emocional, la fase donde las emociones deben morir para renacer purificadas.",
      decree: "Acepto las lecciones de Saturno en mi corazón. Mi madurez emocional construye cimientos eternos de sabiduría y fortaleza interior.",
      ritual: {
        stones: ["Obsidiana", "Onix negro"],
        hours: "Sábado a medianoche",
        instructions: "Colocar obsidiana sobre el corazón. Meditar 20 minutos en silencio. Recitar el decreto 7 veces en tono grave, visualizando raíces que estabilizan las emociones."
      }
    },
    "Mercurio": {
      riskBase: 30,
      behavioral: {
        high: "Pensamientos depresivos, rigidez intelectual, dificultad para comunicar ideas, tendencia al pesimismo mental. Posible bloqueo creativo profundo.",
        medium: "Seriedad intelectual, disciplina mental elevada, capacidad de trabajo profundo y sostenido. La persona puede ser una mente brillante en su disciplina.",
        low: "Reflexión sobre responsabilidades intelectuales. Tendencia a establecer rutinas de estudio. Ideal para trabajo académico o investigación."
      },
      social: {
        high: "Aislamiento intelectual, dificultad para comunicar ideas, posibles conflictos con figuras de autoridad por diferencias filosóficas.",
        medium: "Relaciones intelectuales serias, conexión con profesores o mentores, capacidad de trabajo profundo en equipo.",
        low: "Momento para revisar compromisos académicos. Tiempo propicio para establecer rutinas de estudio disciplinadas."
      },
      diet: "Alimentos nutritivos y estables: legumbres, granos enteros, verduras de hoja verde oscuro, pescados grasos. Evitar azúcares refinados.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, escritura profunda.",
      mitigation: "Aceptar las lecciones intelectuales de Saturno con humildad. Practicar la disciplina mental. Usar obsidiana para claridad.",
      credibility: "Muy alta en interpretaciones de estructura intelectual. Alta en predicciones de desafíos académicos o mentales.",
      quote: { text: "No hay camino para la sabiduría sin pasar por la prueba del sufrimiento.", author: "Heráclito de Éfeso" },
      alchemy: "Saturno-Mercurio es la unión del plomo con el mercurio. Representa la negredo intelectual, la fase donde el pensamiento debe morir para renacer purificado.",
      decree: "Acepto las lecciones de Saturno en mi mente. Mi disciplina intelectual construye cimientos eternos de sabiduría y maestría.",
      ritual: {
        stones: ["Obsidiana", "Onix negro"],
        hours: "Sábado a medianoche",
        instructions: "Colocar obsidiana sobre la garganta. Meditar 20 minutos en silencio absoluto. Recitar el decreto 7 veces en tono grave."
      }
    },
    "Venus": {
      riskBase: 35,
      behavioral: {
        high: "Depresión afectiva, sentimiento de vacío en relaciones, dificultad para expresar emociones, tendencia al aislamiento emocional. Posible duelo prolongado.",
        medium: "Seriedad emocional, necesidad de estructurar sentimientos, madurez emocional creciente. La persona puede establecer límites afectivos saludables.",
        low: "Reflexión sobre responsabilidades emocionales. Tendencia a establecer rutinas de cuidado emocional. Ideal para terapia o trabajo interior."
      },
      social: {
        high: "Aislamiento emocional extremo, dificultad para conectarse con otros, posibles rupturas por rigidez emocional.",
        medium: "Relaciones serias y comprometidas, responsabilidad emocional elevada, conexión con personas mayores o sabias.",
        low: "Momento para revisar compromisos emocionales. Tiempo propicio para establecer límites saludables en relaciones."
      },
      diet: "Alimentos nutritivos y estables: legumbres, granos enteros, verduras de hoja verde oscuro, sopas calientes. Evitar azúcares refinados.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, journaling emocional.",
      mitigation: "Aceptar las lecciones emocionales de Saturno con humildad. Practicar la paciencia emocional. Usar obsidiana para protección.",
      credibility: "Muy alta en interpretaciones de madurez emocional. Alta en predicciones de desafíos emocionales y duelo.",
      quote: { text: "El sufrimiento es la puerta de entrada al conocimiento de uno mismo.", author: "Carl Gustav Jung" },
      alchemy: "Saturno-Venus es la unión del plomo con el cobre. Representa la negredo emocional, la fase donde las emociones deben morir para renacer purificadas.",
      decree: "Acepto las lecciones de Saturno en mi corazón. Mi madurez emocional construye cimientos eternos de sabiduría y fortaleza interior.",
      ritual: {
        stones: ["Obsidiana", "Onix negro"],
        hours: "Sábado a medianoche",
        instructions: "Colocar obsidiana sobre el corazón. Meditar 20 minutos en silencio. Recitar el decreto 7 veces en tono grave."
      }
    },
    "Marte": {
      riskBase: 40,
      behavioral: {
        high: "Depresión con ira subyacente, sentimiento de aislamiento y rabia contenida, tendencia a la rigidez patológica. Posible crisis existencial con explosiones de ira.",
        medium: "Mayor responsabilidad en el manejo de la energía, disciplina elevada, necesidad de estructurar la acción. La persona puede sentir presión pero también determinación.",
        low: "Reflexión sobre responsabilidades y legado. Tendencia a la planificación a largo plazo. Momento para organizarse y establecer rutinas de acción."
      },
      social: {
        high: "Aislamiento social con ira contenida, conflictos con figuras de autoridad paterna, sentimiento de abandono. Posibles problemas legales o laborales graves.",
        medium: "Mayor seriedad en interacciones, relaciones con personas mayores o de autoridad, tiempo de madurez profesional. Buen momento para asuntos legales formales.",
        low: "Necesidad de revisar compromisos sociales. Tiempo propicio para establecer límites saludables en relaciones."
      },
      diet: "Alimentos oscuros y nutritivos: legumbres, granos enteros, verduras de hoja verde oscuro, quinoa. Evitar azúcares refinados. Beber infusiones de diente de león.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, entrenamiento de fuerza progresivo.",
      mitigation: "Aceptar las lecciones de Saturno con humildad. Practicar la paciencia y la perseverancia. Usar obsidiana para protección. Evitar aislamiento total.",
      credibility: "Muy alta en interpretaciones de estructura y karma. Alta en predicciones de desafíos y responsabilidades. Cuidado con tendencias pesimistas.",
      quote: { text: "No hay camino para la sabiduría sin pasar por la prueba del sufrimiento.", author: "Heráclito de Éfeso" },
      alchemy: "Saturno-Marte es la unión del plomo con el hierro. Representa la negredo de la fuerza, la fase donde la pasión debe morir para renacer purificada.",
      decree: "Acepto las lecciones de Saturno con humildad. Mi disciplina construye cimientos eternos, transformando cada obstáculo en escalón hacia la maestría.",
      ritual: {
        stones: ["Obsidiana", "Onix negro", "Granate"],
        hours: "Sábado a medianoche o viernes después del atardecer",
        instructions: "Colocar las piedras sobre los pies. Encender una vela negra o índigo. Meditar 20 minutos en silencio absoluto. Recitar el decreto 7 veces."
      }
    },
    "Júpiter": {
      riskBase: 25,
      behavioral: {
        high: "Depresión con optimismo subyacente, sentimiento de aislamiento y期望 excesiva, tendencia a la rigidez filosófica. Posible crisis existencial por conflicto entre idealismo y realidad.",
        medium: "Mayor responsabilidad en la expansión, disciplina elevada para lograr metas ambiciosas. La persona puede sentir presión pero también determinación para crecer.",
        low: "Reflexión sobre responsabilidades y crecimiento. Tendencia a la planificación a largo plazo. Momento para organizarse y establecer metas realistas."
      },
      social: {
        high: "Aislamiento social por exceso de optimismo, conflictos con figuras de autoridad por diferencias filosóficas, sentimiento de abandono. Posibles problemas legales o académicos.",
        medium: "Mayor seriedad en interacciones, relaciones con personas mayores o de autoridad, tiempo de madurez profesional. Buen momento para asuntos legales formales.",
        low: "Necesidad de revisar compromisos sociales. Tiempo propicio para establecer límites saludables en relaciones y metas."
      },
      diet: "Alimentos nutritivos y estables: legumbres, granos enteros, verduras de hoja verde oscuro, quinoa. Evitar azúcares refinados. Beber infusiones de diente de león.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, entrenamiento de fuerza progresivo.",
      mitigation: "Aceptar las lecciones de Saturno con humildad. Practicar la paciencia y la perseverancia. Usar obsidiana para protección. Evitar aislamiento total.",
      credibility: "Muy alta en interpretaciones de estructura y karma. Alta en predicciones de desafíos y responsabilidades. Cuidado con tendencias pesimistas.",
      quote: { text: "No hay camino para la sabiduría sin pasar por la prueba del sufrimiento.", author: "Heráclito de Éfeso" },
      alchemy: "Saturno-Júpiter es la unión del plomo con el estaño. Representa la negredo de la expansión, la fase donde la abundancia debe morir para renacer purificada.",
      decree: "Acepto las lecciones de Saturno con humildad. Mi disciplina construye cimientos eternos, transformando cada obstáculo en escalón hacia la maestría.",
      ritual: {
        stones: ["Obsidiana", "Onix negro", "Amatista"],
        hours: "Sábado a medianoche o jueves al amanecer",
        instructions: "Colocar las piedras sobre los pies. Encender una vela negra o índigo. Meditar 20 minutos en silencio absoluto. Recitar el decreto 7 veces en tono grave."
      }
    },
    "Saturno": {
      riskBase: 50,
      behavioral: {
        high: "Depresión extrema, sentimiento de aislamiento total, rigidez patológica, crisis existencial profunda. Posible tendencia al suicidio o autodestrucción. Energía saturnina desbordada.",
        medium: "Mayor responsabilidad, disciplina elevada, necesidad de estructurar la vida de manera extrema. La persona puede sentir presión intensa pero también determinación inquebrantable.",
        low: "Reflexión sobre responsabilidades y legado de manera profunda. Tendencia a la planificación a largo plazo. Momento para organizarse y establecer rutinas estrictas."
      },
      social: {
        high: "Aislamiento social total, conflictos con figuras de autoridad paterna, sentimiento de abandono extremo. Posibles problemas legales o laborales graves.",
        medium: "Mayor seriedad en interacciones, relaciones con personas mayores o de autoridad, tiempo de madurez profesional extrema. Buen momento para asuntos legales formales.",
        low: "Necesidad de revisar compromisos sociales de manera profunda. Tiempo propicio para establecer límites saludables en relaciones."
      },
      diet: "Alimentos oscuros y nutritivos: legumbres, granos enteros, verduras de hoja verde oscuro, quinoa, sopas calientes. Evitar azúcares refinados. Beber infusiones de diente de león.",
      exercise: "Actividades lentas y disciplinadas: caminatas prolongadas, yoga Iyengar, tai chi, entrenamiento de fuerza progresivo. Evitar excesos de intensidad.",
      mitigation: "Aceptar las lecciones de Saturno con humildad extrema. Practicar la paciencia y la perseverancia inquebrantable. Usar obsidiana para protección. Evitar aislamiento total.",
      credibility: "Muy alta en interpretaciones de estructura y karma. Alta en predicciones de desafíos y responsabilidades extremas. Cuidado con tendencias pesimistas.",
      quote: { text: "No hay camino para la sabiduría sin pasar por la prueba del sufrimiento.", author: "Heráclito de Éfeso" },
      alchemy: "Saturno con Saturno es el opus contra naturam, la duplicación del plomo. Representa la negredo absoluta, la fase donde el plomo debe morir completamente para renacer como oro puro.",
      decree: "Acepto las lecciones de Saturno con gratitud absoluta. Mi disciplina construye cimientos eternos, transformando cada obstáculo en escalón hacia la maestría suprema.",
      ritual: {
        stones: ["Obsidiana", "Onix negro", "Tourmalina negra"],
        hours: "Sábado a medianoche",
        instructions: "Colocar las piedras sobre los pies. Encender una vela negra o índigo. Meditar 30 minutos en silencio absoluto. Recitar el decreto 9 veces en tono grave y solemne, visualizando raíces negras conectando el cuerpo con la tierra."
      }
    },
    "Urano": {
      riskBase: 35,
      behavioral: {
        high: "Comportamiento errático con rigidez subyacente, rebeldía extrema que choca con la estructura, ruptura violenta de patrones. Posible crisis de identidad que lleva a decisiones drásticas e irreversibles.",
        medium: "Insight repentinos sobre estructura, innovación en la forma de organizarse, apertura a nuevas perspectivas que desafían el orden establecido. La persona puede experimentar momentos de genialidad disruptiva.",
        low: "Reflexión sobre áreas de la vida que requieren renovación estructural. Tendencia a buscar nuevas formas de organización. Ideal para planificar cambios graduales."
      },
      social: {
        high: "Rupturas repentinas en relaciones por rigidez, conflictos con autoridades establecidas, tendencia a la anarquía social estructurada. Posible aislamiento por excentricidad.",
        medium: "Conexiones con personas inusuales o innovadoras, participación en movimientos sociales, ruptura de convenciones establecidas. Buen momento para eventos alternativos.",
        low: "Necesidad de evaluar qué estructuras personales necesitan renovación. Tiempo propicio para envisionar un futuro diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, cebolla, brotes de soja, algas. Evitar alimentos muy procesados.",
      exercise: "Actividades inusuales y estimulantes: aeróbicos en grupo, ciclismo urbano, parkour, skate, yoga con música electrónica.",
      mitigation: "Canalizar la energía disruptiva en proyectos creativos. Evitar decisiones drásticas en relaciones o carrera. Usar turquesa para estabilizar.",
      credibility: "Alta en interpretaciones de cambios y transformación. Moderada en predicciones específicas. Urano es impredecible por naturaleza.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Saturno-Urano representa la irrupción de la chispa divina en la estructura. Es el rayo que ilumina la oscuridad de la rigidez, generando la iluminación súbita en la organización.",
      decree: "Abrazo el cambio con valentía uraniana. Mi espíritu se libera de cadenas obsoletas, innovando mi existencia con la fuerza del trueno divino.",
      ritual: {
        stones: ["Larimar", "Obsidiana", "Turquesa"],
        hours: "Martes en la madrugada o sábado a medianoche",
        instructions: "Colocar larimar sobre el corazón, obsidiana en la base de la columna y turquesa en el tercer ojo. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces."
      }
    },
    "Neptuno": {
      riskBase: 35,
      behavioral: {
        high: "Confusión entre estructura y fantasía, tendencia a la evasión por sustancias o espiritualidad rígida, delirios espirituales o paranoicos. Dificultad para distinguir realidad de fantasía en la estructura.",
        medium: "Intuición elevada aplicada a la estructura, creatividad poética en la organización, sensibilidad espiritual agudizada. La persona puede experimentar momentos de transcendencia estructurada.",
        low: "Reflexión sobre sueños y aspiraciones espirituales en el contexto de la estructura. Tendencia a la contemplación y la meditación. Ideal para arte o música contemplativa."
      },
      social: {
        high: "Engaños autoinfligidos o infligidos en relaciones, confusión en la acción social, tendencia al victimismo o al rescate de otros. Posibles engaños sentimentales por falta de estructura.",
        medium: "Conexiones espirituales profundas, altruismo elevado, inspiración artística compartida. Buen momento para eventos benéficos o artísticos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla, pescados blancos. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al mar o ríos.",
      mitigation: "Mantener conexión con la realidad a través del arte o la naturaleza. Evitar sustancias psicoactivas. Usar amatista para claridad espiritual.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Saturno-Neptuno es la disolución del plomo en agua primordial. Representa la fase más profunda del opus, donde toda estructura se disuelve en el espíritu.",
      decree: "Mi visión trasciende los velos de la ilusión. El agua divina purifica mi conciencia, revelando la verdad eterna que habita en mi alma.",
      ritual: {
        stones: ["Amatista", "Obsidiana", "Aquamarina"],
        hours: "Miércoles al atardecer o noches de luna llena",
        instructions: "Colocar amatista sobre el tercer ojo, obsidiana en la base de la columna y aquamarina en el corazón. Colocar un cuenco de agua con pétalos de lavanda al lado. Meditar 15 minutos."
      }
    },
    "Plutón": {
      riskBase: 55,
      behavioral: {
        high: "Obsesiones profundas con tendencia a la estructura destructiva, tendencia al control manipulador a través de la rigidez, crisis de poder intensa. Posible exposición de secretos oscuros.",
        medium: "Transformación profunda a través de la estructura, renacimiento psicológico, capacidad de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos.",
        low: "Reflexión sobre poder personal y sus usos en la estructura. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra."
      },
      social: {
        high: "Poder destructivo en relaciones, manipulación o ser manipulado a través de la estructura, exposición de secretos que destruyen. Posibles conflictos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman profundamente, relaciones intensas y regenerativas, poder compartido de manera constructiva. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de poder estructural. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, berenjena, ciruelas negras, ajo negro, cacao puro. Evitar carnes muy rojas.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, deportes de contacto controlados, danza catártica.",
      mitigation: "Aceptar la transformación sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección. Evitar el poder sobre otros.",
      credibility: "Alta en interpretaciones de transformación y poder. Moderada en predicciones de crisis. Plutón opera en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Saturno-Plutón es la muerte y resurrección de la estructura. Representa la putrefacción absoluta de la rigidez vieja para que nazca una nueva, más poderosa y auténtica.",
      decree: "Renazco de las cenizas de mi viejo yo. El fuego plutoniano purifica mi esencia, forjando un ser más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Obsidiana", "Granate", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar las piedras sobre la base de la columna vertebral. Encender una vela roja oscura. Escribir en un papel algo que se desea soltar y quemarlo en un cuenco resistente. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    }
  },
  "Urano": {
    "Sol": {
      riskBase: 30,
      behavioral: {
        high: "Comportamiento errático, rebeldía extrema, ruptura violenta de patrones. Posible crisis de identidad que lleva a decisiones drásticas e irreversibles. Energía eléctrica descontrolada.",
        medium: "Insight repentinos, innovación creativa, apertura a nuevas perspectivas. La persona puede experimentar cambios de humor pero también momentos de genialidad.",
        low: "Reflexión sobre áreas de la vida que requieren innovación. Tendencia a buscar nuevas formas de expresión. Ideal para planificar cambios graduales."
      },
      social: {
        high: "Rupturas repentinas en relaciones, conflictos con autoridades establecidas, tendencia a la anarquía social. Posible aislamiento por excentricidad.",
        medium: "Conexiones con personas inusuales o innovadoras, participación en movimientos sociales, ruptura de convenciones. Buen momento para eventos alternativos.",
        low: "Necesidad de evaluar qué estructuras personales necesitan renovación. Tiempo propicio para envisionar un futuro diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, cebolla, brotes de soja, algas. Evitar alimentos muy procesados. Beber agua con limón al despertar.",
      exercise: "Actividades inusuales y estimulantes: aeróbicos en grupo, ciclismo urbano, parkour, skate, yoga con música electrónica. Buscar variedad constante.",
      mitigation: "Canalizar la energía disruptiva en proyectos creativos. Evitar decisiones drásticas en relaciones o carrera. Usar turquesa para estabilizar la energía.",
      credibility: "Alta en interpretaciones de cambios y transformación. Moderada en predicciones específicas. Urano es impredecible por naturaleza.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Urano-Sol representa la irrupción de la chispa divina en el principio solar. Es el rayo que ilumina la oscuridad del ego, generando la iluminación súbita de la identidad.",
      decree: "Abrazo el cambio con valentía uraniana. Mi espíritu se libera de cadenas obsoletas, innovando mi existencia con la fuerza del trueno divino.",
      ritual: {
        stones: ["Larimar", "Citrino", "Turquesa"],
        hours: "Martes en la madrugada, entre las 3:00 y 5:00 AM",
        instructions: "Colocar las piedras sobre el tercer ojo. Encender una vela celeste o eléctrica. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces en tono enérgico, visualizando rayos eléctricos azules envolviendo el cuerpo."
      }
    },
    "Luna": {
      riskBase: 32,
      behavioral: {
        high: "Emociones erráticas, cambios de humor extremos, rebeldía emocional, posibles crisis de identidad afectiva. La estabilidad emocional se tambalea violentamente.",
        medium: "Insight emocionales repentinos, apertura a nuevas formas de amar, innovación en la expresión afectiva. La persona puede experimentar amor a primera vista.",
        low: "Reflexión sobre áreas emocionales que requieren renovación. Tendencia a buscar nuevas formas de expresión afectiva. Ideal para planes de crecimiento emocional."
      },
      social: {
        high: "Rupturas emocionales repentinas, rebeldía en relaciones, posibles separaciones o cambios drásticos en el estado afectivo.",
        medium: "Conexiones emocionales inusuales, amor por causas sociales, expresión afectiva no convencional.",
        low: "Momento para evaluar qué patrones emocionales necesitan renovación. Tiempo propicio para envisionar un futuro afectivo diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, brotes de soja, algas. Evitar alimentos muy procesados. Beber agua con limón.",
      exercise: "Actividades inusuales: aeróbicos en grupo, ciclismo, yoga con música electrónica, danza libre e improvisada.",
      mitigation: "Canalizar la energía emocional disruptiva en proyectos creativos. Evitar decisiones emocionales drásticas. Usar turquesa para estabilizar.",
      credibility: "Alta en interpretaciones de cambios emocionales. Moderada en predicciones específicas. Urano es inherentemente impredecible.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Urano-Luna representa la irrupción de la chispa divina en las emociones. Es el rayo que ilumina la oscuridad emocional, generando la iluminación súbita.",
      decree: "Mis emociones se liberan con la fuerza del trueno. Abrazo el cambio afectivo con valentía, renovando mi capacidad de amar sin miedo.",
      ritual: {
        stones: ["Larimar", "Turquesa"],
        hours: "Martes en la madrugada",
        instructions: "Colocar larimar sobre el corazón y turquesa en la garganta. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces con energía."
      }
    },
    "Mercurio": {
      riskBase: 28,
      behavioral: {
        high: "Pensamientos erráticos, ideas revolucionarias pero inestables, dificultad para mantener la concentración en un solo tema. Posible genialidad伴生 de caos mental.",
        medium: "Insight repentinos, innovación intelectual, apertura a nuevas perspectivas. La persona puede experimentar momentos de genialidad creativa.",
        low: "Reflexión sobre áreas del pensamiento que requieren renovación. Tendencia a buscar nuevas formas de expresión intelectual. Ideal para planificar cambios."
      },
      social: {
        high: "Ideas radicales que generan conflictos, rebelión intelectual, dificultad para comunicar visiones futuras a personas tradicionales.",
        medium: "Conexiones intelectuales inusuales, participación en movimientos innovadores, ruptura de paradigmas. Buen momento para eventos alternativos.",
        low: "Necesidad de evaluar qué patrones intelectuales necesitan renovación. Tiempo propicio para envisionar un futuro diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, brotes de soja, algas. Evitar alimentos muy procesados.",
      exercise: "Actividades inusuales y estimulantes: ciclismo urbano, parkour, yoga con música electrónica, escritura experimental.",
      mitigation: "Canalizar la energía disruptiva en proyectos creativos. Evitar decisiones drásticas intelectuales. Usar turquesa para estabilizar.",
      credibility: "Alta en interpretaciones de cambios intelectuales. Moderada en predicciones específicas. Urano es impredecible por naturaleza.",
      quote: { text: "La mente que se abre a una nueva idea jamás vuelve a su tamaño original.", author: "Albert Einstein" },
      alchemy: "Urano-Mercurio representa la irrupción de la chispa divina en el pensamiento. Es el rayo que ilumina la oscuridad mental, generando la iluminación súbita.",
      decree: "Mi mente se libera de cadenas obsoletas. Mis pensamientos son rayos de innovación que iluminan nuevos caminos de conciencia.",
      ritual: {
        stones: ["Larimar", "Turquesa"],
        hours: "Martes en la madrugada",
        instructions: "Colocar larimar sobre la garganta y turquesa en el tercer ojo. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces con energía."
      }
    },
    "Venus": {
      riskBase: 25,
      behavioral: {
        high: "Emociones erráticas, cambios de humor extremos, rebeldía emocional, posibles crisis de identidad afectiva. La estabilidad emocional se tambalea violentamente.",
        medium: "Insight emocionales repentinos, apertura a nuevas formas de amar, innovación en la expresión afectiva. La persona puede experimentar amor a primera vista.",
        low: "Reflexión sobre áreas emocionales que requieren renovación. Tendencia a buscar nuevas formas de expresión afectiva. Ideal para planes de crecimiento emocional."
      },
      social: {
        high: "Rupturas emocionales repentinas, rebeldía en relaciones, posibles separaciones o cambios drásticos en el estado afectivo.",
        medium: "Conexiones emocionales inusuales, amor por causas sociales, expresión afectiva no convencional.",
        low: "Momento para evaluar qué patrones emocionales necesitan renovación. Tiempo propicio para envisionar un futuro afectivo diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, brotes de soja, algas. Evitar alimentos muy procesados.",
      exercise: "Actividades inusuales: aeróbicos en grupo, ciclismo, yoga con música electrónica, danza libre e improvisada.",
      mitigation: "Canalizar la energía emocional disruptiva en proyectos creativos. Evitar decisiones emocionales drásticas. Usar turquesa para estabilizar.",
      credibility: "Alta en interpretaciones de cambios emocionales. Moderada en predicciones específicas. Urano es inherentemente impredecible.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Urano-Venus representa la irrupción de la chispa divina en el amor. Es el rayo que ilumina la oscuridad afectiva, generando la iluminación súbita del corazón.",
      decree: "Mis emociones se liberan con la fuerza del trueno. Abrazo el cambio afectivo con valentía, renovando mi capacidad de amar sin miedo.",
      ritual: {
        stones: ["Larimar", "Rosa cuarzo", "Turquesa"],
        hours: "Martes en la madrugada o viernes al atardecer",
        instructions: "Colocar larimar sobre el corazón, rosa cuarzo en el pecho y turquesa en la garganta. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces."
      }
    },
    "Marte": {
      riskBase: 35,
      behavioral: {
        high: "Comportamiento errático peligroso, rebeldía extrema con tendencia a la acción impulsiva, ruptura violenta de patrones. Posible accidente por imprudencia o rebeldía.",
        medium: "Insight repentinos sobre acción, innovación en la forma de actuar, apertura a nuevas perspectivas. La persona puede experimentar momentos de genialidad práctica.",
        low: "Reflexión sobre áreas de la vida que requieren innovación. Tendencia a buscar nuevas formas de acción. Ideal para planificar cambios graduales."
      },
      social: {
        high: "Rupturas repentinas en relaciones por impulsividad, conflictos con autoridades establecidas, tendencia a la anarquía social. Posible aislamiento por excentricidad.",
        medium: "Conexiones con personas inusuales o innovadoras, participación en movimientos sociales, ruptura de convenciones. Buen momento para eventos alternativos.",
        low: "Necesidad de evaluar qué estructuras personales necesitan renovación. Tiempo propicio para envisionar un futuro diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, cebolla, brotes de soja, algas. Evitar alimentos muy procesados.",
      exercise: "Actividades inusuales y estimulantes: aeróbicos en grupo, ciclismo urbano, parkour, skate, yoga con música electrónica.",
      mitigation: "Canalizar la energía disruptiva en proyectos creativos. Evitar decisiones drásticas en relaciones o carrera. Usar turquesa para estabilizar.",
      credibility: "Alta en interpretaciones de cambios y transformación. Moderada en predicciones específicas. Urano es impredecible por naturaleza.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Urano-Marte representa la irrupción de la chispa divina en la acción. Es el rayo que ilumina la oscuridad de la pasión, generando la iluminación súbita en la acción.",
      decree: "Abrazo el cambio con valentía uraniana. Mi espíritu se libera de cadenas obsoletas, innovando mi existencia con la fuerza del trueno divino.",
      ritual: {
        stones: ["Larimar", "Rubí", "Turquesa"],
        hours: "Martes en la madrugada",
        instructions: "Colocar larimar sobre el corazón, rubí en la base de la columna y turquesa en el tercer ojo. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces."
      }
    },
    "Júpiter": {
      riskBase: 20,
      behavioral: {
        high: "Insight repentinos pero inestables, ideas revolucionarias que pueden llevar a decisiones drásticas. Posible genialidad伴生 de caos mental o espiritual.",
        medium: "Expansión de la conciencia, apertura a nuevas perspectivas espirituales, innovación en la forma de enseñar o aprender. La persona puede experimentar momentos de iluminación.",
        low: "Reflexión sobre áreas de la vida que requieren expansión. Tendencia a buscar nuevas formas de expresión espiritual. Ideal para planificar cambios graduales."
      },
      social: {
        high: "Rupturas repentinas en relaciones por ideas radicales, conflictos con autoridades establecidas, tendencia a la anarquía espiritual. Posible aislamiento por excentricidad.",
        medium: "Conexiones con personas inusuales o innovadoras, participación en movimientos espirituales, ruptura de convenciones. Buen momento para eventos alternativos.",
        low: "Necesidad de evaluar qué estructuras personales necesitan renovación. Tiempo propicio para envisionar un futuro diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, cebolla, brotes de soja, algas. Evitar alimentos muy procesados.",
      exercise: "Actividades inusuales y estimulantes: aeróbicos en grupo, ciclismo urbano, parkour, skate, yoga con música electrónica.",
      mitigation: "Canalizar la energía disruptiva en proyectos creativos. Evitar decisiones drásticas en relaciones o carrera. Usar turquesa para estabilizar.",
      credibility: "Alta en interpretaciones de cambios y transformación. Moderada en predicciones específicas. Urano es impredecible por naturaleza.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Urano-Júpiter representa la irrupción de la chispa divina en la expansión. Es el rayo que ilumina la oscuridad de la abundancia, generando la iluminación súbita.",
      decree: "Abrazo el cambio con valentía uraniana. Mi espíritu se libera de cadenas obsoletas, innovando mi existencia con la fuerza del trueno divino.",
      ritual: {
        stones: ["Larimar", "Amatista", "Turquesa"],
        hours: "Martes en la madrugada o jueves al amanecer",
        instructions: "Colocar larimar sobre el corazón, amatista en el tercer ojo y turquesa en la garganta. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces."
      }
    },
    "Saturno": {
      riskBase: 35,
      behavioral: {
        high: "Comportamiento errático con rigidez subyacente, rebeldía extrema que choca con la estructura, ruptura violenta de patrones. Posible crisis de identidad que lleva a decisiones drásticas e irreversibles.",
        medium: "Insight repentinos sobre estructura, innovación en la forma de organizarse, apertura a nuevas perspectivas que desafían el orden establecido. La persona puede experimentar momentos de genialidad disruptiva.",
        low: "Reflexión sobre áreas de la vida que requieren renovación estructural. Tendencia a buscar nuevas formas de organización. Ideal para planificar cambios graduales."
      },
      social: {
        high: "Rupturas repentinas en relaciones por rigidez, conflictos con autoridades establecidas, tendencia a la anarquía social estructurada. Posible aislamiento por excentricidad.",
        medium: "Conexiones con personas inusuales o innovadoras, participación en movimientos sociales, ruptura de convenciones establecidas. Buen momento para eventos alternativos.",
        low: "Necesidad de evaluar qué estructuras personales necesitan renovación. Tiempo propicio para envisionar un futuro diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, cebolla, brotes de soja, algas. Evitar alimentos muy procesados.",
      exercise: "Actividades inusuales y estimulantes: aeróbicos en grupo, ciclismo urbano, parkour, skate, yoga con música electrónica.",
      mitigation: "Canalizar la energía disruptiva en proyectos creativos. Evitar decisiones drásticas en relaciones o carrera. Usar turquesa para estabilizar.",
      credibility: "Alta en interpretaciones de cambios y transformación. Moderada en predicciones específicas. Urano es impredecible por naturaleza.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Urano-Saturno representa la irrupción de la chispa divina en la estructura. Es el rayo que ilumina la oscuridad de la rigidez, generando la iluminación súbita en la organización.",
      decree: "Abrazo el cambio con valentía uraniana. Mi espíritu se libera de cadenas obsoletas, innovando mi existencia con la fuerza del trueno divino.",
      ritual: {
        stones: ["Larimar", "Obsidiana", "Turquesa"],
        hours: "Martes en la madrugada o sábado a medianoche",
        instructions: "Colocar larimar sobre el corazón, obsidiana en la base de la columna y turquesa en el tercer ojo. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces."
      }
    },
    "Urano": {
      riskBase: 45,
      behavioral: {
        high: "Comportamiento completamente errático, rebeldía absoluta, ruptura total de patrones. Posible crisis de identidad que lleva a decisiones drásticas e irreversibles. Energía eléctrica descontrolada total.",
        medium: "Insight repentinos extraordinarios, innovación creativa excepcional, apertura a nuevas perspectivas revolucionarias. La persona puede experimentar momentos de genialidad pura.",
        low: "Reflexión profunda sobre áreas de la vida que requieren renovación total. Tendencia a buscar nuevas formas de expresión revolucionaria. Ideal para planificar cambios radicales."
      },
      social: {
        high: "Rupturas repentinas absolutas en relaciones, conflictos extremos con autoridades establecidas, tendencia a la anarquía social total. Posible aislamiento por excentricidad extrema.",
        medium: "Conexiones con personas inusuales o innovadoras excepcionales, participación en movimientos sociales radicales, ruptura total de convenciones. Buen momento para eventos alternativos extremos.",
        low: "Necesidad de evaluar qué estructuras personales necesitan renovación total. Tiempo propicio para envisionar un futuro completamente diferente."
      },
      diet: "Alimentos con alta carga eléctrica: frutas cítricas, ajo, cebolla, brotes de soja, algas. Evitar alimentos muy procesados. Beber agua con limón al despertar.",
      exercise: "Actividades inusuales y estimulantes: aeróbicos en grupo, ciclismo urbano, parkour, skate, yoga con música electrónica. Buscar variedad constante y radical.",
      mitigation: "Canalizar la energía disruptiva en proyectos creativos revolucionarios. Evitar decisiones drásticas en relaciones o carrera. Usar turquesa para estabilizar la energía extrema.",
      credibility: "Alta en interpretaciones de cambios y transformación radicales. Moderada en predicciones específicas. Urano es impredecible por naturaleza extrema.",
      quote: { text: "Lo verdaderamente revolucionario no es cambiar las cosas, sino cambiar la forma en que las vemos.", author: "Carlos Castaneda" },
      alchemy: "Urano con Urano es el opus contra naturam, la duplicación del urano. Representa la iluminación absoluta, la fase donde la chispa divina se multiplica y transforma todo.",
      decree: "Abrazo el cambio con valentía uraniana absoluta. Mi espíritu se libera de cadenas obsoletas, innovando mi existencia con la fuerza del trueno divino supremo.",
      ritual: {
        stones: ["Larimar", "Turquesa", "Ágata azul celeste"],
        hours: "Martes en la madrugada, entre las 3:00 y 5:00 AM",
        instructions: "Colocar las piedras sobre el tercer ojo. Encender una vela celeste o eléctrica. Realizar 11 respiraciones profundas. Recitar el decreto 11 veces en tono enérgico, visualizando rayos eléctricos azules envolviendo el cuerpo completamente."
      }
    },
    "Neptuno": {
      riskBase: 35,
      behavioral: {
        high: "Confusión entre innovación y fantasía, tendencia a la evasión por sustancias o espiritualidad revolucionaria, delirios espirituales o paranoicos. Dificultad para distinguir realidad de fantasía en la innovación.",
        medium: "Intuición elevada aplicada a la innovación, creatividad poética en la ruptura, sensibilidad espiritual agudizada. La persona puede experimentar momentos de transcendencia revolucionaria.",
        low: "Reflexión sobre sueños y aspiraciones espirituales en el contexto de la innovación. Tendencia a la contemplación y la meditación. Ideal para arte o música contemplativa."
      },
      social: {
        high: "Engaños autoinfligidos o infligidos en relaciones, confusión en la acción social, tendencia al victimismo o al rescate de otros. Posibles engaños sentimentales por falta de límites en la innovación.",
        medium: "Conexiones espirituales profundas, altruismo elevado, inspiración artística compartida. Buen momento para eventos benéficos o artísticos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla, pescados blancos. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al mar o ríos.",
      mitigation: "Mantener conexión con la realidad a través del arte o la naturaleza. Evitar sustancias psicoactivas. Usar amatista para claridad espiritual.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Urano-Neptuno es la disolución del urano en agua primordial. Representa la fase más profunda del opus, donde toda innovación se disuelve en el espíritu.",
      decree: "Mi visión trasciende los velos de la ilusión. El agua divina purifica mi conciencia, revelando la verdad eterna que habita en mi alma.",
      ritual: {
        stones: ["Amatista", "Larimar", "Aquamarina"],
        hours: "Miércoles al atardecer o noches de luna llena",
        instructions: "Colocar amatista sobre el tercer ojo, larimar en el corazón y aquamarina en la garganta. Colocar un cuenco de agua con pétalos de lavanda al lado. Meditar 15 minutos."
      }
    },
    "Plutón": {
      riskBase: 50,
      behavioral: {
        high: "Obsesiones profundas con tendencia a la innovación destructiva, tendencia al control manipulador a través de la rebeldía, crisis de poder intensa. Posible exposición de secretos oscuros.",
        medium: "Transformación profunda a través de la innovación, renacimiento psicológico, capacidad de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos.",
        low: "Reflexión sobre poder personal y sus usos en la innovación. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra."
      },
      social: {
        high: "Poder destructivo en relaciones, manipulación o ser manipulado a través de la innovación, exposición de secretos que destruyen. Posibles conflictos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman profundamente, relaciones intensas y regenerativas, poder compartido de manera constructiva. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de poder innovador. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, berenjena, ciruelas negras, ajo negro, cacao puro. Evitar carnes muy rojas.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, deportes de contacto controlados, danza catártica.",
      mitigation: "Aceptar la transformación sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección. Evitar el poder sobre otros.",
      credibility: "Alta en interpretaciones de transformación y poder. Moderada en predicciones de crisis. Plutón opera en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Urano-Plutón es la muerte y resurrección de la innovación. Representa la putrefacción absoluta de la rebeldía vieja para que nazca una nueva, más poderosa y auténtica.",
      decree: "Renazco de las cenizas de mi viejo yo. El fuego plutoniano purifica mi esencia, forjando un ser más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Larimar", "Granate", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar las piedras sobre la base de la columna vertebral. Encender una vela roja oscura. Escribir en un papel algo que se desea soltar y quemarlo en un cuenco resistente. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    }
  },
  "Neptuno": {
    "Sol": {
      riskBase: 28,
      behavioral: {
        high: "Confusión extrema, tendencia a la evasión por sustancias, delirios espirituales o paranoicos. Dificultad para distinguir realidad de fantasía. Posible adicción a cualquier forma de escapismo.",
        medium: "Intuición elevada, creatividad poética, sensibilidad espiritual agudizada. La persona puede experimentar momentos de transcendencia o conexión con lo divino.",
        low: "Reflexión sobre sueños y aspiraciones espirituales. Tendencia a la contemplación y la meditación. Ideal para arte o música contemplativa."
      },
      social: {
        high: "Engaños autoinfligidos o infligidos, confusión en relaciones, tendencia al victimismo o al rescate de otros. Posibles engaños sentimentales.",
        medium: "Conexiones espirituales profundas, altruismo elevado, inspiración artística compartida. Buen momento para eventos benéficos o artísticos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla, pescados blancos. Evitar alcohol y sustancias psicoactivas. Ayuno de líquidos recomendado.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al mar o ríos. Arte como ejercicio.",
      mitigation: "Mantener conexión con la realidad a través del arte o la naturaleza. Evitar sustancias psicoactivas. Usar amatista para claridad espiritual. Practicar la discernimiento.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Neptuno-Sol es la disolución del sol en agua primordial. Representa la fase más profunda del opus, donde toda identidad se disuelve en el espíritu divino.",
      decree: "Mi visión trasciende los velos de la ilusión. El agua divina purifica mi conciencia, revelando la verdad eterna que habita en mi alma.",
      ritual: {
        stones: ["Amatista", "Citrino", "Aquamarina"],
        hours: "Miércoles al atardecer o noches de luna llena",
        instructions: "Colocar las piedras sobre el tercer ojo. Encender una vela azul marino. Colocar un cuenco de agua con pétalos de lavanda al lado. Meditar 15 minutos escuchando sonidos de agua. Recitar el decreto 5 veces en susurro."
      }
    },
    "Luna": {
      riskBase: 28,
      behavioral: {
        high: "Confusión emocional extrema, tendencia a diluirse en otros, pérdida de límites personales. Posible adicción a relaciones o personas como forma de escapismo.",
        medium: "Intuición emocional elevada, compasión profunda, capacidad de amor incondicional. La persona puede experimentar unión mística.",
        low: "Reflexión sobre sueños emocionales y aspiraciones afectivas. Tendencia a la contemplación y la meditación emocional. Ideal para arte o música."
      },
      social: {
        high: "Engaños emocionales, confusiones en relaciones, tendencia al rescate o al victimismo. Posibles relaciones tóxicas por falta de límites.",
        medium: "Conexiones espirituales profundas, amor altruista, inspiración artística compartida. Buen momento para eventos benéficos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al agua.",
      mitigation: "Mantener conexión con la realidad emocional a través del arte. Evitar sustancias psicoactivas. Usar amatista para claridad.",
      credibility: "Moderada en interpretaciones de espiritualidad emocional. Baja en predicciones concretas. Neptuno disuelve los límites.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Neptuno-Luna es la disolución de la luna en agua primordial. Representa la fase más profunda del opus, donde toda forma emocional se disuelve en el espíritu.",
      decree: "Mi amor trasciende los velos de la ilusión. El agua divina purifica mis emociones, revelando la verdad eterna de mi corazón.",
      ritual: {
        stones: ["Amatista", "Selenita", "Aquamarina"],
        hours: "Noches de luna llena",
        instructions: "Colocar amatista sobre el tercer ojo, selenita en la corona y aquamarina en el corazón. Colocar un cuenco de agua con pétalos al lado. Meditar 15 minutos."
      }
    },
    "Mercurio": {
      riskBase: 25,
      behavioral: {
        high: "Confusión mental extrema, pensamientos difusos, dificultad para distinguir realidad de fantasía. Posible tendencia a creer en teorías conspirativas o delirios.",
        medium: "Intuición elevada, creatividad poética, capacidad de acceder a conocimiento trascendente. La persona puede experimentar visiones o insights profundos.",
        low: "Reflexión sobre sueños y aspiraciones intelectuales. Tendencia a la contemplación y la meditación. Ideal para arte o música contemplativa."
      },
      social: {
        high: "Confusión en comunicaciones, posibles malentendidos profundos, dificultad para expresar ideas con claridad. Evitar decisiones importantes por escrito.",
        medium: "Conexiones espirituales profundas a través de la palabra, inspiración artística compartida. Buen momento para eventos benéficos o artísticos.",
        low: "Necesidad de clarificar pensamientos confusos. Tiempo propicio para meditación o práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al agua.",
      mitigation: "Mantener conexión con la realidad a través del arte o la naturaleza. Evitar sustancias psicoactivas. Usar amatista para claridad mental.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Neptuno-Mercurio es la disolución del mercurio en agua primordial. Representa la fase más profunda del opus, donde todo pensamiento se disuelve en el espíritu.",
      decree: "Mi visión trasciende los velos de la ilusión. El agua divina purifica mi conciencia, revelando la verdad eterna que habita en mi mente.",
      ritual: {
        stones: ["Amatista", "Lapislázuli", "Aquamarina"],
        hours: "Miércoles al atardecer",
        instructions: "Colocar amatista sobre el tercer ojo, lapislázuli en la garganta y aquamarina en el corazón. Meditar 15 minutos escuchando sonidos de agua. Recitar el decreto 5 veces en susurro."
      }
    },
    "Venus": {
      riskBase: 25,
      behavioral: {
        high: "Confusión emocional extrema, tendencia a diluirse en otros, pérdida de límites personales. Posible adicción a relaciones o personas como forma de escapismo.",
        medium: "Intuición emocional elevada, compasión profunda, capacidad de amor incondicional. La persona puede experimentar unión mística.",
        low: "Reflexión sobre sueños emocionales y aspiraciones afectivas. Tendencia a la contemplación y la meditación emocional. Ideal para arte o música."
      },
      social: {
        high: "Engaños emocionales, confusiones en relaciones, tendencia al rescate o al victimismo. Posibles relaciones tóxicas por falta de límites.",
        medium: "Conexiones espirituales profundas, amor altruista, inspiración artística compartida. Buen momento para eventos benéficos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al agua.",
      mitigation: "Mantener conexión con la realidad emocional a través del arte. Evitar sustancias psicoactivas. Usar amatista para claridad.",
      credibility: "Moderada en interpretaciones de espiritualidad emocional. Baja en predicciones concretas. Neptuno disuelve los límites.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Neptuno-Venus es la disolución del cobre en agua primordial. Representa la fase más profunda del opus, donde toda forma emocional se disuelve en el espíritu.",
      decree: "Mi amor trasciende los velos de la ilusión. El agua divina purifica mis emociones, revelando la verdad eterna de mi corazón.",
      ritual: {
        stones: ["Amatista", "Rosa cuarzo", "Aquamarina"],
        hours: "Noches de luna llena o viernes al atardecer",
        instructions: "Colocar amatista sobre el tercer ojo, rosa cuarzo en el corazón y aquamarina en la garganta. Colocar un cuenco de agua con pétalos al lado. Meditar 15 minutos."
      }
    },
    "Marte": {
      riskBase: 30,
      behavioral: {
        high: "Confusión entre acción y fantasía, tendencia a la evasión por sustancias, delirios espirituales o paranoicos. Dificultad para distinguir realidad de fantasía en la acción.",
        medium: "Intuición elevada aplicada a la acción, creatividad poética en el movimiento, sensibilidad espiritual agudizada. La persona puede experimentar momentos de transcendencia.",
        low: "Reflexión sobre sueños y aspiraciones espirituales. Tendencia a la contemplación y la meditación. Ideal para arte o música contemplativa."
      },
      social: {
        high: "Engaños autoinfligidos o infligidos en relaciones, confusión en la acción social, tendencia al victimismo o al rescate de otros.",
        medium: "Conexiones espirituales profundas, altruismo elevado, inspiración artística compartida. Buen momento para eventos benéficos o artísticos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla, pescados blancos. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al mar o ríos.",
      mitigation: "Mantener conexión con la realidad a través del arte o la naturaleza. Evitar sustancias psicoactivas. Usar amatista para claridad espiritual.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Neptuno-Marte es la disolución del hierro en agua primordial. Representa la fase más profunda del opus, donde toda acción se disuelve en el espíritu.",
      decree: "Mi visión trasciende los velos de la ilusión. El agua divina purifica mi conciencia, revelando la verdad eterna que habita en mi alma.",
      ritual: {
        stones: ["Amatista", "Rubí", "Aquamarina"],
        hours: "Miércoles al atardecer o noches de luna llena",
        instructions: "Colocar amatista sobre el tercer ojo, rubí en la base de la columna y aquamarina en el corazón. Colocar un cuenco de agua con pétalos de lavanda al lado. Meditar 15 minutos."
      }
    },
    "Júpiter": {
      riskBase: 18,
      behavioral: {
        high: "Confusión entre optimismo y fantasía, tendencia a la evasión por sustancias o espiritualidad, delirios espirituales. Dificultad para distinguir realidad de fantasía en la expansión.",
        medium: "Intuición elevada, creatividad poética, sensibilidad espiritual agudizada. La persona puede experimentar momentos de transcendencia o conexión con lo divino.",
        low: "Reflexión sobre sueños y aspiraciones espirituales. Tendencia a la contemplación y la meditación. Ideal para arte o música contemplativa."
      },
      social: {
        high: "Engaños autoinfligidos o infligidos, confusión en relaciones, tendencia al victimismo o al rescate de otros. Posibles engaños sentimentales.",
        medium: "Conexiones espirituales profundas, altruismo elevado, inspiración artística compartida. Buen momento para eventos benéficos o artísticos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla, pescados blancos. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al mar o ríos.",
      mitigation: "Mantener conexión con la realidad a través del arte o la naturaleza. Evitar sustancias psicoactivas. Usar amatista para claridad espiritual.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Neptuno-Júpiter es la disolución del estaño en agua primordial. Representa la fase más profunda del opus, donde toda expansión se disuelve en el espíritu.",
      decree: "Mi visión trasciende los velos de la ilusión. El agua divina purifica mi conciencia, revelando la verdad eterna que habita en mi alma.",
      ritual: {
        stones: ["Amatista", "Aquamarina"],
        hours: "Miércoles al atardecer o noches de luna llena",
        instructions: "Colocar amatista sobre el tercer ojo y aquamarina en el corazón. Colocar un cuenco de agua con pétalos de lavanda al lado. Meditar 15 minutos."
      }
    },
    "Saturno": {
      riskBase: 35,
      behavioral: {
        high: "Confusión entre estructura y fantasía, tendencia a la evasión por sustancias o espiritualidad rígida, delirios espirituales o paranoicos. Dificultad para distinguir realidad de fantasía en la estructura.",
        medium: "Intuición elevada aplicada a la estructura, creatividad poética en la organización, sensibilidad espiritual agudizada. La persona puede experimentar momentos de transcendencia estructurada.",
        low: "Reflexión sobre sueños y aspiraciones espirituales en el contexto de la estructura. Tendencia a la contemplación y la meditación. Ideal para arte o música contemplativa."
      },
      social: {
        high: "Engaños autoinfligidos o infligidos en relaciones, confusión en la acción social, tendencia al victimismo o al rescate de otros. Posibles engaños sentimentales por falta de estructura.",
        medium: "Conexiones espirituales profundas, altruismo elevado, inspiración artística compartida. Buen momento para eventos benéficos o artísticos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla, pescados blancos. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al mar o ríos.",
      mitigation: "Mantener conexión con la realidad a través del arte o la naturaleza. Evitar sustancias psicoactivas. Usar amatista para claridad espiritual.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Neptuno-Saturno es la disolución del plomo en agua primordial. Representa la fase más profunda del opus, donde toda estructura se disuelve en el espíritu.",
      decree: "Mi visión trasciende los velos de la ilusión. El agua divina purifica mi conciencia, revelando la verdad eterna que habita en mi alma.",
      ritual: {
        stones: ["Amatista", "Obsidiana", "Aquamarina"],
        hours: "Miércoles al atardecer o noches de luna llena",
        instructions: "Colocar amatista sobre el tercer ojo, obsidiana en la base de la columna y aquamarina en el corazón. Colocar un cuenco de agua con pétalos de lavanda al lado. Meditar 15 minutos."
      }
    },
    "Urano": {
      riskBase: 35,
      behavioral: {
        high: "Confusión entre innovación y fantasía, tendencia a la evasión por sustancias o espiritualidad revolucionaria, delirios espirituales o paranoicos. Dificultad para distinguir realidad de fantasía en la innovación.",
        medium: "Intuición elevada aplicada a la innovación, creatividad poética en la ruptura, sensibilidad espiritual agudizada. La persona puede experimentar momentos de transcendencia revolucionaria.",
        low: "Reflexión sobre sueños y aspiraciones espirituales en el contexto de la innovación. Tendencia a la contemplación y la meditación. Ideal para arte o música contemplativa."
      },
      social: {
        high: "Engaños autoinfligidos o infligidos en relaciones, confusión en la acción social, tendencia al victimismo o al rescate de otros. Posibles engaños sentimentales por falta de límites en la innovación.",
        medium: "Conexiones espirituales profundas, altruismo elevado, inspiración artística compartida. Buen momento para eventos benéficos o artísticos.",
        low: "Necesidad de sanar heridas emocionales profundas. Tiempo propicio para la terapia o la práctica espiritual."
      },
      diet: "Alimentos ligeros y etéricos: frutas frescas, agua de coco, infusiones de manzanilla, pescados blancos. Evitar alcohol y sustancias psicoactivas.",
      exercise: "Actividades contemplativas: natación meditativa, yoga nidra, meditación en movimiento, caminatas junto al mar o ríos.",
      mitigation: "Mantener conexión con la realidad a través del arte o la naturaleza. Evitar sustancias psicoactivas. Usar amatista para claridad espiritual.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Neptuno-Urano es la disolución del urano en agua primordial. Representa la fase más profunda del opus, donde toda innovación se disuelve en el espíritu.",
      decree: "Mi visión trasciende los velos de la ilusión. El agua divina purifica mi conciencia, revelando la verdad eterna que habita en mi alma.",
      ritual: {
        stones: ["Amatista", "Larimar", "Aquamarina"],
        hours: "Miércoles al atardecer o noches de luna llena",
        instructions: "Colocar amatista sobre el tercer ojo, larimar en el corazón y aquamarina en la garganta. Colocar un cuenco de agua con pétalos de lavanda al lado. Meditar 15 minutos."
      }
    },
    "Neptuno": {
      riskBase: 40,
      behavioral: {
        high: "Confusión absoluta entre realidad y fantasía, tendencia a la evasión total por sustancias o espiritualidad, delirios espirituales o paranoicos extremos. Dificultad total para distinguir realidad de fantasía.",
        medium: "Intuición absoluta, creatividad poética absoluta, sensibilidad espiritual agudizada al máximo. La persona puede experimentar momentos de transcendencia absoluta o conexión con lo divino.",
        low: "Reflexión profunda sobre sueños y aspiraciones espirituales. Tendencia a la contemplación y la meditación absoluta. Ideal para arte o música contemplativa absoluta."
      },
      social: {
        high: "Engaños autoinfligidos o infligidos absolutos, confusión total en relaciones, tendencia al victimismo o al rescate de otros absoluto. Posibles engaños sentimentales extremos.",
        medium: "Conexiones espirituales profundas absolutas, altruismo elevado absoluto, inspiración artística compartida absoluta. Buen momento para eventos benéficos o artísticos absolutos.",
        low: "Necesidad de sanar heridas emocionales profundas absolutas. Tiempo propicio para la terapia o la práctica espiritual absoluta."
      },
      diet: "Alimentos ligeros y etéricos absolutos: frutas frescas absolutas, agua de coco absoluta, infusiones de manzanilla absolutas, pescados blancos absolutos. Evitar alcohol y sustancias psicoactivas absolutamente.",
      exercise: "Actividades contemplativas absolutas: natación meditativa absoluta, yoga nidra absoluto, meditación en movimiento absoluta, caminatas junto al mar o ríos absolutas.",
      mitigation: "Mantener conexión con la realidad absoluta a través del arte o la naturaleza. Evitar sustancias psicoactivas absolutamente. Usar amatista para claridad espiritual absoluta.",
      credibility: "Moderada en interpretaciones de espiritualidad y arte. Baja en predicciones concretas. Neptuno disuelve los límites de la certeza absolutamente.",
      quote: { text: "Los sueños son mensajes del inconsciente, cartas sin abrir que nos envía el alma.", author: "Carl Gustav Jung" },
      alchemy: "Neptuno con Neptuno es la disolución absoluta en agua primordial. Representa la fase más profunda del opus absoluta, donde toda forma se disuelve en el espíritu absoluto.",
      decree: "Mi visión trasciende absolutamente los velos de la ilusión. El agua divina purifica absolutamente mi conciencia, revelando la verdad eterna que habita en mi alma absoluta.",
      ritual: {
        stones: ["Amatista", "Aquamarina", "Lapislázuli"],
        hours: "Miércoles al atardecer o noches de luna llena absolutas",
        instructions: "Colocar amatista sobre el tercer ojo, aquamarina en el corazón y lapislázuli en la garganta. Colocar un cuenco de agua con pétalos de lavanda al lado. Meditar 20 minutos escuchando sonidos de agua absolutos. Recitar el decreto 7 veces en susurro absoluto."
      }
    },
    "Plutón": {
      riskBase: 45,
      behavioral: {
        high: "Obsesiones profundas con tendencia a la fantasía destructiva, tendencia al control manipulador a través de la espiritualidad, crisis de poder intensa. Posible exposición de secretos oscuros.",
        medium: "Transformación profunda a través de la espiritualidad, renacimiento psicológico, capacidad de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos.",
        low: "Reflexión sobre poder personal y sus usos en la espiritualidad. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra."
      },
      social: {
        high: "Poder destructivo en relaciones, manipulación o ser manipulado a través de la espiritualidad, exposición de secretos que destruyen. Posibles conflictos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman profundamente, relaciones intensas y regenerativas, poder compartido de manera constructiva. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de poder espiritual. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, berenjena, ciruelas negras, ajo negro, cacao puro. Evitar carnes muy rojas.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, deportes de contacto controlados, danza catártica.",
      mitigation: "Aceptar la transformación sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección. Evitar el poder sobre otros.",
      credibility: "Alta en interpretaciones de transformación y poder. Moderada en predicciones de crisis. Plutón opera en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Neptuno-Plutón es la muerte y resurrección de la espiritualidad. Representa la putrefacción absoluta de la fantasía vieja para que nazca una nueva, más poderosa y auténtica.",
      decree: "Renazco de las cenizas de mi viejo yo. El fuego plutoniano purifica mi esencia, forjando un ser más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Amatista", "Granate", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar las piedras sobre la base de la columna vertebral. Encender una vela roja oscura. Escribir en un papel algo que se desea soltar y quemarlo en un cuenco resistente. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    }
  },
  "Plutón": {
    "Sol": {
      riskBase: 45,
      behavioral: {
        high: "Obsesiones profundas, tendencia al control manipulador, crisis de poder intensa. Posible exposición de secretos oscuros o confrontación con sombras personales. Energía plutoniana desbordada.",
        medium: "Transformación profunda, renacimiento psicológico, capacidad de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos.",
        low: "Reflexión sobre poder personal y sus usos. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra."
      },
      social: {
        high: "Poder destructivo en relaciones, manipulación o ser manipulado, exposición de secretos que destruyen. Posibles conflictos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman profundamente, relaciones intensas y regenerativas, poder compartido de manera constructiva. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de poder. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, berenjena, ciruelas negras, ajo negro, cacao puro. Evitar carnes muy rojas. Beber infusiones de cardo mariano para el hígado.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, deportes de contacto controlados, danza catártica.",
      mitigation: "Aceptar la transformación sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección. Evitar el poder sobre otros.",
      credibility: "Alta en interpretaciones de transformación y poder. Moderada en predicciones de crisis. Plutón opera en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Plutón-Sol es la unión de la transmutación con el oro. Representa la muerte y resurrección del alma solar, la fase final de la obra donde el rey muere para renacer en gloria eterna.",
      decree: "Renazco de las cenizas de mi viejo yo. El fuego plutoniano purifica mi esencia, forjando un ser más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Granate", "Citrino", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar las piedras sobre la base de la columna vertebral. Encender una vela roja oscura. Escribir en un papel algo que se desea soltar y quemarlo en un cuenco resistente. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    },
    "Luna": {
      riskBase: 45,
      behavioral: {
        high: "Emociones tóxicas desbordadas, posesividad extrema, manipulación emocional, tendencia a la venganza. Posible obsesión por alguien o algo que destruye la paz interior.",
        medium: "Transformación emocional profunda, renacimiento psicológico, capacidad de soltar viejas heridas. La persona puede experimentar purificación emocional intensa.",
        low: "Reflexión sobre poder emocional y sus usos. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra emocional."
      },
      social: {
        high: "Poder destructivo en relaciones emocionales, manipulación o ser manipulado, exposición de secretos que destruyen vínculos.",
        medium: "Conexiones que transforman emociones profundamente, relaciones intensas y regenerativas, poder emocional compartido.",
        low: "Necesidad de soltar viejos patrones emocionales. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, ciruelas negras, cacao puro. Evitar carnes muy rojas. Beber infusiones de cardo mariano.",
      exercise: "Actividades transformadoras: yoga de potencia, danza catártica, entrenamiento de fuerza intenso.",
      mitigation: "Aceptar la transformación emocional sin resistencia. Trabajar con terapeuta. Usar obsidiana roja para protección emocional.",
      credibility: "Alta en interpretaciones de transformación emocional. Moderada en predicciones de crisis. Plutón opera en ciclos profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Plutón-Luna es la muerte y resurrección del mercurio emocional. Representa la putrefacción absoluta de las emociones viejas para que nazcan nuevas.",
      decree: "Renazco de las cenizas de mis viejas heridas. El fuego plutoniano purifica mi corazón, forjando un amor más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Selenita", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar obsidiana roja sobre el corazón, selenita en la corona y ópalo negro en la base de la columna. Escribir algo que se desea soltar y quemarlo. Recitar el decreto 9 veces."
      }
    },
    "Mercurio": {
      riskBase: 40,
      behavioral: {
        high: "Pensamientos obsesivos, tendencia al pensamiento negro, posible paranoia intelectual. Posible exposición de secretos mentales o confrontación con sombras psicológicas.",
        medium: "Transformación intelectual profunda, renacimiento psicológico, capacidad de soltar creencias limitantes. La persona puede experimentar muertes y renacimientos mentales.",
        low: "Reflexión sobre poder del pensamiento y sus usos. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra psicológico."
      },
      social: {
        high: "Poder destructivo en comunicaciones, manipulación intelectual, exposición de secretos que destruyen relaciones. Posibles conflictos por revelaciones.",
        medium: "Conexiones que transforman el pensamiento profundamente, relaciones intelectuales intensas y regenerativas. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de pensamiento. Tiempo propicio para perdonar y liberar resentimientos intelectuales."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, ciruelas negras, cacao puro. Evitar carnes muy rojas. Beber infusiones de cardo mariano.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, danza catártica, escritura terapéutica.",
      mitigation: "Aceptar la transformación intelectual sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección.",
      credibility: "Alta en interpretaciones de transformación intelectual. Moderada en predicciones de crisis. Plutón opera en ciclos profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Plutón-Mercurio es la muerte y resurrección del pensamiento. Representa la putrefacción absoluta de las creencias viejas para que nazcan nuevas.",
      decree: "Renazco de las cenizas de mis viejas creencias. El fuego plutoniano purifica mi mente, forjando un pensamiento más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Lapislázuli", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar obsidiana roja sobre la garganta, lapislázuli en el tercer ojo y ópalo negro en la base de la columna. Escribir algo que se desea soltar mentalmente y quemarlo. Recitar el decreto 9 veces."
      }
    },
    "Venus": {
      riskBase: 42,
      behavioral: {
        high: "Emociones tóxicas desbordadas, posesividad extrema, manipulación emocional, tendencia a la venganza. Posible obsesión por alguien o algo que destruye la paz interior.",
        medium: "Transformación emocional profunda, renacimiento psicológico, capacidad de soltar viejas heridas. La persona puede experimentar purificación emocional intensa.",
        low: "Reflexión sobre poder emocional y sus usos. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra emocional."
      },
      social: {
        high: "Poder destructivo en relaciones emocionales, manipulación o ser manipulado, exposición de secretos que destruyen vínculos.",
        medium: "Conexiones que transforman emociones profundamente, relaciones intensas y regenerativas, poder emocional compartido.",
        low: "Necesidad de soltar viejos patrones emocionales. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, ciruelas negras, cacao puro. Evitar carnes muy rojas. Beber infusiones de cardo mariano.",
      exercise: "Actividades transformadoras: yoga de potencia, danza catártica, entrenamiento de fuerza intenso.",
      mitigation: "Aceptar la transformación emocional sin resistencia. Trabajar con terapeuta. Usar obsidiana roja para protección emocional.",
      credibility: "Alta en interpretaciones de transformación emocional. Moderada en predicciones de crisis. Plutón opera en ciclos profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Plutón-Venus es la muerte y resurrección del principio amoroso. Representa la putrefacción absoluta de las emociones viejas para que nazcan nuevas.",
      decree: "Renazco de las cenizas de mis viejas heridas. El fuego plutoniano purifica mi corazón, forjando un amor más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Rosa cuarzo", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar obsidiana roja sobre el corazón, rosa cuarzo en el pecho y ópalo negro en la base de la columna. Escribir algo que se desea soltar y quemarlo. Recitar el decreto 9 veces."
      }
    },
    "Marte": {
      riskBase: 50,
      behavioral: {
        high: "Obsesiones profundas con tendencia a la acción destructiva, tendencia al control manipulador a través de la fuerza, crisis de poder intensa. Posible exposición de secretos oscuros.",
        medium: "Transformación profunda a través de la acción, renacimiento psicológico, capacidad de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos.",
        low: "Reflexión sobre poder personal y sus usos. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra."
      },
      social: {
        high: "Poder destructivo en relaciones, manipulación o ser manipulado, exposición de secretos que destruyen. Posibles conflictos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman profundamente, relaciones intensas y regenerativas, poder compartido de manera constructiva. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de poder. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, berenjena, ciruelas negras, ajo negro, cacao puro. Evitar carnes muy rojas.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, deportes de contacto controlados, danza catártica.",
      mitigation: "Aceptar la transformación sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección. Evitar el poder sobre otros.",
      credibility: "Alta en interpretaciones de transformación y poder. Moderada en predicciones de crisis. Plutón opera en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Plutón-Marte es la muerte y resurrección de la fuerza. Representa la putrefacción absoluta de la pasión vieja para que nazca una nueva, más poderosa y auténtica.",
      decree: "Renazco de las cenizas de mi viejo yo. El fuego plutoniano purifica mi esencia, forjando un ser más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Granate", "Rubí", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar las piedras sobre la base de la columna vertebral. Encender una vela roja oscura. Escribir en un papel algo que se desea soltar y quemarlo en un cuenco resistente. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    },
    "Júpiter": {
      riskBase: 30,
      behavioral: {
        high: "Obsesiones profundas con tendencia a la expansión destructiva, tendencia al control manipulador a través de la abundancia, crisis de poder intensa. Posible exposición de secretos oscuros.",
        medium: "Transformación profunda a través de la expansión, renacimiento psicológico, capacidad de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos.",
        low: "Reflexión sobre poder personal y sus usos. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra."
      },
      social: {
        high: "Poder destructivo en relaciones, manipulación o ser manipulado, exposición de secretos que destruyen. Posibles conflictos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman profundamente, relaciones intensas y regenerativas, poder compartido de manera constructiva. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de poder. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, berenjena, ciruelas negras, ajo negro, cacao puro. Evitar carnes muy rojas.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, deportes de contacto controlados, danza catártica.",
      mitigation: "Aceptar la transformación sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección. Evitar el poder sobre otros.",
      credibility: "Alta en interpretaciones de transformación y poder. Moderada en predicciones de crisis. Plutón opera en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Plutón-Júpiter es la muerte y resurrección de la expansión. Representa la putrefacción absoluta de la abundancia vieja para que nazca una nueva, más poderosa y auténtica.",
      decree: "Renazco de las cenizas de mi viejo yo. El fuego plutoniano purifica mi esencia, forjando un ser más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Amatista", "Granate"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar las piedras sobre la base de la columna vertebral. Encender una vela roja oscura. Escribir en un papel algo que se desea soltar y quemarlo en un cuenco resistente. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    },
    "Saturno": {
      riskBase: 55,
      behavioral: {
        high: "Obsesiones profundas con tendencia a la estructura destructiva, tendencia al control manipulador a través de la rigidez, crisis de poder intensa. Posible exposición de secretos oscuros.",
        medium: "Transformación profunda a través de la estructura, renacimiento psicológico, capacidad de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos.",
        low: "Reflexión sobre poder personal y sus usos en la estructura. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra."
      },
      social: {
        high: "Poder destructivo en relaciones, manipulación o ser manipulado a través de la estructura, exposición de secretos que destruyen. Posibles conflictos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman profundamente, relaciones intensas y regenerativas, poder compartido de manera constructiva. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de poder estructural. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, berenjena, ciruelas negras, ajo negro, cacao puro. Evitar carnes muy rojas.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, deportes de contacto controlados, danza catártica.",
      mitigation: "Aceptar la transformación sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección. Evitar el poder sobre otros.",
      credibility: "Alta en interpretaciones de transformación y poder. Moderada en predicciones de crisis. Plutón opera en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Plutón-Saturno es la muerte y resurrección de la estructura. Representa la putrefacción absoluta de la rigidez vieja para que nazca una nueva, más poderosa y auténtica.",
      decree: "Renazco de las cenizas de mi viejo yo. El fuego plutoniano purifica mi esencia, forjando un ser más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Obsidiana", "Granate", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar las piedras sobre la base de la columna vertebral. Encender una vela roja oscura. Escribir en un papel algo que se desea soltar y quemarlo en un cuenco resistente. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    },
    "Urano": {
      riskBase: 50,
      behavioral: {
        high: "Obsesiones profundas con tendencia a la innovación destructiva, tendencia al control manipulador a través de la rebeldía, crisis de poder intensa. Posible exposición de secretos oscuros.",
        medium: "Transformación profunda a través de la innovación, renacimiento psicológico, capacidad de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos.",
        low: "Reflexión sobre poder personal y sus usos en la innovación. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra."
      },
      social: {
        high: "Poder destructivo en relaciones, manipulación o ser manipulado a través de la innovación, exposición de secretos que destruyen. Posibles conflictos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman profundamente, relaciones intensas y regenerativas, poder compartido de manera constructiva. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de poder innovador. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, berenjena, ciruelas negras, ajo negro, cacao puro. Evitar carnes muy rojas.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, deportes de contacto controlados, danza catártica.",
      mitigation: "Aceptar la transformación sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección. Evitar el poder sobre otros.",
      credibility: "Alta en interpretaciones de transformación y poder. Moderada en predicciones de crisis. Plutón opera en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Plutón-Urano es la muerte y resurrección de la innovación. Representa la putrefacción absoluta de la rebeldía vieja para que nazca una nueva, más poderosa y auténtica.",
      decree: "Renazco de las cenizas de mi viejo yo. El fuego plutoniano purifica mi esencia, forjando un ser más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Larimar", "Granate", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar las piedras sobre la base de la columna vertebral. Encender una vela roja oscura. Escribir en un papel algo que se desea soltar y quemarlo en un cuenco resistente. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    },
    "Neptuno": {
      riskBase: 45,
      behavioral: {
        high: "Obsesiones profundas con tendencia a la fantasía destructiva, tendencia al control manipulador a través de la espiritualidad, crisis de poder intensa. Posible exposición de secretos oscuros.",
        medium: "Transformación profunda a través de la espiritualidad, renacimiento psicológico, capacidad de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos.",
        low: "Reflexión sobre poder personal y sus usos en la espiritualidad. Tendencia a la introspección profunda. Ideal para terapia o trabajo sombra."
      },
      social: {
        high: "Poder destructivo en relaciones, manipulación o ser manipulado a través de la espiritualidad, exposición de secretos que destruyen. Posibles conflictos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman profundamente, relaciones intensas y regenerativas, poder compartido de manera constructiva. Buen momento para terapia grupal.",
        low: "Necesidad de soltar viejos patrones de poder espiritual. Tiempo propicio para perdonar y liberar resentimientos profundos."
      },
      diet: "Alimentos oscuros y purificadores: remolacha, berenjena, ciruelas negras, ajo negro, cacao puro. Evitar carnes muy rojas.",
      exercise: "Actividades transformadoras: yoga de potencia, entrenamiento de fuerza intenso, deportes de contacto controlados, danza catártica.",
      mitigation: "Aceptar la transformación sin resistencia. Trabajar con terapeuta o guía espiritual. Usar obsidiana roja para protección. Evitar el poder sobre otros.",
      credibility: "Alta en interpretaciones de transformación y poder. Moderada en predicciones de crisis. Plutón opera en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Plutón-Neptuno es la muerte y resurrección de la espiritualidad. Representa la putrefacción absoluta de la fantasía vieja para que nazca una nueva, más poderosa y auténtica.",
      decree: "Renazco de las cenizas de mi viejo yo. El fuego plutoniano purifica mi esencia, forjando un ser más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Amatista", "Granate", "Ópalo negro"],
        hours: "Noche profunda, entre la medianoche y las 3:00 AM",
        instructions: "Colocar las piedras sobre la base de la columna vertebral. Encender una vela roja oscura. Escribir en un papel algo que se desea soltar y quemarlo en un cuenco resistente. Recitar el decreto 9 veces, visualizando fuego purificador."
      }
    },
    "Plutón": {
      riskBase: 60,
      behavioral: {
        high: "Obsesiones absolutas, tendencia al control manipulador absoluto, crisis de poder absoluta. Posible exposición de secretos oscuros absolutos o confrontación con sombras personales absolutas. Energía plutoniana absoluta desbordada.",
        medium: "Transformación profunda absoluta, renacimiento psicológico absoluto, capacidad absoluta de soltar lo que ya no sirve. La persona puede experimentar muertes y renacimientos simbólicos absolutos.",
        low: "Reflexión absoluta sobre poder personal y sus usos. Tendencia a la introspección absoluta. Ideal para terapia absoluta o trabajo sombra absoluto."
      },
      social: {
        high: "Poder destructivo absoluto en relaciones, manipulación absoluta o ser manipulado absoluto, exposición absoluta de secretos que destruyen. Posibles conflictos absolutos por herencias o recursos compartidos.",
        medium: "Conexiones que transforman absolutamente, relaciones absolutamente intensas y regenerativas, poder compartido absolutamente de manera constructiva. Buen momento para terapia grupal absoluta.",
        low: "Necesidad absoluta de soltar viejos patrones de poder absoluto. Tiempo absolutamente propicio para perdonar y liberar resentimientos absolutos profundos."
      },
      diet: "Alimentos oscuros y purificadores absolutos: remolacha absoluta, berenjena absoluta, ciruelas negras absolutas, ajo negro absoluto, cacao puro absoluto. Evitar carnes muy rojas absolutamente.",
      exercise: "Actividades transformadoras absolutas: yoga de potencia absoluto, entrenamiento de fuerza intenso absoluto, deportes de contacto controlados absolutos, danza catártica absoluta.",
      mitigation: "Aceptar absolutamente la transformación sin resistencia. Trabajar absolutamente con terapeuta o guía espiritual. Usar obsidiana roja para protección absoluta. Evitar absolutamente el poder sobre otros.",
      credibility: "Alta en interpretaciones absolutas de transformación y poder. Moderada en predicciones absolutas de crisis. Plutón opera absolutamente en ciclos largos y profundos.",
      quote: { text: "No hay iluminación sin sombra. El que mira hacia afuera, sueña; el que mira hacia adentro, despierta.", author: "Carl Gustav Jung" },
      alchemy: "Plutón con Plutón es la muerte absoluta y resurrección del alma. Representa la putrefacción absoluta de todo lo que era para que nazca una nueva realidad absoluta, más poderosa y auténtica.",
      decree: "Renazco absolutamente de las cenizas de mi viejo yo. El fuego plutoniano purifica absolutamente mi esencia, forjando un ser absolutamente más poderoso, auténtico y libre.",
      ritual: {
        stones: ["Obsidiana roja", "Granate", "Ópalo negro"],
        hours: "Noche profunda absoluta, entre la medianoche y las 3:00 AM",
        instructions: "Colocar absolutamente las piedras sobre la base de la columna vertebral. Encender absolutamente una vela roja oscura. Escribir absolutamente en un papel algo que se desea soltar y quemarlo absolutamente en un cuenco resistente. Recitar absolutamente el decreto 9 veces, visualizando absolutamente fuego purificador absoluto."
      }
    }
  }
};
