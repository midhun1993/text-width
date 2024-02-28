const getTextWidth  = require('../index');
console.time("WidthStart");
console.log(getTextWidth("Lutman & Davies (1994) - Table 2 of Guidelines. 55 year old man on 50th Percentile", {
    fontSize: 12
}));
console.log(getTextWidth("Hello  World"));
console.log(getTextWidth("Hello  World"));
console.log(getTextWidth("Hello  World"));
console.log(getTextWidth("Hello  World"));
console.log(getTextWidth("Hello  World"));
console.log(getTextWidth("Hello  World"));
console.log(getTextWidth("Hello  World"));
console.log(getTextWidth("Hello  World"));
console.log(getTextWidth("Hello  World"));
console.timeEnd("WidthStart");