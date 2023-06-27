var minutes = 25;
var seconds = "00";

var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3");


function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

function start() {
    click.play();


   minutes = 24;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer(){
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;
    }

    function secondsTimer(){
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;

        if (seconds <= 0){
            if(minutes <= 0){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

               document.getElementById("done").innerHTML=
                " Session Completed! Take a Break."; 

               document.getElementById("done").classList.add("show_message");

               bell.play();
            }
            seconds = 60;
        }

    }
}




const arrayOfQuotes = [
    {'author': 'Nelson Mandela', 
        'quote': 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {'author': 'Walt Disney', 
        'quote': 'The way to get started is to quit talking and begin doing.'
    },
    {'author': 'Eleanor Roosevelt', 
        'quote': 'If life were predictable it would cease to be life, and be without flavor.'
    },
    {'author': 'Oprah Winfrey', 
        'quote': 'If you look at what you have in life, you`ll always have more. If you look at what you don`t have in life, you`ll never have enough'
    },
    {'author': 'James Cameron', 
        'quote': 'If you set your goals ridiculously high and it`s a failure, you will fail above everyone else`s success'
    },
    {'author': 'Elbert Hubbard', 
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': 'John Lennon', 
        'quote': 'Life is what happens when you`re busy making other plans.'
    }
];

// Create a function to generate quote from array

function generateQoute(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector("#generatedQuote")
    .textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector("#AuthorName")
    .textContent = `--${arrayOfQuotes[random].author}`;
}