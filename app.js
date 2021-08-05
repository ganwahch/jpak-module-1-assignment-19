var player1 = true;
var move=0;

function playerwin(btnId) {
    move++;
    document.getElementById("move").innerText=move;

    console.log("button clicked with id : "+btnId);
    document.getElementById(btnId).disabled=true;

    if (player1 === true ) {
        document.getElementById(btnId).innerText="O";        
    } else {
        document.getElementById(btnId).innerText="X";
    } 

    // win condition 1
    if(
        document.getElementById("1").innerText!="" &&
        document.getElementById("2").innerText!="" &&
        document.getElementById("3").innerText!="" &&
        document.getElementById("1").innerText  === document.getElementById("2").innerText  &&  
        document.getElementById("2").innerText  === document.getElementById("3").innerText
    ){
  
// if (
//     document.getElementById("1").innerText!=""&&
//     document.getElementById("2").innerText!=""&&
//     document.getElementById('3').innerText!=""&&
//     document.getElementById("1").innerText === document.getElementById("2").innerText &&
//     document.getElementById("2").innerText === document.getElementById("3").innerText
// ) {
    
// }












        if(player1 === true){
            alert("player 1 jeet gaya ");        
        }
        else{
            alert("player 2 jeet gaya ");        
        }
        location.reload();
    }

        // win condition 2
        if(
            document.getElementById("4").innerText!="" &&
            document.getElementById("5").innerText!="" &&
            document.getElementById("6").innerText!="" &&
            document.getElementById("4").innerText  === document.getElementById("5").innerText  &&  
            document.getElementById("5").innerText  === document.getElementById("6").innerText
        ){
            if(player1 === true){
                alert("player 1 jeet gaya ");        
            }
            else{
                alert("player 2 jeet gaya ");        
            }
            location.reload();
        }
    

        // win condition 3
        if(
            document.getElementById("7").innerText!="" &&
            document.getElementById("8").innerText!="" &&
            document.getElementById("9").innerText!="" &&
            document.getElementById("7").innerText  === document.getElementById("8").innerText  &&  
            document.getElementById("8").innerText  === document.getElementById("9").innerText
        ){
            if(player1 === true){
                alert("player 1 jeet gaya ");        
            }
            else{
                alert("player 2 jeet gaya ");        
            }
            location.reload();
        }
    
        // win condition 4
        if(
            document.getElementById("1").innerText!="" &&
            document.getElementById("4").innerText!="" &&
            document.getElementById("7").innerText!="" &&
            document.getElementById("1").innerText  === document.getElementById("4").innerText  &&  
            document.getElementById("4").innerText  === document.getElementById("7").innerText
        ){
            if(player1 === true){
                alert("player 1 jeet gaya ");        
            }
            else{
                alert("player 2 jeet gaya ");        
            }
            location.reload();
        }
        
        // win condition 5
        if(
            document.getElementById("2").innerText!="" &&
            document.getElementById("5").innerText!="" &&
            document.getElementById("8").innerText!="" &&
            document.getElementById("2").innerText  === document.getElementById("5").innerText  &&  
            document.getElementById("5").innerText  === document.getElementById("8").innerText
        ){
            if(player1 === true){
                alert("player 1 jeet gaya ");        
            }
            else{
                alert("player 2 jeet gaya ");        
            }
            location.reload();
        }

        // win condition 6
        if(
            document.getElementById("3").innerText!="" &&
            document.getElementById("6").innerText!="" &&
            document.getElementById("9").innerText!="" &&
            document.getElementById("3").innerText  === document.getElementById("6").innerText  &&  
            document.getElementById("6").innerText  === document.getElementById("9").innerText
        ){
            if(player1 === true){
                alert("player 1 jeet gaya ");        
            }
            else{
                alert("player 2 jeet gaya ");        
            }
            location.reload();
        }


        // win condition 7
        if(
            document.getElementById("1").innerText!="" &&
            document.getElementById("5").innerText!="" &&
            document.getElementById("9").innerText!="" &&
            document.getElementById("1").innerText  === document.getElementById("5").innerText  &&  
            document.getElementById("5").innerText  === document.getElementById("9").innerText
        ){
            if(player1 === true){
                alert("player 1 jeet gaya ");        
            }
            else{
                alert("player 2 jeet gaya ");        
            }
            location.reload();
        }
        

        // win condition 8
        if(
            document.getElementById("7").innerText!="" &&
            document.getElementById("5").innerText!="" &&
            document.getElementById("3").innerText!="" &&
            document.getElementById("7").innerText  === document.getElementById("5").innerText  &&  
            document.getElementById("5").innerText  === document.getElementById("3").innerText
        ){
            if(player1 === true){
                alert("player 1 jeet gaya ");        
            }
            else{
                alert("player 2 jeet gaya ");        
            }
            location.reload();
        }
        

        if(move === 9){
            alert("Match Draw");
            location.reload();
        }

player1 = !player1;

}
