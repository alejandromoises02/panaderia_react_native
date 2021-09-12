export const SELECT_BREAD = 'SELECT_BREAD';
export const FILTER_BREADS = 'FILTER_BREADS'

export const selectBread = (id) =>({
    type: SELECT_BREAD,
    payload: id,
})

export const filterBread = (id) =>({
    type: FILTER_BREADS,
    payload: id,
})