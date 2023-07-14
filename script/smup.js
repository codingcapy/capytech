/*
 Author: Paul Kim
 Date: July 13, 2023
 Version: 1.0
 Shoot Em Up Game Project 
 */

/*Variable declarations and definitions*/

const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');
const livesDisplay = document.getElementById('lives');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const gameOver = document.getElementById('game-over');
let maxEnemyXPosition = 300;
if (window.innerWidth < 740) {
    canvas.width = 300;
    canvas.height = 500;
    gameOver.style.left = '15px';
    gameOver.style.top = '540px';
    levelDisplay.style.left = '220px';
    maxEnemyXPosition = 180;
}
else {
    canvas.width = 500;
    canvas.height = 695;
}
const $upButton = $('#up-button');
const $leftButton = $('#left-button');
const $downButton = $('#down-button');
const $rightButton = $('#right-button');
const $shootButton = $('#shoot-button');
let level = 0;
let score = 0;
let lives = 5;
livesDisplay.innerHTML = `<p>Lives: ${lives}</p>`;
scoreDisplay.innerHTML = `<p>Score: ${score}</p>`;
levelDisplay.innerHTML = `<p>Level: ${level}</p>`;
const spaceshipWidth = 75;
const spaceshipHeight = 75;
const playerVel = 5;
const globalCooldown = 5;
const keys = { up: { pressed: false }, left: { pressed: false }, down: { pressed: false }, right: { pressed: false }, Space: { pressed: false } };
let enemies = ['../../assets/red_enemy.png', '../../assets/red_enemy2.png', '../../assets/blue_enemy.png', '../../assets/blue_enemy2.png'];
let wave = [];
let waveSize = 0;

/*class declarations and definitions*/

class Sprite {
    constructor({ position, imageSrc }) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
    }
    draw() {
        canvasContext.drawImage(
            this.image,
            this.position.x,
            this.position.y
        )
    }
} // end class Sprite

