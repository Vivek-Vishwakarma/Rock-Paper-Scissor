function rpsgame(choice){
    var human , bot;
    var hchoice = choice.id;

    bot = numtoc(random());
    console.log(bot);

    var result = win(hchoice, bot);
    console.log(result);

    message = fmessage(result);
    console.log(message);

    front(hchoice,bot,message);

}
function random(){
    return Math.floor(Math.random() * 3);
}
function numtoc(number){
    return ["rock", "paper", "scissor"][number];
}
function win(human,bot){
    var database = {
        "rock" : {"rock":0.5, "paper":0, "scissor":1},
        "paper" : {"rock":1, "paper":0.5, "scissor":0},
        "scissor" : {"rock":0, "paper":1, "scissor":0.5}
    };

    var humanScore = database[human][bot];
    var botScore = database[bot][human];
    return [humanScore , botScore];
}
function fmessage([humanScore,botScore]){
    if(humanScore === 0){
        return {'message': 'You Lost' , 'colour' : 'red'}
    }
    else if(humanScore === 0.5){
        return {'message': "It's a Tie" , 'colour' : 'blue'}
    }
    else{
        return {'message': 'You Win' , 'colour' : 'Green'}
    }
}
function front(humanimage,botimage,finalmessage){
    var imgdb = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissor' : document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var hdiv = document.createElement('div');
    var bdiv = document.createElement('div');
    var mdiv = document.createElement('div');

    hdiv.innerHTML = "<img src='" + imgdb[humanimage] + "'height = 150 width = 150>"
    mdiv.innerHTML = "<h1 style='color: " + finalmessage['colour'] +"; fint-size: 60px; padding:40px '>" + finalmessage['message'] + "</h1>"
    bdiv.innerHTML = "<img src='" + imgdb[botimage] + "'height = 150 width = 150>"
    document.getElementById('bottom').appendChild(hdiv);
    document.getElementById('bottom').appendChild(mdiv);
    document.getElementById('bottom').appendChild(bdiv);
    
}