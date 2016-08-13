/**
 * @param sites The array of URLs to check.
 **/
module.exports = function (sites, f) {

    var _ = require('lodash');
    var request = require('request');

    var Promise = require('promise');

    var promises = [];

    _.forEach(sites, (site) => {
        promises[] = new Promise((resolve, reject) => {
            request('http://' + site, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(site); // Show the HTML for the Google homepage.
                }
            })
        });
    });

    Promise.race(promises).then((site) => {
        f('Rank #1 is ' + site);
    });
}
