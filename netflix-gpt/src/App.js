import { Body } from "./Components/Body";
import {Provider} from "react-redux"
import AppStore from "./utils/AppStore";

function App() {
  return (
    <Provider store={AppStore}>
    <div>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
