var id=parseInt(prompt("Enter Student Id"));
var name=prompt("Enter Student Name");
var mark1=parseInt(prompt("Enter Tamil Mark"));
var mark2=parseInt(prompt("Enter English Mark"));
var mark3=parseInt(prompt("Enter Maths Mark"));
var mark4=parseInt(prompt("Enter Science Mark"));
var mark5=parseInt(prompt("Enter social science Mark"));
var total=mark1+mark2+mark3+mark4+mark5;
var percentage=total*100/500.0;

document.write("Student Id :"+ id +"<br>");
document.write( "Student Name :"+ name+"<br>");
document.write("TAMIL:"+mark1+"<br>")
document.write("ENGLISH:"+mark2+"<br>")
document.write("MATHS:"+mark3+"<br>")
document.write("SCIENCE:"+mark4+"<br>")
document.write("SOCIAL SCIENCE:"+mark5+"<br>");
document.write("TOTAL MARK :"+total+"<br>");
document.write("PERCENTAGE :"+ percentage+"<br>")

if(percentage>90)
    {
    alert("A Grade")
    }
else if((percentage>80) && (percentage<90) )
    {
    alert("B Grade")
    }
else if((percentage>70) && (percentage<80))
    {
    alert("C Grade")
    }
    else if((percentage>60) && (percentage<70))
    {
    alert("D Grade")
    }
    else if((percentage>50) && (percentage<60))
    {
         alert("E Grade")
    }
    else
    {
        alert("FAIL")
    }


