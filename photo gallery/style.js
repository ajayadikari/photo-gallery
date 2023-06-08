const btn = document.querySelector(".btn");
let gallery = document.querySelector(".photos-container");
let err = document.querySelector(".warning-box");
let inputEle = document.querySelector("input");
const loading = `<img src="spinner.svg"/>`;
btn.addEventListener("click", ()=>{
    gallery.innerHTML = "";
    gallery.innerHTML = loading;
    // btn.style.display = "none";
    fetchImage();
})
async function fetchImage(){
    if(inputEle.value < 0 || inputEle.value > 11){
        err.classList.remove("disable");
        return;
    }
    await fetch(`https:api.unsplash.com/photos?per_page=${inputEle.value}&page=${Math.round(Math.random()*1000)}&client_id=K9RLe8K401sMiZAGrzlgZQHTkDLRGfoEnk4nqTmwjHw`)
    .then(photos=>{
        return photos;
    })
    .then(obj=>{
        return obj.json();
    })
    .then(data=>{
        let imgs = "";
        data.forEach(pic => {
            imgs += `<img src=${pic.urls.small} class = "imgClass">`
        });
        err.classList.add("disable");
        gallery.innerHTML = "";
        gallery.innerHTML = imgs;
        gallery.classList.remove("disable");
        // btn.style.display = "block";
    })
    .catch(err=>{
        err.classList.remove("disable");
    })
}