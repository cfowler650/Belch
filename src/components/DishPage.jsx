import React, { useState, useContext, useEffect } from "react";
import { RestaurantContext } from "../RestaurantContext";
import { Link } from "react-router-dom";
import ReviewsController from "./ReviewsController";
import StyledDishPage from "../styles/StyledDishPage";
import axios from "axios";

class DishPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: [],
            currentDishIDX: []
        };

        this.nextDish = this.nextDish.bind(this);
        this.prevDish = this.prevDish.bind(this);
        this.handleReturnToMenu = this.handleReturnToMenu.bind(this);
    }

    handleFetch(firstRender) {
        if (firstRender != false) {
            axios
                .get(
                    `/api/restaurants/${this.props.match.params.restaurantId}.json`
                )
                .then(data => {
                    let res = [];
                    let selectedDishIDX = data.data.menuItems.findIndex(
                        dish =>
                            dish.id === parseInt(this.props.match.params.dishId)
                    );
                    data.data.menuItems.map(item => {
                        ///prefix data.data to access actual return value
                        res.push({
                            id: item.id,
                            name: item.name,
                            description: item.description,
                            image: item.image,
                            reviews: item.reviews
                        });
                        this.setState({ dishes: res });
                        // this.setState({ dishesLength: res.length - 1 });
                        this.setState({
                            currentDishIDX: selectedDishIDX
                        });
                    });
                })
                .catch(data => {
                    debugger;
                });
        }
    }

    componentDidMount() {
        this.handleFetch();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentDishIDX !== this.state.currentDishIDX) {
            this.handleFetch(false);
        }
    }

    nextDish() {
        if (this.state.currentDishIDX != this.state.dishes.length - 1) {
            this.setState({ currentDishIDX: this.state.currentDishIDX + 1 });
        }
    }

    prevDish() {
        if (this.state.currentDishIDX > 0) {
            this.setState({ currentDishIDX: this.state.currentDishIDX - 1 });
        }
    }

    handleReturnToMenu() {
        this.props.history.goBack();
    }

    render() {
        const { match, history } = this.props;
        const { dishes } = this.state;
        let thisDish = dishes[this.state.currentDishIDX];
        console.log("thisDish", thisDish);
        // console.log(dishes[0]);

        return (
            <StyledDishPage>
                <>
                  <div className="nav-bar">
                            <div className="belch-title-div">
                                <Link to={'/'}><h1 className="belch-title"> Belch </h1></Link>
                            </div>
                   </div>
                    {thisDish ? (
                        <div
                            className="dish-page-container"
                            style={{ textAlign: "center" }}
                        >
                            <div className="test">
                                    <div className="dish-button-group">
                                        <button onClick={this.handleReturnToMenu}>
                                            Restaurants
                                        </button>
                                        <button onClick={this.prevDish}>
                                            Prev Dish
                                        </button>
                                        <button onClick={this.nextDish}>
                                            Next Dish
                                        </button>
                                    </div>

                                    <div className="dish-container">
                                        <h1>{thisDish.name}</h1>
                                        <img
                                            className="main-dish-image"
                                            src={thisDish.image}
                                        />
                                    </div>

                                    <div className="bottom-content-container">
                                        <ReviewsController reviews={thisDish.reviews} />
                                    </div>
                            </div>
                        </div>

                    ) : (
                        <div>Loading...</div>
                    )}
                </>
            </StyledDishPage>
        );
    }
}

// function DishPage({ match, history }) {
//     const [restaurants, setRestaurants] = useContext(RestaurantContext);
//     const [newRestaurants, setNewRestaurants] = useState([]);

//     useEffect(async () => {
//         const response = await fetch(`/api/restaurants/1`);
//         const data = await response.json();
//         const data2 = data;
//         setNewRestaurants(data2);
//     }, []);

//     const API = `/api/restaurants/${match.params.restaurantId}.json`;
//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await axios(API);
//             console.log("datainsideuseeffect", result.data);
//             setNewRestaurants(result.data);
//         };
//         fetchData();
//     }, []);

//     console.log("newRest", newRestaurants);

//     const [currentDishIndex, setcurrentDishIndex] = useState(initState());

//     const nextDish = () => {
//         if (currentDishIndex != menu.length - 1) {
//             setcurrentDishIndex(currentDishIndex + 1);
//         }
//     };

//     const prevDish = () => {
//         if (currentDishIndex != 0) {
//             setcurrentDishIndex(currentDishIndex - 1);
//         }
//     };

//     const handleReturnToMenu = () => {
//         history.goBack();
//     };

//     let thisDish = menu[currentDishIndex];

//     let thisDish = newRestaurants.menuItems
//         ? newRestaurants.menuItems[currentDishIndex]
//         : false;

//     return (
//         <StyledDishPage>
//             <div
//                 className="dish-page-container"
//                 style={{ textAlign: "center" }}
//             >
//                 <div className="dish-button-group">
//                     <button onClick={handleReturnToMenu}>Menu</button>
//                     <button onClick={prevDish}>Prev Dish</button>
//                     <button onClick={nextDish}>Next Dish</button>
//                 </div>

//                 {newRestaurants.menuItems ? (
//                     <>
//                         <div className="dish-container">
//                             <h1>{thisDish.name}</h1>
//                             <img
//                                 className="main-dish-image"
//                                 src={thisDish.image}
//                             />
//                         </div>

//                         <div className="bottom-content-container">
//                             <ReviewsController reviews={thisDish.reviews} />
//                         </div>
//                     </>
//                 ) : (
//                     <div></div>
//                 )}
//             </div>

//             <div>
//                 {newRestaurants.menuItems
//                     ? newRestaurants.menuItems[0].name
//                     : console.log("i am not yetundefined")}
//             </div>
//         </StyledDishPage>
//     );
// }

export default DishPage;
