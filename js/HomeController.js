/**
 * Created by Chalith De Silva on 2017-09-11.
 */
// var stringArray=["A","B","C","D","E","F","G","H"];
// var numberArray=[1,2,3,4,5,6,7,8];

// var pieces;

// var whiteDraggable;
// var blackDraggable;
//
//
// $().ready(function () {
//     tiles=$(".square");
//     pieces=$(".groupimg");
//     whiteDraggable=true;
//     blackDraggable=false;
// });
//
// $('.groupimg').click(function (eventData) {
//     currentpiece=$(this);
//
//     if (!(currentpiece.hasClass('')) && currentpiece.hasClass('black') && currentpiece.hasClass('pawn')){
//        pathofBlackPawn(currentpiece);
//     }
// });

var letters=['A','B','C','D','E','F','G','H'];
var numbers=[1,2,3,4,5,6,7,8];

var currentPosition;
var groupimg;
var tiles;

var pondCount;
var CountArray=new Array(9);

$(document).ready(function () {
    tiles=$('.square');
    groupimg=$('.groupimg');
    // whiteDraggable=true;
    // blackDraggable=false;
    pondCount=0;
    for(var i=0;i<CountArray.length;i++){
        CountArray[i]=0;
    }

});
///////////////////////////////

$('.groupimg').on("click",function (eventData) {
    currentPosition=$(this);

    if (!(currentPosition.hasClass('clickpiece'))  && currentPosition.hasClass('blackPawn')){
      pondCount=0;
       pathofblackPone(currentPosition);
    }
    // if (!(currentPosition.hasClass('clickpiece'))  && currentPosition.hasClass('blackPawn')){
    //     pondCount=0;
    //     pathofwhitePone(currentPosition);
    // }
});

///////////////////////////////////////////////


///////////////////////////////////
function pathofblackPone(eventData) {
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    console.log("shfyghusdhfguf");
    groupimg.removeClass('clickpiece');
    var currID=currentPosition.parent().attr('id');
    console.log(currID);
    var letter=currID.charAt(0);
    var idNo=currID.charAt(1);

    var LettersArrayPosition=($.inArray(letter,letters));
    var numArrayPosition=($.inArray(parseInt(idNo),numbers));
    var tempId=letters[LettersArrayPosition]+numbers[numArrayPosition+1];
    var x=LettersArrayPosition;

    for (var y=numArrayPosition+1;y<4;y++){
        tempId=letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        else {
            break;
        }
    }

    if (!($("#"+tempId).children().hasClass('groupimg'))){
        $("#"+tempId).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
}

///////////////////////////////////
$(".square").on("click",function (eventData) {
    var currentSquare=$(this);

    var currentPosition=$(".groupimg.clickpiece");
    if($(currentSquare).hasClass('selectpath')){
        currentSquare.append(currentPosition);
        groupimg.removeClass('clickpiece');
        tiles.removeClass('selectpath');
    }
});