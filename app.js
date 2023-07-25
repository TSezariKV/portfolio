const viewMorebutton = document.querySelector('.view-more-button')
const webDevProjects = document.querySelectorAll('.proj')
const socials = document.querySelectorAll('.soc')
const sponsors = document.querySelectorAll('.sponsor')

webDevProjects.forEach(proj => proj.addEventListener('click', function(){
    if(proj.classList.contains('proj1')) {
        window.open(
            'https://tsezarikv.github.io/news-homepage/',
            '_blank'
        )
    } else if(proj.classList.contains('proj2')) {
        window.open(
            'https://tsezarikv.github.io/rock-paper-scissors/',
            '_blank'
        )
    } else if(proj.classList.contains('proj3')) {
        window.open(
            'https://tsezarikv.github.io/calculator/',
            '_blank'
        )
    } else if(proj.classList.contains('proj4')) {
        window.open(
            'https://tsezarikv.github.io/memory-game/',
            '_blank'
        )
    }
}))

sponsors.forEach(sponsor => sponsor.addEventListener('click', function() {
    if(sponsor.classList.contains('bloxmoon')) {
        window.open(
            'https://bloxmoon.com/',
            '_blank'
        )
    } else if(sponsor.classList.contains('rbxrise')) {
        window.open(
            'https://rbxrise.com/home',
            '_blank'
        )
    } else if(sponsor.classList.contains('bloxtrade')) {
        window.open(
            'https://blox.trade/',
            '_blank'
        )
    } else if(sponsor.classList.contains('adurite')) {
        window.open(
            'https://adurite.com/',
            '_blank'
        )
    } else if(sponsor.classList.contains('roplace')) {
        window.open(
            'https://ro.place/',
            '_blank'
        )
    } else if(sponsor.classList.contains('rbxgold')) {
        window.open(
            'https://rbxgold.com/',
            '_blank'
        )
    }
}))

socials.forEach(social => social.addEventListener('click', function() {
    console.log('fuck you')
    if(social.classList.contains('youtube')) {
        window.open(
            'https://www.youtube.com/@cez3x',
            '_blank'
        )
    } else if(social.classList.contains('tiktok')) {
        window.open(
            'https://www.tiktok.com/@k0ll3x',
            '_blank'
        )
    }
}))

viewMorebutton.addEventListener('click', () => {
    location.href = '#experience'
})