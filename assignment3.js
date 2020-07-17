 //feetToMile
 
 function feetToMile(feet){
    if (feet<0) {
        return "invalid input";
        
    }
    var mile = feet/5280;
    return mile
   
   }


//woodCalculator

function woodCalculator(chairs, table, bed) {
     var chairWood= chairs*1;
     var tableWood= table*3;
     var bedWood= bed*5;
     var wood= chairWood + tableWood + bedWood;
     return wood;
     
 }

//brickCalculator

function brickCalculator(floor) {

    var firstThreshold = 10 * 15 * 1000 ;
    var secThreshold =  10 * 12 * 1000;
    if (floor>0 && floor <= 10) {
        brick = floor * 15 * 1000;

    }
    else if (floor > 10 && floor <= 20) {
        brick = (floor - 10) * 12 * 1000 +  firstThreshold;
        ;

    }
    else if (floor > 20) {
        brick = (floor - 20) * 10 * 1000 + secThreshold + firstThreshold;

    }
    else{
        return 'invalid input';
    }
   
    return brick;

}


//tinyFriend

function tinyFriend(bench) {
    var min = bench[0].length;
    for (var i = 0; i < bench.length; i++) {
        if (bench[i].length < min) {
            min = bench[i].length;
           var chuto = bench[i];
        }

    }
    return chuto;
}



