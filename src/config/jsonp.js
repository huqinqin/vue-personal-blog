import originJsonp from 'jsonp'
export function jsonp(url,options,data) {
  return new Promise((resovle,reject)=>{
    originJsonp(url,options,(err,data)=>{
      if(!err){
        resovle(data)
      }else{
        reject(err)
      }
    })
  });
}
