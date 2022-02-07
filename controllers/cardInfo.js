const CardInfo = require('../models/cardInfo')

const searchPage = async (req,res) =>{
    try{   
        
        if (req.query.page) {
            //http://localhost:3000/game?page=1

            const data = await CardInfo.find({page: req.query.page})
            res.status(200).json(data)            
        }
    } catch (error){
        console.error(error.stack)
    }
}

const controllers = {
    searchPage
}

module.exports = controllers