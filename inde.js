{/*Just Display name on page*/}
let izina1=document.getElementById("izina").value
const butto=document.getElementById("nibuto")
const igisubizo=document.getElementById("igisubizo")
const amasaha=new Date().getHours()
butto.onclick=() =>{
   let Amazina=izina1
   if(amasaha<4 && amasaha>1){
   igisubizo.innerHTML=` Mwaramutse Neza ${Amazina}, Ubungubu Uri mumasaha yigicuku`
   console.log(`Amazina yawe ni ${Amazina}`)
   }
   else{
      igisubizo.textContent=`Mwiriwe neza ${Amazina}? Ubungubu turi mumasaha yakazi`
      console.log(`Amazina yawe ni ${Amazina}`)
   }
}
