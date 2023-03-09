export const MOCK_RESPONSE = {
  data: [
    {
      'Title Number': '342999',
      'Property Address': '102-108 Clerkenwell Road, London (EC1M 5SA)',
      Tenure: 'Freehold',
      X: -0.104842377,
      Y: 51.52256431,
    },
    {
      'Title Number': '41229',
      'Property Address': '75 Farringdon Road, London (EC1M 3JY)',
      Tenure: 'Freehold',
      X: -0.106601162,
      Y: 51.52122929,
    },
  ],
}

export const MOCK_STATE = {
  data: {
    "342999": MOCK_RESPONSE.data[0],
    "41229": MOCK_RESPONSE.data[1],
  },
}
