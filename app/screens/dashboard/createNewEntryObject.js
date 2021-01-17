function EntryObject(value, dateString){
  return {
    value,
    dateString,
    timestamp: (new Date()).getUTCDate(),
    completed: false,
  }
}

export default EntryObject;