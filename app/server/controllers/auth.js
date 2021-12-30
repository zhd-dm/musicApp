const User = require('../models/User');

// GET All users (authors) (author-list page)
module.exports.getAuthors = function(req, res) {
    User.find({}, 'name login avatar dateRegistration')
        .sort({ date: -1 })
        .then(allAuthors => res.json(allAuthors))
}

// POST Login current user (login-menu page)
module.exports.userLogin = function(req, res) {
    var login = req.body.login;
    var password = req.body.password;
    User.find({ login: login, password: password }, 'name login avatar dateRegistration')
        .then(currentUser => res.json(currentUser))
        //Person.findOne({ 'name.last': 'Ghost' }, 'name occupation'
};

// POST Register user (registration-menu page)
module.exports.userRegister = function(req, res) {
    var name = req.body.name;
    var login = req.body.login;
    var password = req.body.password;
    var password2 = req.body.password2;
    const newUser = new User({
        name: name,
        login: login,
        password: password
    });

    newUser.save().then(user => res.json(user));
};
