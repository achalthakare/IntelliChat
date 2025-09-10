import jwt from 'jsonwebtoken';
import redisClient from '../services/redis.service.js';

export const authUser = async (req,res,next)=>{
try{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).send({error:"Please authenticate"});
    }

    const isBlackListed = await redisClient.get(token);

    if(isBlackListed) {
        res.cookie('token','',{maxAge:1});
        return res.status(401).send({error:"Unauthorised user"});
    }

    const decoded = jwt.verify(token,process.env.JWTSecret);
    req.user = decoded;
    next();

}catch(error){
    res.status(400).send({error:"Please authenticate"});
}
}