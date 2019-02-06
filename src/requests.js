const WORDS_URL = 'http://words.bighugelabs.com/api/2/ef7648683b1d3fabf504f86f4dbdfc16';



export const Words = {

    getWord(word) {
        return fetch(
            `${WORDS_URL}/${word}/json`,
        ).then(res => res.json());
    }
}




