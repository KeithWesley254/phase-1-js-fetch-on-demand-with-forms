const init = () => {
    const inputForm = document.querySelector('form');
  //Linked the input id with fetch to get the values from server.
  ///...movies/1 for example will return the first story with id = 1.
  //So when user inputs 1, that is now at the end of the fetch request which is the
  //id to the story linked with it.
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');

      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
    });
  }
  
document.addEventListener('DOMContentLoaded', init);