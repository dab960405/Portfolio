 // ========== TEMA CLARO/OSCURO ==========
        const themeToggle = document.querySelector('.theme-toggle');
        const html = document.documentElement;
        const themeIcon = themeToggle.querySelector('span');

        // Cargar tema guardado
        const savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);
        themeIcon.textContent = savedTheme === 'light' ? '🌙' : '☀️';

        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeIcon.textContent = newTheme === 'light' ? '🌙' : '☀️';
        });

        // ========== MENÚ HAMBURGUESA ==========
        const hamburger = document.querySelector('.hamburger');
        const navContent = document.querySelector('.nav-content');
        const navLinks = document.querySelectorAll('.nav-list a');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navContent.classList.toggle('active');
            document.body.style.overflow = navContent.classList.contains('active') ? 'hidden' : '';
        }

        hamburger.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navContent.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        // ========== ANIMACIÓN DEL MENÚ HAMBURGUESA ==========
        hamburger.addEventListener('click', function() {
            const spans = this.querySelectorAll('span');
            spans[0].style.transform = this.classList.contains('active') 
                ? 'rotate(45deg) translate(8px, 8px)' 
                : 'none';
            spans[1].style.opacity = this.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = this.classList.contains('active') 
                ? 'rotate(-45deg) translate(7px, -7px)' 
                : 'none';
        });

        // ========== SCROLL SUAVE ==========
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // ========== HEADER AL SCROLL ==========
        let lastScroll = 0;
        const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.background = html.getAttribute('data-theme') === 'light' 
                    ? 'rgba(255, 255, 255, 0.95)' 
                    : 'rgba(15, 23, 42, 0.95)';
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.background = html.getAttribute('data-theme') === 'light' 
                    ? 'rgba(255, 255, 255, 0.8)' 
                    : 'rgba(15, 23, 42, 0.8)';
                header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.3)';
            }
            
            lastScroll = currentScroll;
        });

        // ========== ANIMACIONES AL SCROLL ==========
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animar barras de progreso
                    if (entry.target.classList.contains('skill-category')) {
                        const progressBars = entry.target.querySelectorAll('.skill-progress');
                        progressBars.forEach(bar => {
                            const width = bar.style.width;
                            bar.style.width = '0%';
                            setTimeout(() => {
                                bar.style.width = width;
                            }, 100);
                        });
                    }
                }
            });
        }, observerOptions);

        // Observar secciones
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });

        // Observar tarjetas de proyecto
        document.querySelectorAll('.project-card, .skill-category').forEach(card => {
            observer.observe(card);
        });

        // ========== FORMULARIO ==========
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulación de envío
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Enviando...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = '¡Mensaje enviado! ✓';
                this.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 2000);
            }, 1500);
        });

        // ========== AJUSTE RESPONSIVE ==========
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navContent.classList.contains('active')) {
                toggleMenu();
            }
        });

        // ========== CURSOR PERSONALIZADO (opcional) ==========
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid var(--color-primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease;
            display: none;
        `;
        document.body.appendChild(cursor);

        if (window.innerWidth > 768) {
            cursor.style.display = 'block';
            
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX - 10 + 'px';
                cursor.style.top = e.clientY - 10 + 'px';
            });

            document.querySelectorAll('a, button').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'scale(1.5)';
                    cursor.style.borderColor = 'var(--color-accent)';
                });
                el.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'scale(1)';
                    cursor.style.borderColor = 'var(--color-primary)';
                });
            });
        }