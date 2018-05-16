Station1 = {
    'name' : 'Kiev',
    'trainOn' : false,
    'trainArrive': false,
    'trainNumArrive': 0, 
    'quanPass':0
}

Station2 = {
    'name' : 'Boyarka',
    'trainOn' : false,
    'trainArrive': false,
    'trainNumArrive': 0, 
    'quanPass':0
}
Station3 = {
    'name' : 'Uman',
    'trainOn' : false,
    'trainArrive': false,
    'trainNumArrive': 0, 
    'quanPass':0
}
Station4 = {
    'name' : 'Cherkassy',
    'trainOn' : false,
    'trainArrive': false,
    'trainNumArrive': 0, 
    'quanPass':0
}
Station5 = {
    'name' : 'Kherson',
    'trainOn' : false,
    'trainArrive': false,
    'trainNumArrive': 0, 
    'quanPass':0
}
Station6 = {
    'name' : 'Odessa',
    'trainOn' : false,
    'trainArrive': false,
    'trainNumArrive': 0, 
    'quanPass':0
}
Station7 = {
    'name' : 'Dnepr',
    'trainOn' : false,
    'trainArrive': false,
    'trainNumArrive': 0, 
    'quanPass':0
}
Station8 = {
    'name' : 'Poltava',
    'trainOn' : false,
    'trainArrive': false,
    'trainNumArrive': 0, 
    'quanPass':0
}
Station9 = {
    'name' : 'Konotop',
    'trainOn' : false,
    'trainArrive': false,
    'trainNumArrive': 0, 
    'quanPass':0
}
Station10 = {
    'name' : 'Zaporizha',
    'trainOn' : false,
    'trainArrive': false,
    'trainNumArrive': 0, 
    'quanPass':0
}
Station11 = {
    'name' : 'Sumy',
    'trainOn' : false,
    'trainArrive': false,
    'trainNumArrive': 0, 
    'quanPass':0
}


var route1 = [Station1, Station2, Station3, Station4, Station5, Station6];

var route2 = [Station6, Station2, Station5, Station10, Station7, Station9, Station11];

var route3 = [Station9, Station4, Station3, Station6, Station11,  Station2, Station10];

function createView(obj) {
 var $result = $('<div></div>').addClass('station');
 var $name = $('<p></p>').text('Станция ' + obj.name)
              .addClass('stat__name');
 
 return $result.append($name);
};


function searchStation(array, search) {
  var i = array.length;
  while (i--) {
      if (array[i].name === search) {
         return i;
      }
  }
}

function trainMoovingRight (route, trainNum, quanPass, scoreBoard) {
    let time = 2000;
    let i = -1;
    let wait = false;
    return function() {
            if ( ++i < route.length ) {
              if  (route[i].trainNumArrive != trainNum && route[i].trainNumArrive != 0){ 
                  wait = true;
                    }
            
            if (!wait){
                route[i].trainOn = true,
                route[i].trainArrive = false;
                route[i].trainNumArrive = 0;
                route[i].quanPass = 0; 
                scoreBoard.append(createView(route[i]));
                
                if(i<route.length-1){
                    route[i+1].trainArrive = true;
                
                if (route[i+1].quanPass < quanPass) {                
                    route[i+1].trainNumArrive = trainNum;
                    route[i+1].quanPass = quanPass;
                    
                } else {
                    i--;
                }}}else{
                     scoreBoard.append(createView(route[i]));
                }

            setTimeout( arguments.callee, time );
               
            }else {
            trainMoovingLeft(route, trainNum, quanPass, scoreBoard);
            }
        }();

    };

function trainMoovingLeft (route, trainNum, quanPass, scoreBoard ) {
    
    let time = 2000;
    let i = route.length-1;
    let wait = false;
  
    return function() {
            if ( --i >-1 ) {
               if  (route[i].trainNumArrive != trainNum && route[i].trainNumArrive != 0){ 
                  wait = true;
              };
             if (!wait){
                route[i].trainArrive = false;
                route[i].trainNumArrive = 0;
                route[i].quanPass = 0; 
                scoreBoard.append(createView(route[i]));
              
                if(i>0){ 
                route[i-1].trainArrive = true;

                if (route[i-1].quanPass < quanPass) {                
                    route[i-1].trainNumArrive = trainNum;
                    route[i-1].quanPass = quanPass;
                   
                    
                } else {
                    i++;
                }}}else{
                     scoreBoard.append(createView(route[i]));
                }
                setTimeout( arguments.callee, 2000 );
            }
        }();
    };






let ss = new Date;
let sss = ss.getTime + 20000;

var  $scoreBoard1 = $('#train1');
var  $scoreBoard2 = $('#train2');
var  $scoreBoard3 = $('#train3');



trainMoovingRight(route1, 1, 95, $scoreBoard1);
trainMoovingRight(route2, 2, 36, $scoreBoard2);
trainMoovingRight(route3, 3, 87, $scoreBoard3);
