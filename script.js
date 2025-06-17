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


const produtos = {
  promocao: [
    { titulo: "Smartphone X12", descricao: "Câmera tripla, 128 GB", imagem: "https://via.placeholder.com/300x180/007bff/fff?text=Smartphone", preco: 1999 },
    { titulo: "Fone Bluetooth Pro", descricao: "Cancelamento de ruído", imagem: "https://via.placeholder.com/300x180/222/eee?text=Fone", preco: 299 },
    { titulo: "Tablet Max", descricao: "Tela 10”, ideal para leitura", imagem: "https://via.placeholder.com/300x180/444/fff?text=Tablet+Max", preco: 899 },
  ],
  lancamento: [
    { titulo: "Notebook Ultra Fino", descricao: "Tela 4K, SSD 1 TB", imagem: "https://via.placeholder.com/300x180/444/eee?text=Notebook", preco: 4999 },
    { titulo: "Smartwatch FitX", descricao: "Monitor cardíaco e GPS", imagem: "https://via.placeholder.com/300x180/555/fff?text=Smartwatch", preco: 599 },
    { titulo: "Óculos VR 360", descricao: "Imersão total em realidade virtual", imagem: "https://via.placeholder.com/300x180/666/eee?text=VR+360", preco: 1299 },
  ],
  maisvendidos: [
    { titulo: "Cadeira Gamer Turbo", descricao: "Conforto absoluto", imagem: "https://via.placeholder.com/300x180/000/fff?text=Cadeira+Gamer", preco: 899 },
    { titulo: "Teclado Mecânico RGB", descricao: "Switches silenciosos", imagem: "https://via.placeholder.com/300x180/111/eee?text=Teclado", preco: 349 },
    { titulo: "Mouse Gamer Pro", descricao: "Alta precisão 16000 DPI", imagem: "https://via.placeholder.com/300x180/222/fff?text=Mouse+Pro", preco: 249 },
  ]
};

const productList = document.getElementById("productList");
const filterButtons = document.querySelectorAll(".filters button");

function renderCards(categoria) {
  productList.innerHTML = produtos[categoria]
    .map(p => `
      <div class="card">
        <img src="${p.imagem}" alt="${p.titulo}">
        <div class="card-body">
          <h3>${p.titulo}</h3>
          <p>${p.descricao}</p>
          <div class="price">R$ ${p.preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</div>
          <div class="card-buttons">
            <button class="buy-btn">Comprar agora</button>
            <button class="cart-btn">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    `).join('');
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(btn.dataset.cat);
  });
});

function scrollCarousel(direction) {
  const scrollAmount = productList.clientWidth * 0.8;
  productList.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// Inicia com promoção
renderCards("promocao");
