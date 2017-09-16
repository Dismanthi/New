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
    if (!(currentPosition.hasClass('clickpiece'))  && currentPosition.hasClass('whitePawn')){
        pondCount=0;
        pathofwhitePone(currentPosition);
    }
    if (!(currentPosition.hasClass('clickpiece')) && currentPosition.hasClass('blackRook')){
        pathofblackRook(currentPosition);
    }
    if (!(currentPosition.hasClass('clickpiece')) && currentPosition.hasClass('whiteRook')){
        pathofwhiteRook(currentPosition);
    }
    if (!(currentPosition.hasClass('clickpiece')) && currentPosition.hasClass('blackBishop')){
        pathofblackBishop(currentPosition);
    }
    if (!(currentPosition.hasClass('clickpiece')) && currentPosition.hasClass('whiteBishop')){
        pathofwhiteBishop(currentPosition);
    }
    if (!(currentPosition.hasClass('clickpiece')) && currentPosition.hasClass('blackKnight')){
        pathofblackKnight(currentPosition);
    }
    if (!(currentPosition.hasClass('clickpiece')) && currentPosition.hasClass('whiteKnight')){
        pathofwhiteKnight(currentPosition);
    }
    if (!(currentPosition.hasClass('clickpiece')) && currentPosition.hasClass('blackQueen')){
        pathofblackQueen(currentPosition);
    }
    if (!(currentPosition.hasClass('clickpiece')) && currentPosition.hasClass('whiteQueen')){
        pathofwhiteQueen(currentPosition);
    }
    if (!(currentPosition.hasClass('clickpiece')) && currentPosition.hasClass('blackKing')){
        pathofblackKing(currentPosition);
    }
    if (!(currentPosition.hasClass('clickpiece')) && currentPosition.hasClass('whiteKing')){
        pathofwhiteKing(currentPosition);
    }
});

///////////////////////////////////////////////


