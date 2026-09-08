/**
 * Diccionario de Biodescodificación
 * Fuente: "Diccionario de Biodescodificación" (738 páginas)
 * Autores: Enric Corbera, Louise L. Hay, Jacques Martel, Lisa Bourbeau, Dr. Hamer
 * 
 * Este glosario se utiliza para enriquecer el análisis de salud astrológico
 * con información sobre las causas emocionales de las enfermedades.
 */

export const BIODECODIFICACION = {
  // ============================================================
  // SISTEMA RESPIRATORIO
  // ============================================================
  
  ASMA: {
    nombre: "Asma",
    categoria: "respiratorio",
    conflicto: "Miedo a la vida. Necesidad de ser protegido. Represión de llanto.",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      louiseHay: {
        causa: "Miedo a la vida. Incapacidad de respirar por sí mismo. Se siente reprimido.",
        afirmacion: "Amo la vida. Respiro libre y plenamente. Estoy a salvo."
      },
      jacquesMartel: {
        causa: "Sentimiento de ahogo en una situación. Dificultad para expresar algo."
      },
      lisaBourbeau: {
        bloqueoFisico: "El asma es una dificultad para respirar que se manifiesta en ataques.",
        bloqueoEmocional: "La persona que padece asma teme vivir la vida y sentirse libre. Busca protección.",
        bloqueoMental: "Debes aprender a respirar la vida y a confiar en ti mismo."
      }
    },
    consejos: [
      "Permite el llanto para liberar emociones reprimidas",
      "Practica ejercicios de respiración consciente",
      "Busca ambientes seguros para expresarte",
      "Trabaja la confianza en ti mismo"
    ]
  },

  BRONQUITIS: {
    nombre: "Bronquitis",
    categoria: "respiratorio",
    conflicto: "Conflicto de hogar. Ambiente familiar tenso. Amenaza en el territorio.",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      louiseHay: {
        causa: "Ambiente familiar enojado. Disputas. Un proyecto que no funciona.",
        afirmacion: "Creo un ambiente de paz y armonía en mi hogar."
      },
      jacquesMartel: {
        causa: "Situación familiar que me irrita o me preocupa."
      }
    },
    consejos: [
      "Resuelve conflictos familiares pendientes",
      "Crea un ambiente de paz en el hogar",
      "Expresa tus sentimientos de forma constructiva"
    ]
  },

  NEUMONIA: {
    nombre: "Neumonía",
    categoria: "respiratorio",
    conflicto: "Tristeza profunda. Sentimiento de muerte. Desesperanza.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Tristeza. Enfermedad del hogar. Un sentimiento de desesperanza.",
        afirmacion: "Doy y recibo energía vital. Mi hogar está lleno de amor."
      }
    },
    consejos: [
      "Permite el llanto para liberar tristeza",
      "Busca apoyo emocional",
      "Conecta con personas que te sumen"
    ]
  },

  // ============================================================
  // SISTEMA DIGESTIVO
  // ============================================================

  GASTRITIS: {
    nombre: "Gastritis",
    categoria: "digestivo",
    conflicto: "Ira reprimida. Inquietud. Miedo. Sobrecarga.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Miedo. Inquietud. Sensación de estar atacado.",
        afirmacion: "Estoy a salvo. Confío en el proceso de la vida."
      },
      jacquesMartel: {
        causa: "Algo que me saca de quicio y no puedo digerir."
      }
    },
    consejos: [
      "Identifica qué te genera inquietud",
      "Aprende a gestionar la ira",
      "Come despacio y con atención"
    ]
  },

  ULCERA_ESTOMACAL: {
    nombre: "Úlcera Estomacal",
    categoria: "digestivo",
    conflicto: "Miedo profundo. Autocastigo. Necesidad de ser herido.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Miedo. Miedo al castigo. Creencia de no ser bueno.",
        afirmacion: "Me amo y me apruebo. Estoy a salvo."
      }
    },
    consejos: [
      "Trabaja la autoestima",
      "Libera el miedo al castigo",
      "Practica el perdón hacia ti mismo"
    ]
  },

  COLON_IRRITABLE: {
    nombre: "Colon Irritable",
    categoria: "digestivo",
    conflicto: "Miedo. Sobrecarga. Dificultad para soltar.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Miedo. Sentirse atrapado. No soltar el pasado.",
        affirmacion: "Suelto el pasado con facilidad. Fluyo con la vida."
      }
    },
    consejos: [
      "Aprende a soltar lo que no puedes controlar",
      "Practica técnicas de relajación",
      "Confía en tu capacidad de adaptación"
    ]
  },

  COLITIS: {
    nombre: "Colitis",
    categoria: "digestivo",
    conflicto: "Inseguridad. Falta de apoyo. Sensación de no tener recursos.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Inseguridad. Representa la eliminación de lo no deseado.",
        affirmacion: "Suelto todo lo que no me sirve. Estoy a salvo."
      }
    },
    consejos: [
      "Fortalece tu sensación de seguridad",
      "Busca apoyo cuando lo necesites",
      "Confía en tus recursos internos"
    ]
  },

  HEPATITIS: {
    nombre: "Hepatitis",
    categoria: "digestivo",
    conflicto: "Ira. Resentimiento. Fracaso. Insatisfacción.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Resistencia a los cambios. Rebelión. Odio. Ira.",
        afirmacion: "Mi mente está en paz. Mi corazón está en calma."
      }
    },
    consejos: [
      "Libera la ira de forma constructiva",
      "Acepta los cambios como parte de la vida",
      "Trabaja el resentimiento"
    ]
  },

  HEMORROIDES: {
    nombre: "Hemorroides",
    categoria: "digestivo",
    conflicto: "Carga pesada. Resentimiento. Miedo a soltar.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Carga pesada. Sentirse maltratado. Culpa.",
        affirmacion: "Suelto todo lo que ya no me sirve."
      }
    },
    consejos: [
      "Identifica las cargas que llevas",
      "Aprende a delegar",
      "Libera el resentimiento"
    ]
  },

  APENDICITIS: {
    nombre: "Apendicitis",
    categoria: "digestivo",
    conflicto: "Miedo. Inseguridad. Necesidad de protección.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Miedo. Inseguridad. Sentirse vulnerable.",
        affirmacion: "Estoy a salvo. Confío en la vida."
      }
    },
    consejos: [
      "Trabaja la sensación de seguridad",
      "Permite que otros te protejan",
      "Confía en tu capacidad de superar obstáculos"
    ]
  },

  PANCREAS: {
    nombre: "Páncreas",
    categoria: "digestivo",
    conflicto: "Dificultad para digerir la vida. Falta de dulzura. Enfado.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Rechazo a la vida. Amargura. Falta de dulzura.",
        affirmacion: "La vida es dulce y maravillosa."
      }
    },
    consejos: [
      "Busca la dulzura en tu vida",
      "Disfruta de los pequeños momentos",
      "Practica la gratitud"
    ]
  },

  // ============================================================
  // SISTEMA CARDIOVASCULAR
  // ============================================================

  HIPERTENSION: {
    nombre: "Hipertensión",
    categoria: "cardiovascular",
    conflicto: "Estrés crónico. Problemas emocionales no resueltos. Miedo.",
    etapa: "3ra Etapa (Movimiento)",
    fuentes: {
      louiseHay: {
        causa: "Problemas emocionales no resueltos. Antiguas fallas de la naturaleza.",
        afirmacion: "Yo soy la atmósfera pacífica. Mi vida es serena."
      }
    },
    consejos: [
      "Practica técnicas de relajación",
      "Resuelve conflictos emocionales pendientes",
      "Medita regularmente"
    ]
  },

  INFARTO: {
    nombre: "Infarto",
    categoria: "cardiovascular",
    conflicto: "Ausencia de alegría. Amargura. Desesperanza.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Conflictos prolongados. Alegría reprimida.",
        afirmacion: "Doy y recibo amor plenamente. Mi corazón está lleno de alegría."
      }
    },
    consejos: [
      "Busca la alegría en tu vida",
      "Expresa tu amor y cariño",
      "Conecta con tu corazón"
    ]
  },

  ARRITMIA: {
    nombre: "Arritmia",
    categoria: "cardiovascular",
    conflicto: "Estrés. Miedo. Inseguridad. Falta de confianza.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Estrés. Miedo. Inseguridad.",
        affirmacion: "Mi corazón late al ritmo de la paz."
      }
    },
    consejos: [
      "Reduce el estrés en tu vida",
      "Practica ejercicios de respiración",
      "Fortalece tu confianza"
    ]
  },

  ANGINA_DE_PECHO: {
    nombre: "Angina de Pecho",
    categoria: "cardiovascular",
    conflicto: "Tristeza profunda. Desesperanza. Falta de amor.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Tristeza. Desesperanza. Falta de amor propio.",
        affirmacion: "Mi corazón está lleno de amor. Amo la vida."
      }
    },
    consejos: [
      "Trabaja el amor propio",
      "Permite el llanto para liberar tristeza",
      "Busca experiencias de alegría"
    ]
  },

  COLESTEROL: {
    nombre: "Colesterol Alto",
    categoria: "cardiovascular",
    conflicto: "Cerrazón al flujo de la vida. Dificultad para recibir.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Cerrazón al flujo de la vida. Falta de alegría.",
        affirmacion: "Fluyo con la vida. La vida me trae alegría."
      }
    },
    consejos: [
      "Abre tu corazón a recibir",
      "Busca experiencias de placer",
      "Permite que la vida fluya"
    ]
  },

  // ============================================================
  // SISTEMA MUSCULOESQUELÉTICO
  // ============================================================

  ARTRITIS: {
    nombre: "Artritis",
    categoria: "musculoesqueletico",
    conflicto: "Criticismo. Ira. Fracaso. Auto-criticismo.",
    etapa: "3ra Etapa (Movimiento)",
    fuentes: {
      louiseHay: {
        causa: "Criticismo. Ira. Sentimiento de fracaso.",
        afirmacion: "El amor y la paz fluyen en mi cuerpo."
      },
      jacquesMartel: {
        causa: "Sentimiento de no ser suficiente. Autocriticismo."
      }
    },
    consejos: [
      "Reduce el autocriticismo",
      "Practica la autocompasión",
      "Libera la ira de forma constructiva"
    ]
  },

  ARTROSIS: {
    nombre: "Artrosis",
    categoria: "musculoesqueletico",
    conflicto: "Desgaste emocional. Carga pesada. Falta de apoyo.",
    etapa: "3ra Etapa (Movimiento)",
    fuentes: {
      louiseHay: {
        causa: "Desgaste. Carga pesada. Falta de cariño.",
        affirmacion: "Suelto las cargas. Estoy en paz."
      }
    },
    consejos: [
      "Identifica las cargas que llevas",
      "Busca apoyo cuando lo necesites",
      "Cuida tu cuerpo con运动温和"
    ]
  },

  LUMBALGIA: {
    nombre: "Lumbalgia",
    categoria: "musculoesqueletico",
    conflicto: "Miedo al dinero. Falta de apoyo emocional.",
    etapa: "3ra Etapa (Movimiento)",
    fuentes: {
      louiseHay: {
        causa: "Miedo al dinero. Falta de amor y apoyo.",
        afirmacion: "Confío en la vida. Soy digno de amor y apoyo."
      }
    },
    consejos: [
      "Trabaja tu relación con el dinero",
      "Busca apoyo emocional",
      "Fortalece tu sensación de seguridad"
    ]
  },

  CERVICALGIA: {
    nombre: "Cervicalgia",
    categoria: "musculoesqueletico",
    conflicto: "Rigidez mental. Falta de flexibilidad. Enfado.",
    etapa: "3ra Etapa (Movimiento)",
    fuentes: {
      louiseHay: {
        causa: "Rigidez mental. Falta de flexibilidad.",
        afirmacion: "Soy flexible en mi pensar y en mi sentir."
      }
    },
    consejos: [
      "Practica la flexibilidad mental",
      "Busca diferentes perspectivas",
      "Libera la tensión con estiramientos"
    ]
  },

  FIBROMIALGIA: {
    nombre: "Fibromialgia",
    categoria: "musculoesqueletico",
    conflicto: "Estrés crónico. Auto-agresión. Dolor emocional intenso.",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      louiseHay: {
        causa: "Auto-agresión. Dolor emocional.",
        afirmacion: "Me amo y me apruebo. Mi cuerpo está en paz."
      }
    },
    consejos: [
      "Practica la autocompasión",
      "Busca ayuda profesional",
      "Reduce el estrés en tu vida"
    ]
  },

  OSTEOPOROSIS: {
    nombre: "Osteoporosis",
    categoria: "musculoesqueletico",
    conflicto: "Falta de vitalidad. Desgaste. Desesperanza.",
    etapa: "3ra Etapa (Movimiento)",
    fuentes: {
      louiseHay: {
        causa: "Falta de vitalidad. Desgaste emocional.",
        affirmacion: "Mi cuerpo está lleno de energía y vitalidad."
      }
    },
    consejos: [
      "Fortalece tu vitalidad",
      "Busca experiencias que te llenen",
      "Cuida tu salud ósea"
    ]
  },

  // ============================================================
  // SISTEMA NERVIOSO
  // ============================================================

  MIGRAÑA: {
    nombre: "Migraña",
    categoria: "nervioso",
    conflicto: "Miedo. Auto-castigo. Ira contenida.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Miedo. Auto-castigo. Represión sexual.",
        afirmacion: "Amo y acepto mi ser. Mi mente está en paz."
      }
    },
    consejos: [
      "Libera la ira contenida",
      "Trabaja la autoestima",
      "Permite el placer en tu vida"
    ]
  },

  INSOMNIO: {
    nombre: "Insomnio",
    categoria: "nervioso",
    conflicto: "Miedo. Inseguridad. Falta de confianza en la vida.",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      louiseHay: {
        causa: "Miedo. Desconfianza en el proceso de la vida.",
        affirmacion: "Estoy a salvo. Confío en la vida."
      }
    },
    consejos: [
      "Crea un ritual de relajación antes de dormir",
      "Reduce el estrés diario",
      "Practica la meditación"
    ]
  },

  EPILEPSIA: {
    nombre: "Epilepsia",
    categoria: "nervioso",
    conflicto: "Represión extrema. Necesidad de ser libre. Autocastigo.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Rechazo a la vida. Persecución interna.",
        afirmacion: "Perdono todo y a todos. Estoy en paz."
      }
    },
    consejos: [
      "Busca ayuda profesional",
      "Trabaja la liberación de represiones",
      "Permite que otros te apoyen"
    ]
  },

  PARKINSON: {
    nombre: "Parkinson",
    categoria: "nervioso",
    conflicto: "Miedo. Necesidad de control. Autocastigo extremo.",
    etapa: "3ra Etapa (Movimiento)",
    fuentes: {
      louiseHay: {
        causa: "Miedo. Necesidad de control. Autocastigo.",
        affirmacion: "Suelto la necesidad de controlar. La vida me guía."
      }
    },
    consejos: [
      "Aprende a soltar el control",
      "Practica la aceptación",
      "Busca apoyo emocional"
    ]
  },

  // ============================================================
  // SISTEMA ENDOCRINO
  // ============================================================

  DIABETES: {
    nombre: "Diabetes",
    categoria: "endocrino",
    conflicto: "Falta de dulzura en la vida. Necesidad de control. Amargura.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Negación de la dulzura. Amargura.",
        affirmacion: "Mi vida está llena de dulzura y alegría."
      },
      jacquesMartel: {
        causa: "Necesidad de controlar todo. Falta de placer."
      }
    },
    consejos: [
      "Busca la dulzura en tu vida",
      "Permite el placer y la alegría",
      "Suelta la necesidad de controlar"
    ]
  },

  HIPOTIROIDISMO: {
    nombre: "Hipotiroidismo",
    categoria: "endocrino",
    conflicto: "Represión. Sentirse aplastado. Falta de expresión.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Represión. Sentirse atrapado.",
        afirmacion: "Expreso mi verdad con libertad."
      }
    },
    consejos: [
      "Permite expresarte libremente",
      "Busca espacios de libertad",
      "Trabaja la comunicación"
    ]
  },

  HIPERTIROIDISMO: {
    nombre: "Hipertiroidismo",
    categoria: "endocrino",
    conflicto: "Exceso de actividad. Necesidad de hacer. Miedo.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Exceso de actividad. Necesidad de hacer.",
        affirmacion: "Estoy en calma. Mi cuerpo sabe cuándo descansar."
      }
    },
    consejos: [
      "Aprende a descansar",
      "Reduce el ritmo de vida",
      "Practica la relajación"
    ]
  },

  CORTISONA: {
    nombre: "Problemas de Cortisona",
    categoria: "endocrino",
    conflicto: "Estrés crónico. Falta de apoyo. Desesperanza.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Estrés. Falta de apoyo.",
        affirmacion: "Estoy a salvo. Recibo el apoyo que necesito."
      }
    },
    consejos: [
      "Reduce el estrés en tu vida",
      "Busca apoyo emocional",
      "Practica técnicas de relajación"
    ]
  },

  // ============================================================
  // SISTEMA REPRODUCTOR
  // ============================================================

  ENDOMETRIOSIS: {
    nombre: "Endometriosis",
    categoria: "reproductor",
    conflicto: "Auto-agresión. Conflicto con la feminidad. Rechazo.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Auto-agresión. Falta de amor propio.",
        afirmacion: "Amo y acepto mi cuerpo. Mi cuerpo es perfecto."
      }
    },
    consejos: [
      "Trabaja el amor propio",
      "Acepta tu cuerpo tal como es",
      "Libera la auto-agresión"
    ]
  },

  MIOMA: {
    nombre: "Mioma Uterino",
    categoria: "reproductor",
    conflicto: "Heridas emocionales. Culpa. Represión sexual.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Heridas emocionales. Culpa.",
        afirmacion: "Libero el pasado. Mi útero es un lugar de amor."
      }
    },
    consejos: [
      "Libera heridas emocionales del pasado",
      "Perdona a quienes te hicieron daño",
      "Trabaja la culpa"
    ]
  },

  IMPOTENCIA: {
    nombre: "Impotencia",
    categoria: "reproductor",
    conflicto: "Miedo al fracaso. Necesidad de agradar. Culpa.",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      louiseHay: {
        causa: "Miedo al fracaso. Culpa. Menosprecios.",
        afirmacion: "Amo y acepto mi sexualidad."
      }
    },
    consejos: [
      "Trabaja la confianza en ti mismo",
      "Libera el miedo al fracaso",
      "Acepta tu sexualidad"
    ]
  },

  PROSTATA: {
    nombre: "Problemas de Próstata",
    categoria: "reproductor",
    conflicto: "Envejecimiento. Sentirse viejo. Falta de virilidad.",
    etapa: "3ra Etapa (Movimiento)",
    fuentes: {
      louiseHay: {
        causa: "Envejecimiento. Sentirse viejo.",
        affirmacion: "Cada día soy más joven en espíritu."
      }
    },
    consejos: [
      "Acepta el envejecimiento como parte natural",
      "Mantén una actitud joven",
      "Cuida tu salud sexual"
    ]
  },

  MENSTRUACION_DOLOROSA: {
    nombre: "Menstruación Dolorosa",
    categoria: "reproductor",
    conflicto: "Conflicto con la feminidad. Represión. Autocastigo.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Conflicto con la feminidad. Culpa.",
        afirmacion: "Amo mi feminidad. Mi cuerpo funciona perfectamente."
      }
    },
    consejos: [
      "Acepta y celebra tu feminidad",
      "Libera la represión",
      "Trabaja la autoestima"
    ]
  },

  // ============================================================
  // SISTEMA INMUNOLÓGICO
  // ============================================================

  ALERGIA: {
    nombre: "Alergias",
    categoria: "inmunologico",
    conflicto: "Intolerancia. Rechazo. Necesidad de protección.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Intolerancia. Rechazo a algo o alguien.",
        affirmacion: "Estoy a salvo. Acepto la vida."
      }
    },
    consejos: [
      "Identifica qué rechazas",
      "Trabaja la tolerancia",
      "Permite que otros te protejan"
    ]
  },

  SIDA: {
    nombre: "VIH/SIDA",
    categoria: "inmunologico",
    conflicto: "Rechazo extremo. Culpa profunda. Desesperanza.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Creencia de no ser suficiente. Autocriticismo extremo.",
        affirmacion: "Me amo y me apruebo. Soy digno de amor."
      }
    },
    consejos: [
      "Busca ayuda profesional",
      "Trabaja el amor propio",
      "Permite que otros te apoyen"
    ]
  },

  LUPUS: {
    nombre: "Lupus",
    categoria: "inmunologico",
    conflicto: "Autocastigo extremo. Rechazo a sí mismo.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Autocastigo. Rechazo a sí mismo.",
        affirmacion: "Me amo y me apruebo completamente."
      }
    },
    consejos: [
      "Practica la autocompasión",
      "Busca ayuda profesional",
      "Trabaja el amor propio"
    ]
  },

  // ============================================================
  // SISTEMA INTEGUMENTARIO (PIEL)
  // ============================================================

  PSORIASIS: {
    nombre: "Psoriasis",
    categoria: "piel",
    conflicto: "Heridas emocionales. Sensibilidad excesiva. Autocastigo.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Heridas del pasado. Autocastigo.",
        afirmacion: "Amo y acepto cada parte de mí."
      }
    },
    consejos: [
      "Cuida tu piel emocional",
      "Libera heridas del pasado",
      "Practica la autocompasión"
    ]
  },

  ECZEMA: {
    nombre: "Eccema",
    categoria: "piel",
    conflicto: "Separación. Pérdida. Dolor emocional.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Separación. Pérdida. Dolor emocional.",
        affirmacion: "Estoy a salvo. La vida me ama y me protege."
      }
    },
    consejos: [
      "Trabaja las pérdidas emocionales",
      "Permite el llanto",
      "Busca apoyo"
    ]
  },

  ACNE: {
    nombre: "Acné",
    categoria: "piel",
    conflicto: "Conflicto de identidad. Desvalorización. Rechazo.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Rechazo de uno mismo. Conflicto de identidad.",
        afirmacion: "Me amo y me acepto tal como soy."
      }
    },
    consejos: [
      "Trabaja la identidad personal",
      "Acepta tu apariencia",
      "Libera la desvalorización"
    ]
  },

  URTICARIA: {
    nombre: "Urticaria",
    categoria: "piel",
    conflicto: "Necesidad de protección. Amenaza percibida.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Pequeñas frustraciones. Necesidad de protección.",
        affirmacion: "Estoy a salvo. Mi cuerpo me protege."
      }
    },
    consejos: [
      "Identifica las amenazas percibidas",
      "Permite que otros te protejan",
      "Fortalece tu sensación de seguridad"
    ]
  },

  // ============================================================
  // SISTEMA SENSORIAL
  // ============================================================

  CONJUNTIVITIS: {
    nombre: "Conjuntivitis",
    categoria: "ocular",
    conflicto: "Ira. Rechazo a ver algo. Conflicto visual.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Ira. Rechazo a ver algo.",
        afirmacion: "Veo con amor y compasión."
      }
    },
    consejos: [
      "Identifica qué no quieres ver",
      "Practica la aceptación",
      "Busca diferentes perspectivas"
    ]
  },

  OTITIS: {
    nombre: "Otitis",
    categoria: "auditivo",
    conflicto: "Conflicto auditivo. No querer escuchar. Ira.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Ira. No querer escuchar.",
        affirmacion: "Escucho con amor y compasión."
      }
    },
    consejos: [
      "Identifica qué no quieres escuchar",
      "Practica la escucha activa",
      "Libera la ira"
    ]
  },

  RINITIS: {
    nombre: "Rinitis",
    categoria: "respiratorio",
    conflicto: "Conflicto nasal. Necesidad de llorar. Tristeza.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Llanto. Tristeza.",
        affirmacion: "Permito el llanto para liberar la tristeza."
      }
    },
    consejos: [
      "Permite el llanto",
      "Libera la tristeza",
      "Busca apoyo emocional"
    ]
  },

  // ============================================================
  // PROBLEMAS EMOCIONALES COMUNES
  // ============================================================

  ANSIEDAD: {
    nombre: "Ansiedad",
    categoria: "emocional",
    conflicto: "Miedo. Preocupación excesiva. Falta de confianza.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Falta de confianza en el proceso de la vida.",
        affirmacion: "Estoy a salvo. Confío en la vida."
      },
      lisaBourbeau: {
        bloqueoFisico: "La ansiedad es un temor sin motivo.",
        bloqueoEmocional: "La persona vive en la espera de un peligro impreciso.",
        bloqueoMental: "Debes ser consciente de que es tu imaginación la que toma el poder."
      }
    },
    consejos: [
      "Practica ejercicios de respiración",
      "Medita regularmente",
      "Busca ayuda profesional si es necesario"
    ]
  },

  DEPRESION: {
    nombre: "Depresión",
    categoria: "emocional",
    conflicto: "Tristeza profunda. Desesperanza. Pérdida de sentido.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Rechazo a la vida. Sentirse atrapado.",
        affirmacion: "La vida me ama y me protege."
      }
    },
    consejos: [
      "Busca ayuda profesional",
      "Permite el llanto",
      "Conecta con personas de apoyo"
    ]
  },

  INSOMNIO_EMOCIONAL: {
    nombre: "Insomnio Emocional",
    categoria: "emocional",
    conflicto: "Miedo. Inseguridad. Pensamientos循环.",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      louiseHay: {
        causa: "Miedo. Desconfianza en el proceso de la vida.",
        affirmacion: "Estoy a salvo. Confío en la vida."
      }
    },
    consejos: [
      "Crea un ritual de relajación",
      "Reduce el estrés diario",
      "Practica la meditación"
    ]
  },

  BULIMIA: {
    nombre: "Bulimia",
    categoria: "emocional",
    conflicto: "Miedo. Necesidad de control. Autocastigo.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Miedo. Necesidad de control. Autocastigo.",
        affirmacion: "Amo y acepto mi cuerpo."
      }
    },
    consejos: [
      "Busca ayuda profesional",
      "Trabaja la autoestima",
      "Libera la necesidad de controlar"
    ]
  },

  ANOREXIA: {
    nombre: "Anorexia",
    categoria: "emocional",
    conflicto: "Rechazo a la vida. Necesidad de control extremo.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Rechazo a la vida. Necesidad de control extremo.",
        affirmacion: "Amo la vida y mi cuerpo."
      }
    },
    consejos: [
      "Busca ayuda profesional urgente",
      "Trabaja el amor propio",
      "Permite que otros te apoyen"
    ]
  },

  // ============================================================
  // PROBLEMAS RELACIONALES
  // ============================================================

  CELCIOS: {
    nombre: "Celos",
    categoria: "relacional",
    conflicto: "Inseguridad. Miedo a perder. Desconfianza.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Inseguridad. Miedo a perder.",
        affirmacion: "Estoy a salvo. Confío en mí y en los demás."
      }
    },
    consejos: [
      "Fortalece tu autoestima",
      "Comunica tus necesidades",
      "Trabaja la confianza"
    ]
  },

  CULPA: {
    nombre: "Culpa",
    categoria: "emocional",
    conflicto: "Autocastigo. Repentimiento. Falta de perdón.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Autocastigo. Repentimiento.",
        affirmacion: "Perdono todo y a todos. Estoy en paz."
      }
    },
    consejos: [
      "Practica el perdón",
      "Acepta que todos cometemos errores",
      "Libera el autocastigo"
    ]
  },

  SOLEDAD: {
    nombre: "Soledad",
    categoria: "emocional",
    conflicto: "Aislamiento. Falta de conexión. Rechazo.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Aislamiento. Falta de conexión.",
        affirmacion: "Estoy conectado conmigo mismo y con los demás."
      }
    },
    consejos: [
      "Busca conexiones significativas",
      "Únete a grupos de apoyo",
      "Trabaja la autoestima"
    ]
  },

  IRA: {
    nombre: "Ira",
    categoria: "emocional",
    conflicto: "Frustración. Impotencia. Rechazo.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Frustración. Impotencia.",
        affirmacion: "Expreso mi ira de forma constructiva."
      }
    },
    consejos: [
      "Busca canales saludables para la ira",
      "Practica ejercicios físicos",
      "Trabaja la comunicación asertiva"
    ]
  },

  MIEDO: {
    nombre: "Miedo",
    categoria: "emocional",
    conflicto: "Inseguridad. Falta de confianza. Amenaza percibida.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Inseguridad. Falta de confianza.",
        affirmacion: "Estoy a salvo. Confío en la vida."
      }
    },
    consejos: [
      "Identifica tus miedos",
      "Enfréntalos gradualmente",
      "Busca apoyo cuando lo necesites"
    ]
  },

  // ============================================================
  // LOTE 1: EMOCIONALES Y PSICOLÓGICAS
  // ============================================================

  ADICCIONES: {
    nombre: "Adicciones",
    categoria: "emocional",
    conflicto: "Necesidad de compañía materna para afrontar retos. Toda adicción evita el contacto con la emoción. Vacío existencial, falta de amor, desconexión con el ser superior. La adicción enmascara el sufrimiento de forma temporal.",
    etapa: "Variable",
    fuentes: {
      jacquesMartel: {
        causa: "Necesidad de la compañía de 'mamá' para afrontar un reto. Toda adicción evita el contacto con la emoción."
      },
      louiseHay: {
        causa: "Sentimiento de vacío existencial. Falta de amor. Desconexión con uno mismo.",
        afirmacion: "Estoy lleno de amor y conexión. La vida me llena de sentido."
      }
    },
    consejos: [
      "Reconoce el vacío emocional que intentas llenar",
      "Busca ayuda profesional para trabajar la adicción",
      "Conecta con tu ser superior a través de la meditación",
      "Permite sentir las emociones que evitas"
    ]
  },

  ALCOHOLISMO: {
    nombre: "Alcoholismo",
    categoria: "emocional",
    conflicto: "Deseo de huir las responsabilidades físicas o afectivas por miedo a estar herido otra vez. Sensación de futilidad, culpa e incapacidad. Rechazo de uno mismo.",
    etapa: "Variable",
    fuentes: {
      jacquesMartel: {
        causa: "Deseo de huir las responsabilidades físicas o afectivas por miedo a estar herido otra vez."
      },
      louiseHay: {
        causa: "Sensación de futilidad. Culpa. Incapacidad. Rechazo de uno mismo.",
        afirmacion: "Me amo y me apruebo. Soy capaz de enfrentar la vida."
      }
    },
    consejos: [
      "Reconoce el miedo que te lleva a huir",
      "Busca ayuda profesional especializada",
      "Trabaja el amor propio y la aceptación",
      "Permite que otros te apoyen en tu proceso"
    ]
  },

  AGORAFOBIA: {
    nombre: "Agorafobia",
    categoria: "emocional",
    conflicto: "Temor enfermizo a los espacios abiertos y lugares públicos. Ansiedad y angustia hasta el pánico. Dependencia materna. Los dos grandes temores son el miedo a morir y el miedo a la locura.",
    etapa: "Variable",
    fuentes: {
      lisaBourbeau: {
        bloqueoFisico: "La persona sufre de ansiedad y angustia hasta el extremo de sentir pánico en espacios abiertos.",
        bloqueoEmocional: "La mayoría fueron muy dependientes de su madre durante su infancia, y se sentían responsables de su felicidad.",
        bloqueoMental: "Debes aprender a soltar la dependencia materna y a confiar en ti mismo."
      }
    },
    consejos: [
      "Trabaja la dependencia emocional",
      "Enfrénta gradualmente los espacios abiertos",
      "Busca terapia cognitivo-conductual",
      "Fortalece tu sensación de seguridad interior"
    ]
  },

  ALUCINACIONES: {
    nombre: "Alucinaciones",
    categoria: "psicotica",
    conflicto: "Amenazas de pérdida de territorio y grandes miedos. La persona experimenta percepciones falsas como mecanismo de defensa ante amenazas percibidas.",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      drHamer: {
        causa: "Amenazas de pérdida de territorio y grandes miedos. La trascendencia de la situación conflictiva."
      }
    },
    consejos: [
      "Busca ayuda profesional urgente",
      "Trabaja los miedos profundos",
      "Crea un entorno seguro y estable",
      "Permite el apoyo de seres queridos"
    ]
  },

  ESQUIZOFRENIA: {
    nombre: "Esquizofrenia",
    categoria: "psicotica",
    conflicto: "Constelación de conflicto de separación + Territorio con miedos. Se esconde y esconde su identidad debido a un marco familiar muy rígido. Separación y abandono vivido de forma brutal.",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      drHamer: {
        causa: "Separación y abandono brutal. Conflicto de territorio vivido como una guerra. Conflicto de desvalorización por parte del padre."
      }
    },
    consejos: [
      "Busca ayuda profesional especializada",
      "Trabaja los traumas de separación",
      "Crea un entorno familiar estable",
      "Permite el apoyo de un equipo terapéutico"
    ]
  },

  PARANOIA: {
    nombre: "Paranoia",
    categoria: "psicotica",
    conflicto: "Gran sentimiento de inferioridad. Susceptibilidad y agresividad. Delirios de persecución. Sentimiento de víctima. Ambiente familiar con carencia afectiva y poco desarrollo psico-social.",
    etapa: "Variable",
    fuentes: {
      drHamer: {
        causa: "Gran sentimiento de inferioridad que genera delirios de persecución. Carencia afectiva en la infancia."
      }
    },
    consejos: [
      "Busca ayuda profesional",
      "Trabaja la autoestima y la autoimagen",
      "Crea relaciones de confianza",
      "Permite que otros te demuestren su apoyo"
    ]
  },

  BURNOUT: {
    nombre: "Burnout",
    categoria: "emocional",
    conflicto: "Respuesta prolongada de estrés ante factores emocionales e impersonales en el trabajo. Fatiga crónica, ineficacia y negación. Huida de una emoción intensa vivida en el trabajo.",
    etapa: "Variable",
    fuentes: {
      jacquesMartel: {
        causa: "Huida de una emoción intensa vivida en el trabajo o en ocupaciones diversas. Respuesta prolongada de estrés."
      }
    },
    consejos: [
      "Establece límites saludables en el trabajo",
      "Identifica la emoción que intentas evadir",
      "Busca apoyo emocional profesional",
      "Permite el descanso y la recuperación"
    ]
  },

  OBESIDAD: {
    nombre: "Obesidad",
    categoria: "emocional",
    conflicto: "Vacío interior por falta de amor. Se recurre a la comida para compensarlo. Temor a exponerse ante los demás. Vulnerabilidad. Inhibición a expresar con libertad. Shock emocional o pérdida de un ser querido.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Vacío interior por falta de amor. Temor a la vulnerabilidad. Inhibición.",
        afirmacion: "Estoy lleno de amor. Me amo y me acepto."
      },
      drHamer: {
        causa: "Shock emocional o pérdida de un ser querido. Sensación de vacío de propósito."
      }
    },
    consejos: [
      "Busca el amor que necesitas en relaciones sanas",
      "Expresa tus emociones libremente",
      "Trabaja la autoestima y el amor propio",
      "Permite que otros te nutran emocionalmente"
    ]
  },

  AMNESIA: {
    nombre: "Amnesia",
    categoria: "disociativa",
    conflicto: "Miedo. Huida de la vida. Incapacidad de defenderse. La amnesia es una coartada que permite rechazar recuerdos demasiado dolorosos para la persona.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Miedo. Huida de la vida.",
        afirmacion: "Estoy a salvo. La vida me ama y me protege."
      },
      lisaBourbeau: {
        bloqueoFisico: "La persona no puede recordar eventos importantes de su vida.",
        bloqueoEmocional: "Miedo a enfrentar recuerdos dolorosos. Necesidad de protegerse.",
        bloqueoMental: "Debes aprender a enfrentar tus recuerdos con compasión y apoyo."
      }
    },
    consejos: [
      "Busca ayuda profesional para trabajar traumas",
      "Permite el recuerdo gradual con apoyo",
      "Crea un entorno seguro para el proceso",
      "Practica la autocompasión"
    ]
  },

  APATIA: {
    nombre: "Apatía",
    categoria: "emocional",
    conflicto: "Resistencia a sentir. Freno a la sensibilidad. Miedo. La persona se desconecta de sus emociones como mecanismo de defensa.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Resistencia a sentir. Freno a la sensibilidad. Miedo.",
        afirmacion: "Me abro a la vida y estoy dispuesto a experimentarla con toda confianza."
      }
    },
    consejos: [
      "Reconecta con tus emociones gradualmente",
      "Permite sentir sin juzgar",
      "Busca experiencias que despierten tu sensibilidad",
      "Practica la atención plena (mindfulness)"
    ]
  },

  ALZHEIMER: {
    nombre: "Alzheimer",
    categoria: "neurodegenerativa",
    conflicto: "Exigirse hacer algo que no se quiere hacer. Conflictos de separación y agresión. 'Quiero que estén conmigo pero yo no quiero estar con ellos.' Negarse a enfrentar la vida. Desesperanza, desamparo.",
    etapa: "Variable",
    fuentes: {
      jacquesMartel: {
        causa: "Exigirse hacer algo que no se quiere hacer. Conflictos de separación y agresión."
      },
      louiseHay: {
        causa: "Negarse a enfrentar la vida. Desesperanza. Desamparo.",
        afirmacion: "Acepto la vida con alegría. Cada día es una nueva oportunidad."
      }
    },
    consejos: [
      "Busca ayuda profesional especializada",
      "Crea un entorno familiar de apoyo",
      "Mantén la estimulación cognitiva",
      "Permite que otros te cuiden con amor"
    ]
  },

  AUTISMO: {
    nombre: "Autismo",
    categoria: "desarrollo",
    conflicto: "En muchos casos es resultado de incestos genealógicos. Secreto familiar + Culpa. 'Es más fácil retractarme dentro de un mutismo.' Huyo de una situación muy dolorosa. Rechazo último de enfrentar la realidad.",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      jacquesMartel: {
        causa: "Secreto familiar + Culpa. Huida de una situación muy dolorosa del entorno."
      },
      lisaBourbeau: {
        bloqueoFisico: "La persona seRetrae del mundo exterior.",
        bloqueoEmocional: "Rechazo último de enfrentarse a la realidad física del mundo exterior porque ve su sensibilidad maltratada.",
        bloqueoMental: "Debes crear un espacio seguro para expresar tu sensibilidad sin ser juzgado."
      }
    },
    consejos: [
      "Crea un entorno seguro y predecible",
      "Respeta el ritmo de la persona",
      "Busca terapia especializada",
      "Permite la expresión de emociones de formas alternativas"
    ]
  },

  ENFERMEDADES_AUTOINMUNES: {
    nombre: "Enfermedades Autoinmunes",
    categoria: "autoinmune",
    conflicto: "Conflictos de Desvalorización, Culpabilidad o Impotencia que cuestiona la propia identidad. 'No merezco existir.' 'Una parte de mí quiere matar a otra parte de mí.' El cuerpo ataca su propia identidad.",
    etapa: "Variable",
    fuentes: {
      drHamer: {
        causa: "Conflictos de desvalorización, culpabilidad o impotencia que cuestionan la identidad propia. Incluye esclerosis, diabetes, poliartritis, esclerodermia, lupus eritematoso."
      }
    },
    consejos: [
      "Trabaja la autoestima y la identidad",
      "Busca ayuda profesional especializada",
      "Permite la expresión de emociones reprimidas",
      "Fortalece el sentido de dignidad y valor propio"
    ]
  },

  DEPRESION_MANIA: {
    nombre: "Depresión y Manía",
    categoria: "emocional",
    conflicto: "Depresión: Conflicto frente al territorio. Pérdida de espacio o imposibilidad de reproducirse. Manía: Conflicto con la identidad. Delirios de grandeza. La depresión como huida de la realidad y responsabilidades.",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      drHamer: {
        causa: "Depresión: Conflicto frente al territorio. Manía: Conflicto con la identidad. Las peleas en el territorio pueden llevar a un biochoque que traiga la pérdida del incentivo de vivir."
      }
    },
    consejos: [
      "Busca ayuda profesional urgente",
      "Establece una rutina diaria estable",
      "Conecta con tu entorno de forma segura",
      "Permite el apoyo de seres queridos"
    ]
  },

  ESTRABISMO: {
    nombre: "Estrabismo",
    categoria: "visual",
    conflicto: "Desvalorización en la mirada del otro. El peligro es tal que son necesarios dos ojos para vigilar. 'No hay que ver lo que veo.' Sentirse indeseable. Algo no debe ser visto.",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      drHamer: {
        causa: "Desvalorización en la mirada del otro. Necesidad de vigilar por peligro percibido."
      },
      louiseHay: {
        causa: "Sentirse indeseable. Algo que no se quiere ver.",
        afirmacion: "Miro el mundo con amor y aceptación."
      },
      lisaBourbeau: {
        bloqueoFisico: "Los ojos no apuntan en la misma dirección.",
        bloqueoEmocional: "Sentirse indeseable. Algo que no debe ser visto.",
        bloqueoMental: "Debes aceptar lo que ves y permitirte ser visto."
      }
    },
    consejos: [
      "Trabaja la autoestima y la aceptación",
      "Permite ser visto con amor",
      "Enfrenta aquello que evitas ver",
      "Busca apoyo profesional si es necesario"
    ]
  },

  ENANISMO: {
    nombre: "Enanismo",
    categoria: "crecimiento",
    conflicto: "Miedo a ser obligado a alzarse para atrapar algo. Prohibición o peligro de crecer. La persona se detiene en su desarrollo como respuesta a una amenaza.",
    etapa: "Variable",
    fuentes: {
      jacquesMartel: {
        causa: "Miedo a ser obligado a alzarse para atrapar algo. Prohibición o peligro de crecer."
      }
    },
    consejos: [
      "Reconoce las prohibiciones que internalizaste",
      "Permite tu crecimiento personal",
      "Busca un entorno que fomente tu desarrollo",
      "Trabaja el miedo a avanzar"
    ]
  },

  // ============================================================
  // LOTE 2: SISTEMA DIGESTIVO
  // ============================================================

  AEROFAGIA: {
    nombre: "Aerofagia",
    categoria: "digestivo",
    conflicto: "Angustia, terror visceral. La persona se esfuerza demasiado en aspirar la vida. Exceso de aire deglutido por miedo a una pérdida que causa inquietud.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Miedo visceral, terror y angustia. Quejas y gruidos.",
        afirmacion: "Digiero todas las nuevas experiencias en paz y con alegría."
      },
      lisaBourbeau: {
        bloqueoFisico: "Producción exagerada de gases por deglución anormal de aire.",
        bloqueoEmocional: "La persona sufre de angustia. Se esfuerza demasiado en aspirar la vida. Quiere ir más allá de sus límites.",
        bloqueoMental: "Debes darte cuenta de que no necesitas darle vida a los demás. Concéntrate en nutrirte a ti mismo."
      }
    },
    consejos: [
      "Identifica la angustia subyacente",
      "Come despacio y mastica bien",
      "Practica ejercicios de respiración",
      "Reduce el estrés y la preocupación"
    ]
  },

  AFTAS: {
    nombre: "Aftas",
    categoria: "digestivo",
    conflicto: "Separación del pecho de mamá. Verdad que no puedo decir. Secreto familiar. No poder atrapar algo o no poder soltar el bocado.",
    etapa: "1ra Etapa (Supervivencia) + 4ta Etapa (Relación)",
    fuentes: {
      louiseHay: {
        causa: "Enfado por tomar decisiones equivocadas.",
        afirmacion: "Con amor acepto mis decisiones, sabiendo que soy libre para cambiar. Estoy a salvo."
      }
    },
    consejos: [
      "Identifica la verdad que evitas decir",
      "Permite expresar tus sentimientos",
      "Trabaja los secretos familiares",
      "Acepta tus decisiones con compasión"
    ]
  },

  BAZO: {
    nombre: "Bazo",
    categoria: "digestivo",
    conflicto: "Humillación. Obsesiones. Desánimo. La persona se crea demasiadas preocupaciones y siente inquietud hasta volverse obsesiva. Ha perdido la fuerza para luchar.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Obsesiones. Tendencia a obsesionarse.",
        afirmacion: "Me amo y me apruebo. Confió en el proceso de la vida. Estoy a salvo."
      },
      lisaBourbeau: {
        bloqueoFisico: "Problemas en el bazo indican preocupaciones excesivas y obsesión.",
        bloqueoEmocional: "Se impide desear algo que le proporcione placer. Ha perdido la fuerza para luchar y se deja llevar por el desánimo.",
        bloqueoMental: "Debes aprender a soltar las preocupaciones y a permitirte el placer."
      }
    },
    consejos: [
      "Libera las obsesiones y preocupaciones",
      "Permite que otros te apoyen",
      "Recupera la fuerza interior",
      "Busca experiencias de placer y alegría"
    ]
  },

  VESICULA: {
    nombre: "Vesícula Biliar",
    categoria: "digestivo",
    conflicto: "Rencor, cólera, injusticia, rabia. Resentimiento tenaz alimentado por celos y envidia. '¡Es indignante!'",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      jacquesMartel: {
        causa: "Rencor, cólera e injusticia. Rabia contenida. Celos profesionales, traición."
      }
    },
    consejos: [
      "Libera la rabia de forma constructiva",
      "Identifica las injusticias que cargas",
      "Trabaja los celos y la envidia",
      "Perdona para liberar el rencor"
    ]
  },

  CALCULOS_BILIARES: {
    nombre: "Cálculos Biliares",
    categoria: "digestivo",
    conflicto: "Amargura, juicios condenatorios, agresividad reprimida y petrificada. 'No quiero que el otro tenga rabia hacia mí.'",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      louiseHay: {
        causa: "Amargura. Pensamientos rígidos. Juicios condenatorios. Orgullo.",
        afirmacion: "Hay una alegre liberación del pasado. La vida es amable, yo también."
      },
      lisaBourbeau: {
        bloqueoFisico: "Acumulación de depósitos que forman piedras por pensamientos de agresividad o descontento mantenidos en secreto.",
        bloqueoEmocional: "La persona rígida que reprime sus sentimientos es más susceptible de formarlos.",
        bloqueoMental: "Debes expresar tus sentimientos en lugar de reprimirlos. Suelta la rigidez mental."
      }
    },
    consejos: [
      "Libera la amargura y los juicios",
      "Expresa tus sentimientos reprimidos",
      "Suelta la rigidez mental",
      "Permite la liberación del pasado"
    ]
  },

  DIARREA: {
    nombre: "Diarrea",
    categoria: "digestivo",
    conflicto: "Conflicto de 'guarrada' que hay que eliminar. Miedo visceral. Carencia de amabilidad. 'He tragado una situación que no puedo asimilar.'",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Temor. Rechazo. Huida.",
        afirmacion: "Mi ingestión, asimilación y eliminación están en orden. Estoy en paz con la vida."
      },
      jacquesMartel: {
        causa: "Querer rechazar las soluciones o situaciones que se ofrecen para progresar en la vida."
      }
    },
    consejos: [
      "Identifica qué no puedes asimilar",
      "Trabaja el miedo subyacente",
      "Permite la eliminación de lo que no te sirve",
      "Busca apoyo para procesar situaciones difíciles"
    ]
  },

  INTESTINO_DELGADO: {
    nombre: "Intestino Delgado",
    categoria: "digestivo",
    conflicto: "Incapacidad de absorber y asimilar lo bueno de la vida. 'No puedo retener ni asimilar este pedazo.'",
    etapa: "1ra Etapa + 3ra Etapa + 4ta Etapa",
    fuentes: {
      louiseHay: {
        causa: "Asimilación. Absorción. Temor de liberar lo viejo.",
        afirmacion: "Con facilidad asimilo todo lo que necesito saber y con alegría libero el pasado."
      },
      lisaBourbeau: {
        bloqueoFisico: "Incapacidad de retener y absorber bien lo que es bueno para ella.",
        bloqueoEmocional: "Dificultad para asimilar lo positivo de los acontecimientos diarios.",
        bloqueoMental: "Debes aprender a absorber lo bueno y soltar lo que no necesitas."
      }
    },
    consejos: [
      "Practica la asimilación consciente de experiencias",
      "Permite que lo bueno entre en tu vida",
      "Libera lo viejo para hacer espacio a lo nuevo",
      "Come alimentos que nutran tu intestino"
    ]
  },

  INTESTINO_GRUESO: {
    nombre: "Intestino Grueso",
    categoria: "digestivo",
    conflicto: "Dificultad para soltar, dejar fluir lo inútil y dejar fluir los acontecimientos de la vida. Aferrarse a viejas ideas o creencias.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Asimilación. Absorción. Temor de liberar lo viejo y que ya no se necesita.",
        afirmacion: "Con facilidad asimilo todo lo que necesito saber y con alegría libero el pasado."
      },
      jacquesMartel: {
        causa: "Mi capacidad para soltar, dejar fluir lo que me es inútil y dejar fluir los acontecimientos de mi vida."
      },
      lisaBourbeau: {
        bloqueoFisico: "Dificultad para deshacerse de viejas ideas o creencias que ya no le son necesarias.",
        bloqueoEmocional: "Rechaza demasiado rápido los pensamientos que podrían beneficiarle. Sufre contrariedades que le resultan imposibles de digerir.",
        bloqueoMental: "Debes aprender a soltar y a dejar fluir la vida."
      }
    },
    consejos: [
      "Aprende a soltar lo que no necesitas",
      "Permite que la vida fluya",
      "Libera viejas creencias y patrones",
      "Practica la eliminación consciente"
    ]
  },

  ESTREÑIMIENTO: {
    nombre: "Estreñimiento",
    categoria: "digestivo",
    conflicto: "Retener, no soltar, aferrarse. Múltiples conflictos: buscar el amor de mamá, culpabilidad con hijos, negarse a perdonar, miedo a no poder transportar el bocado.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Negativa a abandonar viejas ideas. Estancamiento en el pasado. Mezquindad, tacañería.",
        afirmacion: "A medida que libero el pasado entra en mí lo nuevo y vital. Permito que la vida fluya a través de mí."
      },
      jacquesMartel: {
        causa: "Querer retener las personas o los acontecimientos de mi vida."
      }
    },
    consejos: [
      "Identifica qué retienes y por qué",
      "Aprende a soltar con facilidad",
      "Perdona para liberar la culpa",
      "Permite que la vida fluya a través de ti"
    ]
  },

  MONONUCLEOSIS: {
    nombre: "Mononucleosis",
    categoria: "digestivo",
    conflicto: "Desvalorización. Enfado y rabia por no recibir amor y aprecio. 'Tengo miedo de enfrentarme a una situación que me lleve a comprometerme.'",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      louiseHay: {
        causa: "Sobreesfuerzo, más allá de los propios límites. Temor a no valer lo suficiente. Agotamiento del apoyo interior.",
        afirmacion: "Me relajo y reconozco mi valía. Valgo mucho. La vida es fácil y dichosa."
      },
      jacquesMartel: {
        causa: "Gran miedo de deber afrontar una situación que me llevaría a comprometerme en el plano afectivo."
      }
    },
    consejos: [
      "Reconoce tu valía sin necesidad de aprobación externa",
      "Establece límites saludables",
      "Permite recibir amor y apoyo",
      "Cuida tu energía y no te sobrecargues"
    ]
  },

  NAUSEAS: {
    nombre: "Náuseas",
    categoria: "digestivo",
    conflicto: "Rechazo de una idea o experiencia. Aversión hacia algo o alguien. 'Hay un aspecto de mi vida que quiero rechazar porque me da asco.'",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Miedo. Rechazo de una idea o una experiencia.",
        afirmacion: "Estoy a salvo. Confió en que el proceso de la vida me aporta sólo el bien."
      },
      jacquesMartel: {
        causa: "Un aspecto de mi vida que quiero rechazar porque me da asco."
      },
      lisaBourbeau: {
        bloqueoFisico: "La persona se siente amenazada por alguna persona o acontecimiento.",
        bloqueoEmocional: "Está disgustada porque no sucede lo que esperaba, o siente aversión notable hacia alguna persona o cosa.",
        bloqueoMental: "Debes identificar qué rechazas y trabajar la aceptación."
      }
    },
    consejos: [
      "Identifica qué rechazas en tu vida",
      "Trabaja la aceptación y la tolerancia",
      "Permite que las experiencias fluyan",
      "Busca apoyo si el rechazo es profundo"
    ]
  },

  FLATULENCIA: {
    nombre: "Flatulencia",
    categoria: "digestivo",
    conflicto: "Miedo a la pérdida. Preocupación excesiva. Acumulación de inquietud que busca salida. 'Te preocupas demasiado por lo que podría faltarte.'",
    etapa: "Variable",
    fuentes: {
      lisaBourbeau: {
        bloqueoFisico: "Producción exagerada de gases por deglución anormal de aire.",
        bloqueoEmocional: "Miedo a una pérdida que no está justificado. Preocupación excesiva.",
        bloqueoMental: "Debes tomar conciencia de lo que ya tienes en lugar de pensar en lo que podría faltarte."
      }
    },
    consejos: [
      "Relájate y deja de retener",
      "Enfócate en lo que tienes, no en lo que te falta",
      "Come despacio y mastica bien",
      "Reduce la preocupación y la inquietud"
    ]
  },

  ASCITIS: {
    nombre: "Ascitis",
    categoria: "digestivo",
    conflicto: "Líquido en el abdomen como protección ante agresión. 'Quiero proteger mi vientre.' Fase de sanación según Hamer.",
    etapa: "Fase de curación",
    fuentes: {
      drHamer: {
        causa: "Fase de sanación. El líquido es una solución para protegerse de la agresión."
      }
    },
    consejos: [
      "Identifica la agresión que intentas proteger",
      "Permite el proceso de sanación",
      "Busca apoyo médico y emocional",
      "Trabaja la seguridad interior"
    ]
  },

  FISTULA_ANAL: {
    nombre: "Fístula Anal",
    categoria: "digestivo",
    conflicto: "Conservar viejos residuos del pasado sin conseguirlo. Mantener sentimientos de venganza. 'No sé dónde poner el culo', 'Me siento desubicado'.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Liberación incompleta de desechos. Aferrarse a las basuras del pasado. Miedo. Bloqueo en el proceso de liberación.",
        afirmacion: "Estoy a salvo. Confió absolutamente en el proceso de la vida. Con amor me libero totalmente del pasado. Soy libre."
      },
      lisaBourbeau: {
        bloqueoFisico: "Canal anormal entre dos órganos o cavidades por el que corre un líquido.",
        bloqueoEmocional: "Mezclar demasiado las cosas. Dejarse influenciar fácilmente y costarle separar los hechos.",
        bloqueoMental: "Debes aprender a separar los hechos y a soltar lo que no necesitas."
      }
    },
    consejos: [
      "Libera los residuos del pasado",
      "Suelta los sentimientos de venganza",
      "Aprende a separar los hechos",
      "Permite el proceso de liberación"
    ]
  },

  PARASITOS: {
    nombre: "Parásitos",
    categoria: "digestivo",
    conflicto: "Entrega del poder a otras personas. Dejarse invadir y parasitar. Los niños se dejan invadir por el mundo adulto y se esfuerzan en no ser ellos mismos para que los adultos los quieran.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Entrega del poder a otras personas.",
        afirmacion: "Con amor recupero mi poder y elimino toda interferencia."
      },
      lisaBourbeau: {
        bloqueoFisico: "Organismos que viven a expensas de otra especie.",
        bloqueoEmocional: "La persona se deja parasitar por los demás y por sus pensamientos. Los niños se dejan invadir por el mundo adulto.",
        bloqueoMental: "Debes recuperar tu poder personal y establecer límites saludables."
      }
    },
    consejos: [
      "Recupera tu poder personal",
      "Establece límites saludables",
      "No permitas que otros te invadan",
      "Fortalece tu identidad y tu espacio vital"
    ]
  },

  // ============================================================
  // LOTE 3: SISTEMA RESPIRATORIO
  // ============================================================

  ADENOIDES: {
    nombre: "Adenoides",
    categoria: "respiratorio",
    conflicto: "No poder atrapar la presa, el objetivo, la tajada. El niño siente una sensibilidad que le permite sentir intensamente los acontecimientos antes de que ocurran. Bloquea su percepción para no sufrir.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Conflictos y discusiones familiares. Niño que se siente un estorbo.",
        afirmacion: "Soy bienvenido y amado. Mi familia me acepta."
      },
      lisaBourbeau: {
        bloqueoFisico: "Obstrucción nasal que representa las ideas o emociones que el niño se guarda por miedo a no ser comprendido.",
        bloqueoEmocional: "El niño se abstiene de hablar, viviendo sus temores en el aislamiento. Cree que está de más.",
        bloqueoMental: "Debes crear un espacio seguro para expresar lo que sientes sin ser juzgado."
      }
    },
    consejos: [
      "Crea un entorno seguro para que el niño se exprese",
      "Escucha sus temores sin juzgar",
      "No lo hagas sentir un estorbo",
      "Permite que exprese sus emociones"
    ]
  },

  AFONIA: {
    nombre: "Afonía",
    categoria: "respiratorio",
    conflicto: "Choque afectivo que sacude la sensibilidad. Exceso de esfuerzo para hablar cuando no se expresa todo lo que el corazón desea decir.",
    etapa: "Variable",
    fuentes: {
      lisaBourbeau: {
        bloqueoFisico: "Los sonidos acaban por extinguirse tras un esfuerzo excesivo por hablar.",
        bloqueoEmocional: "La persona se fuerza demasiado para hablar aun cuando no expresa todo lo que siente. Esto crea angustia y deja un vacío.",
        bloqueoMental: "Debes revisar lo que tu corazón quiere decir realmente y permitirte no hablar más que para decir palabras verdaderas, expresadas con amor."
      }
    },
    consejos: [
      "Permite el silencio como forma de expresión",
      "Habla solo cuando sea necesario y con verdad",
      "Libera la angustia acumulada",
      "No te fuerces a hablar para ser aceptado"
    ]
  },

  ASFIXIA: {
    nombre: "Asfixia",
    categoria: "respiratorio",
    conflicto: "Temor paralizante reprimido durante mucho tiempo. Desconfianza en el proceso de la vida. Estancamiento en la infancia.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Temor. Desconfianza en el proceso de la vida. Estancamiento en la infancia.",
        afirmacion: "Confío en la vida. Respirar es vivir. Estoy a salvo."
      },
      lisaBourbeau: {
        bloqueoFisico: "Problema respiratorio grave que puede poner en peligro la vida en minutos.",
        bloqueoEmocional: "Un temor paralizante reprimido durante mucho tiempo que algún acontecimiento estimula y la persona ya no puede controlar.",
        bloqueoMental: "Debes volver a contactar con tu enorme fuerza interior sabiendo que eres el único artífice de tu vida."
      }
    },
    consejos: [
      "Busca ayuda profesional urgente",
      "Identifica el temor paralizante",
      "Trabaja la confianza en la vida",
      "Fortalece tu fuerza interior"
    ]
  },

  ENFISEMA: {
    nombre: "Enfisema Pulmonar",
    categoria: "respiratorio",
    conflicto: "Miedo a aceptar la vida. Sentimiento de ser indigno de vivir. Pérdida de territorio. Situación crónica de ahogarse.",
    etapa: "1ra Etapa + 4ta Etapa",
    fuentes: {
      louiseHay: {
        causa: "Miedo a aceptar la vida. Sentimiento de ser indigno de vivir. El enfisema y el exceso de tabaco son dos formas de negar la vida.",
        afirmacion: "Merezco vivir plenamente. Acepto la vida con alegría."
      }
    },
    consejos: [
      "Trabaja el sentimiento de indignidad",
      "Acepta que mereces vivir",
      "Libera el miedo a la vida",
      "Busca ayuda para dejar de fumar si aplica"
    ]
  },

  EPISTAXIS: {
    nombre: "Epistaxis",
    categoria: "respiratorio",
    conflicto: "Miedo a la muerte. Pérdida de alegría temporal. Deseo de llorar contenido. Necesidad de liberar tensión emocional.",
    etapa: "Variable",
    fuentes: {
      lisaBourbeau: {
        bloqueoFisico: "La nariz sangra sin motivo aparente, representando la pérdida de alegría.",
        bloqueoEmocional: "La persona necesita liberarse de una tensión emocional. El deseo de llorar contenido se manifiesta como sangrado.",
        bloqueoMental: "Debes ver el lado bueno de tu actividad y permitirte vivir situaciones estresantes liberando la tensión con llanto verdadero."
      }
    },
    consejos: [
      "Permite el llanto para liberar tensión",
      "Identifica la pérdida de alegría que cargas",
      "Libera las emociones contenidas",
      "Busca apoyo emocional si es necesario"
    ]
  },

  FARINGE: {
    nombre: "Faringe",
    categoria: "respiratorio",
    conflicto: "Querer algo que no podemos tener. Expresión y creatividad bloqueadas. 'Decir algo que no tengo que decir.'",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Canal de expresión y creatividad. Represión del enfado. Sentirse incapaz de expresarse. Rabia reprimida y tragada. Creatividad sofocada.",
        afirmacion: "Expreso mi creatividad con libertad y amor."
      },
      jacquesMartel: {
        causa: "La expresión de mi lenguaje verbal y no verbal, mi creatividad."
      }
    },
    consejos: [
      "Libera tu creatividad bloqueada",
      "Expresa tu enfado de forma constructiva",
      "Permite que tus ideas fluyan",
      "No reprimas lo que tu corazón quiere decir"
    ]
  },

  LARINGITIS: {
    nombre: "Laringitis",
    categoria: "respiratorio",
    conflicto: "Furia que impide hablar. Miedo de hacerse valer. Represión creativa. 'No me expreso por temor al ridículo.'",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      louiseHay: {
        causa: "Furia que impide hablar. Miedo de hacerse valer. Resentimiento contra la autoridad.",
        afirmacion: "Expreso mi verdad con poder y amor."
      },
      lisaBourbeau: {
        bloqueoFisico: "Pérdida parcial o total de la voz.",
        bloqueoEmocional: "La persona desea decir algo pero tiene miedo de no ser escuchada o de disgustar a alguien. Se traga sus palabras.",
        bloqueoMental: "Debes permitirte hablar con verdad y sin miedo al ridículo."
      }
    },
    consejos: [
      "Expresa lo que sientes sin miedo",
      "No te tragues las palabras",
      "Habla con poder y confianza",
      "Libera la furia contenida"
    ]
  },

  NASOFARINGE: {
    nombre: "Nasofaringe",
    categoria: "respiratorio",
    conflicto: "Querer atrapar el olor de la madre. Querer estar cerca de alguien que se fue. Conflicto de apego olfativo.",
    etapa: "Variable",
    fuentes: {
      jacquesMartel: {
        causa: "Queremos algo que no podemos tener. Quiero atrapar el olor de mi madre."
      }
    },
    consejos: [
      "Trabaja el apego y la separación",
      "Permite soltar a quienes se fueron",
      "Encuentra confort en los recuerdos",
      "Libera la necesidad de controlar la cercanía"
    ]
  },

  NEUMOTORAX: {
    nombre: "Neumotórax",
    categoria: "respiratorio",
    conflicto: "Necesidad de poner espacio y libertad. Sentirse agredido por alguien. Falta de apoyo familiar.",
    etapa: "Variable",
    fuentes: {
      drHamer: {
        causa: "Aire como necesidad de libertad. Protección ante agresión percibida."
      }
    },
    consejos: [
      "Identifica quién te agrede o presiona",
      "Busca apoyo en tu familia",
      "Establece límites saludables",
      "Permite que la vida fluya con más libertad"
    ]
  },

  RONQUIDOS: {
    nombre: "Ronquidos",
    categoria: "respiratorio",
    conflicto: "Al inspirar: 'Pido socorro'. Al expirar: 'Quiero alejar el peligro'. Necesidad de protección.",
    etapa: "Variable",
    fuentes: {
      jacquesMartel: {
        causa: "Pido socorro o quiero alejar el peligro. Necesidad de protección."
      }
    },
    consejos: [
      "Identifica el peligro que percibes",
      "Busca seguridad en tu entorno",
      "Trabaja la ansiedad nocturna",
      "Crea un ambiente seguro para dormir"
    ]
  },

  FIBROSIS_QUISTICA: {
    nombre: "Fibrosis Quística",
    categoria: "respiratorio",
    conflicto: "Convicción de que la vida no va a ir bien. Actitud de víctima. Endurecimiento consigo mismo y con la vida.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Firme convicción de que la vida no te funcionará. Pobre de mí.",
        afirmacion: "La vida me funciona maravillosamente. Soy fuerte y capaz."
      },
      lisaBourbeau: {
        bloqueoFisico: "Endurecimiento del cuerpo. Enfermedad crónica que afecta los pulmones y el sistema digestivo.",
        bloqueoEmocional: "La persona se ha endurecido consigo misma y con la vida. Adopta una actitud de víctima para llamar la atención.",
        bloqueoMental: "Debes hacerte responsable de tu vida y reconocer el gran poder que tienes para crear tu realidad."
      }
    },
    consejos: [
      "Hazte responsable de tu vida",
      "Reconoce tu poder interior",
      "Deja de ser víctima",
      "Abre tu corazón a la vida"
    ]
  },

  EMBOLIA_PULMONAR: {
    nombre: "Embolia Pulmonar",
    categoria: "respiratorio",
    conflicto: "Culpa extrema. Emoción muy fuerte como un puñetazo. Sentirse responsable de la vida o muerte de otros.",
    etapa: "Variable",
    fuentes: {
      lisaBourbeau: {
        bloqueoFisico: "Obstrucción brusca de la arteria pulmonar por un coágulo sanguíneo.",
        bloqueoEmocional: "La persona siente una emoción muy fuerte, como un puñetazo. Tiene mucha culpa por algo que hizo o dejó de hacer, hasta el extremo de querer morir.",
        bloqueoMental: "Debes dejar de creer que eres culpable hasta ese extremo. Nadie puede ser responsable de la vida o la muerte de otro."
      }
    },
    consejos: [
      "Busca ayuda profesional urgente",
      "Libera la culpa que cargas",
      "Reconoce que no eres responsable de las decisiones de otros",
      "Permite que te apoyen"
    ]
  },

  CATARRO: {
    nombre: "Catarro",
    categoria: "respiratorio",
    conflicto: "Vieja herida reavivada. Dificultad de adaptación social. Necesidad de perdón por un incidente difícil no asumido.",
    etapa: "Variable",
    fuentes: {
      lisaBourbeau: {
        bloqueoFisico: "Catarro periódico que se manifiesta en la misma época cada año.",
        bloqueoEmocional: "Indica el avivamiento de una vieja herida sufrida en el año en que se manifestó la primera vez. Un incidente difícil que la persona no quiso asumir.",
        bloqueoMental: "Tu cuerpo te dice que es momento de que realices un procedimiento de perdón. Solo el perdón puede lograr transformar lo que sientes."
      }
    },
    consejos: [
      "Identifica la vieja herida que se reaviva",
      "Practica el perdón hacia ti y hacia otros",
      "Permite el llanto para liberar tristeza",
      "Trabaja la adaptación social"
    ]
  },

  ADENOCARCINOMA: {
    nombre: "Adenocarcinoma Bronquial",
    categoria: "respiratorio",
    conflicto: "Miedo a asfixiarse. Falta la bocanada de aire. Temor a la muerte por falta de respiración.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Temor. Desconfianza en el proceso de la vida. Estancamiento en la infancia.",
        afirmacion: "Confío en la vida. Respiro libre y plenamente. Estoy a salvo."
      }
    },
    consejos: [
      "Busca ayuda profesional urgente",
      "Trabaja el miedo a la muerte",
      "Fortalece la confianza en la vida",
      "Permite la expresión de emociones reprimidas"
    ]
  },

  ALVEOLOS: {
    nombre: "Alvéolos Pulmonares",
    categoria: "respiratorio",
    conflicto: "Miedo a la muerte. 'Me veo morir a mí mismo' o 'El que está cerca de mí, muere'. Impacto por diagnóstico o pronóstico.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Representa la capacidad de inspirar la vida. Miedo o resistencia a aceptar la vida plenamente. Sensación de no tener derecho a ocupar espacio o a existir.",
        afirmacion: "Merezco ocupar espacio y existir plenamente. Acepto la vida."
      }
    },
    consejos: [
      "Trabaja el derecho a existir",
      "Acepta la vida plenamente",
      "Libera el miedo a la muerte",
      "Fortalece tu sentido de pertenencia"
    ]
  },

  // ============================================================
  // LOTE 4: SISTEMA REPRODUCTOR
  // ============================================================

  ABORTO: {
    nombre: "Aborto",
    categoria: "reproductor",
    conflicto: "Inconscientemente no se desea tener el bebé. Miedo. Miedo del futuro. Programación inoportuna.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Miedo. Miedo del futuro. Programación inoportuna.",
        afirmacion: "Siempre obra en mí la recta acción divina. Me amo y me apruebo. Todo está bien."
      }
    },
    consejos: [
      "Permite el proceso de duelo",
      "No te culpes por lo que sientes",
      "Busca apoyo emocional",
      "Perdónate y acepta tu decisión"
    ]
  },

  AMENORREA: {
    nombre: "Amenorrea",
    categoria: "reproductor",
    conflicto: "Deseos de no ser mujer. No gustarse. Conflictos con los dos ovarios, sexuales o afectivos.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Deseos de no ser mujer. No gustarse.",
        afirmacion: "Disfruto de ser quien soy. Soy una hermosa expresión de la vida."
      }
    },
    consejos: [
      "Trabaja tu identidad femenina",
      "Acepta y celebra tu cuerpo",
      "Fortalece tu autoestima",
      "Permite que tus emociones fluyan"
    ]
  },

  ENDOMETRIO: {
    nombre: "Endometrio",
    categoria: "reproductor",
    conflicto: "No poder llevar el niño, no poder nidificar correctamente, no poder llevar el papel de madre. Conflicto con connotaciones sexuales desagradables.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      drHamer: {
        causa: "El útero es nuestra primera casa. Temática relacionada con no poder llevar el niño o no poder nidificar correctamente."
      }
    },
    consejos: [
      "Trabaja tu imagen como madre",
      "Libera los conflictos sexuales",
      "Permite que tu útero sea un lugar de amor",
      "Cuida tu salud reproductiva"
    ]
  },

  EMBARAZO_EXTRAUTERINO: {
    nombre: "Embarazo Extrauterino",
    categoria: "reproductor",
    conflicto: "Embarazo deseado y a la vez no deseado. Conflicto entre el deseo consciente e inconsciente. Indecisión mutua entre la madre y el alma del niño.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      lisaBourbeau: {
        bloqueoFisico: "Desarrollo del embarazo fuera de la cavidad uterina.",
        bloqueoEmocional: "Indecisión por parte del alma del futuro niño o de la futura madre. Muy posible que sea mutua.",
        bloqueoMental: "Debes tomar una decisión consciente sobre tu deseo de ser madre."
      }
    },
    consejos: [
      "Clarifica tu deseo de ser madre",
      "Trabaja la indecisión interna",
      "Busca apoyo emocional y médico",
      "Permite que tu cuerpo hable"
    ]
  },

  MENOPAUSIA: {
    nombre: "Menopausia",
    categoria: "reproductor",
    conflicto: "Miedo a dejar de ser deseable. Rechazo de uno mismo. Miedo a envejecer. Sensación de valer muy poco.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Miedo a dejar de ser deseable. Rechazo de uno mismo. Miedo a envejecer.",
        afirmacion: "Cada etapa de mi vida es hermosa y valiosa."
      },
      lisaBourbeau: {
        bloqueoEmocional: "La menopausia es una transición natural. Quien experimenta problemas no acepta envejecer.",
        bloqueoMental: "Debes pasar de la procreación a la creación por ti misma, utilizando más tu principio masculino."
      }
    },
    consejos: [
      "Acepta la menopausia como transición natural",
      "Celebra cada etapa de tu vida",
      "Busca nuevas formas de crear",
      "Fortalece tu autoestima"
    ]
  },

  MENORRAGIA: {
    nombre: "Menorragia",
    categoria: "reproductor",
    conflicto: "Estrés emocional excesivo. Pérdida de alegría en la vida. Creencia de no tener poder de elección. Deseo de hijo contenido.",
    etapa: "Variable",
    fuentes: {
      lisaBourbeau: {
        bloqueoFisico: "Exageración del flujo menstrual en cantidad y duración.",
        bloqueoEmocional: "Perder mucha sangre se relaciona con la pérdida de alegría en la vida. Si se manifiesta tras un DIU, la mujer siente dolor por impedir un embarazo.",
        bloqueoMental: "Debes recuperar tu poder de elección y alegría."
      }
    },
    consejos: [
      "Recupera tu poder de elección",
      "Libera el estrés emocional acumulado",
      "Permite que la alegría entre en tu vida",
      "Busca apoyo médico y emocional"
    ]
  },

  OVARIO: {
    nombre: "Ovarios",
    categoria: "reproductor",
    conflicto: "Conflicto de pérdida en un contexto vital. Puede vivirse en relación a la fortuna familiar. El ovario izquierdo = reproducción, el derecho = atracción.",
    etapa: "1ra Etapa / 3ra Etapa",
    fuentes: {
      lisaBourbeau: {
        bloqueoEmocional: "Los ovarios unen al cuerpo físico de la mujer con su chakra sagrado. No establece buen contacto con su capacidad de crear.",
        bloqueoMental: "Debes trabajar tu capacidad creativa y tu conexión con tu feminidad."
      }
    },
    consejos: [
      "Trabaja tu capacidad creativa",
      "Fortalece tu conexión con tu feminidad",
      "Libera los sentimientos de pérdida",
      "Permite que tu chakra sagrado fluya"
    ]
  },

  CELULAS_GERMINATIVAS: {
    nombre: "Células Germinativas",
    categoria: "reproductor",
    conflicto: "Conflicto grave de pérdida, por ejemplo, la muerte de una persona o animal. Representa el 10% de los tumores ováricos.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      drHamer: {
        causa: "Conflicto grave de pérdida. Ejemplo: la muerte de una persona o animal querido."
      }
    },
    consejos: [
      "Procesa la pérdida con apoyo profesional",
      "Permite el duelo completa",
      "Busca consuelo en relaciones sanas",
      "Fortalece tu resiliencia"
    ]
  },

  OVARIOS_TESTICULOS: {
    nombre: "Ovarios y Testículos",
    categoria: "reproductor",
    conflicto: "Sentimiento de pérdida por algo perdido o miedo a perder. 'He perdido algo muy importante para mí o tengo miedo de perder algo muy importante para mí.'",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      drHamer: {
        causa: "El propio Dr. Hamer comenzó esta medicina al perder a su hijo y darse cuenta de que generaba un cáncer en los testículos mientras su mujer generaba uno de mamas."
      }
    },
    consejos: [
      "Trabaja la pérdida o el miedo a perder",
      "Permite el duelo",
      "Busca apoyo emocional",
      "Fortalece tu sentido de seguridad"
    ]
  },

  EYACULACION_PRECOZ: {
    nombre: "Eyaculación Precoz",
    categoria: "reproductor",
    conflicto: "Miedo. En algunos animales, se va rápido por miedo a que venga el depredador. En hombres, el depredador es el padre que castra al hijo. 'No tengo derecho a ser un hombre.'",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      drHamer: {
        causa: "Miedo al depredador (padre). El padre castra al hijo porque tiene miedo de que ocupe su lugar."
      }
    },
    consejos: [
      "Trabaja la relación con tu padre",
      "Fortalece tu identidad masculina",
      "Libera el miedo al fracaso",
      "Permite que la sexualidad fluya"
    ]
  },

  HIDROCELE: {
    nombre: "Hidrocele",
    categoria: "reproductor",
    conflicto: "Acumulación de líquido entre las capas del escroto. Deseo de proteger a los hijos (parte femenina). Separación del padre de los hijos.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      drHamer: {
        causa: "Cuando un hombre quiere hacer de mamá con los hijos (parte femenina) y quiere protegerlos, se les inflama el escroto."
      }
    },
    consejos: [
      "Trabaja tu lado femenino protector",
      "Permite expresar tu amor paternal",
      "Busca formas saludables de proteger",
      "No reprimas tu necesidad de cuidar"
    ]
  },

  VARICOCELE: {
    nombre: "Varicocele",
    categoria: "reproductor",
    conflicto: "Suciedad en la familia (sangre de vena, sangre sucia). Sentimiento de no poder proteger a los hijos.",
    etapa: "Variable",
    fuentes: {
      drHamer: {
        causa: "Dilatación de las venas del cordón espermático. Suciedad familiar. Sentimiento de no poder proteger a los hijos."
      }
    },
    consejos: [
      "Limpia los conflictos familiares",
      "Fortalece tu capacidad de protección",
      "Libera la culpa familiar",
      "Permite que la sangre fluya libre"
    ]
  },

  INFECCIONES_URINARIAS: {
    nombre: "Infecciones Urinarias",
    categoria: "reproductor",
    conflicto: "Incomodidad y dolor. Necesidad de orinar continuamente. Malestar emocional que se manifiesta en el sistema urinario.",
    etapa: "Variable",
    fuentes: {
      cromoterapia: {
        causa: "Color curativo: AZUL AIL. Tratamiento en zonas de vejiga, riñones, colon, hígado, bazo, páncreas, suprarrenales, timo, sistema nervioso, tiroides y pituitaria."
      }
    },
    consejos: [
      "Mantén buena hidratación",
      "Trabaja el estrés emocional",
      "Cuida tu higiene íntima",
      "Busca atención médica recurrente"
    ]
  },

  ESTERILIDAD: {
    nombre: "Esterilidad",
    categoria: "reproductor",
    conflicto: "Miedo y resistencia ante el proceso de la vida. No tener necesidad de vivir la experiencia de tener hijos. El miedo es más fuerte que el deseo.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Miedo y resistencia ante el proceso de la vida.",
        afirmacion: "Confío en el proceso de la vida. Siempre estoy en el lugar y el momento oportuno."
      },
      lisaBourbeau: {
        bloqueoEmocional: "Para algunas personas, ser estériles forma parte de la experiencia que deben vivir. Muchas mujeres quieren un hijo solo para sentirse más mujeres.",
        bloqueoMental: "Debes trabajar tu deseo real de ser madre y superar el miedo."
      }
    },
    consejos: [
      "Clarifica tu deseo real de ser padre/madre",
      "Trabaja el miedo a la paternidad/maternidad",
      "Permite que la vida fluya",
      "Busca apoyo emocional"
    ]
  },

  SINDROME_PREMENSTRUAL: {
    nombre: "Síndrome Premenstrual",
    categoria: "reproductor",
    conflicto: "Confusión que domina. Entrega del poder a influencias externas. Rechazo de los procesos femeninos. Dificultad para aceptar la feminidad.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Confusión que domina. Entrega del poder a influencias externas. Rechazo de los procesos femeninos.",
        afirmacion: "Asumo el control de mi mente y de mi vida. Soy poderosa y dinámica. Todo mi cuerpo funciona a la perfección."
      },
      lisaBourbeau: {
        bloqueoEmocional: "Todo problema menstrual indica dificultad para aceptar su feminidad. Actúa en reacción a su madre, que fue su primer modelo de mujer.",
        bloqueoMental: "Debes aceptar tu feminidad y no rechazar los procesos naturales de tu cuerpo."
      }
    },
    consejos: [
      "Acepta tu feminidad plenamente",
      "Recupera tu poder personal",
      "No entregues tu poder a influencias externas",
      "Trabaja la relación con tu madre"
    ]
  },

  // ============================================================
  // LOTE 5: DOLOR Y CRÓNICAS
  // ============================================================

  BURSITIS: {
    nombre: "Bursitis",
    categoria: "musculoesqueletico",
    conflicto: "Ira reprimida. Deseos de golpear a alguien. Perfeccionismo que no permite enojarse. La ira se acumula en la articulación afectada.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Ira reprimida. Deseos de golpear a alguien.",
        afirmacion: "Libero la ira de forma constructiva. Estoy en paz."
      },
      lisaBourbeau: {
        bloqueoEmocional: "La persona reprime su ira y es perfeccionista que no se permite enojarse. Si quiere golpear a alguien que se siente demasiado responsable, la bursitis será en la espalda.",
        bloqueoMental: "Debes permitirte sentir la ira sin reprimirla."
      }
    },
    consejos: [
      "Libera la ira de forma constructiva",
      "Permite enojarte sin culpa",
      "Identifica a quién quieres golpear",
      "Busca canales saludables para la ira"
    ]
  },

  DOLORES_DE_CABEZA: {
    nombre: "Dolores de Cabeza",
    categoria: "nervioso",
    conflicto: "Autodesvalorización a través de 'yos' desvalorizantes: 'me estoy quebrando la cabeza', 'soy duro de mollera'. Desprecio por uno mismo. Acumular demasiadas cosas por miedo al juicio ajeno.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Invalidación de uno mismo. Autocrítica. Miedo.",
        afirmacion: "Me amo y me apruebo. Mi mente está en paz."
      },
      jacquesMartel: {
        causa: "La cabeza = 'Mi individualidad'. Conflicto con la propia identidad."
      },
      lisaBourbeau: {
        bloqueoEmocional: "La persona se desvaloriza en lugar de apreciarse. Intenta entender todo mentalmente con exceso de esfuerzo.",
        bloqueoMental: "Debes dejar de desvalorizarte y permitirte ser quien eres."
      }
    },
    consejos: [
      "Deja de criticarte internamente",
      "Relája la mente y el cuerpo",
      "No acumules más responsabilidades de las que puedes",
      "Permite que otros te apoyen"
    ]
  },

  NEURALGIA: {
    nombre: "Neuralgia",
    categoria: "nervioso",
    conflicto: "Intento de huir de un dolor pasado. Cuando una situación actual recuerda ese dolor, se reviven los mismos miedos y especialmente la culpa. Invasión de agitación interna y amargura.",
    etapa: "Variable",
    fuentes: {
      lisaBourbeau: {
        bloqueoEmocional: "La persona intenta bloquear sus sensaciones esperando no sufrir más, pero el dolor regresa con más fuerza.",
        bloqueoMental: "Debes enfrentar el dolor pasado en lugar de huir de él."
      }
    },
    consejos: [
      "Enfrenta el dolor pasado con apoyo",
      "Libera la amargura acumulada",
      "Permite sentir sin juzgar",
      "Busca ayuda profesional para procesar traumas"
    ]
  },

  NEURALGIA_TRIGEMINO: {
    nombre: "Neuralgia del Trigémino",
    categoria: "nervioso",
    conflicto: "Castigo por una culpa. Angustia por la comunicación. 'He sentido una bofetada'. Dolor intenso en cara, labios, nariz, cuero cabelludo.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Castigo por una culpa. Angustia por la comunicación.",
        afirmacion: "Me perdono. Me amo y me apruebo. Me comunico con amor."
      }
    },
    consejos: [
      "Perdómate por lo que sientes culpa",
      "Trabaja la comunicación asertiva",
      "Libera la angustia de expresarte",
      "Busca ayuda profesional para el dolor"
    ]
  },

  ESCLERODERMIA: {
    nombre: "Esclerodermia",
    categoria: "musculoesqueletico",
    conflicto: "Separación dramática sin solución + Desvalorización consiguiente. 'Me siento mal por haberme separado de...'. Protección contra el sufrimiento.",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      louiseHay: {
        causa: "Autoprotección contra la vida. Desconfianza de la propia capacidad de cuidarse.",
        afirmacion: "Confío en mi capacidad de cuidarme. La vida me protege."
      }
    },
    consejos: [
      "Trabaja la separación que te markedó",
      "Libera el sentimiento de culpa",
      "Permite que la vida fluya",
      "Busca apoyo emocional"
    ]
  },

  ESCLEROSIS_PLACAS: {
    nombre: "Esclerosis en Placas",
    categoria: "nervioso",
    conflicto: "Conflicto de motilidad + Miedo. No poder escapar (piernas), no poder empujar o agarrar (brazos). 'No autorizado, no motorizado'. Obligaciones difíciles de aceptar.",
    etapa: "3ra Etapa (Movimiento, Valoración)",
    fuentes: {
      jacquesMartel: {
        causa: "Pensamientos rígidos hacia mí, hacia los demás y hacia las situaciones de la vida."
      },
      lisaBourbeau: {
        bloqueoEmocional: "La persona se vuelve incapaz como excusa por no haber logrado la vida perfecta que quería.",
        bloqueoMental: "Debes aprender a aceptar las limitaciones y a fluir con la vida."
      }
    },
    consejos: [
      "Acepta tus limitaciones",
      "Libera los pensamientos rígidos",
      "Permite que la vida fluya",
      "Busca apoyo emocional y médico"
    ]
  },

  ESCLEROSIS_MULTIPLE: {
    nombre: "Esclerosis Múltiple",
    categoria: "nervioso",
    conflicto: "'Si me muevo, muero'. Rabia largo tiempo reprimida. Amargura interior con relación al amor. Dualidad: 'Quiero estar aquí y cuando estoy aquí, quiero estar allá'.",
    etapa: "3ra Etapa (Movimiento, Valoración)",
    fuentes: {
      louiseHay: {
        causa: "Rigidez mental, dureza de corazón, voluntad de hierro, inflexibilidad. Miedo.",
        afirmacion: "Soy flexible en mi pensar y en mi sentir. La vida me guía."
      }
    },
    consejos: [
      "Libera la rabia reprimida",
      "Trabaja la rigidez mental",
      "Permite que el amor fluya",
      "Busca ayuda profesional"
    ]
  },

  ELA: {
    nombre: "Esclerosis Lateral Amiotrófica",
    categoria: "nervioso",
    conflicto: "Resistencia a aceptar la propia valía. Negación del éxito. No poder huir o seguir (piernas), no poder sostener o rechazar (brazos, manos).",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      louiseHay: {
        causa: "Resistencia a aceptar la propia valía. Negación del éxito.",
        afirmacion: "Sé que soy una persona valiosa. Me gusta el éxito y estoy a salvo en él."
      }
    },
    consejos: [
      "Reconoce tu valía personal",
      "Acepta el éxito que mereces",
      "Busca ayuda profesional",
      "Permite que otros te apoyen"
    ]
  },

  ESPONDILITIS: {
    nombre: "Espondilitis Anquilosante",
    categoria: "musculoesqueletico",
    conflicto: "No saber decir NO. 'Tengo que hacer una columna muy fuerte para poder soportarlo todo porque soy el pilar de supervivencia del clan familiar.' Necesidad de distancia.",
    etapa: "3ra Etapa (Movimiento, Valoración)",
    fuentes: {
      jacquesMartel: {
        causa: "Conflicto de personas que no saben decir NO. Necesitan buscar distancia y dejarse vivir."
      }
    },
    consejos: [
      "Aprende a decir NO con firmeza",
      "No cargues con las obligaciones de otros",
      "Permite que otros se cuiden a sí mismos",
      "Busca tu propio espacio vital"
    ]
  },

  DOLOR_ESPALDA: {
    nombre: "Dolor de Espalda",
    categoria: "musculoesqueletico",
    conflicto: "Zona alta: Falta de apoyo emocional, sentirse no amado. Zona media: Culpa, atascado en el pasado. Zona baja: Miedo al dinero, agotamiento. Incapacidad de hacer lo que realmente queremos.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Representa el apoyo de la vida. Falta de amor y apoyo.",
        afirmacion: "Confío en la vida. Soy digno de amor y apoyo."
      },
      jacquesMartel: {
        causa: "Falta de apoyo emocional y financiero."
      },
      lisaBourbeau: {
        bloqueoEmocional: "Sentimiento de carga oculta de sentimientos negativos reprimidos.",
        bloqueoMental: "Debes liberar lo que cargas y permitir que otros te apoyen."
      }
    },
    consejos: [
      "Identifica qué cargas en tu espalda",
      "Busca apoyo emocional y financiero",
      "Libera los sentimientos reprimidos",
      "Permite que otros te ayuden"
    ]
  },

  PROBLEMAS_MUSCULARES: {
    nombre: "Problemas Musculares",
    categoria: "musculoesqueletico",
    conflicto: "Resistencia a cambios y nuevas experiencias. Falta de motivación y voluntad. Miedo a llegar a la meta. El cuerpo dice: avanza, restablece contacto con tu voluntad.",
    etapa: "Variable",
    fuentes: {
      lisaBourbeau: {
        bloqueoEmocional: "No es debilidad o dolor que impide moverse, sino debilidad interior causada por miedo a alcanzar la meta.",
        bloqueoMental: "Debes reconectarte con tu voluntad y tu motivación."
      }
    },
    consejos: [
      "Reconecta con tu voluntad interior",
      "Identifica el miedo que te frena",
      "Permite cambios pequeños",
      "Busca nuevas motivaciones"
    ]
  },

  DISTROFIA_MUSCULAR: {
    nombre: "Distrofia Muscular",
    categoria: "musculoesqueletico",
    conflicto: "Desvalorización e impotencia. Incapacidad de avanzar, de crecer. 'No vale la pena crecer'. La persona es tan controlada por su pasado que ha llegado al límite.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "No vale la pena crecer.",
        afirmacion: "Crezco y evoluciono con facilidad. La vida me apoya."
      },
      lisaBourbeau: {
        bloqueoEmocional: "La persona tiene ideas autodestructivas inconscientes y juega el rol de víctima para llamar la atención.",
        bloqueoMental: "Debes reconocer tu valía y dejar de ser víctima."
      }
    },
    consejos: [
      "Reconoce tu valía personal",
      "Deja de ser víctima",
      "Permite tu crecimiento",
      "Busca apoyo profesional"
    ]
  },

  EPICONDILITIS: {
    nombre: "Epicondilitis",
    categoria: "musculoesqueletico",
    conflicto: "Lado izquierdo: Desvalorización del gesto, 'quiero algo y me lo impiden'. Lado derecho: Conflicto de obligación, 'estoy obligado y no tengo ganas'.",
    etapa: "3ra Etapa (Movimiento, Valoración)",
    fuentes: {
      drHamer: {
        causa: "Conflicto de obligación o desvalorización del gesto según el lado afectado."
      }
    },
    consejos: [
      "Identifica si es conflicto de obligación o desvalorización",
      "Libera la frustración acumulada",
      "Permite hacer lo que realmente quieres",
      "Busca ayuda si el dolor persiste"
    ]
  },

  LUMBAGO: {
    nombre: "Lumbago",
    categoria: "musculoesqueletico",
    conflicto: "80% conflicto sexual + sentido de culpa. 20% conflicto de dirección en vida. Personas con problemas lumbares suelen tener constantes problemas económicos o percibir que los tienen.",
    etapa: "3ra Etapa (Movimiento, Valoración)",
    fuentes: {
      drHamer: {
        causa: "Conflicto sexual con sentido de culpa. Miedo a la falta de apoyo económico."
      }
    },
    consejos: [
      "Trabaja los conflictos sexuales",
      "Libera la culpa acumulada",
      "Fortalece tu seguridad financiera",
      "Permite que otros te apoyen"
    ]
  },

  REUMA: {
    nombre: "Reuma",
    categoria: "musculoesqueletico",
    conflicto: "Sentimiento de víctima. Falta de amor. Amargura crónica. Resentimiento. Crítica hacia uno mismo o hacia los demás. Contacto no deseado y doloroso.",
    etapa: "3ra Etapa (Movimiento, Valoración)",
    fuentes: {
      jacquesMartel: {
        causa: "Frecuentemente relacionado con la crítica, bien hacia uno mismo, bien hacia los demás."
      },
      louiseHay: {
        causa: "Sentimiento de ser víctima. Falta de amor. Amargura crónica. Resentimiento.",
        afirmacion: "Creo mi propia realidad. Elijo el amor y la alegría."
      }
    },
    consejos: [
      "Deja de ser víctima",
      "Libera la amargura y el resentimiento",
      "Permite el amor fluir",
      "Trabaja la autocrítica"
    ]
  },

  // ============================================================
  // LOTE 6: PIEL Y ALERGIAS
  // ============================================================

  ALOPECIA: {
    nombre: "Alopecia",
    categoria: "piel",
    conflicto: "Conflicto de separación + Desvalorización + Pérdida de protección. Separación que aparece en el lugar donde alguien fue acariciado y ya no lo es más. No sentirse reconocido por el padre.",
    etapa: "4ta Etapa (Relación)",
    fuentes: {
      louiseHay: {
        causa: "Miedo y tensión. Intento de controlarlo todo. Desconfianza en el proceso de la vida.",
        afirmacion: "Confío en la vida. Mi fuerza interior me protege."
      },
      jacquesMartel: {
        causa: "Los cabellos = Mi fuerza. El cuero cabelludo = Mi fe y mi lado divino."
      },
      lisaBourbeau: {
        bloqueoEmocional: "La persona se deshace de su protección. Después de un incidente o decisión, no se siente protegida y tiene muchos miedos.",
        bloqueoMental: "Debes reconectarte con tu fe y tu fuerza interior."
      }
    },
    consejos: [
      "Reconecta con tu fe y tu fuerza interior",
      "Trabaja la separación que te markedó",
      "Fortalece tu sensación de protección",
      "Permite que otros te apoyen"
    ]
  },

  LUPUS_ERITEMATOSO: {
    nombre: "Lupus Eritematoso",
    categoria: "piel",
    conflicto: "'No merezco existir.' Autodestrucción. No tiene razón para vivir y preferiría morir, aunque no se decide. Ira y castigo.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Renuncia. Mejor morir que hacerse valer. Ira y castigo.",
        afirmacion: "Merezco existir y ser feliz. Elijo la vida."
      },
      lisaBourbeau: {
        bloqueoEmocional: "La persona se está autodestruyendo. No tiene razón para vivir.",
        bloqueoMental: "Debes reconocer que mereces existir y ser amado."
      }
    },
    consejos: [
      "Reconoce que mereces existir",
      "Busca ayuda profesional urgente",
      "Libera la ira contenida",
      "Permite que la vida te dé razones para vivir"
    ]
  },

  HERPES_GENITAL: {
    nombre: "Herpes Genital",
    categoria: "piel",
    conflicto: "Culpa sexual. Remordimientos. Preocupación por no servir. Representa los principios masculino y femenino.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Representan los principios masculino y femenino. Preocupación por no servir.",
        afirmacion: "Acepto mi sexualidad con amor y sin culpa."
      }
    },
    consejos: [
      "Libera la culpa sexual",
      "Acepta tu sexualidad",
      "Perdóate por el pasado",
      "Busca ayuda profesional"
    ]
  },

  HERPES_LABIAL: {
    nombre: "Herpes Labial",
    categoria: "piel",
    conflicto: "Enfado, disgusto y temor de expresarlo. Lo que no se puede decir se manifiesta en los labios.",
    etapa: "Variable",
    fuentes: {
      drHamer: {
        causa: "Enfado, disgusto y temor de expresarlo."
      }
    },
    consejos: [
      "Expresa lo que sientes sin miedo",
      "Libera el enfado de forma constructiva",
      "Permite que tus palabras fluyan",
      "No reprimas lo que tu corazón quiere decir"
    ]
  },

  MICOSIS: {
    nombre: "Micosis / Hongos",
    categoria: "piel",
    conflicto: "Rol del limpiador, papel del sepulturero. Relación con la muerte. ¿Qué son las sustancias muertas para ti? Creencias estancadas. Aferramiento al pasado.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      louiseHay: {
        causa: "Creencias estancadas. Aferramiento al pasado. Negación de las propias necesidades. Falta de apoyo a uno mismo.",
        afirmacion: "Libero el pasado y abrazo lo nuevo. Me apoyo a mí mismo."
      }
    },
    consejos: [
      "Suelta las creencias estancadas",
      "Libera el aferramiento al pasado",
      "Permite que fluya lo nuevo",
      "Cuida tu higiene emocional"
    ]
  },

  MANCHAS_ROJAS: {
    nombre: "Manchas Rojas en la Piel",
    categoria: "piel",
    conflicto: "Control excesivo de la personalidad hasta sentirse atrapada en un rol. Miedo a no responder a las expectativas de los demás. Dificultad para aceptarse como se es.",
    etapa: "Variable",
    fuentes: {
      lisaBourbeau: {
        bloqueoEmocional: "La persona se controla para mostrar una cierta personalidad hasta sentirse atrapada. Temor a no ser el ideal que creó.",
        bloqueoMental: "Debes aceptarte como eres sin necesidad de enmascararte."
      }
    },
    consejos: [
      "Acepta tu personalidad auténtica",
      "No te enmascarques para agradar",
      "Libera el miedo al juicio ajeno",
      "Permite ser quien realmente eres"
    ]
  },

  LUNARES: {
    nombre: "Lunares",
    categoria: "piel",
    conflicto: "Conflictos de desecho. Algo que la persona quiere eliminar pero no puede o no se atreve.",
    etapa: "Variable",
    fuentes: {
      drHamer: {
        causa: "Conflictos de desecho. Algo que se quiere eliminar pero se mantiene."
      }
    },
    consejos: [
      "Identifica qué quieres eliminar de tu vida",
      "Permite soltar lo que ya no necesitas",
      "Trabaja la resistencia al cambio",
      "Busca apoyo si es necesario"
    ]
  },

  ANGIOMA: {
    nombre: "Angioma",
    categoria: "piel",
    conflicto: "Angustia de la madre por una parte del cuerpo. Malformación formada por ovillos de capilares sanguíneos.",
    etapa: "Variable",
    fuentes: {
      drHamer: {
        causa: "Angustia de la madre durante el embarazo por una parte del cuerpo del bebé."
      }
    },
    consejos: [
      "Trabaja la angustia materna si es relevante",
      "Permite que tu cuerpo se exprese",
      "Busca apoyo emocional",
      "Cuida tu salud con amor"
    ]
  },

  PITYRIASIS: {
    nombre: "Pityriasis Versicolor",
    categoria: "piel",
    conflicto: "Conflicto de atentado a la integridad (hiperpigmentación) + conflicto de separación en fase de reparación. Se está curando pero se ve peor.",
    etapa: "Variable",
    fuentes: {
      drHamer: {
        causa: "Conflicto de atentado a la integridad + separación. En fase de reparación hay inflamación."
      }
    },
    consejos: [
      "Confía en el proceso de sanación",
      "No te juzgues por cómo se ve tu piel",
      "Permite que tu cuerpo se repare",
      "Busca apoyo médico si es necesario"
    ]
  },

  FORUNCULOS: {
    nombre: "Forúnculos",
    categoria: "piel",
    conflicto: "Ira hirviente. Rabia que hierve. Furia acumulada que busca salida a través de la piel.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Ira hirviente. Rabia que hierve. Furia.",
        afirmacion: "Libero la ira de forma constructiva. Estoy en paz."
      }
    },
    consejos: [
      "Libera la furia acumulada",
      "Identifica la fuente de tu ira",
      "Busca canales saludables para expresarla",
      "Permite que la rabia fluya sin hacer daño"
    ]
  },

  LIPOMA: {
    nombre: "Lipoma",
    categoria: "piel",
    conflicto: "Desvalorización estética local. Sobreprotección. Tumores benignos que representan lo que la persona quiere proteger o esconder.",
    etapa: "Variable",
    fuentes: {
      drHamer: {
        causa: "Desvalorización estética local y sobreprotección de una zona del cuerpo."
      }
    },
    consejos: [
      "Trabaja la desvalorización estética",
      "Permite que tu cuerpo sea como es",
      "No sobreprotejas lo que sientes débil",
      "Acepta tu cuerpo con amor"
    ]
  },

  LEPRA: {
    nombre: "Lepra",
    categoria: "piel",
    conflicto: "Rechazo completo. No sentirse lo suficientemente buena, ni limpia, ni pura. La persona se carcome por dentro y abandona su plan de vida.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Absoluta incapacidad para controlar la propia vida. Vieja y prolongada convicción de ser útil o impuro.",
        afirmacion: "Merezco vivir una vida plena y pura."
      },
      lisaBourbeau: {
        bloqueoEmocional: "La persona se rechaza completamente y se siente impotente ante lo que ocurre a su alrededor.",
        bloqueoMental: "Debes reconocer tu valía y permitirte ser amada."
      }
    },
    consejos: [
      "Reconoce tu valía personal",
      "No te rechaces a ti mismo",
      "Permite que otros te apoyen",
      "Busca ayuda profesional urgente"
    ]
  },

  CELULITIS: {
    nombre: "Celulitis",
    categoria: "piel",
    conflicto: "Miedo a comprometerse. Tendencia a guardar emociones del pasado. Huida de los sentimientos. Inseguridad. Rechazo de uno mismo.",
    etapa: "Variable",
    fuentes: {
      louiseHay: {
        causa: "Miedo, necesidad de protección. Huida de los sentimientos. Inseguridad. Rechazo de uno mismo.",
        afirmacion: "Estoy a salvo. Me acepto y me amo."
      },
      jacquesMartel: {
        causa: "Miedo a comprometerse y tendencia a guardar emociones del pasado."
      }
    },
    consejos: [
      "Libera las emociones del pasado",
      "No te rechaces a ti mismo",
      "Permite que la vida fluya",
      "Fortalece tu seguridad interior"
    ]
  },

  MELANOMA: {
    nombre: "Melanoma",
    categoria: "piel",
    conflicto: "Protegerse del padre (real o simbólico). Ataque a la propia integridad. Sentirse mancillado. 'Me han hecho algo sucio, me han ensuciado.'",
    etapa: "2da Etapa (Protección)",
    fuentes: {
      drHamer: {
        causa: "Protección fuerte. Conflicto de mancha, ataque a la propia integridad. Mancillamiento en sentido real o figurado."
      }
    },
    consejos: [
      "Trabaja la relación con tu padre",
      "Libera el sentimiento de mancillamiento",
      "Permite que tu integridad se restaure",
      "Busca ayuda profesional urgente"
    ]
  },

  PAPILOMA_HUMANO: {
    nombre: "Papiloma Humano",
    categoria: "piel",
    conflicto: "Separación + Suciedad. Conflicto de contacto no deseado con algo que se percibe como sucio o contaminado.",
    etapa: "1ra Etapa (Supervivencia)",
    fuentes: {
      drHamer: {
        causa: "Separación + Suciedad. Contacto con algo percibido como contaminado."
      }
    },
    consejos: [
      "Trabaja el sentimiento de contaminación",
      "Libera el miedo al contacto",
      "Permite que tu cuerpo se limpie",
      "Busca atención médica"
    ]
  }
};

