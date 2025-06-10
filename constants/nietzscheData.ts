
import { NietzscheData } from '../types';

export const nietzscheData: NietzscheData = {
  hero: {
    title: "Friedrich Nietzsche",
    subtitle: "Filósofo de la Voluntad de Poder y el Eterno Retorno",
    imageUrl: "https://picsum.photos/seed/nietzschehero/1200/400",
  },
  biography: {
    title: "Biografía",
    birthDate: "15 de octubre de 1844, Röcken, Prusia",
    deathDate: "25 de agosto de 1900, Weimar, Imperio Alemán",
    nationality: "Alemán (Prusiano)",
    paragraphs: [
      "Friedrich Wilhelm Nietzsche fue un filósofo, poeta, músico y filólogo alemán, considerado uno de los pensadores más influyentes del siglo XIX y de la filosofía occidental.",
      "Su obra ha ejercido una profunda influencia tanto en la historia intelectual como en la cultura occidental, abarcando temas como la verdad, la moralidad, el lenguaje, la estética, la historia, el nihilismo, el poder y la conciencia.",
      "A los 24 años, se convirtió en el catedrático más joven de filología clásica en la Universidad de Basilea. Sin embargo, su salud delicada lo obligó a renunciar en 1879. Pasó la siguiente década de su vida viajando y escribiendo prolíficamente, hasta que en 1889 sufrió un colapso mental del que nunca se recuperó. Pasó sus últimos años bajo el cuidado de su madre y luego de su hermana, Elisabeth Förster-Nietzsche.",
    ],
    imageUrl: "https://picsum.photos/seed/nietzscheportrait/400/500",
  },
  philosophy: {
    title: "Pensamiento Filosófico",
    introduction: [
      "La filosofía de Nietzsche es compleja y a menudo provocadora, desafiando las convenciones morales y religiosas de su tiempo. Sus ideas clave giran en torno a la crítica de la moral tradicional, la afirmación de la vida y la superación del nihilismo.",
      "Exploró conceptos revolucionarios que siguen siendo debatidos y analizados en la actualidad."
    ],
    imageUrl: "https://picsum.photos/seed/philosophyabstract/600/400",
    ideas: [
      {
        id: "voluntad_poder",
        name: "Voluntad de Poder (Wille zur Macht)",
        explanation: [
          "Concepto central en la filosofía tardía de Nietzsche. No se refiere simplemente al poder sobre otros, sino a una fuerza fundamental e impulsora presente en todos los seres vivos, una pulsión hacia el crecimiento, la superación, la autoafirmación y la creatividad.",
          "Es la dinámica esencial de la existencia, la afirmación de la vida en su máxima expresión."
        ],
        quotes: [
          { id: "q_vp1", text: "Este mundo es la voluntad de poder, y nada más que eso. Y vosotros mismos sois también esta voluntad de poder, y nada más que eso.", source: "Fragmentos Póstumos" },
        ],
      },
      {
        id: "eterno_retorno",
        name: "Eterno Retorno (Ewige Wiederkunft)",
        explanation: [
          "La idea de que todos los eventos del universo se repetirán exactamente de la misma manera, en un ciclo infinito. Nietzsche lo presenta como la prueba definitiva de la afirmación de la vida: ¿amarías tanto tu vida como para desear vivirla una y otra vez, eternamente?",
          "Es un pensamiento abismal que busca transformar la perspectiva sobre cada instante de la existencia."
        ],
        quotes: [
          { id: "q_er1", text: "¿Y si un día o una noche un demonio se deslizara furtivamente en tu más solitaria soledad y te dijese: 'Esta vida, como la vives ahora y la has vivido, deberás vivirla aún otra vez e innumerables veces...'?", source: "La Gaya Ciencia, §341" },
        ],
      },
      {
        id: "superhombre",
        name: "Superhombre (Übermensch)",
        explanation: [
          "El ideal de un ser humano que ha superado la moral tradicional ('moral de esclavos') y ha creado sus propios valores. El Superhombre es aquel que abraza el eterno retorno y vive afirmativamente, creando sentido en un mundo sin Dios.",
          "No es una figura racial ni biológica, sino un objetivo espiritual y existencial."
        ],
        quotes: [
          { id: "q_sm1", text: "El hombre es una cuerda tendida entre el animal y el superhombre; una cuerda sobre un abismo.", source: "Así Habló Zaratustra" },
          { id: "q_sm2", text: "Yo os enseño el superhombre. El hombre es algo que debe ser superado.", source: "Así Habló Zaratustra" },
        ],
      },
      {
        id: "muerte_dios",
        name: "Muerte de Dios (Gott ist tot)",
        explanation: [
          "No una declaración literal, sino una metáfora para describir la pérdida de la fe en Dios y en los valores absolutos que la religión proporcionaba en la cultura occidental. Esta 'muerte' abre un vacío (nihilismo) pero también la posibilidad de crear nuevos valores.",
          "Es un diagnóstico cultural y una llamada a la responsabilidad humana."
        ],
        quotes: [
          { id: "q_md1", text: "Dios ha muerto. Dios sigue muerto. Y nosotros lo hemos matado. ¿Cómo hemos podido hacerlo?", source: "La Gaya Ciencia, §125" },
        ],
      },
      {
        id: "nihilismo",
        name: "Nihilismo",
        explanation: [
          "La consecuencia de la 'muerte de Dios': la creencia de que la vida carece de significado, propósito o valor intrínseco. Nietzsche vio el nihilismo como un peligro, pero también como una etapa transitoria hacia la revalorización de todos los valores y la creación de un nuevo sentido.",
          "Distinguió entre nihilismo pasivo (resignación) y activo (destrucción para crear)."
        ],
        quotes: [
          { id: "q_nh1", text: "Nihilista es el hombre que juzga que el mundo, tal como es, no debería existir, y que el mundo, tal como debería ser, no existe.", source: "Fragmentos Póstumos" },
        ],
      },
    ],
  },
  works: {
    title: "Obras Principales",
    introduction: [
      "La producción literaria de Nietzsche es vasta y diversa, abarcando desde tratados filosóficos hasta aforismos y poesía. Sus obras son conocidas por su estilo apasionado y a menudo polémico.",
      "A continuación, se presentan algunas de sus obras más influyentes con enlaces a versiones digitales gratuitas (cuando disponibles en español) o a ediciones en Amazon.es."
    ],
    list: [
      {
        id: "zaratustra",
        title: "Así Habló Zaratustra (Also sprach Zarathustra)",
        year: "1883-1885",
        description: "Obra central, presenta muchas de sus ideas clave como el Superhombre y el Eterno Retorno a través de la figura profética de Zaratustra.",
        imageUrl: "https://picsum.photos/seed/zaratustra/300/450",
        links: [
          { type: "Wikisource", url: "https://es.wikisource.org/wiki/As%C3%AD_habl%C3%B3_Zaratustra", icon: "fas fa-book-open" },
          { type: "Amazon.es", url: "https://www.amazon.es/dp/8420674514", icon: "fab fa-amazon" },
        ],
      },
      {
        id: "mas_alla",
        title: "Más Allá del Bien y del Mal (Jenseits von Gut und Böse)",
        year: "1886",
        description: "Una crítica de la moral tradicional y una 'preludio a una filosofía del futuro', explorando la 'voluntad de verdad' y el perspectivismo.",
        imageUrl: "https://picsum.photos/seed/masalla/300/450",
        links: [
          { type: "Wikisource", url: "https://es.wikisource.org/wiki/M%C3%A1s_all%C3%A1_del_bien_y_del_mal", icon: "fas fa-book-open" },
          { type: "Amazon.es", url: "https://www.amazon.es/dp/8420678943", icon: "fab fa-amazon" },
        ],
      },
      {
        id: "genealogia",
        title: "La Genealogía de la Moral (Zur Genealogie der Moral)",
        year: "1887",
        description: "Investiga los orígenes y la evolución de los conceptos morales, distinguiendo entre 'moral de señores' y 'moral de esclavos'.",
        imageUrl: "https://picsum.photos/seed/genealogia/300/450",
        links: [
          { type: "Wikisource", url: "https://es.wikisource.org/wiki/La_genealog%C3%ADa_de_la_moral", icon: "fas fa-book-open" },
          { type: "Amazon.es", url: "https://www.amazon.es/dp/842067221X", icon: "fab fa-amazon" },
        ],
      },
      {
        id: "anticristo",
        title: "El Anticristo (Der Antichrist)",
        year: "1888 (publicado 1895)",
        description: "Una crítica feroz al cristianismo, al que considera una religión nihilista y contraria a los instintos vitales.",
        imageUrl: "https://picsum.photos/seed/anticristo/300/450",
        links: [
          { type: "Wikisource", url: "https://es.wikisource.org/wiki/El_Anticristo", icon: "fas fa-book-open" },
          { type: "Amazon.es", url: "https://www.amazon.es/dp/8420672201", icon: "fab fa-amazon" },
        ],
      },
      {
        id: "ecce_homo",
        title: "Ecce Homo (Ecce Homo: Wie man wird, was man ist)",
        year: "1888 (publicado 1908)",
        description: "Autobiografía intelectual donde Nietzsche revisa sus obras y su vida, con títulos de capítulos provocadores como 'Por qué soy tan sabio'.",
        imageUrl: "https://picsum.photos/seed/eccehomo/300/450",
        links: [
          { type: "Wikisource", url: "https://es.wikisource.org/wiki/Ecce_Homo_(Nietzsche)", icon: "fas fa-book-open" },
          { type: "Amazon.es", url: "https://www.amazon.es/dp/8420679001", icon: "fab fa-amazon" },
        ],
      },
      {
        id: "nacimiento_tragedia",
        title: "El Nacimiento de la Tragedia en el Espíritu de la Música (Die Geburt der Tragödie aus dem Geiste der Musik)",
        year: "1872",
        description: "Su primera obra importante, analiza la tragedia griega a través de los conceptos de lo apolíneo y lo dionisíaco.",
        imageUrl: "https://picsum.photos/seed/tragedia/300/450",
        links: [
          { type: "Gutenberg", url: "https://www.gutenberg.org/ebooks/53099", icon: "fas fa-book" },
          { type: "Wikisource", url: "https://es.wikisource.org/wiki/El_nacimiento_de_la_tragedia_en_el_esp%C3%ADritu_de_la_m%C3%BAsica", icon: "fas fa-book-open" },
          { type: "Amazon.es", url: "https://www.amazon.es/dp/842067171X", icon: "fab fa-amazon" },
        ],
      },
      {
        id: "humano_demasiado",
        title: "Humano, Demasiado Humano (Menschliches, Allzumenschliches)",
        year: "1878-1880",
        description: "Marca un giro en su pensamiento, adoptando un estilo aforístico y una perspectiva más científica y escéptica.",
        imageUrl: "https://picsum.photos/seed/humano/300/450",
        links: [
          { type: "Wikisource", url: "https://es.wikisource.org/wiki/Humano,_demasiado_humano", icon: "fas fa-book-open" },
          { type: "Amazon.es", url: "https://www.amazon.es/dp/8446046757", icon: "fab fa-amazon" },
        ],
      },
    ],
  },
  influencesReceived: {
    title: "Influencias Recibidas",
    introduction: [
      "El pensamiento de Nietzsche no surgió en el vacío. Estuvo profundamente influenciado por filósofos anteriores, la cultura griega antigua y figuras contemporáneas.",
      "Estas influencias fueron a menudo críticamente asimiladas y transformadas en su propio sistema filosófico."
    ],
    points: [
      { id: "schopenhauer", name: "Arthur Schopenhauer", description: ["La idea de la 'voluntad' de Schopenhauer fue un punto de partida crucial para Nietzsche, aunque luego la transformó en su 'voluntad de poder'. Inicialmente, Nietzsche fue un ferviente admirador de Schopenhauer."] },
      { id: "kant", name: "Immanuel Kant", description: ["Nietzsche se enfrentó críticamente a la filosofía de Kant, especialmente a su 'imperativo categórico' y la noción de 'cosa en sí'. La crítica nietzscheana a la metafísica tiene raíces en el debate postkantiano."] },
      { id: "griegos", name: "Filosofía Griega Antigua", description: ["Especialmente los presocráticos como Heráclito (con su idea del devenir constante) y la tragedia griega (concepto de lo dionisíaco y apolíneo). Valoraba el espíritu agonístico y afirmativo de la vida de los griegos."] },
      { id: "wagner", name: "Richard Wagner", description: ["Al principio, Nietzsche vio en Wagner y su música la promesa de un renacimiento cultural. Sin embargo, más tarde rompió con él, criticando su nacionalismo y su conversión al cristianismo (Parsifal)."] },
      { id: "spinoza", name: "Baruch Spinoza", description: ["Aunque no siempre explícito, hay paralelismos en la afirmación de la vida, la crítica a la teleología y la idea del 'conatus' (esfuerzo por perseverar en el ser) de Spinoza con la voluntad de poder nietzscheana."] },
    ],
    imageUrl: "https://picsum.photos/seed/influencesold/600/400",
  },
  influenceExerted: {
    title: "Influencia Ejercida",
    introduction: [
      "Pocos filósofos han tenido un impacto tan amplio y duradero como Nietzsche. Su pensamiento ha resonado en campos tan diversos como la filosofía, la literatura, la psicología, el arte y la teoría política.",
      "Su obra sigue siendo una fuente de inspiración y controversia."
    ],
    points: [
      { id: "existencialismo", name: "Existencialismo", description: ["Pensadores como Jean-Paul Sartre, Albert Camus y Martin Heidegger encontraron en Nietzsche ideas fundamentales sobre la libertad, la responsabilidad individual, la ausencia de un sentido predefinido y la creación de valores."] },
      { id: "postestructuralismo", name: "Postestructuralismo y Postmodernismo", description: ["Autores como Michel Foucault (genealogía del poder), Jacques Derrida (deconstrucción) y Gilles Deleuze se inspiraron en su crítica del sujeto, la verdad y el lenguaje."] },
      { id: "psicologia", name: "Psicología", description: ["Aunque con interpretaciones diversas, Sigmund Freud reconoció la agudeza psicológica de Nietzsche. Carl Jung también tomó conceptos nietzscheanos. Su exploración de los instintos y lo irracional fue precursora."] },
      { id: "literatura_arte", name: "Literatura y Arte", description: ["Numerosos escritores (André Gide, Thomas Mann, Hermann Hesse, Yeats) y artistas se sintieron atraídos por su vitalismo, su crítica cultural y su estilo poético."] },
      { id: "teoria_critica", name: "Teoría Crítica", description: ["La Escuela de Frankfurt y otros teóricos críticos han dialogado con las ideas de Nietzsche sobre el poder, la ideología y la crítica de la modernidad."] },
    ],
    imageUrl: "https://picsum.photos/seed/influencefuture/600/400",
  },
  context: {
    title: "Contexto Histórico y Filosófico",
    introduction: [
      "Nietzsche vivió y escribió en una época de profundas transformaciones en Europa: el auge del industrialismo, el nacionalismo, el positivismo científico y una creciente crisis de los valores tradicionales.",
      "Su filosofía es, en gran medida, una respuesta a este contexto."
    ],
    paragraphs: [
      "El siglo XIX fue testigo del declive de la influencia religiosa y metafísica, y el ascenso de la ciencia como paradigma explicativo dominante (positivismo). Nietzsche criticó tanto la fe dogmática como la fe ciega en la ciencia.",
      "Políticamente, fue la era de la unificación alemana bajo Bismarck, el imperialismo europeo y el surgimiento de movimientos sociales como el socialismo y el anarquismo. Nietzsche fue crítico con el nacionalismo y las ideologías de masas.",
      "Filosóficamente, el idealismo alemán (Hegel) había entrado en crisis, y surgían corrientes como el materialismo (Marx, Feuerbach) y el vitalismo. Schopenhauer representó una importante corriente pesimista que influyó inicialmente a Nietzsche.",
      "La 'crisis de los valores' o 'nihilismo' que Nietzsche diagnosticó se refería a la pérdida de fundamentos para la moral y el sentido de la vida, una vez que la cosmovisión religiosa judeocristiana perdía su centralidad.",
    ],
    imageUrl: "https://picsum.photos/seed/historycontext/600/400",
  },
  externalLinks: {
    title: "Enlaces Externos y Fuentes",
    items: [
      { id: "ext_sep", text: "Nietzsche en la Stanford Encyclopedia of Philosophy (Inglés)", url: "https://plato.stanford.edu/entries/nietzsche/", category: "fuente_secundaria" },
      { id: "ext_iep", text: "Nietzsche en la Internet Encyclopedia of Philosophy (Inglés)", url: "https://iep.utm.edu/nietzsch/", category: "fuente_secundaria" },
      { id: "ext_wikisource_autor", text: "Obras de Nietzsche en Wikisource (Español)", url: "https://es.wikisource.org/wiki/Autor:Friedrich_Nietzsche", category: "fuente_primaria" },
      { id: "ext_gutenberg_nietzsche_es", text: "Obras de Nietzsche en Proyecto Gutenberg (Español)", url: "https://www.gutenberg.org/ebooks/search/?query=nietzsche&lang=es", category: "fuente_primaria" },
      { id: "academia_1", text: "Artículo: 'La actualidad del pensamiento de Nietzsche' en Academia.edu", url: "https://www.academia.edu/36531339/La_actualidad_del_pensamiento_de_Nietzsche", category: "academia" },
      { id: "academia_2", text: "Artículo: 'Nietzsche y la muerte de Dios: Implicaciones filosóficas y culturales' en Academia.edu", url: "https://www.academia.edu/5678130/Nietzsche_y_la_muerte_de_Dios_Implicaciones_filos%C3%B3ficas_y_culturales", category: "academia" },
      { id: "academia_search", text: "Buscar más artículos sobre Nietzsche en Academia.edu", url: "https://www.academia.edu/Documents/in/Nietzsche", category: "academia" },
      { id: "nietzsche_society", text: "The Nietzsche Society (Inglés)", url: "http://www.nietzschesociety.com/", category: "lectura_adicional" },
    ],
  },
};
