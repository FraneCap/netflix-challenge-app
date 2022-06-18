const apiKey = "k_r89c4zie";

/*const requests = {
  method: "GET",
  redirect: "follow",
};*/

export function searchMovie(la_busqueda) {
  return fetch(`https://imdb-api.com/en/API/Search/${apiKey}/${la_busqueda}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
}



//export default requests;
