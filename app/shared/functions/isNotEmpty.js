export default function isNotEmpty(...str){
  let notEmpty = true;
  for(let i = 0; i < str.length; i++){
    if(str[i].length < 1){
      notEmpty = false
    }
  }
  return notEmpty
}