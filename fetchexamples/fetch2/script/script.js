// Create an image
let dadAndMe = document.createElement('img');
//Place this element on the body
document.body.appendChild(dadAndMe);
/*
Re-write example 1 by applying
async and await
*/
// Create a function
async function display() {
    let res = await fetch('../image/photo-1453728013993-6d66e9c9123a.jpg');
    // if(res.status == 200) {
        let image = await res.blob();
        dadAndMe.src = URL.createObjectURL(image);        
    // }else{
        // console.error('Was not able to access your resource');
    }
// }

// Calling a function
display().
catch(e => {
    console.error(e.message);
});