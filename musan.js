function fizzBuzz(){
    let num = 0;
    do{
        if(num % 3 === 0 && num % 5 === 0){
            console.log('mostly');
        } else if(num % 3 === 0){
            console.log('most');
        }else if(num % 5 === 0){
            console.log('lessmost');
        } else{
            console.log(`number: ${num}`);
        } num++;
    }  while( num <= 100);
}
fizzBuzz()

console.log("\n")
console.log("\n")

let num = 0;
while(num < 11){
    console.log(num)
    num++;
}

console.log("\n")
console.log("\n")

 for(let a = 3; a < 15; a++)
 console.log(a);

let count = 0;
do{
    console.log(`number: ${count}`);
    count++;
} while(count < 7)


console.log("\n")
console.log("\n")


for(let s = 1;s < 6; s++){
    for(let t = 0; t < 5; t++){
        console.log(s + " , " + t);
    } console.log("\n")
}

let vagsjs = {n:1, m:3, x:6, y:7, z:9};
for(let b in vagsjs) {
    console.log(vagsjs[b]);
}
console.log('\n')

var kabaguru = [1, 2, 3, 4];
for(var hello of kabaguru){
    console.log(hello);
}
console.log("\n")

function reverse_method(){
    let benimana = 'wizuye';
    let full_umutu = benimana.split('').reverse().join('');
    console.log(full_umutu);
}
reverse_method(); 

console.log("\n")
console.log("\n")

function forIn(){
    let beni = {c:2, v:4, n:3};
    for(let h in beni){
        console.log(beni[h]);
    }
}
forIn();

console.log("\n")

function forOf(){
    var jean = [6,7,9,0,6];
    for(var karaba of jean){
        console.log(karaba);
    }
}
// forOf();

// console.log("\n")
// console.log("\n")

// var beni = 0;
// do{
//     console.log(beni);
//     beni++;
// }while(beni<12);

// console.log("\n")
// console.log("\n")

// function fun_while(){
//     var beni = 0;
//     while(beni<8){
//         console.log(beni);
//         beni++;
//     }
// }
// fun_while();

// for(let b = 1; b < 4; b++) {
//     for(let k = 2; k < 5; k++)
//     ;{
//         console.log(b + " , " + k);
//     }
//    console.log('\n')
// }




// let index = 0;
// const slideShow = document.getElementsByClassName("incon");
// function mySlide(){
//     for(let i = 0; i<slideShow.length; i++){
//         slideShow[i].style.display = 'none';
//     }
// index++;
// if(index > slideShow.length){
//     index = 1;}
//     slideShow[index - 1].style.display ='block';
// setTimeout(mySlide,3000);
// } 
// mySlide();


let karabu = 0;
let slideShow = document.getElementsByClassName("incon");
function mySlide(){
    for( let i = 0; i< slideShow.length; i++){
        slideShow[i].style.display = "none";
    }
    karabu++;
    if(karabu > slideShow.length){
        karabu =1;
    }
    slideShow[karabu - 1].style.display = "block";
    setTimeout(mySlide, 2000);
}
mySlide();



const friends = ['dan', 'kawiki', 'beni', 'man', 'ayinkamiye', 'nshimiye'];
 const filtered = friends.filter(function(value){
     return value > 4;
 });

console.log(filtered);





// const arry = [1,4,5,6,7,8];
// console.log(arry[7]);


const getTime = new Date();
const hour = getTime.getHours();
// console.log(hour);
// let minut = getTime.getMinutes;
// console.log(minut);
var dayTime = hour>= 12 ? "PM" : "AM";
// console.log(dayTime);

// let user = daily =>{
//     if(hour>= 12 && hour<=17){
//         return "good evening";
//     } else {
//         return "byeeee";
//     }
//     console.log(user);
// }
// daily(12);



//  jquery 
// let par = $(".para1");
// console.log(par[0]);

// let pasu = $("<p class='hihi'>arko Mana</p>");
// console.log(pasu[0]);


// module

// function epxtus(a,b){
//     // luhscas(a,b);
//     console.log(a+b);
    
// }

// let luhcas = (a,b) =>{
//     console.log(a*b);
// }
// export{epxtus,luhcas};

// ajax
let btnn = document.querySelector(".huguka");
btnn.addEventListener("click",dukore);
function dukore(){
    const xkml = new XMLHttpRequest();
    xkml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
    }
    xkml.open("get", "response.json", true);
    xkml.send();
};

