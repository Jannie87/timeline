function showHiddenInfo(event){
    console.log(event.target);
    let info = event.target.nextElementSibling;
    console.log(info);
    if (info.style.display === "none") {
        info.style.display ="block";
    } else {
        info.style.display ="none";
    }
}