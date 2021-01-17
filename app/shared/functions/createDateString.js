export default function createDateString(){
  const d = new Date();
  const todayDateString = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`
  return todayDateString;
}