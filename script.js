var swiper = new Swiper(".card_slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableonInteraction: true,
  },
});
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".checkbox");
  const selectedList = document.querySelector(".selected-list");
  const totalPriceDisplay = document.getElementById("total-price");

  let totalPrice = 0;
  let selectedItemsCount = 0;

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const price = parseInt(this.value);
      if (this.checked) {
        if (selectedItemsCount < 8) {
          totalPrice += price;
          selectedItemsCount++;
          const itemName = this.parentElement.querySelector("h2").textContent;
          const listItem = document.createElement("li");
          listItem.textContent = `${itemName} - $${price}`;
          selectedList.appendChild(listItem);
        } else {
          alert("Maximum 8 items allowed in the custom pack!");
          this.checked = false;
        }
      } else {
        totalPrice -= price;
        selectedItemsCount--;
        const itemName = this.parentElement.querySelector("h2").textContent;
        const itemsToRemove = selectedList.querySelectorAll("li");
        itemsToRemove.forEach((item) => {
          if (item.textContent.includes(itemName)) {
            item.remove();
          }
        });
      }
      totalPriceDisplay.textContent = totalPrice;
    });
  });
});

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  const selectedList = document.querySelector(".selected-list");
  const totalPriceDisplay = document.getElementById("total-price");
  const resetBtn = document.getElementById("reset-btn");

  let totalPrice = 0;
  let selectedItemsCount = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const price = parseInt(this.dataset.price);
      if (selectedItemsCount < 8) {
        totalPrice += price;
        selectedItemsCount++;
        const itemName = this.parentElement.querySelector("h2").textContent;
        const listItem = document.createElement("li");
        listItem.textContent = `${itemName} - $${price}`;
        selectedList.appendChild(listItem);
      } else {
        alert("Maximum 8 items allowed in the custom pack!");
      }
      totalPriceDisplay.textContent = totalPrice;
    });
  });

  resetBtn.addEventListener("click", function () {
    totalPrice = 0;
    selectedItemsCount = 0;
    selectedList.innerHTML = "";
    totalPriceDisplay.textContent = totalPrice;
  });
});
