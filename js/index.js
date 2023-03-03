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
    toolsContainer.textContent = '';
    // tools.slice(0,6);

    if(tools.length > 10){
      tools = tools.slice(0,6);
      const seeMore = document.getElementById('see-more');
      seeMore.classList.remove('d-none')
    }
    else {
      seeMore.classList.add('d-none')
    }


    tools.forEach(tools => {
      const{ id,image,features,name, published_in } =tools;
        const toolDiv = document.createElement('div')
        toolDiv.classList.add('col')
        toolDiv.innerHTML = `
        <div class="card">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>

          <p class="card-text">1.${features[0]}</p>
          <p class="card-text">2.${features[1]}</p>
          <p class="card-text">3.${features[2]}</p>
        </div>
        <hr>
        <h5 class="card-title">${name}</h5>
        <div>
        <div class="d-flex justify-content-between px-2 pb-2">
        <i class="fa-regular fa-calendar"></i>
        <small class="text-muted">${published_in}</small>
        <div class="rounded-circle bg-danger-subtle px-2 py-1">
        <i class="fa-solid fa-arrow-right text-danger" onclick="loadToolDetails('${id}')" data-bs-toggle="modal"
        data-bs-target="#exampleModal"> 
        </i>
        </div>
        
        </div>
       
        </div>
      
        
        
    </div>


        `,

        toolsContainer.appendChild(toolDiv)
    });
    // console.log(tools);
    // toggleSpinner(false);
}

document.getElementById('btn-sortby').addEventListener('click',function(){
    // console.log('dfd');
})


  const displayMoreTools = tools =>{
    const btnSeeMore = document.getElementById('see-more').addEventListener('click',function(){
      const showTools= btnSeeMore.tools.slice(0,6)
      // const showTools = tools.slice(0,6)
      // console.log(showTools);
})
  }
  // document.getElementById('btn-see-smore').addEventListener('click',function(){
  //   // const showMore = document.getElementById('btn-see-more')
  //   const seeMore =data.data.tools;
  //   fetchTools(seeMore)
    // toggleSpinner(true);
    
  //       // console.log('dfs');
  // })
// const toggleSpinner = isLoading => {
//   const loaderSection = document.getElementById('loader')
//   if(isLoading){
//     loaderSection.classList.remove('d-none')
//   }
// }


const loadToolDetails = async id =>{
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  // console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  displayToolDetails(data.data)
}

const displayToolDetails = tools =>{
  console.log(tools)
  const modalDescription = document.getElementById('modal-description')
  modalDescription.innerText =tools.description;
  const modalPricing = document.getElementById('modal-pricing')
  modalPricing.innerText = tools.pricing[0].price
  const modalPricing1 = document.getElementById('modal-pricing1')
  modalPricing1.innerText = tools.pricing[1].price
  const modalPricing2 = document.getElementById('modal-pricing2')
  modalPricing2.innerText = tools.pricing[2].price
  // modalPricing.innerText = tools.pricing[2].price
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

















