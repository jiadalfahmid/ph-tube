const loadCategory = () => {
   fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
   .then(res => res.json())
   .then(data => categoryBtn(data.categories))
   .catch(err => console.log(err))
}

const categoryBtn = (categories) =>{
   const categoryContainer = document.getElementById('category-container');
   categories.forEach((item) => {
      const button = document.createElement('button')
      button.classList = 'btn btn-error text-white font-semibold'
      button.innerText = item.category;
      categoryContainer.appendChild(button);
   })
   }


loadCategory()