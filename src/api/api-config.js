import axios from 'axios'

// apiKeys
export const spoonacularApiKey = "&apiKey=8cc208ac129d4067aca765018108052d";
export const firebaseApiKey = "?key=AIzaSyASJnoIJ35f3ZyTjKHaY9xZnP9TnKVhjaE";


const axiosFood = axios.create({
  baseURL : "https://api.spoonacular.com/recipes"
})

const axiosAuth = axios.create({
  baseURL : "https://identitytoolkit.googleapis.com/v1/accounts:"
})
  

const axiosComment = axios.create({
  baseURL : "https://orderit-75ad5-default-rtdb.firebaseio.com/"
})

const Api = {
  food : {
    foods : _ => axiosFood.get(`/random?number=10${spoonacularApiKey}`).then(res => res.data),
    search: data => axiosFood.get(`random?number=100&tags=${data.query}${spoonacularApiKey}`).then(res => res.data),
    detail : data => axiosFood.get(`ecipes/${data.foodID}/information?includeNutrition=false${spoonacularApiKey}`).then(res => res.data)
  },

  firebase : {
    signin : data => axiosAuth.post(`signUp${firebaseApiKey}`,data).then(res => res.data),
    signout : data => axiosAuth.post(`signInWithPassword${firebaseApiKey}`,data).then(res => res.data),
    comment: data => axiosComment.post(`/comment/${data.foodID}.json`, data).then(res => res.data)
  },

}


export default Api