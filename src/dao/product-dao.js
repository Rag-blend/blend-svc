const clients = require('../db')
exports.getdaoProduct=async()=>{
    const statement=`select * from products`;
    const data = await clients.query(statement);
    // console.log(data)
    return data;
}