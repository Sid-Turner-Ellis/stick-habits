import React, {useState} from 'react'

export default function useForm(){
  const [value, setValue] = useState('')

    const bind = {
      value,
      onChangeText(text) {
        setValue(prev => text)
      }
    }
    return [bind, setValue]
}