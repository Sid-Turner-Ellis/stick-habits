
import createDateString from './createDateString'

// Give the habit object, This function will check to see if an entry was
// made today and return a boolean

export default function wasEntryMadeToday(habit){
  const {entries} = habit

  // get the latest entry
  // *new habits should be sent to the FRONT of the way 
  const lastEntry = entries[0] || null

  // create a string to represent the current day 6.1.2020
  const todaysDateString = createDateString()

  // compare the two date strings
  if(lastEntry && lastEntry.dateString == todaysDateString){
    return true
  }else {

    return false
  }
}

