import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const rootReducer= combineReducers({
    user: userReducer
})
const persistConfig ={
  key: 'root',
  storage,
  version: 1,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
// Create a Redux store using the root reducer and middleware
// The middleware is configured to ignore serializable checks
export const store = configureStore({
  reducer: persistedReducer,
  middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store);