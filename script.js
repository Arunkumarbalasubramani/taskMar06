 // Task Given on 31 Jul 2021-
//  1.Do the below programs in anonymous function & IIFE
    // a. Print odd numbers in an array

            //  function findOddNumbers(a){
            //     let oddsArray=[];
            //      a.forEach(element => {
            //          if(element %2 !== 0){
            //              oddsArray.push(element);
            //          }});
                // console.log(`The Odd Numbers in the array are : ${oddsArray}`)}

                //  findOddNumbers([13,14]);

        //   Same Using an Arrow Function 
                                //       let oddNum = (a)=> {
                                //                     let oddsArray=[];
                                //                      a.forEach(element => {
                                //                          if(element %2 !== 0){
                                //                              oddsArray.push(element);
                                //                          }});
                                //                     console.log(`The Odd Numbers in the array are : ${oddsArray}`)}
                                //                     oddNum([13,14]);
        
        
        

 // b.Convert all the strings to title caps in a string array

        // function titleCase(a) {
        //     let str = a.toString();
        //     str = str.toLowerCase();
        //     str = str.split(',');
        //     for (var i = 0; i < str.length; i++) {
        //     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        //     } 
        //     console.log(`Given array is converted to titlecaps. The resulting array is: [${str.join(',')}]`)
        
        // }
        // titleCase(['arun','vino','pradeepa']);

        
        //   Same Using an Arrow Function 
                        
                                //      let titleCase =  (a)  => {
                                //             let str = a.toString();
                                //             str = str.toLowerCase();
                                //             str = str.split(',');
                                //             for (var i = 0; i < str.length; i++) {
                                //             str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                                //             }
                                //             console.log(`Given array is converted to titlecaps. The resulting array is: [${str.join(',')}]`)
                                        
                                //         }
                                //         titleCase(['arun','vino','pradeepa']);

        
// c.Sum of all numbers in an array

        // function sumOfNumbers(a){
        //         let totalValue = 0; 
        //         a.forEach(element => {
        //                 totalValue = totalValue+element;
        //         });
        //         console.log(`The sum of numbers in the given array is : ${totalValue}`);
        // }
        // sumOfNumbers([1,2,3,4,5]);

         //   Same Using an Arrow Function 
                                
                                // let sumOfNumbers = (a) => {
                                //                         let totalValue = 0; 
                                //                         a.forEach(element => {
                                //                                 totalValue = totalValue+element;
                                //                         });
                                //                         console.log(`The sum of numbers in the given array is : ${totalValue}`);
                                //                 }
                                //                 sumOfNumbers([1,2,3,4,5]);

// d. Return all the prime numbers in an array    

        // function primeNumberCheck(a){
        //         let primeArray = [];
        //         a.forEach(element => {

        //                 if(element === 1){
        //                         console.log(' Number 1 Is Neither prime nor Composite Number')
        //                 }
        //                 else if(element>1){
        //                         for(i=2; i<element;i++){
        //                                 if(element % i == 0);{
        //                                        primeArray.push(element);
        //                                        break;
        //                                 }
        //                         }
        //                 }
        //         });
        //         console.log(`The Prime Numbers in The given array are : [${primeArray}]`);
        // }
        // primeNumberCheck([2,3,5,7])
        //    //   Same Using an Arrow Function 
                                                        
                                //              let   primeNumberCheck = (a) => {
                                //                         let primeArray = [];
                                //                         a.forEach(element => {

                                //                                 if(element === 1){
                                //                                         console.log(' Number 1 Is Neither prime nor Composite Number')
                                //                                 }
                                //                                 else if(element>1){
                                //                                         for(i=2; i<element;i++){
                                //                                                 if(element % i == 0);{
                                //                                                 primeArray.push(element);
                                //                                                 break;
                                //                                                 }
                                //                                         }
                                //                                 }
                                //                         });
                                //                         console.log(`The Prime Numbers in The given array are : [${primeArray}]`);
                                //                 }
                                //                         primeNumberCheck([2,3,5,7])
                                                        

