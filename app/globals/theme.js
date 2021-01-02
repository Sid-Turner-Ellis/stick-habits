let dark_mode = false

const light_mode_theme = {
  colors: {
    primary:'red',
    secondary:'blue',
    backgroundColor: '#f5f5f5',
    darkGrey: '#c2c2c2'
  },
  
  navigator : {
    backgroundColor: 'white',
    unselectedIconColor: '#c2c2c2',
  }
}
// when ready just copy the above and change the colors
const dark_mode_theme = {

}


export default dark_mode ? dark_mode_theme : light_mode_theme