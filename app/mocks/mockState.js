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
      description: " mock this shouldnt be herebook every hour for at least 6 days per week",
      created_habit:1609255704, 
      rules: {
          type: "twodayrule",
          unit: ["page", "pages"],
          target_per_day: 5,
          chances: 2,
          last_updated: 1609255704
      }

  }]
}

export default state