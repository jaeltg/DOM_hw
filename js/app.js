document.addEventListener('DOMContentLoaded', () => {
    console.log("You are ready to go!");

  const form = document.querySelector('#new-movie-form');
  form.addEventListener('submit', handleFormSubmission);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAll);

})

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const movieListItem = createListItem(event.target);
    const movieList = document.querySelector('#movie-list');
    movieList.appendChild(movieListItem);

    const listItems = document.querySelectorAll('.list-item')
    const deleteButton = document.querySelector('#delete-button')
    listItems.forEach(function (item) {
        deleteButton.addEventListener('click', handleDelete);
    })
    

    event.target.reset();
  }

  const createListItem = (form) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-item');

      const movieTitleYear = document.createElement('h3');
      movieTitleYear.textContent = `${form.title.value} (${form.year.value})`;
      movieTitleYear.id = "title-year"
      listItem.appendChild(movieTitleYear);

      const movieRunTime = document.createElement('p');
      movieRunTime.textContent = `${form.runningTime.value} min`;

      const movieWatched = document.createElement('p')
      movieWatched.textContent = form.newRewatch.value;
    
      const infoContainer = document.createElement('div')
      infoContainer.appendChild(movieRunTime)
      infoContainer.appendChild(movieWatched)
      infoContainer.id = "info-container"
      listItem.appendChild(infoContainer)

      const deleteButton =  document.createElement('button')
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('button');
      deleteButton.id = "delete-button";
      listItem.appendChild(deleteButton);
    
      return listItem;
  }

  const handleDeleteAll = () => {
      const movieList = document.querySelector('#movie-list');
      movieList.innerHTML = '';
  }

   const handleDelete = (event) => {
    const movieList = document.querySelector('#movie-list');
    movieList.removeChild(event.target.parentElement)
  }

