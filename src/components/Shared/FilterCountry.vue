<template>
    <div class="col-lg-3 col-6 filter">
        <select class="form-select" v-model="priority" id="priorityType">
          <option
            v-for="(priorityObj, idx) in regionsList"
            :key="idx"
            :value="priorityObj"
          >
            {{ priorityObj }}
          </option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return{
            select:'All',
            priority: 'All',
        }
    },
    props:{
        countries:{
            type: Array,
            default: () => []
        },
    },
    watch:{
        priority(value){
            this.$emit('filter','region', value)
        }
    },
    computed:{
        regionsList() {
            let regions = []
            this.countries.forEach(element => {
                     regions.push(element.region)
            });
            regions = [...new Set(regions)]
            regions.push('All')
            return regions
        }
    }
}
</script>
<style lang="scss" scoped>
    .filter{
      margin-bottom: 20px;
    }
</style>