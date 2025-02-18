"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { PersistGate } from "redux-persist/integration/react";

import globalReducer from "@/app/store/globalSlice"; // Ensure this is correctly imported
import { api } from "@/app/store/api";
import { setupListeners } from "@reduxjs/toolkit/query";

/* REDUX PERSISTENCE */
const createNoopStorage = () => ({
  getItem: () => Promise.resolve(null),
  setItem: (_key: any, value: any) => Promise.resolve(value),
  removeItem: () => Promise.resolve(),
});

const storage =
  typeof window === "undefined" ? createNoopStorage() : createWebStorage("local");

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["global"], // Ensure "global" is listed here
};

const rootReducer = combineReducers({
  global: globalReducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* CREATE STORE */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);

/* REDUX TYPES */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/* PROVIDER */
export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
