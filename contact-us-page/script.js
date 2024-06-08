const btn = document.querySelector(".btn");

const pSv = document.querySelector('.pSvg');
const sSv = document.querySelector('.sSvg');
pSv.style.display = "none";
sSv.style.display = "none";


const agree = document.querySelector('input[type="checkbox"]');
const query = document.querySelector('input[type="radio"]');

const general = document.querySelector('.general');
const support = document.querySelector('.support');

let flag = true;

general.addEventListener(('click'), ()=>{
    const qq = document.querySelector('.q');
    const ss = document.querySelector('.s');
    const sSv = document.querySelector('.sSvg');
    const pSv = document.querySelector('.pSvg');

    qq.style.display = "none";
    ss.style.display = "block";
    pSv.style.display = "block";
    sSv.style.display = "none";
    
    document.querySelector('.q').checked = true;
    document.querySelector("#query").innerHTML = "";
    
    if(document.querySelector('.q').checked === true){
        general.classList.add("clicked");
        flag = false;

        if(support.classList.contains("clicked")){
            support.classList.remove("clicked");
        }    
    }
})

support.addEventListener(('click'), ()=>{
    const qq = document.querySelector('.q');
    const ss = document.querySelector('.s');
    const sSv = document.querySelector('.sSvg');
    const pSv = document.querySelector('.pSvg');

    qq.style.display = "block";
    ss.style.display = "none";
    pSv.style.display = "none";
    sSv.style.display = "block";

    document.querySelector('.s').checked = true;
    document.querySelector("#query").innerHTML = "";

    if(document.querySelector('.s').checked  === true){
        support.classList.add("clicked");
        flag = false;

        if(general.classList.contains("clicked")){
            general.classList.remove("clicked");
        }    
    }
})


agree.addEventListener(('change'), ()=>{
    console.log("Hello");
})



function val(){
    let isFn = false;
    let isLn = false;
    let isM = false;
    let isMs = false;
    let isQuery = false;
    let isAgree = false;
    
    const fn = document.querySelector(".fn");
    const ln = document.querySelector(".ln");
    const m = document.querySelector(".m");
    const ms = document.querySelector("#msgg");

    const agree = document.querySelector('input[type="checkbox"]').checked;
    const query = document.querySelector('input[type="radio"]').checked;


    document.querySelector("#fname").innerHTML = "";
    document.querySelector("#lname").innerHTML = "";
    document.querySelector("#mail").innerHTML = "";
    document.querySelector("#msg").innerHTML = "";
    document.querySelector("#agree").innerHTML = "";
    document.querySelector("#query").innerHTML = "";
    
    
    if(fn.value ===''){
        document.querySelector("#fname").innerHTML = "This field is required";
        isFn = true;
    }

    if(ln.value ===''){
        document.querySelector("#lname").innerHTML = "This field is required";
        isLn = true;
    }

    if(m.value ===''){
        document.querySelector("#mail").innerHTML = "This field is required";
        isM = true;
    }

    if(ms.value === ''){
        document.querySelector("#msgg").innerHTML = "This field is required";
        isMs = true;
    }

    if(!agree){
        document.querySelector("#agree").innerHTML = "To submit this form, please consent to being contracted";
        isAgree = true;
    }

    if(!query && flag){
        document.querySelector("#query").innerHTML = "Please select query type";
        isQuery = true;
    }


    if(!isQuery && !isFn && !isLn && !isM && !isMs && !isAgree){
        submitForm();
    }
} 

function submitForm(){
    const con = document.querySelector(".messageSent");

    con.style.display = "block";
    setTimeout(()=>{
        con.style.display = "none";
    }, 2000);


    
}

btn.addEventListener(('click'), ()=>{
    val();
});
