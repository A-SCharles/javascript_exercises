// Create an image tag
let photo = document.createElement('img');
document.body.appendChild(photo);
// Call the fetch function

fetch('../image/photo-1453728013993-6d66e9c9123a.jpg').
then(res => {
    return res.blob();
}).
then(image => {
    // We have to convert it to the original format
    photo.src = URL.createObjectURL(image);    
}).
catch(e => {
    console.log(e.message);
});
