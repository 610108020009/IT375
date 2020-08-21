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
    'it':itStudents,
    'ce':ceStudents
};

app.get('/api/:id/:major',(req,res)=>{
const id= req.params.id;
const major= req.params.major.toLowerCase();
    if(allMajors[major]){
        if(major == 'it'){
            let stuData= itStudents.find(obj => obj.id === parseInt(id));

    if(typeof stuData === 'undefined'){res.send('This student is no in major IT');

    }else{res.send(stuData);}

}else{
    let stuData= ceStudents.find(obj => obj.id === parseInt(id));
    if(typeof stuData === 'undefined'){res.send('This student is no in major CE');

    }else{
        res.send(stuData);
    }
    }
}else{
res.send('Major not found!!!');
    }
});


app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});