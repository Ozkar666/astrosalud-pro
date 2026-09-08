import { PLANETARY_CORRESPONDENCES, ASPECT_RITUAL_NATURE, findOptimalRitualWindow } from './planetary-correspondences.js';

const SPHERE_HIERARCHY = ['Saturno', 'Júpiter', 'Marte', 'Sol', 'Venus', 'Mercurio', 'Luna'];

const OPERATION_TYPES = {
  'Conjunción': 'invocación',
  'Oposición': 'equilibrio',
  'Cuadratura': 'equilibrio',
  'Trígono': 'invocación',
  'Sextil': 'fortalecimiento'
};

const HEALTH_PRIORITIES = [
  'equilibrio',
  'descanso',
  'regulación emocional',
  'claridad mental',
  'disciplina',
  'hábitos saludables',
  'resiliencia',
  'integración psicológica',
  'sentido espiritual'
];

function getArchetype(planet) {
  const archetypes = {
    'Saturno': { positive: 'El Mentor Sabio', negative: 'El Tiranico', neutral: 'El Guardián del Umbral' },
    'Júpiter': { positive: 'El Rey Generoso', negative: 'El Excesivo', neutral: 'El Filósofo' },
    'Marte': { positive: 'El Guerrero Protector', negative: 'El Destructor', neutral: 'El Pionero' },
    'Sol': { positive: 'El Líder Iluminado', negative: 'El Tiranico', neutral: 'El Creativo' },
    'Venus': { positive: 'La Amante Compasiva', negative: 'La Dependent', neutral: 'La Artista' },
    'Mercurio': { positive: 'El Erudito Mensajero', negative: 'El Engañador', neutral: 'El Comunicador' },
    'Luna': { positive: 'La Madre Nutritiva', negative: 'La Caprichosa', neutral: 'La Sacerdotisa' }
  };
  return archetypes[planet] || { positive: 'Sabio', negative: 'Desequilibrado', neutral: 'Neutro' };
}

function getRitualObjective(transitPlanet, natalPlanet, aspectType, riskScore) {
  const corresp = PLANETARY_CORRESPONDENCES[transitPlanet];
  if (!corresp) return 'Observación y contemplación';

  const objectives = {
    'Conjunción': `Integración de la energía de ${transitPlanet} con ${natalPlanet}`,
    'Oposición': `Equilibrio entre las fuerzas de ${transitPlanet} y ${natalPlanet}`,
    'Cuadratura': `Superación de la tensión entre ${transitPlanet} y ${natalPlanet}`,
    'Trígono': `Aprovechamiento del flujo armónico de ${transitPlanet} hacia ${natalPlanet}`,
    'Sextil': `Desarrollo del potencial de ${transitPlanet} a través de ${natalPlanet}`
  };

  return objectives[aspectType] || corresp.ritualFocus;
}

function getEvolutionaryObjective(transitPlanet, natalPlanet, aspectType) {
  const corresp = PLANETARY_CORRESPONDENCES[transitPlanet];
  const natalCorresp = PLANETARY_CORRESPONDENCES[natalPlanet];

  if (!corresp) return 'Autoconocimiento y crecimiento personal';

  const virtues = corresp.virtues.slice(0, 3).join(', ');
  return `Desarrollar ${virtues} en el área de la experiencia representada por ${natalPlanet}`;
}

function selectOperationType(aspectType, riskScore, orb) {
  if (riskScore < 20) return 'contemplación';
  if (riskScore < 40) return 'observación';
  if (orb > 8) return 'contemplación';

  const base = OPERATION_TYPES[aspectType] || 'contemplación';

  if (riskScore > 70 && (aspectType === 'Cuadratura' || aspectType === 'Oposición')) {
    return 'purificación';
  }
  if (riskScore > 80 && aspectType === 'Conjunción') {
    return 'invocación';
  }

  return base;
}

