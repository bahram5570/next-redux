import {configureStore} from '@reduxjs/toolkit'
import outputSlice from './outputSlice'

export const store = configureStore({
    reducer: {
        outputReducer: outputSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
