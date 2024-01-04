let sentence = document.getElementById('sentence');
let input = document.getElementById('input');
let time = document.getElementById('Time');
let start = document.getElementById('start');
let end = document.getElementById('end');
let Result = document.getElementById('Result');

let TIME = 10, num, old_num, speed, changer;

let arr = [
    'Hello World!',
    'Happy New Year!',
    'Happy Birthday!'
]

time.innerHTML = TIME;

function choosenum(){
    num = Math.floor(Math.random()*arr.length);
    check1()
}

function check1(){
    if(num == old_num){
        choosenum();
    }
}

function timeChange(){
    if(TIME > 0){
        TIME --;
        time.innerHTML = TIME;
    } 
    else check();
}

function check(){

    let length = arr[num].length;
    speed = (length) / (10 - TIME);

    if(arr[num] == input.value){
        Result.innerHTML = `You win. Your speed is ${speed}`
    } 
    else{
        Result.innerHTML("You lose!")
    }
}

function main(){
    changer = setInterval(timeChange, 1000);
}

start.addEventListener("click", ()=>{
    main();
    choosenum();
    sentence.innerHTML = arr[num];
    old_num = num;
})

end.addEventListener("click", ()=>{
    clearInterval(changer);
    check();
    
    setTimeout(() => {
        window.open("index.html", '_parent')
    }, 1500);
})