function getRitualStructure(transitPlanet, operationType) {
  const corresp = PLANETARY_CORRESPONDENCES[transitPlanet];
  if (!corresp) return null;

  return {
    preparacion: `Higiene corporal y mental. Preparar el altar con elementos de ${corresp.color}. Encender velas del color correspondiente. Colocar las piedras de ${corresp.stone.join(', ')} sobre el altar.`,
    purificacion: `Quemar incienso de ${corresp.incienso[0]} para purificar el espacio. Visualizar una luz ${corresp.color} envolviendo el cuerpo.`,
    centramiento: `Respiración profunda durante 5 minutos. Concentrarse en el chakra ${corresp.chakra}.`,
    apertura: `Abrir el círculo con la dirección de ${corresp.orientation}. Invocar la presencia de ${corresp.deity[0]}.`,
    invocacion: `Invocar la esfera de ${corresp.sphere} usando la palabra de poder ${corresp.intelligence}. Visualizar el sigilo de ${corresp.spirit}.`,
    declaracion: `Declarar la intención del ritual de manera clara y precisa.`,
    trabajo: `Trabajo principal según el tipo de operación: ${operationType}. Usar los elementos rituales correspondientes.`,
    contemplacion: `Momento de silencio e integración. Observar las sensaciones y percepciones.`,
    agradecimiento: `Agradecer a la esfera de ${corresp.sphere} y a ${corresp.deity[0]}.`,
    cierre: `Cerrar el círculo en sentido inverso. Asegurar que el espacio quede protegido.`,
    integracion: `Realizar una acción concreta en los días posteriores que refuerce la intención del ritual.`
  };
}

function calculateRitualPower(aspectData, orb, transitPlanet) {
  const corresp = PLANETARY_CORRESPONDENCES[transitPlanet];
  if (!corresp) return 30;

  let power = 50;

  if (orb <= 1) power += 30;
  else if (orb <= 3) power += 20;
  else if (orb <= 5) power += 10;
  else if (orb <= 8) power += 5;
  else power -= 10;

  const nature = ASPECT_RITUAL_NATURE[aspectData.type];
  if (nature) {
    power += Math.round((nature.power - 0.8) * 50);
  }

  if (transitPlanet === corresp.sphere) power += 10;

  return Math.max(10, Math.min(100, Math.round(power)));
}

function getRecommendedTiming(transitPlanet, aspectDate) {
  const corresp = PLANETARY_CORRESPONDENCES[transitPlanet];
  if (!corresp) return null;

  const baseDate = aspectDate ? new Date(aspectDate) : new Date();
  const windows = findOptimalRitualWindow(baseDate, transitPlanet, 14);

  const optimal = windows.find(w => w.score >= 70) || windows[0];
  const alternative = windows.find(w => w.score >= 50 && w !== optimal) || windows[1];

  return {
    principal: optimal ? {
      date: optimal.date,
      hourStart: optimal.hourStart,
      hourEnd: optimal.hourEnd,
      dayPlanet: optimal.dayPlanet,
      hourPlanet: optimal.hourPlanet,
      score: optimal.score
    } : {
      date: baseDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' }),
      hourStart: `${Math.floor(Math.random() * 12) + 6}:00`,
      hourEnd: `${Math.floor(Math.random() * 12) + 7}:00`,
      dayPlanet: corresp.day,
      hourPlanet: transitPlanet,
      score: 60
    },
    alternativa: alternative ? {
      date: alternative.date,
      hourStart: alternative.hourStart,
      hourEnd: alternative.hourEnd,
      score: alternative.score
    } : null
  };
}

