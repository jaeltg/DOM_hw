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


    event.target.reset();
  }

  const createListItem = (form) => {
      const listItem = document.createElement('li');

      const movieTitleYear = document.createElement('h3');
      movieTitleYear.textContent = `${form.title.value} (${form.year.value})`;
      listItem.appendChild(movieTitleYear);

      const movieRunTime = document.createElement('p');
      movieRunTime.textContent = `${form.runningTime.value} min`;
      listItem.appendChild(movieRunTime);

      const movieWatched = document.createElement('p')
      movieWatched.textContent = form.newRewatch.value;
      listItem.appendChild(movieWatched);
      
      return listItem;
  }

  const handleDeleteAll = (event) => {
      const movieList = document.querySelector('#movie-list');
      movieList.innerHTML = '';
  }
 
