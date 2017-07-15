<template>
    <div>
      <section id="slick-content">
        <div class="slider">
          <div><div class="slide-h3">1</div></div>
          <div><div class="slide-h3">2</div></div>
          <div><div class="slide-h3">3</div></div>
          <div><div class="slide-h3">4</div></div>
          <div><div class="slide-h3">5</div></div>
          <div><div class="slide-h3">6</div></div>
        </div>
      </section>
    </div>
</template>
<style lang="scss">
  .slick-content {
    height:100%;
  }
  .slick-center .slide-h3{
    color: #FFF;
  }
  .slider{
    height: 100%;
    width: 100%;
    margin: 20px auto;    
    text-align: center;
  }
  .slide-h3{
    height: 100%;
    margin: 10% 0 10% 0;
    padding: 40% 20%;
    background: #008ed6;
  }
  .slider div{
    margin-right: 5px;
  }
  .slick-slide{
    height: 100%;
    &:focus {
      outline: none;
    }
    opacity: .6;
  }
  .slick-center{
    height: 100%;
    display: block;
    max-width: 10% !important;
    max-height:20% !important;
    opacity: 1;
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
      $('.slider').slick({
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1,
          // speed:1500,
          // index: 2,
          responsive: [
            {
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            }
          ]
      });
    }
}
</script>