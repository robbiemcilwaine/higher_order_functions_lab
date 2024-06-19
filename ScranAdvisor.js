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
    cuisineCounts = {};
    // iterate through each restaurant
    this.restaurants.forEach((restaurant) => {
        // iterate through each cuisine in the cuisine list of each restaurant
        console.log(cuisineCounts);
        restaurant.cuisines.forEach((cuisine) => {
            // check if cuisine is not in the object cuisineCounts
            // if so, set it to one
            if (!('cuisine' in cuisineCounts)) {
                cuisineCounts[cuisine] = 1;
                // if it is in the cuisineCounts, increment it's value by one

                // this condition is never fulfilled
            } else {
                cuisineCounts[cuisine] += 1;
            }
        });
    });
    return cuisineCounts;
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