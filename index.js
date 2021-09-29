//1
function countToTen(){
  for(let i = 1; i <= 10; i++)
  console.log(i);
}
countToTen();

//2
function countFromOne(number){
  for(let i = 1; i <= number; i++)
  console.log(i);
}
countFromOne(7);

//3
function countEveryEven(number){
  for(let i = 2; i <= number; i+=2)
  console.log(i) 
}
countEveryEven(13)

//4
function countEveryOdd(number){
  for(let i = 1; i <= number; i+=2)
  console.log(i);
}
countEveryOdd(16)

//5 
function countEvens(numbers){
 let count = 0
 for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 ===0){
        count+=1
    }
 }
 return count
}
console.log(countEvens([2,4,5,6,19,22,24,27]))
