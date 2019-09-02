var mongoose =require('mongoose');

//建立数据库链接
mongoose.connect('mongodb://localhost:27017/NodeBoss',{userMongoClient:true});

var Schema = mongoose.Schema

//新建约束
var studentSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    gender:{
        type:Number,
        enum:[0,1],
        default:0
    },
    age:{
        type:Number
    },
    hobbies:{
        type:String
    }
})
//导出模板构造函数
module.exports = mongoose.model('Student',studentSchema);