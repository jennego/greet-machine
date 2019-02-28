const WORDS_URL = 'http://words.bighugelabs.com/api/2/ef7648683b1d3fabf504f86f4dbdfc16';
const DICT_URL = 'http://thesaurus.altervista.org/thesaurus/v1?key=Hv65GF5PDcFHDCVPHk7C&language=en_US&output=json&word='


// export const Words = {

//     getWord(word) {
//         return fetch(
//             `${WORDS_URL}/${word}/json`,
//         ).then(res => res.json());
//     }
// }


export const Words = {
// getWord(word) {
//         return fetch(`${DICT_URL}${word}`).then(res => {
//         if (res.ok) {
//             return res;
//         } else {
//             throw Error(`Request rejected with status ${res.status}`);
//         }
//         }).catch()
// }



    getWord(word) {
        return fetch(
            `${DICT_URL}${word}`,
        ).then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                return { error: 'Something went wrong!' };
            }
        })
    }

}
