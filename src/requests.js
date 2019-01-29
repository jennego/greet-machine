const BASE_URL = 'http://words.bighugelabs.com/api/2/ef7648683b1d3fabf504f86f4dbdfc16';
const API_KEY = 'ef7648683b1d3fabf504f86f4dbdfc16';


 const Words = {

    get(word) {
        return fetch(
            `${BASE_URL}/${word}/json`,
        ).then(res => res.json());
    }
}




