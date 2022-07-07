
const admin = require("firebase-admin");
const express = require('express')
const app = express()

var serviceAccount = require("./mindful-audio-337108-firebase-adminsdk-z6vij-072b95721d.json");
app.use(express.json())

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



app.post('/alert',(req,res)=>{
    console.log(req.body.tokan)
    const message ={
        notification:{
            title:'New message',
            body:'You have recieved new message'
        },
        token: req.body.tokan
    }
    admin.messaging().send(message).then((t)=>{
        console.log('send sucess')
    }).catch(err=>{
        console.log(err)
    })
    res.send({
        'note':'sucess alert'
    })
    
})


app.listen(3000,()=>{
    console.log('server running')
})


        
