# Maze Game app

A simple game of maze. 
Users can play as single player. The challenge of the game is for the player to find their way out to the castle.

## Description

When the application is started, it displays the main menu screen. From this screen, the player can select one of the available maze levels. Once the start button is clicked the app will run. 

The shape used in the game is a square, where the number of cells on the vertical side of the maze is equal to the number of cells on the horizontal side. Currently, there are 7 difficulty levels in the game. Starting with 4 x 4 cells for the first level, the difficulty increases up to the last level with 10 x 10. The user would be able to navigate the icon towards the exit, namely castle icon.
If the player successfully completes a level, the application will display a winning sign. The user can return to the main screen to select other difficulty levels.

## Live Preview

Open [maze.html](https://andreeaotet.github.io/maze-game-project/public/index.html)

## Structure

 - HTML/CSS - app layer
 - Javascript creates interactive effects
   - jQuery simplifies HTML document event handling, animating and Ajax interactions for web development
 - JSON file contains a collection of 7 mazes
 - mySQL where the game levels are stored

## Setup

```
git clone git@github.com:andreeaotet/maze-game-project.git
cd maze-game-project
npm install
```

## Running app

```
npm run devstart
```

open http://localhost:3000