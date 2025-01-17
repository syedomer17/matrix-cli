const readline = require("readline-sync");
const { Addition, subtration, diagonal, trace } = require("./operations.js");

function main() {
  while (true) {
    console.clear();
    console.log("----------------------------------");
    console.log("------ Welcome To Matrix CLI ------");
    console.log("-----------------------------------");

    const options = [
      "Exit",
      "Addition",
      "Subtraction",
      "Diagonal Check",
      "Trace",
    ];
    options.forEach((option, index) => {
      console.log(`${index}. ${option}`);
    });

    const userInput = readline.questionInt("Enter your option: ");

    switch (userInput) {
      case 0:
        console.log("Thank you for using Matrix CLI. 😊");
        return;
      case 1:
        Addition();
        break;
      case 2:
        subtration();
        break;
      case 3:
        diagonal();
        break;
      case 4:
        trace();
        break;
      default:
        console.log("Invalid option. Please try again. ❌");
    }

    const choice = readline.question("Do you want to continue? (yes/no): ");
    if (choice.toLowerCase() !== "yes") {
      console.log("Thank you for using Matrix CLI. 😊");
      break;
    }
  }
}

main();
