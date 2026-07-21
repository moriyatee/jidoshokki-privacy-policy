document.addEventListener('DOMContentLoaded', function() {
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        return filename || 'index.html';
    }

    function getCurrentLanguage() {
        const currentPage = getCurrentPage();
        if (currentPage.includes('-en') || currentPage === 'privacy-policy.html') {
            return 'en';
        }
        return 'ja';
    }

    function switchLanguage(targetLang) {
        const currentPage = getCurrentPage();
        let targetPage;

        if (targetLang === 'en') {
            if (currentPage === 'index.html' || currentPage === '') {
                targetPage = 'index-en.html';
            } else if (currentPage === 'terms.html') {
                targetPage = 'terms-en.html';
            } else if (currentPage === 'support.html') {
                targetPage = 'support-en.html';
            } else if (currentPage === 'privacy-policy-ja.html') {
                targetPage = 'privacy-policy.html';
            } else {
                targetPage = currentPage;
            }
        } else {
            if (currentPage === 'index-en.html') {
                targetPage = 'index.html';
            } else if (currentPage === 'terms-en.html') {
                targetPage = 'terms.html';
            } else if (currentPage === 'support-en.html') {
                targetPage = 'support.html';
            } else if (currentPage === 'privacy-policy.html') {
                targetPage = 'privacy-policy-ja.html';
            } else {
                targetPage = currentPage;
            }
        }

        if (targetPage && targetPage !== currentPage) {
            window.location.href = targetPage;
        }
    }

    function initLanguageToggle() {
        const jaButton = document.getElementById('lang-ja');
        const enButton = document.getElementById('lang-en');

        if (!jaButton || !enButton) return;

        const currentLang = getCurrentLanguage();
        if (currentLang === 'ja') {
            jaButton.classList.add('active');
            enButton.classList.remove('active');
        } else {
            enButton.classList.add('active');
            jaButton.classList.remove('active');
        }

        jaButton.addEventListener('click', function(e) {
            e.preventDefault();
            switchLanguage('ja');
        });

        enButton.addEventListener('click', function(e) {
            e.preventDefault();
            switchLanguage('en');
        });
    }

    function initNavigation() {
        const currentPage = getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && (href === currentPage || href === './' + currentPage)) {
                link.classList.add('active');
            }
        });
    }

    function initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    initLanguageToggle();
    initNavigation();
    initSmoothScrolling();

    document.addEventListener('keydown', function(e) {
        if (e.altKey && e.key === 'j') {
            e.preventDefault();
            switchLanguage('ja');
        }
        if (e.altKey && e.key === 'e') {
            e.preventDefault();
            switchLanguage('en');
        }
    });
});