function getMantra(transitPlanet, operationType) {
  const mantras = {
    'Saturno': {
      invocacion: 'Yo soy estructura que se fortalece. Mi disciplina es mi escudo.',
      equilibrio: 'Acepto los límites con sabiduría. En mi restricción encuentro libertad.',
      purificacion: 'Libero el miedo y la rigidez. Permito que la sabiduría fluya.',
      fortalecimiento: 'Mi constancia supera todo obstáculo. Soy paciente y firme.',
      contemplacion: 'Observo mis límites con compasión. Cada restricción es una enseñanza.'
    },
    'Júpiter': {
      invocacion: 'Yo soy expansión consciente. Mi generosidad multiplica la abundancia.',
      equilibrio: 'Equilibro mi generosidad con la sabiduría. No doy más de lo que puedo sostener.',
      purificacion: 'Libero los excesos y la vanidad. Encuentro la medida perfecta.',
      fortalecimiento: 'Mi optimismo ilumina mi camino. Atraigo la abundancia justa.',
      contemplacion: 'Observo mi generosidad sin excesos. Cada don es una semilla.'
    },
    'Marte': {
      invocacion: 'Yo soy fuerza que protege. Mi coraje defiende lo sagrado.',
      equilibrio: 'Canalizo mi energía con propósito. Mi fuerza sirve a la justicia.',
      purificacion: 'Libero la agresión y la ira. Mi fuerza se transforma en acción constructiva.',
      fortalecimiento: 'Mi determinación es inquebrantable. Supero cada obstáculo.',
      contemplacion: 'Observo mi fuerza sin destruir. Cada batalla es una lección.'
    },
    'Sol': {
      invocacion: 'Yo soy luz central que irradia vida. Mi esencia brilla con claridad perfecta.',
      equilibrio: 'Equilibro mi brillo con la humildad. Mi luz ilumina sin cegar.',
      purificacion: 'Libero la arrogancia y el ego. Mi luz sirve a todos.',
      fortalecimiento: 'Mi propósito vital es claro. Sigo mi camino con confianza.',
      contemplacion: 'Observo mi luz sin narcisismo. Cada rayo es un don.'
    },
    'Venus': {
      invocacion: 'Yo soy amor que fluye libremente. Mi corazón se abre en armonía.',
      equilibrio: 'Equilibro mi amor con mi independencia. Amo sin perderme.',
      purificacion: 'Libero el apego y la dependencia. Mi amor es libre y generoso.',
      fortalecimiento: 'Mi amor se fortalece cada día. Atraigo relaciones sanas.',
      contemplacion: 'Observo mi amor sin posesión. Cada vínculo es un regalo.'
    },
    'Mercurio': {
      invocacion: 'Yo soy mensajero de la verdad. Mi mente conecta mundos.',
      equilibrio: 'Equilibro mi comunicación con mi escucha. Hablo y callo con sabiduría.',
      purificacion: 'Libero la mentira y el engaño. Mi palabra es transparente.',
      fortalecimiento: 'Mi inteligencia se agudiza. Aprendo y enseño con facilidad.',
      contemplacion: 'Observo mis pensamientos sin juzgar. Cada idea es una posibilidad.'
    },
    'Luna': {
      invocacion: 'Yo soy reflejo de la sabiduría ancestral. Mis emociones son mi brújula.',
      equilibrio: 'Equilibro mis emociones con mi razón. Siento sin ahogarme.',
      purificacion: 'Libero los miedos y las ansiedades. Mi intuición me guía.',
      fortalecimiento: 'Mi intuición se fortalece. Confío en mis percepciones.',
      contemplacion: 'Observo mis emociones sin reaccionar. Cada sentimiento es una ola.'
    }
  };

  const planetMantras = mantras[transitPlanet];
  if (!planetMantras) return 'Yo soy equilibrio y armonía. Mi vida fluye con propósito.';

  return planetMantras[operationType] || planetMantras.contemplacion;
}

function getVisualization(transitPlanet, operationType) {
  const corresp = PLANETARY_CORRESPONDENCES[transitPlanet];
  if (!corresp) return 'Visualizar una luz blanca envolviendo el cuerpo.';

  const visualizations = {
    'Conjunción': `Visualizar una esfera de luz ${corresp.color} en el centro del cuerpo, irradiando energía ${corresp.sphere} hacia todos los seres.`,
    'Oposición': `Visualizar dos esferas de luz en lados opuestos del cuerpo: una ${corresp.color} y otra de color complementario. Observar cómo se equilibran.`,
    'Cuadratura': `Visualizar un triángulo de luz ${corresp.color} que transforma la tensión en energía constructiva.`,
    'Trígono': `Visualizar un río de luz ${corresp.color} fluyendo suavemente por todo el cuerpo, trayendo armonía y bienestar.`,
    'Sextil': `Visualizar una estrella de seis puntas de luz ${corresp.color} que ilumina diferentes áreas de la vida.`
  };

  return visualizations[operationType] || `Visualizar luz ${corresp.color} envolviendo el cuerpo.`;
}

function getExpectedResults(transitPlanet, operationType) {
  const corresp = PLANETARY_CORRESPONDENCES[transitPlanet];
  if (!corresp) {
    return {
      psiquicos: ['Claridad mental', 'Introspección'],
      emocionales: ['Equilibrio emocional', 'Serenidad'],
      conductuales: ['Mejores hábitos', 'Disciplina'],
      espirituales: ['Conexión espiritual', 'Sentido de propósito']
    };
  }

  return {
    psiquicos: [`Mayor ${corresp.virtues[0].toLowerCase()}`, `Claridad en ${corresp.healthAreas[0]}`, `Introspección sobre patrones de ${corresp.vices[0]}`],
    emocionales: [`Estabilidad emocional`, `Regulación de ${corresp.vices[0]}`, `Aceptación de límites`],
    conductuales: [`Establecer hábitos saludables`, `Reducir ${corresp.vices[0]}`, `Mejorar ${corresp.healthAreas[0]}`],
    espirituales: [`Conexión con el arquetipo de ${getArchetype(transitPlanet).positive}`, `Comprensión personal`, `Sentido de propósito`]
  };
}

