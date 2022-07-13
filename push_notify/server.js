
const admin = require("firebase-admin");
const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 8080
app.use(cors());
var serviceAccount = require("./mindful-audio-337108-firebase-adminsdk-z6vij-072b95721d.json");
app.use(express.json())

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


app.get('/', (req, res) => {
    res.send('Hello World!')
}
)

app.post('/alert',(req,res)=>{
    console.log(req.body)
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


app.listen(port,()=>{
    console.log('server running 8080')
})


        
