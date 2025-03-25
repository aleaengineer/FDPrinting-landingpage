// Animasi saat scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animasi elemen saat muncul di viewport
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-fadeInUp');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-fadeInUp');
            }
        });
    };
    
    // Jalankan saat load dan scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Tombol pesan sekarang
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const templateCode = this.getAttribute('data-template');
            const whatsappMessage = `Halo FD Printing, saya ingin memesan template undangan dengan kode ${templateCode}. Bisa dibantu lebih lanjut?`;
            const whatsappUrl = `https://wa.me/6281573236181?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');
        });
    });
    
    // Form kontak
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            const whatsappMessage = `Halo FD Printing,\n\nSaya ${name} ingin bertanya tentang undangan digital.\n\nEmail: ${email}\nNo. HP: ${phone}\nPesan: ${message}\n\nMohon info lebih lanjut. Terima kasih.`;
            const whatsappUrl = `https://wa.me/6281573236181?text=${encodeURIComponent(whatsappMessage)}`;
            
            window.open(whatsappUrl, '_blank');
            contactForm.reset();
            
            alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk melanjutkan konsultasi.');
        });
    }
    
    // Smooth scroll untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});