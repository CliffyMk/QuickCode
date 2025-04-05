import { createInterface } from 'readline';
import { checkNumberPadding } from './checkNumberPadding.js';

// Create an interface for user input and output
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get input from user
rl.question('Enter array of strings to check number padding:\nEx: ["001", "002"]\n', (answer: string) => {
  // Output the the function
  console.log(`Output: ${checkNumberPadding(JSON.parse(answer))}`);

  // Close the readline interface
  rl.close();
});
