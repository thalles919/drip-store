import React from "react";

const produtos = [
  {
    id: 1,
    titulo: "Novo drop Supreme",
    desconto: "30% OFF",
    imagem: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/collection-1.png",
  },
  {
    id: 2,
    titulo: "Coleção Adidas",
    desconto: "30% OFF",
    imagem: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/collection-2.png",
  },
  {
    id: 3,
    titulo: "Novo Beats Bass",
    desconto: "30% OFF",
    imagem: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/collection-3.png",
  },
];

const Carroseul = () => {
  return ( 
     <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-1.jpeg" className="d-block w-screen h-[400px]" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
         <button className="bg-amber-400 border-8 w-[100px] h-[40px]"><a className="no-underline" href="https://cosette.cloud/">veja mais</a></button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-2.jpeg" className="d-block w-screen h-[400px]" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-3.jpeg" className="d-block w-screen h-[400px]" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-4.jpeg" className="d-block w-screen h-[400px]" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-5.jpeg" className="d-block w-screen h-[400px]" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-6.jpeg" className="d-block w-screen h-[400px]" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-7.jpeg" className="d-block w-screen h-[400px]" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/home-slide-8.jpeg" className="d-block w-screen h-[400px]" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
   );
}
 
export default Carroseul
;

//export default BootstrapCarousel;
