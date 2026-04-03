// função auxiliar para retornar true quando a tela for menor que 980px

function isMobile() {
    return window.innerWidth <= 980;
};

// ============
// MENU LATERAL
// ============

// trazendo o menu lateral
const sidebar = document.getElementById("sidebar");

//Selecionando a área principal do conteúdo
const content = document.getElementById("content");

//Seleciona o botão que abre para o menu lateral
const menuTogglebtn = document.getElementById("menuToggleBtn");

//Seleciona o botão de fechar que abre para o mobile
const closeSidebarBtn = document.getElementById("closeSidebarBtn");

//traz oescuro de fundo quando há a abertura do menu
const overlay = document.getElementById("overlay");

// ========================================
// FUNÇÕES DE FUNCIONAMENTO DO MENU MOBILE
// ========================================

function openSidebarMobile(){

        //Adicionar a classe que recebe o menu
        sidebar.classList.add("open");
        
        //Traz o overlay (fundo escuro)
        overlay.classList.add("show")

        //impede a rolagm enquanto o menu está aberto
        document.body.classList.add("no-scroll")
};


function closeSidebarMobile() {
      //Remover a classe que rmostra o menu
        sidebar.classList.remove("open");
        
        //Esconder o overlay (fundo escuro)
        overlay.classList.remove("show")

        //Libera a rolagm da página
        document.body.classList.remove("no-scroll")
};

// ========================================
// FUNÇÕES DE FUNCIONAMENTO DO MENU DESKTOP
// ========================================

function toggleSidebarDesktop() {

        //O menu é recolhido ou expendido
        sidebar.classList.toggle("collapsed");

        //Ajusta o conteúdo do site principal
        content.classList.toggle("expanded");
};

// ========================================
// CONSTRUÇÃO DA LÓGICA DO ABRIR E FECHAR
// ========================================

function handMenuToggle() {
    if (isMobile()) {
        if(sidebar.classList.contains("open")){
            closeSidebarMobile();
        }else {
            openSidebarMobile();
        }
    } else {
        toggleSidebarDesktop();
    };
};

// ===============
// EVENTOS DO MENU
// ===============
//Adicionando o evento para abertura do menu
menuTogglebtn.addEventListener("click", handMenuToggle);

//Adicionando o evento para fechamento do menu via botão
closeSidebarBtn.addEventListener("click", closeSidebarMobile);

//Adicionando o evento de fechamento clicando no overlay
overlay.addEventListener("click", closeSidebarMobile)

// =====================
// MODAL
// =====================

//Botão principal no topo que abre o modal geral
const openGeneralModalBtn = document.getElementById ("openGeneralModalBtn");

//Estrutura principal do modal
const modal = document.getElementById ("modal");

//Elementos internos do modal
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

//Botões para fechamneto do modal
const closeModalBtn = document.getElementById("closeModalBtn");
const closeModalFooterBtn = document.getElementById("closeModalFooterBtn");



// =========================
// FUNÇÃO PRINCIPAL DO MODAL
// =========================

function openModal(title, text) {
    modalTitle.textContent = title;
    modalText.textContent = text;

    //Exibe o modal
    modal.classList.add("show");

    //Trava a escrolagem da página
    document.body.classList.add("no-scroll");
};

function closeModal() {

    //Fecha o modal
    modal.classList.remove("show");

    //Devolve a escrolagem da página
    document.body.classList.remove("no-scroll")
};

// ==================
// EVENTOS DO MODAL
// ==================

openGeneralModalBtn.addEventListener("click", function() {
    openModal(
        "Projeto de revisão",
        "Esse projeto foi pensado para revisão de JavaScript com foco em interações comuns do front-end: busca, modal, carrosel, menu lateral e Cards"
    );
});

closeModalBtn.addEventListener("click", closeModal);

closeModalFooterBtn.addEventListener("click", closeModal);

////==============================
//// MODAL DOS CARDS
///===============================
 
const openCardModalButtons = document.querySelectorAll(".open-card-modal");
 
openCardModalButtons.forEach(function(button){
           button.addEventListener("click", function() {
            const card = button.closest(".card");
            const title = card.querySelector("h4").textContent;
            const text = card.querySelector("p").textContent;
    
            openModal(title, text);
 
        });
});

//=================
// BARRA DE BUSCA
//==================

const searchInput = document.getElementById("searchInput");
 
const card = document.querySelectorAll(".card");
 
const emptyState= document.getElementById("emptyState");
 
searchInput.addEventListener("input", function(){
 
    const term = searchInput.value.toLowerCase().trim();
      let visibleCard = 0;
 
      card.forEach(function(cards){
           const title = cards.querySelector("h4").textContent.toLowerCase();
     
      if(title.includes(term)){
        cards.classList.remove("hidden-card");
        visibleCard++;
      } else {
        cards.classList.add("hidden-card");
      }
     
        });
 
        if(visibleCard===0){
            emptyState.classList.add("show");
        }else{
            emptyState.classList.remove("show");
        }
});


//===================
//CARROSEL DE SLIDES
//===================
 
 
const carouselImage = document.getElementById("carouselImage");
const carouselTitle = document.getElementById("carouselTitle");
const carouselText = document.getElementById("carouselText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
 
const slides =[
    {
        image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
        title:"revisão prática com JavaScripit",
        text:"Um exemplo simples para trabalhar com eventos, funções, arrays e manipulação de DOM"
    },
    {
        image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
        title:"CÓDIGO QUE PODE SER REAPROVEITADO",
        text:"A estrura visual "
    },
     {
        image:"https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1400&q=80",
        title:"CONSTRUÇÃO POR ETAPAS",
        text:"PODEMOS DESENVOLVER CADA RECURSO SEPARADAMENTE E DEPOIS INTEGRAR TUDO NO MESMO OBJETO"
    }
];
 
let currentSlide = 0;
 
function renderSlide(){
 const slide = slides[currentSlide];
 
 carouselImage.src = slide.image;
 
 
 carouselImage.alt=slide.title;
  carouselTitle.textContent=slide.title;
  carouselText.textContent=slide.text;
};
 
nextBtn.addEventListener("click", function(){
      currentSlide++;
 
      if(currentSlide>=slides.length){
        currentSlide=0;
      }
      renderSlide();
});
 
 
prevBtn.addEventListener("click", function(){
    currentSlide--;
 
    if(currentSlide<0){
        currentSlide=slides.length -1;
    };
    renderSlide();
});


//======================
//FECHA COM A TECLA ESC
//=======================

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
        if(isMobile() && sidebar.classList.contains("open")) {
            closeSidebarMobile();
        };
    };
});

renderSlide();

//=========
//ACORDEON
//=========

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(function(item) {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", function() {
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
            }
        });
        item.classList.toggle("active");
    });
});