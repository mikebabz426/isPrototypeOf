function isPrototypeOf(parent, child) {
  var directParent = Object.getPrototypeOf(child);
  //Check to see if Child has prototype in the first place
  if (Object.getPrototypeOf(child) === null) {
    return false;
  }

  //Recursive Case
  if (directParent !== parent) {
    return isPrototypeOf(parent, directParent);

    //Base Case:
  } else if (directParent === parent) {
    return true;
  } else {
    return false;
  }
}

tests({
  "It should return true if the parent element is the prototype of the child": function () {
    var ford = {};
    ford.efficiency = "non-existent";
    ford.reliability = "questionable";

    var shelbyCobra = Object.create(ford);
    shelbyCobra.speed = "ludicrous";
    shelbyCobra.color = "black";

    var result = isPrototypeOf(ford, shelbyCobra);
    seq(result, true);
  },
  "It should return false if the child element has no prototype (is set to null) ": function () {
    var empty = Object.create(null);
    var regObject = {};
    var result = isPrototypeOf(regObject, empty);
    seq(result, false);
  },
  "It should work for any number of prototype links ": function () {
    var car = {
      wheels: "four",
      engine: true,
    };
    var ford = Object.create(car);
    ford.efficiency = "non-existent";
    ford.reliability = "questionable";

    var shelbyCobra = Object.create(ford);
    shelbyCobra.speed = "ludicrous";
    shelbyCobra.color = "black";

    var result = isPrototypeOf(car, shelbyCobra);
    seq(result, true);
  },
  "It should be able to work for any number of prototype links up to Object.prototype": function () {
    var car = {
      wheels: "four",
      engine: true,
    };
    var ford = Object.create(car);
    ford.efficiency = "non-existent";
    ford.reliability = "questionable";

    var shelbyCobra = Object.create(ford);
    shelbyCobra.speed = "ludicrous";
    shelbyCobra.color = "black";

    var result = isPrototypeOf(Object.prototype, shelbyCobra);
    seq(result, true);
  },
});
