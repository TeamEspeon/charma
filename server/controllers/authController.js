const authController = {

    authUser(req, res, next) {
        console.log(req.body);
        const { username, password } = req.body;
        res.locals.jwt = '';
        if (username && password) {
            return next();
        } else {
            return next();
        }
    },

};

module.exports = authController;