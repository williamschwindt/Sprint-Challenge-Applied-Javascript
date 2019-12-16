// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios 
    .get('https://lambda-times-backend.herokuapp.com/articles')

    .then((res) => {
        console.log(res);
        let values = Object.values(res.data.articles)
        console.log(values);
        values.forEach((arr) => {
            arr.forEach((obj) => {
                cardsContainer.appendChild(createCard(obj));
            })
        })
    })

    .catch((err) => {
        console.log(err);
    })


let cardsContainer = document.querySelector('.cards-container');


function createCard(obj) {
    let card = document.createElement('div');
    card.classList.add('card');
    
    let headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = obj.headline;
    
    let author = document.createElement('div');
    author.classList.add('author');
    
    let authorImgContainer = document.createElement('div');
    authorImgContainer.classList.add('img-container');
    
    let authorImg = document.createElement('img');
    authorImg.src = obj.authorPhoto;
    
    let authorsName = document.createElement('span');
    authorsName.textContent = 'By ' + obj.authorName;
    
    card.appendChild(headline);
    card.appendChild(author);
    
    author.appendChild(authorImgContainer);
    authorImgContainer.appendChild(authorImg);
    author.appendChild(authorsName);
    
    return card;
    
}











