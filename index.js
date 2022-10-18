const fetch = require('node-fetch');

HOST = 'https://mebots.io';
API_ROOT = '/api/'

class Bot {
    constructor(slug, token) {
        this.slug = slug;
        this.token = token;
    }
    req(endpoint) {
        let url = new URL(HOST + API_ROOT + endpoint),
            params = {token: this.token};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        return fetch(url)
            .then(res => res.json())
            .catch(err => { throw err });
    }
    getBot() {
        return this.req('bots/' + this.slug);
    }
    getInstances() {
        return this.req('bots/' + this.slug + '/instances');
    }
    getInstance(group_id) {
        return this.req('bots/' + this.slug + '/instances/' + group_id);
    }
}

exports.Bot = Bot;
