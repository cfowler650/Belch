let data = [
    {
        id: 1,
        name: "Burger King",
        distance: 10,
        followers: 15,
        hours: "6am-5pm",
        image: "/images/burger.jpg",
        menuItems: [
            {
                id: 10,
                restaurant: "Burger King",
                image: "/images/burger_small.jpg",
                name: "Patty Melt 2.0",
                rating: 5,
                reviews: [
                    {
                        id: 101,
                        author_id: 1001,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 102,
                        author_id: 1002,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 103,
                        author_id: 1003,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 11,
                restaurant: "Burger King",
                image: "/images/burger1.jpg",
                name: "Cheeseburger",
                rating: 5,
                reviews: [
                    {
                        id: 111,
                        author_id: 1011,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 112,
                        author_id: 1012,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 113,
                        author_id: 1013,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 12,
                restaurant: "Burger King",
                image: "/images/burger2.jpg",
                name: "Bacon Western",
                rating: 5,
                reviews: [
                    {
                        id: 121,
                        author_id: 1012,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 122,
                        author_id: 1013,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 123,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 13,
                restaurant: "Burger King",
                image: "/images/burger3.jpg",
                name: "Fried Calamari Burger",
                rating: 5,
                reviews: [
                    {
                        id: 131,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 132,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 133,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 14,
                restaurant: "Burger King",
                image: "/images/burger4.jpg",
                name: "Whopper McDouble",
                rating: 5,
                reviews: [
                    {
                        id: 141,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 142,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 143,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 15,
                restaurant: "Burger King",
                image: "/images/burger5.jpg",
                name: "Grilled Cheese Mushroom Sandwich",
                rating: 5,
                reviews: [
                    {
                        id: 151,
                        author_id: 10,
                        rating: 3,
                        description: "I love steak but this was subpar for sure"
                    },
                    {
                        id: 152,
                        author_id: 11,
                        rating: 4,
                        description: "Incredible meal what a treat this was!"
                    },
                    {
                        id: 153,
                        author_id: 12,
                        rating: 5,
                        description: "Probably the best food ever!"
                    }
                ]
            },
            {
                id: 19,
                restaurant: "Burger King",
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
                id: 20,
                restaurant: "Burger King",
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
        distance: "20 miles from you",
        followers: "20",
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
                id: 23,
                restaurant: "Arbys",
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
        distance: "7 miles from you",
        followers: "10",
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
        distance: "6 miles from you",
        followers: "8",
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
    }
];

export { data };
