import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./ui/Theme";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => (
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>iOS/Android Apps</div>}
          />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>The Revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div>Contact Us</div>}
          />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
// div className="App"
