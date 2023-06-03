const today=new Date();
const monthArray=[31,28,31,30,31,30,31,31,30,31,30,31]

function calc(){
    let dayInput=document.getElementById("day").value;
    let monthInput=document.getElementById("month").value;
    let yearInput=document.getElementById("year").value;

    let dayCurrent=today.getDate();
    let monthCurrent= 1+ today.getMonth();
    let yearCurrent=today.getFullYear();

    if (dayInput>dayCurrent){
        dayCurrent=dayCurrent+monthArray[monthCurrent-1];
        monthCurrent=monthCurrent-1;
    }

    if (monthInput>monthCurrent){
        monthCurrent=monthCurrent+12;
        yearCurrent=yearCurrent-1;
    }

    let ageDay=dayCurrent-dayInput;
    let ageMonth=monthCurrent-monthInput;
    let ageYear=yearCurrent-yearInput;

    document.getElementById("year-el").textContent=ageYear;
    document.getElementById("month-el").textContent=ageMonth;
    document.getElementById("days-el").textContent=ageDay;

    if (ageDay==1){
        document.getElementById("day-text")="day";
    }

}