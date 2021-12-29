// GET Login current user (login-menu page)
module.exports.userLogin = function(req, res) {
    var login = 'zhddm';
    User.find({ login: login }, 'name login avatar dateRegistration')
        .then(currentUser => res.json(currentUser))
        //Person.findOne({ 'name.last': 'Ghost' }, 'name occupation'
};

// POST Register user (registeration-menu page)
module.exports.userRegister = function(req, res) {
    const newUser = new User({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
        avatar: req.body.avatar
    });

    newUser.save().then(user => res.json(user));
};
