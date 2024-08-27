const mongoose = require ('mongoose');

const skillShema = mongoose.Schema ({
    skill: {
        type: String,
        require:true
    },
    percentage:{
        type:String,
        require:true
    },
    },{
        Timestamp:true
    })

    const Skill = mongoose.model('Skill',skillShema);

    module.exports ={
        Skill,
    }