// e. Return all the palindromes in an array

        //         function palindromefn(string){
        //                 let a = string.toString();
        //                 let str = a.split(',')

        //                 str.forEach(element => {
        //                         let len = element.length;
        //                         for(i=0;i<len/2;i++){
        //                          if(element[i] !== element[len- 1 -i])
        //                         {
        //                                 console.log(`String : ${element} is a not a palindrome`)
        //                         }
        //                         else{
        //                                 console.log( `String : ${element} is a palindrome`);
        //                         }

        //                         }
                                
        //                 });
        //         }
        
        // palindromefn(['madam','noon'])

          //   Same Using an Arrow Function 

                                //   let palindromefn = (string)=> {
                                //                         let a = string.toString();
                                //                         let str = a.split(',')
                                
                                //                         str.forEach(element => {
                                //                                 let len = element.length;
                                //                                 for(i=0;i<len/2;i++){
                                //                                  if(element[i] !== element[len- 1 -i])
                                //                                 {
                                //                                         console.log(`String : ${element} is a not a palindrome`)
                                //                                 }
                                //                                 else{
                                //                                         console.log( `String : ${element} is a palindrome`);
                                //                                 }
                                
                                //                                 }
                                                                
                                //                         });
                                //                 }
                                //                 palindromefn(['madam','noon'])

// f. Return median of two sorted arrays of the same size

        //         function medianArray(arr1,arr2){
        //                 let mergedArray = arr1.concat(arr2)
        //                 let sortedArray = mergedArray.sort((a,b)=>{return a-b}); 
        //                 let len = sortedArray.length;
        //                 if(len  %2 ===0){
        //                         let median = ((sortedArray[(len /2)-1]) + (sortedArray[(len/2)+1])) /2;
        //                         console.log(`Median of the two array of Even Count is: ${median}`);
        //                         }
        //                else{
        //                 let median = sortedArray[((len +1 )/2)-1]
        //                 console.log (`Median of the two array of odd Count is: ${median}`);
        //                }    
        //         }

        //         medianArray([2,5,6,7,8],[10,13,15,19]);

        //   Same Using an Arrow Function 
                
                        // let medianArray = (arr1,arr2)=> {
                        //         let mergedArray = arr1.concat(arr2)
                        //         let sortedArray = mergedArray.sort((a,b)=>{return a-b}); 
                        //         let len = sortedArray.length;
                        //         if(len  %2 ===0){
                        //                 let median = ((sortedArray[(len /2)-1]) + (sortedArray[(len/2)+1])) /2;
                        //                 console.log(`Median of the two array of Even Count is: ${median}`);
                        //                 }
                        //        else{
                        //         let median = sortedArray[((len +1 )/2)-1]
                        //         console.log (`Median of the two array of odd Count is: ${median}`);
                        //        }    
                        // }

                        // medianArray([2,5,6,7,8],[10,13,15,19]);

// g. Remove duplicates from an array
        // function RemoveDuplicates(data){
        //         let noDupArray =[];
        //         data.forEach(element => {
        //                 if(!noDupArray.includes(element)){
        //                         noDupArray.push(element)
        //                 }

        //         });
        //         return noDupArray;
                
        // }
        // console.log(RemoveDuplicates(['banana','apple','orange','lemon','apple','lemon']))

        //   Same Using an Arrow Function 

                                //  let RemoveDuplicates = (data)=>{
                                //         let noDupArray =[];
                                //         data.forEach(element => {
                                //                 if(!noDupArray.includes(element)){
                                //                         noDupArray.push(element)
                                //                 }

                                //         });
                                //         return noDupArray;
                                        
                                // }
                                // console.log(RemoveDuplicates(['banana','apple','orange','lemon','apple','lemon']))


// h.Rotate an array by k times
        // function arrayRotation(arr,k){
        //         let nums = arr.concat();
        //       ;
        //         for(i=0;i<k;i++){
        //                let frontItem = nums.shift();
        //                 nums.push(frontItem)                
        //         }
              
        //         console.log(nums);
        // }        
        // arrayRotation([1,2,3,4,5],2);

         //   Same Using an Arrow Function 

                                //   let arrayRotation = (arr,k) => {
                                //         let nums = arr.concat();
                                //       ;
                                //         for(i=0;i<k;i++){
                                //                let frontItem = nums.shift();
                                //                 nums.push(frontItem)                
                                //         }
                                
                                //         console.log(nums);
                                // }        
                                // arrayRotation([1,2,3,4,5],2);