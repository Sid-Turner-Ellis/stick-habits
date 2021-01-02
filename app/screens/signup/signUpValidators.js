

export function validatePassword(pass, repeatPass){
  
  // check if the passwords match
  if(pass != repeatPass){
    return {
      validated: false,
      message: 'Passwords do not match'
    }
  }

  // check the length is above 6
  if(pass.length < 6){
    return {
      validated: false,
      message: 'Passwords must be at least 6 characters'
    }
  }

  return {
    validated: true
  }
}

export function validateEmail(email){
  return /\b[\w \d]+@\w+\.\w+/.test(email);
}