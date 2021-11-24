export const addPoem = (poetry) =>{
  return {type:'ADD_POEM',payload:poetry}
}

export const addTags = (keyword) =>{
  return {type:'ADD_TAG',payload:keyword}
}

