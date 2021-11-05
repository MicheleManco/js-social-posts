// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
// numero di likes.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

//creo l'array di oggetti con : nome autore, foto profilo, data, testo del post,immagine, numero di likes.

const feed = [
    {
        "nome" : "Phill Mangione",
        "avatar" : "https://unsplash.it/300/300?image=15",
        "data" : "4 mesi fa",
        "text" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "img" : "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Funsplash.it%2F600%2F300%3Fimage%3D171",
        "likes" : 80
    },
    {
        "nome" : "Phill Mangione",
        "avatar" : "https://unsplash.it/300/300?image=15",
        "data" : "4 mesi fa",
        "text" : "un paragrafo con scritto qualcosa di molto lungo dentro un tag p",
        "img" : "",
        "likes" : 35
    },
    {
        "nome" : "Phill Mangione",
        "avatar" : "https://unsplash.it/300/300?image=15",
        "data" : "4 mesi fa",
        "text" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "img" : "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Funsplash.it%2F600%2F300%3Fimage%3D171",
        "likes" : 68
    }
]


// stampo gli oggetti contenuti nell'array dentro al container dovendo fare attenzione a mettere l'img solo a chi c'è l'ha
const container = document.getElementById("container");
for(let i = 0; i < feed.length; i++){
var {nome, avatar, data, text, img, likes} = feed[i];
container.innerHTML += `
<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${avatar}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${nome}</div>
                        <div class="post-meta__time">${data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${text}</div>
            <div class="post__image">
                <img src="${img}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button"  data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
`
}

// al click coloro il tasto e aumento di uno i like 
const like = document.querySelectorAll(".like-button")
console.log(like);
for (let i = 0; i < like.length; i++){
like[i].addEventListener("click",
function (){
    like[i].classList.add("like-button--liked");
    let counterLikes = document.getElementsByClassName("js-likes-counter");
    counterLikes[i].innerHTML = feed[i].likes + 1;
    console.log("click",counterLikes);
}
)
}
