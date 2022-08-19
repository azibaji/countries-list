<template>
  <div class="container country-details p-5">
    <div class="country-details__header">
      <router-link to="/" type="button" class="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        Back
      </router-link>
    </div>
    <div
      class="row country-details__body"
      v-if="countryDetails[0] && countryDetails[0].flags"
    >
      <div class="col-lg-5 col-sm-12 pic">
        <img :src="countryDetails[0].flags.png" alt="" />
      </div>
      <div class="col-lg-6 col-sm-12 details">
        <div class="row">
          <div class="col-12">
            <p class="details__title my-4">
              {{ countryDetails[0].name }}
            </p>
          </div>
          <div class="col-lg-6 col-sm-12 details__item">
            <p>
              <span class="item__title"> Native name: </span>
              {{ countryDetails[0].nativeName }}
            </p>
            <p>
              <span class="item__title"> Population: </span>
              {{ countryDetails[0].population.toLocaleString() }}
            </p>
            <p>
              <span class="item__title"> Region: </span>
              {{ countryDetails[0].region }}
            </p>
            <p>
              <span class="item__title"> sub Region: </span>
              {{ countryDetails[0].subregion }}
            </p>
            <p>
              <span class="item__title"> Capital: </span>
              {{ countryDetails[0].capital }}
            </p>
          </div>
          <div class="col-lg-6 col-sm-12 details__item details__item--margin">
            <p>
              <span class="item__title"> Top level Domain: </span>
              <span
                v-for="(domain, index) in countryDetails[0].topLevelDomain"
                :key="index"
              >
                {{ domain }}</span
              >
            </p>
            <p>
              <span class="item__title"> Currencies: </span>
              <span
                v-for="(currency, index) in countryDetails[0].currencies"
                :key="index"
              >
                {{ currency.name }}
              </span>
            </p>
            <p>
              <span class="item__title"> Languages: </span>
              <span
                v-for="(language, index) in countryDetails[0].languages"
                :key="index"
              >
                {{ language.name }}</span
              >
            </p>
          </div>
          <div class="col-12 details__item details__item--border mt-5">
            <span class="item__title"> Border countries: </span>
            <span
              v-for="(border, index) in countryDetails[0].borders"
              :key="index"
              class="item__border"
            >
              <router-link :to="{ name: 'country', params: { name: border } }">
                {{ border }}
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      countryDetails: [],
    };
  },
  computed: {
    ...mapGetters({ getAllCountries: "getAllCountries" }),
  },
  mounted() {
    this.getAllCountriesList();
  },
  methods: {
    ...mapActions({ getCountriesList: "getCountriesList" }),
    async getAllCountriesList() {
      await this.getCountriesList({
        type: "name",
        value: this.$route.params.name,
      });
      this.countryDetails = this.getAllCountries;
      const test = this.countryDetails.find(
        (country) =>
          country.name === this.$route.params.name ||
          country.alpha3Code === this.$route.params.name
      );
      console.log(test);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/variables";
.country-details {
  font-size: $fs-detail;
  font-weight: $fw-regular;
  &__header {
    text-align: left;
    margin: 40px 0px;
    a {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
  &__body {
    justify-content: space-between;
    img {
      width: 100%;
    }
    .details {
      text-align: left;
      &__title {
        font-weight: $fw-medium;
        font-size: 24px;
      }
      &__item {
        &--border {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          & > span:nth-child(1) {
            @media (max-width: 767px) {
              display: inline-block;
              width: 100%;
            }
          }
        }
        &--margin {
          @media (max-width: 767px) {
            margin-top: 30px;
          }
        }
        .item__title {
          font-weight: $fw-damibold;
        }
        .item__border {
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          padding: 5px 20px;
          margin: 5px;
        }
      }
    }
  }
}
</style>
