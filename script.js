// Set dynamic current year in footer
document.getElementById('year').textContent = new Date().getFullYear()
// Mobile drawer menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon')
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    }
})
// Close mobile drawer when clicking a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
})
// Portfolio Category Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card')
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update button active state
        filterBtns.forEach(b => {
            b.classList.remove('active', 'bg-brand-500', 'text-white', 'shadow-lg', 'shadow-brand-500/25');
            b.classList.add('glass-card', 'text-slate-300');
        })
        btn.classList.add('active', 'bg-brand-500', 'text-white', 'shadow-lg', 'shadow-brand-500/25');
        btn.classList.remove('glass-card', 'text-slate-300')
        const filterValue = btn.getAttribute('data-filter')
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
})
// Contact Form Submission Handler
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const message = [
        '*Nova mensagem pelo portfólio*',
        `*Nome:* ${formData.get('name')}`,
        `*Contato:* ${formData.get('replyTo')}`,
        `*Assunto:* ${formData.get('subject') || 'Não informado'}`,
        `*Mensagem:* ${formData.get('message')}`
    ].join('\n');

    const whatsappUrl = `https://wa.me/5512991754371?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});