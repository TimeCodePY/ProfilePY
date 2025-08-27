// ===== Navigation =====
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // remove active class
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");

    // show section
    const sectionId = link.getAttribute("data-section");
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = "flex";
      } else {
        section.style.display = "none";
      }
    });
  });
});

// ===== Modal =====
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");

const closeBtn = document.querySelector(".close");

const cards = document.querySelectorAll(".product-card");

// Create iframe dynamically for YouTube
let modalIframe = null;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";

    const title = card.getAttribute("data-title");
    const desc = card.getAttribute("data-description");
    const img = card.getAttribute("data-img");
    const link = card.getAttribute("data-link");
    const video = card.getAttribute("data-video"); // ✅ new attribute

    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalLink.href = link;

    // ถ้ามี video → แสดง iframe
    if (video) {
      modalImg.style.display = "none";

      // ลบ iframe เดิมก่อน (กันซ้อน)
      if (modalIframe) {
        modalIframe.remove();
      }

      modalIframe = document.createElement("iframe");
      modalIframe.width = "100%";
      modalIframe.height = "315";
      modalIframe.src = video;
      modalIframe.title = "YouTube video player";
      modalIframe.frameBorder = "0";
      modalIframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      modalIframe.allowFullscreen = true;

      modalImg.insertAdjacentElement("afterend", modalIframe);
    } else {
      // แสดงรูปปกติ
      if (modalIframe) {
        modalIframe.remove();
        modalIframe = null;
      }
      modalImg.style.display = "block";
      modalImg.src = img;
    }
  });
});

// ===== Close Modal =====
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  if (modalIframe) {
    modalIframe.remove(); // ปิด video ด้วย
    modalIframe = null;
  }
});

// Click outside modal-content to close
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    if (modalIframe) {
      modalIframe.remove();
      modalIframe = null;
    }
  }
});
