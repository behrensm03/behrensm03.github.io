var synthesizesrcs = ["images/synthesize-home.png", "images/synthesize-browse.png"];

var internshiplogsrcs = ["images/internshiplog-home.png", "images/internshiplog-logs1.png", "images/internshiplog-logs2.png"];

var s = 1;
var i = -1;


function changeSynthesizeImg() {
    var synthesize = document.getElementById("synthesizeimg");
    s = 1-s;
    synthesize.src = synthesizesrcs[s];
    setTimeout(changeSynthesizeImg, 6000);
}


function changeInternshipLogImg() {
    var internshiplog = document.getElementById("internshiplogimg");
    i++;
    if (i==internshiplogsrcs.length) {
        i=0;
    }
    internshiplog.src = internshiplogsrcs[i];
    setTimeout(changeInternshipLogImg, 4000);
}