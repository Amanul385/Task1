const userSchema= require("../model/userSchema")
const loginSchema = require("../model/loginSchema")
const infoData = require("../model/infoSchema")

require("dotenv").config();

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.signupForm = async (req,res)=>{

    try{

        const {email, password, confirmPassword} = req.body;
        //if user already exit
        const existingUser = await userSchema.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"Email already exit",
            });
        }

        if(password !== confirmPassword) {
            return res.status(400).send('Passwords do not match');
        }
        
          // Password strength validation (optional)
        if (password.length < 8) {
            return res.status(400).send('Password must be at least 8 characters long');
        }

        let hashedPassword ;
        try{
            hashedPassword =await bcrypt.hash(password,8);
        }catch(err){
            return res.status(500).json({
                success : false,
                message:"Error in hasing password",
            });
        }


        const user = await userSchema.create({
             password:hashedPassword, email
        })

        return res.status(200).json({
            success :true,
            message:'User created Successfuly',
        });

    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"User cannot be registered, please try again later"
        })
    }
}



exports.loginForm = async (req,res)=>{

    try{

        const{password, email} = req.body;

        const user = await userSchema.findOne({email})

        if(!user){
           return res.status(401).json({
                success:false,
                message:"You not Register, before Signup",
            })
        }

        const payload = {
            email:user.email,
            id:user._id,
            // role:user.role
        }
        //varify password & generate a jwt Token
        if(await bcrypt.compare(password,user.password)){

            let token = jwt.sign(payload,
                        process.env.JWT_SECRET,
                        {
                            expiresIn:"2h"
                        })
            user.token = token;
            user.password=undefined;

            const options={
                expires:new Date( Date.now() + 3 * 24 * 60 *60 * 1000),
                httpOnly:true,
            }

            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:"User Logged in successful",
            });
            
        }else{
           return res.status(403).json({
                success:false,
                message:"Password incorect",
            })
        }

        

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Login failure",
        })
    }
}

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:'dtcvhfl7x',
    api_key:'423615599395355',
    api_secret:'iZ2TeBTHirEGUnsKJSsY6_Z1E6A',
});

exports.infoData = async (req,res)=>{

    try{
        const{firstname, lastname} = req.body
        const file = req.file;
        
        if(req.file)
        {
            try{
                await cloudinary.uploader.upload(file.path , (err,result)=>{
                    console.log(result);
        
                    const Data = infoData.create({
                        firstname , lastname , imagePath:result.url,
                    })
                })
            }
            catch(err){
                console.log("while uploading ",err)
            }
        }



       return res.status(200).json({
           success :true,
           message:'User created Successfuly',
       });


    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"InfoData failure",
        })
    }
}