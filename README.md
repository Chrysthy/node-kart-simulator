<h1 align="center">Node Mario Kart Simulator 🏁</h1>

<p align="center"> A fun and dynamic racing logic simulator inspired by the classic Mario Kart series.</p>

<p align="center">

<a href="#-screenshots">Screenshots</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-objective">Objective</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-rules">Rules</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-players">Players</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-how-to-run">How to Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-contributing">Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#support">Support</a>

</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=c920c9&labelColor=000000">
</p>

<br>

## 📸 Screenshots

<img src=".github/gif-do-projeto.gif" alt="gif do projeto">

<br>

## 🧭 Objective

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart is a series of racing games developed and published by Nintendo. Our challenge is to create the game logic to simulate Mario Kart-style races, with rules and mechanics listed below.</p>
            </td>
        </tr>
    </table>

<br>

## 🎮 Rules

### **🧍‍♂️ Players**

- [x] The computer must receive two characters to race, each represented by an object.

<br>

### **🛣️ Tracks**

- [x] The characters will race on a random track with 5 rounds.
- [x] In each round, a section of the track will be randomly selected: **straight**, **curve**, or **duel**.
  - [x] If the section is a **STRAIGHT**, each player rolls a 6-sided die and adds their **SPEED** attribute. The highest total earns 1 point.
  - [x] If the section is a **CURVE**, each player rolls a 6-sided die and adds their **HANDLING** attribute. The highest total earns 1 point.
  - [x] If the section is a **DUEL**, each player rolls a 6-sided die and adds their **POWER** attribute. The player with the lower total loses 1 point.
  - [x] No player can have a negative score (below 0).

<br>

### **🏁 Winning Condition**

- [x] At the end of the race, the player with the most points wins.

<br>

## 🏎️ Players

<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 4</p>
                <p>Handling: 3</p>
                <p>Power: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
               <p>Speed: 4</p>
                <p>Handling: 3</p>
                <p>Power: 3</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 4</p>
                <p>Handling: 3</p>
                <p>Power: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 4</p>
                <p>Handling: 3</p>
                <p>Power: 3</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 4</p>
                <p>Handling: 3</p>
                <p>Power: 3</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 4</p>
                <p>Handling: 3</p>
                <p>Power: 3</p>
            </td>
        </tr>
    </table>

<br>

## ⚙ How to Run
