var path = require('path');

module.exports = exportedRoutes;

function exportedRoutes(app) {
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    //use lets us re-direct the user to the home page if they use anything other than survey
    app.use('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}