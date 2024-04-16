import axios from 'axios'
import App from './App'


const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=KoZYJwyNRqeeQkttQSd2-x7pAKU_pJhWDD8gjBh19NU'


    const response = await axios.get(url, {
        params: {
            query:'cars'
        }
    })


    console.log (response)
   
}


export default searchImage
