//ui.js
import { formatDate } from "./utils/date.js"; 

import { getItems, deleteItemById } from "./localStorage.js";

const itemList = document.getElementById("item-list");
const form = document.getElementById("item-form");

export const renderItem = (item) => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4 fade-in";
  col.setAttribute("data-id", item.id);

  col.innerHTML = `
    <div class="card h-100 bg-secondary text-white shadow position-relative">
      <div class="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 class="card-title">
            ${item.title} 
            <span class="badge ${item.status === "İzlendi" ? "bg-success" : "bg-warning"}">${item.status}</span>
          </h5>
          <p class="card-text">${item.genre} | ${formatDate(item.date)}</p> <!-- Tarih burada formatlanıyor -->
          ${item.note ? `<small class="d-block">${item.note}</small>` : ""}
          <div style="display: flex; align-items: center;">
            <span>${item.rating}</span>
            <span style="margin: 0 5px;">/</span>
            <div class="rating" style="display: inline; color: gold; font-size: 20px;"></div>
          </div>
        </div>
        <div class="mt-3">
          <button class="btn btn-warning btn-sm me-2 edit-btn">Düzenle</button>
          <button class="btn btn-danger btn-sm delete-btn">Sil</button>
        </div>
      </div>
      <!-- Sağ alt köşedeki afiş -->
      <img src="${item.posterURL}" class="img-thumbnail position-absolute w-25" style="bottom: 10px; right: 10px;" alt="${item.title} Afişi">
    </div>
  `;

  const ratingContainer = col.querySelector(".rating");
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("i");
    star.className = i <= item.rating ? "bi bi-star-fill text-warning" : "bi bi-star text-secondary";
    ratingContainer.appendChild(star);
  }

  col.querySelector(".delete-btn").addEventListener("click", () => {
    deleteItemById(item.id);
    renderList();
  });

  col.querySelector(".edit-btn").addEventListener("click", () => {
    document.getElementById("title").value = item.title;
    document.getElementById("poster-url").value = item.posterURL;
    document.getElementById("genre").value = item.genre;
    document.getElementById("date").value = item.date;
    document.getElementById("status").value = item.status;
    document.getElementById("note").value = item.note;
    document.getElementById("rating").value = item.rating;
    form.setAttribute("data-edit-id", item.id);
    form.querySelector("button").textContent = "Güncelle";
  });

  itemList.appendChild(col);
};

export const renderList = () => {
  itemList.innerHTML = ""; 
  const items = getItems(); 
  items.forEach((item) => renderItem(item));
};

export const filterList = (searchTerm) => {  //arama terimini alarak filtreleme yapar
  const items = getItems();  //tüm öğeleri içeren bir diziye döndürür
  const filtered = items.filter(item => //belirli bir şarta göre süzerek yeni bir dizi oluşturur
    item.title.toLowerCase().includes(searchTerm.toLowerCase())   //toLowerCase=büyük küçük harf duyarlılığını kaldırır. includes(searchTerm) =eğer başlık içinde arama terimi geçiyorsa
  );
  itemList.innerHTML = "";  //itemlist adlı liste boşaltılır, böylecce eski öğeler kaldırılır
  filtered.forEach(item => renderItem(item));
};