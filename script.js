//Början som väntar tills DOM är laddad för att börja och sen lite sample text (kommer bli av med senare)
document.addEventListener('DOMContentLoaded', function(){
    const contentColumn = document.querySelector('.content-column')
    for (let i = 0; i < 60; i++){
        const paragraph = document.createElement('p')
        paragraph.textContent = 'You can replace this content with your own. _'
        contentColumn.appendChild(paragraph)
    }

    //Variabler för att ändra färg på länkar när man hovrar över dem
    const toggle = document.querySelector('.toggle');
    const navLinks = document.querySelector('.nav-links')

    //När du klickar på en länk blir denna activerad
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    //denna är gjord för att titta på själva länken och bli av med activa status
    document.querySelectorAll('.nav-links a').forEach(link => {
        toggle.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    //lite kod för responivitet
    window.addEventListener('resize',function(){
        const contentHeight = this.window.innerHeight - 40;
        contentColumn.Style.minHeight = '${contentHeight}px';
    });

    //samma här som förra bara för att ta hänvisa till Navbaren
    window.addEventListener('resize', function(){
        const contentHeight = window.innerHeight - 70
        contentColumn.Style.minHeight = '${contentHeight}px'
        contentColumn.Style.maxHeight = '${contentHeight}px'
    });
});