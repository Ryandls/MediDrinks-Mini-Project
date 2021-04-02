<template>
    <div id="FilterDrink">
        
    </div>
</template>
<script>
export default {
    name: "FilterDrink",
    data() {
        return {
            id: this.$route.params.id,
            drink:{}
        }
    },
    created() {
        this.$http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
    }
}
</script>
<style scoped>
    
</style>