function getTalisman(transitPlanet, aspectType, power) {
  if (power < 60) return null;

  const corresp = PLANETARY_CORRESPONDENCES[transitPlanet];
  if (!corresp) return null;

  return {
    name: `Talismán de ${corresp.sphere} para ${corresp.talismanPurpose}`,
    sphere: corresp.sphere,
    purpose: corresp.talismanPurpose,
    symbol: corresp.symbol,
    geometry: corresp.geometry,
    color: corresp.color,
    material: corresp.metal,
    inscription: `Sigilo de ${corresp.intelligence} — Espíritu ${corresp.spirit}`,
    consecration: `Consecrar en hora de ${corresp.sphere}, día de ${corresp.day}, usando ${corresp.incienso[0]}.`,
    procedure: `1. Preparar el material con el metal de ${corresp.metal}.\n2. grabar el sigilo de ${corresp.intelligence}.\n3. Consagrar en la hora planetaria.\n4. Activar con la intención.\n5. Conservar en lugar sagrado.`,
    conservation: `Conservar en altar personal o lugar sagrado. No exponer a luz directa del sol.`
  };
}

function getPrecautions(transitPlanet, aspectType, riskScore) {
  const precautions = [];

  if (riskScore > 70) {
    precautions.push('Configuración de alta intensidad. Realizar solo con experiencia.');
  }

  const corresp = PLANETARY_CORRESPONDENCES[transitPlanet];
  if (corresp) {
    if (transitPlanet === 'Saturno') {
      precautions.push('Saturno puede traer confrontación con la realidad. No evitar el trabajo interno.');
    }
    if (transitPlanet === 'Marte') {
      precautions.push('Marte puede activar agresión. No usar el ritual para dañar a otros.');
    }
    if (transitPlanet === 'Plutón') {
      precautions.push('Plutón trabaja con transformaciones profundas. No forzar cambios.');
    }
  }

  if (aspectType === 'Oposición') {
    precautions.push('En oposición, integrar ambos polos. No elegir uno y rechazar el otro.');
  }

  if (aspectType === 'Cuadratura') {
    precautions.push('La cuadratura demanda acción. No esperar que todo se resuelva solo.');
  }

  precautions.push('Este ritual no sustituye atención médica. Si hay problemas de salud, consultar a un profesional.');

  return precautions;
}

function getDuration(operationType, aspectType, orb) {
  if (operationType === 'contemplación') return 'Una sola vez, en el momento de mayor intensidad.';
  if (operationType === 'purificación') return 'Durante todo el período del tránsito, especialmente en la culminación.';
  if (operationType === 'invocación') return 'En la fecha principal y repetir durante 3 días consecutivos.';
  if (operationType === 'equilibrio') return 'Realizar en fases: preparación (1 día), ritual (1 día), integración (1 día).';
  if (operationType === 'fortalecimiento') return 'Durante varios días, idealmente el día planetario del planeta en cuestión.';
  return 'Una sola vez en el momento óptimo.';
}

