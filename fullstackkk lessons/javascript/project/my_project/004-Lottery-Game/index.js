let num = document.getElementById("num");
let button = document.getElementById("btn");
let liste = document.getElementById("yazma");




 
button.addEventListener("click", ()=>{
	function result(number){
		function lottery6() {
		  let arr1=[]
		  while (arr1.length < 6) {
			let one = Math.trunc(Math.random()*90) + 1
			if(!arr1.includes(one)){
			  arr1.push(one)
			}
		  }
		  return arr1.join("-")
		}
		function lotteryJoker(){
		  let arr = lottery6().split("-")
		  let one = Math.trunc(Math.random()*90) + 1
		  if(!arr.includes(one)){
			return one
		  }
		}
		function lotterySuper() {
			return Math.trunc(Math.random()*90) + 1
		}
		let x=0
		let aa = ""
		while(x<number){
		 x++
		 aa += (`${lottery6()} | ${lotteryJoker()} | ${lotterySuper()} </br> <hr>`)
		} 
		  return aa
		}
		
		liste.innerHTML = result(num.value)
	});
	
	/*function result(number){
	
  
 	function lottery6(){
	let arr = [];
	while (arr.lenght < 6){
	  let loto = Math.trunc(Math.random()*90 +1);
	  if(!arr.includes(loto)){
		arr.push(loto);
	  }
  
	}
	return arr.join("-")
	}
	
  
   function lotteryJoker(){
	  let arr1 = lottery6().split("-");
	  let loto = Math.trunc(Math.random()*90 +1);
	  if(!arr1.includes(loto)){
		return loto;
	  }
	}
  
  
  function superStarNumber(){
   return Math.trunc(Math.random()*90 +1);
  }
  
  let x = 0;
  let lastResult = [];

  while(x<number){
	x++ 
	
	lastResult.push(`${lottery6()} | ${lotteryJoker()} | ${superStarNumber()}`);
   
  }
   return lastResult
  };
console.log(result(5)) 
}); */


/*
 function result(number){
   function lottery6() {
     let arr1=[]
     while (arr1.length < 6) {
       let one = Math.trunc(Math.random()*90) + 1
       if(!arr1.includes(one)){
         arr1.push(one)
       }
     }
     return arr1.join("-")
   }
   function lotteryJoker(){
     let arr = lottery6().split("-")
     let one = Math.trunc(Math.random()*90) + 1
     if(!arr.includes(one)){
       return one
     }
   }
   function lotterySuper() {
       return Math.trunc(Math.random()*90) + 1
   }
   let x=0
   let aa = []
   while(x<number){
    x++
    aa.push(`${lottery6()} | ${lotteryJoker()} | ${lotterySuper()}`)
   } 
     return aa
   }
   console.log(result(4))
   /*
 for (let i = 0; i < +num.value; i++) {
let random1 = Math.trunc(Math.random()*90) + 1 ;
let random2 = Math.trunc(Math.random()*90) + 1 ;
let random3 = Math.trunc(Math.random()*90) + 1 ;
let random4 = Math.trunc(Math.random()*90) + 1 ;
let random5 = Math.trunc(Math.random()*90) + 1 ;
let random6 = Math.trunc(Math.random()*90) + 1 ;
let random7 = Math.trunc(Math.random()*90) + 1 ;
let random8 = Math.trunc(Math.random()*90) + 1 ;
      if ((random1 !== random2)  && (random1 !== random3 )&& ( random1 !== random4) &&  (random1 !== random5) && (random1 !== random6) && (random2 !== random3) && (random2 !== random4) && (random2 !== random5) && (random2 !== random6) && (random3 !== random4) &&  (random3 !== random5) && ( random3 !== random6) && ( random4 !== random5) &&  (random4 !== random6) && (random5 !== random6 ))
{(`${random1}` + '-' + `${random2}` + '-' + `${random3}` + '-' + `${random4}` + '-'+ `${random5}` + '-' + `${random6}`+ '|'+ `${random7}`+ '|' + `${random8} </br> <hr>`   ) }    
      
  } */





	
	

 






