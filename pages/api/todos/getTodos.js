import Todo from "../../../modals/Todo"
import connectDb from '../../../midleware/mongoose'
import jwt from "jsonwebtoken";
const handler = async( req, res)=> {
    try {
        const token = req.headers["auth-token"];

        if (token !== undefined) {
          //fetching user id thorough jwt token to store products with that userid
          const verify = jwt.verify(token, process.env.JWT_SECRET);
          let user = verify.user.id;
          let todos=await Todo.find({user})
  res.status(200).json({todos:todos,success:true})
        }else{

            res
              .status(400)
              .json({
                error: "User is not Authenticated ,please sign in again",
                success: false,
              });
        }
    } catch (error) {
        console.log('first');
        
        res.status(400).send({error:error,success:false})
    }

}
  
export default connectDb(handler)