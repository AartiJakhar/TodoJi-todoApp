import Product from "../../modals/Product"
import connectDb from '../../midleware/mongoose'
const handler = async( req, res)=> {
    try {
          let product=await Product.find()
  res.status(200).json(product)
    } catch (error) {
        res.status(400).send({error})
    }

}
  
export default connectDb(handler)