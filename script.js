if(window.innerWidth < 800){
    const dark = document.getElementById('darkp')
    if(localStorage.getItem('toggled') == 'true'){
        dark.classList.add('fa-sun')
        document.body.classList.add('dark')
    }else{
        dark.classList.add('fa-moon')
        document.body.classList.remove('dark')
    }

    const mute = document.getElementById('mutep')
    if(localStorage.getItem('musicToggle') == 'true'){
        mute.classList.add('fa-volume-mute')
    }else{
        mute.classList.add('fa-volume-up')
    }

}else{
    const dark = document.getElementById('dark')
    if(localStorage.getItem('toggled') == 'true'){
        dark.classList.add('fa-sun')
        document.body.classList.add('dark')
    }else{
        dark.classList.add('fa-moon')
        document.body.classList.remove('dark')
    }

    const mute = document.getElementById('mute')
    if(localStorage.getItem('musicToggle') == 'true'){
        mute.classList.add('fa-volume-mute')
    }else{
        mute.classList.add('fa-volume-up')
    }

}

setTimeout(() => {
    if(localStorage.getItem('musicToggle') == 'true'){
        const song = document.getElementById('music');
        song.volume = 0.1;
        song.play()   
    }
}, 3000);

document.getElementById('phone-nav-btn').addEventListener('click', ()=>{
    var timeline3 = gsap.timeline()
    timeline3.to('#phone-nav', {opacity: 1, scale: 1, left: '0%', top: '0%', duration: 0.5})
    .from('.animp1', {opacity: 0, y: '-50', stagger: .1, duration: 0.3})
})

document.getElementById('cross').addEventListener('click', ()=>{
    var timeline3 = gsap.timeline()
    timeline3.to('.animp1', {opacity: 0, y: '-50', stagger: .1, duration: 0.3})
    .to('#phone-nav', {opacity: 0, scale: 0, left: '100%', top: '-100%', duration: 0.5})
    timeline3.set('.animp1', {opacity: 1, y: '0'})
})



if(window.innerWidth < 800){
    const song = document.getElementById('music');
    const mute = document.getElementById('mutep')
    mute.addEventListener('click', ()=>{
        if(song.paused){
            song.volume = 0.1;
            song.play()
            mute.classList.remove('fa-volume-up')
            mute.classList.add('fa-volume-mute')
            localStorage.setItem('musicToggle', true)
        }else{
            song.pause()
            mute.classList.remove('fa-volume-mute')
            mute.classList.add('fa-volume-up')
            localStorage.setItem('musicToggle', false)
        }
    })
}else{
    const song = document.getElementById('music');
    const mute = document.getElementById('mute')
    mute.addEventListener('click', ()=>{
        if(song.paused){
            song.volume = 0.1;
            song.play()
            mute.classList.remove('fa-volume-up')
            mute.classList.add('fa-volume-mute')
            localStorage.setItem('musicToggle', true)
        }else{
            song.pause()
            mute.classList.remove('fa-volume-mute')
            mute.classList.add('fa-volume-up')
            localStorage.setItem('musicToggle', false)
        }
    })
}


if(window.innerWidth < 786){
    const dark = document.getElementById('darkp')
    var toggled = false
    dark.addEventListener('click', ()=>{
        if(toggled){
            gsap.to('body', {'--black': '#2D2C2C', duration: 0.5})
            gsap.to('body', {'--white': 'white', duration: 0.5})
            localStorage.setItem('toggled', false)
            dark.classList.remove('fa-sun')
            dark.classList.add('fa-moon')
            toggled = false
        }else{
            gsap.to('body', {'--black': 'white', duration: 0.5})
            gsap.to('body', {'--white': '#2D2C2C', duration: 0.5})
            localStorage.setItem('toggled', true)
            dark.classList.remove('fa-moon')
            dark.classList.add('fa-sun')
            toggled = true
        }
    });
}else{
    const dark = document.getElementById('dark')
    var toggled = true
    dark.addEventListener('click', ()=>{
        if(toggled){
            gsap.to('body', {'--black': '#2D2C2C', duration: 0.5})
            gsap.to('body', {'--white': 'white', duration: 0.5})
            localStorage.setItem('toggled', false)
            dark.classList.remove('fa-sun')
            dark.classList.add('fa-moon')
            toggled = false
        }else{
            gsap.to('body', {'--black': 'white', duration: 0.5})
            gsap.to('body', {'--white': '#2D2C2C', duration: 0.5})
            localStorage.setItem('toggled', true)
            dark.classList.remove('fa-moon')
            dark.classList.add('fa-sun')
            toggled = true
        }
    });
}



projects = document.getElementById('projects');

function showCodimg(){
    projects.innerHTML = ``
    for(let i=1; i <= 15; i++){
        projects.innerHTML += `<div class="card">
        <div class="proj-image" style="background-image: url('${codimgProjects[i].image}'); background-position: center; background-size: cover; background-repeat: no-repeat;">
        </div>
        <div class="proj-name">
        ${codimgProjects[i].name}
        </div>
        <div class="desc">
        ${codimgProjects[i].desc}
        </div>
        <div class="links">
            <a href=${codimgProjects[i].ghLink} target="_blank">project</a>
            <a href=${codimgProjects[i].link} target="_blank">live</a>
        </div>
    </div>`
    }
    animations()
}

function showEditing(){
    projects.innerHTML = ``
    for(let i=1; i <= 10; i++){
        projects.innerHTML += `<div class="card bordered">
        <div class="proj-image" style="background-image: url('${youtubeProjects[i].image}'); background-position: center; background-size: cover; background-repeat: no-repeat;">
        </div>
        <div class="proj-name">
        ${youtubeProjects[i].name}
        </div>
        <div class="desc">
        ${youtubeProjects[i].desc}
        </div>
        <div class="links">
            <a href=${youtubeProjects[i].link} target="_blank">youtube</a>
        </div>
    </div>`
    }
    animations()
}

function listen(){
    const codimg = document.getElementById('codimg')
    const youtube = document.getElementById('youtube')
    var tabToggled = false

    youtube.addEventListener('click', ()=>{
        if(localStorage.getItem('toggled') == 'false'){
            gsap.to('#codimg', {backgroundColor: 'var(--white)', color: 'var(--black)', duration: 0.3})
            gsap.to('#youtube', {backgroundColor: 'var(--black)', color: 'var(--white)', duration: 0.3})
        }else{
            gsap.to('#codimg', {backgroundColor: 'var(--white)', color: 'var(--black)', duration: 0.3})
            gsap.to('#youtube', {backgroundColor: 'var(--black)', color: 'var(--white)', duration: 0.3}) 
        }
        showEditing()
    })

    codimg.addEventListener('click', ()=>{
        if(localStorage.getItem('toggled') == 'false'){
            gsap.to('#codimg', {backgroundColor: 'var(--black)', color: 'var(--white)', duration: 0.3})
            gsap.to('#youtube', {backgroundColor: 'var(--white)', color: 'var(--black)', duration: 0.3})
        }else{
            gsap.to('#codimg', {backgroundColor: 'var(--black)', color: 'var(--white)', duration: 0.3})
            gsap.to('#youtube', {backgroundColor: 'var(--white)', color: 'var(--black)', duration: 0.3}) 
        }
        showCodimg()
    })

}
