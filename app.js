/*
author: capytech
date: August 2, 2023
version: 1.0
description: web server for capytech
*/

const http = require('http');
const fs = require("fs");
const port = 5000;
const homePage = './html/index.html'
const aboutPage = './html/about/index.html';
const portfolioPage = './html/portfolio/index.html';
const portfolio1Page = './html/portfolio/portfolio1.html';
const portfolio2Page = './html/portfolio/portfolio2.html';
const portfolio3Page = './html/portfolio/portfolio3.html';
const portfolio4Page = './html/portfolio/portfolio4.html';
const portfolio5Page = './html/portfolio/portfolio5.html';
const portfolio6Page = './html/portfolio/portfolio6.html';
const portfolio7Page = './html/portfolio/portfolio7.html';
const portfolio8Page = './html/portfolio/portfolio8.html';
const articlesPage = './html/articles/index.html';
const article1Page = './html/articles/article1.html';
const article2Page = './html/articles/article2.html';
const article3Page = './html/articles/article3.html';
const resumePage = './html/resume/index.html';
const contactPage = './html/contact/index.html';
const zeroHourFont = './font/zero-hour.otf';
const homeStyle = './css/style.css';
const articlesStyle = './css/articles-style.css';
const normalizeStyle = './css/normalize.css';
const platformStyle = './css/platform-game.css';
const portfolioStyle = './css/portfolio-style.css';
const redKnightStyle = './css/red-knight.css';
const smupStyle = './css/smup.css';
const homeLogic = './script/menu.js';
const homeLogic2 = './script/jquery-3.7.0.min.js';
const gsap = './script/gsap.js';
const platformLogic = './script/platform_game.js';
const redKnightLogic = './script/red_knight.js';
const smupLogic = './script/smup.js';
const homeLogo = './html/image/capyness.png';
const pythonLogo = './html/image/python.png';
const javaLogo = './html/image/java.png';
const cLogo = './html/image/c.png';
const htmlLogo = './html/image/html5.png';
const cssLogo = './html/image/css3.png';
const jsLogo = './html/image/javascript.png';
const sqlLogo = './html/image/sql.png';
const nodeLogo = './html/image/nodejs.png';
const reactLogo = './html/image/Reactjs.png';
const portfolio1Logo = './html/video/capy-game-design1.mp4';
const portfolio2Logo = './html/video/capy-game-design3.mp4';
const portfolio3Logo = './html/image/banking-sys-prototype.jpg';
const portfolio4Logo = './html/image/art-gallery-web-app.jpg';
const portfolio5Logo = './html/image/banking-sys-python.jpg';
const portfolio6Logo = './html/image/red_knight.jpg';
const portfolio7Logo = './html/image/game-design1-1.jpg';
const portfolio8Logo = './html/image/platform_game.jpg';
const article1Logo = './html/image/scrum-board.jpg';
const article2Logo = './html/image/scrum-project-board.jpg';
const article3Logo = './html/image/chatgpt.jpg';
const paulKim = './html/image/paul_kim.jpg';
const paulImg = './html/image/text-effect.jpg';
const resume = './html/image/paulkim_resume_2023.jpg';
const platformBg = './assets/background.png';
const platformIdle = './assets/Idle.png';
const platformIdleLeft = './assets/IdleLeft.png';
const platformRun = './assets/Run.png';
const platformRunLeft = './assets/RunLeft.png';
const platformJump = './assets/Jump.png';
const platformJumpLeft = './assets/JumpLeft.png';
const platformFall = './assets/Fall.png';
const platformFallLeft = './assets/FallLeft.png';
const platformDash = './assets/Dash1.png';
const platformDashLeft = './assets/DashLeft1.png';
const platformAttack1 = './assets/Attack1.png';
const platformAttack1Left = './assets/AttackLeft1.png';
const platformAttack2 = './assets/Attack2.png';
const smupBg = './assets/background_image2.jpeg';
const smupPlayer = './assets/spaceship.png';
const smupRedEnemy = './assets/red_enemy.png';
const smupRedEnemy2 = './assets/red_enemy2.png';
const smupBlueEnemy = './assets/blue_enemy.png';
const smupBlueEnemy2 = './assets/blue_enemy2.png';
const smupPlayerBullet = './assets/bullet.png';
const rpgBg = './assets/tiled/background.png';
const rpgFg = './assets/tiled/foreground.png';
const rpgPlayer = './assets/player/down/down_all.png';
const rpgPlayerLeft = './assets/player/left/left_all.png';
const rpgPlayerUp = './assets/player/up/up_all.png';
const rpgPlayerRight = './assets/player/right/right_all.png';
const rpgBattleBg = './assets/battle_background.jpg';
const rpgMonster = './assets/monster/mushroom2.png';
const rpgPlayerBattle = './assets/player/right/right_0.png';
const rpgPlayerSlash = './assets/player/right_attack/attack_right.png';
const siteManifest = './html/site.webmanifest';
const siteManifestPortfolio = './html/portfolio/site.webmanifest';
const siteManifestArticles = './html/articles/site.webmanifest';
const siteManifestResume = './html/resume/site.webmanifest';
const siteManifestAbout = './html/about/site.webmanifest';
const siteManifestContact = './html/contact/site.webmanifest';
const faviconBig = './html/favicon-32x32.png';
const faviconSmall = './html/favicon-16x16.png';

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url == '/') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(homePage).pipe(res);
        }
    }
    else if (url == '/html/index.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(homePage).pipe(res);
        }
    }
    // styles request response
    else if (url == '/css/style.css') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/css' });
            fs.createReadStream(homeStyle).pipe(res);
        }
    }
    else if (url == '/css/articles-style.css') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/css' });
            fs.createReadStream(articlesStyle).pipe(res);
        }
    }
    else if (url == '/css/normalize.css') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/css' });
            fs.createReadStream(normalizeStyle).pipe(res);
        }
    }
    else if (url == '/css/platform-game.css') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/css' });
            fs.createReadStream(platformStyle).pipe(res);
        }
    }
    else if (url == '/css/portfolio-style.css') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/css' });
            fs.createReadStream(portfolioStyle).pipe(res);
        }
    }
    else if (url == '/css/red-knight.css') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/css' });
            fs.createReadStream(redKnightStyle).pipe(res);
        }
    }
    else if (url == '/css/smup.css') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/css' });
            fs.createReadStream(smupStyle).pipe(res);
        }
    }
    else if (url == '/font/zero-hour.otf') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/otf' });
            fs.createReadStream(zeroHourFont).pipe(res);
        }
    }
    // image and video request response
    else if (url == '/html/image/capyness.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/png' });
            fs.createReadStream(homeLogo).pipe(res);
        }
    }
    else if (url == '/html/image/python.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/png' });
            fs.createReadStream(pythonLogo).pipe(res);
        }
    }
    else if (url == '/html/image/java.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/png' });
            fs.createReadStream(javaLogo).pipe(res);
        }
    }
    else if (url == '/html/image/c.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/png' });
            fs.createReadStream(cLogo).pipe(res);
        }
    }
    else if (url == '/html/image/html5.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/png' });
            fs.createReadStream(htmlLogo).pipe(res);
        }
    }
    else if (url == '/html/image/css3.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/png' });
            fs.createReadStream(cssLogo).pipe(res);
        }
    }
    else if (url == '/html/image/javascript.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/png' });
            fs.createReadStream(jsLogo).pipe(res);
        }
    }
    else if (url == '/html/image/sql.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/png' });
            fs.createReadStream(sqlLogo).pipe(res);
        }
    }
    else if (url == '/html/image/nodejs.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/png' });
            fs.createReadStream(nodeLogo).pipe(res);
        }
    }
    else if (url == '/html/image/Reactjs.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/png' });
            fs.createReadStream(reactLogo).pipe(res);
        }
    }
    else if (url == '/html/image/text-effect.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(paulImg).pipe(res);
        }
    }
    else if (url == '/html/video/capy-game-design1.mp4') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'video/mp4' });
            fs.createReadStream(portfolio1Logo).pipe(res);
        }
    }
    else if (url == '/html/video/capy-game-design3.mp4') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(portfolio2Logo).pipe(res);
        }
    }
    else if (url == '/html/image/banking-sys-prototype.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(portfolio3Logo).pipe(res);
        }
    }
    else if (url == '/html/image/art-gallery-web-app.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(portfolio4Logo).pipe(res);
        }
    }
    else if (url == '/html/image/banking-sys-python.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(portfolio5Logo).pipe(res);
        }
    }
    else if (url == '/html/image/red_knight.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(portfolio6Logo).pipe(res);
        }
    }
    else if (url == '/html/image/game-design1-1.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(portfolio7Logo).pipe(res);
        }
    }
    else if (url == '/html/image/platform_game.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(portfolio8Logo).pipe(res);
        }
    }
    else if (url == '/html/image/scrum-board.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(article1Logo).pipe(res);
        }
    }
    else if (url == '/html/image/scrum-project-board.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(article2Logo).pipe(res);
        }
    }
    else if (url == '/html/image/chatgpt.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(article3Logo).pipe(res);
        }
    }
    else if (url == '/html/image/paul_kim.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(paulKim).pipe(res);
        }
    }
    else if (url == '/html/image/paulkim_resume_2023.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(resume).pipe(res);
        }
    }
    else if (url == '/assets/background.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformBg).pipe(res);
        }
    }
    else if (url == '/assets/Idle.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformIdle).pipe(res);
        }
    }
    else if (url == '/assets/IdleLeft.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformIdleLeft).pipe(res);
        }
    }
    else if (url == '/assets/Jump.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformJump).pipe(res);
        }
    }
    else if (url == '/assets/JumpLeft.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformJumpLeft).pipe(res);
        }
    }
    else if (url == '/assets/Fall.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformFall).pipe(res);
        }
    }
    else if (url == '/assets/FallLeft.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformFallLeft).pipe(res);
        }
    }
    else if (url == '/assets/Run.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformRun).pipe(res);
        }
    }
    else if (url == '/assets/RunLeft.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformRunLeft).pipe(res);
        }
    }
    else if (url == '/assets/Dash1.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformDash).pipe(res);
        }
    }
    else if (url == '/assets/DashLeft1.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformDashLeft).pipe(res);
        }
    }
    else if (url == '/assets/Attack1.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformAttack1).pipe(res);
        }
    }
    else if (url == '/assets/Attack2.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformAttack2).pipe(res);
        }
    }
    else if (url == '/assets/AttackLeft.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformAttack1Left).pipe(res);
        }
    }
    else if (url == '/assets/AttackLeft2.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(platformAttack2Left).pipe(res);
        }
    }
    else if (url == '/assets/background_image2.jpeg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(smupBg).pipe(res);
        }
    }
    else if (url == '/assets/spaceship.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(smupPlayer).pipe(res);
        }
    }
    else if (url == '/assets/red_enemy.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(smupRedEnemy).pipe(res);
        }
    }
    else if (url == '/assets/red_enemy2.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(smupRedEnemy2).pipe(res);
        }
    }
    else if (url == '/assets/blue_enemy.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(smupBlueEnemy).pipe(res);
        }
    }
    else if (url == '/assets/blue_enemy2.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(smupBlueEnemy2).pipe(res);
        }
    }
    else if (url == '/assets/bullet.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(smupPlayerBullet).pipe(res);
        }
    }
    else if (url == '/assets/tiled/background.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(rpgBg).pipe(res);
        }
    }
    else if (url == '/assets/tiled/foreground.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(rpgFg);
        }
    }
    else if (url == '/assets/player/down/down_all.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(rpgPlayer).pipe(res);
        }
    }
    else if (url == '/assets/player/left/left_all.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(rpgPlayerLeft).pipe(res);
        }
    }
    else if (url == '/assets/player/up/up_all.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(rpgPlayerUp).pipe(res);
        }
    }
    else if (url == '/assets/player/right/right_all.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(rpgPlayerRight).pipe(res);
        }
    }
    else if (url == '/assets/battle_background.jpg') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(rpgBattleBg).pipe(res);
        }
    }
    else if (url == '/assets/monster/mushroom2.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(rpgMonster).pipe(res);
        }
    }
    else if (url == '/assets/player/right/right_0.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(rpgPlayerBattle).pipe(res);
        }
    }
    else if (url == '/assets/player/right_attack/attack_right.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/jpg' });
            fs.createReadStream(rpgPlayerSlash).pipe(res);
        }
    }
    else if (url == '/html/site.webmanifest') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/json' });
            fs.createReadStream(siteManifest).pipe(res);
        }
    }
    else if (url == '/html/favicon-32x32.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/png' });
            fs.createReadStream(faviconBig).pipe(res);
        }
    }
    else if (url == '/html/favicon-16x16.png') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'image/png' });
            fs.createReadStream(faviconSmall).pipe(res);
        }
    }
    // logic request response
    else if (url == '/script/menu.js') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/javascript' });
            fs.createReadStream(homeLogic).pipe(res);
        }
    }
    else if (url == '/script/jquery-3.7.0.min.js') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/javascript' });
            fs.createReadStream(homeLogic2).pipe(res);
        }
    }
    else if (url == '/script/gsap.js') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/javascript' });
            fs.createReadStream(gsap).pipe(res);
        }
    }
    else if (url == '/script/platform_game.js') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/javascript' });
            fs.createReadStream(platformLogic).pipe(res);
        }
    }
    else if (url == '/script/red_knight.js') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/javascript' });
            fs.createReadStream(redKnightLogic).pipe(res);
        }
    }
    else if (url == '/script/smup.js') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/javascript' });
            fs.createReadStream(smupLogic).pipe(res);
        }
    }
    // pages request response
    else if (url == '/html/about/index.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(aboutPage).pipe(res);
        }
    }
    else if (url == '/html/portfolio/index.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(portfolioPage).pipe(res);
        }
    }
    else if (url == '/html/portfolio/portfolio8.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(portfolio8Page).pipe(res);
        }
    }
    else if (url == '/html/portfolio/portfolio7.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(portfolio7Page).pipe(res);
        }
    }
    else if (url == '/html/portfolio/portfolio6.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(portfolio6Page).pipe(res);
        }
    }
    else if (url == '/html/portfolio/portfolio5.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(portfolio5Page).pipe(res);
        }
    }
    else if (url == '/html/portfolio/portfolio4.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(portfolio4Page).pipe(res);
        }
    }
    else if (url == '/html/portfolio/portfolio3.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(portfolio3Page).pipe(res);
        }
    }
    else if (url == '/html/portfolio/portfolio2.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(portfolio2Page).pipe(res);
        }
    }
    else if (url == '/html/portfolio/portfolio1.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(portfolio1Page).pipe(res);
        }
    }
    else if (url == '/html/articles/index.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(articlesPage).pipe(res);
        }
    }
    else if (url == '/html/articles/article1.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(article1Page).pipe(res);
        }
    }
    else if (url == '/html/articles/article2.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(article2Page).pipe(res);
        }
    }
    else if (url == '/html/articles/article3.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(article3Page);
        }
    }
    else if (url == '/html/resume/index.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(resumePage).pipe(res);
        }
    }
    else if (url == '/html/contact/index.html') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'text/html' });
            fs.createReadStream(contactPage).pipe(res);
        }
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>404 Error - Page not Found</h1>');
        res.end()
    }
})

server.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});




// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static('./css'));
// app.use(express.static('./script'));
// app.use(express.static('./assets'));
// app.use(express.static('./html/image'));
// app.use(express.static('./html/video'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname,'./html/index.html'));
// })

// app.all('*', (req, res) => {
//     res.status(404).send('404 page not found');
// })

// app.listen(5000, () => {
//     console.log('server listening on port: 5000');
// })