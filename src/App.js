import React from 'react';
import './App.css';
import { BrowserRouter as Router,Link} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="container">
              <div className="content">
                  <div className="left">
                      <h2 className="header">Learn to code by
                          <br/>
                          teaching others
                      </h2>
                      <p className="paragraph">
                          See how experienced developers solve problems in real-time.
                          <br/>Watching scripted tutorials is great, but understanding how
                          <br/>developers think is invaluable.
                      </p>
                  </div>
                  <div className="right">
                      <button className="try">
                          <b>Try it free 7 days</b> then $20/mo.
                      </button>
                      <form className="form-box">
                          <div className="inputBox">
                              <input type="text" placeholder="First Name"/>
                              <input type="text" placeholder="Last Name"/>
                              <input type="email" placeholder="Email Address"/>
                              <input type="password" placeholder="Password"/>
                              <button className="submit">claim your free trial</button>
                              <p className="text">By clicking the button, you are agreeing to our <Link to="">Terms and Services</Link>
                              </p>
                          </div>

                      </form>
                  </div>
              </div>

          </div>
      </Router>

  );
}

export default App;
