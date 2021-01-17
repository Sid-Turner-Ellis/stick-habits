import Constants from "expo-constants";
const {URL} = Constants.manifest.extra
// const URL = "http://0585c08d3c4f.ngrok.io/api"


export const createAccountService = async({name, email, password}) => {

  try {
    const timestamp = Math.floor(Date.now() / 1000);
    const requestObject = { name ,email, password, timestamp}

    const unparsedResponse = await fetch(URL + "/account/createaccount", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestObject)
    })
  
  
    const response = await unparsedResponse.json()
    return response

  }catch(e){
    throw e
  }
}


