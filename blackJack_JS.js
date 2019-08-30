//This is cloned to github
var deck=[[1,"AH"],[2,"2H"],[3,"3H"],[4,"4H"],[5,"5H"],[6,"6H"],[7,"7H"],[8,"8H"],[9,"9H"],[10,"10H"],[10,"JH"],[10,"QH"],[10,"KH"],
[1,"AD"],[2,"2D"],[3,"3D"],[4,"4D"],[5,"5D"],[6,"6D"],[7,"7D"],[8,"8D"],[9,"9D"],[10,"10D"],[10,"JD"],[10,"QD"],[10,"KD"],
[1,"AC"],[2,"2C"],[3,"3C"],[4,"4C"],[5,"5C"],[6,"6C"],[7,"7C"],[8,"8C"],[9,"9C"],[10,"10C"],[10,"JC"],[10,"QC"],[10,"KC"],
[1,"AS"],[2,"2S"],[3,"3S"],[4,"4S"],[5,"5S"],[6,"6S"],[7,"7S"],[8,"8S"],[9,"9S"],[10,"10S"],[10,"JS"],[10,"QS"],[10,"KS"]
];
var shuffled_deck=[], user=[], compArray=[], playedCards=[], Honey=[];
var x, temp, randomIndex, sumP=0, optionVar,compSum=0,playerSum=0, flag=0;

//Returns the shuffled array
function shuffle(deck){ 
	var n=deck.length;
	for(var i=n;i>0;i--){
  	randomIndex=Math.floor(Math.random()*n);
  	temp=deck[n-1];
    deck[n-1]=deck[randomIndex];
    deck[randomIndex]=temp;
  }
 return deck;
}

//Returns an array with first 2 dealt cards
function dealt2(deck, user){
	for(var i=0;i<2;i++){
  	user.push(deck[0]);
    deck.shift();
  }
  return user;
}

//Returns an array by adding one new card
function dealt1(deck, user){
  	user.push(deck[0]);
    deck.shift();
  return user;
}

//Returns sum of all the dealt cards 
function score(user,sumP){
   sumP=0;
	for(var i=0;i<user.length;i++)
  {sumP=sumP+user[(user.length-1)-i][0];}
	return sumP;
}

//Checks the player's status
function player(user){
	 dealt1(deck, user);
	sumP= score(user, sumP);
   if(sumP<=21){
   	alert("Your new card is "+user[user.length-1][1]+" and you scored "+sumP);
    option();
   }
   else{
   	alert("Your last card is "+user[user.length-1][1]+"\n You scored "+sumP+"\n You lost the game!");
   }
   
}

//Checks the computers status
function computer(compArray, compSum)
{
    dealt2(deck, compArray);
	  compSum = score(compArray, compSum);
    while(compSum <=21){
       if(compSum >= sumP){
          alert("Computer scores "+ compSum+" \n Player scores "+sumP+"\n Computer is the winner!");
          break;
       }else{
          dealt1(deck, compArray);
          compSum = score(compArray, compSum);
    		}
     }
     if(compSum > 21){
      alert("Computer scores "+ compSum+" and It lost the game! \n Player is the winner!");  
      }     
   organize();   
	}
  
  //Ask player either to continue playing or stop
 function option(){
 		optionVar=prompt("Please press 1 to continue or press 2 to stop");
    if(optionVar==2){
    	computer(compArray,compSum);    
    }else if(optionVar==1){
    		player(user);
    }else{
    	alert("You have to enter 1 or 2");
      option();
    }
 }
 
//Organizes the cards after the game finished.
 function organize(){
  //alert("These are player's cards: "+user +"\n These are Computer's cards: "+compArray);
  for(var i=0;i<compArray.length; i++){
  	user.push(compArray[i]);
  }
  alert("Game over!");
  alert("All dealt cards: "+user);
  shuffle(user);
  alert("Shufled dealt cards: "+user);
  // alert(deck);
   for( i=0;i<user.length; i++){
  	deck.push(user[i]);
 }
 var cardName=[];
  for(i=0;i<deck.length;i++){
  	cardName[i]=deck[i][1];
  }
 alert(" All cards after the game is finished:\n"+cardName+"\n length ="+cardName.length);
 }
 
 //Creates the overall game
 function mainFunction(){
 shuffle(deck);
 alert("Game started.");
dealt2(deck, user);
sumP = score(user,sumP);
var x=prompt("You are dealt with " + user[0][1]+" and "+ user[1][1]+" and you scored "+sumP+" \n Please press 1 to continue, press 2 to stop.");
if(x==1){
	player(user);
}
else 
	if(x==2){computer(compArray, compSum);
  }
else{alert("You have to enter 1 or 2");
	option();
}
 }
 
 //Main program 
mainFunction();


 
 