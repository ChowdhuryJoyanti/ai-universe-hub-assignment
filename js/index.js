const fetchTools =async () => {
    const url =`https://openapi.programming-hero.com/api/ai/tools`
    const res =  await fetch(url);
    const data = await res.json()
    displayTools(data.data.tools);
    // displayTools(data.data)


    // fetch('https://openapi.programming-hero.com/api/ai/tools')
    // .then(res =>res.json())
    // .then(data => console.log(data))


}

const displayTools = tools =>{
    const toolsContainer = document.getElementById('tools-container');
    tools.forEach(tools => {
        const toolDiv = document.createElement('div')
        toolDiv.classList.add('col')
        toolDiv.innerHTML = `
        <div class="card">
        <img src="${tools.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>

          <p class="card-text">1.${tools.features[0]}</p>
          <p class="card-text">2.${tools.features[1]}</p>
          <p class="card-text">3.${tools.features[2]}</p>
        </div>
        <hr>
        <h5 class="card-title">${tools.name}</h5>
        <div>
        <div class="d-flex justify-content-between px-2 pb-2">
        <i class="fa-regular fa-calendar"></i>
        <small class="text-muted">${tools.published_in}</small>
        <div class="rounded-circle bg-danger-subtle px-2 py-1">
        <i class="fa-solid fa-arrow-right text-danger">
        </i>
        </div>
        
        </div>
       
        </div>
      
        
        
    </div>


        `,

        toolsContainer.appendChild(toolDiv)
    });
    console.log(tools);
}

fetchTools()




// const displayUniverse = () => {
//     const universeContainer = document.getElementById('universe-container')
//     universeContainer.textContent ='';
// }

// universes.forEach(universe => {
//     const universeDiv = document.createElement('div');
//     universeDiv.classList.add('col')
//     universeDiv.innerHTML =`
//     <div class="card">
        
//             <img src="${tools.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             </div>
//             <div class="card-footer">
//             <small class="text-muted">Last updated 3 mins ago</small>
//             </div>
//     </div>
//     `

// })

// phones.forEach(phone => {
//     const phoneDiv = document.createElement('div');
//     phoneDiv.classList.add('col')
//     phoneDiv.innerHTML =`
//     <div class="card">
//                     <img src="${phone.image}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title">${phone. phone_name}</h5>
//                       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                       <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModall">Show Details</button>
                  
//                     </div>
//                   </div>
    
//     `;
//     phoneContainer.appendChild(phoneDiv);

// });
// // stop loader
// toggleSpinner(false);
// }







// const displayPhones = (phones,dataLimit) =>{
//     const phoneContainer = document.getElementById('phone-container')
//     phoneContainer.textContent = '';

//     // display 10 phones only
// //     const showAll= document.getElementById('Show-all')
// //     if ( dataLimit && phones.length > 10){
// //         phones = phones.slice(0,10);              
       
// //         showAll.classList.remove('d-none');
// //     }
// //     else{
// //         showAll.classList.add('d-none');
// //     }
// // }








// const loadPhones = async(searchText,dataLimit) => {
//     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
//     const res = await fetch(url);
//     const data = await res.json()
//     displayPhones (data.data ,dataLimit);
// } 


// const fetchCatagories = () => {
//     fetch('https://openapi.programming-hero.com/api/news/categories')
//     .then(res =>res.json())
//     .then(data =>showCatagories(data.data))
// }
