let gameState = {};

document.addEventListener('DOMContentLoaded', function() {
    loadGame();
    setupEventHandlers();
});

function setupEventHandlers()
{
    document.getElementById('strengthPotion').addEventListener('click', function() {
        gameState.strength++;

        updateDOM();
    });
}

function loadGame()
{
    // pretend this game from a cooke, or database, or local storage, or whatever
    gameState = {
        name: 'Ben',
        strength: 5,
    };

    updateDOM();
}

function updateDOM()
{
    let playerNameElements = document.getElementsByClassName('playerName');

    for(let i = 0; i < playerNameElements.length; i++)
    {
        playerNameElements[i].innerText = gameState.name;
    }

    let strengthElements = document.getElementsByClassName('playerStrength');

    for(let i = 0; i < strengthElements.length; i++)
    {
        strengthElements[i].innerText = gameState.strength;
    }
}
