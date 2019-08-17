export const getCharacters = (count = 10) => {

    function getNumChars(len, max) {
        return Array.from({ length: len }, () => Math.floor(Math.random() * max));
    }

    return fetch(`https://rickandmortyapi.com/api/character/${getNumChars(count, 493)}`)
        .then(res => ([res.ok, res.json()]))
        .then(([ok, json]) => {
            if(!ok) throw 'Unable to fetch quotes';
            return json;
        });
};

export const getPage = (page) => {

    return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(res => ([res.ok, res.json()]))
        .then(([ok, json]) => {
            if(!ok) throw 'Unable to fetch quotes';
            return json;
        });
        // .then(json => {
        //     return json;
        // });
};
