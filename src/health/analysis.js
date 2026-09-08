/**
 * AstroSalud Pro - Análisis Astrológico de Salud
 * Sistema integral con dignidades, tránsitos, vulnerabilidad, patrones agudo/crónico
 * y glosario de Biodescodificación
 */

import { HEALTH_EN } from '../i18n/health/health-en.js';
import { HEALTH_PT } from '../i18n/health/health-pt.js';
import { HEALTH_FR } from '../i18n/health/health-fr.js';
import { HEALTH_DE } from '../i18n/health/health-de.js';
import { HEALTH_IT } from '../i18n/health/health-it.js';
import { HEALTH_RU } from '../i18n/health/health-ru.js';
import { HEALTH_UK } from '../i18n/health/health-uk.js';
import { HEALTH_SV } from '../i18n/health/health-sv.js';
import { HEALTH_JA } from '../i18n/health/health-ja.js';
import { HEALTH_ZH } from '../i18n/health/health-zh.js';
import { HEALTH_KO } from '../i18n/health/health-ko.js';
import { BIODECODIFICACION, buscarEnGlosario, obtenerInfoBiodescodificacion } from '../i18n/biodescodificacion.js';
import { STRINGS } from '../i18n/translations.js';

let currentLang = 'es';

export function setAnalysisLanguage(lang) { currentLang = lang; }

function t(key, params) {
    let str = STRINGS[currentLang]?.analysis?.[key] || STRINGS['es']?.analysis?.[key] || key;
    if (params) Object.entries(params).forEach(([k, v]) => { str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v); });
    return str;
}

const PLANET_KEY_MAP = { 'Sol': 'planetSol', 'Luna': 'planetLuna', 'Mercurio': 'planetMercurio', 'Venus': 'planetVenus', 'Marte': 'planetMarte', 'Júpiter': 'planetJupiter', 'Saturno': 'planetSaturno', 'Urano': 'planetUrano', 'Neptuno': 'planetNeptuno', 'Plutón': 'planetPluton' };
const SIGN_KEY_MAP = { 'Aries': 'signAries', 'Tauro': 'signTauro', 'Géminis': 'signGeminis', 'Cáncer': 'signCancer', 'Leo': 'signLeo', 'Virgo': 'signVirgo', 'Libra': 'signLibra', 'Escorpio': 'signEscorpio', 'Sagitario': 'signSagitario', 'Capricornio': 'signCapricornio', 'Acuario': 'signAcuario', 'Piscis': 'signPiscis' };

export function translatePlanet(name) { return t(PLANET_KEY_MAP[name] || name); }
export function translateSign(name) { return t(SIGN_KEY_MAP[name] || name); }

const HEALTH_MAP = {
    'es': null,
    'en': HEALTH_EN,
    'pt-BR': HEALTH_PT,
    'fr': HEALTH_FR,
    'de': HEALTH_DE,
    'it': HEALTH_IT,
    'ru': HEALTH_RU,
    'uk': HEALTH_UK,
    'sv': HEALTH_SV,
    'ja': HEALTH_JA,
    'zh-CN': HEALTH_ZH,
    'ko': HEALTH_KO
};

function getHealthData() {
    return HEALTH_MAP[currentLang] || null;
}

function getPlanetHealth() {
    const tr = getHealthData();
    return tr?.PLANET_HEALTH || PLANET_HEALTH;
}

function getSignAssociations() {
    const tr = getHealthData();
    return tr?.SIGN_BODY_ASSOCIATIONS || SIGN_BODY_ASSOCIATIONS;
}

function getElementHealth() {
    const tr = getHealthData();
    return tr?.ELEMENT_HEALTH || ELEMENT_HEALTH;
}

function getAspectTypeConcepts() {
    const tr = getHealthData();
    return tr?.ASPECT_TYPE_CONCEPTS || ASPECT_TYPE_CONCEPTS;
}

function getAspectPlanetHealth() {
    const tr = getHealthData();
    return tr?.ASPECT_PLANET_HEALTH || ASPECT_PLANET_HEALTH;
}

export function getTranslatedPracticalAdvice(planetName) {
    const tr = getHealthData();
    if (tr?.PRACTICAL_ADVICE?.[planetName]) return tr.PRACTICAL_ADVICE[planetName];
    return PLANET_PRACTICAL_ADVICE[planetName] || null;
}

function getHouseNames() {
    const tr = getHealthData();
    return tr?.houseNames || ['Identidad', 'Recursos', 'Comunicación', 'Hogar', 'Creatividad', 'Salud', 'Relaciones', 'Transformación', 'Filosofía', 'Carrera', 'Amistades', 'Subconsciente'];
}

function getPlanetNature() {
    const tr = getHealthData();
    return tr?.PLANET_NATURE || PLANET_NATURE;
}

function getModalityHealth() {
    const tr = getHealthData();
    return tr?.MODALITY_HEALTH || MODALITY_HEALTH;
}

function getHouseHealth() {
    const tr = getHealthData();
    return tr?.HOUSE_HEALTH || HOUSE_HEALTH;
}

function getTransitInterpretations() {
    const tr = getHealthData();
    return tr?.TRANSIT_HEALTH_INTERPRETATIONS || TRANSIT_HEALTH_INTERPRETATIONS;
}

function getBiodecodificacion() {
    return BIODECODIFICACION;
}

function buscarBiodecodificacion(condicion) {
    return buscarEnGlosario(condicion);
}

function obtenerInfoBiodescod(condicion) {
    return obtenerInfoBiodescodificacion(condicion);
}

const PLANET_DIGNITIES = {
    Sol: { domicile: ['Leo'], exaltation: ['Aries'], detriment: ['Acuario'], fall: ['Libra'] },
    Luna: { domicile: ['Cáncer'], exaltation: ['Tauro'], detriment: ['Capricornio'], fall: ['Escorpio'] },
    Mercurio: { domicile: ['Géminis', 'Virgo'], exaltation: ['Acuario'], detriment: ['Sagitario', 'Piscis'], fall: ['Leo'] },
    Venus: { domicile: ['Tauro', 'Libra'], exaltation: ['Piscis'], detriment: ['Escorpio', 'Aries'], fall: ['Virgo'] },
    Marte: { domicile: ['Aries', 'Escorpio'], exaltation: ['Capricornio'], detriment: ['Tauro', 'Libra'], fall: ['Cáncer'] },
    Júpiter: { domicile: ['Sagitario', 'Piscis'], exaltation: ['Cáncer'], detriment: ['Géminis', 'Virgo'], fall: ['Capricornio'] },
    Saturno: { domicile: ['Capricornio', 'Acuario'], exaltation: ['Libra'], detriment: ['Cáncer', 'Leo'], fall: ['Aries'] },
    Urano: { domicile: ['Acuario'], exaltation: [], detriment: ['Leo'], fall: [] },
    Neptuno: { domicile: ['Piscis'], exaltation: [], detriment: ['Virgo'], fall: [] },
    Plutón: { domicile: ['Escorpio'], exaltation: [], detriment: ['Tauro'], fall: [] }
};

const PLANET_HEALTH = {
    Sol: {
        role: 'Vitalidad general, corazón, circulación, capacidad de recuperación',
        influence: 'Centro de energía vital, masculinidad, autoexpresión',
        impact: 'Determina la fuerza vital general y la capacidad de recuperación',
        nature: 'Cálido seco',
        chronic: 'Problemas cardíacos, hipertensión, fiebre, inflamaciones crónicas',
        acute: 'Fiebre aguda, golpes de calor, inflamaciones repentinas, accidentes',
        keywords: 'Corazón, espalda, circulación, fiebre, energía vital'
    },
    Luna: {
        role: 'Líquidos corporales, sistema digestivo, fluctuaciones emocionales, sueño',
        influence: 'Emociones, instintos, hábitos, ciclos',
        impact: 'Afecta el equilibrio emocional y los ciclos naturales del cuerpo',
        nature: 'Frío húmedo',
        chronic: 'Retención de líquidos, problemas gástricos, trastornos del sueño, ciclos irregulares',
        acute: 'Náuseas, vómitos, cólicos, crisis emocionales agudas, somnolencia',
        keywords: 'Estómago, agua corporal, ciclo menstrual, emociones, sueño'
    },
    Mercurio: {
        role: 'Sistema nervioso, respiración, procesos mentales',
        influence: 'Mente, comunicación, nervios, percepción',
        impact: 'Determina la agilidad mental y la salud respiratoria',
        nature: 'Variable (frío húmedo / cálido seco)',
        chronic: 'Neuralgia, ansiedad crónica, insomnio, problemas respiratorios persistentes',
        acute: 'Migrañas, crisis de ansiedad, espasmos bronquiales, neuralgia aguda',
        keywords: 'Nervios, pulmones, respiración, mente, sistema nervioso'
    },
    Venus: {
        role: 'Riñones, equilibrio corporal, sistema venoso y hormonal',
        influence: 'Placer, armonía, amor, valores',
        impact: 'Afecta el equilibrio hormonal y la salud reproductiva',
        nature: 'Frío húmedo',
        chronic: 'Problemas renales, desequilibrios hormonales, dolores articulares, problemas venosos',
        acute: 'Cálculos renales, cólicos renales, desequilibrios hormonales agudos',
        keywords: 'Garganta, riñones, reproducción, placer, sistema venoso'
    },
    Marte: {
        role: 'Músculos, sangre, inflamación, fiebre, traumatismos, procesos agudos',
        influence: 'Energía, acción, coraje, conflicto',
        impact: 'Determina la fuerza muscular y la predisposición a inflamaciones',
        nature: 'Cálido seco',
        chronic: 'Inflamaciones crónicas, artritis reumatoide, hipertensión, cicatrices',
        acute: 'Fiebre, accidentes, heridas, quemaduras, cortes, contusiones, esguinces, inflamaciones agudas',
        keywords: 'Músculos, sangre, inflamaciones, fiebre, heridas, accidentes'
    },
    Júpiter: {
        role: 'Hígado, metabolismo, crecimiento, expansión, excesos',
        influence: 'Expansión, abundancia, filosofía, suerte',
        impact: 'Influye en el metabolismo y la propensión a problemas de peso',
        nature: 'Cálido húmedo',
        chronic: 'Obesidad, problemas hepáticos, diabetes, colesterol alto, crecimiento excesivo',
        acute: 'Sobrepeso agudo, hígado graso, intoxicaciones alimentarias, excesos',
        keywords: 'Hígado, crecimiento, metabolismo, obesidad, excesos'
    },
    Saturno: {
        role: 'Huesos, articulaciones, piel, procesos crónicos y restricciones',
        influence: 'Limitación, estructura, madurez, karma',
        impact: 'Determina la estructura ósea y el proceso de envejecimiento',
        nature: 'Frío seco',
        chronic: 'Artritis, osteoporosis, problemas de piel crónicos, cáncer, envejecimiento prematuro, depresión',
        acute: 'Dolor articular agudo, rigidez, fracturas, caídas, dolores óseos',
        keywords: 'Huesos, articulaciones, piel, envejecimiento, cáncer, crónicos'
    },
    Urano: {
        role: 'Sistema nervioso, eventos súbitos, alteraciones inesperadas',
        influence: 'Innovación, libertad, rebelión, originalidad',
        impact: 'Puede indicar tendencia a accidentes o condiciones inesperadas',
        nature: 'Frío seco (variable)',
        chronic: 'Problemas nerviosos crónicos, alteraciones cardíacas, convulsiones, temblores',
        acute: 'Accidentes repentinos, crisis nerviosas, dolores agudos, problemas circulatorios súbitos',
        keywords: 'Nervios, accidentes, crisis repentinas, sistema circulatorio, súbito'
    },
    Neptuno: {
        role: 'Sensibilidad, intoxicaciones, confusión, estados difíciles de diagnosticar',
        influence: 'Espiritualidad, ilusión, compasión, confusión',
        impact: 'Puede indicar sensibilidad extrema o tendencia a adicciones',
        nature: 'Frío húmedo (etéreo)',
        chronic: 'Adicciones, fatiga crónica, problemas inmunes, confusión mental, alucinaciones, sensibilidad extrema',
        acute: 'Intoxicaciones, alucinaciones agudas, sobredosis, confusión súbita, alergias severas',
        keywords: 'Pies, sistema inmunológico, adicciones, alucinaciones, confusión, sensible'
    },
    Plutón: {
        role: 'Procesos profundos, regeneración, eliminación y transformación',
        influence: 'Poder, transformación profunda, muerte y renacimiento',
        impact: 'Indica potencial de transformación y regeneración celular',
        nature: 'Frío seco (variable)',
        chronic: 'Enfermedades degenerativas, transformación celular, crisis profundas, cirugías mayores',
        acute: 'Crisis profundas, emergencias, cirugías de urgencia, colapso, muerte y renacimiento simbólico',
        keywords: 'Regeneración, transformación, crisis, muerte y renacimiento, profundo'
    }
};

