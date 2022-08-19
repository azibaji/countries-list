<template>
    <div>
        <div class="row justify-content-between">
            <search-country @search="getAllCountriesList"/>
            <filter-country :countries="countries" @filter="getAllCountriesList" />
        </div>
        <div v-if="!loading" class="row countries-wrapper">
            <country-item v-for="(index, country) in countries" :key="index" :country="countries[country]" />
        </div>
        <div v-else class="text-center">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import FilterCountry from '../Shared/FilterCountry.vue'
import SearchCountry from '../Shared/SearchCountry.vue'
import CountryItem from './CountryItem.vue'
export default {
    data () {
        return {
            countries: [],
            loading: false
        }
    },
    components: {
        CountryItem,
        SearchCountry,
        FilterCountry
    },
    computed: {
        ...mapGetters({getAllCountries: 'getAllCountries'}),
    },
    mounted() {
        this.getAllCountriesList()
    },
    methods: {
        ...mapActions({getCountriesList: 'getCountriesList'}),
        async getAllCountriesList(type, val) {
            this.loading = true
            await this.getCountriesList({'type': type, 'value':val})
            this.countries = this.getAllCountries
            this.loading= false
        }
    }
}
</script>
<style lang="scss" scoped>
    .countries-wrapper{
      justify-content: flex-start;
      @media(max-width:767px){
          justify-content: center;
      }
    }
</style>