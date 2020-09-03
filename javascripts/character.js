function showhide(name) {
    var x = document.getElementById(name);
    var allChar = document.getElementById("mainchar");
    console.log(allChar);
    allChar.style.display = "none";
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 