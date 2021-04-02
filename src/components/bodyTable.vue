<template>
        <div class="card">
            <th  v-for="Drink of drinks" :key="Drink.idDrink">
                <td>
                    <ul><img v-bind:src="Drink.strDrinkThumb"></ul>
                    <ul>{{Drink.strDrink}}</ul>
                    <ul>{{Drink.idDrink}}</ul>
                </td>
            </th>
        </div>
</template>
<script>
import Drink from '../services/Drinks.js'
    
export default {

    data(){
        return {
            drinks:[]
        }
        
    },

     mounted(){
         Drink.listar().then(res => {
             const allDrinks = res.data.length
             this.drinks = res.data.drinks;
             return allDrinks;

         })
     }, 
}
</script>
<style>
.card{
    width: 310px;
    height: 394px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
}
img{
    width: 310px;
    height: 280px;

    margin-left:5px;
}

</style>