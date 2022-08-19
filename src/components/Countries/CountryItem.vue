<template>
    <router-link :to="{ name: 'country', params: { name: country.name }}" class="country-item">
            <div class="country-item__header">
                <img :src="country.flags.png" alt="">
            </div>
            <div class="country-item__body">
                <p class="title">
                    {{ country.name}}
                </p>
                <p class="desc">
                    <span>Population: </span>
                    {{country.population.toLocaleString()}}
                </p>
                <p class="desc">
                    <span>Region: </span>
                    {{country.region}}
                </p>
                <p class="desc">
                    <span>
                        Capital: 
                    </span>
                    <span>
                        {{ country.capital}}
                    </span>
                </p>
            </div>
    </router-link>
</template>
<script>
export default {
    props:{
        country:{
            type: Object,
            default: () => {}
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/sass/variables";
    .country-item{
      -webkit-box-shadow: 3px 3px 33px -10px rgba(0,0,0,0.88);
      -moz-box-shadow: 3px 3px 33px -10px rgba(0,0,0,0.88);
      box-shadow: 3px 3px 33px -10px rgba(0,0,0,0.88);
      text-align: left;
      padding: 0px;
      width: 21%;
      margin: 25px;
      font-size:$fs-home;
      @media(max-width:767px){
          width:80%
      }
      &__header{
        height: 200px;
        overflow: hidden;
        img{
          width:100%;
          height: 100%;
        }
      }
      &__body{
        margin-top:20px;
        padding: 20px 20px 30px 20px;
        .title{
          font-weight: $fw-medium;
        }
        .desc{
          margin-bottom: 6px;
        }
        .desc span{
          font-weight: $fw-damibold;
        }
      }
    }
</style>