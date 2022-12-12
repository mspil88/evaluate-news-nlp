import {validateUrl} from "./nameChecker"

const agreementElem = document.querySelector(".agreement")
const confidenceElem = document.querySelector(".confidence")
const ironyElem = document.querySelector(".irony")
const modelElem = document.querySelector(".model")
const score_tagElem = document.querySelector(".score-tag")
const subjectivityElem = document.querySelector(".subjectivity")

const errorMsg = document.querySelector(".error");

var resultData;

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
    if(validateUrl(responseUrl)) {
      const data = await postData(serverUrl, {url: responseUrl});
      console.log(`RETURNED DATA ${data.responseData}`);
      console.log(`RETURNED Status ${data.responseStatus}`);
      resultData = data;
      setOutputs(resultData.responseData, resultData.responseStatus);
    } else {
      errorMsg.textContent = "Error: Please provide a valid URL"
    }
}


const setOutputs = (resData, resStatus) => {
    if(resStatus == 0) {
      const {agreement, confidence, irony, model, score_tag, subjectivity} = resData
      agreementElem.textContent = `Agreement: ${agreement}`
      confidenceElem.textContent = `Confidence: ${confidence}`
      ironyElem.textContent = `Irony: ${irony}`
      modelElem.textContent = `Model: ${model}`
      score_tagElem.textContent = `Score Tag: ${score_tag}`
      subjectivityElem.textContent = `Subjectivity: ${subjectivity}`
    } else {
      errorMsg.textContent = "Error: API error, please try again"
    }
    
}


export { handleSubmit, setOutputs};
