# TESTCAFE FRONT END WORKSHOP EXERCISE

This repository contains an automation project for testcafe framework workshop using POM.

## Testcafe Automation Framework for SWAG LABS

This automation project is part of a Front End exercise introducing you in the testcafe framwork using POM Model.

### Installation

Instructions for how to download/install the code onto your machine.

1.- Install Node.js + npm https://nodejs.org/en/
    [You can follow this guide: https://wsvincent.com/install-node-js-npm-windows/]

2.- Install TestCafe through the terminal using
    npm install -g testcafe Installing TestCafe 

3.- Javascript IDE can be:
    - Visual Studio Code: https://code.visualstudio.com/
    - Atom: https://ide.atom.io/

4. Installing Artillery
https://artillery.io/docs/guides/getting-started/installing-artillery.html

### Usage

1.- Create a workspace folder for your project.
2.- cd to your folder.
3.- Run the following command to initialize your project
     > npm init
	 > npm install testcafe  #This command install testcafe locally in you workspace folder
4.- git clone https://github.com/fercho-acrossuniverse/FirstSesionFrontEnd.git
5.- In order to execute a test, go to your rootpath (or the folder you create in step 1 ) and execute:
     > testcafe <name_of_the_browser> <path_to_the_testcase_file>
     Example:
	 > testcafe chrome ./FirstSesionFrontEnd/tests/Products.test.js
	 > estcafe safari ./FirstSesionFrontEnd/tests/Login.test.js




