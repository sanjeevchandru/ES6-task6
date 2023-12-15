function prime(num){
    let c=0;
    for(let i=0;i<=num;i++){
        if(num%i==0){
            c++;
        }
    }
    return new Promise((res,rej)=>{
        res(c);
        // console.log(c);
    })
}
function check(d,n){
    return new Promise((res,rej)=>{
        if(d==2){
            res(n+" prime Number");
        }
        else{
            rej(n+" is not prime Number")
        }
    })
    
}
async function result(){
    try{
        let x= await prime(24);

        let y=await check(x,24);
        console.log(y);
        document.write(y+"<br>");
    }
    catch(err){
        console.log(err);
        document.write("1."+err+"<br>")
    }

}
result()
// prime)
/*..............................................................................*/
let arr=[1,2,3,4,5,6,7,8,9,10];
function f1(arr){
    let x=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            x.push(arr[i]);
        }
    }
    return new Promise((res,rej)=>{
            res(x);
    })
    
}
function f2(z){
    let s=0;
    for(let i=0;i<z.length;i++){
        s=s+z[i];
    }
    return new Promise((res,rej)=>{
        res("Sum of odd Numbers : "+s)
    })
}
async function f3(){
    try{
        let a=await f1(arr);
        let b=await f2(a)
        console.log(b);
        document.write("2."+b);
    }
    catch(err){
        console.log(err)
    }
}
f3();