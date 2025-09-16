import * as aiServices from '../services/ai.service.js'

export const getReult = async (req,res)=>{
    try{

        const {prompt} = req.query;
        const result = await aiServices.generateResult(prompt);
        res.send(result);

    }catch{
        res.status(500).send({message:error.message})
    }
}