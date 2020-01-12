let Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  
      let fullName = firstAndLast.split(' ');
  
    this.getFullName = function() {
      return fullName.join(' ');
    };
  
    this.getFirstName = function() {
      return fullName[0];
    }
  
    this.getLastName = function() {
      return fullName[1];
    }
  
    this.setFirstName = function(newFirst){
      fullName[0] = newFirst;
      return fullName.join(' ');
    }
  
    this.setLastName = function(newLast){
      fullName[1] = newLast;
      return fullName.join(' ');
    }
  
    this.setFullName = function(newFirstAndLast) {
      fullName = newFirstAndLast.split(' ');
      return fullName.join(' ')
    }
      
  };
  
let bob = new Person('Bob Ross');
bob.getFullName(); // returns 'Bob Ross'
bob.getFirstName(); // returns 'Bob'
bob.getLastName(); // returns 'Ross'

console.log(bob.setFirstName("Jack")); 
bob.setLastName("London"); 
console.log(bob.setFullName("Josh McDaniels")); 
