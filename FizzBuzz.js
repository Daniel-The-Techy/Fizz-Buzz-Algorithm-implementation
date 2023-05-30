function FizzBuzz(num){
    let initialArray=[]
    let finalArray=[]
    


     while(num > 0){
        initialArray.push(num--)
     }

     while(initialArray.length > 0){
       finalArray.push(initialArray.pop())
    }

       let finalResult=finalArray.map(i => i.toString())
          
            
      for(let i =0; i < finalResult.length; i++){
           if(finalResult[i] % 15==0){
              finalResult[i]='Fizzbuzz'
           }else if(finalResult[i] % 5 ==0){
              finalResult[i]='buzz'
           }else if(finalResult[i] % 3 ==0){
            finalResult[i]='fizz'
           }
      }
      return finalResult
   }
   
   FizzBuzz(20)

