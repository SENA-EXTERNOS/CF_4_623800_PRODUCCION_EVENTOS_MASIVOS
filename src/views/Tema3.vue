<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 3
      h1 Fuentes de ingreso

    .row.justify-content-center.my-5
      .col-lg-6.my-4
        p La fuente de ingreso es de donde se obtendrá el capital o la inversión para que el evento se pueda llevar a cabo. Se define según el tipo de evento y puede provenir de espacios publicitarios, actividades especiales, venta de comidas y bebidas, concesiones para vender artículos promocionales, donativos o patrocinios, venta de módulos de exposición, venta de revistas especializadas, libros y productos, entre otros.
        p Veamos más acerca de las formas para obtener financiación, en el siguiente video.

      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='')                  

    .row.my-5(data-aos="fade-up")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.my-5
      p Teniendo claros los conceptos anteriores, ahora veamos las clasificaciones de los patrocinios y los diferentes tipos de alianzas. 
      p.text-center.mt-3 Según el ámbito de actuación, los patrocinios pueden ser:


    .tarjeta.tarjeta--amarilla.p-4
      PasosB.color-acento-contenido
        .row.justify-content-center(titulo="")
          .col-8.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='')
          .col-lg-1

          .col-lg-7.my-5
            h4 Deportivos
            p Están relacionados con todos los eventos deportivos y las marcas que tienen que ver con las competiciones o actividades deportivas.     

        .row.justify-content-center(titulo="")
          .col-8.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img3.svg', alt='')
          .col-lg-1

          .col-lg-7.my-5
            h5 Musical
            p En este encontramos el patrocinio a los artistas, obras teatrales, festivales, conciertos y todo lo relacionado con la música en sus diferentes estilos.       

        .row.justify-content-center(titulo="")
          .col-8.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img4.svg', alt='')
          .col-lg-1

          .col-lg-7.my-5
            h4 Cultural
            p Deja ver lo representativo de una sociedad, como patrocinios literarios, a museos y todo lo relacionado con el patrimonio cultural.
 
        .row.justify-content-center(titulo="")
          .col-8.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img5.svg', alt='')
          .col-lg-1

          .col-lg-7.my-5
            h4 Artístico
            p Tiene que ver con el arte contemporáneo.       

        .row.justify-content-center(titulo="")
          .col-8.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img6.svg', alt='')
          .col-lg-1

          .col-lg-7.my-5
            h4 Social
            p Apoyo a causas benéficas de entidades públicas y ONG.
 
        .row.justify-content-center(titulo="")
          .col-8.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img7.svg', alt='')
          .col-lg-1

          .col-lg-7.my-5
            h4 Moda
            p Está relacionado con desfiles de moda, colecciones de marca, pasarelas, etc.       

        .row.justify-content-center(titulo="")
          .col-8.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img8.svg', alt='')
          .col-lg-1

          .col-lg-7.my-5
            h4 De entretenimiento
            p Relacionado con los pasatiempos que están de moda en la actualidad, como cine, televisión, música moderna y todo lo referido a un objetivo lúdico. 
 
        .row.justify-content-center(titulo="")
          .col-8.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img9.svg', alt='')
          .col-lg-1

          .col-lg-7.my-5
            h4 Gastronómico
            p Relacionado con el mundo de la cocina; algunas empresas quieren ser reconocidas en estos eventos de gastronomía.       

        .row.justify-content-center(titulo="")
          .col-8.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img10.svg', alt='')
          .col-lg-1

          .col-lg-7.my-5
            h4 Influenciadores
            p Personajes que por su popularidad en las redes sociales pueden ejercer cierta influencia en los compradores potenciales.

        .row.justify-content-center(titulo="")
          .col-8.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema3/img11.svg', alt='')
          .col-lg-1

          .col-lg-7.my-5
            h4 Deportes electrónicos
            p Tiene que ver con el mundo digital de los deportes electrónicos o videojuegos.

    .row.my-5
      p Hay otra categoría de patrocinios, esta vez según el tenedor de los derechos.
      p.text-center.mt-3 Los patrocinios según el tenedor de derechos pueden ser:


    .row.justify-content-center.my-5
      .col-lg-5.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img12.svg', alt='')      
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla2")
          .row(titulo="Personales")
            p Tienen que ver con un personaje o artista específico. El mismo individuo es la marca y es muy popular. Con el patrocinio del buen nombre se pretende atraer a clientes o asistentes. 
          
          .row(titulo="De eventos y equipos")
            p En los eventos tiene que ver con cualquier encuentro social, como exposiciones y galas, y en los equipos se relaciona especialmente con el deporte, como el patrocinio a clubes de fútbol.
          
          .row(titulo="De competiciones")
            p Incluye todo lo relacionado con campeonatos, ligas y torneos.
     
          .row(titulo="De federaciones, asociaciones y selecciones")
            p Se vincula el patrocinio a los entes de la competición y la práctica.
     
          .row(titulo="Derechos de denominación comercial")
            p Quiere decir que la marca, empresa o entidad adquiere el derecho de nombrar un lugar o evento, por un periodo de tiempo. 

          .row(titulo="El evento propio")
            p Como lo dice su nombre, es la creación de un evento propio que permite tener la imagen controlada.
     
    .row.my-5
      p También es importante tener claridad sobre cuáles son los tipos de alianzas que se pueden dar, como se ve en la Figura 2.
      p.text-center.mt-3 Los tipos de alianzas pueden ser:

    .row.justify-content-center.my-3
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          span #[i Tipos de alianza]


    .row.justify-content-center.my-5
      .col-lg-8
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img13.svg', alt='')
              figcaption.mt-3 Fuente: Elaboración propia

          .tarjeta.color-primario.p-3(x="1%" y="63%" numero="+")
            h4.mb-2.text-center #[i Venture] capital
            p Compra acciones de una empresa por un tiempo determinado.

          .tarjeta.color-primario.p-3(x="4%" y="30%" numero="+")
            h4.mb-2.text-center Franquicia
            p Una persona natural o jurídica otorga el derecho a un tercero para utilizar su nombre o marca.

          .tarjeta.color-primario.p-3(x="28%" y="18%" numero="+")
            h4.mb-2.text-center #[i Join ventures]
            p Se une dos o varias empresas para formar una.

          .tarjeta.color-primario.p-3(x="30%" y="40%" numero="+")
            h4.mb-2.text-center Alianza de distribución
            p Acuerdo entre dos o más para la distribución de sus productos o servicios.

          .tarjeta.color-primario.p-3(x="66%" y="32%" numero="+")
            h4.mb-2.text-center Alianza de producción
            p Se unen varias empresas para producir o fabricar un bien en conjunto.

          .tarjeta.color-primario.p-3(x="77%" y="43%" numero="+")
            h4.mb-2.text-center #[i Outsourcing]
            p Se asigna una actividad a otra empresa para que la desarrolle.



</template>

<script>
export default {
  name: 'Tema3',
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
