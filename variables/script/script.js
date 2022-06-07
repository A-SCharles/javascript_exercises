// var mystr ='I am a \"double quotation\" string inside another "\double quoted\" string.';

// console.log(mystr)

// let firstName = 'Abdus-Samad'
// let lastName = 'Charles'
// let age = 18
// let result  = "My name is " .concat(firstName, ",\n Surname is ", lastName ,",\n Age is ", age, " years old");

//  console.log(result);
// //  onsole.log();

// const project = {
//     title: 'Project - 1',
//     imgURL: 'link',
//     description: 'lorem ipsum',
//     technologies: 'html, css',
//     github: 'link',
//     live: 'link'
// }

const project = {
    title: 'Project - 1',
    imgURL: 'link',
    description: 'lorem ipsum',
    technologies: 'html, css',
 links: {
     github: 'link',
     live: 'link'
    }
}

console.log(project)

const numbers = [1,2,3,4,5,6,7]

numbers[4] = 10 

console.log(numbers)

const projects = [
    {
        title: 'Project - 1',
        imgURL: 'https://picsum.photos/200/300?random=1',
        description: 'lorem ipsum',
        technologies: 'html, css',
     links: {
         github: 'link',
         live: 'link'
        }
    },

    {
        title: 'Project - 2',
        imgURL: 'https://picsum.photos/200/300?random=2',
        description: 'lorem ipsum',
        technologies: 'html, css',
     links: {
         github: 'link',
         live: 'link'
        }
    },

    {
        title: 'Project - 3',
        imgURL: 'https://picsum.photos/200/300?random=3',
        description: 'lorem ipsum',
        technologies: 'html, css',
     links: {
         github: 'link',
         live: 'link'
        }
    },

    {
        title: 'Project - 4',
        imgURL: 'https://picsum.photos/200/300?random=4',
        description: 'lorem ipsum',
        technologies: 'html, css',
     links: {
         github: 'link',
         live: 'link'
        }
    },

    {
        title: 'Project - 5',
        imgURL: 'https://picsum.photos/200/300?random=5',
        description: 'lorem ipsum',
        technologies: 'html, css',
     links: {
         github: 'link',
         live: 'link'
        }
    }
]

// console.log(projects)

console.table(projects);

const projectContainer = document.getElementById('projects');

projects.forEach((project) => {
    projectContainer.innerHTML += `
    <h3>${project.title}</h3>
    <img src=${project.imgURL}/>
    `;
});