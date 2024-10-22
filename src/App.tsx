import "./App.css";
import Home from "./Home";
import Header from "./component/Header";
import Recipe from "./component/Recipe";
import { Container } from "@mui/material";
import NewRecipe from "./component/NewRecipe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipe">
            <Recipe />
          </Route>
          <Route path="/newRecipe">
            <NewRecipe />
          </Route>
        </Switch>

      </Container>
    </Router>
  );
}

export default App;
