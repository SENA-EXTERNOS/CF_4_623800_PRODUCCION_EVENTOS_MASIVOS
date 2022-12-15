<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 2
      h1 Elementos del presupuesto

    .row.my-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
        )
        .bloque-texto-g1__texto.p-2
          p.mb-3 Para elaborar un presupuesto de eventos es importante tener claro cuáles son todos los elementos que se requieren para su desarrollo e implementación en cada una de sus fases, con el fin de establecer con mucha claridad todos los rubros que se necesitan para llevarlo a cabo con éxito. Estos se verán a continuación. 
          b.mt-3 Costo o costes
          p.mt-3 Para definir el costo del servicio de organización de eventos, se deben determinar los recursos requeridos para prestarlo y todos los aspectos exigibles de este, así como todo lo que el organizador debe contemplar para sus gastos de mantenimiento.

    .row.my-5
      p Los costos se definen como lo que cuestan los insumos, como alimentos, recursos técnicos, alojamiento, transporte, talento humano, etc. Es decir, todo lo que se necesita para producir el evento. La importancia del costo es calcular el precio adecuado de los recursos que se van a utilizar y los servicios que exija el evento, adicionalmente, conocer qué servicios producen utilidades o pérdidas, y en qué magnitud. Los costos pueden ser fijos, variables, directos o indirectos, como se describe a continuación.
      p.mt-3 #[strong Costos fijos:] independientemente de la cantidad de personas que asistan al evento, estos costos no varían.
      p.text-center.mt-3 Dentro de los costos fijos podemos encontrar:


    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.terjeta--morada.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='AvatarTop') 
          p.text-center Decoración, sonido, video y todo el equipamiento técnico.

      .tarjeta.terjeta--morada.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='AvatarTop') 
          p.text-center Invitaciones.

      .tarjeta.terjeta--morada.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='AvatarTop') 
          p.text-center Promoción y difusión del evento.

      .tarjeta.terjeta--morada.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='AvatarTop') 
          p.text-center Lugar donde se llevará a cabo el evento.

      .tarjeta.terjeta--morada.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='AvatarTop') 
          p.text-center Contratación de extras, como espectáculos o actividades.

      .tarjeta.terjeta--morada.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img7.svg', alt='AvatarTop') 
          p.text-center Servicio de montaje y desmontaje del evento.

      .tarjeta.terjeta--morada.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img8.svg', alt='AvatarTop') 
          p.text-center Viáticos de invitados.

      .tarjeta.terjeta--morada.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img9.svg', alt='AvatarTop') 
          p.text-center Actos protocolares de apertura y cierre.

      .tarjeta.terjeta--morada.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img10.svg', alt='AvatarTop') 
          p.text-center Inscripciones.

      .tarjeta.terjeta--morada.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img11.svg', alt='AvatarTop') 
          p.text-center Seguros.

    .row.my-5
      p.text-center Veamos a continuación los otros tipos de costos.

    .row.justify-content-center.my-5
      .col-lg-4.my-3(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-acento-botones
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img12.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p Costos variables o que cambian dependiendo de la cantidad de asistentes al evento. Por ejemplo, alojamiento, alimentación, bebidas, servicio de estacionamiento, material de apoyo para los asistentes (folletos, credenciales, regalos, diplomas), entre otros.

      .col-lg-4.my-3(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img13.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.my-5 Costos directos, que tienen que ver o se relacionan directamente con el evento, como publicidad, alojamiento y alimentación.


      .col-lg-4.my-3(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img14.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.texto-blanco.mt-4 Costos indirectos que no se relacionan directamente con el evento, pero se requieren para la realización de este, como servicios públicos de oficina, sueldo del personal, pago de impuestos y licencias.

    .row.my-5
      p Para mayor claridad en el tema de los costos de eventos, a continuación, se muestra un ejemplo donde se identifican cuáles pueden ser los costos fijos, los variables, los directos y los indirectos.
      p.text-center El ejemplo es el siguiente:

      .tarjeta.tarjeta--amarilla.p-4.mt-4
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-5.mt-4
              p La empresa Felicidad debe organizar un evento para uno de sus clientes, que va a presentar una nueva línea de calzado para mujer a un grupo de cincuenta personas. La empresa de zapatos enviará a cinco expertos con todos los elementos necesarios para dar a conocer los nuevos modelos. 

            .col-lg-6.mt-4
              figure
                img(src='@/assets/curso/temas/tema2/img15.svg', alt='') 

          .row.justify-content-center
            .col-lg-5.mt-4
              p Teniendo en cuenta la información anterior, la empresa Felicidad solo deberá encargarse de:
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Alquiler y montaje del salón.
                li 
                  i.fas.fa-check
                  | Alojamiento para los cinco expertos de la empresa de calzado.
                li 
                  i.fas.fa-check
                  | Coctel de clausura y pasabocas (cincuenta y cinco personas: cincuenta invitados más los cinco expertos de la empresa).
                li 
                  i.fas.fa-check
                  | Maestro de ceremonias. 

            .col-lg-6.mt-4
              figure
                img(src='@/assets/curso/temas/tema2/img16.svg', alt='') 

          .row.justify-content-center
            .col-lg-5.mt-4
              p La empresa Felicidad recurre a sus proveedores y hace una selección de sus mejores ofertas para presentarle el presupuesto a su cliente así:
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Alquiler del salón para 55 personas = $1´000.000.
                li 
                  i.fas.fa-check
                  | Alojamiento para 5 personas por una noche: $150.000 por persona.
                li 
                  i.fas.fa-check
                  | Coctel de clausura y pasabocas: $20.000 por persona.

                li 
                  i.fas.fa-check
                  | Maestro de ceremonias: $200.000.

            .col-lg-6.mt-4
              figure
                img(src='@/assets/curso/temas/tema2/img17.svg', alt='') 

          .row.justify-content-center
            .col-lg-5.mt-4
              p De acuerdo con la tabla podemos identificar que:
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Los costos fijos son el alquiler del salón y el maestro de ceremonias, puesto que su precio no varía según el número de personas que asisten al evento.
                li 
                  i.fas.fa-check
                  | Los costos variables son los precios correspondientes al alojamiento, el coctel y los pasabocas, puesto que el precio varía según el número de personas que asisten al evento.
                li 
                  i.fas.fa-check
                  | Los costos directos son todos los relacionados directamente con el evento, esto es, el alquiler del salón, el alojamiento, el coctel, los pasabocas y el maestro de ceremonias.
                li 
                  i.fas.fa-check
                  | Los costos indirectos son los servicios de la oficina y el sueldo de los empleados de la empresa organizadora del evento.

            .col-lg-6.mt-4
              figure
                img(src='@/assets/curso/temas/tema2/img18.svg', alt='') 

          .row.justify-content-center
            .col-lg-5.mt-4
              p La importancia del costo es calcular el precio adecuado de los recursos que se van a utilizar y los servicios que exija el evento. Es muy relevante conocer qué servicios producen utilidades o pérdidas y en qué magnitud, así como tener en cuenta que los costos totales son el resultado de la sumatoria de los costos fijos y los variables, de la siguiente manera:
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Costos totales = costos fijos + costos variables

            .col-lg-6.mt-4
              figure
                img(src='@/assets/curso/temas/tema2/img19.svg', alt='') 

    
    .row.justify-content-center.my-5
      .col-lg-4
        p Otros de los rubros que se deben considerar en la elaboración de un presupuesto, son:
        b Los gastos:
        p.mt-3 El gasto es un intercambio monetario, la acción de dar algo a cambio de un producto o servicio de manera premeditada, muy diferente a las compras que hacen parte de las obligaciones de la empresa u organización. Un gasto es voluntario, ya que se puede decidir si consumir o no el servicio o producto. Por ejemplo, cuando se realizan eventos comerciales estos se financian con un gasto voluntario de las empresas, con el propósito de, mayoritariamente, posicionar su marca haciéndole publicidad durante dichos eventos.

      .col-8.col-lg-3.my-5
        figure
          img(src='@/assets/curso/temas/tema2/img20.svg', alt='')     

      .col-lg-5
        p Es necesario diferenciar entre gasto e inversión, ya que en esta última se destina dinero para buscar una rentabilidad, mientras que en el gasto solo se espera una contraprestación. Por ejemplo, en una compra el gasto va destinado al consumo, mientras que la inversión se considera un activo, es decir, un beneficio económico.
        p Existen los gastos fijos, que son aquellos que no se pueden dejar de cubrir pues son de carácter obligatorio, como los que atañen al funcionamiento de una empresa cualquiera, por ejemplo, el pago de arriendo, de nómina, de servicios públicos y de impuestos. También hay gastos variables, que se producen según las necesidades del servicio. Ahora bien, dependiendo de si el evento es presencial, virtual o híbrido, hay gastos que se deben tener en cuenta al momento de planearlo.


    .row.my-3
      p.text-center Estos son:


    .row.my-5
      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="Presenciales")
          .row.justify-content-center
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img21.svg', alt='')

            .col-lg-5.mt-5
              p En este tipo de eventos lo que más se gasta es en comida y bebidas, un criterio que todos los asistentes tienen muy en cuenta y que hace que el evento sea o no atractivo. Lo ideal es generar en los asistentes una experiencia culinaria agradable.

        .py-3.py-md-4(titulo="Virtuales")
          .row.justify-content-center
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img22.svg', alt='')

            .col-lg-5.mt-5
              p En lo que más se gasta es en la plataforma que se usará en el evento, el diseño del espacio del evento virtual y el servicio de emisión en directo #[i (streaming)].

        .py-3.py-md-4(titulo="Híbridos")
          .row.justify-content-center
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img23.svg', alt='')

            .col-lg-5.mt-5
              p Teniendo en cuenta que estos son la combinación de lo presencial con lo virtual, los gastos serán también la combinación de ambos.

    .row.my-5
      p Una vez vistos los costos y los gastos, es momento de hablar de la utilidad.
      b.mb-4 La utilidad 
      p Desde el punto de vista de la economía, la utilidad es un asunto subjetivo, toda vez que se refiere a la satisfacción que un bien o producto le ofrece a quien lo adquiere, y por lo que está dispuesto a pagar un cierto valor. En términos contables, la utilidad es la ganancia que se obtiene en el negocio de un bien o servicio, es decir, es lo que queda al restar de los ingresos obtenidos en la producción o venta de un objeto o evento, los costos y gastos que se hicieron para ello. Si el resultado es positivo, significa que se obtuvo una ganancia, si es negativo significa que hubo pérdidas.

    .row.my-5
      p.text-center Según la contabilidad encontramos tres tipos de utilidad:


    .row.justify-content-center.my-5
      .col-lg-6.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img24.svg', alt='')        
      .col-lg-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla2")
          .row(titulo="Utilidad marginal")
            p Es la disminución de la satisfacción por el consumo de un bien o servicio. Para una mayor claridad, vamos a ver un ejemplo. Cuando se tiene un antojo de comer chocolates y se compra una caja, el primero de estos dará una gran satisfacción, pero a medida que se van consumiendo, el deseo va disminuyendo hasta llegar al punto de satisfacción, y por lo tanto, no se seguirán consumiendo.
          
          .row(titulo="Utilidad total (o bruta)")
            p Es la que se obtiene del total de las ventas de un producto durante un periodo fijo, luego de restar los costos y gastos para producirlo durante ese mismo periodo.
          
          .row(titulo="Utilidad neta")
            p Ganancias que las empresas obtienen después de que se hacen todos los descuentos correspondientes.
          
    .row.my-5
      p Volviendo a la utilidad desde el punto de vista económico, esto es, la satisfacción que obtiene alguien de un producto, esta es muy importante para las empresas porque les permite conocer el nivel de satisfacción de los clientes. Si lo enfocamos en los eventos, la utilidad nos ayudará a conocer el nivel de satisfacción de los asistentes y generar acciones correctivas o de refuerzo, según sea el caso.
      b.mb-4 La fijación de precios
      p Permite determinar cuál será la remuneración económica que una empresa tendrá por los productos o servicios que ofrece. Es importante tener en cuenta que en la fijación del precio entran factores como los costos, la competencia, las condiciones del mercado y la marca, entre otros.

    .row.my-5
      p.text-center El video relacionado a continuación amplía el concepto de precio (SENA, 2021a).

    .row.justify-content-center.my-5(data-aos="fade-up")
      .col-lg-8
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/_cXcHSVingo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.my-3
      p La fijación de precios cuenta con diez métodos, como lo muestra la Figura 1.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span #[i Métodos de fijación de precios] 

      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema2/img25.svg', alt='')
          figcaption.mt-3 Fuente: Elaboración propia   

    .row.my-5
      p Veamos a continuación los elementos del presupuesto.

    TabsA.color-acento-contenido
      .tarjeta.tarjeta--amarilla.p-4(titulo="Flujo de caja")
        p El flujo de caja sirve para que, luego de enfrentar los ingresos de una empresa en un determinado lapso de tiempo con sus gastos, costos y obligaciones en ese mismo periodo, esta pueda establecer el dinero del que dispone al término de las operaciones en ese periodo, el cual suele ser mensual. Esto es de vital importancia para que la empresa sepa con cuánto dinero cuenta en cada lapso y programar sus pagos y actividades. En el siguiente video (SENA, 2020) se amplía la información.
        .row.justify-content-center.my-5
          .col-lg-10
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/4ob5QS5a44w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .tarjeta.tarjeta--amarilla.p-4(titulo="Punto de equilibrio")
        p Hace referencia a cuando las empresas nivelan sus ingresos con sus egresos. En otras palabras, es cuando todo lo que se ha invertido se nivela con lo que la empresa está recibiendo de las ventas de un producto o servicio, y esta no tiene ni ganancias ni pérdidas. El punto de equilibrio les permite a las empresas verificar y evaluar la rentabilidad de un negocio.
        p Para calcular el punto de equilibrio se deben conocer los costos fijos y variables. De acuerdo con la periodicidad con la que se quieran obtener, puede ser mensual, trimestral o anual, conforme a las necesidades de la empresa. Su fórmula general es:
        .col-lg-5.my-5
          figure.ps-lg-5
            img(src='@/assets/curso/temas/tema2/img26.svg', alt='')

      .tarjeta.tarjeta--amarilla.p-4(titulo="Rendimiento financiero (ROI)")
        p El retorno de la inversión, conocido también como ROI, permite saber en qué momento se obtiene el rendimiento económico de la inversión hecha en un negocio. Algunos beneficios de utilizar el ROI son:
        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-check
            | Permite generar confianza a los inversionistas sobre un proyecto. 
          li 
            i.fas.fa-check
            | Se puede identificar el tiempo de recuperación de la inversión.
          li 
            i.fas.fa-check
            | Ayuda a establecer objetivos y metas reales.
        p.my-3 El siguiente video (SENA, 2021b) explica cómo se debe calcular el rendimiento financiero. 
                 
        .row.justify-content-center.my-5
          .col-lg-10
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/PQR2ywfYTEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-contenido.p-3
          p Excel es una de las herramientas más utilizadas para la elaboración de cualquier presupuesto, entre ellos, el de ventas. Con esta herramienta se puede vincular cada uno de los criterios y rubros de costos totales, ver de manera organizada todo lo que se debe invertir y tener un control del presupuesto. Te invitamos a ver en el material complementario, una plantilla que te ayudará a elaborar un presupuesto para un evento (Ortega, 2022):
          a.anexo.mb-4.mb-lg-0(href="https://ingenieriademenu.com/presupuesto-de-un-evento/." target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p https://ingenieriademenu.com/presupuesto-de-un-evento/.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
