const { createApp } = Vue
createApp({
    data() {
        return {
            cats: [
                {
                    image: 'https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg',
                    title: 'Cute cat with sword',
                    text: 'Very dangerous cat.',
                }, {
                    image: 'https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg',
                    title: 'Cute cats looking at you',
                    text: 'They want something from you.',
                }, {
                    image: 'https://i.ytimg.com/vi/zQIawgxoox4/maxresdefault.jpg',
                    title: 'Cute cats playing',
                    text: "So much fun.",
                }, {
                    image: 'https://i.ytimg.com/vi/csKKVaCNzhU/maxresdefault.jpg',
                    title: 'Luke - I am your father',
                    text: 'MEOOOOOOW it\'s impossible!',
                }
            ]
        }
    },
    methods: {
        
    }
}).mount(`#app`)