const SIGN_BODY_ASSOCIATIONS = {
    Aries: {
        organs: ['Cabeza', 'Cara', 'Cerebro', 'Arterias', 'Sangre'], system: 'Circulatorio y nervioso',
        vulnerabilities: ['Dolor de cabeza', 'Migraña', 'Hipertensión', 'Accidentes en la cabeza'],
        strengths: ['Energía vital', 'Recuperación rápida', 'Circulación sanguínea'],
        diet: 'Evitar comidas picantes y estimulantes en exceso (café, alcohol). Favorecer frutas rojas, melón, pepino, menta. Comidas ligeras y frescas. Evitar comidas muy calientes que aumenten el calor interno.',
        exercise: 'Deportes de velocidad y contacto con precaución. Natación, ciclismo, artes marciales suaves. Evitar sobreesfuerzo en horas de mayor calor. Calentar bien antes de actividad intensa.',
        emotions: 'Cultivar paciencia y tolerancia. Evitar la frustración por demoras. Practicar respiración profunda y meditación de calma. El enojo no resuelto se convierte en presión arterial alta.',
        behavior: 'Evitar impulsividad en decisiones importantes. No asumir riesgos innecesarios por exceso de confianza. Cuidado con accidentes en la cabeza. Moderar el carácter competitivo que genera estrés.'
    },
    Tauro: {
        organs: ['Cuello', 'Garganta', 'Glándulas tiroides', 'Laringe', 'Mandíbula'], system: 'Endocrino y respiratorio',
        vulnerabilities: ['Problemas de tiroides', 'Dolor de garganta', 'Nudos en el cuello'],
        strengths: ['Resistencia física', 'Sistema inmunológico fuerte', 'Voz potente'],
        diet: 'Evitar excesos de dulces, lácteos pesados y comida chatarra. Favorecer frutas, verduras, nueces, miel. Evitar comidas muy frías o muy calientes. Masticar despacio, no hablar mientras se come.',
        exercise: 'Ejercicio constante y ritmado: caminar, yoga, tai chi. Evitar deportes de impacto brusco en cuello y garganta. Fortalecer cuello con estiramientos suaves.',
        emotions: 'Cultivar flexibilidad y adaptabilidad. Evitar la terquedad que genera frustración. Expresar emociones en voz alta en lugar de guardarlas. Evitar la avaricia y el apego excesivo.',
        behavior: 'Evitar la resistencia al cambio que genera estrés interno. No reprimir emociones (causa nudos en garganta). Evitar el exceso de trabajo que lleva a agotamiento por rutina.'
    },
    Géminis: {
        organs: ['Pulmones', 'Bronquios', 'Hombros', 'Brazos', 'Manos', 'Sistema nervioso'], system: 'Respiratorio y nervioso',
        vulnerabilities: ['Asma', 'Bronquitis', 'Ansiedad', 'Insomnio'],
        strengths: ['Agilidad mental', 'Comunicación', 'Adaptabilidad'],
        diet: 'Evitar comidas copiosas que dificulten la respiración. Favorecer alimentos ligeros, frutas cítricas, apio, zanahoria. Evitar exceso de azúcar que altera nervios. Comer en ambiente tranquilo.',
        exercise: 'Natación, caminar, bicicleta, yoga. Ejercicios de respiración profunda. Evitar deportes de contacto que afecten hombros. Estirar brazos y hombros regularmente.',
        emotions: 'Cultivar la concentración y evitar la dispersión. Meditación mindfulness para calmar la mente. Evitar hablar de más o gossipar. Expresar pensamientos por escrito (diario).',
        behavior: 'Evitar hacer muchas cosas a la vez (genera ansiedad). No hablar cuando se está agitado. Evitar el insomnio por sobrecarga mental. Descansar la mente con silencio.'
    },
    Cáncer: {
        organs: ['Estómago', 'Pecho', 'Senos', 'Órganos reproductores femeninos'], system: 'Digestivo y reproductor',
        vulnerabilities: ['Gastritis', 'Úlceras', 'Retención de líquidos'],
        strengths: ['Intuición', 'Protección familiar', 'Adaptación emocional'],
        diet: 'Evitar comidas muy frías o ácidas que irriten el estómago. Favorecer sopas, cereales, comidas reconfortantes. Evitar lácteos en exceso. Evitar comer por ansiedad emocional.',
        exercise: 'Natación, caminar cerca del agua, yoga suave. Evitar deportes de contacto. Ejercicios de flotación. Evitar ejercicio intenso después de comer.',
        emotions: 'Cultivar la seguridad emocional y el apego sano. Evitar el victimismo y la manipulación emocional. Expresar sentimientos en lugar de guardarlos. Terapia emocional es muy beneficiosa.',
        behavior: 'Evitar refugiarse en la comida por estrés. No aislarse emocionalmente. Evitar el cambio de humor que afecta digestión. Compartir emociones con personas de confianza.'
    },
    Leo: {
        organs: ['Corazón', 'Espalda alta', 'Columna vertebral', 'Circulación'], system: 'Cardiovascular',
        vulnerabilities: ['Problemas cardíacos', 'Dolor de espalda', 'Hipertensión'],
        strengths: ['Vitalidad', 'Circulación sanguínea fuerte', 'Resistencia'],
        diet: 'Evitar grasas saturadas, exceso de sal, alcohol. Favorecer frutas rojas, ajo, jengibre, pescado. Evitar comidas muy pesadas que sobrecarguen el corazón. Comer fracciones pequeñas.',
        exercise: 'Ejercicio cardiovascular moderado: caminar, bailar, nadar. Evitar sobreesfuerzo cardíaco. Fortalecer espalda alta con ejercicios posturales. Evitar levantar peso excesivo.',
        emotions: 'Cultivar la humildad y la generosidad. Evitar el orgullo que genera estrés cardíaco. No tomar todo personal. Expresar afecto sin exigir reconocimiento.',
        behavior: 'Evitar el exceso de trabajo por demostrar capacidades. No cuidar la espalda al sentarse. Evitar situaciones que generen presión arterial alta. Moderar el consumo de stimulantes.'
    },
    Virgo: {
        organs: ['Intestinos', 'Sistema digestivo', 'Páncreas', 'Hígado', 'Vesícula biliar'], system: 'Digestivo y metabólico',
        vulnerabilities: ['Problemas intestinales', 'Síndrome de intestino irritable', 'Diabetes'],
        strengths: ['Digestión eficiente', 'Atención al detalle', 'Sistema inmunológico'],
        diet: 'Evitar comidas procesadas, exceso de gluten, azúcar refinada. Favorecer fibra, verduras verdes, probióticos. Comer en horarios regulares. Evitar el exceso de cafeína.',
        exercise: 'Caminar, yoga, Pilates. Ejercicios de abdomen y digestión. Evitar deportes de alto impacto. Rutina constante y moderada.',
        emotions: 'Cultivar la aceptación y el perfeccionismo saludable. Evitar la ansiedad por controlarlo todo. Meditar para calmar la mente critica. No autoexigirse en exceso.',
        behavior: 'Evitar la autocrítica excesiva que genera ansiedad digestiva. No reprimir emociones (afecta intestinos). Evitar el exceso de trabajo que lleva a agotamiento nervioso.'
    },
    Libra: {
        organs: ['Riñones', 'Piel', 'Sistema endocrino', 'Glándulas suprarrenales'], system: 'Excretor y endocrino',
        vulnerabilities: ['Problemas renales', 'Desequilibrios hormonales', 'Problemas de piel'],
        strengths: ['Equilibrio hormonal', 'Piel saludable', 'Armonía interna'],
        diet: 'Evitar exceso de sal, azúcar, alcohol. Favorecer agua pura, frutas, verduras. Evitar comidas muy condimentadas. Beber suficiente agua para riñones.',
        exercise: 'Yoga, danza, caminar. Ejercicios de equilibrio. Evitar deportes muy intensos. Fortalecer zona lumbar y riñones con posturas suaves.',
        emotions: 'Cultivar la independencia y la toma de decisiones. Evitar la indecisión que genera estrés renal. No complacer a todos a costa propia. Buscar armonía interior.',
        behavior: 'Evitar el exceso de dulces que afecta riñones. No reprimir necesidades para mantener armonía. Evitar el sedentarismo que afecta sistema endocrino.'
    },
    Escorpio: {
        organs: ['Órganos reproductores', 'Sistema urogenital', 'Recto', 'Vejiga', 'Sangre'], system: 'Reproductor y urogenital',
        vulnerabilities: ['Problemas reproductivos', 'Infecciones urinarias'],
        strengths: ['Transformación', 'Regeneración', 'Poder de recuperación'],
        diet: 'Evitar comidas muy pesadas, grasas saturadas, alcohol. Favorecer alimentos detox: limón, ajo, vegetales verdes. Evitar retención de toxinas.',
        exercise: 'Ejercicio intenso pero equilibrado: martial arts, natación, gimnasio. Evitar sedentarismo. Libera energía intensa que se estanca si no se mueve.',
        emotions: 'Cultivar la confianza y la vulnerabilidad saludable. Evitar los celos, la posesividad y el rencor. Transformar emociones intensas en creatividad. Terapia profunda es beneficiosa.',
        behavior: 'Evitar el secretismo que genera tensión interna. No manipular situaciones. Evitar el exceso de control. Canalizar intensidad en proyectos transformadores.'
    },
    Sagitario: {
        organs: ['Hígado', 'Muslos', 'Caderas', 'Sistema nervioso ciático'], system: 'Hepático y locomotor',
        vulnerabilities: ['Problemas hepáticos', 'Dolor sciático', 'Lesiones en muslos'],
        strengths: ['Optimismo', 'Energía expansiva', 'Buena recuperación'],
        diet: 'Evitar exceso de alcohol, comida rápida, comidas muy grasas. Favorecer verduras, frutas, cereales integrales. Evitar los excesos de todo tipo. Moderar el picante.',
        exercise: 'Deportes al aire libre: senderismo, equitación, ciclismo. Evitar excesos deportivos que lesionen muslos y caderas. Estirar zona lumbar y ciática regularmente.',
        emotions: 'Cultivar la gratitud y el optimismo realista. Evitar el exceso de entusiasmo que lleva a descuidos. No sobreextenderse. Mantener compromisos.',
        behavior: 'Evitar los excesos (comida, bebida, actividad). No asumir riesgos por exceso de confianza. Evitar lesiones por imprudencia. Cuidar hígado con moderación.'
    },
    Capricornio: {
        organs: ['Huesos', 'Rodillas', 'Articulaciones', 'Piel', 'Dientes'], system: 'Esquelético y dérmico',
        vulnerabilities: ['Problemas articulares', 'Artritis', 'Dolor de rodillas'],
        strengths: ['Estructura ósea fuerte', 'Resistencia', 'Disciplina'],
        diet: 'Evitar comidas muy frías que afecten articulaciones. Favorecer caldos, gelatina, alimentos ricos en calcio. Evitar exceso de sal. Comer warm y nutritivo.',
        exercise: 'Ejercicio de bajo impacto: caminar, yoga, natación. Fortalecer rodillas y articulaciones. Evitar deportes de alto impacto. Estirar regularmente.',
        emotions: 'Cultivar la alegría y la espontaneidad. Evitar la melancolía y el pesimismo crónico. No cargar con responsabilidades ajenas. Expresar sentimientos.',
        behavior: 'Evitar el exceso de trabajo que desgasta huesos y articulaciones. No reprimir emociones (se depositan en articulaciones). Cuidar postura. Evitar el frío excesivo.'
    },
    Acuario: {
        organs: ['Tobillos', 'Sistema circulatorio', 'Sistema nervioso', 'Glándulas linfáticas'], system: 'Circulatorio y nervioso',
        vulnerabilities: ['Problemas circulatorios', 'Várices', 'Edemas'],
        strengths: ['Innovación', 'Circulación alternativa', 'Curación energética'],
        diet: 'Evitar comidas muy saladas que retengan líquidos. Favorecer potasio: plátano, espinaca, aguacate. Beber mucha agua. Evitar alcohol que afecta circulación.',
        exercise: 'Ejercicio que mejore circulación: caminar, bicicleta, yoga invertido. Evitar estar mucho tiempo sentado. Mover piernas y tobillos frecuentemente.',
        emotions: 'Cultivar la conexión social sin agotarse. Evitar el aislamiento por exceso de independencia. Mantener vínculos emocionales sanos. No idealizar relaciones.',
        behavior: 'Evitar el sedentarismo que afecta circulación. No ignorar señales del cuerpo por estar en la mente. Evitar cambios bruscos de temperatura. Cuidar tobillos.'
    },
    Piscis: {
        organs: ['Pies', 'Sistema linfático', 'Glándula pineal', 'Sistema inmunológico'], system: 'Linfático e inmunológico',
        vulnerabilities: ['Problemas en los pies', 'Edemas linfáticos', 'Alergias'],
        strengths: ['Intuición', 'Compasión', 'Sanación alternativa'],
        diet: 'Evitar alcohol, drogas, comidas muy procesadas. Favorecer alimentos ligeros, frutas, vegetales, agua pura. Evitar exceso de azúcar. Comer con consciencia.',
        exercise: 'Caminar descalzo sobre tierra (grounding), yoga, tai chi, natación suave. Evitar ambientes tóxicos. Ejercicio en naturaleza es ideal.',
        emotions: 'Cultivar límites sanos y discernimiento. Evitar absorber emociones ajenas. No huir de la realidad con sustancias. Meditar y conectar con la naturaleza.',
        behavior: 'Evitar adicciones de todo tipo (sustancias, personas, situaciones). No escapar de problemas. Evitar el victimismo. Establecer rutinas de autocuidado.'
    }
};

