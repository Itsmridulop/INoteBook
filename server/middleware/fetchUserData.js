const jwtSecret = process.env.JWT_SECRET
const jwt = require('jsonwebtoken')
console.log(jwtSecret)
const fetchUserData = async (req, res, next) => {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send("Invalid access.")
    try {
        const data =  jwt.verify(token, jwtSecret);
        req.user = data.user;
        next()
    } catch (error) {
        res.status(500).send("some ERROR occurs")
        console.log("fetch error:", error)
    }
   
}

module.exports = fetchUserData