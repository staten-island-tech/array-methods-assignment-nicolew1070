const food = [
    {
    name: "apple",
    type: ["cortland", "golden delicious", "fuji", "jonagold"],
    taste: "sweet",
    acidity: "moderate",
    },
    {
    name: "banana",
    type: ["apple banana", "cavendish", "manzano", "mysore"],
    taste: "sweet",
    acidity: "low",
    },
    {
    name: "kiwi",
    type: ["golden", "fuzzy", "artic", "silver vine"],
    taste: "sour",
    acidity: "high",
    },
    {
    name: "grape",
    type: ["cotton candy", "red globe", "concord", "kyoho",],
    taste: "sweet",
    acidity: "moderate",
    },
];

/*const firstName = food.filter((food) => food.name)*/

food.forEach((food) => food.name.forEach((firstName)=> console.log(firstName)));