const weak = new WeakMap();
let oraa = {},
orere = {};
weak.set(oraa,"hi");
weak.set(orere,"harahiye");
console.log(weak.get(orere));

const str = new Set([3,2,7]);
str.add(45);
str.add(25);
str.add(25);
str.add({a:"ax", b:"two"});
str.delete(25)
console.log(str);
console.log(str.has(5))
for(let hon of str){
    console.log(hon);
}
str.forEach(hilo =>{
    console.log(hilo);
})

try{
    console.log(er);
}catch(hy){
    console.log(`block: ${hy.name}`);
    console.log(`block: ${hy.message}`);
    console.log(`block: ${hy.stack}`);
}

const gep = "welcome to my house guys";
const reg =/MY/i;
console.log(gep.search(reg));

const ryd = [3,5,6,34,67];
function mapus(hy){
    const heu = ryd.map(hy*2);
    console.log(heu)
}

function integerh(x){
// const haki = [2,7,78,42,80];
// for(let i =0; i<haki.length;++i){
    if(x%2 ===0){
        return "Even";
    }
    else{
        return "Odd";
    }

}
integerh();

// function greteeeng(name){
//     if(name === "John"){
//         return"Hello, my honey!"
//     } else{
//         return"Hello "+ name + " !".
//     }
// }
function greteeeng(n,b,c){
    const esw = n/b;
    const dg = n/c;
    if(n%c=== 0 && n%b ===0){
        return true;
    } else{
        return false;
    }
}

// function greteeeng(nae){
//     if(nae>0){
//         return nae*-1;
//     } else{
//         return{
//             return nae;
//         }
//     }
// }
const arrt =[12,3,45,67,89];
function greteeng(na){
    const minh = 0;
    for(let i=0; i<minh.length; i++){
        arr[i] < minh;
        minh = arrt[i]
    }
    return minh;
}
console.log(greteeeng());

function roundeddown(aret){
    const count = aret.length;
    const sun = 0;
    for(let i = 0; i< count;i++){
        sm = sum +aret[i];
    }
    const avg = sum/count;
        const redwon = Math.floor(avg);
        console.log(redwon);
}
 function duteteJ(jais){j
    let hakiza = 0;
    for(let i=0; i<jais.length; i++){
        if(jais[i]>0){
            hakiza = hakiza+jais[i];
        }
    }
    return hakiza;
}


function switstat(op, vl, lv){
    const oprata =0;
    switch(op){
        case"+":
        result = vl+lv;
        break;
        case"-":
    }
}

function trimedv(trim){
    const treding =  [];
    const hello = trim.split(' ');
    for(let i= 0;i <trim.length; i++){
        const hekjj = hello[i].trim();
        treding.push(hekjj);

    }
    const lojnnn = treding.join(" ");
return treding;
}

const nweree = [2,4,6,3,11];
function doublu(x){
    return x*2;
}
const feriam = nweree.map(doublu);
console.log(feriam);


// function addd(ar, ar1){
//     const sum = 0;
//     for(let i =0; i < ar. length; i++){
        
//         sum = sum + sddd;

//     }
//     return sum;
// }
//         const vkjd = [12,3,56];
//         const guma = [1,2,4];
//         const sddd = vkjd+ guma;
// console.log(addd( ));

const arrh = [-2,4,3,-1,0,5];
const filte = arrh.filter(b => b>0).map(b=> '<li>' + b + '</li>').join(' ');
console.log(filte);

function creati(fact){
    
        this.fisrtName = 'Jean',
        this.lastName = 'Gakuru',
        this.age= 23,
        this.hoby =function() {song: 'modern',
                console.log('hello')
}
}
const cirg = new creati(5);
console.log(cirg)

let j = 5;
let k= j;
j=9;

console.log(j)

var agafaranga = 13;
do{
     agafaranga--;
} while(agafaranga >1);



// APPLICATION PROGRAMMING INTERFACES
const inter = document.getElementById("deos");
function applicabo(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosi);
    }
    else(inter.innerHTML = "Geolocation is not found");
}
applicabo()
function showPosi(posi){
    inter.innerHTML = "The latitude is " + posi.coords.latitude + "<br> The longitude is " + posi.coords.longitude;
}
// showPosi()

let jquy = $("#query").text("lerning Jquery is my hope!");