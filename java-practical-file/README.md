# Java Programming Practical File

Open `index.html` in a browser. No build step or server is needed.

## 1. Your basic info
Edit `assets/profile.js`. The values appear on the home page and in every page header.

## 2. Program screenshots
Every question page shows the program as a screenshot (no typed code). The images are in the `program` folder
(`E:\ROSHAN\java\program`), named after the program's class with the `.png` extension, the same names as the output screenshots.
The pages load them from `file:///E:/ROSHAN/java/program/` and fall back to `../../program/` next to the site.
To replace one, save a new image with the same name in that folder and refresh the page.

## 3. Add the output screenshot
Run the program, take a screenshot, and save it in the `output` folder (next to `java-practical-file` and `src`), named after the
program's class, for example `output/HelloWorld.png`. The exact name for every question is listed in `screenshot-names.txt`.
Save the file there and refresh the page: the question shows "Output added" and the topic's counter goes up.
Crop the screenshot so the `javac` compile line is not included; only the `java ...` run and its output should show.

Use the `.png` extension. Six class names exist in two topics, so their second copy has the topic name in front
(for example `dataconversion_StringToInt.png`); `screenshot-names.txt` shows them.

The images are loaded by relative path (`../../output/`), so keep the folder layout as it is. Open the site by
double-clicking `index.html`. If the status stays on "Waiting" for existing images, open the site with a local server instead.

## Contents
Topic folders: basic, singlearray, functions, strings, multiarray, interfaces, packages, inheritance, inputoutput, exceptionhandling, dataconversion, oops.
