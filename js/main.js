// api key 204752aebfafbf027ef198448136b9d8

// api coinmarket 8a7f55bf-a617-4658-ad45-0ae549b64b8d


var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        cryptoCurrency: [],
    },
    methods: {
       
    },

    created: function () {
        var self = this;
        axios
            .get('https://api.nomics.com/v1/currencies/ticker', {
                params: {
                    key: "204752aebfafbf027ef198448136b9d8",
                    interval: '1d,30d',
                    convert: 'EUR',
                    'per-page': '100',
                    page: '1',
                    sort: 'rank',
                }
            })
            .then(function (result) {
                self.cryptoCurrency = result.data;
            });

        setInterval(function () {
            
            axios
                .get('https://api.nomics.com/v1/currencies/ticker', {
                    params: {
                        key: "204752aebfafbf027ef198448136b9d8",
                        interval: '1d,30d',
                        convert: 'EUR',
                        'per-page': '100',
                        page: '1',
                        sort: 'rank',
                    }
                })
                .then(function (result) {
                    self.cryptoCurrency = result.data;
                });
        }, 3000)
    },
})