const ELEMENT_HEALTH = {
    Fuego: {
        description: 'Signos de fuego (Aries, Leo, Sagitario): energía, vitalidad y sistema cardiovascular.',
        strengths: ['Energía vital', 'Recuperación rápida', 'Fuerza'],
        weaknesses: ['Inflamaciones', 'Fiebre', 'Quemaduras', 'Hipertensión'],
        recommendations: ['Ejercicio regular pero sin excesos', 'Controlar temperamento', 'Cuidar corazón y presión arterial'],
        diet: 'Evitar comidas muy calientes, picantes, grasas saturadas, alcohol. Favorecer frutas rojas, vegetales verdes, pescado, aceite de oliva. Comidas ligeras y frescas. Evitar cenas copiosas.',
        exercise: 'Actividades dinámicas pero equilibradas: caminar, nadar, bailar, artes marciales suaves. Evitar sobrecarga cardíaca. Hacer ejercicio en la mañana o tarde, evitar el calor extremo.',
        emotions: 'Cultivar paciencia y tolerancia. Evitar la ira no resuelta que daña el corazón. Practicar respiración profunda, meditación de calma. Expresar emociones sin agresividad.',
        behavior: 'Evitar impulsividad y excesos de confianza. Moderar competitiveidad que genera estrés. Cuidado con accidentes. Evitar trabajar hasta el agotamiento.'
    },
    Tierra: {
        description: 'Signos de tierra (Tauro, Virgo, Capricornio): estabilidad, estructura y sistema digestivo.',
        strengths: ['Resistencia física', 'Estabilidad', 'Buen metabolismo'],
        weaknesses: ['Problemas digestivos', 'Estreñimiento', 'Problemas articulares'],
        recommendations: ['Dieta equilibrada y constante', 'Ejercicio regular', 'Cuidar huesos y articulaciones'],
        diet: 'Evitar comidas procesadas, exceso de gluten, azúcar refinada. Favorecer fibra, verduras, frutas, granos integrales. Comer en horarios regulares. Evitar el exceso de lácteos.',
        exercise: 'Ejercicio de bajo impacto y constante: caminar, yoga, Pilates, jardinería. Fortalecer articulaciones y huesos. Evitar deportes de alto impacto.',
        emotions: 'Cultivar flexibilidad y adaptabilidad. Evitar la terquedad y el apego excesivo. No reprimir emociones (se depositan en digestión y articulaciones). Expresar sentimientos.',
        behavior: 'Evitar el exceso de trabajo rutinario. No resistirse al cambio. Evitar la autocrítica excesiva. Cuidar postura y articulaciones. No neglect hábitos de sueño.'
    },
    Aire: {
        description: 'Signos de aire (Géminis, Libra, Acuario): mente, comunicación y sistema nervioso.',
        strengths: ['Agilidad mental', 'Adaptabilidad', 'Comunicación'],
        weaknesses: ['Ansiedad', 'Insomnio', 'Problemas respiratorios'],
        recommendations: ['Meditación y mindfulness', 'Ejercicios de respiración', 'Descanso mental regular'],
        diet: 'Evitar exceso de cafeína, azúcar, comidas ligeras sin sustancia. Favorecer frutas cítricas, frutos secos, pescado, vegetales. Comer despacio y en ambiente tranquilo.',
        exercise: 'Natación, caminar, bicicleta, yoga. Ejercicios de respiración profunda. Evitar deportes de contacto que afecten hombros. Estirar brazos y cuello.',
        emotions: 'Cultivar la concentración y el silencio. Evitar la dispersión mental. Meditar 10 minutos diarios. Expresar pensamientos por escrito. Evitar hablar de más.',
        behavior: 'Evitar hacer muchas cosas a la vez. No sobrecargar la mente. Evitar el insomnio por pensamientos racing. Tomar descansos de pantallas. Conectar con el cuerpo.'
    },
    Agua: {
        description: 'Signos de agua (Cáncer, Escorpio, Piscis): emociones, intuición y sistema linfático.',
        strengths: ['Intuición', 'Empatía', 'Sanación emocional'],
        weaknesses: ['Retención de líquidos', 'Problemas emocionales', 'Depresión'],
        recommendations: ['Gestionar emociones con terapia', 'Hidratación adecuada', 'Expresar sentimientos sanamente'],
        diet: 'Evitar alcohol, comidas muy frías, exceso de lácteos. Favorecer sopas, caldos, frutas, verduras cocidas. Beber mucha agua. Evitar comer por ansiedad emocional.',
        exercise: 'Natación, caminar cerca del agua, yoga suave, tai chi. Ejercicios en naturaleza. Evitar deportes muy intensos. Flotar en agua es muy sanador.',
        emotions: 'Cultivar la seguridad emocional y límites sanos. Evitar absorbber emociones ajenas. Terapia emocional es esencial. Expresar sentimientos sin victimismo.',
        behavior: 'Evitar adicciones y fugas de la realidad. No aislarse emocionalmente. Evitar el pesimismo. Compartir sentimientos con personas de confianza. Establecer rutinas.'
    }
};

