


// http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=yes

//weather app
// // let username=prompt("enter username")
// localStorage.setItem("username",username)
// let uname=document.querySelector("#nm")



console.log('js working fine');

const input=document.querySelector('#t1')
console.log(input);

const btn=document.querySelector('#btnw')


const cnametag=document.querySelector("#cname")
const temp=document.querySelector("#temp")
const img=document.querySelector("#details img ")
const details=document.querySelector(".details")
// let src=img.getAttribute("src");
// console.log(img.getAttribute("src"));


async function getdata(cityname){
    let promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=bc5eb78424774fb5aee93106231710&q=${cityname}&aqi=yes`)
    let data=await promise.json();
    return data;
}


let lastcity=document.querySelector("#lastcity")
let cnt=1
btn.addEventListener('click',async ()=>{
    let cname=input.value
    if(cname==""){
        alert('enter some location ')
    }
    console.log(cname);
    
    let data=await getdata(cname) // async fnc call mai bhi await daldo
    cnametag.innerText=`${data.location.name} , ${data.location.country}`
    temp.innerText=`${data.current.temp_c}*C, it is ${data.current.condition.text}`
    details.classList.add('details-add')
    localStorage.setItem(`city${cnt}`,cname);
    cnt++
    input.value=""

    
    // location.reload()
    // lastcity.innerText=`the last city was ${localStorage.getItem(`city${cnt-1}`)}
    
    
    console.log(data);
    
    

})

const myloc=document.querySelector("#btnmy")

async function mylocdata(lat,long){
    let promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=bc5eb78424774fb5aee93106231710&q=${lat},${long}&aqi=yes`)
    let data=await promise.json();
    return data;
}



myloc.addEventListener('click',async ()=>{
    console.log('button clicked');
    
    navigator.geolocation.getCurrentPosition(async (pos)=>{
        let pos1=pos
        let promise=await mylocdata(pos.coords.latitude, pos.coords.longitude)
        console.log(promise);
        cnametag.innerText=`${promise.location.name} , ${promise.location.country}`
    temp.innerText=`${promise.current.temp_c}*C, it is ${promise.current.condition.text}`
        


        
        
    },()=>{
        // console.log('failed to get location');
        alert('failed to get location');
        
    }) // there are 2 callbacls, one for resolve, one for reject
})















// --------------------------------------------------


// console.log('file 3 working ');

// async function  getData(){
//     let data= await fetch('https://catfact.ninja/fact')
//     let data2= await data.json()
//     console.log(data2.fact);
    
//     // console.log(data2);
// } 

// // getData()
// fetch('https://catfact.ninja/fact')
// .then((data)=>{
//     return data.json();
    
// }).then((jsondata )=>{
//     // alert("the fact is "+jsondata.fact)
//     console.log(jsondata.fact);
    
// })
// .catch(()=>{
//     console.log('error occured');
    
// }).finally(()=>{
//     console.log('finally in running');
    
// })
