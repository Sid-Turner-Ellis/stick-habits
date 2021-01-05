import React,{useState} from 'react'

export default function useStateTwo(param) {
  // const firstLetter = val[0].toUpperCase()
  // const remaining = val.slice(1)
  // const setVal = `set${firstLetter + remaining}`

  const [value, set] = useState(param)
  
  return {value, set}
}
