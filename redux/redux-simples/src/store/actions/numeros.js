export const onChangeMax = (value) => {
  return {
    type: 'ADD_MAX',
    payload: {
      max: value
    }
  }
}

export const onChangeMin = (value) => {
  return {
    type: 'ADD_MIN',
    payload: {
      min: value
    }
  }
}