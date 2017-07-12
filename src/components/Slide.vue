<template>
    <div>
        <section class="center slider">
            <div>
              <img src="http://placehold.it/350x300?text=1">
            </div>
            <div>
              <img src="http://placehold.it/350x300?text=2">
            </div>
            <div>
              <img src="http://placehold.it/350x300?text=3">
            </div>
            <div>
              <img src="http://placehold.it/350x300?text=4">
            </div>
            <div>
              <img src="http://placehold.it/350x300?text=5">
            </div>
            <div>
              <img src="http://placehold.it/350x300?text=6">
            </div>
            <div>
              <img src="http://placehold.it/350x300?text=7">
            </div>
            <div>
              <img src="http://placehold.it/350x300?text=8">
            </div>
            <div>
              <img src="http://placehold.it/350x300?text=9">
            </div>
        </section>
    </div>
</template>
<style>
    .slide {
        /*background-color: blue;*/
    }
</style>
<script>
import 'slick-carousel';
export default {
    name: 'slider',
    data() {
        return {

        }
    },
    mounted() {
        
        $('.center').slick({
            infinite: true,
            center: true,
            slidesToShow: 3,
            centerPadding: '60px',
            slidesToScroll: 3,
            responsive: [
            {
              breakpoint: 768,
              settings: {
                center: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
          ]
        });
    }
}
</script>