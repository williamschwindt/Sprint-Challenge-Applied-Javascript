// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

let headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

function Header() {
    let header = document.createElement('div');
    
    let date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'December 15, 2019';
    
    let h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';
    
    let temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98 Degrees';
    
    header.classList.add('header');
    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);
    
    return header;
}
