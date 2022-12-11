import axios from "axios";
import {validateUrl} from "./nameChecker"


const handleSubmit = async(event) => {
    event.preventDefault()

    let responseUrl = document.getElementById("name");

    if(validateUrl(responseUrl)) {
        console.log(responseUrl)
        axios.post(responseUrl, {url: responseUrl})
        .then((reponse)=> console.log(response))
    }
}


export { handleSubmit }
