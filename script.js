
// Mobile Navigation
const navIcon = document.getElementById('icon');
const close = document.getElementById('close');
const navContents = document.getElementById('mobile-nav-content')
const mobileLinks = document.querySelectorAll('#mobile-nav-content a')
navIcon.addEventListener('click', () => {
    navContents.style.display = 'flex';
    setTimeout(navContentsShow, 500)
})

close.addEventListener('click', () => {
    navContents.style.display = 'none';
    navContents.style.transform = 'translateX(-50%)';
    navContents.style.opacity = '0';
    for(let i=0; i<mobileLinks.length; i++){
        mobileLinks[i].style.opacity = '0';
        mobileLinks[i].style.transform = 'translateX(-50%)';
    }
})

function navContentsShow () {
    navContents.style.transform = 'translate(0)';
    navContents.style.opacity = '1';

    for(let i=0; i<mobileLinks.length; i++){
        mobileLinks[i].style.opacity = '1';
        mobileLinks[i].style.transform = 'translate(0)';
    }
}

// Showcase