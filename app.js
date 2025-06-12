const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const items= document.querySelectorAll(".item")
const dots= document.querySelectorAll(".dot")
const numberIndicator= document.querySelector(".numbers")
const list = document.querySelector(".list")
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');




let active= 0;
const total = items.length

let timer;



function update(direction){
  document.querySelector('.item.active').classList.remove('active')
  document.querySelector('.dot.active').classList.remove('active')


if(direction>0){

    active = active+1

if(active ===total){
    active= 0
}

}

else if(direction<0){
    active= active -1

    if(active<0){
        active = total -1
    }
}




items[active].classList.add('active')

dots[active].classList.add('active')


numberIndicator.textContent= String(active +1).padStart(2,'0')

}



clearInterval(timer)
timer= setInterval(()=>{
    update(1)
},6000);





prevButton.addEventListener('click', function(){
    update(-1)
})

nextButton.addEventListener('click', function(){
    update(1)
})






menu.addEventListener("click", function() {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

close.addEventListener("click", function() {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

const logo= document.querySelector(".logo")

const pessoas= [10,20,30,40,50] 

const dobro = pessoas.map((item)=>{
  const newNumber = item * 2
  console.log(newNumber)
  return newNumber
  
  
})






// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