const PLANET_PRACTICAL_ADVICE = {
    Sol: { diet: 'Evitar grasas saturadas y exceso de sal. Favorecer frutas rojas, ajo, pescado. Comidas ligeras.', exercise: 'Ejercicio cardiovascular moderado: caminar, bailar. Evitar sobreesfuerzo. Fortalecer espalda.', emotions: 'Cultivar humildad y generosidad. Evitar orgullo y exceso de ego que estresa el corazón.', behavior: 'No trabajar hasta el agotamiento. Cuidar postura. Evitar situaciones de presión constante.' },
    Luna: { diet: 'Evitar comidas muy frías o ácidas. Favorecer sopas, cereales, comidas reconfortantes. No comer por ansiedad.', exercise: 'Natación, yoga suave, caminar cerca del agua. Evitar ejercicio intenso después de comer.', emotions: 'Cultivar seguridad emocional. Evitar victimismo. Expresar sentimientos. Terapia emocional beneficiosa.', behavior: 'No aislarse. Evitar refugiarse en la comida. Compartir emociones. Mantener horarios regulares de sueño.' },
    Mercurio: { diet: 'Evitar exceso de cafeína y azúcar. Favorecer frutas cítricas, apio, pescado. Comer en ambiente tranquilo.', exercise: 'Natación, caminar, respiración profunda. Estirar hombros y brazos. Evitar sobrecarga mental.', emotions: 'Cultivar concentración y silencio. Meditar 10 minutos diarios. Expresar pensamientos por escrito.', behavior: 'No hacer muchas cosas a la vez. Evitar insomnio por mente acelerada. Tomar descansos de pantallas.' },
    Venus: { diet: 'Evitar exceso de sal y dulces. Beber mucha agua. Favorecer frutas, verduras, alimentos frescos.', exercise: 'Yoga, danza, caminar. Ejercicios de equilibrio y zona lumbar. Evitar sedentarismo.', emotions: 'Cultivar independencia. Evitar complacer a todos. Tomar decisiones sin temor. Buscar armonía interior.', behavior: 'No reprimir necesidades. Evitar exceso de dulces. Cuidar riñones con buena hidratación.' },
    Marte: { diet: 'Evitar comidas muy picantes y calientes. Favorecer enfriantes: pepino, lechuga, sandía. Evitar alcohol.', exercise: 'Deportes intensos pero con precaución: artes marciales, gimnasio. Calentar bien. Evitar lesiones.', emotions: 'Cultivar paciencia y tolerancia. Evitar ira no resuelta. Canalizar energía en acción constructiva.', behavior: 'Evitar impulsividad. No asumir riesgos innecesarios. Cuidado con accidentes. Moderar competitividad.' },
    Júpiter: { diet: 'Evitar excesos de todo tipo: comida, bebida, dulces. Favorecer verduras, frutas, comidas moderadas.', exercise: 'Ejercicio moderado y constante. Caminar, nadar, yoga. Evitar sobrepeso por excesos.', emotions: 'Cultivar gratitud y moderación. Evitar exceso de optimismo que lleva a descuidos. Mantener compromisos.', behavior: 'Evitar excesos alimenticios y de bebida. No sobreextenderse. Cuidar hígado. Mantener disciplina.' },
    Saturno: { diet: 'Evitar comidas muy frías. Favorecer caldos, calcio, alimentos warm. Evitar exceso de sal.', exercise: 'Ejercicio de bajo impacto: caminar, yoga. Fortalecer articulaciones. Evitar alto impacto.', emotions: 'Cultivar alegría y espontaneidad. Evitar pesimismo crónico. No cargar responsabilidades ajenas.', behavior: 'Evitar exceso de trabajo. No reprimir emociones (se depositan en articulaciones). Cuidar postura.' },
    Urano: { diet: 'Evitar comidas muy saladas. Favorecer potasio: plátano, espinaca. Beber mucha agua.', exercise: 'Caminar, bicicleta, yoga. Mover piernas frecuentemente. Evitar sedentarismo prolongado.', emotions: 'Cultivar conexión social. Evitar aislamiento por exceso de independencia. Mantener vínculos.', behavior: 'No ignorar señales del cuerpo. Evitar cambios bruscos de temperatura. Cuidar tobillos y circulación.' },
    Neptuno: { diet: 'Evitar alcohol y sustancias. Favorecer alimentos ligeros, frutas, agua pura. Comer con consciencia.', exercise: 'Caminar descalzo, yoga, natación suave. Ejercicio en naturaleza. Evitar ambientes tóxicos.', emotions: 'Cultivar límites sanos. Evitar absorber emociones ajenas. Meditar y conectar con naturaleza.', behavior: 'Evitar adicciones de todo tipo. No escapar de problemas. Establecer rutinas de autocuidado.' },
    Plutón: { diet: 'Evitar comidas muy pesadas y procesadas. Favorecer alimentos detox: limón, ajo, vegetales verdes.', exercise: 'Ejercicio intenso pero equilibrado. Libera energía intensa. Natación, gimnasio, artes marciales.', emotions: 'Cultivar confianza y vulnerabilidad. Evitar celos, posesividad, rencor. Transformar en creatividad.', behavior: 'Evitar secretismo y manipulación. No controlar todo. Canalizar intensidad en proyectos transformadores.' }
};

const ASPECT_TYPE_CONCEPTS = {
    'Conjunción': {
        symbol: '☌',
        concept: 'La conjunción ocurre cuando dos planetas están en el mismo punto zodiacal (0°). Sus energías se fusionan, creando una fuerza unificada que potencia ambas cualidades. Es como dos instrumentos tocando la misma nota: se amplifica el sonido.',
        healthMeaning: 'En salud, la conjunción intensifica las funciones de ambos planetas. Puede generar extraordinaria vitalidad si los planetas son armónicos, o sobrecarga si son tensos.',
        risks: 'Sobrecarga en los sistemas gobernados por ambos planetas. Tendencia a exagerar las cualidades. Agotamiento por intensidad sostenida.',
        wellness: 'Canalizar la energía combinada en prácticas concretas. Establecer ritmos que permitan descanso entre picos de actividad. Usar la intensidad como motor de transformación positiva.'
    },
    'Sextil': {
        symbol: '✦',
        concept: 'El sextil (60°) crea un ángulo de oportunidad y flujo suave. Las energías planetarias se apoyan mutuamente sin esfuerzo, como dos amigos que se complementan naturalmente.',
        healthMeaning: 'Indica talentos naturales para el bienestar. El cuerpo tiene facilidad para equilibrar los sistemas involucrados. Es un aspecto de facilidades y recursos disponibles.',
        risks: 'El riesgo es la complacencia: como fluye fácil, puede ignorarse hasta que se pierde. No genera crisis pero puede enmascarar desequilibrios sutiles.',
        wellness: 'Aprovechar conscientemente las facilidades que ofrece. Cultivar hábitos positivos sin esperar a que haya problemas. Usar la armonía como base para construir rutinas saludables.'
    },
    'Cuadratura': {
        symbol: '□',
        concept: 'La cuadratura (90°) genera tensión constructiva entre dos fuerzas que se desafían. Es como un músculo que se fortalece con la resistencia: la fricción produce crecimiento.',
        healthMeaning: 'En salud, la cuadratura indica zonas donde el cuerpo necesita hacer ajustes. No es negativa: es el mecanismo natural de adaptación. Sin embargo, la tensión sostenida puede manifestar síntomas.',
        risks: 'Inflamaciones, sobreesfuerzo, crisis agudas cuando la tensión no se maneja. Estrés acumulado que afecta los sistemas gobernados por ambos planetas. Tendencia a ignorar señales hasta que se vuelven urgentes.',
        wellness: 'Prácticas regulares de liberación de tensión (ejercicio, masaje, respiración). Aprender a escuchar las señales tempranas del cuerpo. Transformar la tensión en motivación para mejorar hábitos.'
    },
    'Trígono': {
        symbol: '△',
        concept: 'El trígono (120°) es el aspecto más armonioso. Las energías fluyen con naturalidad y gracia, como un río que sigue su curso sin obstáculos. Representa talentos innatos y facilidades.',
        healthMeaning: 'Indica equilibrio natural entre los sistemas gobernados por los planetas. El cuerpo tiene una capacidad innata para mantener el bienestar en esas áreas.',
        risks: 'El riesgo es la pasividad: al ser tan armónico, puede no tomarse acción preventiva. El exceso de facilidad puede llevar a negligencia.',
        wellness: 'Mantener las prácticas que funcionan sin cambiar lo que no está roto. Usar la armonía como plataforma para expandir hacia áreas más desafiantes. Gratitud y mantenimiento consciente.'
    },
    'Oposición': {
        symbol: '☍',
        concept: 'La oposición (180°) crea polaridad: dos fuerzas opuestas que buscan equilibrio. Es como el día y la noche, o el inhalo y el exhalo. La conciencia del polo opuesto amplía la perspectiva.',
        healthMeaning: 'En salud, la oposición indica la necesidad de equilibrar dos sistemas que trabajan en direcciones opuestas. Puede generar fluctuaciones o alternancia de síntomas.',
        risks: 'Polarización extrema: exceso de un polo y déficit del otro. Oscilaciones emocionales y físicas. Dificultad para mantener estabilidad. Posibles crisis de concienciación.',
        wellness: 'Prácticas de equilibrio: yoga, meditación, respiración bilateral. Reconocer ambos extremos sin juzgar. Buscar el punto medio en alimentación, ejercicio y descanso.'
    }
};