// Función para buscar en el glosario
export function buscarEnGlosario(condicion) {
  const termino = condicion.toUpperCase().replace(/\s+/g, '_');
  
  // Búsqueda exacta
  if (BIODECODIFICACION[termino]) {
    return BIODECODIFICACION[termino];
  }
  
  // Búsqueda parcial
  for (const key in BIODECODIFICACION) {
    if (key.includes(termino) || termino.includes(key)) {
      return BIODECODIFICACION[key];
    }
  }
  
  // Búsqueda por nombre
  for (const key in BIODECODIFICACION) {
    const entry = BIODECODIFICACION[key];
    if (entry.nombre && entry.nombre.toLowerCase().includes(condicion.toLowerCase())) {
      return entry;
    }
  }
  
  return null;
}

// Función para obtener información de biodescodificación para una condición
export function obtenerInfoBiodescodificacion(condicion) {
  const info = buscarEnGlosario(condicion);
  
  if (!info) {
    return null;
  }
  
  return {
    nombre: info.nombre,
    categoria: info.categoria,
    conflicto: info.conflicto,
    etapa: info.etapa,
    fuentes: info.fuentes,
    consejos: info.consejos
  };
}

// Función para obtener todas las condiciones de una categoría
export function obtenerPorCategoria(categoria) {
  const resultados = [];
  
  for (const key in BIODECODIFICACION) {
    if (BIODECODIFICACION[key].categoria === categoria) {
      resultados.push(BIODECODIFICACION[key]);
    }
  }
  
  return resultados;
}

// Función para buscar múltiples condiciones
export function buscarMultiples(condiciones) {
  const resultados = [];
  
  for (const condicion of condiciones) {
    const info = buscarEnGlosario(condicion);
    if (info) {
      resultados.push(info);
    }
  }
  
  return resultados;
}

export default BIODECODIFICACION;