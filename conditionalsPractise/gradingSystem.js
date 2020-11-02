let result;
let grade;


if(result >=80 && result <=100){
    grade = "A"
}
else if(result >=70 && result <=79){
    grade = "B"
}
else if(result >=60 && result <=69 ){
    grade = "C"
}
else if(result >=50 && result <=59){
    grade = "D"
}
else if( result <=49 && result >=0){
    grade = "F"
}
else{
    grade ="Invalid Result"
}
console.log(grade);

result = $(".resultInput").val();
$(".resultButton").click(function(){
    $(".gradeAchieved").text("You have achieved" + " " + grade);
});