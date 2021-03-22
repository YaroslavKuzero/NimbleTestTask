import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import countersReducer from './reducers';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'counters',
  storage: storage,
}
const persistedReducer = persistReducer(persistConfig, countersReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

const persistor = persistStore(store)

export { store, persistor };