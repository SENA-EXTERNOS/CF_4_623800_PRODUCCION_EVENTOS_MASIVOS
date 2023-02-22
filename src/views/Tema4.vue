<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 4
      h1 Impuestos tributarios

    .row.justify-content-center.my-5
      .col-lg-6
        .cajon.color-primario.p-3
          p Los impuestos son tributos que pagan las personas naturales o jurídicas al Estado, para costear las necesidades y obligaciones públicas que afectan a toda la población. Es importante conocer sobre los impuestos, ya que la gran mayoría tiene incidencia en la compra, adquisición o alquiler de suministros y espacios para llevar a cabo un evento. A continuación, podrá visualizar en el siguiente video (SENA, 2021c) una breve historia sobre los impuestos: 

      .col-lg-6
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/HL9RtAhdPAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.my-5
      p.text-center Los impuestos tributarios se dividen o clasifican de acuerdo con la capacidad de pago del contribuyente, así:

    .row.my-5
      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="Directos")
          .row.justify-content-center
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema4/img1.svg', alt='')

            .col-lg-5.mt-5
              p Aplica para personas naturales y jurídicas. Se calculan teniendo en cuenta el capital o los ingresos del contribuyente. Entre ellos se encuentran el impuesto a la renta, al patrimonio y el de industria y comercio, entre otros.

        .py-3.py-md-4(titulo="Indirectos")
          .row.justify-content-center
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema4/img2.svg', alt='')

            .col-lg-5.mt-5
              p Se aplican al valor de un producto o servicio, y no se tiene en cuenta la capacidad de pago de las personas naturales o jurídicas. Entre ellos está el muy conocido impuesto al valor agregado (IVA) y el impuesto nacional de consumo.

    .row.my-5
      p Los impuestos pueden variar dependiendo de la zona de acción. En Colombia hay impuestos nacionales, departamentales y distritales. 
      p #[strong Impuestos nacionales:] los establece el Poder Ejecutivo y son avalados por el Congreso de la República.

    .row.my-3
      p.text-center Entre los impuestos nacionales están:

      .tarjeta.tarjeta--amarilla.p-4.mt-4
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-5.mt-4
              h4 Impuesto al valor agregado (IVA)
              p Fue creado mediante la Ley 3288 de 1963. Se paga al comprar un bien o servicio y depende del valor de lo que se adquiere. La tarifa en Colombia de este impuesto es del 19 %, y su recaudo se destina a satisfacer las necesidades de la población, especialmente alimentación, vivienda, educación y salud.
              p Los bienes y servicios con este impuesto pueden ser: a) gravados, lo que significa que se les aplica una tarifa; b) excluidos, no causan impuestos sobre las ventas por disposición legal; c) exentos, su porcentaje es 0 %, es decir, no se efectúa pago, y d) no sometidos, es decir, no están catalogados en el régimen del impuesto a la venta.
              p En el material complementario podrás ver un video (SENA, 2021d) que explica cómo los contribuyentes inscritos como declarantes del IVA deben diligenciar el formulario correspondiente. 
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=rNQHO71sACo" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p https://www.youtube.com/watch?v=rNQHO71sACo

            .col-lg-6.mt-5
              figure
                img(src='@/assets/curso/temas/tema4/img3.svg', alt='') 

          .row.justify-content-center
            .col-lg-5.mt-4
              h4 Impuesto de renta
              p Grava tanto a personas naturales como jurídicas, de acuerdo con sus ingresos anuales, si estos ingresos son susceptibles de generar riqueza o incrementar el patrimonio. Las personas jurídicas siempre serán declarantes, mientras que las naturales solo lo serán en caso de que su patrimonio, sus ingresos, sus consumos con tarjetas de crédito, o lo consignado en sus cuentas sea mayor a los topes establecidos por la ley para quedar exentos de ese pago. Este impuesto tiene dos categorías:
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Rentas de capital: que vienen de las ganancias de los bienes que una persona tiene, por ejemplo actividades industriales, comerciales o mineras.
                li 
                  i.fas.fa-check
                  | Rentas del trabajo: que aplica para personas naturales, como trabajadores independientes y pensionados por los ingresos obtenidos.

              p Las personas naturales y jurídicas deben presentar la declaración de renta una vez al año. Cada contribuyente declara en el formulario sus ingresos, egresos e inversiones, calcula el impuesto que le corresponde pagar y lo presenta ante la Dirección de Impuestos y Aduanas Nacionales (DIAN). 

            .col-lg-6.mt-5
              figure
                img(src='@/assets/curso/temas/tema4/img4.svg', alt='') 

          .row.justify-content-center
            .col-lg-5.mt-4
              h4 Impuesto al timbre nacional
              p Se aplica a documentos públicos o privados, como pasaportes, autenticaciones, reconocimiento de firmas y cheques, entre otros. La tarifa actual, de 10 %, aplica para todos los documentos y títulos valores. Los que recaudan este impuesto de timbre son los notarios, entidades públicas, agentes diplomáticos, agentes consulares y embajadas, y los bancos.

            .col-lg-6.mt-4
              figure
                img(src='@/assets/curso/temas/tema4/img5.svg', alt='') 

          .row.justify-content-center
            .col-lg-5.mt-4
              h4 Contribuciones especiales
              p Los impuestos especiales permiten financiar necesidades específicas en el presupuesto de la nación.

            .col-lg-6.mt-4
              figure
                img(src='@/assets/curso/temas/tema4/img6.svg', alt='') 

    .row.my-5
      p #[strong Impuestos departamentales:] como su nombre lo indica, son impuestos que se fijan en cada departamento.
      p.text-center.mt-4 Entre los impuestos departamentales encontramos:


    .row.justify-content-center.my-5
      .col-lg-6.mb-5
        .tarjeta-morada1.p-4
          .row
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img7.svg', alt='').img-7-al-10          
            .col-lg-6.mt-3
              b Impuesto al consumo de cerveza, licores, cigarrillos y tabaco.

        .tarjeta-amarilla3.p-4
          .row
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img8.svg', alt='').img-7-al-10          
            .col-lg-6.mt-4
              b Impuesto al registro.

        .tarjeta-morada2.p-4
          .row
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img9.svg', alt='').img-7-al-10           
            .col-lg-6.mt-4
              b Sobretasa a la gasolina.

        .tarjeta-amarilla4.p-4
          .row
            .col-6.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img10.svg', alt='').img-7-al-10          
            .col-lg-6.mt-4
              b Impuesto a los vehículos.

      .col-8.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema4/img11.svg', alt='').img11-tm4 

    .row.my-5
      p Por su parte, los #[strong impuestos municipales] son los que fija cada municipio.
      p.text-center.mt-3 Entre los impuestos municipales están:

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.terjeta--morada3.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img12.svg', alt='AvatarTop') 
          h5.text-center Impuesto de industria y comercio.

      .tarjeta.terjeta--morada3.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img13.svg', alt='AvatarTop') 
          h5.text-center Impuesto sobre vehículos y automotores.

      .tarjeta.terjeta--morada3.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img14.svg', alt='AvatarTop') 
          h5.text-center Impuesto predial unificado.

      .tarjeta.terjeta--morada3.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img15.svg', alt='AvatarTop') 
          h5.text-center Impuesto de delineación urbana.

      .tarjeta.terjeta--morada3.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img16.svg', alt='AvatarTop') 
          h5.text-center Impuesto de azar y espectáculos. 
          p.text-center Este es de suma importancia tenerlo en cuenta cuando se va a realizar un evento en algún municipio.

    .row.my-5
      p Es importante conocer otros impuestos que pueden aplicar teniendo en cuenta el tipo de evento.
      p.text-center.mt-4 Estos impuestos pueden ser:

    .row.justify-content-center.my-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla2")
          .row.justify-content-center.p-lg-4(titulo="Impuesto de industria y comercio ICA ")
            p Este impuesto lo pagan las personas naturales y jurídicas que desarrollan alguna actividad industrial, comercial o prestación de servicios. Es un impuesto territorial, lo que significa que cada municipio tiene su propia regulación. El artículo 32 de la Ley 14 de 1983 expresa: 
            .col-lg-9
              hr.hr.my-3
              .row.justify-content-center
                .bloque-texto-b.p-4
                  .bloque-texto-b__texto
                    i.fas.fa-quote-left.color-vineta
                    p El Impuesto de Industria y Comercio recaerá, en cuanto a materia imponible, sobre todas las actividades comerciales, industriales y de servicio que ejerzan o realicen en las respectivas jurisdicciones municipales, directa o indirectamente, por personas naturales, jurídicas o por sociedades de hecho, ya sea que se cumplan en forma permanente u ocasional, en inmuebles determinados, con establecimientos de comercio o sin ellos.
                    br
                    b.texto-derecha (Función Pública, 2020). 
                    i.fas.fa-quote-right.color-vineta.texto-derecha

            p.mb-3 El ICA cuenta con dos regímenes:
            p.ps-lg-5.ps-4 Común. Este impuesto grava a todas las personas jurídicas que ejercen actividades industriales, comerciales o de servicios, de manera permanente o parcial, así como a personas naturales que no cumplan los requisitos para pertenecer al régimen simplificado. Se declara y paga cada dos meses.
            p.ps-lg-5.ps-4 Simplificado: aplica a personas que cumplen con unas ciertas características, como que, sus ingresos brutos totales en el año  anterior hayan sido inferiores a 4000 unidades de valor tributario (UVT); que sus transacciones financieras en consignaciones, depósitos o inversiones no superen las 4500 UVT; que tengan máximo un lugar donde ejercen su actividad económica bien sea oficina, establecimiento, local, sede o negocio; no haber tenido contratos el año anterior que superen los 3300 UVT, y que no desarrollen actividades bajo franquicia, regalía o cualquier sistema que implique explotación de intangibles.  

          .row.justify-content-center.p-lg-4(titulo="Retención en la fuente")
            p También conocido como retefuente, se cobra en el momento de hacer una operación de pago, es decir, es el recaudo anticipado de un impuesto, como el impuesto a las ventas o el de industria y comercio. Quienes declaran cada mes la retención en la fuente son personas naturales o jurídicas clasificadas como agentes de retención, entre ellos, los fondos de pensiones, los fondos de inversión, los fondos de valores y los comerciantes. Estos agentes deben hacer la retención, declarar, consignar lo retenido, expedir los respectivos certificados y guardar los soportes. Los bancos también hacen retención en la fuente, cuando aplica a cuentas de ahorro o corrientes el cuatro por mil, impuesto que veremos, a continuación.
            p Le invitamos a ver el video que explica cómo diligenciar el formulario de retención en la fuente (SENA, 2021e) 
            .col-lg-8
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/Nu0so84PvI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

          .row.justify-content-center.p-lg-4(titulo="El gravamen a movimientos financieros (o cuatro por mil) ")
            p Este es un impuesto que, desde el año 2001, lo pagan tanto personas naturales como jurídicas por cada transacción financiera que hagan con un banco. Lo descuentan y retienen todas las entidades bancarias supervisadas por el Banco de la República y por la Superintendencia Bancaria. Se denomina cuatro por mil porque, por cada mil pesos en cualquier movimiento financiero se pagan cuatro pesos.
            p Las transacciones financieras que aplican este impuesto son:
            ul.lista-ul--color.ps-3
              li 
                i.fas.fa-check.color-vineta2
                | Retiros en efectivo, cheque y tarjeta débito.
              li 
                i.fas.fa-check.color-vineta2
                | Retiro por cajero electrónico y puntos de pago.
              li 
                i.fas.fa-check.color-vineta2
                | Expedición de cheques de gerencia.
              li 
                i.fas.fa-check.color-vineta2
                | Traslados de fondos a un título.   

    .row.my-5
      p Ahora le invitamos a consultar la sección de material complementario, donde encontrará videos con información que le permitirá ampliar todo lo relacionado con el importante tema de los impuestos.


</template>

<script>
export default {
  name: 'Tema4',
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
