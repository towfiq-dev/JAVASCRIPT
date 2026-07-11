const burgerPrice = 90
const myBudget = 70

if (burgerPrice < myBudget) {
  console.log('ami khabo');
  
}

const eggPrice = 30
const myMoney = 40

if (eggPrice<myMoney) {
  console.log('Right');
  
}

const eggPrice = 15
const myBudget = 10

if (eggPrice<=myBudget) {
  console.log('ami raji');
  
}else{
  console.log('ami raji na');
  
}

const score = 50

if (score >= 90) {
  console.log('G+');
  
}else if (score < 90 && score >= 80) {
  console.log("A+");
  
}else if (score < 80 && score >= 70) {
  console.log("A");
  
}else if (score < 70 && score >=60) {
  console.log("B+");
  
}else if (score < 60 && score >= 50) {
  console.log('B');
  
}else if (score < 50 && score >= 40) {
  console.log("C");
  
}else{
  console.log('F');
  
}

const isSSCPass = false
const income = 25000
const iphone = 2

if (isSSCPass == true || income > 25000 || iphone > 2) {
  console.log('kobul');
  
}
else{
  console.log('sorry');
  
}

const a = 4
const b = 6
const c = 3
const d = 4

if (a < b) {
  if (b < c) {
    console.log('Yes');
  }else{
    console.log("No");
  }
}else if (d < c) {
  console.log("Y/N");
}else{
  console.log("N/Y");
}