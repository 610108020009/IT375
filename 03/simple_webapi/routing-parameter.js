const express = require('express')
const app = express();
const port = process.env.PORT || 8000;

const itStudents = [
    {id:61, name:'Suchada it'},
    {id:62, name:'Narawit it'}
];

const ceStudents = [
    {id:71, name:'Chonticha ce'},
    {id:72, name:'Kiattiphom ce'}
];

const allMajors = {
    'it': itStudents,
    'ce':ceStudents
};

app.get('/api/:major',(req,res,next)=>{
    const major = req.params.major.toLowerCase();
    if(major=='it'){
        const jsonString = JSON.stringify(itStudents);
        req.myobj = jsonString;
        next();
    }else if(major == 'ce'){
        const jsonString = JSON.stringify(ceStudents);
        req.myobj = jsonString;
        next();
    }else{
        res.send('Major not found!!!');
    }
},(req,res)=>{
    req.myobj += 'End of Data';
    res.send(req.myobj);

});


app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});