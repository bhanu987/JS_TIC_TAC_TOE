localStorage.clear();

const startgame = ()=>{
    if(document.getElementById('playerx').value=="" ||document.getElementById('playero').value=="")
    {
                alert("Please enter  name")
    }

    else if(document.getElementById('playerx').value == document.getElementById('playero').value)
    {
        alert("Players name should be different");
    }

    else{
        window.location.href="gameboard.html";
    }


    localStorage.setItem('playerx',document.getElementById('playerx').value);
    localStorage.setItem('playero',document.getElementById('playero').value);
    localStorage.setItem('playerxscore',0);
    localStorage.setItem('playeroscore',0);
    


}