const ASPECT_PLANET_HEALTH = {
    'Sol-Luna': {
        concept: 'La unión del Sol (vitalidad, yo consciente) y la Luna (emociones, instintos) representa la integración de cuerpo y alma. Es el aspecto más íntimo de la identidad vital.',
        risks: 'Desequilibrio entre voluntad y necesidades emocionales. Tensión entre lo que se "debe" hacer y lo que el cuerpo pide. Problemas cardíacos por estrés emocional no procesado. Fluctuaciones de energía.',
        wellness: 'Escuchar tanto la lógica como la intuición. Practicar mindfulness para integrar cuerpo y mente. Rutinas que alimenten tanto la vitalidad como la seguridad emocional. Terapia que una razón y emoción.'
    },
    'Sol-Mercurio': {
        concept: 'El Sol con Mercurio une la vitalidad con la mente. Representa la expresión del yo a través del pensamiento y la comunicación.',
        risks: 'Sobrecarga mental que agota la vitalidad. Tensión en sistema nervioso y respiratorio. Dificultad para "apagar" la mente. Migrañas por exceso de actividad mental.',
        wellness: 'Actividades que canalicen la mente creativamente. Ejercicio físico para liberar la tensión mental. Técnicas de respiración y relajación. Comunicación asertiva como válvula de escape.'
    },
    'Sol-Venus': {
        concept: 'El Sol con Venus une la fuerza vital con el placer y la armonía. Indica una constitución que busca el bienestar a través de la belleza y el equilibrio.',
        risks: 'Excesos sensoriales (comida, comodidad, placer). Problemas renales o articulares por exceso de indulgencia. Desequilibrios hormonales. Tendencia a la pereza.',
        wellness: 'Placer consciente: disfrutar sin excederse. Actividades estéticas que nutran el alma (arte, música, naturaleza). Equilibrio entre disfrute y disciplina. Cuidado del cuerpo como acto de amor propio.'
    },
    'Sol-Marte': {
        concept: 'El Sol con Marte es la combinación de vitalidad y acción. Representa energía pura, iniciativa y fuerza de voluntad. Es fuego con fuego.',
        risks: 'Sobrecalentamiento, inflamaciones, fiebre, accidentes por impulsividad. Sobreesfuerzo físico. Tendencia a la impaciencia que genera estrés. Hipertensión.',
        wellness: 'Actividades físicas intensas pero controladas (deportes, artes marciales). Canalizar la energía en proyectos concretos. Aprender a dosificar la fuerza. Descanso activo.'
    },
    'Sol-Júpiter': {
        concept: 'El Sol con Júpiter amplía la vitalidad y el optimismo. Indica una constitución robusta con tendencia a la expansión.',
        risks: 'Excesos por exceso de optimismo. Sobrepeso, problemas hepáticos, inflamaciones por exceso. Tendencia a subestimar problemas de salud.',
        wellness: 'Moderación como virtud. Actividades que expandan la conciencia sin excederse (viajes, estudio, espiritualidad). Alimentación equilibrada.check_ups regulares.'
    },
    'Sol-Saturno': {
        concept: 'El Sol con Saturno enfrenta vitalidad con estructura y límite. Indica una constitución que se fortalece con la disciplina pero puede debilitarse por la rigidez.',
        risks: 'Fatiga crónica, problemas articulares, depresión, sensación de envejecimiento prematuro. Límites estrictos que reprimen la vitalidad.',
        wellness: 'Disciplina sostenida pero flexible. Ejercicio de bajo impacto y constante (caminar, nadar). Nutrición regular y estructurada. Aceptación de los límites como fortaleza.'
    },
    'Sol-Urano': {
        concept: 'El Sol con Urano une la vitalidad con la innovación. Indica un cuerpo que funciona de manera irregular pero con picos de energía extraordinarios.',
        risks: 'Cambios bruscos de energía. Arritmias, problemas circulatorios, sobresaltos. Tendencia a ignorar el cuerpo por estar "en la mente".',
        wellness: 'Rutinas-flexibles: estructura con espacio para la espontaneidad. Ejercicios variados y estimulantes. Escuchar al cuerpo incluso cuando la mente está ocupada.'
    },
    'Sol-Neptuno': {
        concept: 'El Sol con Neptuno une la vitalidad con lo etéreo. Indica una constitución sensible que puede ser permeable a influencias externas.',
        risks: 'Debilitamiento de la vitalidad por confusión emocional. Tendencia a adicciones. Sensibilidad extrema a sustancias, ambientes y personas. Enfermedades difíciles de diagnosticar.',
        wellness: 'Prácticas de grounding (caminar descalzo, naturaleza). Límites emocionales claros. Evitar sustancias tóxicas. Espiritualidad como fortaleza, no como escape.'
    },
    'Sol-Plutón': {
        concept: 'El Sol con Plutón une la fuerza vital con la transformación profunda. Indica una capacidad de regeneración extraordinaria pero a través de crisis.',
        risks: 'Crisis de poder y control que afectan la salud. Problemas reproductivos, sexuales o de eliminación. Tendencia a Guardar tensiones profundas. Enfermedades como proceso de transformación.',
        wellness: 'Aceptar las crisis como oportunidades de transformación. Terapia profunda (psicología, somática). Ejercicio que libere tensiones acumuladas. Renacimiento a través de la acción consciente.'
    },
    'Luna-Mercurio': {
        concept: 'La Luna con Mercurio une las emociones con la mente. Indica una persona cuyos pensamientos están profundamente influenciados por sus sentimientos.',
        risks: 'Ansiedad, nerviosismo, insomnio. Problemas digestivos por estrés emocional. Tensión en hombros y cuello. Dificultad para dormir por pensamientos acelerados.',
        wellness: 'Escritura terapéutica (journaling). Meditación de mindfulness. Respiración diafragmática. Expresar emociones verbalmente. Rutinas que calmen la mente.'
    },
    'Luna-Venus': {
        concept: 'La Luna con Venus une la emocionalidad con el placer. Indica una constitución que busca el bienestar a través del cuidado y la sensualidad.',
        risks: 'Retención de líquidos, problemas gástricos. Cambios hormonales marcados. Tendencia al exceso en comida o comodidad. Sensibilidad a cambios de ciclo.',
        wellness: 'Rituales de autocuidado. Baños terapéuticos. Contacto con la naturaleza. Alimentación que nutra tanto el cuerpo como los sentidos. Arte como sanación.'
    },
    'Luna-Marte': {
        concept: 'La Luna con Marte une emociones con acción. Indica una persona cuyas respuestas emocionales son rápidas e intensas.',
        risks: 'Irritabilidad, inflamaciones, cólicos. Crisis emocionales agudas. Tendencia a reacciones impulsivas que generan estrés físico. Problemas gástricos.',
        wellness: 'Actividad física regular para canalizar la energía emocional. Técnicas de regulación emocional. Ejercicios de respiración en momentos de crisis. Canalizar la impulsividad en deporte.'
    },
    'Luna-Júpiter': {
        concept: 'La Luna con Júpiter expande la emocionalidad y la capacidad de nutrición. Indica una constitución generosa pero propensa al exceso.',
        risks: 'Sobrepeso, retención de líquidos, problemas hepáticos. Excesos emocionales (comer por sentimiento). Indulgencia excesiva.',
        wellness: 'Alimentación consciente y nutritiva. Actividades que expandan la conciencia emocional (terapia, espiritualidad). Moderación como práctica diaria. Nutrir a otros sin descuidarse.'
    },
    'Luna-Saturno': {
        concept: 'La Luna con Saturno enfrenta emociones con estructura. Indica una persona que reprime sus sentimientos o los maneja con extrema disciplina.',
        risks: 'Depresión, frialdad emocional, problemas gástricos por represión. Envejecimiento prematuro del sistema digestivo. Dificultad para relajarse.',
        wellness: 'Permitir la expresión emocional. Terapia que trabaje la represión. Rutinas que incluyan momentos de descanso emocional. Contacto con la naturaleza para suavizar la rigidez.'
    },
    'Mercurio-Venus': {
        concept: 'Mercurio con Venus une la mente con la estética. Indica una persona que piensa con belleza y comunica con armonía.',
        risks: 'Tensión nerviosa por perfeccionismo. Neuralgia, problemas respiratorios leves. Dificultad para relajarse mentalmente.',
        wellness: 'Arte y música como terapia. Comunicación asertiva. Ejercicios de relajación mental. Actividades creativas que unan mente y sensibilidad.'
    },
    'Mercurio-Marte': {
        concept: 'Mercurio con Marte une la mente con la acción. Indica una mente rápida y combativa, propensa al nerviosismo.',
        risks: 'Migrañas, ansiedad, insomnio. Tensión en mandíbula y cuello. Hablar demasiado o demasiado rápido. Debate compulsivo.',
        wellness: 'Deportes que involucren estrategia (ajedrez, deportes de equipo). Escritura. Ejercicios de relajación de mandíbula. Respiración consciente.'
    },
    'Mercurio-Júpiter': {
        concept: 'Mercurio con Júpiter expande la mente y la comunicación. Indica una persona con gran capacidad intelectual pero tendencia a dispersarse.',
        risks: 'Sobrecarga mental, ansiedad por exceso de información. Nerviosismo por exceso de estimulación.',
        wellness: 'Filosofía y estudio como práctica de bienestar. Meditación. Simplificación de la información que se consume. Aprender a decir no al exceso mental.'
    },
    'Mercurio-Saturno': {
        concept: 'Mercurio con Saturno une la mente con la estructura. Indica una persona metódica pero propensa a la rigidez mental.',
        risks: 'Ansiedad crónica, pensamientos obsesivos, tensión persistente. Dificultad para relajar la mente. Neuralgia.',
        wellness: 'Rutinas mentales estructuradas pero flexibles. Meditación de observación. Ejercicio físico para liberar la tensión mental. Terapia cognitiva.'
    },
    'Venus-Marte': {
        concept: 'Venus con Marte une el placer con la acción. Indica una constitución que busca el equilibrio entre el disfrute y la disciplina.',
        risks: 'Desequilibrios hormonales, problemas renales, inflamaciones. Tensión entre placer y deber que genera estrés.',
        wellness: 'Actividades que unan placer y movimiento (danza, senderismo). Equilibrio entre actividad y descanso. Alimentación que nutra sin privar. Relaciones sanas.'
    },
    'Venus-Júpiter': {
        concept: 'Venus con Júpiter amplía el placer y la armonía. Indica una constitución que busca el bienestar a través de la abundancia.',
        risks: 'Excesos en comida, bebida o comodidad. Sobrepeso, problemas articulares. Indulgencia excesiva.',
        wellness: 'Placer consciente. Actividades que expandan los sentidos sin excederse (arte, naturaleza, música). Moderación como virtud.'
    },
    'Venus-Saturno': {
        concept: 'Venus con Saturno enfrenta placer con límite. Indica una persona que puede reprimir sus placeres o tener una relación compleja con el disfrute.',
        risks: 'Depresión, frialdad, problemas articulares. Dificultad para disfrutar. Represión de necesidades sensoriales.',
        wellness: 'Permitirse el placer sin culpa. Terapia para trabajar la represión. Actividades sensoriales suaves (masaje, música). Autocuidado como práctica.'
    },
    'Marte-Júpiter': {
        concept: 'Marte con Júpiter amplifica la acción y la expansión. Indica una energía física enorme pero propensa al exceso.',
        risks: 'Sobreesfuerzo, accidentes, inflamaciones. Exceso de actividad que genera agotamiento. Tendencia a exagerar.',
        wellness: 'Canalizar la energía en proyectos concretos. Deportes intensos pero controlados. Dosificación de la fuerza. Descanso activo.'
    },
    'Marte-Saturno': {
        concept: 'Marte con Saturno enfrenta acción con límite. Indica una energía que se fortalece con la resistencia pero puede bloquearse.',
        risks: 'Bloqueos energéticos, dolores articulares, fatiga crónica. Tensión entre querer y poder. Frustración que se somatiza.',
        wellness: 'Ejercicio de resistencia progresiva. Aceptar los límites sin rendirse. Terapia de liberación de tensión. Disciplina con flexibilidad.'
    },
    'Júpiter-Saturno': {
        concept: 'Júpiter con Saturno une expansión con estructura. Indica una búsqueda del equilibrio entre crecimiento y disciplina.',
        risks: 'Fluctuaciones de peso, problemas metabólicos, crisis de significado. Tensión entre optimismo y pesimismo que afecta la salud.',
        wellness: 'Planificación a largo plazo para el bienestar. Equilibrio entre disciplina y placer. Filosofía de vida saludable. Constancia con flexibilidad.'
    }
};

