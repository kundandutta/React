import './App.css';
import HeaderComponent from './header/header';
import LsheaderComponent from './header/leftSideHeader/lsheader';
import Rsheader from "./header/rightSideHeader/Rsheader";
function App() {
  const clickFunc = () => {
    console.log("button clicked");
  }
    const clickThis = () => {
      console.log("butter here");
  }
  return (
    <div className="App">
      <HeaderComponent
        title="title of header"
        btnName="Some button"
        clickFn={clickFunc}
      />
      <LsheaderComponent
        title="This is left side"
        btnName="Click here"
        clickFn={clickThis}
      />
      <Rsheader
      title='This is Right Side Header'

      />
    </div>
  );
}

export default App;
