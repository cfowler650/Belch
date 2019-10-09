let data = [
    {
        id: 1,
        name: "Burger King",
        hours: "6am-5pm",
        image: "/images/burger.jpg",
        menuItems: [
            {
                id: 1,
                restaurant: "Burger King",
                image: "/images/burger_small.jpg",
                name: "Dish 0",
                rating: 5,
                details: `This burger is a whopping 5lbs, tomato, lettuce, grilled onion, pickled shallots, and to top it all off a delicious home made ciabatta baked fresh every morning in house.
                    Enjoy this burger with a side of fries on the house. Dont forget the delicious melted swiss cheese`,
                reviews: [
                    {
                        id: 1,
                        author_id: 23123,
                        author: "Blake Griffin",
                        description:
                            "Loved it loved it loved it! This was the best food I've had in decades. Great!",
                        rating: 1
                    },
                    {
                        id: 2,
                        author_id: 23123,
                        author: "Hubert Cumberdale",
                        description:
                            "This food was alright..kind of smelly, actually not that big of a fan oh well.",
                        rating: 2
                    },
                    {
                        id: 3,
                        author_id: 23123,
                        author: "Carl Swan",
                        rating: 3,
                        description:
                            "Absolutely incredibly this food amazing! four stars in my book I will be returning"
                    },
                    {
                        id: 4,
                        author_id: 23123,
                        author: "Courage Marley",
                        rating: 4,
                        description: "Yah man I totally dig it.."
                    },
                    {
                        id: 5,
                        author_id: 23123,
                        author: "Jake Morice",
                        rating: 5,
                        description:
                            "It's not just bad, its sad. This food was actually sad. I can't sleep at night thanks to this joint."
                    },
                    {
                        id: 6,
                        author_id: 23123,
                        author: "Charlie Brown",
                        rating: 4,
                        description:
                            "Realy let down here, its been a week and the taste has yet to leave my mouth what a disgrace of a company"
                    }
                ]
            },
            {
                id: 11,
                restaurant: "Burger King",
                image: "/images/burger1.jpg",
                name: "Dish 1",
                rating: 5,
                details: `This burger is a whopping 5lbs, tomato, lettuce, grilled onion, pickled shallots, and to top it all off a delicious home made ciabatta baked fresh every morning in house.
                    Enjoy this burger with a side of fries on the house. Dont forget the delicious melted swiss cheese`,
                reviews: [
                    {
                        id: 111,
                        author_id: 1011,
                        author: "Blake Griffin",
                        rating: 3,
                        description: "I love steak grand lio"
                    },
                    {
                        id: 112,
                        author_id: 1012,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 113,
                        author_id: 1013,
                        author: "Hubert Cumberdale",
                        rating: 2,
                        description: "Probably the best food ever!"
                    },
                    {
                        id: 1002,
                        author_id: 23123333,
                        author: "Charlise Brown",
                        rating: 5,
                        description:
                            "Realy let down here, its been a week and the taste has yet to leave my mouth what a disgrace of a company"
                    },
                    {
                        id: 62323,
                        author_id: 23123,
                        author: "Carmen Crow",
                        rating: 1,
                        description:
                            "Realy let down here, its been a week and the taste has yet to leave my mouth what a disgrace of a company"
                    }
                ]
            },
            {
                id: 12,
                restaurant: "Burger King",
                image: "/images/burger2.jpg",
                name: "Dish 2",
                rating: 5,
                details: `This burger is a whopping 5lbs, tomato, lettuce, grilled onion, pickled shallots, and to top it all off a delicious home made ciabatta baked fresh every morning in house.
                    Enjoy this burger with a side of fries on the house. Dont forget the delicious melted swiss cheese`,
                reviews: [
                    {
                        id: 121,
                        author_id: 1012,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 122,
                        author_id: 1013,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 123,
                        author_id: 12,
                        author: "Hubert Cumberdale",
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 13,
                restaurant: "Burger King",
                image: "/images/burger3.jpg",
                name: "Dish 3",
                rating: 5,
                details: `This burger is a whopping 5lbs, tomato, lettuce, grilled onion, pickled shallots, and to top it all off a delicious home made ciabatta baked fresh every morning in house.
                    Enjoy this burger with a side of fries on the house. Dont forget the delicious melted swiss cheese`,
                reviews: [
                    {
                        id: 131,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 132,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 133,
                        author_id: 12,
                        author: "Hubert Cumberdale",
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 14,
                restaurant: "Burger King",
                image: "/images/burger4.jpg",
                name: "Dish 4",
                rating: 5,
                details: `This burger is a whopping 5lbs, tomato, lettuce, grilled onion, pickled shallots, and to top it all off a delicious home made ciabatta baked fresh every morning in house.
                    Enjoy this burger with a side of fries on the house. Dont forget the delicious melted swiss cheese`,
                reviews: [
                    {
                        id: 141,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 142,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 143,
                        author_id: 12,
                        author: "Hubert Cumberdale",
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 15,
                restaurant: "Burger King",
                image: "/images/burger5.jpg",
                name: "Dish 5",
                rating: 5,
                details: `This burger is a whopping 5lbs, tomato, lettuce, grilled onion, pickled shallots, and to top it all off a delicious home made ciabatta baked fresh every morning in house.
                    Enjoy this burger with a side of fries on the house. Dont forget the delicious melted swiss cheese`,
                reviews: [
                    {
                        id: 151,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 152,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 153,
                        author_id: 12,
                        author: "Hubert Cumberdale",
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 19,
                restaurant: "Burger King",
                image: "/images/burger6.jpg",
                name: "Dish 6",
                rating: 5,
                details: `This burger is a whopping 5lbs, tomato, lettuce, grilled onion, pickled shallots, and to top it all off a delicious home made ciabatta baked fresh every morning in house.
                    Enjoy this burger with a side of fries on the house. Dont forget the delicious melted swiss cheese`,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        author: "Hubert Cumberdale",
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 20,
                restaurant: "Burger King",
                image: "/images/burger7.jpg",
                name: "Dish 7",
                rating: 5,
                details: `This burger is a whopping 5lbs, tomato, lettuce, grilled onion, pickled shallots, and to top it all off a delicious home made ciabatta baked fresh every morning in house.
                    Enjoy this burger with a side of fries on the house. Dont forget the delicious melted swiss cheese`,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 21,
                restaurant: "Burger King",
                image: "/images/burger8.jpg",
                name: "Dish 8",
                rating: 5,
                details: `This burger is a whopping 5lbs, tomato, lettuce, grilled onion, pickled shallots, and to top it all off a delicious home made ciabatta baked fresh every morning in house.
                    Enjoy this burger with a side of fries on the house. Dont forget the delicious melted swiss cheese`,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Arbys",
        hours: "7am-6pm",
        image: "/images/arbys.jpg",
        menuItems: [
            {
                id: 22,
                restaurant: "Arbys",
                image: "/images/burger_small.jpg",
                name: "Patty Melt 2.0",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        author: "Hubert Cumberdale",
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 23,
                restaurant: "Arbys",
                image: "/images/burger1.jpg",
                name: "Cheeseburger",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 24,
                restaurant: "Arbys",
                image: "/images/burger2.jpg",
                name: "Bacon Western",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 25,
                restaurant: "Arbys",
                image: "/images/burger3.jpg",
                name: "Fried Calamari Burger",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 26,
                restaurant: "Arbys",
                image: "/images/burger4.jpg",
                name: "Whopper McDouble",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 27,
                restaurant: "Arbys",
                image: "/images/burger5.jpg",
                name: "Grilled Cheese Mushroom Sandwich",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 28,
                restaurant: "Arbys",
                image: "/images/burger6.jpg",
                name: "Triple Mcdobule",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 29,
                restaurant: "Arbys",
                image: "/images/burger7.jpg",
                name: "Heartstopper Whopper",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 30,
                restaurant: "Arbys",
                image: "/images/burger8.jpg",
                name: "BBQ Western",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Pizza Hut",
        hours: "9am-7pm",
        image: "/images/pizza.jpg",
        menuItems: [
            {
                id: 31,
                restaurant: "Pizza Hut",
                image: "/images/burger_small.jpg",
                name: "Patty Melt 2.0",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 32,
                restaurant: "Pizza Hut",
                image: "/images/burger1.jpg",
                name: "Cheeseburger",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 33,
                restaurant: "Pizza Hut",
                image: "/images/burger2.jpg",
                name: "Bacon Western",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 34,
                restaurant: "Pizza Hut",
                image: "/images/burger3.jpg",
                name: "Fried Calamari Burger",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 35,
                restaurant: "Pizza Hut",
                image: "/images/burger4.jpg",
                name: "Whopper McDouble",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 36,
                restaurant: "Pizza Hut",
                image: "/images/burger5.jpg",
                name: "Grilled Cheese Mushroom Sandwich",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 37,
                restaurant: "Pizza Hut",
                image: "/images/burger6.jpg",
                name: "Triple Mcdobule",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 38,
                restaurant: "Pizza Hut",
                image: "/images/burger7.jpg",
                name: "Heartstopper Whopper",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        author: "Hubert Cumberdale",
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 39,
                restaurant: "Pizza Hut",
                image: "/images/burger8.jpg",
                name: "BBQ Western",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            }
        ]
    },
    {
        id: 4, //react uses these id's as keys for identifying uniqueness
        name: "Dennys",
        hours: "9am-9pm",
        image: "/images/eggs.jpg",
        menuItems: [
            {
                id: 40,
                restaurant: "Dennys",
                image: "/images/burger_small.jpg",
                name: "Patty Melt 2.0",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 41,
                restaurant: "Dennys",
                image: "/images/burger1.jpg",
                name: "Cheeseburger",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 42,
                restaurant: "Dennys",
                image: "/images/burger2.jpg",
                name: "Bacon Western",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 43,
                restaurant: "Dennys",
                image: "/images/burger3.jpg",
                name: "Fried Calamari Burger",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 44,
                restaurant: "Dennys",
                image: "/images/burger4.jpg",
                name: "Whopper McDouble",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 45,
                restaurant: "Dennys",
                image: "/images/burger5.jpg",
                name: "Grilled Cheese Mushroom Sandwich",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 46,
                restaurant: "Dennys",
                image: "/images/burger6.jpg",
                name: "Triple Mcdobule",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 47,
                restaurant: "Dennys",
                image: "/images/burger7.jpg",
                name: "Heartstopper Whopper",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 48,
                restaurant: "Dennys",
                image: "/images/burger8.jpg",
                name: "BBQ Western",
                rating: 5,
                reviews: [
                    {
                        id: 22,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 23,
                        author_id: 11,
                        author: "Hubert Cumberdale",
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 24,
                        author_id: 12,
                        author: "Hubert Cumberdale",
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            }
        ]
    }
];

export { data };