const ASPECT_GENERAL_INFO = {
    'Conjunción': { type: 'tensión', icon: '☌', meaning: 'Fusión de energías' },
    'Sextil': { type: 'armonía', icon: '✦', meaning: 'Oportunidad y flujo' },
    'Cuadratura': { type: 'tensión', icon: '□', meaning: 'Desafío y crecimiento' },
    'Trígono': { type: 'armonía', icon: '△', meaning: 'Armonía y facilidades' },
    'Oposición': { type: 'tensión', icon: '☍', meaning: 'Polaridad y equilibrio' }
};

const MODALITY_HEALTH = {
    Cardinal: { description: 'Signos cardinales: inician ciclos, energías de inicio.', healthFocus: 'Cabeza, estómago, riñones, huesos', recommendations: 'Tendencia a problemas agudos o inicios de condiciones' },
    Fijo: { description: 'Signos fijos: mantienen y estabilizan.', healthFocus: 'Garganta, corazón, reproductor, circulatorio', recommendations: 'Tendencia a condiciones crónicas o estancamiento' },
    Mutable: { description: 'Signos mutables: adaptan y transforman.', healthFocus: 'Pulmones, intestinos, hígado, pies', recommendations: 'Tendencia a condiciones variables o de adaptación' }
};

const HOUSE_HEALTH = {
    1: { name: 'Ascendente', area: 'Constitución y vitalidad física', healthFocus: 'Estado general del organismo, capacidad de afrontar desequilibrios, apariencia física', keywords: 'Cabeza, cara, primeras impresiones, vitalidad' },
    2: { name: 'Recursos', area: 'Autoestima, estabilidad', healthFocus: 'Valores personales, estabilidad material, autoestima', keywords: 'Bienes materiales, estabilidad financiera, autoestima' },
    3: { name: 'Comunicación', area: 'Mente, nervios', healthFocus: 'Comunicación, transporte, hermanos, aprendizaje', keywords: 'Comunicación, transporte, hermanos, aprendizaje' },
    4: { name: 'Hogar', area: 'Emociones, raíces', healthFocus: 'Familia, hogar, raíces, seguridad emocional', keywords: 'Familia, hogar, raíces, seguridad emocional' },
    5: { name: 'Creatividad', area: 'Placer, hijos', healthFocus: 'Creatividad, hijos, placer, romance', keywords: 'Creatividad, hijos, placer, romance' },
    6: { name: 'Salud', area: 'Enfermedad, hábitos y salud cotidiana', healthFocus: 'La casa más importante para análisis de salud. Enfermedad, trabajo, rutinas, servicio, mascotas', keywords: 'Salud, trabajo, rutinas, servicio, mascotas' },
    7: { name: 'Relaciones', area: 'Equilibrio, socios', healthFocus: 'Pareja, socios, relaciones, equilibrio', keywords: 'Pareja, socios, relaciones, equilibrio' },
    8: { name: 'Transformación', area: 'Crisis, procesos profundos, regeneración', healthFocus: 'Transformación, sexualidad, muerte, renacimiento. No necesariamente enfermedad sino situaciones de transformación o crisis', keywords: 'Transformación, sexualidad, muerte, renacimiento' },
    9: { name: 'Filosofía', area: 'Educación, expansión', healthFocus: 'Filosofía, educación, viajes, expandir horizontes', keywords: 'Filosofía, educación, viajes, expandir horizontes' },
    10: { name: 'Carrera', area: 'Logros, estatus', healthFocus: 'Carrera, reputación, logros, estatus', keywords: 'Carrera, reputación, logros, estatus' },
    11: { name: 'Amistades', area: 'Grupos, innovación', healthFocus: 'Amistades, grupos, causas sociales, innovación', keywords: 'Amistades, grupos, causas sociales, innovación' },
    12: { name: 'Subconsciente', area: 'Enfermedades ocultas, aislamiento', healthFocus: 'Enfermedades ocultas, aislamiento, padecimientos difíciles de identificar, sanación profunda, espiritualidad', keywords: 'Subconsciente, espiritualidad, sueños, sanación profunda' }
};

const HEALTH_HOUSES = [1, 6, 8, 12];

const PLANET_NATURE = {
    Sol: 'Cálido seco', Luna: 'Frío húmedo', Mercurio: 'Variable',
    Venus: 'Frío húmedo', Marte: 'Cálido seco', Júpiter: 'Cálido húmedo',
    Saturno: 'Frío seco', Urano: 'Frío seco (variable)', Neptuno: 'Frío húmedo (etéreo)',
    Plutón: 'Frío seco (variable)'
};

const TRANSIT_HEALTH_INTERPRETATIONS = {
    'Sol': {
        'Cuadratura': { level: 'III', desc: 'Reducción de energía, sensación de agotamiento, necesidad de descanso, mayor sensibilidad a procesos crónicos, exigencia sobre la estructura corporal.' },
        'Oposición': { level: 'III', desc: 'Energía enfrentada, necesidad de equilibrio vital, confrontación con límites físicos.' },
        'Trígono': { level: 'I', desc: 'Período de buena vitalidad, energía favorable, recuperación facilitada.' },
        'Sextil': { level: 'I', desc: 'Oportunidades de mejorar la salud, energía disponible para el bienestar.' },
        'Conjunción': { level: 'II', desc: 'Activación de la vitalidad, energía concentrada, período de mayor intensidad vital.' }
    },
    'Luna': {
        'Cuadratura': { level: 'II', desc: 'Fluctuaciones emocionales que afectan la digestión, sensibilidad alterada, posibles retenciones de líquidos.' },
        'Oposición': { level: 'II', desc: 'Necesidad de equilibrio emocional, posibles alteraciones del sueño.' },
        'Trígono': { level: 'I', desc: 'Equilibrio emocional favorable, buena capacidad de adaptación.' },
        'Conjunción': { level: 'II', desc: 'Período de alta sensibilidad emocional y física.' }
    },
    'Mercurio': {
        'Cuadratura': { level: 'II', desc: 'Nerviosismo, ansiedad, insomnio, tensión en hombros, problemas respiratorios.' },
        'Oposición': { level: 'II', desc: 'Mentalidad dispersa, dificultad para relajarse, tensión nerviosa.' },
        'Trígono': { level: 'I', desc: 'Mente clara, buena capacidad de concentración, equilibrio nervioso.' },
        'Conjunción': { level: 'II', desc: 'Activación mental intensa, posible sobrecarga nerviosa.' }
    },
    'Venus': {
        'Cuadratura': { level: 'II', desc: 'Desequilibrios hormonales, problemas renales, dolores articulares.' },
        'Trígono': { level: 'I', desc: 'Armonía corporal, bienestar general, equilibrio hormonal.' },
        'Conjunción': { level: 'I', desc: 'Período de placer sensorial y bienestar.' }
    },
    'Marte': {
        'Cuadratura': { level: 'III', desc: 'Procesos inflamatorios, sobreesfuerzo, accidentes menores, estados febriles, exceso de actividad.' },
        'Oposición': { level: 'III', desc: 'Conflicto energético, posibilidad de accidentes o lesiones por exceso.' },
        'Trígono': { level: 'I', desc: 'Buena energía física, capacidad de acción positiva.' },
        'Sextil': { level: 'I', desc: 'Energía disponible para actividad física moderada.' },
        'Conjunción': { level: 'II', desc: 'Energía concentrada, posibilidad de inflamaciones o sobreesfuerzo.' }
    },
    'Júpiter': {
        'Cuadratura': { level: 'II', desc: 'Excesos, sobrepeso, problemas hepáticos, indulgencia.' },
        'Oposición': { level: 'II', desc: 'Necesidad de moderación, posibles problemas metabólicos.' },
        'Trígono': { level: 'I', desc: 'Buena recuperación, metabolismo favorable, bienestar general.' },
        'Conjunción': { level: 'I', desc: 'Expansión de la vitalidad, buena salud general.' }
    },
    'Saturno': {
        'Cuadratura': { level: 'IV', desc: 'Período de especial atención. Reducción de energía, sensación de agotamiento, necesidad de descanso, mayor sensibilidad a procesos crónicos, exigencia sobre la estructura corporal, necesidad de revisar hábitos.' },
        'Oposición': { level: 'IV', desc: 'Período de exigencia. Pruebas de resistencia, necesidad de paciencia, posibles dolores articulares o óseos.' },
        'Trígono': { level: 'I', desc: 'Estructura estable, madurez física, capacidad de trabajo sostenido.' },
        'Sextil': { level: 'I', desc: 'Oportunidades de fortalecer la estructura corporal.' },
        'Conjunción': { level: 'III', desc: 'Activación de restricciones, necesidad de disciplina health.' }
    },
    'Urano': {
        'Cuadratura': { level: 'III', desc: 'Eventos súbitos, alteraciones inesperadas, crisis nerviosas, posibles accidentes.' },
        'Oposición': { level: 'III', desc: 'Cambios bruscos en salud, situaciones inesperadas.' },
        'Conjunción': { level: 'II', desc: 'Activación de lo inesperado, posibles cambios repentinos.' }
    },
    'Neptuno': {
        'Cuadratura': { level: 'II', desc: 'Confusión, sensibilidad extrema, posibles intoxicaciones, estados difíciles de diagnosticar.' },
        'Oposición': { level: 'II', desc: 'Sensibilidad aumentada, posibilidad de adicciones, confusión.' },
        'Conjunción': { level: 'II', desc: 'Período de alta sensibilidad, necesidad de discernimiento.' }
    },
    'Plutón': {
        'Cuadratura': { level: 'IV', desc: 'Procesos profundos de transformación, crisis que llevan a regeneración, posibles cirugías o procesos de eliminación.' },
        'Oposición': { level: 'III', desc: 'Confrontación con procesos profundos, transformación necesaria.' },
        'Conjunción': { level: 'III', desc: 'Activación de procesos de transformación profunda.' }
    }
};

