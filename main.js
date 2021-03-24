Name_of_the_Student_array=[];
function Submit(){
    var name_1=document.getElementById("Name_of_the_Student_1").value;

    var name_2=document.getElementById("Name_of_the_Student_2").value;

    var name_3=document.getElementById("Name_of_the_Student_3").value;

    var name_4=document.getElementById("Name_of_the_Student_4").value;

    
    Name_of_the_Student_array.push(name_1);
    Name_of_the_Student_array.push(name_2);
    Name_of_the_Student_array.push(name_3);
    Name_of_the_Student_array.push(name_4);

    console.log(Name_of_the_Student_array);
    document.getElementById("display_name").innerHTML=Name_of_the_Student_array;
    document.getElementById("Submit_Button").style.display="none";
    document.getElementById("Sort_Button").style.display="inline-block";
}


function Sorting(){
    Name_of_the_Student_array.sort(); 
    console.log(Name_of_the_Student_array);
    document.getElementById("display_name").innerHTML=Name_of_the_Student_array;
}

