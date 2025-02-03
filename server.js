const express=require('express');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    app.send("Welcome to the Login page")
})

app.post('/',(req,res)=>{
    const {username,email,password,dateofbirth}=req.body;

    if(!email){
        return res.status(400).json({error:"Email cannot be empty"})
    }
    if (!username){
        return res.status(400).json({error:"Username cannot be empty"})
    }
    if(password.length()<8 && password.length()>16){
        return res.status(400).json({error:"Password length should be greater than 8 or less than or equal to 16"})
    }



    res.json({
        message:"Login successful",
        data:{email,username,password,dateofbirth}

    })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})





