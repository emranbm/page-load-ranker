/**
 * @param sites The array of URLs to check.
 **/
module.exports = function (sites) {

    console.log('-1');
    var _ = require('lodash');
    var request = require('request');

    console.log('0');
    var Promise = require('promise');

    var promises = [];

    console.log('1');

    _.forEach(sites, (site) => {

        console.log('2');
        promises.push(new Promise((resolve, reject) => {
            request('http://' + site, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(site); // Show the HTML for the Google homepage.
                }
            })
        }));
    });


    console.log('3');

    Promise.race(promises).then((site) => {
        console.log('Rank #1 is ' + site);
    });

    console.log('4');
};
