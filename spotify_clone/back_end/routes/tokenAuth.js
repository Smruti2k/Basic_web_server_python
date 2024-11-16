const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user_model/user"); // Adjust to your user model path

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETKEY, // Use the same key you use to sign the token
};

passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            const user = await User.findById(jwt_payload._id); // Check how the user ID is fetched
            if (user) {
                return done(null, user); // Attach user to req.user
            }
            return done(null, false);
        } catch (err) {
            return done(err, false);
        }
    })
);
