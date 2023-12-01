import {createSlice} from '@reduxjs/toolkit'

const barraSlice = createSlice({
    name: 'routeAdm',
    initialState: {
        routeName: '',
        expandMoreName: '',
    },
    reducers: {
        alternateRouteName(state, action){
            state.routeName = action.payload;
        },
        expandMore(state, action){
          if(state.expandMoreName === action.payload){
            state.expandMoreName = ''
          }else{
            state.expandMoreName=action.payload
          }
        }
    }
})

export const {alternateRouteName, expandMore} = barraSlice.actions

export const selectRouteName = (state) => state.routeAdm.routeName;
export const selectExpandMoreName = (state) => state.routeAdm.expandMoreName;

export default barraSlice.reducer;