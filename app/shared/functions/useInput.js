import React, {useState} from 'react'

export default function useForm(param){
  
  let initialValue = param > 0 ? param : 'habit'
  const [value, setValue] = useState(initialValue)

    const bind = {
      value,
      onChangeText(text) {
        setValue(prev => text)
      }
    }
    return [bind, setValue]
}