
function validateinput() {
    event.preventDefault() //prevents constant refreshing of page
    //variables for string.html
    var Full_Name = document.getElementById("firstname").value + " " + document.getElementById("lastname").value
    var zipcode = document.getElementById("zipcode").value
    var hiddenmessage = document.getElementById("secretmessage")
    var iserror = false;//variable determining if any other input errors exist.
    //console.log(Full_Name)
    
    if(zipcode.length != 5) //if zipcode length is 5
    {
        outputres("errormesage", "ZipCode Must Be 5 Characters")
        iserror = true;
        return;
    }
    else if(zipcode.length == 5)
    {
        hiddenmessage.hidden = false;
        iserror = false;
        outputres("errormesage", "")
    }

    if(Full_Name.length > 20 && !iserror) //if total name length is 20 or less characters
    {
        outputres("FullName", "Full Name Cannot Exceed 20 Characters")
        iserror = true;
        return;
    }
    else
    {
        outputres("FullName", "Full Name: " + Full_Name)
        iserror = false;
    }
}

function outputres(htmlElement, theText) {
    document.getElementById(htmlElement).innerHTML = theText
    }