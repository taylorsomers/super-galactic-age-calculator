# Super Galactic Age Calculator

  ### By Taylor Somers

## Description

  This program was created as an independent project for the full-time Epicodus C# & React coding bootcamp. It was created with JavaScript and jQuery in a WebPack environment, and is the first independent project we have built using WebPack. The program itself takes in a user's age and calculates what their age would be on Mercury, Venus, Mars, and Jupiter. It also calculates the number of years remaining until the user reaches the average human lifespan, and converts that number into Mercurial, Venusian, Martian, and Jovian years. If a user enters an age that is over the average human lifespan, the program states how many years longer than average the user has lived, and converts this number to Mercurial, Venusian, Martian, and Jovian years as well.

## Languages & Technologies Used:

  ### Programming Languages & Libraries
  * HTML
  * JavaScript
  * jQuery
  * Node
  * WebPack

  ### Operating Systems & Programs
  * Brave
  * Git Bash
  * Google Chrome
  * Microsoft Windows 10
  * Visual Studio Code

## Installation

  1.  Download a web browser, such as Apple Safari, Brave, Google Chrome, Microsoft Edge, Mozilla Firefox, or Yandex.
  2.  Navigate to https://github.com/taylorsomers/super-galactic-age-calculator.
  3.  Click the green "Clone or download" button at the right of the screen.
  4.  Select "Download ZIP."
  5.  Use a file extractor or unzip program (such as PeaZip, Unzipper, WinZip, Zipware, or 7-ZIP) to extract the ZIP files onto your computer.
  6.  Open the directory containing the extracted files.
  7.  Open your computer's terminal and navigate to the directory bearing the name of the program and containing the top level subdirectories and files.
  8.  Enter the command "$ npm install" in the terminal and press "Enter".
  9.  Enter the command "$ npm run build" in the terminal and press "Enter".
  10. Enter the command "$ npm run start" in the terminal and press "Enter".
  11. The program should open and run with its user interface accessible in your default web browser.

## Specifications

  | Program Behavior | Example Behavior | Example Output |
  | ----------- | ----------- | ----------- |
  | Program will detect inputted user age in Terrestrial years. | "Input: 30" | "Output: 30" |
  | Program will convert user-inputted age in Terrestrial years to Mercurial years. | "Input: 30" | "Output: 125" |
  | Program will convert user-inputted age in Terrestrial years to Venusian years. | "Input: 30" | "Output: 48" |
  | Program will convert user-inputted age in Terrestrial years to Martian years. | "Input: 30" | "Output: 16" |
  | Program will convert user-inputted age in Terrestrial years to Jovian years. | "Input: 30" | "Output: 2" |
  | Program will calculate average remaining life expectancy for an individual of the user-inputted age in Terrestrial years. | "Input: 30" | "Output: 42" |
  | Program will convert average remaining life expectancy for an individual of the user-inputted age in Terrestrial years into Mercurial years. | "Input: 30" | "Output: 42" |
  | Program will convert average remaining life expectancy for an individual of the user-inputted age in Terrestrial years into Venusian years. | "Input: 30" | "Output: 68" |
  | Program will convert average remaining life expectancy for an individual of the user-inputted age in Terrestrial years into Martian years. | "Input: 30" | "Output: 22" |
  | Program will convert average remaining life expectancy for an individual of the user-inputted age in Terrestrial years into Jovian years. | "Input: 30" | "Output: 4" |
  | If the user-inputted age in Terrestrial years is higher than the average human life expectancy, the program will calculate the number of Terrestrial years the user has lived beyond that average. | "Input: 85" | "You have lived 13 year(s) longer than average human life expectancy." |
  | If the user-inputted age in Terrestrial years is higher than the average human life expectancy, the program will convert the number of Terrestrial years the user has lived beyond that average to Mercurial years. | "Input: 85" | "You have lived 54 Mercurial year(s) longer than average humal life expectancy." |
  | If the user-inputted age in Terrestrial years is higher than the average human life expectancy, the program will convert the number of Terrestrial years the user has lived beyond that average to Venusian years. | "Input: 85" | "You have lived 21 Venusian year(s) longer than average human life expectancy." |
  | If the user-inputted age in Terrestrial years is higher than the average human life expectancy, the program will convert the number of Terrestrial years the user has lived beyond that average to Martian years. | "Input: 85" | "You have lived 7 Martian year(s) longer than average human life expectancy." |
  | If the user-inputted age in Terrestrial years is higher than the average human life expectancy, the program will convert the number of Terrestrial years the user has lived beyond that average to Jovian years. | "Input: 85" | "You have lived 1 Jovian year(s) longer than average human life expectancy." |
  

## Known Bugs

  * The only known bug at this time is that I have not been able to get the correct wording for some of the calculations to print to the DOM, though the calculations themselves (*i.e.*, the math) are accurate. This is likely a quick fix, but not a high priority at this time as it does not affect the business logic of the program. If any others are discovered, please feel free to reach out and let me know. If you would like to contribute any fixes or improvements, please do!

### Contributors

  * Taylor Somers

### License

This website is licensed under the GNU General Public License GPLv3. (C) 2020 Taylor Somers. All rights reserved.