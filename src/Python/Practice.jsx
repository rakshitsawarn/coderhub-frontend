import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/python_css/Practice.css";
import { Link } from "react-router-dom";


function PracticeQuestions() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Sample 100+ questions
  const allQuestions = [
    {
      id: 1,
      title: "Print Hello World",
      description: "Write a program that prints 'Hello World' to the console.",
      difficulty: "Easy",
      topics: ["Basic Syntax", "Output"],
      Sample_Input: "Hello World",
      Sample_Output: "Hello World",
      solved: false,
      successRate: "98%",
      submissions: "15.2K"
    },
    {
      id: 2,
      title: "Add Two Numbers",
      description: "Write a program that takes two integers as input and prints their sum.",
      difficulty: "Easy",
      topics: ["Variables", "Input", "Output", "Arithmetic Operators"],
      Sample_Input: "5 7",
      Sample_Output: "12",
      solved: false,
      successRate: "95%",
      submissions: "12.5K"
    },
    {
      id: 3,
      title: "Check Even or Odd",
      description: "Write a program that takes an integer as input and prints 'Even' if the number is even, otherwise prints 'Odd'.",
      difficulty: "Easy",
      topics: ["Conditional Statements", "Operators"],
      Sample_Input: "8",
      Sample_Output: "Even",
      solved: false,
      successRate: "93%",
      submissions: "10.8K"
    },
    {
      id: 4,
      title: "Find Maximum of Three Numbers",
      description: "Write a program that takes three integers as input and prints the maximum number.",
      difficulty: "Easy",
      topics: ["Conditional Statements", "Operators"],
      Sample_Input: "4 9 7",
      Sample_Output: "9",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 5,
      title: "Sum of List Elements",
      description: "Write a program that takes a list of integers and prints their sum.",
      difficulty: "Easy",
      topics: ["Lists", "Loops", "Functions"],
      Sample_Input: "[1, 2, 3, 4]",
      Sample_Output: "10",
      solved: false,
      successRate: "92%",
      submissions: "11.2K"
    },
    {
      id: 6,
      title: "Calculate Factorial",
      description: "Write a program to calculate the factorial of a given number.",
      difficulty: "Easy",
      topics: ["Loops", "Functions"],
      Sample_Input: "5",
      Sample_Output: "120",
      solved: false,
      successRate: "90%",
      submissions: "9.9K"
    },
    {
      id: 7,
      title: "Reverse a String",
      description: "Write a program that reverses the input string.",
      difficulty: "Easy",
      topics: ["Strings", "Functions"],
      Sample_Input: "Python",
      Sample_Output: "nohtyP",
      solved: false,
      successRate: "91%",
      submissions: "10.1K"
    },
    {
      id: 8,
      title: "Count Vowels in a String",
      description: "Write a program to count the number of vowels in the input string.",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "Hello World",
      Sample_Output: "3",
      solved: false,
      successRate: "89%",
      submissions: "9.8K"
    },
    {
      id: 9,
      title: "Check Leap Year",
      description: "Write a program that checks whether a given year is a leap year.",
      difficulty: "Easy",
      topics: ["Conditional Statements", "Operators"],
      Sample_Input: "2024",
      Sample_Output: "Leap Year",
      solved: false,
      successRate: "92%",
      submissions: "10.5K"
    },
    {
      id: 10,
      title: "Swap Two Numbers",
      description: "Write a program to swap the values of two variables without using a third variable.",
      difficulty: "Easy",
      topics: ["Variables", "Operators"],
      Sample_Input: "5 7",
      Sample_Output: "7 5",
      solved: false,
      successRate: "93%",
      submissions: "10.2K"
    },
    {
      id: 11,
      title: "Print Numbers 1 to N",
      description: "Write a program that prints numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops"],
      Sample_Input: "5",
      Sample_Output: "1 2 3 4 5",
      solved: false,
      successRate: "95%",
      submissions: "11K"
    },
    {
      id: 12,
      title: "Print Multiplication Table",
      description: "Write a program that prints the multiplication table of a given number.",
      difficulty: "Easy",
      topics: ["Loops", "Functions"],
      Sample_Input: "3",
      Sample_Output: "3 6 9 12 15 18 21 24 27 30",
      solved: false,
      successRate: "92%",
      submissions: "10.3K"
    },
    {
      id: 13,
      title: "Calculate Simple Interest",
      description: "Write a program to calculate simple interest given principal, rate, and time.",
      difficulty: "Easy",
      topics: ["Operators", "Input", "Output"],
      Sample_Input: "1000 5 2",
      Sample_Output: "100.0",
      solved: false,
      successRate: "90%",
      submissions: "9.7K"
    },
    {
      id: 14,
      title: "Check Positive, Negative, or Zero",
      description: "Write a program that checks whether a number is positive, negative, or zero.",
      difficulty: "Easy",
      topics: ["Conditional Statements", "Operators"],
      Sample_Input: "-3",
      Sample_Output: "Negative",
      solved: false,
      successRate: "91%",
      submissions: "10K"
    },
    {
      id: 15,
      title: "Print Even Numbers up to N",
      description: "Write a program that prints all even numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops", "Operators"],
      Sample_Input: "10",
      Sample_Output: "2 4 6 8 10",
      solved: false,
      successRate: "93%",
      submissions: "10.4K"
    },
    {
      id: 16,
      title: "Print Odd Numbers up to N",
      description: "Write a program that prints all odd numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops", "Operators"],
      Sample_Input: "10",
      Sample_Output: "1 3 5 7 9",
      solved: false,
      successRate: "92%",
      submissions: "10.1K"
    },
    {
      id: 17,
      title: "Check Prime Number",
      description: "Write a program that checks if a number is prime.",
      difficulty: "Easy",
      topics: ["Loops", "Conditional Statements", "Operators"],
      Sample_Input: "7",
      Sample_Output: "Prime",
      solved: false,
      successRate: "90%",
      submissions: "9.9K"
    },
    {
      id: 18,
      title: "Find GCD of Two Numbers",
      description: "Write a program to find the greatest common divisor (GCD) of two numbers.",
      difficulty: "Easy",
      topics: ["Functions", "Loops", "Operators"],
      Sample_Input: "12 15",
      Sample_Output: "3",
      solved: false,
      successRate: "91%",
      submissions: "10.2K"
    },
    {
      id: 19,
      title: "Find LCM of Two Numbers",
      description: "Write a program to find the least common multiple (LCM) of two numbers.",
      difficulty: "Easy",
      topics: ["Functions", "Loops", "Operators"],
      Sample_Input: "4 5",
      Sample_Output: "20",
      solved: false,
      successRate: "90%",
      submissions: "9.8K"
    },
    {
      id: 20,
      title: "Check Palindrome Number",
      description: "Write a program to check if a number is a palindrome.",
      difficulty: "Easy",
      topics: ["Loops", "Conditional Statements"],
      Sample_Input: "121",
      Sample_Output: "Palindrome",
      solved: false,
      successRate: "92%",
      submissions: "10K"
    },
    {
      id: 21,
      title: "Reverse a List",
      description: "Write a program that reverses the given list of integers.",
      difficulty: "Easy",
      topics: ["Lists", "Functions"],
      Sample_Input: "[1, 2, 3, 4]",
      Sample_Output: "[4, 3, 2, 1]",
      solved: false,
      successRate: "91%",
      submissions: "9.9K"
    },
    {
      id: 22,
      title: "Find Minimum in a List",
      description: "Write a program to find the minimum element in a list.",
      difficulty: "Easy",
      topics: ["Lists", "Functions"],
      Sample_Input: "[5, 2, 9, 1]",
      Sample_Output: "1",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 23,
      title: "Find Maximum in a List",
      description: "Write a program to find the maximum element in a list.",
      difficulty: "Easy",
      topics: ["Lists", "Functions"],
      Sample_Input: "[5, 2, 9, 1]",
      Sample_Output: "9",
      solved: false,
      successRate: "90%",
      submissions: "9.6K"
    },
    {
      id: 24,
      title: "Sum of Numbers from 1 to N",
      description: "Write a program that calculates the sum of numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops", "Operators"],
      Sample_Input: "5",
      Sample_Output: "15",
      solved: false,
      successRate: "92%",
      submissions: "10K"
    },
    {
      id: 25,
      title: "Print Fibonacci Series",
      description: "Write a program to print the first N Fibonacci numbers.",
      difficulty: "Easy",
      topics: ["Loops", "Functions"],
      Sample_Input: "5",
      Sample_Output: "0 1 1 2 3",
      solved: false,
      successRate: "91%",
      submissions: "9.8K"
    },
    {
      id: 26,
      title: "Check Armstrong Number",
      description: "Write a program to check whether a number is an Armstrong number.",
      difficulty: "Easy",
      topics: ["Loops", "Conditional Statements", "Operators"],
      Sample_Input: "153",
      Sample_Output: "Armstrong",
      solved: false,
      successRate: "90%",
      submissions: "9.7K"
    },
    {
      id: 27,
      title: "Count Digits in a Number",
      description: "Write a program to count the number of digits in a given number.",
      difficulty: "Easy",
      topics: ["Loops", "Operators"],
      Sample_Input: "12345",
      Sample_Output: "5",
      solved: false,
      successRate: "92%",
      submissions: "9.9K"
    },
    {
      id: 28,
      title: "Print Numbers in Reverse",
      description: "Write a program to print numbers from N to 1.",
      difficulty: "Easy",
      topics: ["Loops"],
      Sample_Input: "5",
      Sample_Output: "5 4 3 2 1",
      solved: false,
      successRate: "91%",
      submissions: "10K"
    },
    {
      id: 29,
      title: "Find ASCII Value of a Character",
      description: "Write a program that prints the ASCII value of the input character.",
      difficulty: "Easy",
      topics: ["Strings", "Operators"],
      Sample_Input: "A",
      Sample_Output: "65",
      solved: false,
      successRate: "92%",
      submissions: "9.8K"
    },
    {
      id: 30,
      title: "Check Vowel or Consonant",
      description: "Write a program to check whether a given character is a vowel or consonant.",
      difficulty: "Easy",
      topics: ["Strings", "Conditional Statements"],
      Sample_Input: "e",
      Sample_Output: "Vowel",
      solved: false,
      successRate: "90%",
      submissions: "9.6K"
    },
    {
      id: 31,
      title: "Count Words in a String",
      description: "Write a program to count the number of words in a string.",
      difficulty: "Easy",
      topics: ["Strings", "Functions"],
      Sample_Input: "Hello world from Python",
      Sample_Output: "4",
      solved: false,
      successRate: "91%",
      submissions: "9.7K"
    },
    {
      id: 32,
      title: "Check Substring",
      description: "Write a program to check if a substring exists in a string.",
      difficulty: "Easy",
      topics: ["Strings", "Conditional Statements"],
      Sample_Input: "Python",
      Sample_Output: "Yes",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 33,
      title: "Convert Celsius to Fahrenheit",
      description: "Write a program to convert temperature from Celsius to Fahrenheit.",
      difficulty: "Easy",
      topics: ["Operators", "Functions"],
      Sample_Input: "25",
      Sample_Output: "77.0",
      solved: false,
      successRate: "92%",
      submissions: "9.8K"
    },
    {
      id: 34,
      title: "Convert Fahrenheit to Celsius",
      description: "Write a program to convert temperature from Fahrenheit to Celsius.",
      difficulty: "Easy",
      topics: ["Operators", "Functions"],
      Sample_Input: "77",
      Sample_Output: "25.0",
      solved: false,
      successRate: "92%",
      submissions: "9.8K"
    },
    {
      id: 35,
      title: "Print Characters of String",
      description: "Write a program that prints each character of the string on a separate line.",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "Python",
      Sample_Output: "P\ny\nt\nh\no\nn",
      solved: false,
      successRate: "91%",
      submissions: "9.7K"
    },
    {
      id: 36,
      title: "Sum of Even Numbers up to N",
      description: "Write a program that calculates the sum of all even numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops", "Operators"],
      Sample_Input: "10",
      Sample_Output: "30",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 37,
      title: "Sum of Odd Numbers up to N",
      description: "Write a program that calculates the sum of all odd numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops", "Operators"],
      Sample_Input: "10",
      Sample_Output: "25",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 38,
      title: "Print Multiples of a Number",
      description: "Write a program that prints first N multiples of a given number.",
      difficulty: "Easy",
      topics: ["Loops", "Operators"],
      Sample_Input: "3 5",
      Sample_Output: "3 6 9 12 15",
      solved: false,
      successRate: "91%",
      submissions: "9.6K"
    },
    {
      id: 39,
      title: "Check Positive Even Number",
      description: "Write a program that checks if a number is positive and even.",
      difficulty: "Easy",
      topics: ["Conditional Statements", "Operators"],
      Sample_Input: "8",
      Sample_Output: "Yes",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 40,
      title: "Print Index and Value of List",
      description: "Write a program that prints the index and value of each element in a list.",
      difficulty: "Easy",
      topics: ["Lists", "Loops"],
      Sample_Input: "[10, 20, 30]",
      Sample_Output: "0 10\n1 20\n2 30",
      solved: false,
      successRate: "91%",
      submissions: "9.7K"
    },
    {
      id: 41,
      title: "Check Number Divisible by 5",
      description: "Write a program to check if a number is divisible by 5.",
      difficulty: "Easy",
      topics: ["Operators", "Conditional Statements"],
      Sample_Input: "25",
      Sample_Output: "Yes",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 42,
      title: "Check Number Divisible by 3 and 5",
      description: "Write a program to check if a number is divisible by both 3 and 5.",
      difficulty: "Easy",
      topics: ["Operators", "Conditional Statements"],
      Sample_Input: "15",
      Sample_Output: "Yes",
      solved: false,
      successRate: "91%",
      submissions: "9.6K"
    },
    {
      id: 43,
      title: "Print Characters at Even Positions",
      description: "Write a program that prints characters at even positions in a string.",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "Python",
      Sample_Output: "P t o",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 44,
      title: "Print Characters at Odd Positions",
      description: "Write a program that prints characters at odd positions in a string.",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "Python",
      Sample_Output: "y h n",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 45,
      title: "Find Length of a String",
      description: "Write a program to find the length of a given string without using len() function.",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "Python",
      Sample_Output: "6",
      solved: false,
      successRate: "91%",
      submissions: "9.6K"
    },
    {
      id: 46,
      title: "Print List in Reverse Order",
      description: "Write a program to print elements of a list in reverse order.",
      difficulty: "Easy",
      topics: ["Lists", "Loops"],
      Sample_Input: "[1, 2, 3, 4]",
      Sample_Output: "4 3 2 1",
      solved: false,
      successRate: "91%",
      submissions: "9.6K"
    },
    {
      id: 47,
      title: "Check if List is Empty",
      description: "Write a program to check if a list is empty.",
      difficulty: "Easy",
      topics: ["Lists", "Conditional Statements"],
      Sample_Input: "[]",
      Sample_Output: "Empty",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 48,
      title: "Print First N Natural Numbers",
      description: "Write a program that prints first N natural numbers.",
      difficulty: "Easy",
      topics: ["Loops"],
      Sample_Input: "5",
      Sample_Output: "1 2 3 4 5",
      solved: false,
      successRate: "92%",
      submissions: "9.7K"
    },
    {
      id: 49,
      title: "Print Squares of Numbers 1 to N",
      description: "Write a program that prints squares of numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops", "Operators"],
      Sample_Input: "5",
      Sample_Output: "1 4 9 16 25",
      solved: false,
      successRate: "91%",
      submissions: "9.6K"
    },
    {
      id: 50,
      title: "Print Cubes of Numbers 1 to N",
      description: "Write a program that prints cubes of numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops", "Operators"],
      Sample_Input: "5",
      Sample_Output: "1 8 27 64 125",
      solved: false,
      successRate: "91%",
      submissions: "9.6K"
    },
    {
      id: 51,
      title: "Create a Class and Object",
      description: "Write a program to create a class 'Person' with attributes name and age, and print them using an object.",
      difficulty: "Intermediate",
      topics: ["OOP", "Classes", "Objects"],
      Sample_Input: "John 25",
      Sample_Output: "Name: John, Age: 25",
      solved: false,
      successRate: "88%",
      submissions: "8.5K"
    },
    {
      id: 52,
      title: "Class with Method",
      description: "Write a class 'Circle' with a method to calculate area of circle given radius.",
      difficulty: "Intermediate",
      topics: ["OOP", "Classes", "Methods"],
      Sample_Input: "5",
      Sample_Output: "78.5",
      solved: false,
      successRate: "87%",
      submissions: "8.3K"
    },
    {
      id: 53,
      title: "Inheritance Example",
      description: "Create a base class 'Animal' and derived class 'Dog'. Implement a method 'speak' in both classes and demonstrate inheritance.",
      difficulty: "Intermediate",
      topics: ["OOP", "Inheritance"],
      Sample_Input: "-",
      Sample_Output: "Animal speaks\nDog barks",
      solved: false,
      successRate: "86%",
      submissions: "8K"
    },
    {
      id: 54,
      title: "Class with Constructor",
      description: "Write a class 'Student' with constructor to initialize name and marks, then print details.",
      difficulty: "Intermediate",
      topics: ["OOP", "Constructor"],
      Sample_Input: "Alice 90",
      Sample_Output: "Student: Alice, Marks: 90",
      solved: false,
      successRate: "87%",
      submissions: "8.2K"
    },
    {
      id: 55,
      title: "Recursion: Factorial",
      description: "Write a recursive function to calculate factorial of a number.",
      difficulty: "Intermediate",
      topics: ["Functions", "Recursion"],
      Sample_Input: "5",
      Sample_Output: "120",
      solved: false,
      successRate: "88%",
      submissions: "8.4K"
    },
    {
      id: 56,
      title: "Recursion: Fibonacci",
      description: "Write a recursive function to print N Fibonacci numbers.",
      difficulty: "Intermediate",
      topics: ["Functions", "Recursion"],
      Sample_Input: "5",
      Sample_Output: "0 1 1 2 3",
      solved: false,
      successRate: "87%",
      submissions: "8.3K"
    },
    {
      id: 57,
      title: "Default Arguments in Function",
      description: "Write a function that prints greeting message with default name='User'.",
      difficulty: "Intermediate",
      topics: ["Functions", "Default Arguments"],
      Sample_Input: "-",
      Sample_Output: "Hello User",
      solved: false,
      successRate: "88%",
      submissions: "8.2K"
    },
    {
      id: 58,
      title: "Lambda Function Example",
      description: "Write a lambda function to calculate square of a number.",
      difficulty: "Intermediate",
      topics: ["Functions", "Lambda"],
      Sample_Input: "4",
      Sample_Output: "16",
      solved: false,
      successRate: "87%",
      submissions: "8K"
    },
    {
      id: 59,
      title: "List Comprehension",
      description: "Write a program using list comprehension to create a list of squares of numbers 1 to N.",
      difficulty: "Intermediate",
      topics: ["Comprehensions", "Lists"],
      Sample_Input: "5",
      Sample_Output: "[1, 4, 9, 16, 25]",
      solved: false,
      successRate: "88%",
      submissions: "8.1K"
    },
    {
      id: 60,
      title: "Dictionary Comprehension",
      description: "Write a program to create a dictionary where keys are numbers 1 to N and values are their squares.",
      difficulty: "Intermediate",
      topics: ["Comprehensions", "Dictionary"],
      Sample_Input: "5",
      Sample_Output: "{1:1,2:4,3:9,4:16,5:25}",
      solved: false,
      successRate: "87%",
      submissions: "8K"
    },
    {
      id: 61,
      title: "Set Comprehension",
      description: "Write a program to create a set of squares of numbers 1 to N using set comprehension.",
      difficulty: "Intermediate",
      topics: ["Comprehensions", "Set"],
      Sample_Input: "5",
      Sample_Output: "{1,4,9,16,25}",
      solved: false,
      successRate: "87%",
      submissions: "8K"
    },
    {
      id: 62,
      title: "Iterator Example",
      description: "Create an iterator to iterate through numbers 1 to N.",
      difficulty: "Intermediate",
      topics: ["Iterators", "Loops"],
      Sample_Input: "5",
      Sample_Output: "1 2 3 4 5",
      solved: false,
      successRate: "86%",
      submissions: "7.9K"
    },
    {
      id: 63,
      title: "Generator Function",
      description: "Write a generator function to generate first N even numbers.",
      difficulty: "Intermediate",
      topics: ["Generators", "Functions"],
      Sample_Input: "5",
      Sample_Output: "2 4 6 8 10",
      solved: false,
      successRate: "86%",
      submissions: "7.8K"
    },
    {
      id: 64,
      title: "Simple Decorator",
      description: "Write a decorator that prints 'Start' before function execution and 'End' after execution.",
      difficulty: "Intermediate",
      topics: ["Decorators", "Functions"],
      Sample_Input: "-",
      Sample_Output: "Start\nFunction Executed\nEnd",
      solved: false,
      successRate: "85%",
      submissions: "7.8K"
    },
    {
      id: 65,
      title: "Closure Example",
      description: "Write a closure function that returns a function to multiply a given number by N.",
      difficulty: "Intermediate",
      topics: ["Closures", "Functions"],
      Sample_Input: "3 5",
      Sample_Output: "15",
      solved: false,
      successRate: "86%",
      submissions: "7.9K"
    },
    {
      id: 66,
      title: "Read File Content",
      description: "Write a program to read content from a text file and print it.",
      difficulty: "Intermediate",
      topics: ["File Handling", "Files"],
      Sample_Input: "sample.txt",
      Sample_Output: "This is sample text.",
      solved: false,
      successRate: "87%",
      submissions: "8K"
    },
    {
      id: 67,
      title: "Write to File",
      description: "Write a program to write user input into a text file.",
      difficulty: "Intermediate",
      topics: ["File Handling", "Files"],
      Sample_Input: "Hello World",
      Sample_Output: "File written successfully",
      solved: false,
      successRate: "86%",
      submissions: "7.9K"
    },
    {
      id: 68,
      title: "Append to File",
      description: "Write a program to append text to an existing file.",
      difficulty: "Intermediate",
      topics: ["File Handling", "Files"],
      Sample_Input: "Appended text",
      Sample_Output: "Text appended successfully",
      solved: false,
      successRate: "86%",
      submissions: "7.8K"
    },
    {
      id: 69,
      title: "Read CSV File",
      description: "Write a program to read data from a CSV file and print it row-wise.",
      difficulty: "Intermediate",
      topics: ["File Handling", "CSV"],
      Sample_Input: "data.csv",
      Sample_Output: "1,John,25\n2,Alice,30",
      solved: false,
      successRate: "85%",
      submissions: "7.7K"
    },
    {
      id: 70,
      title: "Write CSV File",
      description: "Write a program to write a list of lists into a CSV file.",
      difficulty: "Intermediate",
      topics: ["File Handling", "CSV"],
      Sample_Input: "[[1,'John',25],[2,'Alice',30]]",
      Sample_Output: "CSV file created",
      solved: false,
      successRate: "85%",
      submissions: "7.7K"
    },

    {
      id: 71,
      title: "JSON File Read",
      description: "Write a Python program to read data from a JSON file and print it.",
      difficulty: "Intermediate",
      topics: ["File Handling", "JSON"],
      Sample_Input: "data.json",
      Sample_Output: "{'name': 'John', 'age': 25}",
      solved: false,
      successRate: "84%",
      submissions: "7.6K"
    },
    {
      id: 72,
      title: "JSON File Write",
      description: "Write a Python program to write a dictionary into a JSON file.",
      difficulty: "Intermediate",
      topics: ["File Handling", "JSON"],
      Sample_Input: "{'name':'Alice','age':23}",
      Sample_Output: "Data written to data.json",
      solved: false,
      successRate: "85%",
      submissions: "7.8K"
    },
    {
      id: 73,
      title: "Exception Handling Basic",
      description: "Write a program to handle ZeroDivisionError and print an error message.",
      difficulty: "Intermediate",
      topics: ["Exception Handling", "Try-Except"],
      Sample_Input: "10 0",
      Sample_Output: "Cannot divide by zero",
      solved: false,
      successRate: "87%",
      submissions: "8K"
    },
    {
      id: 74,
      title: "Multiple Exception Handling",
      description: "Handle multiple exceptions in one block such as ValueError and TypeError.",
      difficulty: "Intermediate",
      topics: ["Exception Handling"],
      Sample_Input: "'a' 5",
      Sample_Output: "Invalid input",
      solved: false,
      successRate: "85%",
      submissions: "7.7K"
    },
    {
      id: 75,
      title: "Custom Exception",
      description: "Create a custom exception InvalidAgeError and raise it if age < 18.",
      difficulty: "Intermediate",
      topics: ["Exception Handling", "OOP"],
      Sample_Input: "15",
      Sample_Output: "InvalidAgeError: Age must be 18 or above",
      solved: false,
      successRate: "83%",
      submissions: "7.4K"
    },
    {
      id: 76,
      title: "Regular Expression: Find Digits",
      description: "Use regex to extract all digits from a string.",
      difficulty: "Intermediate",
      topics: ["Regular Expressions", "re Module"],
      Sample_Input: "abc123xyz456",
      Sample_Output: "['123', '456']",
      solved: false,
      successRate: "84%",
      submissions: "7.5K"
    },
    {
      id: 77,
      title: "Regular Expression: Validate Email",
      description: "Use regex to validate if a string is a valid email address.",
      difficulty: "Intermediate",
      topics: ["Regular Expressions"],
      Sample_Input: "example@email.com",
      Sample_Output: "Valid",
      solved: false,
      successRate: "82%",
      submissions: "7.3K"
    },
    {
      id: 78,
      title: "Regular Expression: Extract Words",
      description: "Write a program to extract all words from a string using regex.",
      difficulty: "Intermediate",
      topics: ["Regular Expressions"],
      Sample_Input: "Python is great!",
      Sample_Output: "['Python', 'is', 'great']",
      solved: false,
      successRate: "84%",
      submissions: "7.6K"
    },
    {
      id: 79,
      title: "Module Import",
      description: "Create a separate Python module and import it into main script to use a function.",
      difficulty: "Intermediate",
      topics: ["Modules", "Import"],
      Sample_Input: "add(3,5)",
      Sample_Output: "8",
      solved: false,
      successRate: "85%",
      submissions: "7.8K"
    },
    {
      id: 80,
      title: "Use Built-in Modules",
      description: "Use the math module to find the square root and power of a number.",
      difficulty: "Intermediate",
      topics: ["Modules", "Math"],
      Sample_Input: "4 3",
      Sample_Output: "2.0 64",
      solved: false,
      successRate: "86%",
      submissions: "7.9K"
    },
    {
      id: 81,
      title: "Package Creation",
      description: "Create a Python package with two modules and import functions from both.",
      difficulty: "Intermediate",
      topics: ["Packages", "Modules"],
      Sample_Input: "-",
      Sample_Output: "Functions imported successfully",
      solved: false,
      successRate: "83%",
      submissions: "7.4K"
    },
    {
      id: 82,
      title: "Use OS Module",
      description: "Use the os module to list all files in the current directory.",
      difficulty: "Intermediate",
      topics: ["Modules", "OS"],
      Sample_Input: "-",
      Sample_Output: "['file1.txt', 'file2.py']",
      solved: false,
      successRate: "84%",
      submissions: "7.5K"
    },
    {
      id: 83,
      title: "Use Datetime Module",
      description: "Display the current date and time using datetime module.",
      difficulty: "Intermediate",
      topics: ["Modules", "Datetime"],
      Sample_Input: "-",
      Sample_Output: "2025-10-23 12:34:56",
      solved: false,
      successRate: "85%",
      submissions: "7.6K"
    },
    {
      id: 84,
      title: "File Word Count",
      description: "Write a program that counts the number of words in a file.",
      difficulty: "Intermediate",
      topics: ["File Handling", "Text Processing"],
      Sample_Input: "data.txt",
      Sample_Output: "45",
      solved: false,
      successRate: "84%",
      submissions: "7.5K"
    },
    {
      id: 85,
      title: "File Line Count",
      description: "Write a program that counts number of lines in a file.",
      difficulty: "Intermediate",
      topics: ["File Handling"],
      Sample_Input: "data.txt",
      Sample_Output: "12",
      solved: false,
      successRate: "85%",
      submissions: "7.6K"
    },
    {
      id: 86,
      title: "Polymorphism Example",
      description: "Demonstrate polymorphism using a common method name in different classes.",
      difficulty: "Intermediate",
      topics: ["OOP", "Polymorphism"],
      Sample_Input: "-",
      Sample_Output: "Dog barks\nCat meows",
      solved: false,
      successRate: "83%",
      submissions: "7.4K"
    },
    {
      id: 87,
      title: "Encapsulation Example",
      description: "Demonstrate encapsulation using private variables and getter/setter methods.",
      difficulty: "Intermediate",
      topics: ["OOP", "Encapsulation"],
      Sample_Input: "-",
      Sample_Output: "Name: John",
      solved: false,
      successRate: "84%",
      submissions: "7.5K"
    },
    {
      id: 88,
      title: "Class Method and Static Method",
      description: "Demonstrate usage of @classmethod and @staticmethod decorators.",
      difficulty: "Intermediate",
      topics: ["OOP", "Decorators"],
      Sample_Input: "-",
      Sample_Output: "Class method called\nStatic method called",
      solved: false,
      successRate: "84%",
      submissions: "7.6K"
    },
    {
      id: 89,
      title: "Multiple Inheritance",
      description: "Create two base classes and one derived class inheriting both.",
      difficulty: "Intermediate",
      topics: ["OOP", "Inheritance"],
      Sample_Input: "-",
      Sample_Output: "Derived class initialized",
      solved: false,
      successRate: "82%",
      submissions: "7.2K"
    },
    {
      id: 90,
      title: "Abstraction Using ABC",
      description: "Use the abc module to create an abstract base class and implement abstract methods.",
      difficulty: "Intermediate",
      topics: ["OOP", "Abstraction"],
      Sample_Input: "-",
      Sample_Output: "Implemented abstract method",
      solved: false,
      successRate: "82%",
      submissions: "7.1K"
    },
    {
      id: 91,
      title: "Command Line Arguments",
      description: "Write a Python script that takes command line arguments and prints them.",
      difficulty: "Intermediate",
      topics: ["sys Module", "Input"],
      Sample_Input: "python script.py hello world",
      Sample_Output: "Arguments: ['hello', 'world']",
      solved: false,
      successRate: "83%",
      submissions: "7.3K"
    },
    {
      id: 92,
      title: "Map, Filter, Reduce",
      description: "Use map(), filter(), and reduce() to process a list of numbers.",
      difficulty: "Intermediate",
      topics: ["Functional Programming"],
      Sample_Input: "[1,2,3,4,5]",
      Sample_Output: "Squares: [1,4,9,16,25]\nEvens: [2,4]\nSum: 15",
      solved: false,
      successRate: "84%",
      submissions: "7.4K"
    },
    {
      id: 93,
      title: "Zip Function Usage",
      description: "Combine two lists using zip() and print pairs.",
      difficulty: "Intermediate",
      topics: ["Built-in Functions"],
      Sample_Input: "[1,2,3],['a','b','c']",
      Sample_Output: "[(1,'a'),(2,'b'),(3,'c')]",
      solved: false,
      successRate: "85%",
      submissions: "7.6K"
    },
    {
      id: 94,
      title: "Enumerate Example",
      description: "Use enumerate() to print elements with their index.",
      difficulty: "Intermediate",
      topics: ["Built-in Functions"],
      Sample_Input: "['apple','banana','cherry']",
      Sample_Output: "0 apple\n1 banana\n2 cherry",
      solved: false,
      successRate: "86%",
      submissions: "7.7K"
    },
    {
      id: 95,
      title: "List Sorting with Key",
      description: "Sort a list of tuples by second element using lambda function.",
      difficulty: "Intermediate",
      topics: ["Sorting", "Lambda"],
      Sample_Input: "[(1,3),(2,2),(3,1)]",
      Sample_Output: "[(3,1),(2,2),(1,3)]",
      solved: false,
      successRate: "84%",
      submissions: "7.5K"
    },
    {
      id: 96,
      title: "Nested List Comprehension",
      description: "Create a 3x3 matrix using nested list comprehension.",
      difficulty: "Intermediate",
      topics: ["Comprehensions", "Lists"],
      Sample_Input: "-",
      Sample_Output: "[[1,2,3],[1,2,3],[1,2,3]]",
      solved: false,
      successRate: "85%",
      submissions: "7.6K"
    },
    {
      id: 97,
      title: "Unpacking Arguments",
      description: "Use *args and **kwargs in function to print all arguments.",
      difficulty: "Intermediate",
      topics: ["Functions", "Arguments"],
      Sample_Input: "1,2,3 name=John age=25",
      Sample_Output: "Args:(1,2,3)\nKwargs:{'name':'John','age':25}",
      solved: false,
      successRate: "85%",
      submissions: "7.6K"
    },
    {
      id: 98,
      title: "Exception with Else and Finally",
      description: "Use else and finally blocks in try-except for file operations.",
      difficulty: "Intermediate",
      topics: ["Exception Handling"],
      Sample_Input: "data.txt",
      Sample_Output: "File opened successfully\nOperation completed",
      solved: false,
      successRate: "84%",
      submissions: "7.5K"
    },
    {
      id: 99,
      title: "Debug with Assertions",
      description: "Write a program that uses assert statements to check positive numbers.",
      difficulty: "Intermediate",
      topics: ["Debugging", "Assertions"],
      Sample_Input: "-5",
      Sample_Output: "AssertionError: Number must be positive",
      solved: false,
      successRate: "83%",
      submissions: "7.3K"
    },
    {
      id: 100,
      title: "Logging Example",
      description: "Use logging module to log info and error messages to a file.",
      difficulty: "Intermediate",
      topics: ["Logging", "Modules"],
      Sample_Input: "-",
      Sample_Output: "Logs saved to app.log",
      solved: false,
      successRate: "82%",
      submissions: "7.2K"
    },

    {
      id: 101,
      title: "Define a Simple Class",
      description: "Create a class named Car with attributes brand and model, and a method to display details.",
      difficulty: "Intermediate",
      topics: ["OOP", "Classes", "Methods"],
      Sample_Input: "brand = 'Tesla', model = 'Model 3'",
      Sample_Output: "Brand: Tesla, Model: Model 3",
      solved: false,
      successRate: "86%",
      submissions: "4.3K"
    },
    {
      id: 102,
      title: "Class Inheritance Example",
      description: "Create a base class Animal with a method speak(), and a derived class Dog that overrides it.",
      difficulty: "Intermediate",
      topics: ["OOP", "Inheritance"],
      Sample_Input: "Dog.speak()",
      Sample_Output: "Woof!",
      solved: false,
      successRate: "85%",
      submissions: "4.1K"
    },
    {
      id: 103,
      title: "Use of Class Variables",
      description: "Create a class Student with a class variable 'count' that keeps track of the number of Student objects created.",
      difficulty: "Intermediate",
      topics: ["OOP", "Class Variables"],
      Sample_Input: "s1, s2 = Student(), Student()",
      Sample_Output: "2",
      solved: false,
      successRate: "84%",
      submissions: "3.9K"
    },
    {
      id: 104,
      title: "Handle ZeroDivisionError",
      description: "Write a program to divide two numbers and handle ZeroDivisionError if the denominator is zero.",
      difficulty: "Intermediate",
      topics: ["Exception Handling", "Try-Except"],
      Sample_Input: "5 0",
      Sample_Output: "Cannot divide by zero",
      solved: false,
      successRate: "89%",
      submissions: "4.5K"
    },
    {
      id: 105,
      title: "Using finally Block",
      description: "Demonstrate try-except-finally block by printing 'Execution Completed' regardless of exception occurrence.",
      difficulty: "Intermediate",
      topics: ["Exception Handling"],
      Sample_Input: "10 2",
      Sample_Output: "Result: 5\nExecution Completed",
      solved: false,
      successRate: "87%",
      submissions: "3.8K"
    },
    {
      id: 106,
      title: "Write and Read File",
      description: "Write a Python program that writes 'Python Rocks!' to a text file and then reads it back.",
      difficulty: "Intermediate",
      topics: ["File Handling", "I/O"],
      Sample_Input: "File: message.txt",
      Sample_Output: "Python Rocks!",
      solved: false,
      successRate: "83%",
      submissions: "3.7K"
    },
    {
      id: 107,
      title: "Count Words in File",
      description: "Read a text file and count the total number of words.",
      difficulty: "Intermediate",
      topics: ["File Handling", "Strings"],
      Sample_Input: "File: sample.txt ('Python is fun')",
      Sample_Output: "3",
      solved: false,
      successRate: "81%",
      submissions: "3.4K"
    },
    {
      id: 108,
      title: "Use of Lambda Function",
      description: "Write a Python lambda function to square a number.",
      difficulty: "Intermediate",
      topics: ["Lambda", "Functions"],
      Sample_Input: "5",
      Sample_Output: "25",
      solved: false,
      successRate: "88%",
      submissions: "4.2K"
    },
    {
      id: 109,
      title: "Map and Filter Example",
      description: "Use map() to square numbers and filter() to get only even squares from a list.",
      difficulty: "Intermediate",
      topics: ["Functional Programming", "map", "filter"],
      Sample_Input: "[1, 2, 3, 4, 5]",
      Sample_Output: "[4, 16]",
      solved: false,
      successRate: "84%",
      submissions: "3.9K"
    },
    {
      id: 110,
      title: "Using Reduce Function",
      description: "Use functools.reduce to find the product of all numbers in a list.",
      difficulty: "Intermediate",
      topics: ["Functional Programming", "reduce"],
      Sample_Input: "[1, 2, 3, 4]",
      Sample_Output: "24",
      solved: false,
      successRate: "82%",
      submissions: "3.5K"
    },
    {
      id: 111,
      title: "List Comprehension with Condition",
      description: "Create a list comprehension that includes only even numbers from 1 to 20.",
      difficulty: "Intermediate",
      topics: ["List Comprehension"],
      Sample_Input: "1-20",
      Sample_Output: "[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]",
      solved: false,
      successRate: "87%",
      submissions: "4.1K"
    },
    {
      id: 112,
      title: "Nested List Comprehension",
      description: "Generate a 3x3 matrix using nested list comprehension.",
      difficulty: "Intermediate",
      topics: ["List Comprehension", "Nested Loops"],
      Sample_Input: "",
      Sample_Output: "[[1,2,3],[4,5,6],[7,8,9]]",
      solved: false,
      successRate: "84%",
      submissions: "3.8K"
    },
    {
      id: 113,
      title: "Use of Decorators",
      description: "Create a decorator that prints 'Start' before and 'End' after a function call.",
      difficulty: "Intermediate",
      topics: ["Decorators", "Functions"],
      Sample_Input: "decorated_function()",
      Sample_Output: "Start\nHello World\nEnd",
      solved: false,
      successRate: "81%",
      submissions: "3.3K"
    },
    {
      id: 114,
      title: "Use of Generator Function",
      description: "Create a generator that yields even numbers up to n.",
      difficulty: "Intermediate",
      topics: ["Generators", "Yield"],
      Sample_Input: "n = 10",
      Sample_Output: "2 4 6 8 10",
      solved: false,
      successRate: "83%",
      submissions: "3.6K"
    },
    {
      id: 115,
      title: "Regex for Email Validation",
      description: "Use regular expressions to validate an email address.",
      difficulty: "Intermediate",
      topics: ["Regular Expressions", "String Validation"],
      Sample_Input: "test@example.com",
      Sample_Output: "Valid Email",
      solved: false,
      successRate: "80%",
      submissions: "3.2K"
    },
    {
      id: 116,
      title: "Regex for Phone Number",
      description: "Write a Python program to check if a string is a valid 10-digit phone number using regex.",
      difficulty: "Intermediate",
      topics: ["Regex", "Validation"],
      Sample_Input: "9876543210",
      Sample_Output: "Valid Number",
      solved: false,
      successRate: "82%",
      submissions: "3.3K"
    },
    {
      id: 117,
      title: "JSON Read and Write",
      description: "Write a Python script to write a dictionary to a JSON file and then read it back.",
      difficulty: "Intermediate",
      topics: ["JSON", "File Handling"],
      Sample_Input: "{ 'name': 'John', 'age': 25 }",
      Sample_Output: "{ 'name': 'John', 'age': 25 }",
      solved: false,
      successRate: "83%",
      submissions: "3.4K"
    },
    {
      id: 118,
      title: "CSV Reader Example",
      description: "Read a CSV file and print each row's data.",
      difficulty: "Intermediate",
      topics: ["CSV", "File I/O"],
      Sample_Input: "students.csv",
      Sample_Output: "John, 90",
      solved: false,
      successRate: "81%",
      submissions: "3.2K"
    },
    {
      id: 119,
      title: "Using Zip Function",
      description: "Combine two lists using zip() and print the result as tuples.",
      difficulty: "Intermediate",
      topics: ["Built-in Functions", "zip"],
      Sample_Input: "[1,2,3], ['a','b','c']",
      Sample_Output: "[(1,'a'), (2,'b'), (3,'c')]",
      solved: false,
      successRate: "85%",
      submissions: "3.9K"
    },
    {
      id: 120,
      title: "Unzipping Tuples",
      description: "Unzip a list of tuples into two separate lists using zip().",
      difficulty: "Intermediate",
      topics: ["zip", "Tuples"],
      Sample_Input: "[(1,'a'), (2,'b')]",
      Sample_Output: "[1,2], ['a','b']",
      solved: false,
      successRate: "83%",
      submissions: "3.5K"
    },

    {
      id: 121,
      title: "Import and Use a Module",
      description: "Import the math module and calculate the square root of 16.",
      difficulty: "Intermediate",
      topics: ["Modules", "Import", "Math"],
      Sample_Input: "16",
      Sample_Output: "4.0",
      solved: false,
      successRate: "85%",
      submissions: "4.1K"
    },
    {
      id: 122,
      title: "Use Alias for Module",
      description: "Import math as m and calculate the factorial of 5.",
      difficulty: "Intermediate",
      topics: ["Modules", "Import Alias"],
      Sample_Input: "5",
      Sample_Output: "120",
      solved: false,
      successRate: "84%",
      submissions: "3.9K"
    },
    {
      id: 123,
      title: "Working with DateTime",
      description: "Print the current date and time using the datetime module.",
      difficulty: "Intermediate",
      topics: ["DateTime", "Modules"],
      Sample_Input: "",
      Sample_Output: "2025-10-23 15:30:45",
      solved: false,
      successRate: "87%",
      submissions: "4.2K"
    },
    {
      id: 124,
      title: "Format Current Date",
      description: "Use strftime() to print the current date in 'DD-MM-YYYY' format.",
      difficulty: "Intermediate",
      topics: ["DateTime", "Formatting"],
      Sample_Input: "",
      Sample_Output: "23-10-2025",
      solved: false,
      successRate: "86%",
      submissions: "4.0K"
    },
    {
      id: 125,
      title: "Calculate Date Difference",
      description: "Write a program to calculate the difference between two dates in days.",
      difficulty: "Intermediate",
      topics: ["DateTime", "Arithmetic"],
      Sample_Input: "2025-10-01, 2025-10-23",
      Sample_Output: "22",
      solved: false,
      successRate: "82%",
      submissions: "3.7K"
    },
    {
      id: 126,
      title: "Use of itertools.count()",
      description: "Generate the first 5 numbers using itertools.count().",
      difficulty: "Intermediate",
      topics: ["Itertools", "Generators"],
      Sample_Input: "",
      Sample_Output: "0 1 2 3 4",
      solved: false,
      successRate: "81%",
      submissions: "3.4K"
    },
    {
      id: 127,
      title: "Use of itertools.cycle()",
      description: "Cycle through a list ['A', 'B'] five times using itertools.cycle().",
      difficulty: "Intermediate",
      topics: ["Itertools", "Loops"],
      Sample_Input: "",
      Sample_Output: "A B A B A",
      solved: false,
      successRate: "80%",
      submissions: "3.2K"
    },
    {
      id: 128,
      title: "Use of itertools.combinations()",
      description: "Generate all 2-element combinations of the list [1, 2, 3, 4].",
      difficulty: "Intermediate",
      topics: ["Itertools", "Combinatorics"],
      Sample_Input: "[1,2,3,4]",
      Sample_Output: "(1,2), (1,3), (1,4), (2,3), (2,4), (3,4)",
      solved: false,
      successRate: "83%",
      submissions: "3.8K"
    },
    {
      id: 129,
      title: "Logging Basics",
      description: "Use the logging module to log an info message 'Process started'.",
      difficulty: "Intermediate",
      topics: ["Logging", "Modules"],
      Sample_Input: "",
      Sample_Output: "INFO:root:Process started",
      solved: false,
      successRate: "78%",
      submissions: "3.1K"
    },
    {
      id: 130,
      title: "Set Logging Level",
      description: "Configure the logging module to only log warnings and errors.",
      difficulty: "Intermediate",
      topics: ["Logging", "Configuration"],
      Sample_Input: "",
      Sample_Output: "WARNING:root:Low Disk Space",
      solved: false,
      successRate: "80%",
      submissions: "3.4K"
    },
    {
      id: 131,
      title: "Use of sys.argv",
      description: "Write a Python script that prints the command line arguments passed to it.",
      difficulty: "Intermediate",
      topics: ["sys", "Command Line Arguments"],
      Sample_Input: "python script.py hello world",
      Sample_Output: "['script.py', 'hello', 'world']",
      solved: false,
      successRate: "85%",
      submissions: "3.8K"
    },
    {
      id: 132,
      title: "Access Environment Variables",
      description: "Use the os module to read the PATH environment variable.",
      difficulty: "Intermediate",
      topics: ["os", "Environment Variables"],
      Sample_Input: "",
      Sample_Output: "C:\\Windows\\System32;...",
      solved: false,
      successRate: "84%",
      submissions: "3.7K"
    },
    {
      id: 133,
      title: "Check if File Exists",
      description: "Write a Python program that checks if a file exists using os.path.exists().",
      difficulty: "Intermediate",
      topics: ["os", "File Handling"],
      Sample_Input: "sample.txt",
      Sample_Output: "File exists",
      solved: false,
      successRate: "83%",
      submissions: "3.6K"
    },
    {
      id: 134,
      title: "List Files in Directory",
      description: "Use os.listdir() to print all files in the current directory.",
      difficulty: "Intermediate",
      topics: ["os", "File System"],
      Sample_Input: "",
      Sample_Output: "['main.py', 'test.txt']",
      solved: false,
      successRate: "82%",
      submissions: "3.5K"
    },
    {
      id: 135,
      title: "Get Current Working Directory",
      description: "Use os.getcwd() to print the current working directory.",
      difficulty: "Intermediate",
      topics: ["os"],
      Sample_Input: "",
      Sample_Output: "C:\\Users\\Student\\Projects",
      solved: false,
      successRate: "84%",
      submissions: "3.7K"
    },
    {
      id: 136,
      title: "Math Module Power Function",
      description: "Use math.pow() to calculate 2 raised to the power 5.",
      difficulty: "Intermediate",
      topics: ["Math", "Functions"],
      Sample_Input: "2 5",
      Sample_Output: "32.0",
      solved: false,
      successRate: "87%",
      submissions: "4.0K"
    },
    {
      id: 137,
      title: "Generate Random Integer",
      description: "Use the random module to generate a random number between 1 and 10.",
      difficulty: "Intermediate",
      topics: ["Random", "Modules"],
      Sample_Input: "",
      Sample_Output: "7",
      solved: false,
      successRate: "86%",
      submissions: "3.9K"
    },
    {
      id: 138,
      title: "Shuffle a List",
      description: "Use random.shuffle() to shuffle a list of numbers.",
      difficulty: "Intermediate",
      topics: ["Random", "Lists"],
      Sample_Input: "[1, 2, 3, 4, 5]",
      Sample_Output: "[3, 1, 5, 4, 2]",
      solved: false,
      successRate: "85%",
      submissions: "3.8K"
    },
    {
      id: 139,
      title: "Pick Random Choice",
      description: "Use random.choice() to select a random fruit from a list.",
      difficulty: "Intermediate",
      topics: ["Random", "Lists"],
      Sample_Input: "['apple', 'banana', 'cherry']",
      Sample_Output: "banana",
      solved: false,
      successRate: "84%",
      submissions: "3.7K"
    },
    {
      id: 140,
      title: "Use of Enumerate Function",
      description: "Use enumerate() to print index and element pairs from a list.",
      difficulty: "Intermediate",
      topics: ["Built-in Functions", "Loops"],
      Sample_Input: "['a', 'b', 'c']",
      Sample_Output: "0 a\n1 b\n2 c",
      solved: false,
      successRate: "88%",
      submissions: "4.1K"
    },
    {
      id: 141,
      title: "Use of Any and All",
      description: "Check if all numbers in a list are positive using all().",
      difficulty: "Intermediate",
      topics: ["Built-in Functions"],
      Sample_Input: "[1, 2, 3, 4]",
      Sample_Output: "True",
      solved: false,
      successRate: "85%",
      submissions: "3.8K"
    },
    {
      id: 142,
      title: "Use of Dir Function",
      description: "Use dir() to list all methods available in a string object.",
      difficulty: "Intermediate",
      topics: ["Built-in Functions"],
      Sample_Input: "",
      Sample_Output: "['capitalize', 'center', 'count', ...]",
      solved: false,
      successRate: "83%",
      submissions: "3.6K"
    },
    {
      id: 143,
      title: "Inspect Object Attributes",
      description: "Use the inspect module to list the attributes of a function.",
      difficulty: "Intermediate",
      topics: ["Inspect", "Reflection"],
      Sample_Input: "def add(a, b): return a+b",
      Sample_Output: "['__annotations__', '__call__', '__name__', ...]",
      solved: false,
      successRate: "80%",
      submissions: "3.2K"
    },
    {
      id: 144,
      title: "Debug with pdb",
      description: "Use pdb to debug a simple Python program.",
      difficulty: "Intermediate",
      topics: ["Debugging", "pdb"],
      Sample_Input: "",
      Sample_Output: "(Pdb) n",
      solved: false,
      successRate: "78%",
      submissions: "3.1K"
    },
    {
      id: 145,
      title: "Measure Execution Time",
      description: "Use the time module to measure how long a function takes to execute.",
      difficulty: "Intermediate",
      topics: ["Performance", "Time"],
      Sample_Input: "sum(range(1000000))",
      Sample_Output: "Execution Time: 0.04s",
      solved: false,
      successRate: "79%",
      submissions: "3.3K"
    },
    {
      id: 146,
      title: "Use of Assert Statement",
      description: "Write a program that asserts a number is positive.",
      difficulty: "Intermediate",
      topics: ["Assertions", "Error Handling"],
      Sample_Input: "-5",
      Sample_Output: "AssertionError",
      solved: false,
      successRate: "77%",
      submissions: "3.0K"
    },
    {
      id: 147,
      title: "Use of Global Keyword",
      description: "Demonstrate the use of the global keyword inside a function.",
      difficulty: "Intermediate",
      topics: ["Scope", "Global Variables"],
      Sample_Input: "",
      Sample_Output: "Modified global variable value",
      solved: false,
      successRate: "81%",
      submissions: "3.5K"
    },
    {
      id: 148,
      title: "Use of Nonlocal Keyword",
      description: "Write a nested function and use nonlocal to modify the enclosing variable.",
      difficulty: "Intermediate",
      topics: ["Scope", "Nested Functions"],
      Sample_Input: "",
      Sample_Output: "Modified enclosing variable",
      solved: false,
      successRate: "80%",
      submissions: "3.3K"
    },
    {
      id: 149,
      title: "Command Line Calculator",
      description: "Create a command-line calculator using sys.argv for basic operations.",
      difficulty: "Intermediate",
      topics: ["sys", "CLI", "Arithmetic"],
      Sample_Input: "python calc.py 5 + 3",
      Sample_Output: "8",
      solved: false,
      successRate: "82%",
      submissions: "3.6K"
    },
    {
      id: 150,
      title: "Basic Config File Parser",
      description: "Use configparser module to read values from a configuration file.",
      difficulty: "Intermediate",
      topics: ["ConfigParser", "Modules"],
      Sample_Input: "config.ini",
      Sample_Output: "{'username': 'admin', 'timeout': '30'}",
      solved: false,
      successRate: "79%",
      submissions: "3.2K"
    },

    {
      id: 151,
      title: "Threading Basics",
      description: "Create two threads that print numbers from 1–5 and A–E respectively.",
      difficulty: "Advance",
      topics: ["Threading", "Concurrency"],
      Sample_Input: "",
      Sample_Output: "1 A 2 B 3 C 4 D 5 E",
      solved: false,
      successRate: "68%",
      submissions: "2.8K"
    },
    {
      id: 152,
      title: "Locking in Threads",
      description: "Demonstrate thread synchronization using threading.Lock().",
      difficulty: "Advance",
      topics: ["Threading", "Locks", "Synchronization"],
      Sample_Input: "",
      Sample_Output: "Safe counter: 1000",
      solved: false,
      successRate: "66%",
      submissions: "2.5K"
    },
    {
      id: 153,
      title: "Multiprocessing Example",
      description: "Use multiprocessing to calculate the square of numbers in parallel.",
      difficulty: "Advance",
      topics: ["Multiprocessing", "Parallelism"],
      Sample_Input: "[1,2,3,4]",
      Sample_Output: "[1,4,9,16]",
      solved: false,
      successRate: "69%",
      submissions: "2.9K"
    },
    {
      id: 154,
      title: "Async Await Example",
      description: "Write an async function that fetches data from three URLs concurrently using asyncio.",
      difficulty: "Advance",
      topics: ["Asyncio", "Asynchronous Programming"],
      Sample_Input: "['url1', 'url2', 'url3']",
      Sample_Output: "Fetched url1\nFetched url2\nFetched url3",
      solved: false,
      successRate: "65%",
      submissions: "2.7K"
    },
    {
      id: 155,
      title: "Async Task Scheduling",
      description: "Use asyncio.create_task() to run two coroutines concurrently.",
      difficulty: "Advance",
      topics: ["Asyncio", "Coroutines"],
      Sample_Input: "",
      Sample_Output: "Task A Done\nTask B Done",
      solved: false,
      successRate: "64%",
      submissions: "2.6K"
    },
    {
      id: 156,
      title: "Socket Client-Server",
      description: "Build a simple TCP client-server program using sockets in Python.",
      difficulty: "Advance",
      topics: ["Networking", "Sockets"],
      Sample_Input: "Client: 'Hello Server'",
      Sample_Output: "Server: 'Hello Client'",
      solved: false,
      successRate: "61%",
      submissions: "2.3K"
    },
    {
      id: 157,
      title: "Custom Exception Class",
      description: "Create a custom exception InsufficientBalanceError for a banking app.",
      difficulty: "Advance",
      topics: ["OOP", "Exception Handling"],
      Sample_Input: "Withdraw 1000 from 200",
      Sample_Output: "InsufficientBalanceError: Not enough funds",
      solved: false,
      successRate: "72%",
      submissions: "3.0K"
    },
    {
      id: 158,
      title: "Chained Decorators",
      description: "Create two decorators and apply both to a single function to print execution order.",
      difficulty: "Advance",
      topics: ["Decorators", "Functions"],
      Sample_Input: "",
      Sample_Output: "Decorator1 Start\nDecorator2 Start\nFunction Run",
      solved: false,
      successRate: "69%",
      submissions: "2.8K"
    },
    {
      id: 159,
      title: "Context Manager using Class",
      description: "Implement a custom context manager that opens and closes a file automatically.",
      difficulty: "Advance",
      topics: ["Context Managers", "with Statement"],
      Sample_Input: "test.txt",
      Sample_Output: "File opened\nFile closed",
      solved: false,
      successRate: "68%",
      submissions: "2.7K"
    },
    {
      id: 160,
      title: "Context Manager using @contextlib",
      description: "Use @contextlib.contextmanager decorator to manage a database connection.",
      difficulty: "Advance",
      topics: ["Contextlib", "Resource Management"],
      Sample_Input: "",
      Sample_Output: "Connection Opened\nConnection Closed",
      solved: false,
      successRate: "67%",
      submissions: "2.6K"
    },
    {
      id: 161,
      title: "Pickle Serialization",
      description: "Serialize a dictionary to a file using pickle and deserialize it back.",
      difficulty: "Advance",
      topics: ["Serialization", "Pickle"],
      Sample_Input: "{'name': 'Alice', 'age': 25}",
      Sample_Output: "{'name': 'Alice', 'age': 25}",
      solved: false,
      successRate: "70%",
      submissions: "2.9K"
    },
    {
      id: 162,
      title: "JSON Nested Serialization",
      description: "Write a nested dictionary to a JSON file and read it back.",
      difficulty: "Advance",
      topics: ["JSON", "File Handling"],
      Sample_Input: "{'user': {'name': 'Bob', 'age': 30}}",
      Sample_Output: "{'user': {'name': 'Bob', 'age': 30}}",
      solved: false,
      successRate: "69%",
      submissions: "2.8K"
    },
    {
      id: 163,
      title: "Metaclass Example",
      description: "Implement a metaclass that prints a message whenever a new class is created.",
      difficulty: "Advance",
      topics: ["Metaclasses", "OOP"],
      Sample_Input: "class MyClass(metaclass=Meta): pass",
      Sample_Output: "Creating class MyClass",
      solved: false,
      successRate: "60%",
      submissions: "2.2K"
    },
    {
      id: 164,
      title: "Abstract Class Example",
      description: "Use abc module to define an abstract base class Shape with an abstract method area().",
      difficulty: "Advance",
      topics: ["OOP", "Abstract Classes"],
      Sample_Input: "Circle(5)",
      Sample_Output: "78.5",
      solved: false,
      successRate: "67%",
      submissions: "2.6K"
    },
    {
      id: 165,
      title: "Multiple Inheritance Example",
      description: "Create a class that inherits from two parent classes and calls both constructors.",
      difficulty: "Advance",
      topics: ["OOP", "Inheritance"],
      Sample_Input: "",
      Sample_Output: "ParentA init\nParentB init",
      solved: false,
      successRate: "68%",
      submissions: "2.7K"
    },
    {
      id: 166,
      title: "Operator Overloading",
      description: "Overload the + operator for a Vector class to add two vectors.",
      difficulty: "Advance",
      topics: ["Operator Overloading", "OOP"],
      Sample_Input: "v1(2,3), v2(4,5)",
      Sample_Output: "(6,8)",
      solved: false,
      successRate: "69%",
      submissions: "2.8K"
    },
    {
      id: 167,
      title: "Property Decorator Example",
      description: "Use @property decorator to control access to a private variable.",
      difficulty: "Advance",
      topics: ["OOP", "Properties"],
      Sample_Input: "obj.name = 'Alice'",
      Sample_Output: "Setting name...\nGetting name...\nAlice",
      solved: false,
      successRate: "70%",
      submissions: "2.9K"
    },
    {
      id: 168,
      title: "Memory Usage of Objects",
      description: "Use sys.getsizeof() to print the memory used by different Python objects.",
      difficulty: "Advance",
      topics: ["Memory Management", "sys"],
      Sample_Input: "[1,2,3]",
      Sample_Output: "88 bytes",
      solved: false,
      successRate: "65%",
      submissions: "2.5K"
    },
    {
      id: 169,
      title: "Weak References Example",
      description: "Demonstrate weak references using the weakref module.",
      difficulty: "Advance",
      topics: ["Memory Management", "weakref"],
      Sample_Input: "",
      Sample_Output: "Object collected by GC",
      solved: false,
      successRate: "63%",
      submissions: "2.3K"
    },
    {
      id: 170,
      title: "Garbage Collection Example",
      description: "Use gc module to manually trigger garbage collection.",
      difficulty: "Advance",
      topics: ["Garbage Collection", "Memory Management"],
      Sample_Input: "",
      Sample_Output: "Garbage collected: 3 objects",
      solved: false,
      successRate: "62%",
      submissions: "2.4K"
    },
    {
      id: 171,
      title: "Profiling Execution Time",
      description: "Profile a Python function using cProfile.",
      difficulty: "Advance",
      topics: ["Performance", "Profiling"],
      Sample_Input: "sum(range(100000))",
      Sample_Output: "Execution time: 0.02s",
      solved: false,
      successRate: "64%",
      submissions: "2.5K"
    },
    {
      id: 172,
      title: "Command Line Tool with argparse",
      description: "Build a CLI tool using argparse that takes a filename and prints its size.",
      difficulty: "Advance",
      topics: ["argparse", "CLI"],
      Sample_Input: "python tool.py file.txt",
      Sample_Output: "File Size: 128 bytes",
      solved: false,
      successRate: "68%",
      submissions: "2.8K"
    },
    {
      id: 173,
      title: "HTTP Request with urllib",
      description: "Fetch and print content from a URL using urllib.request.",
      difficulty: "Advance",
      topics: ["Networking", "urllib"],
      Sample_Input: "https://example.com",
      Sample_Output: "<!DOCTYPE html>...",
      solved: false,
      successRate: "66%",
      submissions: "2.6K"
    },
    {
      id: 174,
      title: "File Compression",
      description: "Compress and decompress a file using gzip module.",
      difficulty: "Advance",
      topics: ["File Handling", "Compression"],
      Sample_Input: "data.txt",
      Sample_Output: "Compressed -> data.txt.gz",
      solved: false,
      successRate: "65%",
      submissions: "2.5K"
    },
    {
      id: 175,
      title: "Binary File I/O",
      description: "Read and write binary data to a file using Python's 'wb' and 'rb' modes.",
      difficulty: "Advance",
      topics: ["File Handling", "Binary Files"],
      Sample_Input: "binary.dat",
      Sample_Output: "Data written and read successfully",
      solved: false,
      successRate: "64%",
      submissions: "2.4K"
    },
    {
      id: 176,
      title: "Advanced Regex Grouping",
      description: "Extract all domain names from an email list using regex groups.",
      difficulty: "Advance",
      topics: ["Regex", "Pattern Matching"],
      Sample_Input: "['abc@gmail.com','xyz@yahoo.com']",
      Sample_Output: "['gmail.com','yahoo.com']",
      solved: false,
      successRate: "68%",
      submissions: "2.7K"
    },
    {
      id: 177,
      title: "Regex Lookahead Example",
      description: "Use regex lookahead to find all numbers not followed by a comma.",
      difficulty: "Advance",
      topics: ["Regex", "Advanced Patterns"],
      Sample_Input: "1,2 3,4 5",
      Sample_Output: "['2', '4']",
      solved: false,
      successRate: "65%",
      submissions: "2.5K"
    },
    {
      id: 178,
      title: "Using functools.lru_cache",
      description: "Demonstrate caching results of a recursive Fibonacci function using functools.lru_cache.",
      difficulty: "Advance",
      topics: ["functools", "Caching"],
      Sample_Input: "10",
      Sample_Output: "55",
      solved: false,
      successRate: "67%",
      submissions: "2.6K"
    },
    {
      id: 179,
      title: "Parallel Map with Pool",
      description: "Use multiprocessing.Pool to apply a function to a list in parallel.",
      difficulty: "Advance",
      topics: ["Multiprocessing", "Pool"],
      Sample_Input: "[1,2,3]",
      Sample_Output: "[1,4,9]",
      solved: false,
      successRate: "69%",
      submissions: "2.8K"
    },
    {
      id: 180,
      title: "Thread-safe Queue",
      description: "Use queue.Queue for thread-safe communication between threads.",
      difficulty: "Advance",
      topics: ["Threading", "Queue"],
      Sample_Input: "",
      Sample_Output: "Producer added 1\nConsumer consumed 1",
      solved: false,
      successRate: "68%",
      submissions: "2.7K"
    },
    {
      id: 181,
      title: "Async HTTP Calls with aiohttp",
      description: "Perform concurrent HTTP GET requests using aiohttp.",
      difficulty: "Advance",
      topics: ["Asyncio", "Networking"],
      Sample_Input: "['url1', 'url2']",
      Sample_Output: "Responses fetched successfully",
      solved: false,
      successRate: "63%",
      submissions: "2.4K"
    },
    {
      id: 182,
      title: "SQLite Database Operations",
      description: "Use sqlite3 to create a database, insert data, and query results.",
      difficulty: "Advance",
      topics: ["Database", "SQLite"],
      Sample_Input: "",
      Sample_Output: "Inserted: Alice, Age: 25",
      solved: false,
      successRate: "69%",
      submissions: "2.8K"
    },
    {
      id: 183,
      title: "Decorator with Arguments",
      description: "Create a decorator that accepts arguments to customize logging output.",
      difficulty: "Advance",
      topics: ["Decorators", "Arguments"],
      Sample_Input: "@logger('INFO')",
      Sample_Output: "[INFO] Function started",
      solved: false,
      successRate: "66%",
      submissions: "2.5K"
    },
    {
      id: 184,
      title: "Metaclass Singleton Pattern",
      description: "Implement a Singleton using a metaclass to ensure only one instance exists.",
      difficulty: "Advance",
      topics: ["Metaclasses", "Design Patterns"],
      Sample_Input: "obj1, obj2 = MyClass(), MyClass()",
      Sample_Output: "True",
      solved: false,
      successRate: "61%",
      submissions: "2.3K"
    },
    {
      id: 185,
      title: "Async File Writing",
      description: "Use aiofiles to write data asynchronously to a file.",
      difficulty: "Advance",
      topics: ["Asyncio", "File I/O"],
      Sample_Input: "data.txt, 'Hello World'",
      Sample_Output: "Write complete",
      solved: false,
      successRate: "63%",
      submissions: "2.4K"
    },
    {
      id: 186,
      title: "Advanced CSV Parsing",
      description: "Parse a CSV file and convert rows into dictionaries using DictReader.",
      difficulty: "Advance",
      topics: ["CSV", "File I/O"],
      Sample_Input: "data.csv",
      Sample_Output: "{'name': 'John', 'age': '23'}",
      solved: false,
      successRate: "65%",
      submissions: "2.5K"
    },
    {
      id: 187,
      title: "ThreadPoolExecutor Example",
      description: "Use concurrent.futures.ThreadPoolExecutor to execute tasks concurrently.",
      difficulty: "Advance",
      topics: ["Threading", "Futures"],
      Sample_Input: "[task1, task2]",
      Sample_Output: "Tasks Completed",
      solved: false,
      successRate: "66%",
      submissions: "2.6K"
    },
    {
      id: 188,
      title: "Custom Iterator Class",
      description: "Implement an iterator class that returns Fibonacci numbers up to n.",
      difficulty: "Advance",
      topics: ["Iterators", "Classes"],
      Sample_Input: "n=10",
      Sample_Output: "0 1 1 2 3 5 8",
      solved: false,
      successRate: "67%",
      submissions: "2.7K"
    },
    {
      id: 189,
      title: "Generator Pipeline",
      description: "Chain multiple generators to filter and process a list of numbers.",
      difficulty: "Advance",
      topics: ["Generators", "Pipelines"],
      Sample_Input: "[1,2,3,4,5,6]",
      Sample_Output: "[4,16,36]",
      solved: false,
      successRate: "65%",
      submissions: "2.4K"
    },
    {
      id: 190,
      title: "Memory Profiler Example",
      description: "Use memory_profiler to monitor memory usage of a function.",
      difficulty: "Advance",
      topics: ["Performance", "Memory Profiling"],
      Sample_Input: "",
      Sample_Output: "Memory used: 10.5 MiB",
      solved: false,
      successRate: "62%",
      submissions: "2.3K"
    },
    {
      id: 191,
      title: "Use of Dataclasses",
      description: "Use @dataclass to simplify class creation with auto-generated methods.",
      difficulty: "Advance",
      topics: ["Dataclasses", "OOP"],
      Sample_Input: "Student('John', 21)",
      Sample_Output: "Student(name='John', age=21)",
      solved: false,
      successRate: "68%",
      submissions: "2.8K"
    },

    {
      id: 192,
      title: "Enum Example",
      description: "Use the enum module to define a Color enumeration with RED, GREEN, BLUE.",
      difficulty: "Advance",
      topics: ["Enum", "OOP"],
      Sample_Input: "Color.RED",
      Sample_Output: "1",
      solved: false,
      successRate: "67%",
      submissions: "2.7K"
    },
    {
      id: 193,
      title: "Pathlib File Operations",
      description: "Use pathlib to list all Python files in a directory.",
      difficulty: "Advance",
      topics: ["File Handling", "pathlib"],
      Sample_Input: "path='C:/projects'",
      Sample_Output: "['main.py','test.py']",
      solved: false,
      successRate: "68%",
      submissions: "2.8K"
    },
    {
      id: 194,
      title: "Logging Configuration",
      description: "Configure logging to write messages of level WARNING and above to a file.",
      difficulty: "Advance",
      topics: ["Logging", "File I/O"],
      Sample_Input: "logfile='app.log'",
      Sample_Output: "WARNING: Something went wrong",
      solved: false,
      successRate: "65%",
      submissions: "2.5K"
    },
    {
      id: 195,
      title: "Virtual Environment Script",
      description: "Write a Python script that checks if a virtual environment is active.",
      difficulty: "Advance",
      topics: ["venv", "Environment"],
      Sample_Input: "",
      Sample_Output: "Virtual environment detected: True",
      solved: false,
      successRate: "63%",
      submissions: "2.4K"
    },
    {
      id: 196,
      title: "Subprocess Command Execution",
      description: "Use subprocess module to run a shell command and print its output.",
      difficulty: "Advance",
      topics: ["Subprocess", "System Commands"],
      Sample_Input: "ls",
      Sample_Output: "file1.py\nfile2.py",
      solved: false,
      successRate: "64%",
      submissions: "2.5K"
    },
    {
      id: 197,
      title: "Email Sending Script",
      description: "Send an email using smtplib from a Gmail account (use dummy credentials).",
      difficulty: "Advance",
      topics: ["smtplib", "Networking"],
      Sample_Input: "to='test@example.com', subject='Hi'",
      Sample_Output: "Email sent successfully",
      solved: false,
      successRate: "62%",
      submissions: "2.3K"
    },
    {
      id: 198,
      title: "Thread-safe Counter Class",
      description: "Implement a counter class that safely increments value across multiple threads.",
      difficulty: "Advance",
      topics: ["Threading", "Locks", "OOP"],
      Sample_Input: "",
      Sample_Output: "Final Counter: 1000",
      solved: false,
      successRate: "66%",
      submissions: "2.6K"
    },
    {
      id: 199,
      title: "Custom Import Hook",
      description: "Write a custom import hook that logs each imported module name.",
      difficulty: "Advance",
      topics: ["Import System", "Hooks"],
      Sample_Input: "import math",
      Sample_Output: "Module imported: math",
      solved: false,
      successRate: "59%",
      submissions: "2.1K"
    },
    {
      id: 200,
      title: "Memoryview Example",
      description: "Use memoryview to modify bytes in a bytearray without copying data.",
      difficulty: "Advance",
      topics: ["Memoryview", "Bytes"],
      Sample_Input: "bytearray(b'abc')",
      Sample_Output: "bytearray(b'Abc')",
      solved: false,
      successRate: "61%",
      submissions: "2.3K"
    },

    {
      id: 201,
      title: "Thread Synchronization with Condition",
      description: "Implement a producer-consumer system using threading.Condition.",
      difficulty: "Advance",
      topics: ["Threading", "Condition Variables"],
      Sample_Input: "",
      Sample_Output: "Producer produced 1\nConsumer consumed 1",
      solved: false,
      successRate: "55%",
      submissions: "1.8K"
    },
    {
      id: 202,
      title: "Multiprocessing Shared Memory",
      description: "Use multiprocessing.Value and Array to share data between processes.",
      difficulty: "Advance",
      topics: ["Multiprocessing", "Shared Memory"],
      Sample_Input: "",
      Sample_Output: "Shared count: 10",
      solved: false,
      successRate: "57%",
      submissions: "1.9K"
    },
    {
      id: 203,
      title: "Async Task Cancellation",
      description: "Write an asyncio program that cancels a long-running task gracefully.",
      difficulty: "Advance",
      topics: ["Asyncio", "Task Management"],
      Sample_Input: "",
      Sample_Output: "Task cancelled safely",
      solved: false,
      successRate: "56%",
      submissions: "1.8K"
    },
    {
      id: 204,
      title: "Socket Chat Application",
      description: "Build a real-time chat system using sockets and threading.",
      difficulty: "Advance",
      topics: ["Networking", "Sockets", "Threading"],
      Sample_Input: "Client: 'Hi!'\nServer: 'Hello!'",
      Sample_Output: "Chat successful",
      solved: false,
      successRate: "53%",
      submissions: "1.7K"
    },
    {
      id: 205,
      title: "Metaclass Validation",
      description: "Use metaclass to enforce all subclasses define a 'run()' method.",
      difficulty: "Advance",
      topics: ["Metaclasses", "OOP"],
      Sample_Input: "class A: pass",
      Sample_Output: "TypeError: Must define 'run'",
      solved: false,
      successRate: "52%",
      submissions: "1.6K"
    },
    {
      id: 206,
      title: "Descriptor Custom Validation",
      description: "Implement a descriptor that validates attribute values for type correctness.",
      difficulty: "Advance",
      topics: ["Descriptors", "OOP"],
      Sample_Input: "obj.age = 'twenty'",
      Sample_Output: "TypeError: age must be int",
      solved: false,
      successRate: "58%",
      submissions: "1.9K"
    },
    {
      id: 207,
      title: "Plugin Loader using importlib",
      description: "Dynamically load plugins from a folder using importlib.import_module.",
      difficulty: "Advance",
      topics: ["Importlib", "Dynamic Loading"],
      Sample_Input: "plugins = ['auth', 'logger']",
      Sample_Output: "Loaded plugins: auth, logger",
      solved: false,
      successRate: "59%",
      submissions: "2.0K"
    },
    {
      id: 208,
      title: "Advanced Decorator with State",
      description: "Create a decorator class that counts how many times a function is called.",
      difficulty: "Advance",
      topics: ["Decorators", "State Management"],
      Sample_Input: "add(2,3)\nadd(4,5)",
      Sample_Output: "Function called 2 times",
      solved: false,
      successRate: "60%",
      submissions: "2.1K"
    },
    {
      id: 209,
      title: "Cython Performance Comparison",
      description: "Compare performance between a Python function and its Cython equivalent.",
      difficulty: "Advance",
      topics: ["Performance", "Cython"],
      Sample_Input: "fib(35)",
      Sample_Output: "Python: 1.8s | Cython: 0.2s",
      solved: false,
      successRate: "49%",
      submissions: "1.5K"
    },
    {
      id: 210,
      title: "Async File Downloader",
      description: "Use aiohttp to download multiple files concurrently.",
      difficulty: "Advance",
      topics: ["Asyncio", "Networking"],
      Sample_Input: "['file1.jpg', 'file2.jpg']",
      Sample_Output: "All files downloaded",
      solved: false,
      successRate: "55%",
      submissions: "1.8K"
    },
    {
      id: 211,
      title: "ThreadPool CPU Benchmark",
      description: "Compare performance between ThreadPoolExecutor and ProcessPoolExecutor.",
      difficulty: "Advance",
      topics: ["Threading", "Multiprocessing"],
      Sample_Input: "",
      Sample_Output: "ThreadPool: 0.3s | ProcessPool: 0.15s",
      solved: false,
      successRate: "53%",
      submissions: "1.7K"
    },
    {
      id: 212,
      title: "Async Semaphore",
      description: "Control concurrency using asyncio.Semaphore to limit tasks.",
      difficulty: "Advance",
      topics: ["Asyncio", "Semaphores"],
      Sample_Input: "limit=2, tasks=5",
      Sample_Output: "Only 2 tasks running at once",
      solved: false,
      successRate: "54%",
      submissions: "1.8K"
    },
    {
      id: 213,
      title: "Custom Memory Allocator",
      description: "Simulate a custom memory allocator using bytearray and slicing.",
      difficulty: "Advance",
      topics: ["Memory Management", "Low-level"],
      Sample_Input: "Allocate 10 bytes",
      Sample_Output: "Memory block allocated",
      solved: false,
      successRate: "48%",
      submissions: "1.4K"
    },
    {
      id: 214,
      title: "Thread Communication via Events",
      description: "Use threading.Event for signaling between threads.",
      difficulty: "Advance",
      topics: ["Threading", "Events"],
      Sample_Input: "",
      Sample_Output: "Worker waiting... Event set!",
      solved: false,
      successRate: "56%",
      submissions: "1.9K"
    },
    {
      id: 215,
      title: "Asynchronous Context Manager",
      description: "Create an async context manager using __aenter__ and __aexit__.",
      difficulty: "Advance",
      topics: ["Asyncio", "Context Managers"],
      Sample_Input: "",
      Sample_Output: "Entering async context\nExiting async context",
      solved: false,
      successRate: "55%",
      submissions: "1.8K"
    },
    {
      id: 216,
      title: "Advanced Mock Testing",
      description: "Use unittest.mock to mock an API call in tests.",
      difficulty: "Advance",
      topics: ["Testing", "unittest.mock"],
      Sample_Input: "mocked response: 200",
      Sample_Output: "API called successfully",
      solved: false,
      successRate: "58%",
      submissions: "2.0K"
    },
    {
      id: 217,
      title: "ContextVars Example",
      description: "Use contextvars to maintain variable state across async tasks.",
      difficulty: "Advance",
      topics: ["Asyncio", "ContextVars"],
      Sample_Input: "",
      Sample_Output: "Task1 ID:1, Task2 ID:2",
      solved: false,
      successRate: "54%",
      submissions: "1.8K"
    },
    {
      id: 218,
      title: "Dynamic Class Creation",
      description: "Create classes dynamically at runtime using type().",
      difficulty: "Advance",
      topics: ["Metaprogramming", "Dynamic Classes"],
      Sample_Input: "",
      Sample_Output: "Class created dynamically: DynamicPerson",
      solved: false,
      successRate: "55%",
      submissions: "1.9K"
    },
    {
      id: 219,
      title: "Custom REPL",
      description: "Implement a simple REPL (Read-Eval-Print Loop) in Python.",
      difficulty: "Advance",
      topics: ["I/O", "Evaluation"],
      Sample_Input: "3 + 5",
      Sample_Output: "8",
      solved: false,
      successRate: "52%",
      submissions: "1.7K"
    },
    {
      id: 220,
      title: "Dynamic Import Hook with Logging",
      description: "Intercept and log all imports using sys.meta_path hook.",
      difficulty: "Advance",
      topics: ["Import System", "Hooks"],
      Sample_Input: "import math",
      Sample_Output: "Intercepted import: math",
      solved: false,
      successRate: "51%",
      submissions: "1.6K"
    },
    {
      id: 221,
      title: "Creating a Custom ORM Layer",
      description: "Build a mini ORM that maps Python classes to SQLite tables.",
      difficulty: "Advance",
      topics: ["Database", "ORM", "OOP"],
      Sample_Input: "User('Alice', 25)",
      Sample_Output: "INSERT INTO users VALUES('Alice',25)",
      solved: false,
      successRate: "47%",
      submissions: "1.4K"
    },
    {
      id: 222,
      title: "Asynchronous Producer-Consumer",
      description: "Use asyncio.Queue to implement an async producer-consumer model.",
      difficulty: "Advance",
      topics: ["Asyncio", "Concurrency"],
      Sample_Input: "",
      Sample_Output: "Produced 1, Consumed 1",
      solved: false,
      successRate: "54%",
      submissions: "1.8K"
    },
    {
      id: 223,
      title: "Multiprocessing Manager Dict",
      description: "Share dictionary objects between processes using Manager().",
      difficulty: "Advance",
      topics: ["Multiprocessing", "Manager"],
      Sample_Input: "",
      Sample_Output: "{'count': 5}",
      solved: false,
      successRate: "56%",
      submissions: "1.9K"
    },
    {
      id: 224,
      title: "Building a Mini Package",
      description: "Create a Python package with __init__.py and submodules.",
      difficulty: "Advance",
      topics: ["Modules", "Packaging"],
      Sample_Input: "",
      Sample_Output: "Package imported successfully",
      solved: false,
      successRate: "60%",
      submissions: "2.1K"
    },
    {
      id: 225,
      title: "Descriptors with Property Access",
      description: "Implement a descriptor that logs attribute access operations.",
      difficulty: "Advance",
      topics: ["OOP", "Descriptors"],
      Sample_Input: "obj.value = 5",
      Sample_Output: "Setting value to 5",
      solved: false,
      successRate: "57%",
      submissions: "1.9K"
    },

    {
      id: 226,
      title: "Python Bytecode Disassembler",
      description: "Disassemble a Python function using the dis module and analyze its bytecode.",
      difficulty: "Advance",
      topics: ["Disassembly", "Bytecode"],
      Sample_Input: "def add(a,b): return a+b",
      Sample_Output: "LOAD_FAST 0 (a), LOAD_FAST 1 (b), BINARY_ADD",
      solved: false,
      successRate: "48%",
      submissions: "1.5K"
    },
    {
      id: 227,
      title: "Custom Garbage Collector",
      description: "Simulate garbage collection for reference counting objects.",
      difficulty: "Advance",
      topics: ["Memory Management", "Garbage Collection"],
      Sample_Input: "",
      Sample_Output: "Object deleted after references dropped",
      solved: false,
      successRate: "45%",
      submissions: "1.3K"
    },
    {
      id: 228,
      title: "Async Database Connection Pool",
      description: "Build an async DB connection pool using asyncio.Queue.",
      difficulty: "Advance",
      topics: ["Asyncio", "Database"],
      Sample_Input: "",
      Sample_Output: "Connection borrowed and released",
      solved: false,
      successRate: "52%",
      submissions: "1.7K"
    },
    {
      id: 229,
      title: "Custom Iterator with Lookahead",
      description: "Design an iterator that allows peeking at the next element without consuming it.",
      difficulty: "Advance",
      topics: ["Iterators", "Generators"],
      Sample_Input: "[1,2,3]",
      Sample_Output: "Peek: 2, Next: 2",
      solved: false,
      successRate: "55%",
      submissions: "1.9K"
    },
    {
      id: 230,
      title: "Implement Mini JSON Parser",
      description: "Parse a JSON-like string manually without using the json module.",
      difficulty: "Advance",
      topics: ["Parsing", "Recursion"],
      Sample_Input: "'{\"a\":1,\"b\":2}'",
      Sample_Output: "{'a':1,'b':2}",
      solved: false,
      successRate: "47%",
      submissions: "1.4K"
    },
    {
      id: 231,
      title: "Thread-safe Singleton",
      description: "Implement a Singleton pattern that works safely across threads.",
      difficulty: "Advance",
      topics: ["Threading", "Design Patterns"],
      Sample_Input: "",
      Sample_Output: "Only one instance created",
      solved: false,
      successRate: "53%",
      submissions: "1.7K"
    },
    {
      id: 232,
      title: "Implement Mini HTTP Server",
      description: "Build a minimal HTTP server using socket module.",
      difficulty: "Advance",
      topics: ["Networking", "HTTP"],
      Sample_Input: "GET /index.html",
      Sample_Output: "HTTP/1.1 200 OK",
      solved: false,
      successRate: "49%",
      submissions: "1.5K"
    },
    {
      id: 233,
      title: "LRU Cache from Scratch",
      description: "Implement an LRU Cache using OrderedDict or a custom linked list.",
      difficulty: "Advance",
      topics: ["Caching", "Data Structures"],
      Sample_Input: "cache.put(1,1), cache.get(1)",
      Sample_Output: "1",
      solved: false,
      successRate: "50%",
      submissions: "1.6K"
    },
    {
      id: 234,
      title: "Custom Module Import Tracker",
      description: "Track how many times each module is imported using sys.modules.",
      difficulty: "Advance",
      topics: ["Import System", "Sys"],
      Sample_Input: "import math",
      Sample_Output: "math imported once",
      solved: false,
      successRate: "54%",
      submissions: "1.8K"
    },
    {
      id: 235,
      title: "Data Encryption & Decryption",
      description: "Encrypt and decrypt text using AES (cryptography library).",
      difficulty: "Advance",
      topics: ["Security", "Cryptography"],
      Sample_Input: "Encrypt('hello')",
      Sample_Output: "Decrypted: hello",
      solved: false,
      successRate: "51%",
      submissions: "1.6K"
    },
    {
      id: 236,
      title: "Custom Event Loop",
      description: "Implement a simplified version of an asyncio event loop manually.",
      difficulty: "Advance",
      topics: ["Asyncio", "Event Loop"],
      Sample_Input: "",
      Sample_Output: "Task executed sequentially with custom loop",
      solved: false,
      successRate: "44%",
      submissions: "1.3K"
    },
    {
      id: 237,
      title: "Monkey Patching Demo",
      description: "Demonstrate monkey patching by modifying a module’s function at runtime.",
      difficulty: "Advance",
      topics: ["Runtime", "OOP"],
      Sample_Input: "",
      Sample_Output: "Modified behavior of math.sqrt",
      solved: false,
      successRate: "56%",
      submissions: "2.0K"
    },
    {
      id: 238,
      title: "In-memory Cache with Expiry",
      description: "Create an in-memory cache with automatic key expiry using threading.Timer.",
      difficulty: "Advance",
      topics: ["Threading", "Caching"],
      Sample_Input: "cache.set('x',1,ttl=5)",
      Sample_Output: "Key expired after 5s",
      solved: false,
      successRate: "52%",
      submissions: "1.7K"
    },
    {
      id: 239,
      title: "Interpreter for Mini Language",
      description: "Build a simple interpreter for a mini language with +, -, * operations.",
      difficulty: "Advance",
      topics: ["Parsing", "Compilers"],
      Sample_Input: "2+3*4",
      Sample_Output: "14",
      solved: false,
      successRate: "46%",
      submissions: "1.4K"
    },
    {
      id: 240,
      title: "File System Watcher",
      description: "Monitor a folder for file changes using watchdog library.",
      difficulty: "Advance",
      topics: ["OS", "File System"],
      Sample_Input: "",
      Sample_Output: "Detected change in file test.txt",
      solved: false,
      successRate: "55%",
      submissions: "1.9K"
    },
    {
      id: 241,
      title: "Building Command Line Interface",
      description: "Create a CLI tool using argparse that supports subcommands.",
      difficulty: "Advance",
      topics: ["Argparse", "CLI Tools"],
      Sample_Input: "tool.py --add 5 3",
      Sample_Output: "Result: 8",
      solved: false,
      successRate: "57%",
      submissions: "2.1K"
    },
    {
      id: 242,
      title: "Image Downloader with Retry Logic",
      description: "Download multiple images with retry mechanism on failure.",
      difficulty: "Advance",
      topics: ["Networking", "Requests"],
      Sample_Input: "['img1.jpg','img2.jpg']",
      Sample_Output: "All files downloaded successfully",
      solved: false,
      successRate: "59%",
      submissions: "2.3K"
    },
    {
      id: 243,
      title: "Priority Task Scheduler",
      description: "Implement a priority queue-based task scheduler.",
      difficulty: "Advance",
      topics: ["Data Structures", "Threading"],
      Sample_Input: "Add tasks with priorities 1, 3, 2",
      Sample_Output: "Executed in order 1, 2, 3",
      solved: false,
      successRate: "52%",
      submissions: "1.7K"
    },
    {
      id: 244,
      title: "Database Connection Retry",
      description: "Implement retry mechanism for database connection with exponential backoff.",
      difficulty: "Advance",
      topics: ["Database", "Error Handling"],
      Sample_Input: "",
      Sample_Output: "Connection succeeded after 3 retries",
      solved: false,
      successRate: "50%",
      submissions: "1.6K"
    },
    {
      id: 245,
      title: "Async Rate Limiter",
      description: "Create an async rate limiter to control API request frequency.",
      difficulty: "Advance",
      topics: ["Asyncio", "Networking"],
      Sample_Input: "limit=5 per sec",
      Sample_Output: "Requests throttled properly",
      solved: false,
      successRate: "53%",
      submissions: "1.8K"
    },
    {
      id: 246,
      title: "Socket-based File Transfer",
      description: "Implement a file transfer system using sockets.",
      difficulty: "Advance",
      topics: ["Networking", "Sockets"],
      Sample_Input: "send file.txt",
      Sample_Output: "File transferred successfully",
      solved: false,
      successRate: "49%",
      submissions: "1.5K"
    },
    {
      id: 247,
      title: "Decorator for Timeout Control",
      description: "Write a decorator that times out a long-running function after N seconds.",
      difficulty: "Advance",
      topics: ["Decorators", "Threading"],
      Sample_Input: "",
      Sample_Output: "TimeoutError: Function exceeded 5s",
      solved: false,
      successRate: "51%",
      submissions: "1.6K"
    },
    {
      id: 248,
      title: "Build Simple Task Queue System",
      description: "Simulate a distributed task queue like Celery using multiprocessing.Queue.",
      difficulty: "Advance",
      topics: ["Multiprocessing", "Queues"],
      Sample_Input: "",
      Sample_Output: "Task executed by worker",
      solved: false,
      successRate: "47%",
      submissions: "1.4K"
    },
    {
      id: 249,
      title: "AST Tree Modification",
      description: "Parse and modify Python source code using the ast module.",
      difficulty: "Advance",
      topics: ["AST", "Code Analysis"],
      Sample_Input: "x=1+2",
      Sample_Output: "Modified AST: x=1*2",
      solved: false,
      successRate: "45%",
      submissions: "1.3K"
    },
    {
      id: 250,
      title: "Mini Python Profiler",
      description: "Build a simple function execution profiler using sys.setprofile.",
      difficulty: "Advance",
      topics: ["Profiling", "Performance"],
      Sample_Input: "run_profiler(add,5,3)",
      Sample_Output: "add executed in 0.0001s",
      solved: false,
      successRate: "48%",
      submissions: "1.5K"
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
            <div className="card-header-row">
              <div className="question-number">#{question.id}</div>
              {question.solved && (
                <div className="solved-badge">
                  <span className="check-icon">✓</span> Solved
                </div>
              )}
            </div>

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
                      language: question.language ? question.language : "Python",
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

export default PracticeQuestions;