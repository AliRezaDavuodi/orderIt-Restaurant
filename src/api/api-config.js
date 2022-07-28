import axios from "axios"

// apiKeys
export const spoonacularApiKey = process.env.REACT_APP_FOOD_API_KEY
export const firebaseApiKey = process.env.REACT_APP_AUTH_API_KEY

// Urls
export const spoonacularGetFood = "https://api.spoonacular.com/recipes/random?"
export const firebaseSignup =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp"
export const firebaseSignin =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword"
export const firebaseRealDataBase =
  "https://orderit-75ad5-default-rtdb.firebaseio.com/"

const api = {
  food: {
    foods: data =>
      axios
        .get(
          `${spoonacularGetFood}number=100&tags=${data.query}${spoonacularApiKey}`
        )
        .then(res => res.data),
    info: data =>
      axios
        .get(
          `https://api.spoonacular.com/recipes/${data.foodID}/information?includeNutrition=false${spoonacularApiKey}`
        )
        .then(res => res.data),

    random: data =>
      axios
        .get(`${spoonacularGetFood}number=10${spoonacularApiKey}`)
        .then(res => res.data),
  },

  auth: {
    signup: data =>
      axios
        .post(`${firebaseSignup}${firebaseApiKey}`, data)
        .then(res => res.data),
    signin: data =>
      axios
        .post(`${firebaseSignin}${firebaseApiKey}`, data)
        .then(res => res.data),
    refresh: apikey =>
      axios
        .post(`https://securetoken.googleapis.com/v1/token?key=${apikey}`)
        .then(res => res.data),
  },

  comment: {
    getComments: data =>
      axios
        .get(`${firebaseRealDataBase}/comment/${data.foodID}.json`)
        .then(res => res.data),
    addComment: data =>
      axios
        .post(`${firebaseRealDataBase}/comment/${data.foodID}.json`, data)
        .then(res => {
          console.log(data.foodID)
          return res.data
        }),
  },
}

export default api
