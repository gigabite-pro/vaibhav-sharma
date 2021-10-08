window.onload = function(){
    const dark = document.getElementById('dark')
    if(localStorage.getItem('toggled') == 'true'){
        dark.classList.add('fa-sun')
        document.body.classList.add('dark')
    }else{
        dark.classList.add('fa-moon')
        document.body.classList.remove('dark')
    }
}

const dark = document.getElementById('dark')
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
})

codimg.addEventListener('click', ()=>{
    if(localStorage.getItem('toggled') == 'false'){
        gsap.to('#codimg', {backgroundColor: 'var(--black)', color: 'var(--white)', duration: 0.3})
        gsap.to('#youtube', {backgroundColor: 'var(--white)', color: 'var(--black)', duration: 0.3})
    }else{
        gsap.to('#codimg', {backgroundColor: 'var(--black)', color: 'var(--white)', duration: 0.3})
        gsap.to('#youtube', {backgroundColor: 'var(--white)', color: 'var(--black)', duration: 0.3}) 
    }
})

codimgProjects = {
    1 : {
        name: 'Local Party',
        image: 'https://socialify.git.ci/sheldor1510/local-party/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark',
        desc: "A website where you can create rooms and chat while watching local video files synchronized with your friends.",
        ghLink: 'https://github.com/sheldor1510/local-party',
        link: 'https://localparty.netlify.app/'
    },
    2 : {
        name: "Encryptid '21",
        image: 'https://socialify.git.ci/techsyndicate/encryptid-21/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark',
        desc: "The platform for Encryptid 2021, built with Express. Encryptid 2021 featured a revolutionary new format that was similar to stock trading.",
        ghLink: 'https://github.com/techsyndicate/encryptid-21',
        link: 'https://encryptid.us/'
    },
    3 : {
        name: 'Cybercongress Platform',
        image: 'https://socialify.git.ci/gigabite-pro/cybercongress-platform/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark',
        desc: "The official paltform of Cybercongress at Amity-46. It has some interesting sections where you can see the latest instagram posts(coming from the Official Instagram API), read our newsletter or submit a report. We are always here to help you.",
        ghLink: 'https://github.com/gigabite-pro/cybercongress-platform',
        link: 'https://cybercongressais46.herokuapp.com/'
    },
    4 : {
        name: 'Impro',
        image: 'https://socialify.git.ci/gigabite-pro/impro/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark',
        desc: "Impro creates custom profiles for artists/creators to showcase their work. They can add their project's images and write their bio. There is also and option to add a profile pic. The platform also supports updation of data.",
        ghLink: 'https://github.com/gigabite-pro/impro',
        link: 'https://impro.gq/'
    },
    5 : {
        name: 'Muvi API',
        image: 'https://socialify.git.ci/cotnw/muvi/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark',
        desc: "A chrome extension to download movies directly from a Google search.",
        ghLink: 'https://github.com/cotnw/muvi-api',
        link: 'https://github.com/cotnw/muvi'
    },
    6 : {
        name: 'Covizab',
        image: 'https://socialify.git.ci/gigabite-pro/covizab/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark',
        desc: 'A single-page website redesigning and redefining the vaccine for Covid-19.',
        ghLink: 'https://github.com/gigabite-pro/covizab',
        link: ''
    },
    7 : {
        name: 'Baatcheet',
        image: 'https://socialify.git.ci/gigabite-pro/baatcheet/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark',
        desc: "Baatcheet creates appointments for people with bad mental health(Users) with people who want to listen to them (Therapists) along with a google meet link and the addition of an event to the user's and the therapist's google calendar. It also has a chillzone controlled by voice commands which suggests movies, shows quotes and memes.",
        ghLink: 'https://github.com/gigabite-pro/baatcheet',
        link: 'https://baattcheet.herokuapp.com/'
    },
    8 : {
        name: 'Bharat Mystery App',
        image: 'https://socialify.git.ci/gigabite-pro/Bharat-Mystery-Mobile/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark',
        desc: "Bharat Mystery, which is a VR (Virtual Reality) based mobile application, accompanied by a physical board game that enables the user to explore the various cultural and historical tourist destinations of India. It also encompasses various economic aspects through the promotion of local souvenir shops.",
        ghLink: 'https://github.com/gigabite-pro/Bharat-Mystery-Mobile',
        link: 'https://drive.google.com/drive/folders/1lQZ4eqWbVpkcA5KavzW4JXMY4xeA93hi?usp=sharing'
    },
    9 : {
        name: 'Eduport',
        image: 'https://socialify.git.ci/gigabite-pro/eduport/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark',
        desc: 'A platform made for Amihacks, a hackathon organised by Amity University, Noida. It is a LMS platform for small tuitions and coaching centres to maintain records of students such as attendance, marks or to upload assignments, tests.',
        ghLink: 'https://github.com/gigabite-pro/eduport',
        link: 'https://eduport-web.herokuapp.com/'
    },
    10 : {
        name: 'Movie Logger',
        image: 'https://socialify.git.ci/gigabite-pro/movie-logger/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark',
        desc: "Project made in Summer Horizon tech bootcamp organized at AISG-46 where I taught web development to the students of junior school.",
        ghLink: 'https://github.com/gigabite-pro/movie-logger',
        link: 'https://movie-logger.netlify.app/'
    },
    11 : {
        name: 'Tedx@AISG46 2020',
        image: 'https://socialify.git.ci/gigabite-pro/tedx-2020/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark',
        desc: "The official website for TedxYouth@AISG46 2020.",
        ghLink: 'https://github.com/gigabite-pro/tedx-2020',
        link: 'https://www.tedx-aisg.gq/'
    },

}

projects = document.getElementById('projects');

function showCodimg(){
    for(let i=1; i <= 11; i++){
        projects.innerHTML += `<div class="card">
        <div class="proj-image" style="background-image: url('${codimgProjects[i].image}'); background-position: center; background-size: cover;">
        </div>
        <div class="proj-name">
        ${codimgProjects[i].name}
        </div>
        <div class="desc">
        ${codimgProjects[i].desc}
        </div>
        <div class="links">
            <a href=${codimgProjects[i].ghLink} target="_blank">Project</a>
            <a href=${codimgProjects[i].link} target="_blank">Live</a>
        </div>
    </div>`
    }

    projects.style.display = 'flex';
    animations()
}

showCodimg()
