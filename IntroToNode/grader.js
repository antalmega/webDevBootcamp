function average(arr){
    var sum = 0;
    arr.forEach(function(num){
        sum += num;
    });
    var av = sum / arr.length;
    return Math.round(av);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68