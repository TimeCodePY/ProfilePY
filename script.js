document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-section");

      // ซ่อนทุก section
      sections.forEach((sec) => (sec.style.display = "none"));

      // เอา active ออกจากทุกปุ่ม
      navLinks.forEach((l) => l.classList.remove("active"));

      // แสดง section ที่เลือก
      document.getElementById(target).style.display = "flex";
      link.classList.add("active");
    });
  });
});
