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

        db.query(strQry, async(err, data)=> {
            if(err) throw err;
            if((!data) || (data == null)) {
                res.status(401).json({err: ""})
            }else{
                await compare(userPass, data[0].userPass, (cErr, cData)=> {
                    if(cErr) throw cErr;

                    const jwToken = constructToken({
                        emailAdd, userPass
                    });

                    res.cookie("User confirmed.", jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    })
                    if(cResult) {
                        res.status(200).json({
                            msg: "Enjoy your shopping.",
                            jwToken,
                            result: data[0]
                        })
                    }else{
                        res.status(401).json({
                            err: "Information submitted is invalid."
                        })
                    }
                })
            }
        })
    }
    fetchUsers(req, res) {
        const strQry =
        `
        
        `
    }
}