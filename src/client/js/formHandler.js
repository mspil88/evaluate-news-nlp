function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

const postToApi = async (apiUrl, responseData={}) => {
    const apiResponse = await fetch(apiUrl, {
        method: "POST",
        credentials: "same-origin",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(responseData)
    })

    try {
        return await apiResponse.json()
    } catch (e) {
        console.log(e)
    }
}

const handleSubmit = async() => async {
    //check URL
}


export { handleSubmit }
