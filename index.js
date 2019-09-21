const fetch = require('node-fetch');

HOST = 'https://mebotsco.herokuapp.com';
API_ROOT = '/api/'

class Bot {
    constructor(slug, token) {
        this.slug = slug;
        this.token = token;
    }
    req(endpoint) {
        return fetch(HOST + API_ROOT + endpoint)
            .then(res => res.json())
            .then((out) => {
                return out;
            })
            .catch(err => { throw err });
    }
    instance(group_id) {
        return this.req('bot/' + this.slug + 'instance' + group_id);
    }
}

var bot = new Bot('bah', '15348c123044e858884a56');
console.log(bot.instance(53846490));
