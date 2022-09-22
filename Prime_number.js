// Following solutions contains anonymous function and arrow function together
// ***********************************

// // //Print odd numbers in an array

// // const prime= (n)=>{
// //     for(i=0;i<n.length;i++){ //for loop to read the lenth of the array
// //         if(n[i]%2!==0) //Odd number logic
// //           {console.log(`Odd number is${n[i]}`)
// //         }

// // }

// // }
// // let p=[1,2,3,4,5,6,7]
// // prime(p)//calling function


// //IIFE function for Prime number
// // (iifeprime= ()=>{
// //     let n=[1,2,3,4,5,6,7]
// //     for(i=0;i<n.length;i++){ //for loop to read the lenth of the array
// //         if(n[i]%2!==0) //Odd number logic
// //           {console.log(`Odd number is${n[i]}`)
// //         }

// // }

// // })()

// // Convert all the strings to title caps in a string array

// // let stringarray=["car", "bat", "ball","cart"]

// // let titlecase = (userarray)=>
// // {

// //     for(let i=0;i<userarray.length;i++)
    
// //     console.log(userarray[i][0].toUpperCase()+userarray[i].slice(1))
// // }
// // titlecase(stringarray)


// // IIFe function



// // ( titlecase = ()=>
// // {
// //     let userarray=["car", "bat", "ball","cart"]
// //     for(let i=0;i<userarray.length;i++)
    
// //     console.log(userarray[i][0].toUpperCase()+userarray[i].slice(1))
// // }
// // )()

// // Sum of all numbers in an array

// // let sumarray=(array)=>{
// //     let sum =0
    
// // for(let i=0; i<array.length;i++)
// // {
    
// //     sum+=array[i]
    
// // }
// // console.log(sum)
// // }
// // let array1= [1,2,3,4,5,5]
// // sumarray( array1)


// // iife function
// // ( sumarray=()=>{
// //     let sum =0
// //     let array= [1,2,3,4,5,5]
// // for(let i=0; i<array.length;i++)
// // {
    
// //     sum+=array[i]
    
// // }
// // console.log(`the sum in IIFE is:${sum}`)
// // }
// // )()


// // Return al prime numbers in an array

// // let allprime= (num)=>{
// //     let arr=[]
// //     for ( let i=0; i<num.length;i++){
// //         let factor=0

// //         for(let j=1;j<=num[i];j++){

// //             if( num[i]%j===0){
// //                 factor++

// //             }
                
                
// //         }
// //        if (factor===2)
// //        {
// //         arr.push(num[i])
// //        }     
// //      }
// //      console.log(arr)
// // }
        

    
    
// // allprime([9,4,11,12,13,17,19])

// // IIFe version to find all prime numbers in an array

// //  (allprime= ()=>{
// //     let arr=[]
// //     let num=[9,4,11,12,13,17,19]
// //     for ( let i=0; i<num.length;i++){
// //         let factor=0

// //         for(let j=1;j<=num[i];j++){

// //             if( num[i]%j===0){
// //                 factor++

// //             }
                
                
// //         }
// //        if (factor===2)
// //        {
// //         arr.push(num[i])
// //        }     
// //      }
// //      console.log(arr)
// // }
// //  )()

// //Retrun all the palindromes in an array

// // let pal= (stringarray)=>{
// //  for(let i=0;i<stringarray.length;i++){
// //     let rev= stringarray[i].split("")
// //     let reve=rev.reverse();
// //     let joinrev= reve.join("")
// //     if( stringarray[i]===joinrev)
// //     {
// //         console.log(stringarray[i])
// //     }

// // }

// // }

// // pal(["level", "aroma", "quality", "india"])

// // IIFE example of Palindrome 
// // ( pal= ()=>{
// //     let stringarray=["level", "aroma", "quality", "india","deified", "repaper" ]
// //     for(let i=0;i<stringarray.length;i++){
// //        let rev= stringarray[i].split("")
// //        let reve=rev.reverse();
// //        let joinrev= reve.join("")
// //        if( stringarray[i]===joinrev)
// //        {
// //            console.log(stringarray[i])
// //        }
   
// //    }
   
// //    })()

// // Median of two sorted arrays of the same size

// // let ar1=[1,2,3,4]
// // let ar2=[5,6,7,8]

// // let median=(inputarray1,inputarray2)=>
// // {

// //     let mainarray=(inputarray1.concat(inputarray2));

// //     let dear = mainarray.sort((x,y)=> x-y);
    
// //     let len= dear.length;
// //     let first_h=(mainarray[(len/2)-1]+mainarray[(len/2)+1])/2 //collecting the two middle numbers by lenghth-1 and length +2
// //     console.log(mainarray)
// //     console.log(first_h)

// // }

// // median(ar1,ar2)

// // IIfe method of doing things



// // ( median=(inputarray1,inputarray2)=>
// // {
// //     let ar1=[1,2,3,4]
// //     let ar2=[5,6,7,8]

// //     let mainarray=(ar1.concat(ar2));

// //     let dear = mainarray.sort((x,y)=> x-y);
    
// //     let len= dear.length;
// //     let first_h=(mainarray[(len/2)-1]+mainarray[(len/2)+1])/2 //collecting the two middle numbers by lenghth-1 and length +2
// //     console.log(mainarray)
// //     console.log(`Median is:${first_h}`)

// // })()

// // Remove duplicates from an array
// // let removeduplicate=(arrayinput)=>{
// //     let removedduparray=[...new Set(arrayinput)]
// //     console.log(removedduparray)
// // }

// // removeduplicate([1,2,2,2,34,4,5,5,6,6,7,7,88,9,9,9,9])

// // IIFE version of removing duplicates

// // ( removeduplicate=()=>{
// //    let arrayinput= [1,2,2,2,34,4,5,5,6,6,7,7,88,9,9,9,9]
// //     let removedduparray=[...new Set(arrayinput)]
// //     console.log("duplicates have been removed"+" "+ removedduparray)
// // })()

// // Rotate an array by Ktimes

// // let rotatearray=(arrayi,k)=>{
// //     for (let i=1;i<=k;i++)
// //     {
// //         let b= arrayi.reverse()
    

// //     }
// // }

// // rotatearray([1,2,3,4,5]) k times

// // let rotate= (array=[1,2,3,4,5], ktimes=2)=>{
// //     for(let i=0;i<ktimes;i++)
// //     {
// //         array.unshift(array.pop());
// //     }
// //     return array;
// // }

// // console.log(rotate([1,2,3,4,5,6,7],3))

// IIFE

// // ( rotate= (array=[1,2,3,4,5], ktimes=2)=>{
// //     for(let i=0;i<ktimes;i++)
// //     {
// //         array.unshift(array.pop());
// //     }
// //     console.log (array);
// // })


// // ()