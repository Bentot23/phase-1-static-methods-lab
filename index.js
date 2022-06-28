class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  };
  static titleize(sentence) {
    let preposition = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
    return sentence.split(" ").map(elem => {
      if (preposition.includes(elem) && (sentence.indexOf(elem) != 0)) {
        return elem;
      }
      return elem[0].toUpperCase() + elem.slice(1);
    }).join(" ");
  };
}

// const sentence1 = new Sentence("Chicken Soup With Rice and a Few Other Songs");
console.log(Formatter.capitalize( "alligator" ));
console.log(Formatter.capitalize( "BURSTING BALLOON" ));
console.log(Formatter.sanitize("ca$@#tching cold"));
console.log(Formatter.sanitize( "Doin' Dishes" ));
console.log(Formatter.sanitize( "Entert*ain(i{ng-Elephan^ts" ));
console.log(Formatter.titleize( "getting giggles" ));
console.log(Formatter.titleize( "where the wild things are" ));
console.log(Formatter.titleize( "chicken soup with rice and a few other songs" ));
console.log(Formatter.titleize( "Maurice a an but of and for at by from end" ));

console.log(Formatter.titleize( "a tale of two cities" ));
console.log(Formatter.titleize( "in the night kitchen" ));
console.log(Formatter.titleize("Chicken Soup With Rice and a Few Other Songs"));
console.log(Formatter.titleize("a tale of two cities"));