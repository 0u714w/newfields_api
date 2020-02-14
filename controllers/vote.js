const db = require("../models/vote");
const express = require("express");
const router = express.Router();

const Vote = db.Vote

router.get("/", async (req, res) => {
    let votes = await Vote.findAll({
        where,
        include: [{model:Vote, as:"votes"}],
        
    })
    return res.json({votes: votes, statusCode:200})
})


router.post("/", async (req, res) => {
    Vote.create({
        vote: 1
    })
        .then(newVote => {
            return res.json({
                vote: {
                    vote: newVote.get("vote"),
                },
                statusCode:200
            })
        })
        .catch(error => {
            if( error instanceof Sequelize.ValidationError){
                let messages = error.errors.map((error) => {
                    return error.message
                })
                return res.status(400).send({ errors: messages, statusCode:400 })
            }
            console.log(error);
            res.status(500).send();
        })

})

module.exports = router;