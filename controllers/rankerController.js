/**
 * @param sites The array of URLs to check.
 * @param res The res object to handle the response.
 **/
module.exports = function (sites, res) {
    var _ = require('lodash');
    var request = require('request');
    var Promise = require('promise');

    var promises = [];
    var ranks = [];

    _.forEach(sites, (site) => {
        promises.push(new Promise((resolve, reject) => {
            request('http://' + site, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    ranks.push(site);
                    resolve(site); // Show the HTML for the Google homepage.
                }
            })
        }));
    });

    Promise.all(promises).then((ss) => {
        var result = "Rankings based on the load speed:<br>";
        var i;
        for (i = 0; i < ranks.length; i++) {
            result += '#' + (i + 1) + ' ' + ranks[i] + '<br>';
        }
        res.send(result);
    }).catch((err) => {
        res.send('catch ' + err);
    });
};
