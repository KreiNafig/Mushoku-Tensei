import {configureStore} from '@reduxjs/toolkit';
import {musyokuTensei} from './slices/getInfoMusyoku/getInfo'

export const store = configureStore({
    reducer: {
        musyokuTensei
    }
})