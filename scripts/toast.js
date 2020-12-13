function creatToast(timeToShow, type, msg) 
{
    var container = _('.container');

    var toast = document.createElement("div");
    toast.setAttribute("id", "toast");
    document.body.insertBefore(toast, container);
    
    toast.appendChild(document.createTextNode(msg));
    toast.classList.add("show");
    toast.classList.add(type);
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function()
    { 
        toast.remove();
    }, timeToShow);


}