import Constants from "expo-constants";
// const {URL} = Constants.manifest.extra
const URL = "http://0585c08d3c4f.ngrok.io/api"


export const signInService = async( email, password) => {
  const requestObject = {email, password}


  try {
    const unparsedResponse = await fetch(URL + "/account/signin", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestObject)
    })
    console.clear()
    const response = await unparsedResponse.json()
    return response

  }catch(e){
    throw e
  }
}


