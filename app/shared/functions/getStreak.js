import wasEntryMadeToday from './wasEntryMadeToday'

/*How this function works - Try making this with js docs*/
// this will loop through the days counting the streak, When it fails it will return the the streak - all fails will be removed from the steak
// this is controversial but makes sense to me.. eg if you fail - one of the chances will not go towards the str


export default function getStreak(habit){
  const {entries, rules:{chances_per_week}} = habit
  let streak = 0;
  let fails = 0;

  for(let i = 0; i < entries.length; i++){
    let e = entries[i]

     // check if its a new week or not 
     if(i % 7 == 0 ){
      fails = 0
    }

    // check if today is completed but if it is not dont add it as a fail
    if(i == 0 && wasEntryMadeToday(habit) && e.completed){
      streak++
    }else if(i == 0){
      // dont do anything, No fail and no succeeed
    }else if(e.completed){
      streak++
    }else{
      fails++
      streak++
    }

    // check if the number of fails is too many & then return 
    if(fails > chances_per_week){
      return streak - 1
    }
  }
  return streak
}