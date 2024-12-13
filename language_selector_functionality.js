// Language Selector Functionality
const langButtons = document.querySelectorAll('.lang-btn');
const updateLanguage = (lang) => {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach((element) => {
        const key = element.getAttribute('data-lang-key');
        const keys = key.split('.');
        let translation = translations[lang];

        keys.forEach((k) => {
            translation = translation ? translation[k] : null;
        });

        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });
    localStorage.setItem('selectedLang', lang);
};

langButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        updateLanguage(lang);
    });
});

// On page load, set the default or previously selected language
const defaultLang = localStorage.getItem('selectedLang') || 'tr';
updateLanguage(defaultLang);

const elements = document.querySelectorAll('[data-lang-key]');
