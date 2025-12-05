import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/JavaScript CSS/practice_js.css";
import { Link } from "react-router-dom";


function Practice_js() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);


  const allQuestions = [
    {
      id: 1,
      title: "Print Hello JavaScript",
      description: "Write a JavaScript program that prints 'Hello JavaScript' to the console.",
      difficulty: "Easy",
      topics: ["Basic Syntax", "Console"],
      Sample_Input: "None",
      Sample_Output: "Hello JavaScript",
      solved: false,
      successRate: "99%",
      submissions: "20.1K"
    },
    {
      id: 2,
      title: "Add Two Numbers",
      description: "Write a JavaScript program that takes two numbers and prints their sum.",
      difficulty: "Easy",
      topics: ["Operators", "Input"],
      Sample_Input: "4 9",
      Sample_Output: "13",
      solved: false,
      successRate: "98%",
      submissions: "18.7K"
    },
    {
      id: 3,
      title: "Check Even or Odd",
      description: "Write a JavaScript program to check whether a number is even or odd.",
      difficulty: "Easy",
      topics: ["Conditionals", "Operators"],
      Sample_Input: "5",
      Sample_Output: "Odd",
      solved: false,
      successRate: "96%",
      submissions: "17.5K"
    },
    {
      id: 4,
      title: "Find Maximum of Three Numbers",
      description: "Write a JavaScript program that prints the largest of three numbers.",
      difficulty: "Easy",
      topics: ["Conditionals", "Math"],
      Sample_Input: "12 45 32",
      Sample_Output: "45",
      solved: false,
      successRate: "94%",
      submissions: "16.2K"
    },
    {
      id: 5,
      title: "Sum of Array Elements",
      description: "Write a JavaScript program that finds the sum of all numbers in an array.",
      difficulty: "Easy",
      topics: ["Arrays", "Loops"],
      Sample_Input: "[2, 4, 6, 8]",
      Sample_Output: "20",
      solved: false,
      successRate: "96%",
      submissions: "18.1K"
    },
    {
      id: 6,
      title: "Factorial of a Number",
      description: "Write a JavaScript program to calculate the factorial of a number using a loop.",
      difficulty: "Easy",
      topics: ["Loops", "Math"],
      Sample_Input: "5",
      Sample_Output: "120",
      solved: false,
      successRate: "95%",
      submissions: "17.9K"
    },
    {
      id: 7,
      title: "Reverse a String",
      description: "Write a JavaScript program that reverses a given string.",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "hello",
      Sample_Output: "olleh",
      solved: false,
      successRate: "94%",
      submissions: "17.1K"
    },
    {
      id: 8,
      title: "Count Vowels in a String",
      description: "Write a JavaScript program that counts the number of vowels in a string.",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "JavaScript",
      Sample_Output: "3",
      solved: false,
      successRate: "93%",
      submissions: "15.3K"
    },
    {
      id: 9,
      title: "Check Leap Year",
      description: "Write a JavaScript program to check if a given year is a leap year.",
      difficulty: "Easy",
      topics: ["Conditionals", "Date"],
      Sample_Input: "2024",
      Sample_Output: "Leap Year",
      solved: false,
      successRate: "95%",
      submissions: "16.8K"
    },
    {
      id: 10,
      title: "Swap Two Variables Without Temp",
      description: "Write a JavaScript program to swap two numbers without using a temporary variable.",
      difficulty: "Easy",
      topics: ["Operators", "Variables"],
      Sample_Input: "4 7",
      Sample_Output: "7 4",
      solved: false,
      successRate: "92%",
      submissions: "14.9K"
    },
    {
      id: 11,
      title: "Print Numbers 1 to N",
      description: "Write a JavaScript program that prints all numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops"],
      Sample_Input: "5",
      Sample_Output: "1 2 3 4 5",
      solved: false,
      successRate: "97%",
      submissions: "17.6K"
    },
    {
      id: 12,
      title: "Multiplication Table",
      description: "Write a JavaScript program to print the multiplication table of a number up to 10.",
      difficulty: "Easy",
      topics: ["Loops"],
      Sample_Input: "6",
      Sample_Output: "6 12 18 24 30 36 42 48 54 60",
      solved: false,
      successRate: "95%",
      submissions: "15.8K"
    },
    {
      id: 13,
      title: "Calculate Simple Interest",
      description: "Write a JavaScript program to compute simple interest given principal, rate, and time.",
      difficulty: "Easy",
      topics: ["Math"],
      Sample_Input: "1000 5 2",
      Sample_Output: "100",
      solved: false,
      successRate: "91%",
      submissions: "13.7K"
    },
    {
      id: 14,
      title: "Check Prime Number",
      description: "Write a JavaScript program to check whether a number is prime or not.",
      difficulty: "Easy",
      topics: ["Math", "Loops"],
      Sample_Input: "11",
      Sample_Output: "Prime",
      solved: false,
      successRate: "90%",
      submissions: "13.3K"
    },
    {
      id: 15,
      title: "Find Minimum in Array",
      description: "Write a JavaScript program to find the smallest element in an array.",
      difficulty: "Easy",
      topics: ["Arrays", "Math"],
      Sample_Input: "[10, 4, 8, 2]",
      Sample_Output: "2",
      solved: false,
      successRate: "94%",
      submissions: "15.6K"
    },
    {
      id: 16,
      title: "Find Maximum in Array",
      description: "Write a JavaScript program to find the largest element in an array.",
      difficulty: "Easy",
      topics: ["Arrays", "Math"],
      Sample_Input: "[10, 4, 8, 2]",
      Sample_Output: "10",
      solved: false,
      successRate: "94%",
      submissions: "15.8K"
    },
    {
      id: 17,
      title: "Find String Length",
      description: "Write a JavaScript program to find the length of a given string.",
      difficulty: "Easy",
      topics: ["Strings"],
      Sample_Input: "JavaScript",
      Sample_Output: "10",
      solved: false,
      successRate: "98%",
      submissions: "19.4K"
    },
    {
      id: 18,
      title: "Check Palindrome String",
      description: "Write a JavaScript program to check if a string is a palindrome.",
      difficulty: "Easy",
      topics: ["Strings", "Conditionals"],
      Sample_Input: "madam",
      Sample_Output: "Palindrome",
      solved: false,
      successRate: "91%",
      submissions: "13.9K"
    },
    {
      id: 19,
      title: "Sum of Digits",
      description: "Write a JavaScript program that calculates the sum of digits of a number.",
      difficulty: "Easy",
      topics: ["Math", "Loops"],
      Sample_Input: "1234",
      Sample_Output: "10",
      solved: false,
      successRate: "92%",
      submissions: "14.2K"
    },
    {
      id: 20,
      title: "Reverse a Number",
      description: "Write a JavaScript program to reverse a given number.",
      difficulty: "Easy",
      topics: ["Math", "Loops"],
      Sample_Input: "12345",
      Sample_Output: "54321",
      solved: false,
      successRate: "91%",
      submissions: "13.5K"
    },
    {
      id: 21,
      title: "Find GCD of Two Numbers",
      description: "Write a JavaScript program to find the greatest common divisor (GCD) of two numbers.",
      difficulty: "Easy",
      topics: ["Math", "Loops"],
      Sample_Input: "12 18",
      Sample_Output: "6",
      solved: false,
      successRate: "90%",
      submissions: "12.7K"
    },
    {
      id: 22,
      title: "Find LCM of Two Numbers",
      description: "Write a JavaScript program to find the least common multiple (LCM) of two numbers.",
      difficulty: "Easy",
      topics: ["Math"],
      Sample_Input: "12 18",
      Sample_Output: "36",
      solved: false,
      successRate: "89%",
      submissions: "12.2K"
    },
    {
      id: 23,
      title: "Convert Celsius to Fahrenheit",
      description: "Write a JavaScript program to convert Celsius temperature to Fahrenheit.",
      difficulty: "Easy",
      topics: ["Math"],
      Sample_Input: "0",
      Sample_Output: "32",
      solved: false,
      successRate: "97%",
      submissions: "18.1K"
    },
    {
      id: 24,
      title: "Generate Random Number (1–10)",
      description: "Write a JavaScript program to generate a random integer between 1 and 10.",
      difficulty: "Easy",
      topics: ["Math", "Random"],
      Sample_Input: "None",
      Sample_Output: "7",
      solved: false,
      successRate: "95%",
      submissions: "16.9K"
    },
    {
      id: 25,
      title: "Count Words in a String",
      description: "Write a JavaScript program to count the number of words in a string.",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "I love JavaScript",
      Sample_Output: "3",
      solved: false,
      successRate: "94%",
      submissions: "15.4K"
    },
    {
      id: 26,
      title: "Count Words in a String",
      description: "Write a JavaScript program that counts the number of words in a string.",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "JavaScript is fun",
      Sample_Output: "3",
      solved: false,
      successRate: "92%",
      submissions: "13.1K"
    },
    {
      id: 27,
      title: "Palindrome String Checker",
      description: "Write a JavaScript program to check if a given string is a palindrome.",
      difficulty: "Easy",
      topics: ["Strings", "Conditionals"],
      Sample_Input: "madam",
      Sample_Output: "Palindrome",
      solved: false,
      successRate: "91%",
      submissions: "12.9K"
    },
    {
      id: 28,
      title: "Sum of Digits",
      description: "Write a JavaScript program to find the sum of digits of a given number.",
      difficulty: "Easy",
      topics: ["Loops", "Math"],
      Sample_Input: "1234",
      Sample_Output: "10",
      solved: false,
      successRate: "89%",
      submissions: "11.8K"
    },
    {
      id: 29,
      title: "Check Prime Number",
      description: "Write a JavaScript program that checks if a number is prime.",
      difficulty: "Easy",
      topics: ["Math", "Loops", "Conditionals"],
      Sample_Input: "7",
      Sample_Output: "Prime",
      solved: false,
      successRate: "87%",
      submissions: "10.9K"
    },
    {
      id: 30,
      title: "Find Minimum in Array",
      description: "Write a JavaScript program to find the smallest number in an array.",
      difficulty: "Easy",
      topics: ["Arrays", "Math"],
      Sample_Input: "[5, 2, 8, 1]",
      Sample_Output: "1",
      solved: false,
      successRate: "93%",
      submissions: "13.4K"
    },
    {
      id: 31,
      title: "Find Maximum in Array",
      description: "Write a JavaScript program to find the largest number in an array.",
      difficulty: "Easy",
      topics: ["Arrays", "Math"],
      Sample_Input: "[5, 2, 8, 1]",
      Sample_Output: "8",
      solved: false,
      successRate: "94%",
      submissions: "13.6K"
    },
    {
      id: 32,
      title: "Count Even and Odd Numbers",
      description: "Write a JavaScript program to count even and odd numbers in an array.",
      difficulty: "Easy",
      topics: ["Arrays", "Loops", "Conditionals"],
      Sample_Input: "[1, 2, 3, 4, 5]",
      Sample_Output: "Even: 2, Odd: 3",
      solved: false,
      successRate: "92%",
      submissions: "12.7K"
    },
    {
      id: 33,
      title: "Find Average of Array",
      description: "Write a JavaScript program to find the average of all numbers in an array.",
      difficulty: "Easy",
      topics: ["Arrays", "Math"],
      Sample_Input: "[10, 20, 30, 40]",
      Sample_Output: "25",
      solved: false,
      successRate: "91%",
      submissions: "12.4K"
    },
    {
      id: 34,
      title: "Check Armstrong Number",
      description: "Write a JavaScript program to check if a number is an Armstrong number.",
      difficulty: "Intermediate",
      topics: ["Loops", "Math"],
      Sample_Input: "153",
      Sample_Output: "Armstrong",
      solved: false,
      successRate: "84%",
      submissions: "10.5K"
    },
    {
      id: 35,
      title: "Reverse an Array",
      description: "Write a JavaScript program that reverses an array without using the reverse() method.",
      difficulty: "Easy",
      topics: ["Arrays", "Loops"],
      Sample_Input: "[1, 2, 3, 4]",
      Sample_Output: "[4, 3, 2, 1]",
      solved: false,
      successRate: "90%",
      submissions: "11.9K"
    },
    {
      id: 36,
      title: "Check Positive or Negative",
      description: "Write a JavaScript program that checks if a number is positive, negative, or zero.",
      difficulty: "Easy",
      topics: ["Conditionals"],
      Sample_Input: "-7",
      Sample_Output: "Negative",
      solved: false,
      successRate: "93%",
      submissions: "13.0K"
    },
    {
      id: 37,
      title: "Find Second Largest Element",
      description: "Write a JavaScript program to find the second largest element in an array.",
      difficulty: "Intermediate",
      topics: ["Arrays", "Sorting"],
      Sample_Input: "[3, 8, 1, 6]",
      Sample_Output: "6",
      solved: false,
      successRate: "86%",
      submissions: "10.3K"
    },
    {
      id: 38,
      title: "Check Palindrome Number",
      description: "Write a JavaScript program that checks if a number is a palindrome.",
      difficulty: "Easy",
      topics: ["Math", "Conditionals"],
      Sample_Input: "121",
      Sample_Output: "Palindrome",
      solved: false,
      successRate: "90%",
      submissions: "11.2K"
    },
    {
      id: 39,
      title: "Generate Random Number",
      description: "Write a JavaScript program to generate a random integer between 1 and 100.",
      difficulty: "Easy",
      topics: ["Math", "Random"],
      Sample_Input: "None",
      Sample_Output: "57",
      solved: false,
      successRate: "94%",
      submissions: "13.5K"
    },
    {
      id: 40,
      title: "Find Sum of N Natural Numbers",
      description: "Write a JavaScript program to calculate the sum of first N natural numbers.",
      difficulty: "Easy",
      topics: ["Loops", "Math"],
      Sample_Input: "5",
      Sample_Output: "15",
      solved: false,
      successRate: "91%",
      submissions: "12.1K"
    },
    {
      id: 41,
      title: "Find Power of a Number",
      description: "Write a JavaScript program that calculates base^exponent without using Math.pow().",
      difficulty: "Intermediate",
      topics: ["Loops", "Math"],
      Sample_Input: "2 3",
      Sample_Output: "8",
      solved: false,
      successRate: "87%",
      submissions: "10.9K"
    },
    {
      id: 42,
      title: "Find LCM of Two Numbers",
      description: "Write a JavaScript program to find the LCM (Least Common Multiple) of two numbers.",
      difficulty: "Intermediate",
      topics: ["Math", "Loops"],
      Sample_Input: "12 18",
      Sample_Output: "36",
      solved: false,
      successRate: "85%",
      submissions: "10.1K"
    },
    {
      id: 43,
      title: "Find GCD of Two Numbers",
      description: "Write a JavaScript program to find the GCD (Greatest Common Divisor) of two numbers.",
      difficulty: "Intermediate",
      topics: ["Math", "Loops"],
      Sample_Input: "12 18",
      Sample_Output: "6",
      solved: false,
      successRate: "86%",
      submissions: "10.3K"
    },
    {
      id: 44,
      title: "Sum of Even Numbers",
      description: "Write a JavaScript program to find the sum of all even numbers up to N.",
      difficulty: "Easy",
      topics: ["Loops", "Math"],
      Sample_Input: "10",
      Sample_Output: "30",
      solved: false,
      successRate: "92%",
      submissions: "12.9K"
    },
    {
      id: 45,
      title: "Fibonacci Sequence (Iterative)",
      description: "Write a JavaScript program to print the Fibonacci sequence up to N terms.",
      difficulty: "Intermediate",
      topics: ["Loops", "Math"],
      Sample_Input: "6",
      Sample_Output: "0 1 1 2 3 5",
      solved: false,
      successRate: "89%",
      submissions: "11.6K"
    },
    {
      id: 46,
      title: "Fibonacci Sequence (Recursive)",
      description: "Write a JavaScript program to print Fibonacci sequence using recursion.",
      difficulty: "Intermediate",
      topics: ["Recursion", "Math"],
      Sample_Input: "5",
      Sample_Output: "0 1 1 2 3",
      solved: false,
      successRate: "87%",
      submissions: "10.8K"
    },
    {
      id: 47,
      title: "Count Digits in a Number",
      description: "Write a JavaScript program to count the number of digits in a given number.",
      difficulty: "Easy",
      topics: ["Math", "Loops"],
      Sample_Input: "12345",
      Sample_Output: "5",
      solved: false,
      successRate: "93%",
      submissions: "12.8K"
    },
    {
      id: 48,
      title: "Check Perfect Number",
      description: "Write a JavaScript program to check whether a number is a perfect number.",
      difficulty: "Intermediate",
      topics: ["Math", "Loops"],
      Sample_Input: "28",
      Sample_Output: "Perfect Number",
      solved: false,
      successRate: "84%",
      submissions: "9.9K"
    },
    {
      id: 49,
      title: "Calculate Area of Circle",
      description: "Write a JavaScript program to calculate the area of a circle given the radius.",
      difficulty: "Easy",
      topics: ["Math", "Geometry"],
      Sample_Input: "7",
      Sample_Output: "153.94",
      solved: false,
      successRate: "95%",
      submissions: "14.0K"
    },
    {
      id: 50,
      title: "Check Alphabet or Not",
      description: "Write a JavaScript program to check whether a given character is an alphabet letter or not.",
      difficulty: "Easy",
      topics: ["Strings", "Conditionals"],
      Sample_Input: "A",
      Sample_Output: "Alphabet",
      solved: false,
      successRate: "92%",
      submissions: "12.3K"
    },

    {
      id: 51,
      title: "Find Factorial (Recursive)",
      description: "Write a JavaScript program to find the factorial of a number using recursion.",
      difficulty: "Intermediate",
      topics: ["Recursion", "Math", "Functions"],
      Sample_Input: "5",
      Sample_Output: "120",
      solved: false,
      successRate: "88%",
      submissions: "10.5K"
    },
    {
      id: 52,
      title: "Sum of Natural Numbers (Recursive)",
      description: "Write a JavaScript program to find the sum of first N natural numbers using recursion.",
      difficulty: "Intermediate",
      topics: ["Recursion", "Math"],
      Sample_Input: "10",
      Sample_Output: "55",
      solved: false,
      successRate: "87%",
      submissions: "10.2K"
    },
    {
      id: 53,
      title: "Reverse a Number",
      description: "Write a JavaScript program to reverse digits of a given number.",
      difficulty: "Easy",
      topics: ["Loops", "Math"],
      Sample_Input: "12345",
      Sample_Output: "54321",
      solved: false,
      successRate: "90%",
      submissions: "11.6K"
    },
    {
      id: 54,
      title: "Find Prime Numbers in Range",
      description: "Write a JavaScript program to print all prime numbers in a given range.",
      difficulty: "Intermediate",
      topics: ["Loops", "Math"],
      Sample_Input: "1 20",
      Sample_Output: "2 3 5 7 11 13 17 19",
      solved: false,
      successRate: "86%",
      submissions: "9.9K"
    },
    {
      id: 55,
      title: "Find Duplicate Elements in Array",
      description: "Write a JavaScript program to find and print duplicate elements in an array.",
      difficulty: "Intermediate",
      topics: ["Arrays", "Loops"],
      Sample_Input: "[1, 2, 3, 2, 4, 1]",
      Sample_Output: "[1, 2]",
      solved: false,
      successRate: "84%",
      submissions: "9.4K"
    },
    {
      id: 56,
      title: "Remove Duplicates from Array",
      description: "Write a JavaScript program to remove duplicate elements from an array.",
      difficulty: "Intermediate",
      topics: ["Arrays", "Sets"],
      Sample_Input: "[1, 2, 3, 2, 4, 1]",
      Sample_Output: "[1, 2, 3, 4]",
      solved: false,
      successRate: "89%",
      submissions: "10.5K"
    },
    {
      id: 57,
      title: "Merge Two Arrays",
      description: "Write a JavaScript program to merge two arrays without using built-in concat().",
      difficulty: "Intermediate",
      topics: ["Arrays", "Loops"],
      Sample_Input: "[1, 2], [3, 4]",
      Sample_Output: "[1, 2, 3, 4]",
      solved: false,
      successRate: "90%",
      submissions: "11.0K"
    },
    {
      id: 58,
      title: "Sort Array in Ascending Order",
      description: "Write a JavaScript program to sort an array in ascending order without sort().",
      difficulty: "Intermediate",
      topics: ["Arrays", "Sorting", "Loops"],
      Sample_Input: "[5, 2, 8, 1]",
      Sample_Output: "[1, 2, 5, 8]",
      solved: false,
      successRate: "83%",
      submissions: "9.2K"
    },
    {
      id: 59,
      title: "Find Frequency of Elements",
      description: "Write a JavaScript program to count the frequency of each element in an array.",
      difficulty: "Intermediate",
      topics: ["Objects", "Arrays", "Loops"],
      Sample_Input: "[1, 2, 2, 3, 3, 3]",
      Sample_Output: "{1:1, 2:2, 3:3}",
      solved: false,
      successRate: "85%",
      submissions: "9.7K"
    },
    {
      id: 60,
      title: "Find Longest Word in String",
      description: "Write a JavaScript program to find the longest word in a sentence.",
      difficulty: "Intermediate",
      topics: ["Strings", "Loops"],
      Sample_Input: "JavaScript is awesome",
      Sample_Output: "JavaScript",
      solved: false,
      successRate: "89%",
      submissions: "10.8K"
    },
    {
      id: 61,
      title: "Check Anagram Strings",
      description: "Write a JavaScript program to check if two strings are anagrams.",
      difficulty: "Intermediate",
      topics: ["Strings", "Sorting"],
      Sample_Input: "listen silent",
      Sample_Output: "Anagram",
      solved: false,
      successRate: "85%",
      submissions: "9.6K"
    },
    {
      id: 62,
      title: "Capitalize First Letter of Each Word",
      description: "Write a JavaScript program to capitalize the first letter of each word in a sentence.",
      difficulty: "Intermediate",
      topics: ["Strings", "Functions"],
      Sample_Input: "hello world",
      Sample_Output: "Hello World",
      solved: false,
      successRate: "90%",
      submissions: "11.2K"
    },
    {
      id: 63,
      title: "Count Occurrence of Character",
      description: "Write a JavaScript program to count occurrences of a character in a string.",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "banana a",
      Sample_Output: "3",
      solved: false,
      successRate: "92%",
      submissions: "12.4K"
    },
    {
      id: 64,
      title: "Convert Celsius to Fahrenheit",
      description: "Write a JavaScript program to convert Celsius to Fahrenheit.",
      difficulty: "Easy",
      topics: ["Math"],
      Sample_Input: "0",
      Sample_Output: "32",
      solved: false,
      successRate: "96%",
      submissions: "14.3K"
    },
    {
      id: 65,
      title: "Convert Fahrenheit to Celsius",
      description: "Write a JavaScript program to convert Fahrenheit to Celsius.",
      difficulty: "Easy",
      topics: ["Math"],
      Sample_Input: "212",
      Sample_Output: "100",
      solved: false,
      successRate: "96%",
      submissions: "14.1K"
    },
    {
      id: 66,
      title: "Calculate Compound Interest",
      description: "Write a JavaScript program to calculate compound interest for given values.",
      difficulty: "Intermediate",
      topics: ["Math", "Functions"],
      Sample_Input: "1000 5 2",
      Sample_Output: "1102.5",
      solved: false,
      successRate: "86%",
      submissions: "9.9K"
    },
    {
      id: 67,
      title: "Check Prime Using Function",
      description: "Write a JavaScript function that checks if a number is prime.",
      difficulty: "Intermediate",
      topics: ["Functions", "Math"],
      Sample_Input: "11",
      Sample_Output: "Prime",
      solved: false,
      successRate: "87%",
      submissions: "10.1K"
    },
    {
      id: 68,
      title: "Sum of Array Using Function",
      description: "Write a JavaScript function that returns the sum of elements in an array.",
      difficulty: "Easy",
      topics: ["Functions", "Arrays"],
      Sample_Input: "[10, 20, 30]",
      Sample_Output: "60",
      solved: false,
      successRate: "94%",
      submissions: "13.4K"
    },
    {
      id: 69,
      title: "Find Largest Element Using Function",
      description: "Write a JavaScript function that returns the largest number in an array.",
      difficulty: "Easy",
      topics: ["Functions", "Arrays"],
      Sample_Input: "[5, 7, 3, 9]",
      Sample_Output: "9",
      solved: false,
      successRate: "92%",
      submissions: "12.8K"
    },
    {
      id: 70,
      title: "Check Palindrome Using Function",
      description: "Write a JavaScript function that checks whether a string is a palindrome.",
      difficulty: "Easy",
      topics: ["Functions", "Strings"],
      Sample_Input: "level",
      Sample_Output: "Palindrome",
      solved: false,
      successRate: "90%",
      submissions: "11.9K"
    },
    {
      id: 71,
      title: "Sum of Even Numbers in Array",
      description: "Write a JavaScript function that returns the sum of even numbers in an array.",
      difficulty: "Intermediate",
      topics: ["Functions", "Arrays", "Conditionals"],
      Sample_Input: "[1, 2, 3, 4, 5, 6]",
      Sample_Output: "12",
      solved: false,
      successRate: "89%",
      submissions: "11.3K"
    },
    {
      id: 72,
      title: "Check Armstrong Using Function",
      description: "Write a JavaScript function that checks if a number is Armstrong.",
      difficulty: "Intermediate",
      topics: ["Functions", "Math"],
      Sample_Input: "153",
      Sample_Output: "Armstrong",
      solved: false,
      successRate: "85%",
      submissions: "9.5K"
    },
    {
      id: 73,
      title: "Find Missing Number",
      description: "Write a JavaScript program to find the missing number in a sequence array.",
      difficulty: "Intermediate",
      topics: ["Arrays", "Math"],
      Sample_Input: "[1, 2, 4, 5]",
      Sample_Output: "3",
      solved: false,
      successRate: "84%",
      submissions: "9.2K"
    },
    {
      id: 74,
      title: "Count Vowels Using Function",
      description: "Write a JavaScript function that counts vowels in a string.",
      difficulty: "Easy",
      topics: ["Functions", "Strings"],
      Sample_Input: "Hello World",
      Sample_Output: "3",
      solved: false,
      successRate: "92%",
      submissions: "12.5K"
    },
    {
      id: 75,
      title: "Check Perfect Number Function",
      description: "Write a JavaScript function that checks if a number is a perfect number.",
      difficulty: "Intermediate",
      topics: ["Functions", "Math"],
      Sample_Input: "28",
      Sample_Output: "Perfect",
      solved: false,
      successRate: "86%",
      submissions: "9.8K"
    },
    {
      id: 76,
      title: "Find Intersection of Arrays",
      description: "Write a JavaScript program to find the intersection of two arrays.",
      difficulty: "Intermediate",
      topics: ["Arrays", "Sets"],
      Sample_Input: "[1,2,3], [2,3,4]",
      Sample_Output: "[2,3]",
      solved: false,
      successRate: "87%",
      submissions: "10.0K"
    },
    {
      id: 77,
      title: "Find Union of Arrays",
      description: "Write a JavaScript program to find the union of two arrays.",
      difficulty: "Intermediate",
      topics: ["Arrays", "Sets"],
      Sample_Input: "[1,2,3], [3,4,5]",
      Sample_Output: "[1,2,3,4,5]",
      solved: false,
      successRate: "89%",
      submissions: "10.7K"
    },
    {
      id: 78,
      title: "Count Words Using Function",
      description: "Write a JavaScript function that counts the number of words in a sentence.",
      difficulty: "Easy",
      topics: ["Functions", "Strings"],
      Sample_Input: "JS is powerful",
      Sample_Output: "3",
      solved: false,
      successRate: "91%",
      submissions: "11.9K"
    },
    {
      id: 79,
      title: "Find Factors of Number",
      description: "Write a JavaScript program that prints all factors of a given number.",
      difficulty: "Intermediate",
      topics: ["Loops", "Math"],
      Sample_Input: "12",
      Sample_Output: "1 2 3 4 6 12",
      solved: false,
      successRate: "89%",
      submissions: "10.6K"
    },
    {
      id: 80,
      title: "Sum of Odd Numbers",
      description: "Write a JavaScript program to find the sum of all odd numbers up to N.",
      difficulty: "Easy",
      topics: ["Loops", "Math"],
      Sample_Input: "10",
      Sample_Output: "25",
      solved: false,
      successRate: "92%",
      submissions: "12.8K"
    },
    {
      id: 81,
      title: "Find Median of Array",
      description: "Write a JavaScript program to find the median value of an array.",
      difficulty: "Intermediate",
      topics: ["Arrays", "Sorting"],
      Sample_Input: "[1, 3, 5, 7]",
      Sample_Output: "4",
      solved: false,
      successRate: "84%",
      submissions: "9.4K"
    },
    {
      id: 82,
      title: "Convert String to Title Case",
      description: "Write a JavaScript function that converts a string to title case.",
      difficulty: "Intermediate",
      topics: ["Strings", "Functions"],
      Sample_Input: "welcome to javascript",
      Sample_Output: "Welcome To Javascript",
      solved: false,
      successRate: "90%",
      submissions: "11.5K"
    },
    {
      id: 83,
      title: "Count Consonants in String",
      description: "Write a JavaScript function to count consonants in a string.",
      difficulty: "Intermediate",
      topics: ["Functions", "Strings"],
      Sample_Input: "javascript",
      Sample_Output: "6",
      solved: false,
      successRate: "88%",
      submissions: "10.4K"
    },
    {
      id: 84,
      title: "Find Sum of Prime Numbers",
      description: "Write a JavaScript program to find the sum of all prime numbers up to N.",
      difficulty: "Intermediate",
      topics: ["Loops", "Math"],
      Sample_Input: "10",
      Sample_Output: "17",
      solved: false,
      successRate: "85%",
      submissions: "9.8K"
    },
    {
      id: 85,
      title: "Find Common Characters in Strings",
      description: "Write a JavaScript program to find common characters between two strings.",
      difficulty: "Intermediate",
      topics: ["Strings", "Sets"],
      Sample_Input: "hello world",
      Sample_Output: "lo",
      solved: false,
      successRate: "87%",
      submissions: "10.1K"
    },
    {
      id: 86,
      title: "Check Palindrome Using Recursion",
      description: "Write a JavaScript recursive function to check if a string is palindrome.",
      difficulty: "Intermediate",
      topics: ["Recursion", "Strings"],
      Sample_Input: "madam",
      Sample_Output: "Palindrome",
      solved: false,
      successRate: "84%",
      submissions: "9.6K"
    },
    {
      id: 87,
      title: "Generate Random String",
      description: "Write a JavaScript program to generate a random alphanumeric string of given length.",
      difficulty: "Intermediate",
      topics: ["Strings", "Math"],
      Sample_Input: "8",
      Sample_Output: "aB3f9T1k",
      solved: false,
      successRate: "88%",
      submissions: "10.7K"
    },
    {
      id: 88,
      title: "Find Palindrome Words in Sentence",
      description: "Write a JavaScript program that finds all palindrome words in a given sentence.",
      difficulty: "Intermediate",
      topics: ["Strings", "Loops"],
      Sample_Input: "madam level civic car",
      Sample_Output: "madam level civic",
      solved: false,
      successRate: "86%",
      submissions: "9.8K"
    },
    {
      id: 89,
      title: "Reverse Words in Sentence",
      description: "Write a JavaScript function that reverses each word in a sentence.",
      difficulty: "Intermediate",
      topics: ["Strings", "Functions"],
      Sample_Input: "I love JS",
      Sample_Output: "I evol SJ",
      solved: false,
      successRate: "89%",
      submissions: "10.9K"
    },
    {
      id: 90,
      title: "Convert Object to Array",
      description: "Write a JavaScript program to convert an object into an array of key-value pairs.",
      difficulty: "Intermediate",
      topics: ["Objects", "Arrays"],
      Sample_Input: "{a:1, b:2}",
      Sample_Output: "[['a',1], ['b',2]]",
      solved: false,
      successRate: "91%",
      submissions: "11.2K"
    },
    {
      id: 91,
      title: "Convert Array to Object",
      description: "Write a JavaScript program to convert an array of key-value pairs into an object.",
      difficulty: "Intermediate",
      topics: ["Objects", "Arrays"],
      Sample_Input: "[['a',1], ['b',2]]",
      Sample_Output: "{a:1, b:2}",
      solved: false,
      successRate: "91%",
      submissions: "11.0K"
    },
    {
      id: 92,
      title: "Count Properties in Object",
      description: "Write a JavaScript function to count the number of properties in an object.",
      difficulty: "Intermediate",
      topics: ["Objects"],
      Sample_Input: "{a:1, b:2, c:3}",
      Sample_Output: "3",
      solved: false,
      successRate: "90%",
      submissions: "10.8K"
    },
    {
      id: 93,
      title: "Clone an Object",
      description: "Write a JavaScript program to create a shallow copy of an object.",
      difficulty: "Intermediate",
      topics: ["Objects", "Functions"],
      Sample_Input: "{x:1, y:2}",
      Sample_Output: "{x:1, y:2}",
      solved: false,
      successRate: "93%",
      submissions: "11.5K"
    },
    {
      id: 94,
      title: "Compare Two Objects",
      description: "Write a JavaScript function that compares two objects and returns true if equal.",
      difficulty: "Intermediate",
      topics: ["Objects", "Functions"],
      Sample_Input: "{a:1,b:2}, {a:1,b:2}",
      Sample_Output: "true",
      solved: false,
      successRate: "89%",
      submissions: "10.6K"
    },
    {
      id: 95,
      title: "Deep Clone an Object",
      description: "Write a JavaScript function that performs a deep copy of a nested object.",
      difficulty: "Hard",
      topics: ["Objects", "Recursion"],
      Sample_Input: "{a:{b:2}}",
      Sample_Output: "{a:{b:2}}",
      solved: false,
      successRate: "83%",
      submissions: "8.9K"
    },
    {
      id: 96,
      title: "Flatten Nested Object",
      description: "Write a JavaScript function that flattens a deeply nested object.",
      difficulty: "Hard",
      topics: ["Objects", "Recursion"],
      Sample_Input: "{a:{b:{c:1}}}",
      Sample_Output: "{'a.b.c':1}",
      solved: false,
      successRate: "81%",
      submissions: "8.5K"
    },
    {
      id: 97,
      title: "Group Array of Objects by Key",
      description: "Write a JavaScript function to group objects in an array by a specific property.",
      difficulty: "Hard",
      topics: ["Objects", "Arrays"],
      Sample_Input: "[{type:'fruit',name:'apple'},{type:'fruit',name:'banana'},{type:'veg',name:'carrot'}]",
      Sample_Output: "{fruit:[{...}],veg:[{...}]}",
      solved: false,
      successRate: "82%",
      submissions: "8.8K"
    },
    {
      id: 98,
      title: "Sort Array of Objects by Property",
      description: "Write a JavaScript program to sort an array of objects by a specific key.",
      difficulty: "Intermediate",
      topics: ["Objects", "Arrays"],
      Sample_Input: "[{name:'Bob',age:25},{name:'Alice',age:22}]",
      Sample_Output: "[{name:'Alice',age:22},{name:'Bob',age:25}]",
      solved: false,
      successRate: "85%",
      submissions: "9.7K"
    },
    {
      id: 99,
      title: "Filter Array of Objects",
      description: "Write a JavaScript function that filters an array of objects based on a condition.",
      difficulty: "Intermediate",
      topics: ["Objects", "Arrays", "Filter"],
      Sample_Input: "[{age:20},{age:30}]",
      Sample_Output: "[{age:30}]",
      solved: false,
      successRate: "88%",
      submissions: "10.2K"
    },
    {
      id: 100,
      title: "Find Average Age in Array of Objects",
      description: "Write a JavaScript function to calculate average age from an array of user objects.",
      difficulty: "Intermediate",
      topics: ["Objects", "Arrays", "Reduce"],
      Sample_Input: "[{age:20},{age:30},{age:40}]",
      Sample_Output: "30",
      solved: false,
      successRate: "89%",
      submissions: "10.9K"
    },
    {
      id: 101,
      title: "Arrow Function Basics",
      description: "Write a JavaScript program using an arrow function to return the square of a number.",
      difficulty: "Easy",
      topics: ["Functions", "ES6"],
      Sample_Input: "4",
      Sample_Output: "16",
      solved: false,
      successRate: "95%",
      submissions: "14.2K"
    },
    {
      id: 102,
      title: "Default Parameters",
      description: "Write a function with default parameters that adds two numbers, using 10 as a default for the second parameter.",
      difficulty: "Easy",
      topics: ["Functions", "ES6"],
      Sample_Input: "5",
      Sample_Output: "15",
      solved: false,
      successRate: "94%",
      submissions: "13.8K"
    },
    {
      id: 103,
      title: "Template Literals Example",
      description: "Use template literals to print 'Hello, my name is John and I am 25 years old'.",
      difficulty: "Easy",
      topics: ["Strings", "ES6"],
      Sample_Input: "John, 25",
      Sample_Output: "Hello, my name is John and I am 25 years old",
      solved: false,
      successRate: "96%",
      submissions: "15.1K"
    },
    {
      id: 104,
      title: "Destructure Array",
      description: "Write a program using destructuring assignment to extract the first two elements of an array.",
      difficulty: "Easy",
      topics: ["Arrays", "ES6"],
      Sample_Input: "[10, 20, 30]",
      Sample_Output: "10, 20",
      solved: false,
      successRate: "93%",
      submissions: "12.7K"
    },
    {
      id: 105,
      title: "Destructure Object",
      description: "Use object destructuring to extract 'name' and 'age' from an object.",
      difficulty: "Easy",
      topics: ["Objects", "ES6"],
      Sample_Input: "{name:'Alice',age:22,city:'NY'}",
      Sample_Output: "Alice 22",
      solved: false,
      successRate: "94%",
      submissions: "13.1K"
    },
    {
      id: 106,
      title: "Spread Operator with Arrays",
      description: "Use the spread operator to merge two arrays.",
      difficulty: "Easy",
      topics: ["Arrays", "ES6"],
      Sample_Input: "[1,2,3], [4,5,6]",
      Sample_Output: "[1,2,3,4,5,6]",
      solved: false,
      successRate: "93%",
      submissions: "12.6K"
    },
    {
      id: 107,
      title: "Rest Parameters Example",
      description: "Use rest parameters to accept variable number of arguments and return their sum.",
      difficulty: "Intermediate",
      topics: ["Functions", "ES6"],
      Sample_Input: "1, 2, 3, 4",
      Sample_Output: "10",
      solved: false,
      successRate: "90%",
      submissions: "11.2K"
    },
    {
      id: 108,
      title: "Clone Object using Spread",
      description: "Write a function that clones an object using the ES6 spread operator.",
      difficulty: "Intermediate",
      topics: ["Objects", "ES6"],
      Sample_Input: "{a:1,b:2}",
      Sample_Output: "{a:1,b:2}",
      solved: false,
      successRate: "91%",
      submissions: "11.8K"
    },
    {
      id: 109,
      title: "Use Map Object",
      description: "Create a Map object to store key-value pairs and retrieve a value by its key.",
      difficulty: "Intermediate",
      topics: ["ES6", "Collections"],
      Sample_Input: "('name', 'Alice')",
      Sample_Output: "'Alice'",
      solved: false,
      successRate: "90%",
      submissions: "10.9K"
    },
    {
      id: 110,
      title: "Use Set Object",
      description: "Use a Set to remove duplicate values from an array.",
      difficulty: "Intermediate",
      topics: ["ES6", "Collections"],
      Sample_Input: "[1,2,2,3,3,4]",
      Sample_Output: "[1,2,3,4]",
      solved: false,
      successRate: "92%",
      submissions: "11.5K"
    },
    {
      id: 111,
      title: "Class and Object Creation",
      description: "Write a class 'Person' with properties name and age, and create an object of it.",
      difficulty: "Intermediate",
      topics: ["OOP", "Classes", "ES6"],
      Sample_Input: "Person('Alice',22)",
      Sample_Output: "Name: Alice, Age: 22",
      solved: false,
      successRate: "90%",
      submissions: "10.8K"
    },
    {
      id: 112,
      title: "Class Inheritance Example",
      description: "Create a base class Animal and a derived class Dog with a method 'speak' returning 'Woof!'.",
      difficulty: "Intermediate",
      topics: ["OOP", "Inheritance", "ES6"],
      Sample_Input: "Dog.speak()",
      Sample_Output: "Woof!",
      solved: false,
      successRate: "88%",
      submissions: "10.1K"
    },
    {
      id: 113,
      title: "Static Method Example",
      description: "Write a class with a static method that returns 'Hello from static!'.",
      difficulty: "Easy",
      topics: ["Classes", "OOP"],
      Sample_Input: "ClassName.greet()",
      Sample_Output: "Hello from static!",
      solved: false,
      successRate: "93%",
      submissions: "12.4K"
    },
    {
      id: 114,
      title: "Getters and Setters Example",
      description: "Write a class that uses getter and setter for a property 'temperature'.",
      difficulty: "Intermediate",
      topics: ["Classes", "OOP"],
      Sample_Input: "obj.temperature = 30",
      Sample_Output: "Temperature is 30°C",
      solved: false,
      successRate: "89%",
      submissions: "10.3K"
    },
    {
      id: 115,
      title: "Create Promise",
      description: "Write a function that returns a Promise which resolves with 'Success' after 1 second.",
      difficulty: "Intermediate",
      topics: ["Promises", "Async"],
      Sample_Input: "None",
      Sample_Output: "Success",
      solved: false,
      successRate: "87%",
      submissions: "9.8K"
    },
    {
      id: 116,
      title: "Promise Chain Example",
      description: "Chain two promises so that the second runs after the first resolves.",
      difficulty: "Intermediate",
      topics: ["Promises", "Async"],
      Sample_Input: "None",
      Sample_Output: "Task 1 done, Task 2 done",
      solved: false,
      successRate: "85%",
      submissions: "9.5K"
    },
    {
      id: 117,
      title: "Async/Await Example",
      description: "Write an async function that waits for 2 seconds using setTimeout and returns 'Done'.",
      difficulty: "Intermediate",
      topics: ["Async/Await", "Promises"],
      Sample_Input: "None",
      Sample_Output: "Done",
      solved: false,
      successRate: "86%",
      submissions: "9.7K"
    },
    {
      id: 118,
      title: "Fetch API Example",
      description: "Use Fetch API to get data from 'https://jsonplaceholder.typicode.com/posts/1' and log the title.",
      difficulty: "Hard",
      topics: ["Fetch API", "Promises"],
      Sample_Input: "None",
      Sample_Output: "Post Title",
      solved: false,
      successRate: "83%",
      submissions: "8.9K"
    },
    {
      id: 119,
      title: "Handle Promise Rejection",
      description: "Write a Promise that rejects after 2 seconds and handle it with .catch().",
      difficulty: "Intermediate",
      topics: ["Promises", "Error Handling"],
      Sample_Input: "None",
      Sample_Output: "Error caught!",
      solved: false,
      successRate: "84%",
      submissions: "9.2K"
    },
    {
      id: 120,
      title: "Promise.all Example",
      description: "Use Promise.all to wait for multiple promises and return all results.",
      difficulty: "Intermediate",
      topics: ["Promises", "Async"],
      Sample_Input: "Promise1, Promise2",
      Sample_Output: "['Done1','Done2']",
      solved: false,
      successRate: "85%",
      submissions: "9.6K"
    },
    {
      id: 121,
      title: "DOM Query Selector",
      description: "Select an HTML element by class name and change its text content.",
      difficulty: "Easy",
      topics: ["DOM", "Selectors"],
      Sample_Input: "<p class='msg'></p>",
      Sample_Output: "Updated text!",
      solved: false,
      successRate: "91%",
      submissions: "11.8K"
    },
    {
      id: 122,
      title: "DOM Event Listener",
      description: "Add a click event listener to a button that changes background color.",
      difficulty: "Intermediate",
      topics: ["DOM", "Events"],
      Sample_Input: "<button>Click</button>",
      Sample_Output: "Background color changed",
      solved: false,
      successRate: "90%",
      submissions: "10.9K"
    },
    {
      id: 123,
      title: "Form Validation",
      description: "Write JavaScript to check if an input field is empty and show an alert.",
      difficulty: "Intermediate",
      topics: ["DOM", "Validation"],
      Sample_Input: "''",
      Sample_Output: "Alert: Field required!",
      solved: false,
      successRate: "88%",
      submissions: "10.1K"
    },
    {
      id: 124,
      title: "Create Element Dynamically",
      description: "Use JS to create a new paragraph element and append it to the DOM.",
      difficulty: "Easy",
      topics: ["DOM", "Manipulation"],
      Sample_Input: "None",
      Sample_Output: "<p>Created!</p>",
      solved: false,
      successRate: "90%",
      submissions: "10.8K"
    },
    {
      id: 125,
      title: "Delete DOM Element",
      description: "Write a script to remove a specific element from the DOM by ID.",
      difficulty: "Easy",
      topics: ["DOM", "Manipulation"],
      Sample_Input: "id='demo'",
      Sample_Output: "Element removed",
      solved: false,
      successRate: "88%",
      submissions: "10.4K"
    },
    {
      id: 126,
      title: "Find Maximum in Array",
      description: "Write a JavaScript function that returns the maximum number in an array.",
      difficulty: "Easy",
      topics: ["Arrays", "Math"],
      Sample_Input: "[10, 25, 3, 99, 42]",
      Sample_Output: "99",
      solved: false,
      successRate: "94%",
      submissions: "13.9K"
    },
    {
      id: 127,
      title: "Find Minimum in Array",
      description: "Write a JavaScript function that returns the minimum number in an array.",
      difficulty: "Easy",
      topics: ["Arrays", "Math"],
      Sample_Input: "[4, 7, 1, 9, 3]",
      Sample_Output: "1",
      solved: false,
      successRate: "93%",
      submissions: "13.5K"
    },
    {
      id: 128,
      title: "Array Sort Ascending",
      description: "Write a JavaScript function to sort an array in ascending order.",
      difficulty: "Easy",
      topics: ["Arrays", "Sorting"],
      Sample_Input: "[4, 2, 9, 1]",
      Sample_Output: "[1, 2, 4, 9]",
      solved: false,
      successRate: "91%",
      submissions: "12.7K"
    },
    {
      id: 129,
      title: "Array Sort Descending",
      description: "Sort an array in descending order using JavaScript's sort() method.",
      difficulty: "Easy",
      topics: ["Arrays", "Sorting"],
      Sample_Input: "[2, 5, 1, 8]",
      Sample_Output: "[8, 5, 2, 1]",
      solved: false,
      successRate: "90%",
      submissions: "12.4K"
    },
    {
      id: 130,
      title: "Linear Search",
      description: "Write a function to perform a linear search in an array for a given value.",
      difficulty: "Easy",
      topics: ["Search", "Arrays"],
      Sample_Input: "[3, 5, 2, 9], 9",
      Sample_Output: "3",
      solved: false,
      successRate: "88%",
      submissions: "11.9K"
    },
    {
      id: 131,
      title: "Binary Search",
      description: "Implement binary search to find an element in a sorted array.",
      difficulty: "Medium",
      topics: ["Search", "Algorithms"],
      Sample_Input: "[1, 3, 5, 7, 9], 7",
      Sample_Output: "3",
      solved: false,
      successRate: "86%",
      submissions: "10.9K"
    },
    {
      id: 132,
      title: "Reverse an Array",
      description: "Write a JavaScript program to reverse the elements of an array.",
      difficulty: "Easy",
      topics: ["Arrays", "Loops"],
      Sample_Input: "[1, 2, 3, 4]",
      Sample_Output: "[4, 3, 2, 1]",
      solved: false,
      successRate: "93%",
      submissions: "13.0K"
    },
    {
      id: 133,
      title: "Remove Duplicates from Array",
      description: "Remove all duplicate values from an array using JavaScript.",
      difficulty: "Easy",
      topics: ["Arrays", "Sets"],
      Sample_Input: "[1,2,2,3,3,4]",
      Sample_Output: "[1,2,3,4]",
      solved: false,
      successRate: "92%",
      submissions: "12.5K"
    },
    {
      id: 134,
      title: "Count Occurrences in Array",
      description: "Write a function that counts how many times each element occurs in an array.",
      difficulty: "Medium",
      topics: ["Arrays", "Objects"],
      Sample_Input: "[1,2,2,3,3,3]",
      Sample_Output: "{1:1,2:2,3:3}",
      solved: false,
      successRate: "88%",
      submissions: "11.3K"
    },
    {
      id: 135,
      title: "Rotate Array Elements",
      description: "Rotate an array to the right by k positions.",
      difficulty: "Medium",
      topics: ["Arrays", "Algorithms"],
      Sample_Input: "[1,2,3,4,5], 2",
      Sample_Output: "[4,5,1,2,3]",
      solved: false,
      successRate: "85%",
      submissions: "10.7K"
    },
    {
      id: 136,
      title: "Check Palindrome String",
      description: "Write a JavaScript function to check if a string is palindrome.",
      difficulty: "Easy",
      topics: ["Strings", "Logic"],
      Sample_Input: "madam",
      Sample_Output: "true",
      solved: false,
      successRate: "94%",
      submissions: "13.2K"
    },
    {
      id: 137,
      title: "Count Words in Sentence",
      description: "Write a function that counts the number of words in a given sentence.",
      difficulty: "Easy",
      topics: ["Strings"],
      Sample_Input: "Hello world from JavaScript",
      Sample_Output: "4",
      solved: false,
      successRate: "92%",
      submissions: "12.4K"
    },
    {
      id: 138,
      title: "Capitalize First Letter",
      description: "Capitalize the first letter of each word in a sentence.",
      difficulty: "Medium",
      topics: ["Strings"],
      Sample_Input: "hello world",
      Sample_Output: "Hello World",
      solved: false,
      successRate: "90%",
      submissions: "11.8K"
    },
    {
      id: 139,
      title: "Count Unique Characters",
      description: "Count the number of unique characters in a string using Set.",
      difficulty: "Medium",
      topics: ["Strings", "Sets"],
      Sample_Input: "programming",
      Sample_Output: "8",
      solved: false,
      successRate: "88%",
      submissions: "11.0K"
    },
    {
      id: 140,
      title: "Check Anagram",
      description: "Write a function that checks whether two strings are anagrams.",
      difficulty: "Medium",
      topics: ["Strings", "Sorting"],
      Sample_Input: "listen, silent",
      Sample_Output: "true",
      solved: false,
      successRate: "86%",
      submissions: "10.6K"
    },
    {
      id: 141,
      title: "JSON Stringify and Parse",
      description: "Convert an object to JSON string and then parse it back to object.",
      difficulty: "Easy",
      topics: ["JSON", "Objects"],
      Sample_Input: "{a:1,b:2}",
      Sample_Output: "{a:1,b:2}",
      solved: false,
      successRate: "91%",
      submissions: "12.1K"
    },
    {
      id: 142,
      title: "Merge Two Objects",
      description: "Write JavaScript to merge two objects using spread syntax.",
      difficulty: "Easy",
      topics: ["Objects", "ES6"],
      Sample_Input: "{a:1},{b:2}",
      Sample_Output: "{a:1,b:2}",
      solved: false,
      successRate: "93%",
      submissions: "12.9K"
    },
    {
      id: 143,
      title: "Check Property Exists in Object",
      description: "Check if a property exists in an object using the in operator.",
      difficulty: "Easy",
      topics: ["Objects"],
      Sample_Input: "{name:'John', age:30}, 'age'",
      Sample_Output: "true",
      solved: false,
      successRate: "92%",
      submissions: "12.7K"
    },
    {
      id: 144,
      title: "Get Current Date and Time",
      description: "Write a JS program that prints the current date and time.",
      difficulty: "Easy",
      topics: ["Date", "Time"],
      Sample_Input: "None",
      Sample_Output: "2025-10-27 14:30:00",
      solved: false,
      successRate: "95%",
      submissions: "14.3K"
    },
    {
      id: 145,
      title: "Format Date as DD/MM/YYYY",
      description: "Format the current date as DD/MM/YYYY in JavaScript.",
      difficulty: "Medium",
      topics: ["Date", "Formatting"],
      Sample_Input: "2025-10-27",
      Sample_Output: "27/10/2025",
      solved: false,
      successRate: "90%",
      submissions: "11.7K"
    },
    {
      id: 146,
      title: "Calculate Days Between Dates",
      description: "Calculate the number of days between two dates.",
      difficulty: "Medium",
      topics: ["Date", "Math"],
      Sample_Input: "2025-10-27, 2025-11-02",
      Sample_Output: "6",
      solved: false,
      successRate: "88%",
      submissions: "10.9K"
    },
    {
      id: 147,
      title: "Random Number Generator",
      description: "Generate a random number between 1 and 100.",
      difficulty: "Easy",
      topics: ["Math", "Random"],
      Sample_Input: "None",
      Sample_Output: "42",
      solved: false,
      successRate: "95%",
      submissions: "14.1K"
    },
    {
      id: 148,
      title: "Round to Two Decimals",
      description: "Round a floating-point number to two decimal places.",
      difficulty: "Easy",
      topics: ["Math"],
      Sample_Input: "5.6789",
      Sample_Output: "5.68",
      solved: false,
      successRate: "94%",
      submissions: "13.6K"
    },
    {
      id: 149,
      title: "Convert Celsius to Fahrenheit",
      description: "Convert temperature from Celsius to Fahrenheit using formula (C×9/5)+32.",
      difficulty: "Easy",
      topics: ["Math"],
      Sample_Input: "0",
      Sample_Output: "32",
      solved: false,
      successRate: "93%",
      submissions: "12.9K"
    },
    {
      id: 150,
      title: "Handle Try-Catch Error",
      description: "Write a program using try-catch to handle division by zero.",
      difficulty: "Medium",
      topics: ["Error Handling", "Exceptions"],
      Sample_Input: "10, 0",
      Sample_Output: "Error: Division by zero",
      solved: false,
      successRate: "89%",
      submissions: "10.8K"
    },
    {
      id: 151,
      title: "Sum of Digits Using Recursion",
      description: "Write a recursive function to find the sum of digits of a number.",
      difficulty: "Intermediate",
      topics: ["Recursion", "Math"],
      Sample_Input: "1234",
      Sample_Output: "10",
      solved: false,
      successRate: "82%",
      submissions: "9.1K"
    },
    {
      id: 152,
      title: "Flatten Nested Array",
      description: "Flatten a nested array into a single-level array using recursion.",
      difficulty: "Intermediate",
      topics: ["Recursion", "Arrays"],
      Sample_Input: "[1, [2, [3, [4]]]]",
      Sample_Output: "[1, 2, 3, 4]",
      solved: false,
      successRate: "81%",
      submissions: "9.4K"
    },
    {
      id: 153,
      title: "Find Factorial Recursively",
      description: "Compute factorial of a number using recursion.",
      difficulty: "Intermediate",
      topics: ["Recursion", "Math"],
      Sample_Input: "5",
      Sample_Output: "120",
      solved: false,
      successRate: "85%",
      submissions: "10.2K"
    },
    {
      id: 154,
      title: "Find Fibonacci Using Recursion",
      description: "Return the nth Fibonacci number using a recursive function.",
      difficulty: "Intermediate",
      topics: ["Recursion", "Math"],
      Sample_Input: "6",
      Sample_Output: "8",
      solved: false,
      successRate: "79%",
      submissions: "9.5K"
    },
    {
      id: 155,
      title: "Find Prime Numbers in Range",
      description: "Generate all prime numbers up to a given limit.",
      difficulty: "Intermediate",
      topics: ["Loops", "Math"],
      Sample_Input: "10",
      Sample_Output: "[2, 3, 5, 7]",
      solved: false,
      successRate: "80%",
      submissions: "9.2K"
    },
    {
      id: 156,
      title: "Count Vowels in String",
      description: "Count number of vowels in a given string.",
      difficulty: "Intermediate",
      topics: ["Strings", "Logic"],
      Sample_Input: "JavaScript",
      Sample_Output: "3",
      solved: false,
      successRate: "88%",
      submissions: "11.0K"
    },
    {
      id: 157,
      title: "Find Second Largest Number",
      description: "Find the second largest element in an array.",
      difficulty: "Intermediate",
      topics: ["Arrays", "Sorting"],
      Sample_Input: "[10, 20, 4, 45, 99]",
      Sample_Output: "45",
      solved: false,
      successRate: "83%",
      submissions: "9.8K"
    },
    {
      id: 158,
      title: "Check if Object is Empty",
      description: "Check whether an object has any properties or not.",
      difficulty: "Intermediate",
      topics: ["Objects", "Logic"],
      Sample_Input: "{}",
      Sample_Output: "true",
      solved: false,
      successRate: "91%",
      submissions: "12.0K"
    },
    {
      id: 159,
      title: "Deep Clone an Object",
      description: "Clone a nested JavaScript object without reference copying.",
      difficulty: "Intermediate",
      topics: ["Objects", "JSON"],
      Sample_Input: "{a:1,b:{c:2}}",
      Sample_Output: "{a:1,b:{c:2}}",
      solved: false,
      successRate: "78%",
      submissions: "8.9K"
    },
    {
      id: 160,
      title: "Debounce Function",
      description: "Implement a debounce function to limit how often a function executes.",
      difficulty: "Intermediate",
      topics: ["Functions", "Closures", "Performance"],
      Sample_Input: "debounce(fn, 300)",
      Sample_Output: "Limits function calls every 300ms",
      solved: false,
      successRate: "76%",
      submissions: "8.3K"
    },
    {
      id: 161,
      title: "Throttle Function",
      description: "Implement a throttle function that executes at most once in a given time interval.",
      difficulty: "Intermediate",
      topics: ["Functions", "Closures", "Performance"],
      Sample_Input: "throttle(fn, 200)",
      Sample_Output: "Executes once every 200ms",
      solved: false,
      successRate: "75%",
      submissions: "8.0K"
    },
    {
      id: 162,
      title: "Custom Array Filter",
      description: "Implement your own version of Array.filter().",
      difficulty: "Intermediate",
      topics: ["Arrays", "Functions"],
      Sample_Input: "[1,2,3,4,5], x => x > 2",
      Sample_Output: "[3,4,5]",
      solved: false,
      successRate: "84%",
      submissions: "9.7K"
    },
    {
      id: 163,
      title: "Custom Array Map",
      description: "Implement a custom map function that mimics Array.map().",
      difficulty: "Intermediate",
      topics: ["Arrays", "Higher Order Functions"],
      Sample_Input: "[1,2,3], x => x*2",
      Sample_Output: "[2,4,6]",
      solved: false,
      successRate: "85%",
      submissions: "9.8K"
    },
    {
      id: 164,
      title: "Custom Reduce Function",
      description: "Create a custom reduce() implementation from scratch.",
      difficulty: "Intermediate",
      topics: ["Arrays", "Reduce", "Functional Programming"],
      Sample_Input: "[1,2,3,4], (acc, val) => acc+val, 0",
      Sample_Output: "10",
      solved: false,
      successRate: "82%",
      submissions: "9.0K"
    },
    {
      id: 165,
      title: "Group Array by Property",
      description: "Group array of objects by a specific property.",
      difficulty: "Intermediate",
      topics: ["Arrays", "Objects"],
      Sample_Input: "[{type:'fruit'},{type:'veg'},{type:'fruit'}]",
      Sample_Output: "{fruit:[...], veg:[...]}",
      solved: false,
      successRate: "79%",
      submissions: "8.8K"
    },
    {
      id: 166,
      title: "Convert Array to Object",
      description: "Convert an array of key-value pairs into an object.",
      difficulty: "Intermediate",
      topics: ["Objects", "Arrays"],
      Sample_Input: "[['a',1],['b',2]]",
      Sample_Output: "{a:1,b:2}",
      solved: false,
      successRate: "87%",
      submissions: "10.1K"
    },
    {
      id: 167,
      title: "Find Intersection of Two Arrays",
      description: "Return the intersection of two arrays (common elements).",
      difficulty: "Intermediate",
      topics: ["Arrays", "Sets"],
      Sample_Input: "[1,2,3,4], [3,4,5]",
      Sample_Output: "[3,4]",
      solved: false,
      successRate: "85%",
      submissions: "9.6K"
    },
    {
      id: 168,
      title: "Check Deep Equality",
      description: "Write a function to compare two objects deeply for equality.",
      difficulty: "Intermediate",
      topics: ["Objects", "Recursion"],
      Sample_Input: "{a:1,b:{c:2}}, {a:1,b:{c:2}}",
      Sample_Output: "true",
      solved: false,
      successRate: "78%",
      submissions: "8.7K"
    },
    {
      id: 169,
      title: "Memoization Function",
      description: "Implement a memoization function to cache results of expensive computations.",
      difficulty: "Intermediate",
      topics: ["Functions", "Closures"],
      Sample_Input: "memoize(add)",
      Sample_Output: "Caches results for repeated inputs",
      solved: false,
      successRate: "77%",
      submissions: "8.4K"
    },
    {
      id: 170,
      title: "Find Longest Word in Sentence",
      description: "Return the longest word from a sentence.",
      difficulty: "Intermediate",
      topics: ["Strings", "Logic"],
      Sample_Input: "JavaScript is awesome",
      Sample_Output: "JavaScript",
      solved: false,
      successRate: "88%",
      submissions: "10.8K"
    },
    {
      id: 171,
      title: "Count Occurrences of Character",
      description: "Count how many times a given character appears in a string.",
      difficulty: "Intermediate",
      topics: ["Strings", "Loops"],
      Sample_Input: "banana, 'a'",
      Sample_Output: "3",
      solved: false,
      successRate: "89%",
      submissions: "10.9K"
    },
    {
      id: 172,
      title: "Capitalize Alternate Characters",
      description: "Return a string where every alternate character is capitalized.",
      difficulty: "Intermediate",
      topics: ["Strings", "Loops"],
      Sample_Input: "javascript",
      Sample_Output: "JaVaScRiPt",
      solved: false,
      successRate: "87%",
      submissions: "10.1K"
    },
    {
      id: 173,
      title: "Remove Specific Property from Object",
      description: "Remove a specific key from an object without mutating the original.",
      difficulty: "Intermediate",
      topics: ["Objects", "Destructuring"],
      Sample_Input: "{a:1,b:2,c:3}, 'b'",
      Sample_Output: "{a:1,c:3}",
      solved: false,
      successRate: "84%",
      submissions: "9.5K"
    },
    {
      id: 174,
      title: "Convert Snake Case to Camel Case",
      description: "Convert a snake_case string to camelCase format.",
      difficulty: "Intermediate",
      topics: ["Strings", "Regex"],
      Sample_Input: "hello_world_example",
      Sample_Output: "helloWorldExample",
      solved: false,
      successRate: "83%",
      submissions: "9.3K"
    },
    {
      id: 175,
      title: "DOM Element Selector Function",
      description: "Write a function that selects elements by CSS selector and returns an array.",
      difficulty: "Intermediate",
      topics: ["DOM", "Selectors"],
      Sample_Input: "'.btn'",
      Sample_Output: "[<button class='btn'>...]",
      solved: false,
      successRate: "80%",
      submissions: "8.6K"
    },
    {
      id: 176,
      title: "Sum of Array Using Reduce",
      description: "Use the reduce() method to compute the sum of all numbers in an array.",
      difficulty: "Intermediate",
      topics: ["Arrays", "Reduce", "Functional Programming"],
      Sample_Input: "[1, 2, 3, 4, 5]",
      Sample_Output: "15",
      solved: false,
      successRate: "89%",
      submissions: "10.5K"
    },
    {
      id: 177,
      title: "Remove Duplicates from Array (ES6 Set)",
      description: "Remove duplicate elements from an array using ES6 Set.",
      difficulty: "Intermediate",
      topics: ["Arrays", "ES6"],
      Sample_Input: "[1, 2, 2, 3, 4, 4]",
      Sample_Output: "[1, 2, 3, 4]",
      solved: false,
      successRate: "91%",
      submissions: "11.3K"
    },
    {
      id: 178,
      title: "Arrow Function Sum",
      description: "Write a concise arrow function that returns the sum of two numbers.",
      difficulty: "Intermediate",
      topics: ["Functions", "ES6"],
      Sample_Input: "3, 5",
      Sample_Output: "8",
      solved: false,
      successRate: "94%",
      submissions: "12.0K"
    },
    {
      id: 179,
      title: "Destructure Object Properties",
      description: "Extract specific properties from an object using ES6 destructuring.",
      difficulty: "Intermediate",
      topics: ["Objects", "ES6"],
      Sample_Input: "{name:'John', age:25}",
      Sample_Output: "name = John, age = 25",
      solved: false,
      successRate: "92%",
      submissions: "10.9K"
    },
    {
      id: 180,
      title: "Find Max Using Spread Operator",
      description: "Find the maximum number in an array using the spread operator.",
      difficulty: "Intermediate",
      topics: ["ES6", "Spread Operator"],
      Sample_Input: "[3, 7, 2, 9]",
      Sample_Output: "9",
      solved: false,
      successRate: "90%",
      submissions: "10.8K"
    },
    {
      id: 181,
      title: "Rest Operator Example",
      description: "Write a function using the rest operator that sums all provided arguments.",
      difficulty: "Intermediate",
      topics: ["Functions", "ES6"],
      Sample_Input: "1, 2, 3, 4",
      Sample_Output: "10",
      solved: false,
      successRate: "89%",
      submissions: "9.9K"
    },
    {
      id: 182,
      title: "Template Literals Example",
      description: "Use template literals to print a formatted string containing variables.",
      difficulty: "Intermediate",
      topics: ["Strings", "ES6"],
      Sample_Input: "name='John', age=30",
      Sample_Output: "My name is John and I am 30 years old.",
      solved: false,
      successRate: "93%",
      submissions: "11.1K"
    },
    {
      id: 183,
      title: "Promise Resolve Example",
      description: "Create and resolve a Promise that returns 'Success!'.",
      difficulty: "Intermediate",
      topics: ["Promises", "Asynchronous JS"],
      Sample_Input: "None",
      Sample_Output: "Success!",
      solved: false,
      successRate: "88%",
      submissions: "9.4K"
    },
    {
      id: 184,
      title: "Promise Reject Example",
      description: "Create a Promise that rejects with an error message 'Failed!'.",
      difficulty: "Intermediate",
      topics: ["Promises", "Error Handling"],
      Sample_Input: "None",
      Sample_Output: "Failed!",
      solved: false,
      successRate: "85%",
      submissions: "9.0K"
    },
    {
      id: 185,
      title: "Async/Await Example",
      description: "Write an async function that waits for a Promise and logs the result.",
      difficulty: "Intermediate",
      topics: ["Async/Await", "Promises"],
      Sample_Input: "None",
      Sample_Output: "Data fetched",
      solved: false,
      successRate: "86%",
      submissions: "9.3K"
    },
    {
      id: 186,
      title: "Fetch API Example",
      description: "Use fetch() to retrieve JSON data from a public API and print the result.",
      difficulty: "Intermediate",
      topics: ["Fetch API", "Promises"],
      Sample_Input: "https://jsonplaceholder.typicode.com/posts/1",
      Sample_Output: "{userId:1,id:1,title:'...',body:'...'}",
      solved: false,
      successRate: "82%",
      submissions: "8.9K"
    },
    {
      id: 187,
      title: "Handle Promise.all",
      description: "Use Promise.all() to resolve multiple Promises simultaneously.",
      difficulty: "Intermediate",
      topics: ["Promises", "Async"],
      Sample_Input: "[Promise1, Promise2]",
      Sample_Output: "['A', 'B']",
      solved: false,
      successRate: "84%",
      submissions: "9.2K"
    },
    {
      id: 188,
      title: "Class and Object Example",
      description: "Create a class 'Car' with properties and a method that returns car info.",
      difficulty: "Intermediate",
      topics: ["Classes", "OOP"],
      Sample_Input: "new Car('BMW', 'Black')",
      Sample_Output: "BMW - Black",
      solved: false,
      successRate: "90%",
      submissions: "10.1K"
    },
    {
      id: 189,
      title: "Inheritance in Classes",
      description: "Implement inheritance by extending a base class with a subclass.",
      difficulty: "Intermediate",
      topics: ["Classes", "OOP"],
      Sample_Input: "class Animal -> class Dog extends Animal",
      Sample_Output: "Dog inherits Animal",
      solved: false,
      successRate: "85%",
      submissions: "9.3K"
    },
    {
      id: 190,
      title: "Static Method in Class",
      description: "Define a static method in a JavaScript class and call it without instantiation.",
      difficulty: "Intermediate",
      topics: ["Classes", "OOP"],
      Sample_Input: "Car.displayInfo()",
      Sample_Output: "Static Method Called",
      solved: false,
      successRate: "87%",
      submissions: "9.5K"
    },
    {
      id: 191,
      title: "Private Class Fields",
      description: "Use private class fields (#) in JavaScript to encapsulate data.",
      difficulty: "Intermediate",
      topics: ["Classes", "Encapsulation", "ES6"],
      Sample_Input: "class BankAccount",
      Sample_Output: "Private balance accessed only inside class",
      solved: false,
      successRate: "82%",
      submissions: "8.8K"
    },
    {
      id: 192,
      title: "Module Export/Import Example",
      description: "Write ES6 module export and import statements for two JS files.",
      difficulty: "Intermediate",
      topics: ["Modules", "ES6"],
      Sample_Input: "export const x = 5; import {x} from './file.js';",
      Sample_Output: "5",
      solved: false,
      successRate: "84%",
      submissions: "9.1K"
    },
    {
      id: 193,
      title: "Default Parameter Function",
      description: "Create a function that uses default parameter values when none are provided.",
      difficulty: "Intermediate",
      topics: ["Functions", "ES6"],
      Sample_Input: "sum(5)",
      Sample_Output: "15",
      solved: false,
      successRate: "90%",
      submissions: "10.2K"
    },
    {
      id: 194,
      title: "Array Destructuring Swap",
      description: "Swap two variables using array destructuring.",
      difficulty: "Intermediate",
      topics: ["ES6", "Destructuring"],
      Sample_Input: "a=5, b=10",
      Sample_Output: "a=10, b=5",
      solved: false,
      successRate: "91%",
      submissions: "11.0K"
    },
    {
      id: 195,
      title: "Optional Chaining Example",
      description: "Use optional chaining to safely access nested object properties.",
      difficulty: "Intermediate",
      topics: ["Objects", "ES2020"],
      Sample_Input: "user?.address?.city",
      Sample_Output: "New York",
      solved: false,
      successRate: "88%",
      submissions: "9.9K"
    },
    {
      id: 196,
      title: "Nullish Coalescing Example",
      description: "Use the nullish coalescing operator (??) to handle undefined/null values.",
      difficulty: "Intermediate",
      topics: ["Operators", "ES2020"],
      Sample_Input: "value = undefined ?? 'default'",
      Sample_Output: "'default'",
      solved: false,
      successRate: "89%",
      submissions: "10.1K"
    },
    {
      id: 197,
      title: "Error Handling with Try-Catch",
      description: "Demonstrate error handling in JavaScript using try-catch-finally blocks.",
      difficulty: "Intermediate",
      topics: ["Error Handling"],
      Sample_Input: "try { JSON.parse('invalid') }",
      Sample_Output: "Error: Unexpected token i",
      solved: false,
      successRate: "85%",
      submissions: "9.3K"
    },
    {
      id: 198,
      title: "Throw Custom Error",
      description: "Throw and catch a custom error with a user-defined message.",
      difficulty: "Intermediate",
      topics: ["Error Handling", "Exceptions"],
      Sample_Input: "throw new Error('Invalid Input')",
      Sample_Output: "Caught Error: Invalid Input",
      solved: false,
      successRate: "83%",
      submissions: "8.9K"
    },
    {
      id: 199,
      title: "Chained Promises Example",
      description: "Write code that chains multiple Promises together sequentially.",
      difficulty: "Advance",
      topics: ["Promises", "Async/Await"],
      Sample_Input: "Promise1 -> Promise2 -> Promise3",
      Sample_Output: "Result3",
      solved: false,
      successRate: "80%",
      submissions: "8.4K"
    },
    {
      id: 200,
      title: "Race Between Promises",
      description: "Use Promise.race() to return the result of the fastest resolving Promise.",
      difficulty: "Advance",
      topics: ["Promises", "Async"],
      Sample_Input: "[Promise1, Promise2]",
      Sample_Output: "Fastest Result",
      solved: false,
      successRate: "81%",
      submissions: "8.6K"
    },
    {
      id: 201,
      title: "Closure Counter Function",
      description: "Write a function that returns another function which increments and remembers a counter value.",
      difficulty: "Advance",
      topics: ["Closures", "Functions", "Scope"],
      Sample_Input: "const counter = createCounter(); counter(); counter();",
      Sample_Output: "1, 2",
      solved: false,
      successRate: "78%",
      submissions: "7.8K"
    },
    {
      id: 202,
      title: "Custom Map Function",
      description: "Implement your own version of Array.prototype.map without using the built-in method.",
      difficulty: "Advance",
      topics: ["Arrays", "Prototypes", "Functions"],
      Sample_Input: "[1,2,3], x => x * 2",
      Sample_Output: "[2,4,6]",
      solved: false,
      successRate: "79%",
      submissions: "7.6K"
    },
    {
      id: 203,
      title: "Custom Filter Function",
      description: "Create a custom filter method to return elements that satisfy a condition.",
      difficulty: "Advance",
      topics: ["Arrays", "Higher-Order Functions"],
      Sample_Input: "[1,2,3,4], x => x > 2",
      Sample_Output: "[3,4]",
      solved: false,
      successRate: "80%",
      submissions: "7.4K"
    },
    {
      id: 204,
      title: "Custom Reduce Function",
      description: "Write a polyfill for Array.prototype.reduce that mimics its native behavior.",
      difficulty: "Advance",
      topics: ["Arrays", "Prototypes", "Functional Programming"],
      Sample_Input: "[1,2,3,4], (a,b)=>a+b, 0",
      Sample_Output: "10",
      solved: false,
      successRate: "77%",
      submissions: "7.2K"
    },
    {
      id: 205,
      title: "Memoization Function",
      description: "Implement memoization for a function to cache previous computations.",
      difficulty: "Advance",
      topics: ["Closures", "Optimization"],
      Sample_Input: "fib(10)",
      Sample_Output: "55",
      solved: false,
      successRate: "75%",
      submissions: "7.0K"
    },
    {
      id: 206,
      title: "Debounce Function",
      description: "Implement a debounce utility that delays function execution until after a pause in calls.",
      difficulty: "Advance",
      topics: ["Functions", "Timers", "Optimization"],
      Sample_Input: "debounce(saveData, 300)",
      Sample_Output: "Function called after 300ms delay",
      solved: false,
      successRate: "73%",
      submissions: "6.8K"
    },
    {
      id: 207,
      title: "Throttle Function",
      description: "Implement a throttle function that ensures a callback executes only once per time interval.",
      difficulty: "Advance",
      topics: ["Functions", "Performance"],
      Sample_Input: "throttle(scrollHandler, 1000)",
      Sample_Output: "Handler executes every 1s",
      solved: false,
      successRate: "74%",
      submissions: "6.9K"
    },
    {
      id: 208,
      title: "Deep Clone an Object",
      description: "Write a function to deep clone a nested JavaScript object.",
      difficulty: "Advance",
      topics: ["Objects", "Recursion"],
      Sample_Input: "{a:1,b:{c:2}}",
      Sample_Output: "{a:1,b:{c:2}} (new reference)",
      solved: false,
      successRate: "78%",
      submissions: "7.5K"
    },
    {
      id: 209,
      title: "Flatten Nested Array",
      description: "Flatten a deeply nested array into a single-level array using recursion.",
      difficulty: "Advance",
      topics: ["Recursion", "Arrays"],
      Sample_Input: "[1,[2,[3,4]]]",
      Sample_Output: "[1,2,3,4]",
      solved: false,
      successRate: "80%",
      submissions: "7.7K"
    },
    {
      id: 210,
      title: "Implement Currying",
      description: "Transform a normal function into a curried one that takes one argument at a time.",
      difficulty: "Advance",
      topics: ["Functions", "Closures"],
      Sample_Input: "sum(1)(2)(3)",
      Sample_Output: "6",
      solved: false,
      successRate: "76%",
      submissions: "7.1K"
    },
    {
      id: 211,
      title: "Prototype Inheritance Demo",
      description: "Demonstrate prototype-based inheritance using constructor functions.",
      difficulty: "Advance",
      topics: ["Prototypes", "OOP"],
      Sample_Input: "function Animal(){}; Dog.prototype = Object.create(Animal.prototype);",
      Sample_Output: "Dog inherits Animal",
      solved: false,
      successRate: "79%",
      submissions: "7.3K"
    },
    {
      id: 212,
      title: "Custom Promise Implementation",
      description: "Create a simplified version of JavaScript's Promise with resolve and reject.",
      difficulty: "Advance",
      topics: ["Promises", "Asynchronous JS"],
      Sample_Input: "new MyPromise((res,rej)=>res('Done'))",
      Sample_Output: "Done",
      solved: false,
      successRate: "72%",
      submissions: "6.5K"
    },
    {
      id: 213,
      title: "Event Loop Simulation",
      description: "Demonstrate the JavaScript event loop with setTimeout, Promise, and synchronous logs.",
      difficulty: "Advance",
      topics: ["Event Loop", "Async"],
      Sample_Input: "console.log + setTimeout + Promise",
      Sample_Output: "Log order: sync → promise → timeout",
      solved: false,
      successRate: "70%",
      submissions: "6.2K"
    },
    {
      id: 214,
      title: "Implement Event Emitter",
      description: "Build a simple event emitter with on(), off(), and emit() methods.",
      difficulty: "Advance",
      topics: ["OOP", "Events"],
      Sample_Input: "emitter.on('start', ()=>console.log('Started'))",
      Sample_Output: "Started",
      solved: false,
      successRate: "71%",
      submissions: "6.3K"
    },
    {
      id: 215,
      title: "Custom Call Function",
      description: "Implement Function.prototype.myCall to mimic the native call() method.",
      difficulty: "Advance",
      topics: ["Prototypes", "This Binding"],
      Sample_Input: "greet.myCall(obj, 'Hello')",
      Sample_Output: "Hello John",
      solved: false,
      successRate: "73%",
      submissions: "6.6K"
    },
    {
      id: 216,
      title: "Custom Apply Function",
      description: "Create a polyfill for Function.prototype.apply in JavaScript.",
      difficulty: "Advance",
      topics: ["Prototypes", "Functions"],
      Sample_Input: "greet.myApply(obj, ['Hi'])",
      Sample_Output: "Hi John",
      solved: false,
      successRate: "72%",
      submissions: "6.4K"
    },
    {
      id: 217,
      title: "Custom Bind Function",
      description: "Write your own implementation of Function.prototype.bind.",
      difficulty: "Advance",
      topics: ["Functions", "This Binding"],
      Sample_Input: "const bound = greet.myBind(obj); bound('Hello')",
      Sample_Output: "Hello John",
      solved: false,
      successRate: "74%",
      submissions: "6.8K"
    },
    {
      id: 218,
      title: "Lazy Loading Images",
      description: "Implement lazy loading for images using the Intersection Observer API.",
      difficulty: "Advance",
      topics: ["DOM", "Performance", "Web APIs"],
      Sample_Input: "Images with data-src attributes",
      Sample_Output: "Images load as they appear in viewport",
      solved: false,
      successRate: "69%",
      submissions: "6.1K"
    },
    {
      id: 219,
      title: "Virtual DOM Simulation",
      description: "Create a minimal Virtual DOM diffing and patching algorithm.",
      difficulty: "Advance",
      topics: ["DOM", "Diffing Algorithms"],
      Sample_Input: "Virtual nodes old/new trees",
      Sample_Output: "Patched DOM elements",
      solved: false,
      successRate: "67%",
      submissions: "5.9K"
    },
    {
      id: 220,
      title: "Deep Compare Two Objects",
      description: "Compare two objects deeply for equality including nested properties.",
      difficulty: "Advance",
      topics: ["Objects", "Recursion"],
      Sample_Input: "{a:1,b:{c:2}}, {a:1,b:{c:2}}",
      Sample_Output: "true",
      solved: false,
      successRate: "78%",
      submissions: "7.4K"
    },
    {
      id: 221,
      title: "Web Storage Manager",
      description: "Create a wrapper class to manage localStorage and sessionStorage safely.",
      difficulty: "Advance",
      topics: ["Web Storage", "Browser API"],
      Sample_Input: "storage.set('user','John')",
      Sample_Output: "Stored Successfully",
      solved: false,
      successRate: "75%",
      submissions: "6.7K"
    },
    {
      id: 222,
      title: "Intersection Observer Scroll Tracker",
      description: "Use Intersection Observer to track section visibility while scrolling.",
      difficulty: "Advance",
      topics: ["DOM", "Events", "Web APIs"],
      Sample_Input: "Sections of a webpage",
      Sample_Output: "Active section updated in nav",
      solved: false,
      successRate: "71%",
      submissions: "6.3K"
    },
    {
      id: 223,
      title: "Service Worker Caching",
      description: "Write a service worker to cache website assets for offline usage.",
      difficulty: "Advance",
      topics: ["Service Workers", "PWA"],
      Sample_Input: "Install and fetch events",
      Sample_Output: "Assets cached and served offline",
      solved: false,
      successRate: "65%",
      submissions: "5.8K"
    },
    {
      id: 224,
      title: "WebSocket Chat Client",
      description: "Implement a basic WebSocket chat client to send and receive messages.",
      difficulty: "Advance",
      topics: ["WebSockets", "Async"],
      Sample_Input: "Send: 'Hi', Receive: 'Hello!'",
      Sample_Output: "Connected chat stream",
      solved: false,
      successRate: "68%",
      submissions: "6.0K"
    },
    {
      id: 225,
      title: "Worker Threads Example",
      description: "Use Web Workers to offload heavy computations without blocking the main thread.",
      difficulty: "Advance",
      topics: ["Web Workers", "Concurrency"],
      Sample_Input: "Sum of large array",
      Sample_Output: "Computed asynchronously",
      solved: false,
      successRate: "64%",
      submissions: "5.7K"
    },

    {
      id: 226,
      title: "Infinite Scroll Implementation",
      description: "Build an infinite scroll feature that loads more data when the user reaches the page bottom.",
      difficulty: "Advance",
      topics: ["DOM", "Events", "Async"],
      Sample_Input: "User scrolls to bottom",
      Sample_Output: "Next batch of data loaded",
      solved: false,
      successRate: "68%",
      submissions: "6.3K"
    },
    {
      id: 227,
      title: "Modal Popup Component",
      description: "Create a reusable modal popup with open, close, and overlay functionality.",
      difficulty: "Advance",
      topics: ["DOM", "Components"],
      Sample_Input: "Click 'Open Modal'",
      Sample_Output: "Modal displayed on screen",
      solved: false,
      successRate: "80%",
      submissions: "7.5K"
    },
    {
      id: 228,
      title: "Accordion Component",
      description: "Develop a dynamic accordion list where only one section stays open at a time.",
      difficulty: "Advance",
      topics: ["DOM", "Components", "Events"],
      Sample_Input: "Click section title",
      Sample_Output: "That section expands",
      solved: false,
      successRate: "81%",
      submissions: "7.6K"
    },
    {
      id: 229,
      title: "Tabs Navigation",
      description: "Build tabbed navigation where clicking a tab shows the respective content section.",
      difficulty: "Advance",
      topics: ["DOM", "UI Components"],
      Sample_Input: "Click 'Profile' tab",
      Sample_Output: "'Profile' content visible",
      solved: false,
      successRate: "82%",
      submissions: "7.8K"
    },
    {
      id: 230,
      title: "Drag and Drop Items",
      description: "Implement a draggable list where items can be reordered by dragging.",
      difficulty: "Advance",
      topics: ["DOM", "Events", "DragDrop API"],
      Sample_Input: "Drag item 1 to position 3",
      Sample_Output: "Item reordered",
      solved: false,
      successRate: "74%",
      submissions: "6.9K"
    },
    {
      id: 231,
      title: "Image Carousel",
      description: "Create a carousel component that slides through images with next and previous controls.",
      difficulty: "Advance",
      topics: ["DOM", "Animations"],
      Sample_Input: "Click Next",
      Sample_Output: "Next image shown",
      solved: false,
      successRate: "79%",
      submissions: "7.3K"
    },
    {
      id: 232,
      title: "Dark Mode Toggle",
      description: "Implement dark and light theme toggling with persistent preference using localStorage.",
      difficulty: "Advance",
      topics: ["DOM", "Storage", "Themes"],
      Sample_Input: "Toggle switch clicked",
      Sample_Output: "Theme switched to dark mode",
      solved: false,
      successRate: "85%",
      submissions: "8.1K"
    },
    {
      id: 233,
      title: "Form Validation Library",
      description: "Develop a reusable form validation utility that supports custom rules and messages.",
      difficulty: "Advance",
      topics: ["DOM", "Validation", "OOP"],
      Sample_Input: "Email input invalid",
      Sample_Output: "Show 'Invalid email' error",
      solved: false,
      successRate: "77%",
      submissions: "7.0K"
    },
    {
      id: 234,
      title: "Module Pattern Example",
      description: "Demonstrate the Module Pattern to encapsulate private and public methods in JS.",
      difficulty: "Advance",
      topics: ["Design Patterns", "Scope"],
      Sample_Input: "CounterModule.increment()",
      Sample_Output: "1",
      solved: false,
      successRate: "80%",
      submissions: "7.5K"
    },
    {
      id: 235,
      title: "Singleton Pattern",
      description: "Implement the Singleton pattern ensuring only one instance of a class exists.",
      difficulty: "Advance",
      topics: ["Design Patterns", "OOP"],
      Sample_Input: "new Config(); new Config();",
      Sample_Output: "Same instance",
      solved: false,
      successRate: "78%",
      submissions: "7.2K"
    },
    {
      id: 236,
      title: "Observer Pattern",
      description: "Implement the Observer pattern to allow objects to subscribe and get notified of changes.",
      difficulty: "Advance",
      topics: ["Design Patterns", "Events"],
      Sample_Input: "Subject.subscribe(observer)",
      Sample_Output: "Observer notified",
      solved: false,
      successRate: "75%",
      submissions: "6.8K"
    },
    {
      id: 237,
      title: "Factory Pattern Example",
      description: "Create a Factory function to produce different types of objects dynamically.",
      difficulty: "Advance",
      topics: ["Design Patterns", "OOP"],
      Sample_Input: "ShapeFactory('circle')",
      Sample_Output: "Circle object created",
      solved: false,
      successRate: "79%",
      submissions: "7.4K"
    },
    {
      id: 238,
      title: "Proxy Pattern Example",
      description: "Implement Proxy pattern to add validation before accessing an object's property.",
      difficulty: "Advance",
      topics: ["Proxies", "Design Patterns"],
      Sample_Input: "user.name = ''",
      Sample_Output: "Error: Name cannot be empty",
      solved: false,
      successRate: "73%",
      submissions: "6.6K"
    },
    {
      id: 239,
      title: "Decorator Pattern Example",
      description: "Demonstrate the Decorator pattern to dynamically add functionality to objects.",
      difficulty: "Advance",
      topics: ["Design Patterns", "OOP"],
      Sample_Input: "addTimestamp(Logger)",
      Sample_Output: "Logs now include timestamps",
      solved: false,
      successRate: "74%",
      submissions: "6.7K"
    },
    {
      id: 240,
      title: "Publish-Subscribe Pattern",
      description: "Build a Pub/Sub system where subscribers listen to specific events.",
      difficulty: "Advance",
      topics: ["Design Patterns", "Events"],
      Sample_Input: "publish('news', 'New post!')",
      Sample_Output: "All subscribers receive 'New post!'",
      solved: false,
      successRate: "76%",
      submissions: "6.9K"
    },
    {
      id: 241,
      title: "Async Pipeline",
      description: "Create an async pipeline function that chains promises and executes sequentially.",
      difficulty: "Advance",
      topics: ["Async", "Promises", "Functional Programming"],
      Sample_Input: "[fn1, fn2, fn3]",
      Sample_Output: "Final resolved result",
      solved: false,
      successRate: "72%",
      submissions: "6.3K"
    },
    {
      id: 242,
      title: "Promise.all Polyfill",
      description: "Implement a polyfill for Promise.all that resolves when all promises resolve.",
      difficulty: "Advance",
      topics: ["Promises", "Async"],
      Sample_Input: "[p1, p2, p3]",
      Sample_Output: "All resolved values",
      solved: false,
      successRate: "70%",
      submissions: "6.1K"
    },
    {
      id: 243,
      title: "Promise.race Polyfill",
      description: "Implement Promise.race polyfill which resolves/rejects with the first settled promise.",
      difficulty: "Advance",
      topics: ["Promises", "Async"],
      Sample_Input: "[p1, p2]",
      Sample_Output: "First resolved value",
      solved: false,
      successRate: "69%",
      submissions: "6.0K"
    },
    {
      id: 244,
      title: "Dynamic Import Example",
      description: "Demonstrate dynamic ES module import for performance optimization.",
      difficulty: "Advance",
      topics: ["Modules", "Performance"],
      Sample_Input: "import('./math.js').then(...)",
      Sample_Output: "Module loaded dynamically",
      solved: false,
      successRate: "75%",
      submissions: "6.8K"
    },
    {
      id: 245,
      title: "Tree Traversal in JS",
      description: "Traverse a nested object structure recursively and print all keys and values.",
      difficulty: "Advance",
      topics: ["Recursion", "Objects", "Data Structures"],
      Sample_Input: "{a:{b:{c:1}}}",
      Sample_Output: "a, b, c:1",
      solved: false,
      successRate: "78%",
      submissions: "7.1K"
    },
    {
      id: 246,
      title: "LRU Cache Implementation",
      description: "Implement an LRU Cache using Map in JavaScript.",
      difficulty: "Advance",
      topics: ["Data Structures", "Maps"],
      Sample_Input: "cache.put(1,1); cache.get(1)",
      Sample_Output: "1",
      solved: false,
      successRate: "68%",
      submissions: "6.2K"
    },
    {
      id: 247,
      title: "Binary Search Tree (BST) in JS",
      description: "Create a BST class with insert, find, and remove methods.",
      difficulty: "Advance",
      topics: ["Data Structures", "Classes"],
      Sample_Input: "insert(5); insert(3); insert(7)",
      Sample_Output: "BST created successfully",
      solved: false,
      successRate: "71%",
      submissions: "6.5K"
    },
    {
      id: 248,
      title: "Async Retry Mechanism",
      description: "Implement a retry function that retries an async operation N times before failing.",
      difficulty: "Advance",
      topics: ["Async", "Error Handling"],
      Sample_Input: "retry(fetchData, 3)",
      Sample_Output: "Succeeded after retries",
      solved: false,
      successRate: "69%",
      submissions: "6.0K"
    },
    {
      id: 249,
      title: "Virtualized List",
      description: "Render only visible items from a long list for performance optimization.",
      difficulty: "Advance",
      topics: ["DOM", "Performance"],
      Sample_Input: "10000 list items",
      Sample_Output: "Only 20 visible at a time",
      solved: false,
      successRate: "66%",
      submissions: "5.7K"
    },
    {
      id: 250,
      title: "React-like useState Hook",
      description: "Implement a simplified version of React's useState Hook in vanilla JS.",
      difficulty: "Advance",
      topics: ["Functional Programming", "React Concepts"],
      Sample_Input: "const [count, setCount] = useState(0)",
      Sample_Output: "State preserved between renders",
      solved: false,
      successRate: "64%",
      submissions: "5.5K"
    },

    {
      id: 251,
      title: "Debounce Function",
      description: "Implement a debounce function that delays invoking a callback until after a specified delay.",
      difficulty: "Advance",
      topics: ["Functions", "Performance", "Events"],
      Sample_Input: "debounce(log, 300)",
      Sample_Output: "Executes after 300ms of inactivity",
      solved: false,
      successRate: "73%",
      submissions: "6.9K"
    },
    {
      id: 252,
      title: "Throttle Function",
      description: "Implement a throttle function that ensures a callback is executed at most once in a given period.",
      difficulty: "Advance",
      topics: ["Functions", "Performance", "Events"],
      Sample_Input: "throttle(log, 1000)",
      Sample_Output: "Executes once per second",
      solved: false,
      successRate: "72%",
      submissions: "6.6K"
    },
    {
      id: 253,
      title: "Implement Currying",
      description: "Write a function that converts a normal function into a curried version.",
      difficulty: "Advance",
      topics: ["Functional Programming", "Closures"],
      Sample_Input: "sum(1)(2)(3)",
      Sample_Output: "6",
      solved: false,
      successRate: "75%",
      submissions: "6.8K"
    },
    {
      id: 254,
      title: "Memoization Function",
      description: "Implement memoization to cache function results and improve performance.",
      difficulty: "Advance",
      topics: ["Closures", "Optimization"],
      Sample_Input: "fib(10)",
      Sample_Output: "55 (cached next call)",
      solved: false,
      successRate: "77%",
      submissions: "7.0K"
    },
    {
      id: 255,
      title: "Implement Pipe Function",
      description: "Write a function that composes multiple functions into a pipeline (left-to-right).",
      difficulty: "Advance",
      topics: ["Functional Programming", "Composition"],
      Sample_Input: "pipe(fn1, fn2, fn3)(value)",
      Sample_Output: "Processed output",
      solved: false,
      successRate: "78%",
      submissions: "7.3K"
    },
    {
      id: 256,
      title: "Implement Compose Function",
      description: "Write a function that composes multiple functions right-to-left.",
      difficulty: "Advance",
      topics: ["Functional Programming", "Composition"],
      Sample_Input: "compose(fn3, fn2, fn1)(value)",
      Sample_Output: "Processed output",
      solved: false,
      successRate: "77%",
      submissions: "7.1K"
    },
    {
      id: 257,
      title: "LRU Cache Class",
      description: "Design an LRU cache class with get and put methods using Map.",
      difficulty: "Advance",
      topics: ["Data Structures", "Classes"],
      Sample_Input: "cache.put(1,1); cache.get(1);",
      Sample_Output: "1",
      solved: false,
      successRate: "70%",
      submissions: "6.4K"
    },
    {
      id: 258,
      title: "Event Emitter Class",
      description: "Implement an EventEmitter with on, off, and emit methods.",
      difficulty: "Advance",
      topics: ["OOP", "Events"],
      Sample_Input: "emitter.on('data', fn); emitter.emit('data');",
      Sample_Output: "fn executed",
      solved: false,
      successRate: "74%",
      submissions: "6.8K"
    },
    {
      id: 259,
      title: "Promise Pool Executor",
      description: "Execute multiple async tasks with a maximum concurrency limit.",
      difficulty: "Advance",
      topics: ["Promises", "Concurrency"],
      Sample_Input: "promisePool(tasks, 3)",
      Sample_Output: "All tasks resolved with 3 concurrent",
      solved: false,
      successRate: "68%",
      submissions: "6.1K"
    },
    {
      id: 260,
      title: "Retry Async Function",
      description: "Retry a failing async function up to N times before rejecting.",
      difficulty: "Advance",
      topics: ["Async", "Error Handling"],
      Sample_Input: "retry(fetchData, 3)",
      Sample_Output: "Success after 3 attempts",
      solved: false,
      successRate: "69%",
      submissions: "6.3K"
    },
    {
      id: 261,
      title: "Rate Limiter",
      description: "Create a rate limiter that allows a certain number of requests per second.",
      difficulty: "Advance",
      topics: ["Async", "Time Control"],
      Sample_Input: "limitRequest(5 per sec)",
      Sample_Output: "Requests beyond limit are delayed",
      solved: false,
      successRate: "67%",
      submissions: "5.9K"
    },
    {
      id: 262,
      title: "Web Worker Example",
      description: "Use a Web Worker to perform CPU-heavy computation without blocking the UI.",
      difficulty: "Advance",
      topics: ["Web APIs", "Performance"],
      Sample_Input: "Start worker with heavyTask()",
      Sample_Output: "Result returned asynchronously",
      solved: false,
      successRate: "70%",
      submissions: "6.2K"
    },
    {
      id: 263,
      title: "IndexedDB CRUD Operations",
      description: "Perform CRUD operations using IndexedDB for persistent browser storage.",
      difficulty: "Advance",
      topics: ["Web APIs", "Storage"],
      Sample_Input: "Add record {id:1,name:'John'}",
      Sample_Output: "Record saved in IndexedDB",
      solved: false,
      successRate: "71%",
      submissions: "6.5K"
    },
    {
      id: 264,
      title: "Virtual DOM Diffing",
      description: "Simulate React-like virtual DOM diffing and patching algorithm.",
      difficulty: "Advance",
      topics: ["DOM", "Algorithms"],
      Sample_Input: "diff(oldVNode, newVNode)",
      Sample_Output: "Updated DOM tree",
      solved: false,
      successRate: "65%",
      submissions: "5.8K"
    },
    {
      id: 265,
      title: "Implement Mini Redux Store",
      description: "Build a minimal Redux-like store with getState, dispatch, and subscribe.",
      difficulty: "Advance",
      topics: ["State Management", "OOP"],
      Sample_Input: "store.dispatch({type:'INC'})",
      Sample_Output: "State updated",
      solved: false,
      successRate: "72%",
      submissions: "6.7K"
    },
    {
      id: 266,
      title: "Graph Traversal (DFS & BFS)",
      description: "Implement depth-first and breadth-first traversal algorithms in JS.",
      difficulty: "Advance",
      topics: ["Data Structures", "Algorithms"],
      Sample_Input: "{A:[B,C],B:[D],C:[E]}",
      Sample_Output: "A,B,D,C,E",
      solved: false,
      successRate: "74%",
      submissions: "6.9K"
    },
    {
      id: 267,
      title: "Dijkstra’s Shortest Path",
      description: "Implement Dijkstra’s algorithm for shortest path in a weighted graph.",
      difficulty: "Advance",
      topics: ["Graphs", "Algorithms"],
      Sample_Input: "Graph with weights",
      Sample_Output: "Shortest distance between nodes",
      solved: false,
      successRate: "65%",
      submissions: "5.7K"
    },
    {
      id: 268,
      title: "WebSocket Chat Server",
      description: "Build a simple chat server using WebSocket API.",
      difficulty: "Advance",
      topics: ["Networking", "Web APIs"],
      Sample_Input: "Send message from client",
      Sample_Output: "Broadcast to all clients",
      solved: false,
      successRate: "70%",
      submissions: "6.4K"
    },
    {
      id: 269,
      title: "REST API Fetcher with Pagination",
      description: "Implement a function to fetch paginated data from an API endpoint.",
      difficulty: "Advance",
      topics: ["API", "Async/Await"],
      Sample_Input: "fetchData('/users?page=2')",
      Sample_Output: "Fetched page 2 data",
      solved: false,
      successRate: "76%",
      submissions: "7.1K"
    },
    {
      id: 270,
      title: "Cache API Requests",
      description: "Cache API responses locally and serve cached data for repeated requests.",
      difficulty: "Advance",
      topics: ["Storage", "APIs"],
      Sample_Input: "fetchCached('/posts')",
      Sample_Output: "Response from cache if available",
      solved: false,
      successRate: "73%",
      submissions: "6.8K"
    },
    {
      id: 271,
      title: "Binary Search Implementation",
      description: "Implement binary search algorithm on a sorted array.",
      difficulty: "Advance",
      topics: ["Algorithms", "Arrays"],
      Sample_Input: "[1,3,5,7,9], target=5",
      Sample_Output: "Index 2",
      solved: false,
      successRate: "83%",
      submissions: "8.0K"
    },
    {
      id: 272,
      title: "Quick Sort Algorithm",
      description: "Implement the QuickSort algorithm for sorting an array.",
      difficulty: "Advance",
      topics: ["Algorithms", "Sorting"],
      Sample_Input: "[4,2,6,3,1]",
      Sample_Output: "[1,2,3,4,6]",
      solved: false,
      successRate: "78%",
      submissions: "7.3K"
    },
    {
      id: 273,
      title: "Merge Sort Algorithm",
      description: "Implement Merge Sort for sorting an array in ascending order.",
      difficulty: "Advance",
      topics: ["Algorithms", "Sorting"],
      Sample_Input: "[8,4,2,9,1]",
      Sample_Output: "[1,2,4,8,9]",
      solved: false,
      successRate: "77%",
      submissions: "7.0K"
    },
    {
      id: 274,
      title: "Web Performance Analyzer",
      description: "Use the Performance API to measure and log page load metrics.",
      difficulty: "Advance",
      topics: ["Web APIs", "Performance"],
      Sample_Input: "Analyze window.performance",
      Sample_Output: "Metrics logged",
      solved: false,
      successRate: "70%",
      submissions: "6.5K"
    },
    {
      id: 275,
      title: "Implement Task Scheduler",
      description: "Create a task scheduler that runs async jobs at specific intervals.",
      difficulty: "Advance",
      topics: ["Async", "Timers"],
      Sample_Input: "schedule(task, 2000)",
      Sample_Output: "Task executed every 2 seconds",
      solved: false,
      successRate: "68%",
      submissions: "6.2K"
    },
    {
      id: 276,
      title: "Custom Promise Implementation",
      description: "Implement a custom Promise class supporting then(), catch(), and finally().",
      difficulty: "Advanced",
      topics: ["Promises", "Asynchronous"],
      Sample_Input: "new MyPromise((res) => res('done')).then(console.log)",
      Sample_Output: "done",
      solved: false,
      successRate: "64%",
      submissions: "5.9K"
    },
    {
      id: 277,
      title: "Build a Mini Router (SPA)",
      description: "Implement a simple client-side router using History API.",
      difficulty: "Advanced",
      topics: ["SPA", "Routing", "Web APIs"],
      Sample_Input: "router.navigate('/about')",
      Sample_Output: "Loads About page content",
      solved: false,
      successRate: "70%",
      submissions: "6.3K"
    },
    {
      id: 278,
      title: "JSON Deep Comparison",
      description: "Compare two deeply nested JSON objects for equality.",
      difficulty: "Advanced",
      topics: ["Objects", "Recursion"],
      Sample_Input: "{a:{b:1}} vs {a:{b:1}}",
      Sample_Output: "true",
      solved: false,
      successRate: "79%",
      submissions: "7.1K"
    },
    {
      id: 279,
      title: "Deep Clone Utility",
      description: "Write a deep clone function that correctly copies nested objects, arrays, and functions.",
      difficulty: "Advanced",
      topics: ["Objects", "Recursion"],
      Sample_Input: "clone({a:{b:1}})",
      Sample_Output: "{a:{b:1}} (different reference)",
      solved: false,
      successRate: "77%",
      submissions: "7.0K"
    },
    {
      id: 280,
      title: "Custom Fetch Wrapper",
      description: "Implement a fetch wrapper with automatic retries, timeout, and logging.",
      difficulty: "Advanced",
      topics: ["Networking", "Async"],
      Sample_Input: "fetchWithRetry('/api/data', 3)",
      Sample_Output: "Response after 3 attempts",
      solved: false,
      successRate: "71%",
      submissions: "6.5K"
    },
    {
      id: 281,
      title: "Custom Observable (RxJS-like)",
      description: "Create a basic Observable class supporting subscribe, next, error, and complete.",
      difficulty: "Advanced",
      topics: ["Reactive Programming"],
      Sample_Input: "observable.subscribe(fn)",
      Sample_Output: "Emits data stream",
      solved: false,
      successRate: "66%",
      submissions: "6.0K"
    },
    {
      id: 282,
      title: "Priority Queue Implementation",
      description: "Build a priority queue using a binary heap in JavaScript.",
      difficulty: "Advanced",
      topics: ["Data Structures"],
      Sample_Input: "enqueue(5,priority=1)",
      Sample_Output: "Dequeued by highest priority",
      solved: false,
      successRate: "74%",
      submissions: "6.9K"
    },
    {
      id: 283,
      title: "Implement a Mini Scheduler",
      description: "Design a scheduler that handles async jobs with given priorities.",
      difficulty: "Advanced",
      topics: ["Async", "Scheduling"],
      Sample_Input: "scheduleJob(job, priority)",
      Sample_Output: "Executes by priority",
      solved: false,
      successRate: "68%",
      submissions: "6.3K"
    },
    {
      id: 284,
      title: "Async Queue Implementation",
      description: "Implement a queue that processes async tasks one by one.",
      difficulty: "Advanced",
      topics: ["Async", "Data Structures"],
      Sample_Input: "queue.add(asyncTask)",
      Sample_Output: "Tasks executed sequentially",
      solved: false,
      successRate: "69%",
      submissions: "6.4K"
    },
    {
      id: 285,
      title: "Infinite Scroll Implementation",
      description: "Create infinite scroll using IntersectionObserver API.",
      difficulty: "Advanced",
      topics: ["DOM", "Web APIs"],
      Sample_Input: "Scroll to bottom",
      Sample_Output: "Next batch of items loaded",
      solved: false,
      successRate: "75%",
      submissions: "7.0K"
    },
    {
      id: 286,
      title: "Dynamic Form Validator",
      description: "Build a dynamic form validation utility with real-time error updates.",
      difficulty: "Advanced",
      topics: ["DOM", "Events"],
      Sample_Input: "validateForm(formElement)",
      Sample_Output: "Highlights invalid inputs",
      solved: false,
      successRate: "80%",
      submissions: "7.4K"
    },
    {
      id: 287,
      title: "Mini Framework (Like jQuery)",
      description: "Implement a small DOM utility library supporting $(selector).hide().show().text().",
      difficulty: "Advanced",
      topics: ["DOM", "OOP"],
      Sample_Input: "$('p').hide()",
      Sample_Output: "Paragraph hidden",
      solved: false,
      successRate: "70%",
      submissions: "6.6K"
    },
    {
      id: 288,
      title: "Custom Template Engine",
      description: "Create a template engine that replaces {{variables}} with actual values.",
      difficulty: "Advanced",
      topics: ["Strings", "Regex"],
      Sample_Input: "render('Hello {{name}}',{name:'John'})",
      Sample_Output: "Hello John",
      solved: false,
      successRate: "77%",
      submissions: "7.1K"
    },
    {
      id: 289,
      title: "CSV to JSON Converter",
      description: "Write a parser that converts CSV data into a JSON array.",
      difficulty: "Advanced",
      topics: ["Parsing", "Strings"],
      Sample_Input: "'id,name\\n1,John\\n2,Jane'",
      Sample_Output: "[{id:1,name:'John'},{id:2,name:'Jane'}]",
      solved: false,
      successRate: "82%",
      submissions: "7.9K"
    },
    {
      id: 290,
      title: "Build a Mini LocalStorage Wrapper",
      description: "Create a wrapper around localStorage with get, set, remove, and clear methods.",
      difficulty: "Advanced",
      topics: ["Web APIs", "Storage"],
      Sample_Input: "storage.set('key','value')",
      Sample_Output: "Stores in browser",
      solved: false,
      successRate: "79%",
      submissions: "7.3K"
    },
    {
      id: 291,
      title: "JWT Token Generator",
      description: "Simulate generation and verification of a JWT using base64 encoding.",
      difficulty: "Advanced",
      topics: ["Security", "Encoding"],
      Sample_Input: "generateJWT(payload,secret)",
      Sample_Output: "Header.Payload.Signature",
      solved: false,
      successRate: "72%",
      submissions: "6.8K"
    },
    {
      id: 292,
      title: "File Upload Progress Tracker",
      description: "Implement an upload function showing real-time progress using XMLHttpRequest.",
      difficulty: "Advanced",
      topics: ["Networking", "Events"],
      Sample_Input: "uploadFile(file)",
      Sample_Output: "Progress: 0% -> 100%",
      solved: false,
      successRate: "78%",
      submissions: "7.2K"
    },
    {
      id: 293,
      title: "Mini CLI Tool with Node.js",
      description: "Create a Node CLI that accepts arguments and prints formatted output.",
      difficulty: "Advanced",
      topics: ["Node.js", "CLI"],
      Sample_Input: "node greet.js --name John",
      Sample_Output: "Hello John!",
      solved: false,
      successRate: "75%",
      submissions: "7.0K"
    },
    {
      id: 294,
      title: "Build a Mini File System",
      description: "Implement a virtual file system supporting mkdir, write, read, and ls.",
      difficulty: "Advanced",
      topics: ["Data Structures", "Node.js"],
      Sample_Input: "fs.mkdir('/docs'); fs.write('/docs/file.txt','hi')",
      Sample_Output: "hi",
      solved: false,
      successRate: "69%",
      submissions: "6.2K"
    },
    {
      id: 295,
      title: "Stream Data Parser",
      description: "Parse data from a ReadableStream chunk by chunk in Node.js.",
      difficulty: "Advanced",
      topics: ["Streams", "Node.js"],
      Sample_Input: "stream.on('data', handler)",
      Sample_Output: "Processed chunks",
      solved: false,
      successRate: "67%",
      submissions: "6.0K"
    },
    {
      id: 296,
      title: "Build a Mini Express Server",
      description: "Implement a small HTTP server with route handling similar to Express.",
      difficulty: "Advanced",
      topics: ["Node.js", "HTTP"],
      Sample_Input: "app.get('/hello', handler)",
      Sample_Output: "Hello World",
      solved: false,
      successRate: "73%",
      submissions: "6.7K"
    },
    {
      id: 297,
      title: "Node.js Middleware Pipeline",
      description: "Create a middleware system where each middleware passes control to the next.",
      difficulty: "Advanced",
      topics: ["Node.js", "OOP"],
      Sample_Input: "app.use(logger).use(auth).listen()",
      Sample_Output: "Request processed with all middlewares",
      solved: false,
      successRate: "70%",
      submissions: "6.5K"
    },
    {
      id: 298,
      title: "Task Runner (like Gulp)",
      description: "Design a basic task runner that executes JS functions defined in a config file.",
      difficulty: "Advanced",
      topics: ["Automation", "Node.js"],
      Sample_Input: "runTask('build')",
      Sample_Output: "Running build task...",
      solved: false,
      successRate: "68%",
      submissions: "6.1K"
    },
    {
      id: 299,
      title: "Dynamic Module Import",
      description: "Use dynamic import() to load modules conditionally at runtime.",
      difficulty: "Advanced",
      topics: ["Modules", "ES6+"],
      Sample_Input: "if(condition) import('./module.js')",
      Sample_Output: "Module loaded dynamically",
      solved: false,
      successRate: "74%",
      submissions: "6.8K"
    },
    {
      id: 300,
      title: "Mini Build Tool (Bundler)",
      description: "Simulate a JavaScript bundler that concatenates and minifies files.",
      difficulty: "Advanced",
      topics: ["Tooling", "Automation"],
      Sample_Input: "bundle(['a.js','b.js'])",
      Sample_Output: "minified single file",
      solved: false,
      successRate: "66%",
      submissions: "6.0K"
    },
    {
      id: 301,
      title: "Performance Profiler",
      description: "Measure function execution time using performance.now() and logs.",
      difficulty: "Advanced",
      topics: ["Performance", "Metrics"],
      Sample_Input: "profile(fn)",
      Sample_Output: "Execution time: 2.3ms",
      solved: false,
      successRate: "79%",
      submissions: "7.4K"
    }














  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "#43e97b";
      case "Intermediate": return "#fcd34d";
      case "Advance": return "#f5576c";
      default: return "#667eea";
    }
  };

  const filteredQuestions = allQuestions.filter(q => {
    const matchesSearch = q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = filterDifficulty === "All" || q.difficulty === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const stats = {
    total: allQuestions.length,
    solved: allQuestions.filter(q => q.solved).length,
    easy: allQuestions.filter(q => q.difficulty === "Easy").length,
    intermediate: allQuestions.filter(q => q.difficulty === "Intermediate").length,
    advance: allQuestions.filter(q => q.difficulty === "Advance").length
  };

  return (
    <div className="practice-questions-container">
      {/* Profile Circle */}
      <Link to="/pages/profile" className="profile-circle">
        <div className="profile-avatar">
          <span className="profile-text">👤</span>
        </div>
        <div className="profile-status"></div>
      </Link>
      {/* Background */}
      <div className="practice-background">
        <div className="practice-grid"></div>
        <div className="practice-orb orb-1"></div>
        <div className="practice-orb orb-2"></div>
      </div>

      {/* Header */}
      <div className="practice-header">
        <div className="header-badge">
          <span className="badge-icon">💪</span>
          <span className="badge-text">Practice Makes Perfect</span>
        </div>
        <h1 className="practice-title">
          Coding <span>Practice</span>
        </h1>
        <p className="practice-subtitle">
          Master programming with 100+ carefully curated problems
        </p>

        {/* Stats */}
        <div className="practice-stats-row">
          <div className="stat-card">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Total Problems</span>
          </div>
          <div className="stat-card">
            <span className="stat-number solved">{stats.solved}</span>
            <span className="stat-label">Solved</span>
          </div>
          <div className="stat-card">
            <span className="stat-number easy">{stats.easy}</span>
            <span className="stat-label">Easy</span>
          </div>
          <div className="stat-card">
            <span className="stat-number medium">{stats.intermediate}</span>
            <span className="stat-label">Medium</span>
          </div>
          <div className="stat-card">
            <span className="stat-number hard">{stats.advance}</span>
            <span className="stat-label">Hard</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button
              className="clear-search"
              onClick={() => setSearchTerm("")}
            >
              ✕
            </button>
          )}
        </div>

        <div className="difficulty-filters">
          {["All", "Easy", "Intermediate", "Advance"].map((level) => (
            <button
              key={level}
              className={`filter-chip ${filterDifficulty === level ? "active" : ""}`}
              onClick={() => setFilterDifficulty(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="results-info">
        Showing {filteredQuestions.length} of {allQuestions.length} problems
      </div>

      {/* Questions Grid */}
      <div className="questions-grid">
        {filteredQuestions.map((question) => (
          <div
            key={question.id}
            className={`question-card ${hoveredCard === question.id ? "hovered" : ""} ${question.solved ? "solved" : ""}`}
            onMouseEnter={() => setHoveredCard(question.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >


            <h3 className="question-card-title">{question.title}</h3>
            <p className="question-card-description">{question.description}</p>

            <div className="question-tags">
              {question.topics.map((topic, idx) => (
                <span key={idx} className="question-tag">
                  {topic}
                </span>
              ))}
            </div>

            <div className="card-footer">
              <div className="question-meta">
                <span
                  className="difficulty-pill"
                  style={{
                    background: getDifficultyColor(question.difficulty),
                    boxShadow: `0 4px 12px ${getDifficultyColor(question.difficulty)}40`
                  }}
                >
                  {question.difficulty}
                </span>
                <span className="meta-info">
                  <span className="meta-icon">✓</span>
                  {question.successRate}
                </span>
                <span className="meta-info">
                  <span className="meta-icon">👥</span>
                  {question.submissions}
                </span>
              </div>

              <button
                className="try-now-btn"
                onClick={() =>
                  navigate(`/python/practice/${question.id}/solve`, {
                    state: {
                      question,
                      language: question.language ? question.language : "JavaScript",
                    },
                  })
                }
              >
                <span>Try Now</span>
                <span className="arrow-icon">→</span>
              </button>
            </div>

            <div
              className="card-overlay"
              style={{ background: getDifficultyColor(question.difficulty) }}
            ></div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredQuestions.length === 0 && (
        <div className="no-results-state">
          <div className="no-results-icon">🔍</div>
          <h3>No problems found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

export default Practice_js;
