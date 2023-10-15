const food = [
    {
    name: "apple",
    type: ["cortland", "golden delicious", "fuji", "jonagold"],
    sweet: true,
    acidity: "moderate",
    },
    {
    name: "banana",
    type: ["apple banana", "cavendish", "manzano", "mysore"],
    sweet: true,
    acidity: "low",
    },
    {
    name: "kiwi",
    type: ["golden", "fuzzy", "artic", "silver vine"],
    sweet: false,
    acidity: "high",
    },
    {
    name: "grape",
    type: ["cotton candy", "red globe", "concord", "kyoho",],
    sweet: true,
    acidity: "moderate",
    },
];

/*const firstName = food.filter((food) => food.name)*/
food.forEach((food)=> console.log(food.name))

food.forEach((food) => food.type.forEach((type) => console.log(type)));

food
.filter((food)=> food.sweet)
.forEach((food)=>console.log(food.name));
