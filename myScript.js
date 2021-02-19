
// main menu____________________________________
    function openNav() 
    {
        document.getElementById("mySidenav").style.width = "100vw";
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() 
    {
        document.getElementById("mySidenav").style.width = "0";
    }

//filter dropdown_______________________________
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function filterFunction()
    {
        document.getElementById("myFilterdwn").classList.toggle("filtershow");
    }
    var z;
    function filterGeneralFunction(z)
    {
        document.getElementById(z).classList.toggle("filtershow");
    }
// history button_______________________________
    function goBack() {window.history.back();} 

 // function to display student dashboard___)_______
        
 var a, b, c, d, x;
 function showCard(a,b)
 {
     document.getElementById(a).style.display = "block";
     document.getElementById(b).style.color = "#FF20B3";
 }
 function hideCard(c,d)
 {
     document.getElementById(c).style.display = "none";
     document.getElementById(d).style.color = "#FFFFFF";
 }
 // display Shows
 function displayShows()
 {
     showCard("studentShows","headerShows");
     hideCard("studentNews","headerNews");
     hideCard("studentAnalytics","headerAnal");
 }
 // display News
 function displayNews()
 {
     hideCard("studentShows","headerShows");
     showCard("studentNews","headerNews");
     hideCard("studentAnalytics","headerAnal");
 }
 // display Analytics
 function displayAnalytics()
 {
     hideCard("studentShows","headerShows");
     hideCard("studentNews","headerNews");
     showCard("studentAnalytics","headerAnal");
 }
 // display Students
//  function displayStudents()
//  {
//      hideCard("studentShows","headerShows");
//      hideCard("studentNews","headerNews");
//      showCard("studentAnalytics","headerAnal");
//  }

    // display Shows
    function displayAdminShows()
    {
        showCard("adminShows","headerAdminShows");
        hideCard("adminNews","headerAdminNews");
        hideCard("adminStudents","headerAdminStudents");
        hideCard("adminAdmins","headerAdminAdmins");
        hideCard("adminSchedule","headerAdminSchedule");
        hideCard("adminAnalytics","headerAdminAnal");
    }
    // display News
    function displayAdminNews()
    {
        hideCard("adminShows","headerAdminShows");
        showCard("adminNews","headerAdminNews");
        hideCard("adminStudents","headerAdminStudents");
        hideCard("adminAdmins","headerAdminAdmins");
        hideCard("adminSchedule","headerAdminSchedule");
        hideCard("adminAnalytics","headerAdminAnal");
    }
    // displa all students
    function displayAdminStudents()
    {
        hideCard("adminShows","headerAdminShows");
        hideCard("adminNews","headerAdminNews");
        showCard("adminStudents","headerAdminStudents");
        hideCard("adminAdmins","headerAdminAdmins");
        hideCard("adminSchedule","headerAdminSchedule");
        hideCard("adminAnalytics","headerAdminAnal");
    }
    // display all admins
    function displayAdminAdmins()
    {
        hideCard("adminShows","headerAdminShows");
        hideCard("adminNews","headerAdminNews");
        hideCard("adminStudents","headerAdminStudents");
        showCard("adminAdmins","headerAdminAdmins");
        hideCard("adminSchedule","headerAdminSchedule");
        hideCard("adminAnalytics","headerAdminAnal");
    }
    // display schedule
    function displayAdminSchedule()
    {
        hideCard("adminShows","headerAdminShows");
        hideCard("adminNews","headerAdminNews");
        hideCard("adminStudents","headerAdminStudents");
        hideCard("adminAdmins","headerAdminAdmins");
        showCard("adminSchedule","headerAdminSchedule");
        hideCard("adminAnalytics","headerAdminAnal");
    }
    // display admin analytics
    function displayAdminAnalytics()
    {
        hideCard("adminShows","headerAdminShows");
        hideCard("adminNews","headerAdminNews");
        hideCard("adminStudents","headerAdminStudents");
        hideCard("adminAdmins","headerAdminAdmins");
        hideCard("adminSchedule","headerAdminSchedule");
        showCard("adminAnalytics","headerAdminAnal");
    }


// ACTION MESSAGE!!!!!!!!!!!!!
 function showActionMessage(x)
 {
     document.getElementById(x).style.display = "block";
 }
 function showConfMessage()
 {   
     document.getElementById('actionStudentDeleteConf').style.display = "block";
 }