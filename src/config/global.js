export default {
  global: {
    componenteFormativo: 'Presupuesto de los eventos',
    descripcionCurso:
      'Un factor importante en la organización de eventos es el presupuesto que se va a ejecutar, lo cual requiere generar la ficha técnica, revisar costos, gastos y, en algunos casos, conseguir apoyo a través de alianzas o patrocinios; con el fin de que la inversión no recaiga únicamente en la empresa pionera o líder del evento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Presupuesto de eventos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Elementos del presupuesto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fuentes de ingreso',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Impuestos tributarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Normativa de espectáculos públicos y derechos de autor',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Presupuesto',
      referencia:
        'Ortega, F. (2022). <i>Guía para crear el presupuesto de un evento.</i> Ingenieriademenu.com.',
      tipo: 'Documento',
      link: 'https://ingenieriademenu.com/presupuesto-de-un-evento/',
    },
    {
      tema: 'Impuestos',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2021d). <i>Formulario 300. Declaración de IVA.</i> Ecosistema de Recursos Educativos Digitales SENA. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rNQHO71sACo',
    },
    {
      tema: 'Impuestos',
      referencia:
        'Colombia, Presidencia de la República (2016, 11 de octubre). <i>Decreto 1625 de 2016 “por medio del cual se expide el Decreto Único Reglamentario en materia tributaria”</i>. D. O. 50023.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=83233.',
    },
    {
      tema: 'Impuestos',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2020). (2020). <i>Obligaciones tributarias.</i> Ecosistemas de Recursos Educativos Digitales SENA. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EaiOTdj--yc',
    },
    {
      tema: 'Impuestos',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2021). <i>¿Qué es la evasión de impuestos y elusión? ¿Cuáles son los tipos de evasión?</i> Ecosistemas de Recursos Educativos Digitales SENA.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CAVj4nbua3s.',
    },
    {
      tema: 'Impuestos',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2022). <i>Sanciones tributarias.</i> Ecosistemas de Recursos Educativos Digitales SENA.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nk249S3Wfck.',
    },
    {
      tema: 'Norma sobre espectáculos públicos y derechos de autor',
      referencia:
        'Congreso de Colombia (2011, 26 de diciembre). <i>Ley 1493 de 2011 “por la cual se toman medidas para formalizar el sector del espectáculo público de las artes escénicas, se otorgan competencias de inspección, vigilancia y control sobre las sociedades de gestión colectiva y se dictan otras disposiciones”.</i> ',
      tipo: 'Documento',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=45246',
    },
    {
      tema: 'Norma sobre espectáculos públicos y derechos de autor',
      referencia:
        'Congreso de Colombia (1982, 28 de enero). <i>Ley 23 de 1982 “sobre derechos de autor”.</i> D. O. 35 949. ',
      tipo: 'Documento',
      link: 'https://bit.ly/3eUEInR',
    },
  ],
  glosario: [
    {
      termino: 'Costo',
      significado:
        'Valor monetario dado a un producto, bien o servicio para su comercialización.',
    },
    {
      termino: 'Deportes electrónicos <i>(e-sports)</i>',
      significado:
        'Los deportes electrónicos <i>(e-sports, e-games)</i>, o actividad de jugar videojuegos en diferentes disciplinas contra otras personas o por internet, convocan gran número de jugadores y espectadores en todas partes del mundo en competiciones organizadas por la red.',
    },
    {
      termino: 'Derecho de denominación',
      significado:
        'Quiere decir que una marca, empresa o entidad adquiere el derecho de nombrar un lugar o evento, por un periodo de tiempo.',
    },
    {
      termino: 'Emisión en directo <em>(streaming)</em>',
      significado:
        'Emisión en directo o de manera continua, sin interrupciones, de un espectáculo por internet, radio o televisión.',
    },
    {
      termino: 'Franquicia',
      significado:
        'Tipo de negociación en la que una empresa, consolidada en el mercado, concede a otra el derecho de usar su nombre, logo y demás particularidades de comercialización en condiciones específicas, guardando su imagen en un territorio determinado a cambio de un beneficio financiero.',
    },
    {
      termino: 'Gasto',
      significado:
        'Egreso de dinero que representa una disminución en la inversión, capital o ganancias, ya que, aunque es necesario para el desarrollo del evento, no hay retorno o beneficio.',
    },
    {
      termino: 'Gravar',
      significado:
        'Imponer el pago de impuesto, tasa o tributo por parte de una autoridad, asociado a la realización de una actividad, evento, transacción, etc. Es de obligatorio cumplimiento.',
    },
    {
      termino: 'Patrocinador',
      significado:
        'Persona natural o jurídica que apoya o financia un evento de manera parcial o total con el fin de obtener reconocimiento en el mercado, y a su vez hacerle publicidad a su empresa.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'Planeación financiera en función del tiempo, que relaciona los ingresos, egresos y pasivos para la realización de un evento. Contempla las inversiones, compras, gastos y pagos con el fin de prever la viabilidad, éxito y ganancias de este.',
    },
    {
      termino:
        'Productos de promoción comercial o de cesión de marca <em>(merchandising)</em>',
      significado:
        'Son productos (llaveros, esferos, libretas, camisetas, etc.) con la imagen o logotipo de una marca, bien sea la que organiza el espectáculo o una asociada o patrocinadora, que se regalan o venden en un espectáculo, con el objetivo de posicionar y crear recordación de esa marca entre el público. ',
    },
    {
      termino: 'Regalía',
      significado:
        'Compensación monetaria de carácter obligatorio, que se realiza como reconocimiento por el derecho al uso, explotación o comercialización de la propiedad intelectual de otro.',
    },
    {
      termino: 'Tercerización <em>(outsourcing)</em>',
      significado:
        'Subcontratación de un tercero especialista en un producto, servicio o actividad, al cual se le delegan ciertas funciones específicas permitiendo beneficios financieros, operacionales o productivos.',
    },
    {
      termino: 'Trueque',
      significado:
        'Intercambio de bienes o servicios según las necesidades, entre dos o más partes, en el que se busca el beneficio mutuo que no está relacionado con dinero.',
    },
    {
      termino: 'Unidad de valor tributario (UVT)',
      significado:
        'Medida usada para estandarizar los distintos valores tributarios en Colombia. La fija el Gobierno según algunos índices como el de precios al consumidor, y cambia cada año. En 2022 una UVT equivale a $38 004.',
    },
  ],
  referencias: [
    {
      referencia:
        'Broseta, A. (2020, 30 de enero). ¿Qué son los impuestos? [blog] <i>Rankia</i>.',
      link: 'https://www.rankia.co/blog/dian/3687409-que-son-impuestos',
    },
    {
      referencia:
        'Calendario Tributario (s. f.). <i>¿Qué grava el impuesto de timbre nacional?</i> Calendario Tributario. ',
      link: 'https://calendariotributario.org/impuesto-de-timbre/.',
    },
    {
      referencia:
        'Clavijo, C. (2022). Fijación de precios. Definición, factores y objetivos [blog]. <i>HubSpot.</i>',
      link: 'https://blog.hubspot.es/sales/que-es-fijacion-de-precios',
    },
    {
      referencia:
        'Colombia, Presidencia de la República (2012, 14 de junio). Decreto 1258 de 2012 “por el cual se reglamenta la Ley 1493 de 2011”. D. O. 48 461. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=47809.',
    },
    {
      referencia:
        'Colombia, Presidencia de la República (2013, 14 de junio). Decreto 1240 de 2013 “por el cual se reglamenta la Ley 1493 de 2011, se modifica el Decreto 1258 de 2012 y se dictan otras disposiciones”. D. O. 48821. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53508.',
    },
    {
      referencia:
        'Colombia, Presidencia de la República (2016, 11 de octubre). Decreto 1625 de 2016 “por medio del cual se expide el Decreto Único Reglamentario en materia tributaria”. D. O. 50023. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=83233.',
    },
    {
      referencia:
        'Coma, M. (2020). <i>El presupuesto de un evento: cómo calcularlo, tipos y consejos</i>. Differentia events.',
      link:
        'https://www.differentiaevents.com/como-calcular-presupuesto-organizar-evento/.',
    },
    {
      referencia: 'ConceptoABC (s. f.). <i>Utilidad</i>. ConceptoABC.',
      link: 'https://conceptoabc.com/utilidad/.',
    },
    {
      referencia:
        'Congreso de Colombia (1982, 28 de enero). Ley 23 de 1982 “sobre derechos de autor”. D. O. 35 949.',
      link: 'https://bit.ly/3eUEInR.',
    },
    {
      referencia:
        'Congreso de Colombia (1983, 6 de julio). Ley 14 de 1983 “por la cual se fortalecen los fiscos de las entidades territoriales y se dictan otras disposiciones”. D. O. 36 288.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=267.',
    },
    {
      referencia:
        'Congreso de Colombia (2011, 26 de diciembre). Ley 1493 de 2011 “por la cual se toman medidas para formalizar el sector del espectáculo público de las artes escénicas, se otorgan competencias de inspección, vigilancia y control sobre las sociedades de gestión colectiva y se dictan otras disposiciones”. D. O. 48294.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=45246.',
    },
    {
      referencia:
        'Editorial Grudemi (2020). <i>Alianzas estratégicas</i>. Enciclopedia Económica. Última actualización: agosto 2022 ',
      link: 'https://enciclopediaeconomica.com/alianzas-estrategicas/.',
    },
    {
      referencia:
        'Equipo Editorial Etecé (2021, 5 de agosto).<i> Utilidad</i>. Equipo Editorial Etecé. ',
      link: 'https://concepto.de/utilidad-2/.',
    },
    {
      referencia:
        'Equipo EventMobi. (2022, 13 de febrero). Conceptos básicos del presupuesto del evento: todo lo que necesita saber [blog]. <i>Eventmobi</i>.',
      link: 'https://www.eventmobi.com/blog/event-budget-basics/.',
    },
    {
      referencia:
        'Equipo Ineventos (s. f.). Cómo elaborar el presupuesto para un evento [blog]. <i>Ineventos</i>.',
      link: 'https://www.ineventos.es/blog/el-presupuesto-de-un-evento.html',
    },
    {
      referencia:
        'Gerencie.com (2021). Declaración del impuesto a las ventas (IVA). <i>Gerencie.com.</i>',
      link:
        'https://www.gerencie.com/declaracion-del-impuesto-a-las-ventas.html#Quien_estan_obligados_a_presentar_la_declaracion_de_Iva.',
    },
    {
      referencia:
        'González, A. (2022). <i>Todo lo que necesitas saber del presupuesto de un evento</i>. Orquidea Technology Group.',
      link:
        'https://orquideatech.com/todo-lo-que-necesitas-saber-del-presupuesto-de-un-evento/.',
    },
    {
      referencia:
        'Jiménez, M. y Panizo, J. (2017). <i>Eventos y protocolo: la gestión estratégica de actos corporativos e institucionales</i>. Editorial UOC.',
      link: 'https://www.torrossa.com/digital/toc/2017/3938065_TOC.pdf',
    },
    {
      referencia:
        'Meetmaps. (2018, febrero 28). Diferentes maneras de financiar tu evento [blog]. <i>Meetmaps</i>.',
      link:
        'https://blog.meetmaps.com/diferentes-maneras-de-financiar-tu-evento/.',
    },
    {
      referencia:
        'Navarro, L. (2018). <i>Planificación, organización y control de eventos</i>. IC Editorial.',
      link:
        'https://books.google.com.co/books?id=01IpEAAAQBAJ&pg=PT3&hl=es&source=gbs_toc_r&cad=3#v=onepage&q&f=false',
    },
    {
      referencia:
        'Orellana, P. (2021). <i>Alianza estratégica</i>. Economipedia.com.',
      link: 'https://economipedia.com/definiciones/alianza-estrategica.html.',
    },
    {
      referencia:
        'Ortega, F. (2022). <i>Guía para crear el presupuesto de un evento</i>. Ingenieriademenu.com.',
      link: 'https://ingenieriademenu.com/presupuesto-de-un-evento/.',
    },
    {
      referencia:
        'Piturda.com (s. f.). <i>Presupuesto para organizar un evento: qué tener en cuenta</i>. Piturda.com.',
      link:
        'https://piturda.com/para-promotores/presupuesto-para-organizar-un-evento-que-tener-en-cuenta/.',
    },
    {
      referencia:
        'Redacción Topcomunicación (2020). <i>Conoce cuáles son los principales tipos de patrocinio</i>. Topcomunicación & RR. PP.',
      link:
        'https://www.topcomunicacion.com/tipos-de-patrocinio-clasificacion-de-patrocinadores/.',
    },
    {
      referencia:
        'Saber Más, Ser Más (s. f.). <i>¿Qué es el IVA?</i> Asobancaria, Saber Más, Ser más.',
      link: 'https://www.sabermassermas.com/que-es-el-iva/.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2020). “Flujos de caja” [video]. Ecosistema de Recursos Educativos Digitales SENA.',
      link: 'https://www.youtube.com/watch?v=4ob5QS5a44w.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2021a). “Tipos de precios” [video]. Ecosistema de Recursos Educativos Digitales SENA.',
      link: 'https://www.youtube.com/watch?v=_cXcHSVingo.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2021b). “Cálculo ROI” [video]. Ecosistema de Recursos Educativos Digitales SENA.',
      link: 'https://www.youtube.com/watch?v=PQR2ywfYTEI.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2021c). “Historia de los impuestos” [video]. Ecosistema de Recursos Educativos Digitales SENA.',
      link: 'https://www.youtube.com/watch?v=HL9RtAhdPAY.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2021d). “Formulario 300. Declaración de IVA”. Ecosistema de Recursos Educativos Digitales SENA.',
      link: 'https://www.youtube.com/watch?v=rNQHO71sACo.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA] (2021e). “Formulario 350. Retención en la fuente” [video]. Ecosistema de Recursos Educativos Digitales SENA.',
      link: 'https://www.youtube.com/watch?v=Nu0so84PvI8.',
    },
    {
      referencia:
        'Vivetix (2020). <i>¿Cómo conseguir patrocinadores para un evento?</i> [blog]. Vivetix.',
      link: 'https://vivetix.com/f/p/b/como-conseguir-patrocinadores-evento#_.',
    },
    {
      referencia:
        'Weezevent (2020, mayo 26). 12 ideas para optimizar y perpetuar los ingresos de tu evento [blog]. <i>Weezevent</i>.',
      link:
        'https://weezevent.com/es/blog/ideas-optimizar-perpetuar-ingresos-evento/.',
    },
    {
      referencia:
        'Wong, M. (2019, abril 18). Cómo desarrollar un presupuesto de evento para tu reunión o evento [blog]. <i>Eventmobi.</i>',
      link:
        'https://www.eventmobi.com/es/blog/como-desarrollar-un-presupuesto-de-evento-para-tu-reunion-o-evento/#:~:text=El%20presupuesto%20de%20tu%20evento,podr%C3%ADan%20cambiar%20con%20el%20tiempo.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
