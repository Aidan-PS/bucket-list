
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center">
            <h1>Bucket List</h1>
        </div>
      </>
    );
  }
}

export default hot(App);