const state = {
  user: {
      id: null,
      points: null,
      email: null,
      last_login: null,
      name: null,
      created_account: null,
      premium_account: false
  },
  habits: [{
      name: "mock this shouldnt be here",
      created_habit:1609255704, 
      rules: {
          type: "twodayrule",
          units: 'pages',
          target_per_day: 5,
          chances: 2,
          last_updated: 1609255704
      },
      entries:[]
  }]
}

export default state