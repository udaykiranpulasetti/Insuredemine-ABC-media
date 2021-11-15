import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components//Homepage/Homepage";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Login from "./components/login/Login";
import Gallary from "./components/Gallary/Gallary";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");
  const [privateUser, setPrivateUser] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Routes>
            {login && (
              <Route
                path="/login"
                element={
                  <Login
                    setUser={setUser}
                    setLogin={setLogin}
                    setPrivateUser={setPrivateUser}
                  />
                }
              />
            )}
          </Routes>
          <nav>
            {" "}
            <Nav
              login={login}
              setLogin={setLogin}
              privateUser={privateUser}
              setPrivateUser={setPrivateUser}
              setUser={setUser}
              user={user}
            />
          </nav>
        </header>

        <section>
          {" "}
          <Welcome user={user} />{" "}
        </section>

        <article>
          <Routes>
            {user !== "" && <Route path="/Home" element={<Homepage />} />}

            {user !== "" && <Route path="/About" element={<About />} />}

            {privateUser && <Route path="/Gallary" element={<Gallary />} />}
          </Routes>
        </article>
      </BrowserRouter>

      <footer>
        {user !== "" && <Footer />}
      </footer>
    </div>
  );
}

export default App;
