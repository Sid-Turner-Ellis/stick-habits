import Constants from "expo-constants";
const {URL} = Constants.manifest.extra
// const URL = "http://0585c08d3c4f.ngrok.io/api"

export async function syncStateService(id, state){
  const requestObject = {id, state}
  try {
    const unparsedResponse = await fetch(URL + "/updatestate", {
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


// this will need building out properly - 
// right now it will return either {didSync: true}
// or {error: {status: 500, message: "Syncing failed, Please contact support"}}