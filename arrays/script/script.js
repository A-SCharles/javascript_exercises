    // Projects Array
const projects = [{
    title: 'Attempt 1',
    description: 'lorem ipsum dolor sit amet',
    imgURL: 'https://picsum.photos/200/300?random=1',
    github: 'link',
    live: 'link'
}]

const projectContainer = document.getElementById('project')

projects.forEach((project) => {
    projectContainer.innerHTML += `
    <div class="card w-50 mx-50">
    <h3>${project.title}</h3>
    <img src=${project.imgURL}/>
    <p>${project.description}</p>
    <button class="btn">${project.github}</button>
    <button class="btn">${project.live}</button>
    </div>
    `;
});