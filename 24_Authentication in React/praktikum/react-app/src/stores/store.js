import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const reducers = combineReducers(
    {
        products: productSlice
    }
)

const persistConfig = { key: "root", storage, backlist: ["products"] };

const pReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: pReducer,
    middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		});
	},
});

const persistor = persistStore(store);

export { persistor };
export default store