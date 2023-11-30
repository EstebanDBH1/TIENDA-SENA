// LISTA DE PRODUCTOS

document.addEventListener("DOMContentLoaded", () => {
  getData();
});

const containerProducts = document.querySelector(".all-products");

const getData = async () => {
  try {
    const res = await fetch("http://localhost/api_proyecto/products");
    const data = await res.json();

    paintData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

function paintData(data) {
  data.forEach((product) => {
    containerProducts.innerHTML += `
    <li class="card-product-home">
    <div class="car-product__inner">
      <figure>
        <img src=${product.image_product} alt="" />
      </figure>
    </div>

    <div class="info-product">
      <h2 class="name-product">Nike Dunk Low Retro(M)</h2>
      <p class="price">34.000</p>
    </div>
  </li>
    `;
  });
}
