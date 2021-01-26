import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web


const persistConfig = {
  key: "root",
  storage,
  whitelist:['userReducer']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,


  /**
   * solve the error of serialization;
   * @param getDefaultMiddleware 
   */


  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});
export let persistor = persistStore(store);
