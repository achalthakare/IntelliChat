import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:[true,'Project name must be unique']
    },
    users:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
],

fileTree:{
    type:Object,
    default:{}
},
});

const Project = mongoose.model('Project',projectSchema);
export default Project;