/* 
console.log("promises.js is running");
function wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end <start + ms) {
        end = new Date().getTime();
    }
}; */
//?==============================================================
//!                          PROMİSES
//?==============================================================


/* const promise = new Promise((resolve, reject)=>{
    //some calculation
  wait(2000);
  const userData = {
      firstName: "Barry",
      birthYear:1977
  };
let succesful = Math.floor(Math.random()*2);
if (succesful) 
resolve(userData);
reject( "something went wrong!")
}); */

/* promise.then(
    result => {console.log(result);}, 
    error => {console.log(error);}
    ); */

/* promise.then((result)=> {console.log(result)}).catch(
    (error)=> {
        console.log(error)
       
    }
); */

//?==============================================================
//!                          //! ÇAY DEMLEMESİ
//?==============================================================

/* 
const cayDemleme = ()=> {
    suyuKaynat()
    .then((durum1) =>{
        console.log(durum1);
        return CayEkle();
    })
    .then((durum2)=> {
        console.log(durum2);
        bekle(1500);
        return afiyet()
    })
    .then((durum3)=>{
        console.log(durum3);
    })
    .catch((err)=>{
        console.error(err);
    })
};
const suyuKaynat = () =>{
    return new Promise((resolve,reject) =>{
        const nasip = Math.floor(Math.random()*6 );
        if ( nasip){
            bekle(1000)
            resolve( "Su kaynadı")
        }
        reject(new Error("Kettle Arızalı"));

    });
}
const CayEkle = () =>{
    return new Promise((resolve,reject)=> {
    const cayNasibi = Math.floor(Math.random()*2)
    if(cayNasibi){
        bekle(500);
        resolve("Çay Eklendi")
    }
    reject("Çay Bitmiş")
})
};

const bekle = (ms) =>{
    const start = new Date().getTime();
    let end = start;
    while (end <start + ms) {
        end = new Date().getTime();
    }
}
const afiyet = (m)=>{
    return 'Cay Hazır Afiyet olsun'
}
cayDemleme() */

//?==============================================================
//!                          ASYNC AWAIT
//?==============================================================

let count = 10;
let interval = setInterval(() =>{


console.log(`kalan süreniz : ${count}`);
count --;
 if (count == 0){
clearInterval(interval)
    }
    if (count == 0) {
        console.log("süreniz bitmiştir iyi günler dileriz")
        window.open("https://www.yazilimbilisim.net", "_blank");
    }
    
}, 100)