import { DAILY_TRANSIT_DATABASE, ASPECT_MODIFIERS, PLANET_RITUAL_DATA } from './daily-transit-database.js';

export function getDayRiskLevel(score) {
  if (score >= 75) return { color: '#DC2626', label: 'Muy Alto', textColor: '#FFFFFF' };
  if (score >= 50) return { color: '#EA580C', label: 'Alto', textColor: '#FFFFFF' };
  if (score >= 25) return { color: '#D97706', label: 'Moderado', textColor: '#000000' };
  return { color: '#16A34A', label: 'Bajo', textColor: '#FFFFFF' };
}

function clampScore(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function calculateOrbFactor(orb, maxOrb = 10) {
  return 1 + (1 - Math.min(orb, maxOrb) / maxOrb);
}

function getIntensityLevel(orb, aspectType) {
  if (orb <= 0.5) return 'pico';
  if (orb <= 2 && (aspectType === 'Conjunción' || aspectType === 'Oposición' || aspectType === 'Cuadratura')) return 'fuerte';
  if (orb <= 4) return 'moderado';
  return 'suave';
}

function selectDescriptionByRisk(descriptions, riskScore) {
  if (riskScore > 60) return descriptions.high;
  if (riskScore >= 30) return descriptions.medium;
  return descriptions.low;
}

function getRitualData(transitPlanet, natalPlanet) {
  const transitData = PLANET_RITUAL_DATA[transitPlanet];
  const natalData = PLANET_RITUAL_DATA[natalPlanet];
  if (!transitData && !natalData) {
    return { stones: [], hours: '', instructions: '' };
  }
  if (transitData && natalData) {
    return {
      stones: [...new Set([...transitData.stones, ...natalData.stones])].slice(0, 3),
      hours: `${transitData.hours} o ${natalData.hours}`,
      instructions: `Colocar piedras de ${transitPlanet} y ${natalPlanet}. ${transitData.instructions}`
    };
  }
  const data = transitData || natalData;
  return {
    stones: data.stones,
    hours: data.hours,
    instructions: data.instructions
  };
}

function processAspect(aspect) {
  const { transitPlanet, transitSymbol, natalPlanet, natalSymbol, type, orb } = aspect;

  const dbEntry = DAILY_TRANSIT_DATABASE[transitPlanet]?.[natalPlanet];
  const aspectModifier = ASPECT_MODIFIERS[type];
  if (!dbEntry || !aspectModifier) return null;

  const riskBase = dbEntry.riskBase;
  const riskMult = aspectModifier.riskMult;
  const orbFactor = calculateOrbFactor(orb);
  const rawRisk = riskBase * riskMult * orbFactor;
  const riskScore = clampScore(rawRisk);

  const behavioralDesc = selectDescriptionByRisk(dbEntry.behavioral, riskScore);
  const socialDesc = selectDescriptionByRisk(dbEntry.social, riskScore);

  const riskArea = {
    behavioral: riskScore > 60 ? 'alto' : riskScore >= 30 ? 'moderado' : 'bajo',
    social: riskScore > 60 ? 'alto' : riskScore >= 30 ? 'moderado' : 'bajo',
    diet: riskScore > 50 ? 'alto' : riskScore >= 20 ? 'moderado' : 'bajo',
    exercise: riskScore > 50 ? 'alto' : riskScore >= 20 ? 'moderado' : 'bajo'
  };

  return {
    transitPlanet,
    transitSymbol,
    natalPlanet,
    natalSymbol,
    type,
    symbol: getAspectSymbol(type),
    orb,
    exactness: clampScore((1 - Math.min(orb, 10) / 10) * 100),
    riskArea,
    behavioral: behavioralDesc,
    social: socialDesc,
    diet: dbEntry.diet,
    exercise: dbEntry.exercise,
    mitigation: dbEntry.mitigation,
    credibility: dbEntry.credibility,
    quote: dbEntry.quote,
    alchemy: dbEntry.alchemy,
    decree: dbEntry.decree,
    ritual: {
      ...dbEntry.ritual,
      ...getRitualData(transitPlanet, natalPlanet)
    },
    intensity: getIntensityLevel(orb, type)
  };
}

function getAspectSymbol(type) {
  const symbols = {
    'Conjunción': '☌',
    'Oposición': '☍',
    'Cuadratura': '□',
    'Trígono': '△',
    'Sextil': '⚹'
  };
  return symbols[type] || '•';
}

function identifySignChanges(day) {
  const changes = [];
  if (!day.planetPositions) return changes;
  const prevPositions = day.previousPositions || [];
  for (const pos of day.planetPositions) {
    const prev = prevPositions.find(p => p.name === pos.name);
    if (prev && prev.sign !== pos.sign) {
      changes.push({
        planet: pos.name,
        symbol: pos.symbol,
        fromSign: prev.sign,
        fromSymbol: prev.signSymbol,
        toSign: pos.sign,
        toSymbol: pos.signSymbol
      });
    }
  }
  return changes;
}

function identifyStations(day) {
  const stations = [];
  if (!day.planetPositions) return stations;
  for (const pos of day.planetPositions) {
    if (pos.stationaryRetrograde || pos.stationaryDirect) {
      stations.push({
        planet: pos.name,
        symbol: pos.symbol,
        type: pos.stationaryRetrograde ? 'Retrógrado' : 'Directo',
        sign: pos.sign,
        signSymbol: pos.signSymbol
      });
    }
  }
  return stations;
}

function buildWeeklyForecast(dailyReport) {
  const weeks = [];
  for (let i = 0; i < dailyReport.length; i += 7) {
    const weekDays = dailyReport.slice(i, i + 7);
    const avgRisk = weekDays.reduce((sum, d) => sum + d.totalRisk, 0) / weekDays.length;

    const planetCounts = {};
    const aspectCounts = {};
    for (const day of weekDays) {
      for (const asp of day.aspects) {
        planetCounts[asp.transitPlanet] = (planetCounts[asp.transitPlanet] || 0) + 1;
        aspectCounts[asp.type] = (aspectCounts[asp.type] || 0) + 1;
      }
    }

    const dominantPlanet = Object.entries(planetCounts)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || 'Ninguno';
    const dominantAspect = Object.entries(aspectCounts)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || 'Ninguno';

    const riskLevel = getDayRiskLevel(avgRisk);
    let summary;
    if (avgRisk > 60) {
      summary = `Semana intensa dominada por ${dominantPlanet}. Se recomienda precaución y uso de rituales de protección.`;
    } else if (avgRisk >= 30) {
      summary = `Semana moderada con influencia de ${dominantPlanet}. Momento de equilibrio entre acción y reflexión.`;
    } else {
      summary = `Semana tranquila. Energías favorables para la planificación y el autocuidado.`;
    }

    weeks.push({
      week: Math.floor(i / 7) + 1,
      startDay: weekDays[0].dayNum,
      endDay: weekDays[weekDays.length - 1].dayNum,
      avgRisk: clampScore(avgRisk),
      dominantPlanet,
      dominantAspect,
      summary
    });
  }
  return weeks;
}

function identifyRituals(dailyReport) {
  const bestDays = [];
  const retrogradeDays = [];
  const fullMoonDays = [];

  for (const day of dailyReport) {
    const hasRitualAspect = day.aspects.some(a =>
      a.intensity === 'pico' || a.intensity === 'fuerte'
    );

    if (hasRitualAspect && day.totalRisk < 60) {
      const mainAsp = day.aspects
        .filter(a => a.intensity === 'pico' || a.intensity === 'fuerte')
        .sort((a, b) => a.orb - b.orb)[0];

      if (mainAsp) {
        const ritualData = PLANET_RITUAL_DATA[mainAsp.transitPlanet] || {};
        bestDays.push({
          dayNum: day.dayNum,
          planet: mainAsp.transitPlanet,
          stone: ritualData.stones?.[0] || 'Cuarzo transparente',
          hour: ritualData.hour || 'mediodía',
          instructions: mainAsp.ritual?.instructions || 'Realizar meditación con las piedras correspondientes.'
        });
      }
    }

    if (day.planetPositions) {
      for (const pos of day.planetPositions) {
        if (pos.name === 'Neptuno' && pos.isRetrograde) {
          retrogradeDays.push({
            dayNum: day.dayNum,
            planet: 'Neptuno',
            effect: 'Energía espiritual confusa. Evitar decisiones importantes.'
          });
        }
        if (pos.name === 'Plutón' && pos.isRetrograde) {
          retrogradeDays.push({
            dayNum: day.dayNum,
            planet: 'Plutón',
            effect: 'Transformación interior profunda. Momento de introspección.'
          });
        }
        if (pos.name === 'Urano' && pos.isRetrograde) {
          retrogradeDays.push({
            dayNum: day.dayNum,
            planet: 'Urano',
            effect: 'Cambios inesperados en la rutina. Mantener flexibilidad.'
          });
        }
        if (pos.name === 'Saturno' && pos.isRetrograde) {
          retrogradeDays.push({
            dayNum: day.dayNum,
            planet: 'Saturno',
            effect: 'Revisión de compromisos y estructuras. Buena para planificación.'
          });
        }
        if (pos.name === 'Júpiter' && pos.isRetrograde) {
          retrogradeDays.push({
            dayNum: day.dayNum,
            planet: 'Júpiter',
            effect: 'Expansión interior. Momento de crecimiento espiritual.'
          });
        }
        if (pos.name === 'Marte' && pos.isRetrograde) {
          retrogradeDays.push({
            dayNum: day.dayNum,
            planet: 'Marte',
            effect: 'Energía contenida. Evitar acciones impulsivas.'
          });
        }
        if (pos.name === 'Venus' && pos.isRetrograde) {
          retrogradeDays.push({
            dayNum: day.dayNum,
            planet: 'Venus',
            effect: 'Revisión de relaciones y valores. No iniciar relaciones nuevas.'
          });
        }
        if (pos.name === 'Mercurio' && pos.isRetrograde) {
          retrogradeDays.push({
            dayNum: day.dayNum,
            planet: 'Mercurio',
            effect: 'Retrógrado de Mercurio. Evitar contratos y viajes importantes.'
          });
        }
      }
    }

    if (day.signChanges?.length > 0) {
      const lunaChange = day.signChanges.find(c => c.planet === 'Luna');
      if (lunaChange) {
        fullMoonDays.push({
          dayNum: day.dayNum,
          planet: 'Luna',
          sign: lunaChange.toSign,
          effect: `La Luna cambia a ${lunaChange.toSign}. Las emociones se intensifican.`
        });
      }
    }
  }

  return { bestDays, fullMoonDays, retrogradeDays };
}

function generateSummary(dailyReport) {
  if (dailyReport.length === 0) {
    return {
      overallRisk: 0,
      riskLevel: 'Bajo',
      peakDays: [],
      safestDays: [],
      description: 'No hay datos de tránsitos disponibles para este período.'
    };
  }

  const totalRisk = dailyReport.reduce((sum, d) => sum + d.totalRisk, 0);
  const overallRisk = clampScore(totalRisk / dailyReport.length);
  const riskInfo = getDayRiskLevel(overallRisk);

  const sorted = [...dailyReport].sort((a, b) => b.totalRisk - a.totalRisk);
  const peakDays = sorted.slice(0, 3).map(d => ({
    dayNum: d.dayNum,
    date: d.date,
    risk: d.totalRisk,
    reason: d.aspects.length > 0
      ? `${d.aspects.length} aspecto(s) activo(s) — ${d.aspects.map(a => `${a.transitPlanet} ${a.type} ${a.natalPlanet}`).join(', ')}`
      : 'Múltiples influencias planetarias'
  }));

  const safestDays = sorted.slice(-3).reverse().map(d => ({
    dayNum: d.dayNum,
    date: d.date,
    risk: d.totalRisk
  }));

  let description;
  if (overallRisk > 75) {
    description = 'Mes de muy alto riesgo con múltiples aspectos tensos. Se requiere máxima precaución y uso regular de rituales de protección. Evitar decisiones importantes y situaciones de conflicto.';
  } else if (overallRisk > 50) {
    description = 'Mes de riesgo alto con varios aspectos desafiantes. Se recomienda prudencia, meditación diaria y uso de piedras protectoras. Momento de canalizar la energía en actividades constructivas.';
  } else if (overallRisk > 25) {
    description = 'Mes de riesgo moderado con equilibrio entre aspectos armónicos y tensos. Buen momento para la planificación y el crecimiento personal, manteniendo la atención en los días más intensos.';
  } else {
    description = 'Mes tranquilo con predominio de aspectos armónicos. Energías favorables para iniciar proyectos, fortalecer relaciones y cuidar la salud. Aprovechar para establecer nuevas rutinas.';
  }

  return {
    overallRisk,
    riskLevel: riskInfo.label,
    peakDays,
    safestDays,
    description
  };
}

export function analyzeDailyTransits(dailyTransits, natalChart) {
  const dailyReport = [];

  for (let i = 0; i < dailyTransits.length; i++) {
    const day = dailyTransits[i];
    const dayNum = i + 1;
    const date = day.date || `Día ${dayNum}`;

    const processedAspects = [];
    let dayTotalRisk = 0;

    if (day.aspects && Array.isArray(day.aspects)) {
      for (const aspect of day.aspects) {
        const processed = processAspect(aspect);
        if (processed) {
          processedAspects.push(processed);
          dayTotalRisk += processed.riskScore;
        }
      }
    }

    const aspectCount = processedAspects.length;
    if (aspectCount > 0) {
      const avgAspectRisk = dayTotalRisk / aspectCount;
      const aspectCountBonus = Math.min(aspectCount * 2, 20);
      dayTotalRisk = clampScore(avgAspectRisk + aspectCountBonus);
    }

    const signChanges = identifySignChanges(day);
    const stations = identifyStations(day);

    dailyReport.push({
      dayNum,
      date,
      riskScore: dayTotalRisk,
      riskLevel: getDayRiskLevel(dayTotalRisk).label,
      aspects: processedAspects,
      totalRisk: dayTotalRisk,
      signChanges,
      stations,
      planetPositions: day.planetPositions || []
    });
  }

  const summary = generateSummary(dailyReport);
  const weeklyForecast = buildWeeklyForecast(dailyReport);
  const rituals = identifyRituals(dailyReport);

  return {
    summary,
    dailyReport,
    weeklyForecast,
    rituals
  };
}
