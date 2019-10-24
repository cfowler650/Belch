import React from "react";
import { Link } from "react-router-dom";
import StyledMenuPage from "../styles/StyledMenuPage";
import axios from "axios";

class RestaurantMenuPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: []
        };
    }

    componentDidMount() {
        axios
            .get(
                `/api/restaurants/${this.props.match.params.restaurantId}.json`
            )
            .then(data => {
                let res = [];
                data.data.menuItems.map(item => {
                    res.push({
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        image: item.image,
                        reviews: item.reviews,
                        res_name: data.data.name
                    });
                    this.setState({ dishes: res });
                });
            })
            .catch(data => {
                console.log('error')
            });


        window.scrollTo(0, 0)

    }

    handleReturnToMenu() {
        this.props.history.goBack();
    }

    render() {
        return (
            <StyledMenuPage>
                <div className="background" style={{ position: "fixed", display: "flex", justifyContent: "center" }} >
                    <div className="behind" style={{}}>
                        <div className="res-name-container">
                            <h1 style={{ fontSize: "40px", color: "white" }}>
                                {this.state.dishes[0] !== undefined ? <>{this.state.dishes[0].res_name}</> : <p>Loading...</p>}
                            </h1>
                        </div>
                    </div>
                </div>


                <div className="main-container" style={{ margin: "0" }}>
                    <div className="sticky-container" >
                        <div className="sticky-bar" id='sticky-bar-1'>
                            <div className="content-top">
                                <div className="belch-title-div" style={{}}>
                                    <Link to={'/'}><h1 style={{ margin: 0, paddingLeft: "128px" }} className="belch-title"> Belch </h1></Link>
                                </div>
                            </div>

                            <div className="top-content-container-window" style={{ marginTop: "250px" }}>{/*this is window container size */}
                            </div>
                        </div>


                        <div className="sticky-container-2">
                            <div className="sticky-bar" id='sticky-bar-2'>
                                <div className="belch-title-div">
                                    <div className="restaurant-h1-div">
                                        <h2 className="restaurant-h1" style={{fontSize: "24px", paddingTop: "2%"}}>Popular Items </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="main-content-contains" style={{paddingLeft: "105px", paddingRight:"105px"}}>
                                <div className="new-container">

                              { this.state.dishes.map(dish => (
                                    <div className="card-container" style={{display: "flex"}} key={dish.id}>
                                        <div className="card-content" style={{display: "flex", justifyContent: "space-between", padding: "20px 20px 15px"}}>
                                            <div className="card-text-1" style={{color: "white"}}>
                                                <Link to={`${this.props.match.url}/${dish.id}`}>
                                                     <h3 className="dish-title">  {dish.name} </h3>
                                                </Link>
                                                <div className="card-description">  {dish.description.substr(0, 100)}...
                                                </div>
                                                <div className="card-price" style={{color: "white"}}>
                                                    <span>$8.39</span>
                                                </div>
                                            </div>
                                        </div>
                                         <div className="card-image-div" style={{padding: "2px"}}>
                                            <div style={{width: "128px", height: "128px"}} >
                                                <img src={dish.image} style={{width: "100%"}}/>
                                            </div>
                                         </div>
                                    </div>
                              ))}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledMenuPage>
        );
    }
}

export default RestaurantMenuPage;

