const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
};

// Add methods to prototype
ScranAdvisor.prototype.countRestaurants = function(){
    return this.restaurants.length;
};

ScranAdvisor.prototype.findRestaurantByName = function(restaurantName){
    return this.restaurants.filter((restaurant) => restaurant.name === restaurantName)[0];
};

ScranAdvisor.prototype.findNameOfAllRestaurants = function(){
    return this.restaurants.map((restaurant) => restaurant.name);
};

ScranAdvisor.prototype.findRestaurantByTown = function(townName){
    return this.restaurants.filter((restaurant) => restaurant.location.town === townName);
};

ScranAdvisor.prototype.findMostCommonCuisine = function(){
    // create empty object for storing key-value pairs
    // key - cuisine
    // value - number of restaurant's with that cuisine
    let cuisineCounts = {};
    // iterate through each restaurant
    this.restaurants.forEach((restaurant) => {
        // iterate through each cuisine in the cuisine list of each restaurant
        restaurant.cuisines.forEach((cuisine) => {
            // check if cuisine is not in the object cuisineCounts
            // if so, set it to one
            if (!(cuisine in cuisineCounts)) {
                cuisineCounts[cuisine] = 1;
                // if it is in the cuisineCounts, increment it's value by one
            } else {
                cuisineCounts[cuisine] += 1;
            }
        });
    });

    // declare empty variable for most common cuisine
    let mostCommonCuisine;
    // declare highest cuisine count to be zero
    let highestCount = 0;
    // iterate through cuisines in cuisineCounts object
    for (let cuisine in cuisineCounts) {
        // check if the cuisine is higher than the highest cuisine count
        if (cuisineCounts[cuisine] > highestCount) {
            // if so, set the highest count to be the current cuisine count
            highestCount = cuisineCounts[cuisine];
            // change the most common cuisine to the current cuisine
            mostCommonCuisine = cuisine;
        }
    }
    return mostCommonCuisine;
};

// takes in a substring
ScranAdvisor.prototype.searchBySubstring = function(subString){
    // filter to create a new list containing all of the restaurant objects containing the substring
    // map to return a list containing the name of each restaurant in the list of objects
    // case insensitivity by changing restaurant name and substring to lower case
    return this.restaurants.filter((restaurant) => 
        restaurant.name.toLowerCase().includes(subString.toLowerCase())).map((restaurant) => restaurant.name);
};

module.exports = ScranAdvisor;