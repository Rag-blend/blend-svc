const client=require('../dao/product-dao')
exports.getServProduct=async()=>{
 const maindata= await (client.getdaoProduct()).then((maindata1)=>{
        console.log("maindat",maindata1.rows)
        return maindata1.rows
    })
    
    return maindata
}