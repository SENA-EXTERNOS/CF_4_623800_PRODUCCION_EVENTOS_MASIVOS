<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.my-5
      .col-lg-6
        .cajon.color-primario.p-3
          p Estimado aprendiz, le damos la bienvenida. Aquí se tratará sobre el presupuesto aplicado a la organización de eventos. Este aspecto se debe considerar desde la fase de producción hasta la posproducción de este tipo de actividades, pues de ello depende que se cumpla con el objetivo planteado para su desarrollo. Tener las cuentas claras ayudará a evaluar la rentabilidad de la operación, y verificar que el valor cobrado a su cliente es adecuado para cumplir con los compromisos financieros, entre ellos el pago a proveedores, dejando el margen de utilidad deseado.
          p El siguiente video amplía un poco más lo que se abordará en esta experiencia de aprendizaje. ¡Muchos éxitos en su desarrollo! 

      .col-lg-6
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='')                  

    .row.my-5(data-aos="fade-up")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
