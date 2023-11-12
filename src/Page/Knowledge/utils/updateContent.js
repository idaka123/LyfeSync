import random from "./random";
const updateContent = (x, a, max, min) => {
  let temp = random(max, min); 
  while(x.id === temp + 1){
    temp = random(max, min);
  }
  return a[temp];
}

export default updateContent;