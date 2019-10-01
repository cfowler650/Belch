import React from "react";
//plugins
import { HashRouter as Router, Route, Switch } from "react-router-dom";
//components
import Home from "./Home";
import RestaurantPage from "./RestaurantPage";
import RestaurantMenuPage from "./RestaurantMenuPage";
import { RestaurantProvider } from "./RestaurantContext";
import DishPage from "./DishPage";
import Nav from "./Nav";

function App() {
    return (
        <Router>
            <RestaurantProvider>
                <Nav />
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
        </Router>
    );
}

export default App;
