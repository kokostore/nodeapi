const Post = require("../models/post");

exports.createOrder = (req, res) => {
	console.log("CREATE ORDER", req.body);
}

exports.getCost=async(req,res)=>{
    
    const cartItems=req.body
    Post.find({_id:{ $in: [
        ...Object.keys(cartItems)
        ]}})
    .exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        let cost=0;
        for(let post of posts){
            cost+=(post['price'])*(cartItems[post['_id']])
        }
        return res.json(cost)
    })   
}