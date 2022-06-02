export const convertFoodData = reciveData => {
  const { recipes } = reciveData

  const data = []

  recipes.forEach(recipe => {
    const dataObj = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      description: recipe.summary.slice(0, 120) + "...",
      price: recipe.pricePerServing.toFixed(2),
    }

    data.push(dataObj)
  })

  return data
}
