import React from "react";

//plugins
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//components
import Home from "./components/Home";
import RestaurantPage from "./components/RestaurantPage";
import RestaurantMenuPage from "./components/RestaurantMenuPage";
import { RestaurantProvider } from "./RestaurantContext";
import DishPage from "./components/DishPage";
import GlobalStyle from "./styles/GlobalStyle";

class App extends React.Component {
    render() {
        return (
            <Router>
                <RestaurantProvider>
                    <div className="App">
                        <Switch>
                            <Route exact path="/" component={Home} />

                            <Route
                                exact
                                path="/restaurant_page"
                                component={RestaurantPage}
                            />

                            <Route
                                exact
                                path={`/restaurant_page/:restaurantId`}
                                component={RestaurantMenuPage}
                            />

                            <Route
                                exact
                                path={`/restaurant_page/:restaurantId/:dishId`}
                                component={DishPage}
                            />
                        </Switch>
                    </div>
                </RestaurantProvider>
                <GlobalStyle />
            </Router>
        );
    }
}

export default App;
