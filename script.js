let menu = {
    _courses: {
       _appetizers: [],
       get appetizers() {
         return this._appetizers;
       },
       set appetizers(appetizersIn) {
         this._appetizers = appetizersIn;
       },
      _mains: [],
       get mains() {
         return this._mains;
       },
       set mains(mainsIn) {
         this._mains = mainsIn;
       },
      _desserts: [],
       get desserts() {
         return this._desserts;
       },
       set desserts(dessertsIn) {
         this._desserts = dessertsIn;
       },
     },
     
     get courses() {
       return {
         appetizers: this._courses.appetizers,
         mains: this._courses.mains,
         desserts: this._courses.desserts,
       };
   },
   
     addDishToCourse (courseName, dishName, dishPrice) {
       const dish = {
         name: dishName,
         price: dishPrice,
       };
       
       this._courses[courseName].push(dish);
     },
     
     getRandomDishFromCourse (courseName) {
       const dishes = this._courses[courseName];
       const randomIndex = Math.floor(Math.random() * dishes.length);
       return dishes[randomIndex];
     },
     
     generateRandomMeal() {
       const appetizer = this.getRandomDishFromCourse('appetizers');
       const main = this.getRandomDishFromCourse('mains');
       const dessert = this.getRandomDishFromCourse('desserts');
       const totalPrice = appetizer.price + main.price + dessert.price;
       return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The total price is EUR ${totalPrice}.`;
     },
   };
   
   menu.addDishToCourse('appetizers', 'Sunomono', 3.50);
   menu.addDishToCourse('appetizers', 'Carpaccio', 3.50);
   menu.addDishToCourse('appetizers', 'Carrot Soup', 3.50);
   
   menu.addDishToCourse('mains', 'Pad Thai', 6.50);
   menu.addDishToCourse('mains', 'Steak', 13.60);
   menu.addDishToCourse('mains', 'California Rolls', 8.50);
   
   menu.addDishToCourse('desserts', 'Chocolate Cake', 5.00);
   menu.addDishToCourse('desserts', 'Tiramissu', 2.35);
   menu.addDishToCourse('desserts', 'Tapioca', 4.25);
   
   let meal = menu.generateRandomMeal();
   
   console.log(meal);