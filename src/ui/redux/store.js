import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./index";
import AsyncStorage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const middleware = [thunk];

const persistConfig = {
  // Root
  key: "root-1",
  // Storage Method (React Native)
  storage: AsyncStorage,

  // Whitelist (Save Specific Reducers)
  // Blacklist (Don't Save Specific Reducers)
  // blacklist: [
  //     "auth"
  // ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware: Redux Persist Persisted Reducer
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // options like actionSanitizer, stateSanitizer
    }) : compose;


const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

let persistor = persistStore(store);
// Exports
export { store, persistor };
