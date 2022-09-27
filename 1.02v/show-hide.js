document.getElementById('build-a').style.display="none";
document.getElementById('content-1').style.display="none";
document.getElementById('content-teachers').style.display="none";
document.getElementById('build-b').style.display="none";
document.getElementById('build-c').style.display="none";

function showTeachers(){
    document.getElementById('build-a').style.display="none";
    document.getElementById('content-1').style.display="none";
    document.getElementById('content-teachers').style.display="block";
    document.getElementById('build-b').style.display="none";
    document.getElementById('build-c').style.display="none";

}
function showBuildA(){
    document.getElementById('build-a').style.display="block";
    document.getElementById('content-1').style.display="none";
    document.getElementById('content-teachers').style.display="none";
    document.getElementById('build-b').style.display="none";
    document.getElementById('build-c').style.display="none";
}
function showBuildB(){
    document.getElementById('build-a').style.display="none";
    document.getElementById('content-1').style.display="none";
    document.getElementById('content-teachers').style.display="none";
    document.getElementById('build-b').style.display="block";
    document.getElementById('build-c').style.display="none";
}
function showBuildC(){
    document.getElementById('build-a').style.display="none";
    document.getElementById('content-1').style.display="none";
    document.getElementById('content-teachers').style.display="none";
    document.getElementById('build-b').style.display="none";
    document.getElementById('build-c').style.display="block";
}