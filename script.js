
/**
 * Function that displays the next sibling p-tag on buttonclick.
 * @param {*} event 
 */
function showHiddenInfo(event){
    let info = event.target.nextElementSibling;
    if (info.style.display === "none") {
        info.style.display ="block";
    } else {
        info.style.display ="none";
    }
}