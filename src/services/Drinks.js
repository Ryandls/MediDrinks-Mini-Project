import axios from 'axios';

export default {
    listar:() => {
        const Drinks = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
        return axios.get(Drinks)
    }
}