export function analyzeHealthTendencies(chart, medicalHistory = null) {
    const planets = chart.planets;
    const houses = chart.houses.cusps;
    const aspects = chart.aspects;

    const signAnalysis = analyzeBySigns(planets);
    const houseAnalysis = analyzeByHouses(planets, houses);
    const planetAnalysis = analyzeByPlanets(planets);
    const aspectAnalysis = analyzeByAspects(aspects);
    const bodyRiskZones = calculateBodyRiskZones(planets);
    const detailedDiseases = generateDiseaseList(planets);
    const overallVitality = calculateOverallVitality(planets, aspects);
    const elementBalance = calculateElementBalance(planets);
    const modalityBalance = calculateModalityBalance(planets);
    const healthHousesAnalysis = analyzeHealthHouses(chart);
    const acuteChronic = classifyAcuteChronic(planets);
    const recommendations = generateRecommendations(overallVitality, elementBalance, bodyRiskZones, healthHousesAnalysis);
    
    // Agregar información de Biodescodificación a las vulnerabilidades
    const biodescodificacionSummary = {};
    detailedDiseases.forEach(disease => {
        if (disease.biodescodificacion) {
            biodescodificacionSummary[disease.name] = disease.biodescodificacion;
        }
    });

    return {
        signAnalysis,
        houseAnalysis,
        planetAnalysis,
        aspectAnalysis,
        bodyRiskZones,
        detailedDiseases,
        overallVitality,
        elementBalance,
        modalityBalance,
        healthHousesAnalysis,
        acuteChronic,
        recommendations,
        biodescodificacionSummary
    };
}

export function analyzeTransits(natalChart, transitData) {
    const vulnerabilityIndex = calculateVulnerabilityIndex(natalChart, transitData);
    const transitHealthImpact = interpretTransitHealth(natalChart, transitData);
    const acuteChronicTransit = classifyAcuteChronicTransits(transitData);

    return {
        vulnerabilityIndex,
        transitHealthImpact,
        acuteChronicTransit,
        transits: transitData.aspects || [],
        planets: transitData.planets || []
    };
}

function analyzeBySigns(planets) {
    const signs = {};
    planets.forEach(p => {
        if (!signs[p.sign]) {
            const assoc = getSignAssociations()[p.sign] || { organs: [], system: '', vulnerabilities: [], strengths: [], diet: '', exercise: '', emotions: '', behavior: '' };
            signs[p.sign] = {
                sign: p.sign, symbol: p.signSymbol, planets: [],
                organs: assoc.organs, system: assoc.system,
                vulnerabilities: assoc.vulnerabilities, strengths: assoc.strengths || [],
                diet: assoc.diet || '', exercise: assoc.exercise || '',
                emotions: assoc.emotions || '', behavior: assoc.behavior || '',
                riskPercentage: 0, riskLevel: t('riskLow')
            };
        }
        signs[p.sign].planets.push({ name: p.name, symbol: p.symbol });
    });
    Object.values(signs).forEach(sign => {
        let risk = 0;
        if (sign.planets.length >= 3) risk += 40;
        else if (sign.planets.length === 2) risk += 25;
        else if (sign.planets.length === 1) risk += 15;
        sign.planets.forEach(p => {
            if (p.symbol === '♂' || p.symbol === '♄') risk += 10;
            if (p.symbol === '♃') risk -= 5;
        });
        sign.riskPercentage = Math.min(100, Math.max(0, risk));
        sign.riskLevel = risk >= 60 ? t('riskHigh') : risk >= 35 ? t('riskMedium') : t('riskLow');
    });
    return Object.values(signs);
}

function analyzeByHouses(planets, houses) {
    const result = [];
    const houseNames = getHouseNames();
    for (let i = 0; i < 12; i++) {
        result.push({
            house: i + 1, name: houseNames[i],
            sign: houses[i].sign, signSymbol: houses[i].signSymbol,
            planets: [], healthFocus: getHouseHealth()[i + 1]?.healthFocus || '',
            isHealthHouse: HEALTH_HOUSES.includes(i + 1)
        });
    }
    planets.forEach(p => {
        let houseIndex = -1;
        for (let i = 0; i < 12; i++) {
            const start = houses[i].degree;
            const end = houses[(i + 1) % 12].degree;
            if (start < end) {
                if (p.longitude >= start && p.longitude < end) houseIndex = i;
            } else {
                if (p.longitude >= start || p.longitude < end) houseIndex = i;
            }
        }
        if (houseIndex >= 0) result[houseIndex].planets.push(p.name);
    });
    return result;
}

function analyzeByPlanets(planets) {
    return planets.map(p => {
        const dignity = getDignity(p.name, p.sign);
        return {
            planet: p.name, symbol: p.symbol, sign: p.sign, signSymbol: p.signSymbol,
            degree: p.degree + '°' + p.minute + "'",
            role: getPlanetHealth()[p.name]?.role || '',
            influence: getPlanetHealth()[p.name]?.influence || '',
            healthImpact: getPlanetHealth()[p.name]?.impact || '',
            nature: getPlanetHealth()[p.name]?.nature || '',
            chronic: getPlanetHealth()[p.name]?.chronic || '',
            acute: getPlanetHealth()[p.name]?.acute || '',
            dignity: dignity,
            isRetrograde: p.isRetrograde
        };
    });
}

function analyzeByAspects(aspects) {
    return aspects.map(a => {
        const pairKey1 = `${a.planet1Name}-${a.planet2Name}`;
        const pairKey2 = `${a.planet2Name}-${a.planet1Name}`;
        const pairData = getAspectPlanetHealth()[pairKey1] || getAspectPlanetHealth()[pairKey2] || null;
        const typeData = getAspectTypeConcepts()[a.type] || null;
        const generalInfo = ASPECT_GENERAL_INFO[a.type] || {};

        return {
            planet1: a.planet1Name, planet2: a.planet2Name,
            type: a.type, symbol: a.symbol,
            angle: a.angle.toFixed(1), nature: a.nature,
            typeConcept: typeData?.concept || '',
            typeHealthMeaning: typeData?.healthMeaning || '',
            typeRisks: typeData?.risks || '',
            typeWellness: typeData?.wellness || '',
            pairConcept: pairData?.concept || '',
            pairRisks: pairData?.risks || '',
            pairWellness: pairData?.wellness || '',
            riskLevel: a.nature === 'tensión' || a.nature === 'desafío' ? 'Medio' : 'Bajo'
        };
    });
}

function getAspectHealthImpact(aspect) {
    const pairKey1 = `${aspect.planet1Name}-${aspect.planet2Name}`;
    const pairKey2 = `${aspect.planet2Name}-${aspect.planet1Name}`;
    const pairData = getAspectPlanetHealth()[pairKey1] || getAspectPlanetHealth()[pairKey2];
    const typeConcept = getAspectTypeConcepts()[aspect.type];
    if (pairData) return pairData.concept;
    if (typeConcept) return typeConcept.healthMeaning;
    return t('energyNeutral');
}

function getDignity(planetName, signName) {
    const d = PLANET_DIGNITIES[planetName];
    if (!d) return { state: t('dignityNormal'), description: '' };
    if (d.domicile.includes(signName)) return { state: t('dignityDomicile'), description: t('dignityDomicileDesc') };
    if (d.exaltation.includes(signName)) return { state: t('dignityExaltation'), description: t('dignityExaltationDesc') };
    if (d.detriment.includes(signName)) return { state: t('dignityDetriment'), description: t('dignityDetrimentDesc') };
    if (d.fall.includes(signName)) return { state: t('dignityFall'), description: t('dignityFallDesc') };
    return { state: t('dignityNormal'), description: '' };
}

function calculateBodyRiskZones(planets) {
    const zones = { cabeza: 0, cuello: 0, hombros: 0, pecho: 0, estomago: 0, abdomen: 0, caderas: 0, muslos: 0, rodillas: 0, piernas: 0, pies: 0 };
    planets.forEach(p => {
        const assoc = getSignAssociations()[p.sign];
        if (!assoc) return;
        if (['Cabeza', 'Cara', 'Cerebro'].some(o => assoc.organs.includes(o))) zones.cabeza += 15;
        if (['Cuello', 'Garganta'].some(o => assoc.organs.includes(o))) zones.cuello += 15;
        if (['Hombros', 'Brazos'].some(o => assoc.organs.includes(o))) zones.hombros += 15;
        if (['Corazón', 'Pecho'].some(o => assoc.organs.includes(o))) zones.pecho += 15;
        if (['Estómago', 'Páncreas'].some(o => assoc.organs.includes(o))) zones.estomago += 15;
        if (['Intestinos', 'Abdomen'].some(o => assoc.organs.includes(o))) zones.abdomen += 15;
        if (['Caderas', 'Órganos reproductores'].some(o => assoc.organs.includes(o))) zones.caderas += 15;
        if (['Muslos', 'Hígado'].some(o => assoc.organs.includes(o))) zones.muslos += 15;
        if (['Rodillas', 'Articulaciones'].some(o => assoc.organs.includes(o))) zones.rodillas += 15;
        if (['Piernas'].some(o => assoc.organs.includes(o))) zones.piernas += 15;
        if (['Pies'].some(o => assoc.organs.includes(o))) zones.pies += 15;
    });
    Object.keys(zones).forEach(z => { zones[z] = Math.min(100, zones[z]); });
    return zones;
}

function generateDiseaseList(planets) {
    const diseases = [];
    planets.forEach(p => {
        const assoc = getSignAssociations()[p.sign];
        if (!assoc) return;
        assoc.vulnerabilities.forEach(vuln => {
            const existing = diseases.find(d => d.name === vuln);
            if (existing) existing.probability += 5;
            else {
                const bioInfo = buscarBiodecodificacion(vuln);
                diseases.push({
                    name: vuln, type: t('diseaseTypeAstrological'), probability: 30, severity: t('severityMedium'),
                    factors: `${translatePlanet(p.name)} ${t('inPreposition')} ${translateSign(p.sign)}`, planet: p.name, sign: p.sign,
                    biodescodificacion: bioInfo ? {
                        conflicto: bioInfo.conflicto,
                        fuentes: bioInfo.fuentes,
                        consejos: bioInfo.consejos
                    } : null
                });
            }
        });
    });
    diseases.sort((a, b) => b.probability - a.probability);
    return diseases.slice(0, 15);
}

function calculateOverallVitality(planets, aspects) {
    let score = 50;
    planets.forEach(p => {
        if (p.symbol === '☉' || p.symbol === '♃') score += 5;
        if (p.symbol === '♄' || p.symbol === '♂') score -= 3;
    });
    const tensionAspects = aspects.filter(a => a.type === 'Cuadratura' || a.type === 'Oposición');
    score -= tensionAspects.length * 3;
    const harmonyAspects = aspects.filter(a => a.type === 'Trígono' || a.type === 'Sextil');
    score += harmonyAspects.length * 2;
    score = Math.min(100, Math.max(0, score));
    return {
        score,
        level: score >= 70 ? t('vitalityHigh') : score >= 40 ? t('vitalityModerate') : t('vitalityLow'),
        description: score >= 70 ? t('vitalityHighDesc') : score >= 40 ? t('vitalityModerateDesc') : t('vitalityLowDesc')
    };
}

