const initialState = {
  account: {
      id: null,
      points: 0,
      email: null,
      name: null,
      created_account: null,
      premium_account: false,
  },
  habits: [{
      name: "mock this shouldnt be here",
      description: " mock this shouldnt be herebook every hour for at least 6 days per week",
      target_length_days: 66,
      rules: {
        type: "twodayrule",
        unit: ["page", "pages"],
        target_per_day: 5,
        chances: 2,
        last_updated: 1609255704
      },
      entries: [{
              value: 3,
              date: "11/12/2020",
              timestamp: 1609251498,
              completed: true
          },
          {
              value: 3,
              date: "12/12/2020",
              timestamp: 1609251498,
              completed: true
          },
          {
              value: 3,
              date: "13/12/2020",
              timestamp: 1609251498,
              completed: true
          }
      ]
  }],
  rehydrate: false
}

export default initialState