class Ship {
    constructor({ position, health = 100 }) {
        this.position = position;
        this.shipImg = new Image();
        this.laserImg = new Image();
        this.health = health;
        this.lasers = [];
        this.height = spaceshipHeight;
        this.width = spaceshipWidth;
    }
    shoot() {
        this.cooldown();
        if (this.cooldownCounter == 0) {
            const laser = {
                position: {
                    x: this.position.x + this.width / 2 - this.width / 4,
                    y: this.position.y - this.height / 4
                },
                width: 30,
                height: 45
            }
            this.lasers.push(laser);
            this.cooldownCounter = 1;
            // this.lasers.forEach(laser => {
            //     wave.forEach(enemy => {
            //         const enemyIndex = enemies.indexOf(enemy);
            //         const laserIndex = this.lasers.indexOf(laser);
            //         if (isColliding({ rectangle1: laser, rectangle2: enemy })) {
            //             score += 1;
            //             scoreDisplay.innerHTML = `<p>Score: ${score}</p>`;
            //             wave.splice(enemyIndex, 1);
            //             player.lasers.splice(laserIndex, 1);
            //         }
            //     });
            // })
        }
    }
    draw() {
        canvasContext.drawImage(
            this.shipImg,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
} // end class Ship

class Player extends Ship {
    constructor({ position, velocity, health = 100 }) {
        super({ position, health })
        this.shipImg = new Image();
        this.shipImg.src = '../../assets/spaceship.png';
        this.velocity = velocity;
        this.laserImg = new Image();
        this.laserImg.src = '../../assets/bullet.png';
        this.lasers = [];
        this.cooldownCounter = 0;
    }
    cooldown() {
        if (this.cooldownCounter >= globalCooldown) {
            this.cooldownCounter = 0;
        }
        else if (this.cooldownCounter > 0) {
            this.cooldownCounter++;
        }
    }
    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        for (let i = 0; i < this.lasers.length; ++i) {
            const laser = this.lasers[i];
            laser.position.y -= 8;
            const laserIndex = this.lasers.indexOf(laser);
            if (laser.position.y < 0) {
                player.lasers.splice(laserIndex, 1);
            }
            canvasContext.drawImage(
                this.laserImg,
                laser.position.x,
                laser.position.y,
                laser.width,
                laser.height
            )
        } // end for
    }
} // end class Player

class Enemy extends Ship {
    constructor({ position, health = 100, imageSrc }) {
        super({ position, health })
        this.shipImg = new Image();
        this.shipImg.src = imageSrc;
    }
    update() {
        this.position.y++;
        this.draw();
    }
} // end class Enemy

/*class object instatiations*/

const background = new Sprite({ position: { x: 0, y: 0 }, imageSrc: '../../assets/background_image2.jpeg' });
const player = new Player({ position: { x: canvas.width / 2 - spaceshipWidth / 2, y: canvas.height / 2 }, velocity: { x: 0, y: 0 } });

/*function declarations and definitions*/

function animate() {
    window.requestAnimationFrame(animate);
    if (lives < 0) {
        gameOver.innerHTML = `<h1>Game Over</h1>`;
        return;
    }
    // canvasContext.fillStyle = 'black';
    // canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    background.draw();
    if (wave.length == 0) {
        level += 1;
        waveSize += 5;
        livesDisplay.innerHTML = `<p>Lives: ${lives}</p>`;
        levelDisplay.innerHTML = `<p>Level: ${level}</p>`;
        for (let i = 0; i < waveSize; ++i) {
            let enemy = new Enemy({ imageSrc: enemies[Math.floor(Math.random() * enemies.length)], position: { x: Math.floor(Math.random() * (maxEnemyXPosition)) + 50, y: Math.floor(Math.random() * (-200)) + -50 } });
            wave.push(enemy);
        }
    }
    wave.forEach(enemy => {
        const enemyIndex = enemies.indexOf(enemy);
        if (isColliding({ rectangle1: player, rectangle2: enemy })) {
            lives -= 1;
            livesDisplay.innerHTML = `<p>Lives: ${lives}</p>`;
            wave.splice(enemyIndex, 1);
        }
        if (enemy.position.y > 695) {
            wave.splice(enemyIndex, 1);
        }
        enemy.update();
    });
    player.update();
    player.velocity.x = 0;
    player.velocity.y = 0;
    if (keys.up.pressed && player.position.y > 0) {
        player.velocity.y = -3;
    }
    if (keys.left.pressed && player.position.x > 0) {
        player.velocity.x = -3;
    }
    if (keys.down.pressed && player.position.y < canvas.height - player.height) {
        player.velocity.y = 3;
    }
    if (keys.right.pressed && player.position.x < canvas.width - player.width) {
        player.velocity.x = 3;
    }
    if (keys.Space.pressed) {
        player.shoot();
    }
    wave.forEach(enemy => {
        const enemyIndex = enemies.indexOf(enemy);
        player.lasers.forEach(laser => {
            const laserIndex = player.lasers.indexOf(laser);
            if (isColliding({ rectangle1: laser, rectangle2: enemy })) {
                score += 100;
                scoreDisplay.innerHTML = `<p>Score: ${score}</p>`;
                wave.splice(enemyIndex, 1);
                player.lasers.splice(laserIndex, 1);
            }
        })
    });
} // end function animate

function isColliding({ rectangle1, rectangle2 }) {
    return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y);
} // end function isColliding

/*event listeners*/

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            keys.up.pressed = true;
            break;
        case 'a':
            keys.left.pressed = true;
            break;
        case 's':
            keys.down.pressed = true;
            break;
        case 'd':
            keys.right.pressed = true;
            break;
        case 'l':
            keys.Space.pressed = true;
            break;
    } // end switch
}); // end event listener

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            keys.up.pressed = false;
            break;
        case 'a':
            keys.left.pressed = false;
            break;
        case 's':
            keys.down.pressed = false;
            break;
        case 'd':
            keys.right.pressed = false;
            break;
        case 'l':
            keys.Space.pressed = false;
            break;
    } // end switch
}) // end event listener

/*Button binds*/

$upButton.bind('touchstart mousedown', function () {
    keys.up.pressed = true;
});

$upButton.bind('touchend mouseup', function () {
    keys.up.pressed = false;
});

$leftButton.bind('touchstart mousedown', function () {
    keys.left.pressed = true;
});

$leftButton.bind('touchend mouseup', function () {
    keys.left.pressed = false;
});
$downButton.bind('touchstart mousedown', function () {
    keys.down.pressed = true;
});
$downButton.bind('touchend mouseup', function () {
    keys.down.pressed = false;
});

$rightButton.bind('touchstart mousedown', function () {
    keys.right.pressed = true;
});

$rightButton.bind('touchend mouseup', function () {
    keys.right.pressed = false;
});

$shootButton.bind('touchstart mousedown', function () {
    keys.Space.pressed = true;
});

$shootButton.bind('touchend mouseup', function () {
    keys.Space.pressed = false;
});

/*function call*/

animate();
