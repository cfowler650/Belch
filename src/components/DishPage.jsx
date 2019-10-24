import React from "react";
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
        if (firstRender !== false) {
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


        return (
            <StyledDishPage>
                <>
                    <div className="nav-bar">
                        <div className="belch-title-div" style={{ flex: 1 }}>
                            <Link to={'/'}><h1 className="belch-title" style={{paddingLeft: "128px"}}> Belch </h1></Link>
                        </div>
                        <div className="menu-btn-div">
                            <button className="menu-btn" onClick={this.handleReturnToMenu}>
                                Back To Menu
                            </button>
                        </div>
                        <div className="right-divider" style={{ flex: 1 }}>
                        </div>
                    </div>
                    {thisDish ? (
                        <div className="dish-page-container" style={{ textAlign: "center" }}>
                            <div className="test">

                                <div className="dish-container">
                                    <h1 className="dish-name-h1">{thisDish.name}</h1>
                                    <div className="flex-box">
                                         <div className="left-arrow" style={{color: "white", width: "120px"}}>
                                          </div>
                                          <div className="left-arrow"  onClick={this.prevDish}style={{color: "white", width: "300px", cursor: "pointer"}}>
                                            <i className="fa fa-arrow-circle-left" style={{fontSize: "40px"}}></i>
                                          </div>
                                        <img
                                            className="main-dish-image"
                                            src={thisDish.image}
                                        />
                                        <div className="right-arrow"  onClick={this.nextDish}style={{color: "white", width: "300px", cursor: "pointer"}}>
                                            <i className="fa fa-arrow-circle-right" style={{fontSize: "40px"}}></i>
                                        </div>
                                         <div className="right-arrow" style={{color: "white", width: "120px"}}>
                                        </div>
                                    </div>
                                </div>



                                <div className="bottom-content-container">
                                    <ReviewsController reviews={thisDish.reviews} />
                                </div>


                            </div>
                        </div>

                    ) : (


                         <div>Loading...</div>

                        )}
                    <div className="footer">Footer</div>
                </>
            </StyledDishPage>
        );
    }
}


export default DishPage;
