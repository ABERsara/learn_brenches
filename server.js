const express=require('express')
const {games}=require('./data')
const app=express()
const path=require("path")
const PORT=process.env.PORT||1233
let name="Sara Aber";
//שולח טקסט
app.get('/',(req,res)=>{
res.send("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet., comes from a line in section 1.1")
})

//שולח קובץ
app.get('/about',(req,res)=>{
    const pathUrl = path.join(__dirname,'about.html')
    res.sendFile(pathUrl)
    })


    //שולח טקסט html
app.get('/htmlText',(req,res)=>{
    res.send(`<h2>hello ${name}</h2><a href='/api/games'>Go to games</a>`)
    })

    // שולח את המערך 
    //מחזיר רק שם, מס' מזהה וכתובת תמונה
    app.get('/api/games',(req,res)=>{
        const newGames=games.map((game)=>{
            return {id:game.id,name:game.name,image:game.image}
        })
        res.json(newGames)
        })
app.get('/*',(req,res)=>{
    const pathUrl = path.join(__dirname,'error.html')
    res.status(404).sendFile(pathUrl)
})
app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))