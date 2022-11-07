const {fetchCards} = require("../models/cards.models.js")

function getCards(req, res, next){
     fetchCards()
    .then((cards) => {
        res.status(200).send([cards])
    }).catch(next)
    
}

export default getCards

