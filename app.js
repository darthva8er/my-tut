console.log('hi');
var addMe = function() {
            var i = arguments[0]+arguments[1];
            return i;
}
var newValue = addme(1,2);
console.log(newValue);