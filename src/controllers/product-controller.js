const productServ=require('../services/product-serv')
exports.getProductServ=async(req,res)=>{
    try {
        const allProduct = await productServ.getServProduct();
        console.log("in controller -----",allProduct)
        res.status(200).json(allProduct)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}