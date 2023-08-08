/*
author: capytech
date: August 2, 2023
version: 1.0
notes: Server side script
*/

const http = require('http');
const { readFileSync } = require('fs');
const homePage = readFileSync('./html/index.html');
const aboutPage = readFileSync('./html/about/index.html');
const portfolioPage = readFileSync('./html/portfolio/index.html');
const portfolio1Page = readFileSync('./html/portfolio/portfolio1.html');
const portfolio2Page = readFileSync('./html/portfolio/portfolio2.html');
const portfolio3Page = readFileSync('./html/portfolio/portfolio3.html');
const portfolio4Page = readFileSync('./html/portfolio/portfolio4.html');
const portfolio5Page = readFileSync('./html/portfolio/portfolio5.html');
const portfolio6Page = readFileSync('./html/portfolio/portfolio6.html');
const portfolio7Page = readFileSync('./html/portfolio/portfolio7.html');
const portfolio8Page = readFileSync('./html/portfolio/portfolio8.html');
const articlesPage = readFileSync('./html/articles/index.html');
const article1Page = readFileSync('./html/articles/article1.html');
const article2Page = readFileSync('./html/articles/article2.html');
const article3Page = readFileSync('./html/articles/article3.html');
const resumePage = readFileSync('./html/resume/index.html');
const contactPage = readFileSync('./html/contact/index.html');
const zeroHourFont = readFileSync('./font/zero-hour.otf');
const homeStyle = readFileSync('./css/style.css');
const articlesStyle = readFileSync('./css/articles-style.css');
const normalizeStyle = readFileSync('./css/normalize.css');
const platformStyle = readFileSync('./css/platform-game.css');
const portfolioStyle = readFileSync('./css/portfolio-style.css');
const redKnightStyle = readFileSync('./css/red-knight.css');
const smupStyle = readFileSync('./css/smup.css');
const homeLogic = readFileSync('./script/menu.js');
const homeLogic2 = readFileSync('./script/jquery-3.7.0.min.js');
const gsap = readFileSync('./script/gsap.js');
const platformLogic = readFileSync('./script/platform_game.js');
const redKnightLogic = readFileSync('./script/red_knight.js');
const smupLogic = readFileSync('./script/smup.js');
const homeLogo = readFileSync('./html/image/capyness.png');
const pythonLogo = readFileSync('./html/image/python.png');
const javaLogo = readFileSync('./html/image/java.png');
const cLogo = readFileSync('./html/image/c.png');
const htmlLogo = readFileSync('./html/image/html5.png');
const cssLogo = readFileSync('./html/image/css3.png');
const jsLogo = readFileSync('./html/image/javascript.png');
const sqlLogo = readFileSync('./html/image/sql.png');
const nodeLogo = readFileSync('./html/image/nodejs.png');
const reactLogo = readFileSync('./html/image/Reactjs.png');
const portfolio1Logo = readFileSync('./html/video/capy-game-design1.mp4');
const portfolio2Logo = readFileSync('./html/video/capy-game-design3.mp4');
const portfolio3Logo = readFileSync('./html/image/banking-sys-prototype.jpg');
const portfolio4Logo = readFileSync('./html/image/art-gallery-web-app.jpg');
const portfolio5Logo = readFileSync('./html/image/banking-sys-python.jpg');
const portfolio6Logo = readFileSync('./html/image/red_knight.jpg');
const portfolio7Logo = readFileSync('./html/image/game-design1-1.jpg');
const portfolio8Logo = readFileSync('./html/image/platform_game.jpg');
const article1Logo = readFileSync('./html/image/scrum-board.jpg');
const article2Logo = readFileSync('./html/image/scrum-project-board.jpg');
const article3Logo = readFileSync('./html/image/chatgpt.jpg');
const paulKim = readFileSync('./html/image/paul_kim.jpg');
const paulImg = readFileSync('./html/image/text-effect.jpg');
const resume = readFileSync('./html/image/paulkim_resume_2023.jpg');
const platformBg = readFileSync('./assets/background.png');
const platformIdle = readFileSync('./assets/Idle.png');
const platformIdleLeft = readFileSync('./assets/IdleLeft.png');
const platformRun = readFileSync('./assets/Run.png');
const platformRunLeft = readFileSync('./assets/RunLeft.png');
const platformJump = readFileSync('./assets/Jump.png');
const platformJumpLeft = readFileSync('./assets/JumpLeft.png');
const platformFall = readFileSync('./assets/Fall.png');
const platformFallLeft = readFileSync('./assets/FallLeft.png');
const platformDash = readFileSync('./assets/Dash1.png');
const platformDashLeft = readFileSync('./assets/DashLeft1.png');
const platformAttack1 = readFileSync('./assets/Attack1.png');
const platformAttack1Left = readFileSync('./assets/AttackLeft1.png');
const platformAttack2 = readFileSync('./assets/Attack2.png');
const smupBg = readFileSync('./assets/background_image2.jpeg');
const smupPlayer = readFileSync('./assets/spaceship.png');
const smupRedEnemy = readFileSync('./assets/red_enemy.png');
const smupRedEnemy2 = readFileSync('./assets/red_enemy2.png');
const smupBlueEnemy = readFileSync('./assets/blue_enemy.png');
const smupBlueEnemy2 = readFileSync('./assets/blue_enemy2.png');
const smupPlayerBullet = readFileSync('./assets/bullet.png');
const rpgBg = readFileSync('./assets/tiled/background.png');
const rpgFg = readFileSync('./assets/tiled/foreground.png');
const rpgPlayer = readFileSync('./assets/player/down/down_all.png');
const rpgPlayerLeft = readFileSync('./assets/player/left/left_all.png');
const rpgPlayerUp = readFileSync('./assets/player/up/up_all.png');
const rpgPlayerRight = readFileSync('./assets/player/right/right_all.png');
const rpgBattleBg = readFileSync('./assets/battle_background.jpg');
const rpgMonster = readFileSync('./assets/monster/mushroom2.png');
const rpgPlayerBattle = readFileSync('./assets/player/right/right_0.png');
const rpgPlayerSlash = readFileSync('./assets/player/right_attack/attack_right.png');
const siteManifest = readFileSync('./html/site.webmanifest');
const siteManifestPortfolio = readFileSync('./html/portfolio/site.webmanifest');
const siteManifestArticles = readFileSync('./html/articles/site.webmanifest');
const siteManifestResume = readFileSync('./html/resume/site.webmanifest');
const siteManifestAbout = readFileSync('./html/about/site.webmanifest');
const siteManifestContact = readFileSync('./html/contact/site.webmanifest');
const faviconBig = readFileSync('./html/favicon-32x32.png');
const faviconSmall = readFileSync('./html/favicon-16x16.png');
const server = http.createServer((req, res) => {
    // console.log('user hit the server');
    // console.log(req.method)
    // console.log(req.url)
    const url = req.url;
    if (url == '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage)
        res.end();
    }
    else if (url == '/html/index.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage)
        res.end();
    }
    // styles request response
    else if (url == '/css/style.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homeStyle);
        res.end();
    }
    else if (url == '/css/articles-style.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(articlesStyle);
        res.end();
    }
    else if (url == '/css/normalize.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(normalizeStyle);
        res.end();
    }
    else if (url == '/css/platform-game.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(platformStyle);
        res.end();
    }
    else if (url == '/css/portfolio-style.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(portfolioStyle);
        res.end();
    }
    else if (url == '/css/red-knight.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(redKnightStyle);
        res.end();
    }
    else if (url == '/css/smup.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(smupStyle);
        res.end();
    }
    else if (url == '/font/zero-hour.otf') {
        res.writeHead(200, { 'content-type': 'text/otf' });
        res.write(zeroHourFont);
        res.end();
    }
    // image and video request response
    else if (url == '/html/image/capyness.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(homeLogo);
        res.end();
    }
    else if (url == '/html/image/python.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(pythonLogo);
        res.end();
    }
    else if (url == '/html/image/java.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(javaLogo);
        res.end();
    }
    else if (url == '/html/image/c.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(cLogo);
        res.end();
    }
    else if (url == '/html/image/html5.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(htmlLogo);
        res.end();
    }
    else if (url == '/html/image/css3.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(cssLogo);
        res.end();
    }
    else if (url == '/html/image/javascript.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(jsLogo);
        res.end();
    }
    else if (url == '/html/image/sql.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(sqlLogo);
        res.end();
    }
    else if (url == '/html/image/nodejs.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(nodeLogo);
        res.end();
    }
    else if (url == '/html/image/Reactjs.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(reactLogo);
        res.end();
    }
    else if (url == '/html/image/text-effect.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(paulImg);
        res.end();
    }
    else if (url == '/html/video/capy-game-design1.mp4') {
        res.writeHead(200, { 'content-type': 'video/mp4' });
        res.write(portfolio1Logo);
        res.end();
    }
    else if (url == '/html/video/capy-game-design3.mp4') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(portfolio2Logo);
        res.end();
    }
    else if (url == '/html/image/banking-sys-prototype.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(portfolio3Logo);
        res.end();
    }
    else if (url == '/html/image/art-gallery-web-app.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(portfolio4Logo);
        res.end();
    }
    else if (url == '/html/image/banking-sys-python.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(portfolio5Logo);
        res.end();
    }
    else if (url == '/html/image/red_knight.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(portfolio6Logo);
        res.end();
    }
    else if (url == '/html/image/game-design1-1.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(portfolio7Logo);
        res.end();
    }
    else if (url == '/html/image/platform_game.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(portfolio8Logo);
        res.end();
    }
    else if (url == '/html/image/scrum-board.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(article1Logo);
        res.end();
    }
    else if (url == '/html/image/scrum-project-board.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(article2Logo);
        res.end();
    }
    else if (url == '/html/image/chatgpt.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(article3Logo);
        res.end();
    }
    else if (url == '/html/image/paul_kim.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(paulKim);
        res.end();
    }
    else if (url == '/html/image/paulkim_resume_2023.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(resume);
        res.end();
    }
    else if (url == '/assets/background.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformBg);
        res.end();
    }
    else if (url == '/assets/Idle.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformIdle);
        res.end();
    }
    else if (url == '/assets/IdleLeft.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformIdleLeft);
        res.end();
    }
    else if (url == '/assets/Jump.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformJump);
        res.end();
    }
    else if (url == '/assets/JumpLeft.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformJumpLeft);
        res.end();
    }
    else if (url == '/assets/Fall.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformFall);
        res.end();
    }
    else if (url == '/assets/FallLeft.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformFallLeft);
        res.end();
    }
    else if (url == '/assets/Run.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformRun);
        res.end();
    }
    else if (url == '/assets/RunLeft.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformRunLeft);
        res.end();
    }
    else if (url == '/assets/Dash1.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformDash);
        res.end();
    }
    else if (url == '/assets/DashLeft1.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformDashLeft);
        res.end();
    }
    else if (url == '/assets/Attack1.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformAttack1);
        res.end();
    }
    else if (url == '/assets/Attack2.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformAttack2);
        res.end();
    }
    else if (url == '/assets/AttackLeft.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformAttack1Left);
        res.end();
    }
    else if (url == '/assets/AttackLeft2.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(platformAttack2Left);
        res.end();
    }
    else if (url == '/assets/background_image2.jpeg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(smupBg);
        res.end();
    }
    else if (url == '/assets/spaceship.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(smupPlayer);
        res.end();
    }
    else if (url == '/assets/red_enemy.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(smupRedEnemy);
        res.end();
    }
    else if (url == '/assets/red_enemy2.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(smupRedEnemy2);
        res.end();
    }
    else if (url == '/assets/blue_enemy.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(smupBlueEnemy);
        res.end();
    }
    else if (url == '/assets/blue_enemy2.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(smupBlueEnemy2);
        res.end();
    }
    else if (url == '/assets/bullet.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(smupPlayerBullet);
        res.end();
    }
    else if (url == '/assets/tiled/background.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(rpgBg);
        res.end();
    }
    else if (url == '/assets/tiled/foreground.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(rpgFg);
        res.end();
    }
    else if (url == '/assets/player/down/down_all.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(rpgPlayer);
        res.end();
    }
    else if (url == '/assets/player/left/left_all.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(rpgPlayerLeft);
        res.end();
    }
    else if (url == '/assets/player/up/up_all.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(rpgPlayerUp);
        res.end();
    }
    else if (url == '/assets/player/right/right_all.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(rpgPlayerRight);
        res.end();
    }
    else if (url == '/assets/battle_background.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(rpgBattleBg);
        res.end();
    }
    else if (url == '/assets/monster/mushroom2.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(rpgMonster);
        res.end();
    }
    else if (url == '/assets/player/right/right_0.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(rpgPlayerBattle);
        res.end();
    }
    else if (url == '/assets/player/right_attack/attack_right.png') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(rpgPlayerSlash);
        res.end();
    }
    else if (url == '/html/site.webmanifest') {
        res.writeHead(200, { 'content-type': 'text/json' });
        res.write(siteManifest);
        res.end();
    }
    else if (url == '/html/favicon-32x32.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(faviconBig);
        res.end();
    }
    else if (url == '/html/favicon-16x16.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(faviconSmall);
        res.end();
    }
    // logic request response
    else if (url == '/script/menu.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(homeLogic);
        res.end();
    }
    else if (url == '/script/jquery-3.7.0.min.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(homeLogic2);
        res.end();
    }
    else if (url == '/script/gsap.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(gsap);
        res.end();
    }
    else if (url == '/script/platform_game.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(platformLogic);
        res.end();
    }
    else if (url == '/script/red_knight.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(redKnightLogic);
        res.end();
    }
    else if (url == '/script/smup.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(smupLogic);
        res.end();
    }
    // pages request response
    else if (url == '/html/about/index.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(aboutPage);
        res.end();
    }
    else if (url == '/html/portfolio/index.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(portfolioPage);
        res.end();
    }
    else if (url == '/html/portfolio/portfolio8.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(portfolio8Page);
        res.end();
    }
    else if (url == '/html/portfolio/portfolio7.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(portfolio7Page);
        res.end();
    }
    else if (url == '/html/portfolio/portfolio6.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(portfolio6Page);
        res.end();
    }
    else if (url == '/html/portfolio/portfolio5.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(portfolio5Page);
        res.end();
    }
    else if (url == '/html/portfolio/portfolio4.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(portfolio4Page);
        res.end();
    }
    else if (url == '/html/portfolio/portfolio3.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(portfolio3Page);
        res.end();
    }
    else if (url == '/html/portfolio/portfolio2.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(portfolio2Page);
        res.end();
    }
    else if (url == '/html/portfolio/portfolio1.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(portfolio1Page);
        res.end();
    }
    else if (url == '/html/articles/index.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(articlesPage);
        res.end();
    }
    else if (url == '/html/articles/article1.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(article1Page);
        res.end();
    }
    else if (url == '/html/articles/article2.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(article2Page);
        res.end();
    }
    else if (url == '/html/articles/article3.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(article3Page);
        res.end();
    }
    else if (url == '/html/resume/index.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(resumePage);
        res.end();
    }
    else if (url == '/html/contact/index.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(contactPage);
        res.end();
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>404 Error - Page not Found</h1>')
        res.end();
    }
})

server.listen(5000);




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