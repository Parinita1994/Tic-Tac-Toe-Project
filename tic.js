 let boxes=document.querySelectorAll(".box");
 let resetbtn=document.querySelector("#resetbtn");
 let newGameBtn=document.querySelector("#new-btn");
 let msgContainer = document.querySelector(".msgContainer");
 let msg = document.querySelector("#msg");

 let turnO=true;//playerx, playero

 const winPattern=[
     [0, 1, 2],
     [0, 3, 6],
     [0, 4, 8],
     [1, 4, 7],
     [2, 4, 6],
     [3, 4, 5],
     [6, 7, 8],
     [2, 5, 8]
 ];

 const resetGame=() =>{
     turnO= true;
     enableBox();
     msgContainer.classList.add("hide");
 };

 boxes.forEach((box) =>{
     box.addEventListener("click", ()=>{
         console.log("blocked was clicked");
         if(turnO){
             box.innerText="O";
             turnO=false;

         }
         else{
            box.innerText="X";
             turnO=true;
         }
         box.disabled=true;
         checkWinner();
     });
 });

 const disableBox= ()=> {
     for(let box of boxes){
         box.disabled= true;
     }
 };

 const enableBox =() =>{
     for(let box of boxes){
         box.disabled = false;
         box.innerText="";

     }
 };

 const showWinner= (winner) =>{
 msg.innerText=`Congratulation, Winner is ${winner}`;
 msgContainer.classList.remove("hide");
 disableBox();
 }

 const checkWinner=() =>{
     for(let pattern of winPattern)
     {
        let posi1Val=boxes[pattern[0]].innerText;
        let posi2Val=boxes[pattern[1]].innerText;
        let posi3Val=boxes[pattern[2]].innerText;

        if(posi1Val != "" && posi2Val != "" && posi3Val != "")
        {
         if(posi1Val === posi2Val && posi2Val === posi3Val)
         {
           console.log("winner", posi1Val);
             showWinner(posi1Val);
         }
        }
     }
 };

 newGameBtn.addEventListener("click", resetGame);
 resetbtn.addEventListener("click", resetGame);

// newgameBtn.addEventListener("click", resetGame);
// resetbtn.addEventListener("click", resetGame);