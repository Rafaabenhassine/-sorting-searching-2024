//Decision Making Tasks

//1. Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return `${year} is a leap year.`;
    } else {
      return `${year} is not a leap year.`;
    }
  }
  
  // Example usage:
  console.log(isLeapYear(2024)); // Leap year
  console.log(isLeapYear(1900)); // Not a leap year
  console.log(isLeapYear(2000)); // Leap year
  

//   2. Ticket Pricing
function getTicketPrice(age) {
    if (age <= 12) {
      return "Ticket price: $10";
    } else if (age >= 13 && age <= 17) {
      return "Ticket price: $15";
    } else {
      return "Ticket price: $20";
    }
  }
  
  // Example usage:
  console.log(getTicketPrice(10)); // $10
  console.log(getTicketPrice(15)); // $15
  console.log(getTicketPrice(25)); // $20

//   Recursion Tasks

// 1. Fibonacci Sequence
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Example usage:
  console.log(fibonacci(6)); // 8
  console.log(fibonacci(10)); // 55

//   2. Palindrome Checker
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Normalize string
    function helper(start, end) {
      if (start >= end) return true;
      if (str[start] !== str[end]) return false;
      return helper(start + 1, end - 1);
    }
    return helper(0, str.length - 1);
  }
  
  // Example usage:
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
  console.log(isPalindrome("hello")); // false

  
//   Decision Making Tasks:

// Leap Year Checker: Validates if a year is a leap year using conditional logic.
// Ticket Pricing: Determines the ticket price based on age using if-else.
// Recursion Tasks:

// Fibonacci Sequence: Generates the nth Fibonacci number using a recursive approach.
// Palindrome Checker: Recursively checks if a given string is a palindrome while ignoring special characters.