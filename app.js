const search = () =>{
    const searchbox = document.getElementById("search").ariaValueMax.toLocaleUpperCase();
    const storeitem = document.getElementById("all-players")
    const players = document.querySelectorAll(".players")
    const pname = storeitem.getElementById("h2")

    for (var i=0; i < pname.length; i++){
        let match = players[i].getElementsByTagName('h2')[0];

        if (match ){
           let textvalue = match.textContent || match.innerHTML
           if (textvalue.toUpperCase().indexOf(searchbox) > -1){
            players[i].style.display = "";
           }else{
            players[i].style.display = "none";
           }
        }
    }

}