///////////////////////////////////
function pathofblackPone(eventData) {
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    // console.log("shfyghusdhfguf");
    groupimg.removeClass('clickpiece');
    var currID=currentPosition.parent().attr('id');
    // console.log(currID);
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
// dragger
///////////////////////////////////////////////////////
$(".square").on("click",function (eventData) {
    var currentSquare=$(this);

    var currentPosition=$(".groupimg.clickpiece");
    if($(currentSquare).hasClass('selectpath')){
        currentSquare.append(currentPosition);
        groupimg.removeClass('clickpiece');
        tiles.removeClass('selectpath');
    }
});

////////////////////////////////////////////////////////////
function pathofwhitePone(eventData) {
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    groupimg.removeClass('clickpiece');
    var currID=currentPosition.parent().attr('id');
    var letter=currID.charAt(0);
    var idNo=currID.charAt(1);
    var LettersArrayposition=($.inArray(letter,letters));
    var numArrayPosition=($.inArray(parseInt(idNo),numbers));
    var tempId1=letters[LettersArrayposition]+numbers[numArrayPosition-1];
    var tempId2=letters[LettersArrayposition]+numbers[numArrayPosition-2];

    var tempId3=letters[LettersArrayposition+1]+numbers[numArrayPosition-1];
    var tempId4=letters[LettersArrayposition-1]+numbers[numArrayPosition-1];
    switch (currentPosition.attr('id')){
        case "black7" :CountArray[0]++;break;
        case "black18":CountArray[1]++;break;
        case "black19":CountArray[2]++;break;
        case "black20":CountArray[3]++;break;
        case "black21":CountArray[4]++;break;
        case "black22":CountArray[5]++;break;
        case "black23":CountArray[6]++;break;
        case "black24":CountArray[7]++;break;

    }

    if (CountArray[0]==1){
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('groupimg')) && !($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }else {
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }
    if (CountArray[1]==1){
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('groupimg')) && !($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }else {
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }
    if (CountArray[2]==1){
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('groupimg')) && !($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }else {
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }
    if (CountArray[3]==1){
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('groupimg')) && !($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }else {
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }
    if (CountArray[4]==1){
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('groupimg')) && !($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }else {
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }
    if (CountArray[5]==1){
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('groupimg')) && !($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }else {
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }
    if (CountArray[6]==1){
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('groupimg')) && !($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }else {
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }
    if (CountArray[7]==1){
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('groupimg')) && !($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }else {
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }
    if (CountArray[8]==1){
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('groupimg')) && !($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }else {
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }
}

// removing..
$(".square").on("click",function (eventData) {
    var currentSquare=$(this);
    var currentPiece=$(".groupimg.clickpiece");
    if ($(currentSquare).hasClass('selectpath')){
        currentSquare.append(currentPiece);
        groupimg.removeClass('clickpiece');
        tiles.removeClass('selectpath');
        tiles.removeClass('crosspiece');
    }
    if ($(currentSquare).hasClass('crosspiece')){
        var y=$(currentPiece).clone();
        $(currentPiece).remove();

        $(currentSquare).children().remove();
        currentSquare.append(currentPiece);
        tiles.removeClass('selectpath');
        groupimg.removeClass('clickpiece');
        tiles.removeClass('crosspiece');
    }
});

// Knight Moving

function pathofblackKnight(eventData){
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    groupimg.removeClass('clickpiece');
    tiles.removeClass('crosspiece');
    var currID=currentPosition.parent().attr('id');
    var letter=currID.charAt(0);
    var IdNo=currID.charAt(1);
    var LettersArrayPosition=($.inArray(letter,letters));
    var numArrayPosition=($.inArray(parseInt(IdNo), numbers));

    var tempId1=letters[LettersArrayPosition-2]+numbers[numArrayPosition+1];
    var tempId2=letters[LettersArrayPosition-1]+numbers[numArrayPosition+2];
    var tempId3=letters[LettersArrayPosition+1]+numbers[numArrayPosition+2];
    var tempId4=letters[LettersArrayPosition+2]+numbers[numArrayPosition+1];
    var tempId5=letters[LettersArrayPosition-2]+numbers[numArrayPosition-1];
    var tempId6=letters[LettersArrayPosition-1]+numbers[numArrayPosition-2];
    var tempId7=letters[LettersArrayPosition+1]+numbers[numArrayPosition-2];
    var tempId8=letters[LettersArrayPosition+2]+numbers[numArrayPosition-1];

    if (!($("#"+tempId1).children().hasClass('groupimg'))){
        $("#"+tempId1).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId2).children().hasClass('groupimg'))){
        $("#"+tempId2).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId3).children().hasClass('groupimg'))){
        $("#"+tempId3).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId4).children().hasClass('groupimg'))){
        $("#"+tempId4).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId5).children().hasClass('groupimg'))){
        $("#"+tempId5).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId6).children().hasClass('groupimg'))){
        $("#"+tempId6).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId7).children().hasClass('groupimg'))){
        $("#"+tempId7).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId8).children().hasClass('groupimg'))){
        $("#"+tempId8).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
}
/////////////
function pathofwhiteKnight(eventData) {
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    groupimg.removeClass('clickpiece');
    tiles.removeClass('crosspiece');
    var currID=currentPosition.parent().attr('id');
    var letter=currID.charAt(0);
    var IdNo=currID.charAt(1);
    var LettersArrayPosition=($.inArray(letter,letters));
    var numArrayPosition=($.inArray(parseInt(IdNo), numbers));

    var tempId1=letters[LettersArrayPosition-2]+numbers[numArrayPosition+1];
    var tempId2=letters[LettersArrayPosition-1]+numbers[numArrayPosition+2];
    var tempId3=letters[LettersArrayPosition+1]+numbers[numArrayPosition+2];
    var tempId4=letters[LettersArrayPosition+2]+numbers[numArrayPosition+1];
    var tempId5=letters[LettersArrayPosition-2]+numbers[numArrayPosition-1];
    var tempId6=letters[LettersArrayPosition-1]+numbers[numArrayPosition-2];
    var tempId7=letters[LettersArrayPosition+1]+numbers[numArrayPosition-2];
    var tempId8=letters[LettersArrayPosition+2]+numbers[numArrayPosition-1];

    if (!($("#"+tempId1).children().hasClass('groupimg'))){
        $("#"+tempId1).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId2).children().hasClass('groupimg'))){
        $("#"+tempId2).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId3).children().hasClass('groupimg'))){
        $("#"+tempId3).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId4).children().hasClass('groupimg'))){
        $("#"+tempId4).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId5).children().hasClass('groupimg'))){
        $("#"+tempId5).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId6).children().hasClass('groupimg'))){
        $("#"+tempId6).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId7).children().hasClass('groupimg'))){
        $("#"+tempId7).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
    if (!($("#"+tempId8).children().hasClass('groupimg'))){
        $("#"+tempId8).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');
    }
}
///////////////////////////
// bishop
function pathofblackBishop(eventData) {
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    groupimg.removeClass('clickpiece');
    tiles.removeClass('crosspiece');
    var currID=currentPosition.parent().attr('id');
    var letter=currID.charAt(0);
    var IdNo=currID.charAt(1);
    var LettersArrayPosition=($.inArray(letter,letters));
    var numArrayPosition=($.inArray(parseInt(IdNo), numbers));

    var tempId1=letters[LettersArrayPosition+1]+numbers[numArrayPosition+1];
    var tempId2=letters[LettersArrayPosition-1]+numbers[numArrayPosition+1];
    var tempId3=letters[LettersArrayPosition+1]+numbers[numArrayPosition+-1];
    var tempId4=letters[LettersArrayPosition-1]+numbers[numArrayPosition-1];

    var x=LettersArrayPosition;
    var y=numArrayPosition;
    for (;y<8;y++){
        tempId1=letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else {
            break;
        }
    }

    var x1=LettersArrayPosition;
    var y1=numArrayPosition;
    for (;y1<8;y1++){
        tempId2=letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else {
            break;
        }
    }

    var x2=numArrayPosition;
    var y2=LettersArrayPosition;
    for (;x2>=0;x2--){
        tempId3=letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('groupimg'))){
            $("#"+tempId3).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else {
            break;
        }
    }

    var x3=LettersArrayPosition;
    var y3=numArrayPosition;
    for (;x3>=0;x3--){
        tempId4=letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('groupimg'))){
            $("#"+tempId4).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else {
            break;
        }
    }
}
//////////////
function pathofwhiteBishop(eventData) {
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    groupimg.removeClass('clickpiece');
    tiles.removeClass('crosspiece');
    var currID=currentPosition.parent().attr('id');
    var letter=currID.charAt(0);
    var IdNo=currID.charAt(1);
    var LettersArrayPosition=($.inArray(letter,letters));
    var numArrayPosition=($.inArray(parseInt(IdNo), numbers));

    var tempId1=letters[LettersArrayPosition+1]+numbers[numArrayPosition+1];
    var tempId2=letters[LettersArrayPosition-1]+numbers[numArrayPosition+1];
    var tempId3=letters[LettersArrayPosition+1]+numbers[numArrayPosition+-1];
    var tempId4=letters[LettersArrayPosition-1]+numbers[numArrayPosition-1];

    var x=LettersArrayPosition;
    var y=numArrayPosition;
    for (;y<8;y++){
        tempId1=letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else {
            break;
        }
    }

    var x1=LettersArrayPosition;
    var y1=numArrayPosition;
    for (;y1<8;y1++){
        tempId2=letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else {
            break;
        }
    }

    var x2=numArrayPosition;
    var y2=LettersArrayPosition;
    for (;x2>=0;x2--){
        tempId3=letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('groupimg'))){
            $("#"+tempId3).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else {
            break;
        }
    }

    var x3=LettersArrayPosition;
    var y3=numArrayPosition;
    for (;x3>=0;x3--){
        tempId4=letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('groupimg'))){
            $("#"+tempId4).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else {
            break;
        }
    }
}
////////////////////////////
// Rook
function pathofblackRook(eventData) {
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    groupimg.removeClass('clickpiece');
    tiles.removeClass('crosspiece');
    var currID=currentPosition.parent().attr('id');
    var letter=currID.charAt(0);
    var IdNo=currID.charAt(1);
    var LettersArrayPosition=($.inArray(letter,letters));
    var numArrayPosition=($.inArray(parseInt(IdNo), numbers));
    var tempId=letters[LettersArrayPosition]+numbers[numArrayPosition+1];

    var x=LettersArrayPosition;
    for (var y=numArrayPosition+1;y<8;y++){
       tempId=letters[x]+numbers[y];
       if(!($("#"+tempId).children().hasClass('groupimg'))){
           $("#"+tempId).addClass('selectpath');
           currentPosition.addClass('clickpiece');
       }else{
           break;
       }
    }

    var x1=LettersArrayPosition;
    for (var y=numArrayPosition+1;y<8;y++){
        tempId=letters[y]+numbers[x1];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x2=LettersArrayPosition;
    for (var y=numArrayPosition-1;y>=0;y--){
        tempId=letters[y]+numbers[x2];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    for (var y=numArrayPosition-1;y>=0;y--){
        tempId=letters[x]+numbers[y];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }
}
//////////////////////////
function pathofwhiteRook(eventData) {
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    groupimg.removeClass('clickpiece');
    tiles.removeClass('crosspiece');
    var currID=currentPosition.parent().attr('id');
    var letter=currID.charAt(0);
    var IdNo=currID.charAt(1);
    var LettersArrayPosition=($.inArray(letter,letters));
    var numArrayPosition=($.inArray(parseInt(IdNo), numbers));
    var tempId=letters[LettersArrayPosition]+numbers[numArrayPosition-1];

    var x=LettersArrayPosition;
    for (var y=numArrayPosition+1;y<8;y++){
        tempId=letters[x]+numbers[y];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x1=LettersArrayPosition;
    for (var y=numArrayPosition+1;y<8;y++){
        tempId=letters[y]+numbers[x1];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x2=LettersArrayPosition;
    for (var y=numArrayPosition-1;y>=0;y--){
        tempId=letters[y]+numbers[x2];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    for (var y=numArrayPosition-1;y>=0;y--){
        tempId=letters[x]+numbers[y];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }
}
//////////////////////////////////
// Queen

function pathofblackQueen() {
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    groupimg.removeClass('clickpiece');
    tiles.removeClass('crosspiece');
    var currID=currentPosition.parent().attr('id');
    var letter=currID.charAt(0);
    var IdNo=currID.charAt(1);
    var LettersArrayPosition=($.inArray(letter,letters));
    var numArrayPosition=($.inArray(parseInt(IdNo), numbers));

    var tempId=letters[LettersArrayPosition]+numbers[numArrayPosition+1];
    var tempId1=letters[LettersArrayPosition+1]+numbers[numArrayPosition+1];
    var tempId2=letters[LettersArrayPosition-1]+numbers[numArrayPosition+1];
    var tempId3=letters[LettersArrayPosition+1]+numbers[numArrayPosition-1];
    var tempId4=letters[LettersArrayPosition-1]+numbers[numArrayPosition-1];

    var x=LettersArrayPosition;
    for (var y=numArrayPosition+1;y<8;y++){
        tempId=letters[x]+numbers[y];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x1=LettersArrayPosition;
    for (var y=numArrayPosition+1;y<8;y++){
        tempId=letters[y]+numbers[x1];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x2=LettersArrayPosition;
    for (var y=numArrayPosition-1;y>=0;y--){
        tempId=letters[y]+numbers[x2];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    for (var y=numArrayPosition-1;y>=0;y--){
        tempId=letters[x]+numbers[y];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x=LettersArrayPosition;
    var y=numArrayPosition;
    for (;y<8;y++){
        tempId1=letters[++x]+numbers[y+1];
        if(!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x1=LettersArrayPosition;
    var y1=numArrayPosition;
    for (;y1<8;y1++){
        tempId2=letters[--x1]+numbers[y1+1];
        if(!($("#"+tempId2).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x2=LettersArrayPosition;
    var y2=numArrayPosition;
    for (;x2>=0;x2--){
        tempId3=letters[++y2]+numbers[x2-1];
        if(!($("#"+tempId3).children().hasClass('groupimg'))){
            $("#"+tempId3).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x3=LettersArrayPosition;
    var y3=numArrayPosition;
    for (;x3>=0;x3--){
        tempId4=letters[--y3]+numbers[x3-1];
        if(!($("#"+tempId4).children().hasClass('groupimg'))){
            $("#"+tempId4).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }
}
//////////////////
function pathofwhiteQueen(eventData) {
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    groupimg.removeClass('clickpiece');
    tiles.removeClass('crosspiece');
    var currID=currentPosition.parent().attr('id');
    var letter=currID.charAt(0);
    var IdNo=currID.charAt(1);
    var LettersArrayPosition=($.inArray(letter,letters));
    var numArrayPosition=($.inArray(parseInt(IdNo), numbers));

    var tempId=letters[LettersArrayPosition]+numbers[numArrayPosition+1];
    var tempId1=letters[LettersArrayPosition+1]+numbers[numArrayPosition+1];
    var tempId2=letters[LettersArrayPosition-1]+numbers[numArrayPosition+1];
    var tempId3=letters[LettersArrayPosition+1]+numbers[numArrayPosition-1];
    var tempId4=letters[LettersArrayPosition-1]+numbers[numArrayPosition-1];

    var x=LettersArrayPosition;
    for (var y=numArrayPosition+1;y<8;y++){
        tempId=letters[x]+numbers[y];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x1=LettersArrayPosition;
    for (var y=numArrayPosition+1;y<8;y++){
        tempId=letters[y]+numbers[x1];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x2=LettersArrayPosition;
    for (var y=numArrayPosition-1;y>=0;y--){
        tempId=letters[y]+numbers[x2];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    for (var y=numArrayPosition-1;y>=0;y--){
        tempId=letters[x]+numbers[y];
        if(!($("#"+tempId).children().hasClass('groupimg'))){
            $("#"+tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x=LettersArrayPosition;
    var y=numArrayPosition;
    for (;y<8;y++){
        tempId1=letters[++x]+numbers[y+1];
        if(!($("#"+tempId1).children().hasClass('groupimg'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x1=LettersArrayPosition;
    var y1=numArrayPosition;
    for (;y1<8;y1++){
        tempId2=letters[--x1]+numbers[y1+1];
        if(!($("#"+tempId2).children().hasClass('groupimg'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x2=LettersArrayPosition;
    var y2=numArrayPosition;
    for (;x2>=0;x2--){
        tempId3=letters[++y2]+numbers[x2-1];
        if(!($("#"+tempId3).children().hasClass('groupimg'))){
            $("#"+tempId3).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }

    var x3=LettersArrayPosition;
    var y3=numArrayPosition;
    for (;x3>=0;x3--){
        tempId4=letters[--y3]+numbers[x3-1];
        if(!($("#"+tempId4).children().hasClass('groupimg'))){
            $("#"+tempId4).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }else{
            break;
        }
    }
}
///////////////////////////////////
// King
function pathofblackKing(eventData) {
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    groupimg.removeClass('clickpiece');
    tiles.removeClass('crosspiece');
    var currID=currentPosition.parent().attr('id');
    var letter=currID.charAt(0);
    var IdNo=currID.charAt(1);
    var LettersArrayPosition=($.inArray(letter,letters));
    var numArrayPosition=($.inArray(parseInt(IdNo), numbers));

    var tempId1=letters[LettersArrayPosition]+numbers[numArrayPosition+1];
    var tempId2=letters[LettersArrayPosition-1]+numbers[numArrayPosition+1];
    var tempId3=letters[LettersArrayPosition+1]+numbers[numArrayPosition+1];
    var tempId4=letters[LettersArrayPosition+1]+numbers[numArrayPosition];
    var tempId5=letters[LettersArrayPosition-1]+numbers[numArrayPosition];
    var tempId6=letters[LettersArrayPosition]+numbers[numArrayPosition-1];
    var tempId7=letters[LettersArrayPosition+1]+numbers[numArrayPosition-1];
    var tempId8=letters[LettersArrayPosition-1]+numbers[numArrayPosition-1];

    if (!($("#"+tempId1).children().hasClass('groupimg'))){
        $("#"+tempId1).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId2).children().hasClass('groupimg'))){
        $("#"+tempId2).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId3).children().hasClass('groupimg'))){
        $("#"+tempId3).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId4).children().hasClass('groupimg'))){
        $("#"+tempId4).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId5).children().hasClass('groupimg'))){
        $("#"+tempId5).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId6).children().hasClass('groupimg'))){
        $("#"+tempId6).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId7).children().hasClass('groupimg'))){
        $("#"+tempId7).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId8).children().hasClass('groupimg'))){
        $("#"+tempId8).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }

}
////////////////////
function pathofwhiteKing(eventData) {
    currentPosition=eventData;
    tiles.removeClass('selectpath');
    groupimg.removeClass('clickpiece');
    tiles.removeClass('crosspiece');
    var currID=currentPosition.parent().attr('id');
    var letter=currID.charAt(0);
    var IdNo=currID.charAt(1);
    var LettersArrayPosition=($.inArray(letter,letters));
    var numArrayPosition=($.inArray(parseInt(IdNo), numbers));

    var tempId1=letters[LettersArrayPosition]+numbers[numArrayPosition+1];
    var tempId2=letters[LettersArrayPosition-1]+numbers[numArrayPosition+1];
    var tempId3=letters[LettersArrayPosition+1]+numbers[numArrayPosition+1];
    var tempId4=letters[LettersArrayPosition+1]+numbers[numArrayPosition];
    var tempId5=letters[LettersArrayPosition-1]+numbers[numArrayPosition];
    var tempId6=letters[LettersArrayPosition]+numbers[numArrayPosition-1];
    var tempId7=letters[LettersArrayPosition+1]+numbers[numArrayPosition-1];
    var tempId8=letters[LettersArrayPosition-1]+numbers[numArrayPosition-1];

    if (!($("#"+tempId1).children().hasClass('groupimg'))){
        $("#"+tempId1).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId2).children().hasClass('groupimg'))){
        $("#"+tempId2).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId3).children().hasClass('groupimg'))){
        $("#"+tempId3).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId4).children().hasClass('groupimg'))){
        $("#"+tempId4).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId5).children().hasClass('groupimg'))){
        $("#"+tempId5).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId6).children().hasClass('groupimg'))){
        $("#"+tempId6).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId7).children().hasClass('groupimg'))){
        $("#"+tempId7).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
    if (!($("#"+tempId8).children().hasClass('groupimg'))){
        $("#"+tempId8).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.addClass('selectpath');
    }
}