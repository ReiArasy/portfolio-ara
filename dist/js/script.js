// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop =document.querySelector('#to-top');

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// click outside hamburger
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Dark toggle 
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
   if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
   } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
   }
});

// Pindah posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }


// Scrool Reveral Animation

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
});

sr.reveal(".hero__image");
sr.reveal(".hero__content", { origin: "bottom" });
sr.reveal(".hero__footer", { origin: "bottom", delay: 1200});

sr.reveal(".service__top", { origin: "bottom" });
sr.reveal(".service__item", { origin: "bottom", interval: 300});

sr.reveal(".recent_portf_top", { origin: "bottom" });
sr.reveal(".recent_protf_tabs", { origin: "bottom", delay: 800});
sr.reveal(".work_card", { origin: "bottom", delay: 1200});

sr.reveal(".port_top", { origin: "top" });
sr.reveal(".port_card", { origin: "left", interval: 300});

sr.reveal(".skill_top", { origin: "top" });
sr.reveal(".skill_card", { origin: "right", interval: 300});

// Submit Form

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const result = document.getElementById('result');
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            access_key: 'c50c8bec-ff14-446d-8612-3624e52162ff',
            ...object
        })
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-green-500");
        } else {
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-red-500");
        }
    })
    .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    })
    .finally(() => {
        this.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 3000);
    });
});