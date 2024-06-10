const button = document.querySelector(".getmeal");
const details = document.querySelector(".details");

button.addEventListener("click", function () {
  const data = fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((pro) => pro.json())
    .then((data) => {
      details.innerHTML = `
      <div class="first">
      <div><img src="${data.meals[0].strMealThumb}" class="ana"></div>
      <div class ="mtavari"><h1>${data.meals[0].strMeal}</h1>
      <p class="text">${data.meals[0].strInstructions}</p></div>
      </div>
      </div>
      <h2>Category: ${data.meals[0].strCategory}</h2>
      <h2>Area: ${data.meals[0].strArea}</h2>
      <h1Ingredients</h1>
      <ul>
      <li>${data.meals[0].strIngredient1}</li>
      <li>${data.meals[0].strIngredient2}</li>
      <li>${data.meals[0].strIngredient3}</li>
      <li>${data.meals[0].strIngredient4}</li>
      <li>${data.meals[0].strIngredient5}</li>
      <li>${data.meals[0].strIngredient6}</li>
      <li>${data.meals[0].strIngredient7}</li>
      <li>${data.meals[0].strIngredient8}</li>
      <li>${data.meals[0].strIngredient9}</li>
      </ul>
      </div>
    
      `;
      console.log(data);
    });
});
