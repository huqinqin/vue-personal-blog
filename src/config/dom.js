const style = document.createElement('div').style;
let vender = (()=>{
  let transform = {
    webkit:"webkitTransform",
    Moz:"MozTransform",
    O:"OTransform",
    ms:"msTransform",
    standard:"standard",
  };
   for( let key in transform) {
     if (style[transform[key]] !== undefined) {
       return key;
     }
     return false
   }
  })();
 export function prefix(style) {
      if(vender == false){
        return
      }
      if(vender == 'standar'){
        return style
      }
    return  style = vender + style.charAt(0).toUpperCase() + style.substring(1)
 }
