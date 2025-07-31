class APIManager {
    constructor() {
        this.data = {}
    }

    async fetchMainUserAndFriends() {
        const res = await fetch('https://randomuser.me/api/?results=7')
        const json = await res.json()
        const [mainUser, ...friends] = json.results

        this.data.mainUser = {
            name: `${mainUser.name.first} ${mainUser.name.last}`,
            city: mainUser.location.city,
            state: mainUser.location.state,
            picture: mainUser.picture.large
        }

        this.data.friends = friends.map(user => ({
            name: `${user.name.first} ${user.name.last}`
        }))
    }

    async fetchKanyeQuote() {
        const res = await fetch('https://api.kanye.rest')
        const json = await res.json();
        this.data.quote = json.quote;
    }

    async fetchPokemon() {
        // const res = await fetch('')
        const randomId = Math.floor(Math.random() * 1025) + 1;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const pokemonElem = await res.json();

        this.data.pokemon = {
            name: pokemonElem.name,
            image: pokemonElem.sprites.front_default
        }
    }

    async fetchAbout() {
        const res = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=3&format=text')
        const about = await res.text()

        this.data.about = about;
    }


}
