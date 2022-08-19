<template>
    <div class="main-header">
        <div class="container">
            <div class="row align-center ">
                <div class="col-6 title">
                    Where in the world?
                </div>
                <div class="col-6 change-mode" @click="changeMode">
                    <template v-if="darkMode === 'dark'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                        </svg>
                        Light Mode
                    </template>
                    <template v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                        </svg>
                        Dark Mode
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            darkMode: 'light'
        }
    },
    methods:{
        changeMode () {
            this.darkMode === 'dark' ? this.darkMode ='light' : this.darkMode = 'dark'
            this.$emit('changeMode', this.darkMode)
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/sass/variables";
    .main-header{
        -webkit-box-shadow: 3px 3px 33px -18px rgba(0,0,0,0.91);
        -moz-box-shadow: 3px 3px 33px -18px rgba(0,0,0,0.91);
        box-shadow: 3px 3px 33px -18px rgba(0,0,0,0.91);
        padding: 20px 0px;
        .row{
            align-items: center;
            height: 100%;
            justify-content: space-between;
        }
        .title{
            font-weight: $fw-medium;
            text-align: left;
            font-size: 19px;
            @media(max-width:767px){
                font-size: 14px;
            }
        }
        .change-mode{
            text-align: right;
            font-size: 13px;
            font-weight: $fw-damibold;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            cursor: pointer;
            svg{
                margin-right:5px;
            }
        }
    }
</style>