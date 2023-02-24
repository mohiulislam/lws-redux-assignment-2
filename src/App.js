import { Provider } from "react-redux";
import Nav from "./Components/Nav";
import PreviewContainer from "./Components/PreviewContainer";
import UserInput from "./Components/UserInput";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Nav />
      <UserInput />
      <PreviewContainer />
    </Provider>
  );
}

export default App;