export function analyzeRitual(transitPlanet, natalPlanet, aspectType, orb, riskScore, aspectDate, planetPositions = []) {
  const corresp = PLANETARY_CORRESPONDENCES[transitPlanet];
  const natalCorresp = PLANETARY_CORRESPONDENCES[natalPlanet];
  const aspectNature = ASPECT_RITUAL_NATURE[aspectType];

  if (!corresp) {
    return {
      hasRitual: false,
      reason: `No hay correspondencias rituales disponibles para ${transitPlanet}.`
    };
  }

  const operationType = selectOperationType(aspectType, riskScore, orb);
  const power = calculateRitualPower({ type: aspectType }, orb, transitPlanet);
  const timing = getRecommendedTiming(transitPlanet, aspectDate);
  const ritualStructure = getRitualStructure(transitPlanet, operationType);
  const talisman = getTalisman(transitPlanet, aspectType, power);

  const transitPos = planetPositions.find(p => p.name === transitPlanet);

  return {
    hasRitual: true,
    transitPlanet,
    natalPlanet,
    aspectType,

    synthesis: `Tránsito de ${transitPlanet} ${aspectType} ${natalPlanet}. ${aspectNature ? aspectNature.description : 'Configuración planetaria activa'}. ${orb <= 3 ? 'Momento de alta intensidad.' : orb <= 6 ? 'Influencia moderada.' : 'Influencia suave en separación.'}`,

    planetaryForce: {
      primary: transitPlanet,
      primarySphere: corresp.sphere,
      secondary: natalPlanet,
      secondarySphere: natalCorresp ? natalCorresp.sphere : natalPlanet,
      archetype: getArchetype(transitPlanet),
      virtues: corresp.virtues,
      vices: corresp.vices
    },

    activatedArea: {
      planet: natalPlanet,
      function: natalCorresp ? natalCorresp.ritualFocus : 'Función psicológica general',
      bodyParts: natalCorresp ? natalCorresp.bodyParts : ['Cuerpo general'],
      healthAreas: natalCorresp ? natalCorresp.healthAreas : ['Salud general']
    },

    aspectNature: {
      type: aspectType,
      nature: aspectNature ? aspectNature.nature : 'neutral',
      description: aspectNature ? aspectNature.description : 'Configuración planetaria',
      focus: aspectNature ? aspectNature.focus : 'Observación',
      phases: orb <= 1 ? 'CULMINACIÓN' : orb <= 3 ? 'Aproximación cercana' : orb <= 6 ? 'Aproximación' : 'Separación'
    },

    evolutionaryObjective: getEvolutionaryObjective(transitPlanet, natalPlanet, aspectType),
    ritualObjective: getRitualObjective(transitPlanet, natalPlanet, aspectType, riskScore),
    operationType,

    timing,

    sphere: {
      primary: corresp.sphere,
      secondary: natalCorresp ? natalCorresp.sphere : null,
      explanation: `La esfera primaria es ${corresp.sphere} (${transitPlanet}) por ser el planeta activador. ${natalCorresp ? `La esfera secundaria es ${natalCorresp.sphere} (${natalPlanet}) por ser la función afectada.` : ''}`
    },

    correspondences: {
      color: corresp.color,
      metal: corresp.metal,
      stone: corresp.stone,
      incienso: corresp.incienso,
      perfume: corresp.perfume,
      plant: corresp.plant,
      symbol: corresp.symbol,
      geometry: corresp.geometry,
      number: corresp.number,
      music: corresp.music,
      orientation: corresp.orientation,
      chakra: corresp.chakra,
      deity: corresp.deity,
      intelligence: corresp.intelligence,
      spirit: corresp.spirit
    },

    ritual: ritualStructure,

    talisman,

    mantra: getMantra(transitPlanet, operationType),
    visualization: getVisualization(transitPlanet, operationType),

    expectedResults: getExpectedResults(transitPlanet, operationType),

    duration: getDuration(operationType, aspectType, orb),
    precautions: getPrecautions(transitPlanet, aspectType, riskScore),

    power,

    conclusion: `El tránsito de ${transitPlanet} ${aspectType} ${natalPlanet} presenta una oportunidad de ${operationType} en el área de ${natalCorresp ? natalCorresp.healthAreas[0] : 'experiencia personal'}. La fuerza ritual es ${power}/100. ${power >= 70 ? 'Momento especialmente favorable para trabajo ritual.' : power >= 40 ? 'Momento adecuado para trabajo sencillo.' : 'Momento más adecuado para contemplación que para intervención ritual.'}`
  };
}

export function generateRitualFichas(dailyReport) {
  const fichas = [];

  for (const day of dailyReport) {
    for (const aspect of day.aspects) {
      if (aspect.orb > 10) continue;

      const ficha = analyzeRitual(
        aspect.transitPlanet,
        aspect.natalPlanet,
        aspect.type,
        aspect.orb,
        aspect.riskArea ? (aspect.riskArea.behavioral + aspect.riskArea.social) / 2 : 50,
        day.date,
        day.planetPositions
      );

      if (ficha.hasRitual) {
        fichas.push({
          dayNum: day.dayNum,
          date: day.date,
          ...ficha
        });
      }
    }
  }

  fichas.sort((a, b) => b.power - a.power);

  return fichas.slice(0, 10);
}