function calculateElementBalance(planets) {
    const counts = { Fuego: 0, Tierra: 0, Aire: 0, Agua: 0 };
    planets.forEach(p => { if (counts[p.element] !== undefined) counts[p.element]++; });
    const total = planets.length || 1;
    const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    return {
        balance: Object.entries(counts).map(([element, count]) => ({ element, count, percentage: Math.round((count / total) * 100) })),
        dominantElement: dominant,
        elementData: getElementHealth()[dominant] || { description: '', strengths: [], weaknesses: [], recommendations: [] }
    };
}

function calculateModalityBalance(planets) {
    const counts = { Cardinal: 0, Fijo: 0, Mutable: 0 };
    planets.forEach(p => { if (counts[p.modality] !== undefined) counts[p.modality]++; });
    const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    return {
        counts, dominantModality: dominant,
        data: getModalityHealth()[dominant] || { description: '', healthFocus: '', recommendations: '' }
    };
}

function analyzeHealthHouses(chart) {
    const result = { houses: {}, rulerOfVI: null };

    for (const h of HEALTH_HOUSES) {
        const houseCusp = chart.houses.cusps[h - 1];
        const housePlanets = [];
        chart.planets.forEach(p => {
            for (let i = 0; i < 12; i++) {
                const start = chart.houses.cusps[i].degree;
                const end = chart.houses.cusps[(i + 1) % 12].degree;
                const inHouse = start < end ? (p.longitude >= start && p.longitude < end) : (p.longitude >= start || p.longitude < end);
                if (inHouse && i === h - 1) housePlanets.push(p);
            }
        });

        result.houses[h] = {
            house: h,
            info: getHouseHealth()[h],
            cuspSign: houseCusp.sign,
            cuspSymbol: houseCusp.signSymbol,
            planets: housePlanets.map(p => ({ name: p.name, symbol: p.symbol, sign: p.sign })),
            isOccupied: housePlanets.length > 0
        };
    }

    // Find ruler of House VI
    const viSign = chart.houses.cusps[5].sign;
    const rulership = { 'Aries': 'Marte', 'Tauro': 'Venus', 'Géminis': 'Mercurio', 'Cáncer': 'Luna', 'Leo': 'Sol', 'Virgo': 'Mercurio', 'Libra': 'Venus', 'Escorpio': 'Plutón', 'Sagitario': 'Júpiter', 'Capricornio': 'Saturno', 'Acuario': 'Urano', 'Piscis': 'Neptuno' };
    const rulerName = rulership[viSign];
    if (rulerName) {
        const rulerPlanet = chart.planets.find(p => p.name === rulerName);
        if (rulerPlanet) {
            result.rulerOfVI = {
                name: rulerName,
                symbol: rulerPlanet.symbol,
                sign: rulerPlanet.sign,
                signSymbol: rulerPlanet.signSymbol,
                degree: rulerPlanet.degree + '°' + rulerPlanet.minute + "'",
                isRetrograde: rulerPlanet.isRetrograde,
                dignity: getDignity(rulerName, rulerPlanet.sign)
            };
        }
    }

    return result;
}

function classifyAcuteChronic(planets) {
    const acute = [];
    const chronic = [];

    planets.forEach(p => {
        const h = getPlanetHealth()[p.name];
        if (!h) return;

        if (p.name === 'Marte' || p.name === 'Urano') {
            acute.push({ planet: p.name, symbol: p.symbol, sign: p.sign, type: t('conditionAcute'), description: h.acute });
        }
        if (p.name === 'Saturno' || p.name === 'Plutón') {
            chronic.push({ planet: p.name, symbol: p.symbol, sign: p.sign, type: t('conditionChronic'), description: h.chronic });
        }
        if (p.name === 'Sol' || p.name === 'Júpiter') {
            chronic.push({ planet: p.name, symbol: p.symbol, sign: p.sign, type: t('conditionChronicPotential'), description: h.chronic });
        }
        if (p.name === 'Neptuno') {
            acute.push({ planet: p.name, symbol: p.symbol, sign: p.sign, type: t('conditionPsychosomatic'), description: h.chronic });
        }
    });

    return { acute, chronic };
}

function calculateVulnerabilityIndex(natalChart, transitData) {
    let score = 0;
    const factors = [];

    // Check Saturn transits to Sun, Moon, Ascendant
    const saturnTransits = (transitData.aspects || []).filter(asp =>
        asp.transitPlanet === 'Saturno' && (asp.natalPlanet === 'Sol' || asp.natalPlanet === 'Luna')
    );
    saturnTransits.forEach(asp => {
        if (asp.type === 'Cuadratura' || asp.type === 'Oposición') {
            score += 30;
            factors.push({ planet: 'Saturno', target: asp.natalPlanet, aspect: asp.type, impact: t('vulnImpactSaturn') });
        }
    });

    // Check Mars transits to House VI ruler or planets
    const marsTransits = (transitData.aspects || []).filter(asp =>
        asp.transitPlanet === 'Marte'
    );
    marsTransits.forEach(asp => {
        if (asp.type === 'Cuadratura' || asp.type === 'Oposición') {
            score += 20;
            factors.push({ planet: 'Marte', target: asp.natalPlanet, aspect: asp.type, impact: t('vulnImpactMars') });
        }
    });

    // Check Neptune confusion
    const neptuneTransits = (transitData.aspects || []).filter(asp =>
        asp.transitPlanet === 'Neptuno' && (asp.type === 'Cuadratura' || asp.type === 'Oposición')
    );
    neptuneTransits.forEach(asp => {
        score += 15;
        factors.push({ planet: 'Neptuno', target: asp.natalPlanet, aspect: asp.type, impact: t('vulnImpactNeptune') });
    });

    // Check Jupiter positive influence
    const jupiterTransits = (transitData.aspects || []).filter(asp =>
        asp.transitPlanet === 'Júpiter' && (asp.type === 'Trígono' || asp.type === 'Sextil')
    );
    jupiterTransits.forEach(asp => {
        score -= 10;
        factors.push({ planet: 'Júpiter', target: asp.natalPlanet, aspect: asp.type, impact: t('vulnImpactJupiter') });
    });

    score = Math.min(100, Math.max(0, score));

    let level, description;
    if (score <= 15) {
        level = t('vulnLevel1');
        description = t('vulnLevel1Desc');
    } else if (score <= 40) {
        level = t('vulnLevel2');
        description = t('vulnLevel2Desc');
    } else if (score <= 65) {
        level = t('vulnLevel3');
        description = t('vulnLevel3Desc');
    } else {
        level = t('vulnLevel4');
        description = t('vulnLevel4Desc');
    }

    return { score, level, description, factors };
}

function interpretTransitHealth(natalChart, transitData) {
    const interpretations = [];
    const aspects = transitData.aspects || [];

    aspects.forEach(a => {
        const key = a.transitPlanet;
        if (getTransitInterpretations()[key] && getTransitInterpretations()[key][a.type]) {
            const interp = getTransitInterpretations()[key][a.type];
            interpretations.push({
                transitPlanet: a.transitPlanet,
                transitSymbol: a.transitSymbol,
                natalPlanet: a.natalPlanet,
                natalSymbol: a.natalSymbol,
                aspect: a.type,
                aspectSymbol: a.symbol,
                level: interp.level,
                interpretation: interp.desc,
                orb: a.orb
            });
        }
    });

    interpretations.sort((a, b) => {
        const levelOrder = { 'I': 1, 'II': 2, 'III': 3, 'IV': 4 };
        return (levelOrder[b.level] || 0) - (levelOrder[a.level] || 0);
    });

    return interpretations;
}

function classifyAcuteChronicTransits(transitData) {
    const acute = [];
    const chronic = [];

    (transitData.planets || []).forEach(p => {
        if (p.name === 'Marte' && p.isRetrograde) {
            acute.push({ planet: p.name, symbol: p.symbol, note: t('transitMarsRetrograde') });
        }
        if (p.name === 'Saturno' && p.isRetrograde) {
            chronic.push({ planet: p.name, symbol: p.symbol, note: t('transitSaturnRetrograde') });
        }
    });

    return { acute, chronic };
}

function generateRecommendations(overallVitality, elementBalance, bodyRiskZones, healthHousesAnalysis) {
    const recs = [];

    if (overallVitality.score < 40) {
        recs.push({ priority: t('priorityHigh'), category: t('categoryGeneralHealth'), recommendation: t('recLowVitality') });
    } else if (overallVitality.score < 70) {
        recs.push({ priority: t('priorityMedium'), category: t('categoryGeneralHealth'), recommendation: t('recModerateVitality') });
    } else {
        recs.push({ priority: t('priorityLow'), category: t('categoryGeneralHealth'), recommendation: t('recHighVitality') });
    }

    const highRiskZones = Object.entries(bodyRiskZones).filter(([, v]) => v >= 60);
    if (highRiskZones.length >= 3) {
        recs.push({ priority: t('priorityHigh'), category: t('categoryPrevention'), recommendation: t('recHighRiskZones') });
    } else if (highRiskZones.length > 0) {
        recs.push({ priority: t('priorityMedium'), category: t('categoryPrevention'), recommendation: t('recPreventiveAttention') });
    }

    // House VI ruler recommendations
    if (healthHousesAnalysis?.rulerOfVI) {
        const ruler = healthHousesAnalysis.rulerOfVI;
        if (ruler.isRetrograde) {
            recs.push({ priority: t('priorityMedium'), category: t('categoryHouse6'), recommendation: t('recHouse6Retrograde', { ruler: ruler.name }) });
        }
        if (ruler.dignity.state === t('dignityDomicile') || ruler.dignity.state === t('dignityExaltation')) {
            recs.push({ priority: t('priorityLow'), category: t('categoryHouse6'), recommendation: t('recHouse6Good', { ruler: ruler.name, state: ruler.dignity.state }) });
        }
        if (ruler.dignity.state === t('dignityDetriment') || ruler.dignity.state === t('dignityFall')) {
            recs.push({ priority: t('priorityMedium'), category: t('categoryHouse6'), recommendation: t('recHouse6Bad', { ruler: ruler.name, state: ruler.dignity.state }) });
        }
    }

    const dominant = elementBalance.dominantElement;
    if (dominant === 'Fuego') recs.push({ priority: t('priorityMedium'), category: t('categoryElement'), recommendation: t('recElementFire') });
    else if (dominant === 'Tierra') recs.push({ priority: t('priorityMedium'), category: t('categoryElement'), recommendation: t('recElementEarth') });
    else if (dominant === 'Aire') recs.push({ priority: t('priorityMedium'), category: t('categoryElement'), recommendation: t('recElementAir') });
    else if (dominant === 'Agua') recs.push({ priority: t('priorityMedium'), category: t('categoryElement'), recommendation: t('recElementWater') });

    return recs;
}
