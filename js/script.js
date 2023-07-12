function startGame()
{   
	document.getElementById('start').style.visibility='hidden';
	var as = ["clr","clr1","clr2","clr","clr1","clr2"];  
	var s = as.sort(func);  
	var card=document.getElementsByClassName("card");
	var show=[];
	var win=0;
	  // give the card random colors  
	function func(a, b) 
	{  
	  return 0.5 - Math.random();
	}  
	card=Array.from(card);
	for (var i = 0; i < card.length; i++) 
	{
		card[i].parentElement.classList.add(s[i]);
	}
	//  give the user hint at the game start and hide the cards again after half second
	card.map(function(element){
			element.classList.add("hide");
		});
	setTimeout(function(){
		card.map(function(element){
			element.classList.remove("hide");
		})

	},500)
	// add event listener on click 
	card.map(function(element){
	element.addEventListener("click",function()
		{
			element.classList.add("hide");
			show.push(element);
		    if(show.length==2)
			{ 	
				if(show[0].parentElement.getAttribute('class')!=show[1].parentElement.getAttribute('class'))
				{
				setTimeout(function(){
					show[0].classList.remove("hide");
				    show[1].classList.remove("hide");
				    show=[];
					},300);
				
				}
				else{
					setTimeout(function(){
					show[0].parentElement.classList.add("hide");
					show[1].parentElement.classList.add("hide");
					show=[];
					win+=2;
					if(win==6)
					{
						clearInterval(time);
						document.getElementsByClassName('row2')[0].classList.add("hide");
						document.getElementsByClassName('row1')[0].innerHTML="<h1><br>Parabéns!<br><br>Você passou com sucesso o Nível 1<br><h1>com ( "+(59-t)+" ) segundos!</h1><h1>Ir para <a href='Fase2.html' style='text-decoration:none;'>Nível 2</a>?</h1><br><br><br><br></h1>";
						show=[];
					}	
					},300);
				}
			}
			
		});

	});
	// Game over after 1 minute 
	var t=60;
	var time=setInterval(function(){
		document.getElementById("time").innerHTML = "Time : "+t--;
	 	if(t<0){
	  		clearInterval(time);
	  		if(win<6)
	  		{
	  			document.getElementsByClassName('row2')[0].classList.add("hide");
		    	document.getElementsByClassName('row1')[0].innerHTML="<h1><br><br><br><br>FIM DE JOGO!<br><br><br><br><br><br></h1>";
		    }
		}
	},1000);

}
