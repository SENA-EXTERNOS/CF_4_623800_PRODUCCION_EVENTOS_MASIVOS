<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 5
      h1 Normativa de espectáculos públicos y derechos de autor

    .row.my-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.svg')})`}"
        )
        .bloque-texto-g1__texto.p-5
          p.mb-0 Para llevar a cabo los eventos, se deben tener en cuenta dos leyes y normas que aplican de acuerdo con el evento que se llevará a cabo.

    .row.my-5
      p.text-center Estas leyes son:

    .row.my-5
      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="Ley 1493 de 2011")
          .row.justify-content-center
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema5/img2.svg', alt='')

            .col-lg-5.mt-5
              p #[strong Formalización del sector del espectáculo público de las artes escénicas:] esta ley, reglamentada por el Decreto 1258 de 2012 y por el Decreto 1240 de 2013, formaliza el sector del espectáculo público de las artes escénicas. Dentro de sus medidas están:
              ul.lista-ul--color.ps-3.ps-lg-4
                li 
                  i.fas.fa-check
                  | Los aspectos fiscales.
                li 
                  i.fas.fa-check
                  | La contribución parafiscal de los espectáculos públicos de las artes escénicas.
                li 
                  i.fas.fa-check
                  | El trámite, vigilancia y control de estos espectáculos. 
                li 
                  i.fas.fa-check
                  | La generación de recursos de la infraestructura pública destinada para su realización. 
                li 
                  i.fas.fa-check
                  | Los derechos de autor.
                li 
                  i.fas.fa-check
                  | La inspección, vigilancia, control y toma de posesión de las sociedades de gestión colectiva de derechos de autor y derechos conexos.


        .py-3.py-md-4(titulo="Ley 23 de 1982 ")
          .row.justify-content-center
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema5/img3.svg', alt='')

            .col-lg-5.mt-5
              p #[strong Sobre derechos de autor:] Protege las formas literarias, plásticas o sonoras que recogen, describen, ilustran o explican las ideas científicas y las obras literarias y artísticas.
              p La ley protege los derechos morales, los derechos patrimoniales y su duración. Los primeros son, a grandes rasgos y entre otros, el derecho de paternidad (que el nombre del autor o su seudónimo siempre aparezca al pie de la obra, a menos que él no lo desee); de integridad (que la obra se conozca tal y como la concibió el autor), y de divulgación (el autor es el único que puede decidir si quiere que el público conozca o no su obra).
              p Los derechos patrimoniales son aquellos que permiten controlar aspectos económicos de una obra, durante la vida del autor y, en Colombia, ochenta años después de su muerte. 
              p Le sugerimos consultar muy bien esta ley y visitar la página web de la Dirección Nacional de Derechos de Autor 
              a.anexo.mb-4.mb-lg-0(href="http://derechodeautor.gov.co:8080/campus-virtual," target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p http://derechodeautor.gov.co:8080/campus-virtual,
              p donde además de encontrar información sobre el tema, también puede tomar de manera gratuita cursos al respecto.

    .row.my-5
      p.text-center A continuación, encontrará una plantilla para la elaboración del presupuesto de un evento, la cual le puede servir de guía: 

    .row.justify-content-center.my-5
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-6.col-sm-2.col-lg-2.mb-3
              img(src="@/assets/curso/temas/tema5/img4.svg").img4-tm5
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Anexo 1_ Plantilla evento Excel
                  p (tomada de Ingenieradmenu.com)
                .col-sm-auto.texto-izquierda
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexo1_ Plantilla_PresupuestoEvento.XLS')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.mb-5
      p Para un estudio completo de este y los demás temas abordados en este componente formativo, recuerde explorar todos los recursos disponibles en el menú principal, tales como material complementario, actividad didáctica y glosario, entre otros.



</template>

<script>
export default {
  name: 'Tema5',
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
