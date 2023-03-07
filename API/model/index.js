const db = require("../config");

const {hash, compare, hashSync} = require("bcrypt");

const {constructToken} = require("../middleware/AuthenticatedUser");

// =========================User Class======================================

class User{
    register(req, res) {
        const {emailAdd, userPass} = req.body;
        const strQry =
        `
        SELECT DEFAULT, firstName, lastName, genDer, cellNumb, emailAdd, userPass, userRole, userProf, regDate
        FROM Users
        WHERE emailAdd = ${emailAdd};
        `;
    }
}