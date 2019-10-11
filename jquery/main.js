let gameState = {};

$(function() {
    loadGame();
    setupEventListeners();
});

function setupEventListeners()
{
    $('#strengthPotion').on('click', function() {
        gameState.strength++;

        updateDOM();
    });
}

function loadGame()
{
    gameState = {
        name: 'Ben',
        strength: 5,
    };

    updateDOM();
}

function updateDOM()
{
    $('.playerName').text(gameState.name);
    $('.playerStrength').text(gameState.strength);
}

