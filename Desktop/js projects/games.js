function hawGame(choice)
{
    playerChoice = choice.id;
    console.log(playerChoice);
    botChoice = intToChoice(randomNum());
    console.log(botChoice);
    victor = decideVictor(playerChoice, botChoice);
    console.log(victor);
    message = messageToDisplay(victor)
    console.log(message['message']);
    frontEnd = UserInterface(playerChoice, botChoice, message);
}

function randomNum()
{
    return Math.floor(Math.random() * 3)
}

function intToChoice(number)
{
    return ['hare', 'arrow', 'wall'][number]
}

function decideVictor(yourChoice, computerChoice)
{
    choices = {
        'hare': {'wall': 1, 'hare': 0.5, 'arrow': 0},
        'arrow': {'hare': 1, 'arrow': 0.5, 'wall': 0},
        'wall': {'arrow': 1, 'wall': 0.5, 'hare': 0}
    }

    let yourScore = choices[yourChoice][computerChoice]
    return yourScore;
}

function messageToDisplay(score)
{
    if (score === 0)
    {
        return {'message': 'You Lost', 'color': 'red'};
    }

    if (score === 1)
    {
        return {'message': 'You won', 'color': 'green'};
    }

    if (score === 0.5)
    {
        return {'message': 'You tied', 'color': 'blue'};
    }
}

function UserInterface(humanChoice, computerChoice, finalMessage)
{

    var imagesDatabase = {
        'hare': document.getElementById('hare').src,
        'arrow': document.getElementById('arrow').src,
        'wall': document.getElementById('wall').src
    }

    document.getElementById('hare').remove();
    document.getElementById('arrow').remove();
    document.getElementById('wall').remove();

    var playerdiv = document.createElement('div');
    var messagediv = document.createElement('div');
    var computerdiv = document.createElement('div');


    playerdiv.innerHTML = "<img src='"+ imagesDatabase[humanChoice] + "' height=150 width=150><h3> Your Choice </h3>";
    messagediv.innerHTML = "<h2 style='font-size: 40px; color: "+finalMessage['color'] + "'>" + finalMessage['message'] + "</h2>";
    computerdiv.innerHTML = "<img src='"+ imagesDatabase[computerChoice] +"' height=150 width=150><h3> Computer's Choice</h3>";

    document.getElementById('haw-images').appendChild(playerdiv);
    document.getElementById('haw-images').appendChild(messagediv);
    document.getElementById('haw-images').appendChild(computerdiv);

}

function reload()
{
    window.location.reload();
}

function rpsGame(HumanChoice)
{
    yourChoice = HumanChoice.id;
    console.log(yourChoice);
    RobotChoice = NumberToChoice(RandomNumber());
    console.log(RobotChoice);
    winner = decideWinner(yourChoice, RobotChoice);
    console.log(winner);
    Remarks = finalRemarks(winner);
    console.log(Remarks['message']);
    Display = FrontDisplay(yourChoice, RobotChoice, Remarks);
}

function RandomNumber()
{
    return Math.floor(Math.random() * 3);
}

function NumberToChoice(integer)
{
    return['rock', 'paper', 'scissors'][integer];
}

function decideWinner(human, bot)
{
    possibilities = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }
    return possibilities[human][bot];
}

function finalRemarks(result)
{
    if (result === 1)
    {
        return {'message': 'You Won', 'color': 'green'};
    }
    if (result === 0.5)
    {
        return {'message': 'You tied', 'color': 'blue'};
    }
    if (result === 0)
    {
        return {'message': 'You lost', 'color': 'red'};
    }
}

function FrontDisplay(human, robot, outlook)
{

    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var Message = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" +imagesDatabase[human] + "' height=150 width=150> <h3>Your Choice</h3>";
    Message.innerHTML = "<h3 style='color: " + outlook['color'] + "'>"+ outlook['message'] + "</h3>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[robot] + "' height=150 width=150> <h3>Computer's Choice</h3>";

    document.getElementById("rps-img-flex-box").appendChild(humanDiv);
    document.getElementById("rps-img-flex-box").appendChild(Message);
    document.getElementById("rps-img-flex-box").appendChild(botDiv);
    div.innerHTML = playerChoice + finalMessage + botChoice;
}
