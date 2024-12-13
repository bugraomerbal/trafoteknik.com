let menuVisible = false;

function toggleWhatsAppMenu() {
  const menu = document.querySelector('.whatsapp-menu');
  const icon = document.querySelector('.whatsapp-icon span');

  if (!menuVisible) {
    menu.style.display = 'block'; // Menüyü göster
    menu.style.animation = 'slideUp 0.3s ease'; // Yukarı doğru animasyon
    icon.textContent = ''; // Yazıyı gizle
    menuVisible = true;
  } else {
    menu.style.animation = 'slideDown 0.3s ease'; // Aşağı doğru animasyon
    setTimeout(() => {
      menu.style.display = 'none'; // Menüyü gizle
    }, 300); // Animasyon süresi
    icon.textContent = 'WhatsApp İletişim'; // Yazıyı geri al
    menuVisible = false;
  }
}

// Mevcut kod
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // Buton dönüşümü
  menu.classList.toggle('active'); // Menü görünürlüğü
});

// Menü Elemanlarına Tıklanınca Kapatma
document.querySelectorAll('.menu a').forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active'); // Menü kapanır
    hamburger.classList.remove('active'); // Hamburger dönüşümü sıfırlanır
  });
});

// Ekran Boyutu Kontrolü (Yeniden Boyutlandırma)
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('active'); // Menü kapatılır
    hamburger.classList.remove('active'); // Hamburger dönüşümü sıfırlanır
  }
});

// CSS Animasyonları Ekleniyor
const style = document.createElement('style');
style.innerHTML = `
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}

.hamburger.active div:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active div:nth-child(2) {
  opacity: 0;
}

.hamburger.active div:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}`;
document.head.appendChild(style);
