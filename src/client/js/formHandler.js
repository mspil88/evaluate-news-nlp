import {validateUrl} from "./nameChecker"


const postData =  async (url = '', data = {}) => {
    //helper function to post data back, inspired by the fetch API documentation
    console.log("CALLING POST DATA")
    console.log(url)
    console.log(data)
    try {
      const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
      });
      return response.json(); 
    } catch(error) {
      console.log(error)
    }
  }

const handleSubmit = async(event) => {
    event.preventDefault()
    console.log("CALLING HANDLE SUMBMIT")
    const responseUrl = document.getElementById("name").value;
    const serverUrl = "http://localhost:8081/articleResponse";

    console.log(responseUrl);

    const data = await postData(serverUrl, {url: responseUrl});
    console.log({data});
}

const setOutputs = (res) => {
    console.log(res)
}


export { handleSubmit, setOutputs};
