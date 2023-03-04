import Todo from "../../../modals/Todo";
import connectDb from "../../../midleware/mongoose";
import jwt from "jsonwebtoken";
const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      const { title, description } = req.body;
      const token = req.headers["auth-token"];

      if (token !== undefined) {
        //fetching user id thorough jwt token to store products with that userid
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        let user = verify.user.id;
        let mytodo = new Todo({
          title,
          description,
          user,
        });
        await mytodo.save();
        res.status(200).json({ success: true, error: "" });
      } else{

          res
            .status(400)
            .json({
              error: "User is not Authenticated ,please sign in again",
              success: false,
            });
      }
    } else {
      res
        .status(400)
        .json({ error: "This method is not allowed", success: false });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export default connectDb(handler);
