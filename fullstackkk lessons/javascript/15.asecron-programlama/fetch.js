//?==============================================================
//!                          FETCH
//?==============================================================
(async () =>{
/* fetch(url)
.then((r) =>{
    console.log(r)
    return r.json()
})
.then((data) =>{
    console.log(data);
}

) */

const url = 'https://jsonplaceholder.typicode.com/users/8';


function usingFetch(url) {
   fetch(url)
   .then((res)=>{
if(!res.status != 200){
    throw new Error ('somethin went wrong');
}res.json()
   } )
   
   .then((data)=> {
       console.log('user',data);
   })
   .catch((err)=> console.error("ERROR",err))
};
// usingFetch(url)

async function usingAsyncFetch(url){
    try{
        const res = await fetch(url);
        if (!res.ok){
            throw new Error('something wrong')
        }
        const userData = await res.json();
        console.log("user Data:", userData );
        for (const [key, value] of Object.entries(userData)){
            console.log(key, '::=>', value);
        }
    
    }catch(err){
    console.error(err);
}
}
/* usingAsyncFetch(url) */
async function usingAsyncFetch2(url){
    try{
        const res = await fetch(url);
        if (!res.ok){
            throw new Error('something wrong')
        }
        return await res.json();
      
        
    
    }catch(err){
    console.error(err);
}
}
usingAsyncFetch2(url).then((d)=>{console.log(d)});

// console.log(userData(url));
// console.log(usingFetch2(url));
// console.log(usingAsyncFetch2(url));
// const f1 = async () => {
    const sonuc = await usingAsyncFetch2(url);
    sonuc.yeni = "merhaba"
    sonuc.birthday = 1987
    

    for(key of Object.keys(sonuc) ){

        console.log(key);
    }

    for(value of Object.values(sonuc) ){

        console.log(value);
    }
  
// }
// f1();

const url2 = 'https://jsonplaceholder.typicode.com/todos';
const todoList = await usingAsyncFetch2(url2)
// console.log(todoList);
/* todoList.forEach((todoItem)=>{
    console.log(`${todoItem.userId} \n ${todoItem.title} \n ${todoItem.completed}`);
}) */
})();

//! MUstafa Hoca Çalışma



