const URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_7cNGFwtYb9HWdkIK8Xk0VrIbatAQzHj5XYnwjphPrEmtVHsOOny5p6g0eRghZLRl';

export function fetchBreeds() {
  return fetch(`${URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) throw new Error(response.stasus);

    return response.json();
  });
}
export function fetchCatByBreed(breedID) {
  return fetch(
    `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedID}`
  ).then(response => {
    if (!response.ok) throw new Error(response.stasus);

    return response.json();
  });
}

// const fetchCatByBreed = function (breedID) {
//   const IMAGES_URL = `${URL}images/search`;
//   const searchParams = new URLSearchParams({ breed_ids: breedID });

//   return fetch(`${IMAGES_URL}?${searchParams}`)
//     .then(response => {
//       if (!response.ok) throw new Error(response.status);

//       return response.json();
//     })
//     .then(data => {
//       return data;
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
// fetchCatByBreed();

// export { fetchBreeds, fetchCatByBreed };
