import state from './mockState.json'

// this is a function that could be used add the missing days to each habit upon open

export function getStreak(){
  const today = new Date()
  const {habits} = state;

  habits.forEach(habit => {
    const last_entry_date = new Date()
    const entries_to_add = []

    const {entries} = habit
    const last_entry = entries[entries.length - 1]
    const [date, month, year] = last_entry.date.match(/../g).map(val => +val)
    last_entry_date.setDate(+date)
    last_entry_date.setMonth(+month-1)
    last_entry_date.setFullYear( +("20" + year.toString()))
    const days_missing = (today - last_entry_date) / 1000 / 60 / 60 / 24

    // create a empty date object for each day
    for(let i = 1; i < days_missing + 1; i++){
      const d = new Date(last_entry_date)
      d.setDate(d.getDate() + i)
    
      const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`

      const newEntry = {
          value: null,
          date,
          timestamp: 1609251498,
          completed: false
      }
      entries_to_add.push(newEntry)

    }

  console.log(entries_to_add);


  })


}

// oiiiiiii go ahead and add that thing to create the new dates