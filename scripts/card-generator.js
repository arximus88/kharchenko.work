fetch('jcard.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.querySelector('.card-container');
    data.forEach(item => {
      const projectData = fetch(`${item.folder}/jproject.json`)
        .then(response => response.json())
        .then(data => {
          return {
            title: data.title,
            client: data.client,
            year: data.year,
            tags: data.tags,
            thumbnailPath: `${item.folder}/${data.thumbnailPath}`,
            clientImgPath: `${item.folder}/${data.clientImgPath}`,
            description: data.description
          }
        });

      projectData.then(data => {
        const card = document.createElement('div');
        card.classList.add('card');
        const cardImage = document.createElement('div');
        cardImage.classList.add('card-image');
        cardImage.style.backgroundImage = `url(${data.thumbnailPath})`;
        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = data.title;
        const cardClient = document.createElement('p');
        cardClient.classList.add('card-client');
        cardClient.textContent = data.client;
        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card-description');
        cardDescription.textContent = data.description;
        card.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(cardClient);
        card.appendChild(cardDescription);
        cardContainer.appendChild(card);
      });
    });
  });


// import data from '../jcard';

// console.log(data);

// // Read the JSON file containing the card information
// const cardData = JSON.parse(fs.readFileSync('jcard.json'));

// // Sort the card data by order
// const sortedCardData = cardData.sort((a, b) => a.ORDER - b.ORDER);

// // Loop through the sorted card data and create a card for each item
// for (const cardItem of sortedCardData) {
//   const folder = cardItem.FOLDER;
//   const projectData = JSON.parse(fs.readFileSync(`./${folder}/jproject.json`));
  
//   const cardContainer = document.createElement('div');
//   cardContainer.classList.add('card-container');
  
//   const card = document.createElement('div');
//   card.classList.add('card');
  
//   const cardImage = document.createElement('div');
//   cardImage.classList.add('card-image');
//   cardImage.style.backgroundImage = `url(${projectData.THUMBNAILPATH})`;
  
//   const cardTitle = document.createElement('h2');
//   cardTitle.classList.add('card-title');
//   cardTitle.innerText = projectData.TITLE;
  
//   const cardClient = document.createElement('p');
//   cardClient.classList.add('card-client');
//   cardClient.innerText = projectData.CLIENT;
  
//   const cardDescription = document.createElement('p');
//   cardDescription.classList.add('card-description');
//   cardDescription.innerText = projectData.DESCRIPTION;
  
//   // Append the card elements to the card container and then append the card container to the page
//   card.appendChild(cardImage);
//   card.appendChild(cardTitle);
//   card.appendChild(cardClient);
//   card.appendChild(cardDescription);
  
//   cardContainer.appendChild(card);
  
//   document.body.appendChild(cardContainer);
// }
