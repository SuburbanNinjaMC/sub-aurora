javascript:
alert("Welcome to Sub Aurora 0.07.");
alert("My name is SuburbanNinjaMC.");
alert("Press 'J (uppercase)' to begin.");
console.log("Sub Aurora 0.07 Installed on your page. Thank you for choosing us.");
document.onkeypress = function(e) {
  if (e.keyCode == 74) {
     var a = prompt("Now what may I do for you?");
     switch (a) {
       case "nothing":
         javascript: alert("Ok. Thank you for your assistance.");
         break;
       case "dictionary":
         javascript: window.open("http://dictionary.com");
         break;
       case "friendly chat":
         javascript: var test = Math.floor(Math.random() * 4) + 1;
	 	 switch (test) {
			 case 1: 
	 			 javascript: alert("Oh I'm fine thank you. This one lady decided to turn up the music so high it broke my window when I was driving to the store.");
         		 	 alert("People can be such imbeciles, you know?");
         		 	 alert("I know you do.");
				 break;
			 case 2:
				 javascript: alert("Fine. However, I had one too many gummy bears.");
				 alert("Now I'm sugar high.");
				 alert("*sigh*");
				 break;
			 case 3:
				 javascript: alert("Not good at all.");
				 alert("I had a drivers test. And I failed.");
				 alert("Aren't I supposed to be your driver?");
				 alert("RIP in pieces you.");
				 break;
			 case 4:
				 javascript: alert("Very good!");
				 alert("I smok- I mean ate a lot of wee- I mean popcorn.");
				 alert("That movie was good wasn't it?");
				 alert("No? Well, screw you.");
				 break;
		     }
         break;
       case "help":
         javascript: alert("Help is on the way!");
         alert("Commands to use \nnothing \ndictionary \nfriendly chat \ntake me to your leader \nslogin \nPress L \ncrash \nPress Q (replace)");
         break;
       case "take me to your leader":
         javascript: window.open("http://marsubia.x10.mx/");
         break;
       case "secret":
         javascript: alert("No.");
         break;
       case "crash":
         javascript: 
         var d = confirm("Are you sure?");
         if (d == true) {
             javascript: txt = "PRANKD";
             while (1) {
               txt += "PRANKD";
             }
	 }
         else if (d == false) {
             javascript: alert("Ok. But be careful.");
         }
         break;
         case "You suck": 
          javascript:alert('Oh. Sassy now, are you? You will be punished.'); 
          var a = "You suck balls";
	        for (i == 0; i < 20; i++) {
		        javascript: var b = window.open("", "b", "width:100px");
		        b.document.write("<body contenteditable='true'><title>Y U do dis</title>" + a + "</body>");
	        }   
     }
  } 
  
  if (e.keyCode == 79) {
    alert("You now have the power to edit this website.");
    alert("Use it wisely.");
    javascript: document.body.contentEditable = 'true'; document.designMode='on'; void 0.
  }
  
  if (e.keyCode == 81) {
	  var b = prompt("Header, Paragraph, or Whole? (h, p, w)");
	  switch (b) {
		  case "h":
			  var c = prompt("Replace all headers with this:");
			  links = document.getElementsByTagName("h1");
			  for (l in links) {
				  links[l].innerText = c;
			  }
			  links = document.getElementsByTagName("h2");
			  for (l in links) {
				  links[l].innerText = c;
			  }
			  links = document.getElementsByTagName("h3");
			  for (l in links) {
				  links[l].innerText = c;
			  }
			  break;
		  case "p":
			  var c = prompt("Replace all paragraph words with this:");
			  for (l in links) {
      			links[l].innerText = c;
    			}
   				linkstwo = document.getElementsByTagName('p');
    			for (m in linkstwo) {
      				linkstwo[m].innerText = c;
    			}
    			linksthree = document.getElementsByTagName('li');
    			for (n in linksthree) {
      				linksthree[n].innerText = c;
    			}
			  break;
		  case "w":
   	 		var c = prompt("Replace all words with this:");
    		links = document.getElementsByTagName('a');
    		for (l in links) {
      			links[l].innerText = c;
    		}
   			linkstwo = document.getElementsByTagName('p');
    		for (m in linkstwo) {
      			linkstwo[m].innerText = c;
    		}
    		linksthree = document.getElementsByTagName('li');
    		for (n in linksthree) {
      			linksthree[n].innerText = c;
    		}
    		links = document.getElementsByTagName('h1');
    		for (o in links) {
      			links[o].innerText = c;
    		}
		links = document.getElementsByTagName("h2");
		for (l in links) {
			links[l].innerText = c;
		 }
		links = document.getElementsByTagName("h3");
		for (l in links) {
			links[l].innerText = c;
		}
			  break;
	}
  }
  
  if (e.keyCode == 84) {
    for (var i = 0; i < 5; i++) {
      window.open("", _blank);
    }
  }
}


  


