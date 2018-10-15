var inquirer = require("inquirer");

function Players(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = parseInt(offense);
    this.defense = parseInt(defense);
    this.goodGame = function () {
        var coinFlip = Math.round(Math.random());
        if (coinFlip = 1) {
            this.offense += 1;
        } else if (coinFlip = 0) {
            this.defense += 1;
        }
    }
    this.badGame = function () {
        var coinFlip = Math.round(Math.random());
        if (coinFlip = 1) {
            this.offense -= 1;
        } else if (coinFlip = 0) {
            this.defense -= 1;
        }
    }
    this.printStats = function () {
        console.log("Player Name: " + this.name + "\nPlayer Position: " + this.position + "\nOffense Stat: " + this.offense + "\nDefense Stat: " + this.defense);
    }
}

var count = 0;

var starters = [];

var subs = [];
var createPlayer = function () {
    if (count < 2) {
        console.log("Choose starting player " + parseInt(count + 1) + ".")
        inquirer.prompt([{
            name: "name",
            message: "What is the players name?"
        }, {
            name: "position",
            message: "What is the players position?"
        }, {
            name: "offense",
            message: "Players Offense Stat (1-10)"
        }, {
            name: "defense",
            message: "Players Defense Stat (1-10)"
        }]).then(function (answers) {
            var newPlayer = new Players(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense);

            starters.push(newPlayer);
            count++;
            createPlayer();
        });
    } else if (count === 2) {
        console.log("Choose sub player")
        inquirer.prompt([{
            name: "name",
            message: "What is the players name?"
        }, {
            name: "position",
            message: "What is the players position?"
        }, {
            name: "offense",
            message: "Players Offense Stat (1-10)"
        }, {
            name: "defense",
            message: "Players Defense Stat (1-10)"
        }]).then(function (answers) {
            var newPlayer = new Players(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense);

            subs.push(newPlayer);
            count++;
            createPlayer();
        });

    } else {
        console.log("\n")
        resetCount();
        starters.forEach(element => {
            element.printStats();
            console.log("\n")

        });
        subs.forEach(element => {
            element.printStats();
            console.log("\n")

        });
        console.log(count+" "+teamScore)
        playGame();
    }
}

createPlayer();

var resetCount = function () {
    teamScore = 0;
    count = 0;
}
var teamScore = 0;
var playGame = function () {
    if (count > 0 && count < 5) {
        inquirer.prompt([{
            name: "yesorno",
            message: "Would you like to swap a starter with a sub player?",
            type: "confirm"
        }]).then(function (answers) {
            if (answers.yesorno === true) {
                inquirer.prompt([{
                    name: "playerselect",
                    type: "list",
                    message: "Sub Player (" + subs[0].name + ") Select the player to switch out with the sub: ",
                    choices: [starters[1].name, starters[0].name]
                }]).then(function (answers) {
                    if (answers.playerselect === starters[0].name) {
                        starters.push(subs[0])
                        subs.push(starters[0])
                        starters.shift();
                        subs.shift();
                        console.log(starters)
                        console.log(subs)
                        gameFunc();
                    }
                    else if (answers.playerselect === starters[1].name) {
                        // starters.push(subs[0])
                        subs.push(starters[1])
                        starters.splice(1, 1, subs[0]);
                        subs.shift();
                        console.log(starters)
                        console.log(subs)
                        gameFunc();
                    }

                    console.log(answers.playerselect)
                })
            } else {
                gameFunc();
            }
        })
    } else if (count === 5) {
        if (teamScore > 0){
            console.log("You won! New starter stats: ")
            starters.forEach(element => {
                element.goodGame();
            });
            
            starters.forEach(element => {
                element.printStats();
            });
        }
        else if (teamScore < 0) {
            console.log("Sorry, but you lost the match.")
            starters.forEach(element => {
                element.badGame();
            });
        } else {
            console("You had a tie game.")
        }
        newGame();
    } else {
        gameFunc();
    }

}

var newGame = function () {
    resetCount();
    inquirer.prompt([
        {
            name: "newgame",
            type: "confirm",
            message: "Would you like to play again?"
        }]).then(function(answers){
            if(answers.newgame === true) {
                playGame();
            } else {
                return false;
            }
        })
}

var gameFunc = function () {
    count++;
    var player1off = starters[0].offense;
    var player2off = starters[1].offense;
    var player1def = starters[0].defense;
    var player2def = starters[1].defense;
    var combinedTeamOffense = parseInt(player1off + player2off);
    var combinedTeamDefense = parseInt(player1def + player2def);
    var cpuOffense = Math.floor(Math.random() * 20) + 1;
    var cpuDefense = Math.floor(Math.random() * 20) + 1;
    if (cpuOffense < combinedTeamOffense) {
        teamScore++;
    }
    if (cpuDefense > combinedTeamDefense) {
        teamScore--;
    }
    console.log(teamScore)
    playGame();
}