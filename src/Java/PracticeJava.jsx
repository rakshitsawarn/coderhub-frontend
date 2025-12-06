import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/java_css/Practice_java.css";
import { Link } from "react-router-dom";


function PracticeQuestions() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);


  const allQuestions = [
    {
      id: 1,
      title: "Print Hello World",
      description: "Write a Java program that prints 'Hello World' to the console.",
      difficulty: "Easy",
      topics: ["Basic Syntax", "Output"],
      Sample_Input: "None",
      Sample_Output: "Hello World",
      solved: false,
      successRate: "98%",
      submissions: "18.5K"
    },
    {
      id: 2,
      title: "Add Two Numbers",
      description: "Write a Java program that reads two integers and prints their sum.",
      difficulty: "Easy",
      topics: ["Input", "Operators", "Basic Syntax"],
      Sample_Input: "5 7",
      Sample_Output: "12",
      solved: false,
      successRate: "96%",
      submissions: "16.2K"
    },
    {
      id: 3,
      title: "Check Even or Odd",
      description: "Write a Java program that reads an integer and prints 'Even' or 'Odd'.",
      difficulty: "Easy",
      topics: ["Conditionals", "Operators"],
      Sample_Input: "8",
      Sample_Output: "Even",
      solved: false,
      successRate: "95%",
      submissions: "14.9K"
    },
    {
      id: 4,
      title: "Maximum of Three Numbers",
      description: "Write a Java program that finds the maximum among three integers.",
      difficulty: "Easy",
      topics: ["Conditionals", "Operators"],
      Sample_Input: "4 9 7",
      Sample_Output: "9",
      solved: false,
      successRate: "93%",
      submissions: "13.8K"
    },
    {
      id: 5,
      title: "Sum of Array Elements",
      description: "Write a Java program that calculates the sum of elements in an integer array.",
      difficulty: "Easy",
      topics: ["Arrays", "Loops"],
      Sample_Input: "[1, 2, 3, 4]",
      Sample_Output: "10",
      solved: false,
      successRate: "94%",
      submissions: "15.0K"
    },
    {
      id: 6,
      title: "Factorial (Iterative)",
      description: "Write a Java program to compute the factorial of a given non-negative integer iteratively.",
      difficulty: "Easy",
      topics: ["Loops", "Math"],
      Sample_Input: "5",
      Sample_Output: "120",
      solved: false,
      successRate: "92%",
      submissions: "13.2K"
    },
    {
      id: 7,
      title: "Reverse a String",
      description: "Write a Java program that reverses a given input string.",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "Java",
      Sample_Output: "avaJ",
      solved: false,
      successRate: "93%",
      submissions: "14.0K"
    },
    {
      id: 8,
      title: "Count Vowels in a String",
      description: "Write a Java program to count vowels (a,e,i,o,u) in a string (case-insensitive).",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "Hello World",
      Sample_Output: "3",
      solved: false,
      successRate: "91%",
      submissions: "12.7K"
    },
    {
      id: 9,
      title: "Leap Year Checker",
      description: "Write a Java program to check whether a given year is a leap year using Gregorian rules.",
      difficulty: "Easy",
      topics: ["Conditionals", "Date/Time"],
      Sample_Input: "2024",
      Sample_Output: "Leap Year",
      solved: false,
      successRate: "92%",
      submissions: "13.5K"
    },
    {
      id: 10,
      title: "Swap Two Numbers Without Temp",
      description: "Write a Java program to swap two integers without using a third variable.",
      difficulty: "Easy",
      topics: ["Operators", "Variables"],
      Sample_Input: "5 7",
      Sample_Output: "7 5",
      solved: false,
      successRate: "90%",
      submissions: "12.9K"
    },
    {
      id: 11,
      title: "Print Numbers 1 to N",
      description: "Write a Java program that prints numbers from 1 to N (inclusive).",
      difficulty: "Easy",
      topics: ["Loops"],
      Sample_Input: "5",
      Sample_Output: "1 2 3 4 5",
      solved: false,
      successRate: "95%",
      submissions: "15.6K"
    },
    {
      id: 12,
      title: "Multiplication Table",
      description: "Write a Java program to print multiplication table of a given integer up to 10.",
      difficulty: "Easy",
      topics: ["Loops", "Formatting"],
      Sample_Input: "3",
      Sample_Output: "3 6 9 12 15 18 21 24 27 30",
      solved: false,
      successRate: "93%",
      submissions: "13.7K"
    },
    {
      id: 13,
      title: "Simple Interest Calculator",
      description: "Write a Java program to compute simple interest given principal, rate, and time.",
      difficulty: "Easy",
      topics: ["Math", "Input/Output"],
      Sample_Input: "1000 5 2",
      Sample_Output: "100.0",
      solved: false,
      successRate: "91%",
      submissions: "12.4K"
    },
    {
      id: 14,
      title: "Positive, Negative or Zero",
      description: "Write a Java program that checks whether a number is positive, negative, or zero.",
      difficulty: "Easy",
      topics: ["Conditionals"],
      Sample_Input: "-3",
      Sample_Output: "Negative",
      solved: false,
      successRate: "92%",
      submissions: "12.8K"
    },
    {
      id: 15,
      title: "Print Even Numbers up to N",
      description: "Write a Java program to print all even numbers between 1 and N.",
      difficulty: "Easy",
      topics: ["Loops"],
      Sample_Input: "10",
      Sample_Output: "2 4 6 8 10",
      solved: false,
      successRate: "94%",
      submissions: "14.1K"
    },
    {
      id: 16,
      title: "Print Odd Numbers up to N",
      description: "Write a Java program to print all odd numbers between 1 and N.",
      difficulty: "Easy",
      topics: ["Loops"],
      Sample_Input: "10",
      Sample_Output: "1 3 5 7 9",
      solved: false,
      successRate: "93%",
      submissions: "13.9K"
    },
    {
      id: 17,
      title: "Prime Number Checker",
      description: "Write a Java program to check if a number is prime (efficient up to sqrt(n)).",
      difficulty: "Easy",
      topics: ["Math", "Loops"],
      Sample_Input: "7",
      Sample_Output: "Prime",
      solved: false,
      successRate: "90%",
      submissions: "12.3K"
    },
    {
      id: 18,
      title: "GCD (Euclidean Algorithm)",
      description: "Write a Java program to compute the Greatest Common Divisor of two integers using Euclid's algorithm.",
      difficulty: "Easy",
      topics: ["Math", "Functions"],
      Sample_Input: "12 15",
      Sample_Output: "3",
      solved: false,
      successRate: "91%",
      submissions: "12.6K"
    },
    {
      id: 19,
      title: "LCM of Two Numbers",
      description: "Write a Java program to find the Least Common Multiple of two integers.",
      difficulty: "Easy",
      topics: ["Math", "Functions"],
      Sample_Input: "4 5",
      Sample_Output: "20",
      solved: false,
      successRate: "90%",
      submissions: "12.0K"
    },
    {
      id: 20,
      title: "Palindrome Number",
      description: "Write a Java program to check whether an integer is a palindrome.",
      difficulty: "Easy",
      topics: ["Loops", "Math"],
      Sample_Input: "121",
      Sample_Output: "Palindrome",
      solved: false,
      successRate: "92%",
      submissions: "12.9K"
    },
    {
      id: 21,
      title: "Reverse an Array",
      description: "Write a Java program to reverse the elements of an integer array in-place.",
      difficulty: "Easy",
      topics: ["Arrays", "Two Pointers"],
      Sample_Input: "[1, 2, 3, 4]",
      Sample_Output: "[4, 3, 2, 1]",
      solved: false,
      successRate: "92%",
      submissions: "13.1K"
    },
    {
      id: 22,
      title: "Minimum Element in Array",
      description: "Write a Java program to find the minimum element in an integer array.",
      difficulty: "Easy",
      topics: ["Arrays", "Loops"],
      Sample_Input: "[5, 2, 9, 1]",
      Sample_Output: "1",
      solved: false,
      successRate: "91%",
      submissions: "12.4K"
    },
    {
      id: 23,
      title: "Maximum Element in Array",
      description: "Write a Java program to find the maximum element in an integer array.",
      difficulty: "Easy",
      topics: ["Arrays", "Loops"],
      Sample_Input: "[5, 2, 9, 1]",
      Sample_Output: "9",
      solved: false,
      successRate: "91%",
      submissions: "12.6K"
    },
    {
      id: 24,
      title: "Sum 1..N (Formula & Loop)",
      description: "Write a Java program to compute the sum of numbers from 1 to N (show both loop and formula solutions).",
      difficulty: "Easy",
      topics: ["Math", "Loops", "Optimization"],
      Sample_Input: "5",
      Sample_Output: "15",
      solved: false,
      successRate: "93%",
      submissions: "13.8K"
    },
    {
      id: 25,
      title: "Fibonacci Series (Iterative)",
      description: "Write a Java program to print first N Fibonacci numbers using iteration.",
      difficulty: "Easy",
      topics: ["Loops", "Sequences"],
      Sample_Input: "5",
      Sample_Output: "0 1 1 2 3",
      solved: false,
      successRate: "92%",
      submissions: "13.0K"
    },
    {
      id: 26,
      title: "Armstrong Number",
      description: "Write a Java program to check whether a given number is an Armstrong number.",
      difficulty: "Easy",
      topics: ["Math", "Loops"],
      Sample_Input: "153",
      Sample_Output: "Armstrong",
      solved: false,
      successRate: "90%",
      submissions: "11.7K"
    },
    {
      id: 27,
      title: "Count Digits in Number",
      description: "Write a Java program to count number of digits in a given integer without converting to string.",
      difficulty: "Easy",
      topics: ["Math", "Loops"],
      Sample_Input: "12345",
      Sample_Output: "5",
      solved: false,
      successRate: "91%",
      submissions: "12.1K"
    },
    {
      id: 28,
      title: "Print Numbers in Reverse (N..1)",
      description: "Write a Java program that prints numbers from N down to 1.",
      difficulty: "Easy",
      topics: ["Loops"],
      Sample_Input: "5",
      Sample_Output: "5 4 3 2 1",
      solved: false,
      successRate: "92%",
      submissions: "12.8K"
    },
    {
      id: 29,
      title: "ASCII Value of Character",
      description: "Write a Java program to print ASCII value of an input character.",
      difficulty: "Easy",
      topics: ["Chars", "Type Conversion"],
      Sample_Input: "A",
      Sample_Output: "65",
      solved: false,
      successRate: "93%",
      submissions: "12.5K"
    },
    {
      id: 30,
      title: "Vowel or Consonant",
      description: "Write a Java program to determine whether a character is a vowel or consonant (case-insensitive).",
      difficulty: "Easy",
      topics: ["Chars", "Conditionals"],
      Sample_Input: "e",
      Sample_Output: "Vowel",
      solved: false,
      successRate: "91%",
      submissions: "11.9K"
    },
    {
      id: 31,
      title: "Count Words in a String",
      description: "Write a Java program to count the number of words in a given string (words separated by spaces).",
      difficulty: "Easy",
      topics: ["Strings", "Parsing"],
      Sample_Input: "Hello world from Java",
      Sample_Output: "4",
      solved: false,
      successRate: "92%",
      submissions: "12.2K"
    },
    {
      id: 32,
      title: "Check Substring Presence",
      description: "Write a Java program to check if a given substring exists within a string.",
      difficulty: "Easy",
      topics: ["Strings", "Searching"],
      Sample_Input: "Java, ava",
      Sample_Output: "Yes",
      solved: false,
      successRate: "91%",
      submissions: "11.8K"
    },
    {
      id: 33,
      title: "Celsius to Fahrenheit",
      description: "Write a Java program to convert Celsius temperature to Fahrenheit.",
      difficulty: "Easy",
      topics: ["Math", "I/O"],
      Sample_Input: "25",
      Sample_Output: "77.0",
      solved: false,
      successRate: "92%",
      submissions: "12.0K"
    },
    {
      id: 34,
      title: "Fahrenheit to Celsius",
      description: "Write a Java program to convert Fahrenheit temperature to Celsius.",
      difficulty: "Easy",
      topics: ["Math", "I/O"],
      Sample_Input: "77",
      Sample_Output: "25.0",
      solved: false,
      successRate: "92%",
      submissions: "12.0K"
    },
    {
      id: 35,
      title: "Print Each Character on New Line",
      description: "Write a Java program that prints each character of a string on a separate line.",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "Java",
      Sample_Output: "J\na\nv\na",
      solved: false,
      successRate: "91%",
      submissions: "11.7K"
    },
    {
      id: 36,
      title: "Sum of Even Numbers up to N",
      description: "Write a Java program to calculate the sum of all even numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops", "Math"],
      Sample_Input: "10",
      Sample_Output: "30",
      solved: false,
      successRate: "90%",
      submissions: "11.5K"
    },
    {
      id: 37,
      title: "Sum of Odd Numbers up to N",
      description: "Write a Java program to calculate the sum of all odd numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops", "Math"],
      Sample_Input: "10",
      Sample_Output: "25",
      solved: false,
      successRate: "90%",
      submissions: "11.4K"
    },
    {
      id: 38,
      title: "Print First N Multiples",
      description: "Write a Java program to print first N multiples of a given integer.",
      difficulty: "Easy",
      topics: ["Loops"],
      Sample_Input: "3 5",
      Sample_Output: "3 6 9 12 15",
      solved: false,
      successRate: "91%",
      submissions: "11.6K"
    },
    {
      id: 39,
      title: "Positive Even Number Check",
      description: "Write a Java program to check if a number is both positive and even.",
      difficulty: "Easy",
      topics: ["Conditionals", "Operators"],
      Sample_Input: "8",
      Sample_Output: "Yes",
      solved: false,
      successRate: "90%",
      submissions: "11.3K"
    },
    {
      id: 40,
      title: "Print Index and Value of Array",
      description: "Write a Java program to print index and value of each element in an integer array.",
      difficulty: "Easy",
      topics: ["Arrays", "Loops"],
      Sample_Input: "[10, 20, 30]",
      Sample_Output: "0 10\n1 20\n2 30",
      solved: false,
      successRate: "91%",
      submissions: "11.7K"
    },
    {
      id: 41,
      title: "Divisible by 5 Check",
      description: "Write a Java program to check if an integer is divisible by 5.",
      difficulty: "Easy",
      topics: ["Operators", "Conditionals"],
      Sample_Input: "25",
      Sample_Output: "Yes",
      solved: false,
      successRate: "90%",
      submissions: "11.2K"
    },
    {
      id: 42,
      title: "Divisible by 3 and 5 Check",
      description: "Write a Java program to determine if a number is divisible by both 3 and 5.",
      difficulty: "Easy",
      topics: ["Operators", "Conditionals"],
      Sample_Input: "15",
      Sample_Output: "Yes",
      solved: false,
      successRate: "91%",
      submissions: "11.5K"
    },
    {
      id: 43,
      title: "Characters at Even Positions",
      description: "Write a Java program that prints characters at even indices (0-based) of a string.",
      difficulty: "Easy",
      topics: ["Strings", "Indexing"],
      Sample_Input: "Java",
      Sample_Output: "J v",
      solved: false,
      successRate: "90%",
      submissions: "11.1K"
    },
    {
      id: 44,
      title: "Characters at Odd Positions",
      description: "Write a Java program that prints characters at odd indices (0-based) of a string.",
      difficulty: "Easy",
      topics: ["Strings", "Indexing"],
      Sample_Input: "Java",
      Sample_Output: "a a",
      solved: false,
      successRate: "90%",
      submissions: "11.0K"
    },
    {
      id: 45,
      title: "Length of String Without length()",
      description: "Write a Java program to compute length of a string without using String.length().",
      difficulty: "Easy",
      topics: ["Strings", "Loops"],
      Sample_Input: "Java",
      Sample_Output: "4",
      solved: false,
      successRate: "91%",
      submissions: "11.3K"
    },
    {
      id: 46,
      title: "Print List in Reverse Order",
      description: "Write a Java program to print elements of an array in reverse order.",
      difficulty: "Easy",
      topics: ["Arrays", "Loops"],
      Sample_Input: "[1, 2, 3, 4]",
      Sample_Output: "4 3 2 1",
      solved: false,
      successRate: "91%",
      submissions: "11.4K"
    },
    {
      id: 47,
      title: "Check If Array Is Empty",
      description: "Write a Java program to check if an integer array is empty (length 0).",
      difficulty: "Easy",
      topics: ["Arrays", "Conditionals"],
      Sample_Input: "[]",
      Sample_Output: "Empty",
      solved: false,
      successRate: "90%",
      submissions: "10.9K"
    },
    {
      id: 48,
      title: "Print First N Natural Numbers",
      description: "Write a Java program to print first N natural numbers starting from 1.",
      difficulty: "Easy",
      topics: ["Loops"],
      Sample_Input: "5",
      Sample_Output: "1 2 3 4 5",
      solved: false,
      successRate: "92%",
      submissions: "11.6K"
    },
    {
      id: 49,
      title: "Print Squares 1..N",
      description: "Write a Java program to print squares of numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops", "Math"],
      Sample_Input: "5",
      Sample_Output: "1 4 9 16 25",
      solved: false,
      successRate: "91%",
      submissions: "11.3K"
    },
    {
      id: 50,
      title: "Print Cubes 1..N",
      description: "Write a Java program to print cubes of numbers from 1 to N.",
      difficulty: "Easy",
      topics: ["Loops", "Math"],
      Sample_Input: "5",
      Sample_Output: "1 8 27 64 125",
      solved: false,
      successRate: "91%",
      submissions: "11.2K"
    },

    {
      id: 51,
      title: "Create a Class and Object",
      description: "Write a Java program to create a class 'Car' with attributes and create an object to access them.",
      difficulty: "Easy",
      topics: ["OOP", "Classes", "Objects"],
      Sample_Input: "Car: Tesla, Model S",
      Sample_Output: "Car Name: Tesla, Model: S",
      solved: false,
      successRate: "97%",
      submissions: "14.8K"
    },
    {
      id: 52,
      title: "Constructor Example",
      description: "Write a Java program that demonstrates the use of a parameterized constructor.",
      difficulty: "Easy",
      topics: ["OOP", "Constructors"],
      Sample_Input: "Employee John 50000",
      Sample_Output: "Employee Name: John, Salary: 50000",
      solved: false,
      successRate: "95%",
      submissions: "12.4K"
    },
    {
      id: 53,
      title: "Default Constructor Demo",
      description: "Write a Java program with a class that has a default constructor displaying a message.",
      difficulty: "Easy",
      topics: ["OOP", "Constructors"],
      Sample_Input: "None",
      Sample_Output: "Default Constructor Invoked",
      solved: false,
      successRate: "96%",
      submissions: "13.1K"
    },
    {
      id: 54,
      title: "Method Overloading Example",
      description: "Write a Java program that demonstrates method overloading with multiple add() methods.",
      difficulty: "Intermediate",
      topics: ["OOP", "Polymorphism"],
      Sample_Input: "add(2,3), add(2.5,3.5)",
      Sample_Output: "5, 6.0",
      solved: false,
      successRate: "94%",
      submissions: "15.7K"
    },
    {
      id: 55,
      title: "Static Keyword Example",
      description: "Write a Java program to demonstrate static variables and static methods.",
      difficulty: "Intermediate",
      topics: ["OOP", "Static"],
      Sample_Input: "5, 10",
      Sample_Output: "Sum: 15",
      solved: false,
      successRate: "93%",
      submissions: "13.9K"
    },
    {
      id: 56,
      title: "Encapsulation Example",
      description: "Create a class with private variables and getter-setter methods to implement encapsulation.",
      difficulty: "Intermediate",
      topics: ["OOP", "Encapsulation"],
      Sample_Input: "Name: Alice, Age: 25",
      Sample_Output: "Name: Alice, Age: 25",
      solved: false,
      successRate: "94%",
      submissions: "12.8K"
    },
    {
      id: 57,
      title: "Inheritance Example",
      description: "Write a Java program that shows single inheritance between classes Animal and Dog.",
      difficulty: "Intermediate",
      topics: ["OOP", "Inheritance"],
      Sample_Input: "Dog barks",
      Sample_Output: "Animal sound\nDog barks",
      solved: false,
      successRate: "93%",
      submissions: "11.4K"
    },
    {
      id: 58,
      title: "Multilevel Inheritance Example",
      description: "Create classes A, B, and C demonstrating multilevel inheritance.",
      difficulty: "Intermediate",
      topics: ["OOP", "Inheritance"],
      Sample_Input: "Object of class C",
      Sample_Output: "Class A → Class B → Class C",
      solved: false,
      successRate: "92%",
      submissions: "10.2K"
    },
    {
      id: 59,
      title: "Method Overriding Example",
      description: "Write a Java program that demonstrates method overriding with superclass and subclass.",
      difficulty: "Intermediate",
      topics: ["OOP", "Polymorphism"],
      Sample_Input: "Display() method call",
      Sample_Output: "Method of subclass",
      solved: false,
      successRate: "93%",
      submissions: "12.7K"
    },
    {
      id: 60,
      title: "Super Keyword Example",
      description: "Demonstrate use of 'super' keyword to access parent class variables and methods.",
      difficulty: "Intermediate",
      topics: ["OOP", "Inheritance", "Super"],
      Sample_Input: "Parent and Child class call",
      Sample_Output: "Parent Method\nChild Method",
      solved: false,
      successRate: "92%",
      submissions: "11.5K"
    },
    {
      id: 61,
      title: "Final Keyword Example",
      description: "Write a program to demonstrate the use of final variables, methods, and classes.",
      difficulty: "Intermediate",
      topics: ["OOP", "Final Keyword"],
      Sample_Input: "None",
      Sample_Output: "Final keyword behavior displayed",
      solved: false,
      successRate: "91%",
      submissions: "10.9K"
    },
    {
      id: 62,
      title: "Abstract Class Example",
      description: "Write a Java program that demonstrates abstraction using abstract classes.",
      difficulty: "Intermediate",
      topics: ["OOP", "Abstraction"],
      Sample_Input: "Object of subclass",
      Sample_Output: "Abstract method implemented",
      solved: false,
      successRate: "91%",
      submissions: "11.8K"
    },
    {
      id: 63,
      title: "Interface Implementation Example",
      description: "Write a program that implements multiple interfaces in one class.",
      difficulty: "Intermediate",
      topics: ["OOP", "Interface"],
      Sample_Input: "Interface1 + Interface2",
      Sample_Output: "Methods from both interfaces executed",
      solved: false,
      successRate: "92%",
      submissions: "12.3K"
    },
    {
      id: 64,
      title: "Multiple Inheritance via Interfaces",
      description: "Demonstrate multiple inheritance using interfaces in Java.",
      difficulty: "Intermediate",
      topics: ["OOP", "Interfaces", "Inheritance"],
      Sample_Input: "Interface1, Interface2",
      Sample_Output: "Implemented methods of both interfaces",
      solved: false,
      successRate: "90%",
      submissions: "10.6K"
    },
    {
      id: 65,
      title: "Polymorphism Example",
      description: "Demonstrate runtime polymorphism using method overriding and upcasting.",
      difficulty: "Intermediate",
      topics: ["OOP", "Polymorphism"],
      Sample_Input: "Parent p = new Child()",
      Sample_Output: "Child method executed",
      solved: false,
      successRate: "91%",
      submissions: "10.9K"
    },
    {
      id: 66,
      title: "Aggregation Example",
      description: "Demonstrate aggregation relationship between two classes (Has-A relationship).",
      difficulty: "Intermediate",
      topics: ["OOP", "Relationships"],
      Sample_Input: "Student → Address",
      Sample_Output: "Student has an Address",
      solved: false,
      successRate: "91%",
      submissions: "11.1K"
    },
    {
      id: 67,
      title: "Composition Example",
      description: "Demonstrate composition relationship between classes in Java.",
      difficulty: "Intermediate",
      topics: ["OOP", "Composition"],
      Sample_Input: "Library contains Books",
      Sample_Output: "Composition implemented successfully",
      solved: false,
      successRate: "90%",
      submissions: "9.7K"
    },
    {
      id: 68,
      title: "This Keyword Example",
      description: "Demonstrate use of 'this' keyword to refer to current object instance.",
      difficulty: "Easy",
      topics: ["OOP", "This Keyword"],
      Sample_Input: "None",
      Sample_Output: "Accessed current object variables",
      solved: false,
      successRate: "95%",
      submissions: "14.4K"
    },
    {
      id: 69,
      title: "Dynamic Method Dispatch Example",
      description: "Write a Java program demonstrating dynamic method dispatch using superclass references.",
      difficulty: "Intermediate",
      topics: ["OOP", "Polymorphism"],
      Sample_Input: "Parent ref = new Child()",
      Sample_Output: "Child class method executed",
      solved: false,
      successRate: "91%",
      submissions: "10.2K"
    },
    {
      id: 70,
      title: "Inner Class Example",
      description: "Write a Java program that demonstrates the use of inner and nested classes.",
      difficulty: "Intermediate",
      topics: ["OOP", "Inner Classes"],
      Sample_Input: "Outer.Inner.display()",
      Sample_Output: "Message from Inner class",
      solved: false,
      successRate: "92%",
      submissions: "11.4K"
    },
    {
      id: 71,
      title: "Anonymous Inner Class Example",
      description: "Demonstrate anonymous inner classes implementing an interface.",
      difficulty: "Intermediate",
      topics: ["OOP", "Anonymous Classes"],
      Sample_Input: "Interface method call",
      Sample_Output: "Anonymous class executed",
      solved: false,
      successRate: "91%",
      submissions: "10.3K"
    },
    {
      id: 72,
      title: "Abstract Interface Example",
      description: "Demonstrate combination of abstract class and interface in one program.",
      difficulty: "Hard",
      topics: ["OOP", "Abstraction", "Interfaces"],
      Sample_Input: "Derived class object",
      Sample_Output: "Abstract and Interface methods implemented",
      solved: false,
      successRate: "88%",
      submissions: "9.1K"
    },
    {
      id: 73,
      title: "Enum Example",
      description: "Write a Java program to define an enum and iterate through its values.",
      difficulty: "Easy",
      topics: ["OOP", "Enums"],
      Sample_Input: "Days of Week",
      Sample_Output: "MONDAY, TUESDAY, ...",
      solved: false,
      successRate: "94%",
      submissions: "11.7K"
    },
    {
      id: 74,
      title: "Inheritance Constructor Chain",
      description: "Demonstrate constructor chaining in inheritance using super().",
      difficulty: "Intermediate",
      topics: ["OOP", "Constructors", "Inheritance"],
      Sample_Input: "Class hierarchy",
      Sample_Output: "Parent → Child → SubChild",
      solved: false,
      successRate: "90%",
      submissions: "10.5K"
    },
    {
      id: 75,
      title: "Object Cloning Example",
      description: "Write a program that demonstrates object cloning using Cloneable interface.",
      difficulty: "Hard",
      topics: ["OOP", "Cloning"],
      Sample_Input: "Clone object of class",
      Sample_Output: "Original and cloned object created",
      solved: false,
      successRate: "87%",
      submissions: "8.6K"
    },
    {
      id: 76,
      title: "toString() Method Override",
      description: "Override toString() method in a class to display custom information.",
      difficulty: "Easy",
      topics: ["OOP", "Method Overriding"],
      Sample_Input: "Person{name='John', age=30}",
      Sample_Output: "Name: John, Age: 30",
      solved: false,
      successRate: "94%",
      submissions: "11.9K"
    },
    {
      id: 77,
      title: "equals() and hashCode() Example",
      description: "Override equals() and hashCode() for proper object comparison.",
      difficulty: "Hard",
      topics: ["OOP", "Object Comparison"],
      Sample_Input: "obj1.equals(obj2)",
      Sample_Output: "Objects are equal",
      solved: false,
      successRate: "88%",
      submissions: "9.8K"
    },
    {
      id: 78,
      title: "Static Block Example",
      description: "Write a program demonstrating the use of static initialization blocks.",
      difficulty: "Intermediate",
      topics: ["OOP", "Static Blocks"],
      Sample_Input: "None",
      Sample_Output: "Static block executed before main",
      solved: false,
      successRate: "93%",
      submissions: "12.6K"
    },
    {
      id: 79,
      title: "Instance Initializer Block Example",
      description: "Demonstrate instance initializer block execution order.",
      difficulty: "Intermediate",
      topics: ["OOP", "Initializer Blocks"],
      Sample_Input: "Object creation",
      Sample_Output: "Instance block executed before constructor",
      solved: false,
      successRate: "91%",
      submissions: "11.2K"
    },
    {
      id: 80,
      title: "Wrapper Classes Example",
      description: "Convert primitive types into objects using Wrapper classes.",
      difficulty: "Easy",
      topics: ["OOP", "Wrapper Classes"],
      Sample_Input: "int x = 10",
      Sample_Output: "Integer object: 10",
      solved: false,
      successRate: "95%",
      submissions: "13.8K"
    },
    {
      id: 81,
      title: "Autoboxing and Unboxing",
      description: "Demonstrate autoboxing and unboxing of primitive types.",
      difficulty: "Easy",
      topics: ["OOP", "Wrapper Classes"],
      Sample_Input: "int → Integer",
      Sample_Output: "Boxed and Unboxed values",
      solved: false,
      successRate: "95%",
      submissions: "14.1K"
    },
    {
      id: 82,
      title: "Finalize Method Example",
      description: "Demonstrate finalize() method before object garbage collection.",
      difficulty: "Hard",
      topics: ["OOP", "Garbage Collection"],
      Sample_Input: "Object destroyed",
      Sample_Output: "Finalize method executed",
      solved: false,
      successRate: "87%",
      submissions: "8.3K"
    },
    {
      id: 83,
      title: "Object Comparison Using Comparator",
      description: "Use Comparator to compare custom objects.",
      difficulty: "Intermediate",
      topics: ["OOP", "Comparator"],
      Sample_Input: "Sort employees by salary",
      Sample_Output: "Sorted employee list",
      solved: false,
      successRate: "91%",
      submissions: "10.8K"
    },
    {
      id: 84,
      title: "Object Comparison Using Comparable",
      description: "Implement Comparable to sort objects by name.",
      difficulty: "Intermediate",
      topics: ["OOP", "Comparable"],
      Sample_Input: "List of Students",
      Sample_Output: "Students sorted by name",
      solved: false,
      successRate: "91%",
      submissions: "10.5K"
    },
    {
      id: 85,
      title: "Nested Interface Example",
      description: "Create and implement a nested interface inside a class.",
      difficulty: "Hard",
      topics: ["OOP", "Nested Interfaces"],
      Sample_Input: "Outer.Inner",
      Sample_Output: "Nested interface implemented",
      solved: false,
      successRate: "88%",
      submissions: "9.2K"
    },
    {
      id: 86,
      title: "Anonymous Object Example",
      description: "Demonstrate the use of anonymous objects in method calling.",
      difficulty: "Easy",
      topics: ["OOP", "Anonymous Objects"],
      Sample_Input: "new Student().display()",
      Sample_Output: "Anonymous object used",
      solved: false,
      successRate: "94%",
      submissions: "11.6K"
    },
    {
      id: 87,
      title: "Static Nested Class Example",
      description: "Demonstrate the use of static nested classes.",
      difficulty: "Intermediate",
      topics: ["OOP", "Static Nested Classes"],
      Sample_Input: "Outer.Inner.display()",
      Sample_Output: "Static nested class accessed",
      solved: false,
      successRate: "92%",
      submissions: "10.7K"
    },
    {
      id: 88,
      title: "Abstract Class with Constructor",
      description: "Demonstrate constructor invocation in abstract classes.",
      difficulty: "Intermediate",
      topics: ["OOP", "Abstraction"],
      Sample_Input: "Subclass instantiation",
      Sample_Output: "Abstract class constructor called",
      solved: false,
      successRate: "90%",
      submissions: "9.8K"
    },
    {
      id: 89,
      title: "Interface with Default Methods",
      description: "Implement an interface containing default methods.",
      difficulty: "Intermediate",
      topics: ["OOP", "Interfaces"],
      Sample_Input: "Default method call",
      Sample_Output: "Default method executed",
      solved: false,
      successRate: "91%",
      submissions: "10.4K"
    },
    {
      id: 90,
      title: "Interface with Static Methods",
      description: "Demonstrate static methods in an interface.",
      difficulty: "Intermediate",
      topics: ["OOP", "Interfaces"],
      Sample_Input: "InterfaceName.staticMethod()",
      Sample_Output: "Static method called",
      solved: false,
      successRate: "91%",
      submissions: "10.6K"
    },
    {
      id: 91,
      title: "Covariant Return Type Example",
      description: "Demonstrate covariant return type in method overriding.",
      difficulty: "Hard",
      topics: ["OOP", "Overriding"],
      Sample_Input: "Subclass override",
      Sample_Output: "Return type changed to subclass",
      solved: false,
      successRate: "88%",
      submissions: "9.1K"
    },
    {
      id: 92,
      title: "Multiple Constructors Overloading",
      description: "Create multiple constructors for one class and demonstrate overloading.",
      difficulty: "Intermediate",
      topics: ["OOP", "Constructors"],
      Sample_Input: "Object with parameters",
      Sample_Output: "Different constructors executed",
      solved: false,
      successRate: "92%",
      submissions: "11.2K"
    },
    {
      id: 93,
      title: "Downcasting Example",
      description: "Demonstrate safe downcasting using instanceof operator.",
      difficulty: "Intermediate",
      topics: ["OOP", "Casting"],
      Sample_Input: "Parent → Child cast",
      Sample_Output: "Downcast successful",
      solved: false,
      successRate: "89%",
      submissions: "9.6K"
    },
    {
      id: 94,
      title: "Type Casting Example",
      description: "Demonstrate implicit and explicit type casting in Java.",
      difficulty: "Easy",
      topics: ["OOP", "Casting"],
      Sample_Input: "int → double",
      Sample_Output: "10 → 10.0",
      solved: false,
      successRate: "95%",
      submissions: "12.3K"
    },
    {
      id: 95,
      title: "Call by Value Example",
      description: "Demonstrate call by value in Java methods.",
      difficulty: "Easy",
      topics: ["OOP", "Methods"],
      Sample_Input: "Before: x=10",
      Sample_Output: "After: x=10 (unchanged)",
      solved: false,
      successRate: "96%",
      submissions: "13.7K"
    },
    {
      id: 96,
      title: "Call by Reference Simulation",
      description: "Simulate call by reference using objects in Java.",
      difficulty: "Intermediate",
      topics: ["OOP", "Methods"],
      Sample_Input: "Object modification",
      Sample_Output: "Changes reflected",
      solved: false,
      successRate: "91%",
      submissions: "10.8K"
    },
    {
      id: 97,
      title: "Package Example",
      description: "Create a package and access its classes from another file.",
      difficulty: "Intermediate",
      topics: ["OOP", "Packages"],
      Sample_Input: "mypackage.MyClass",
      Sample_Output: "Access successful",
      solved: false,
      successRate: "90%",
      submissions: "9.9K"
    },
    {
      id: 98,
      title: "Import Static Members Example",
      description: "Use static import to access static members without class name.",
      difficulty: "Intermediate",
      topics: ["OOP", "Static Import"],
      Sample_Input: "import static java.lang.Math.*",
      Sample_Output: "PI value used directly",
      solved: false,
      successRate: "92%",
      submissions: "10.3K"
    },
    {
      id: 99,
      title: "Access Modifiers Example",
      description: "Demonstrate public, private, protected, and default access modifiers.",
      difficulty: "Intermediate",
      topics: ["OOP", "Access Modifiers"],
      Sample_Input: "Different class access",
      Sample_Output: "Access based on modifier",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 100,
      title: "Java Bean Example",
      description: "Create a simple Java Bean with private fields and getter/setter methods.",
      difficulty: "Intermediate",
      topics: ["OOP", "Beans"],
      Sample_Input: "Name=John, Age=30",
      Sample_Output: "Bean data accessed successfully",
      solved: false,
      successRate: "91%",
      submissions: "10.7K"
    },
    {
      id: 101,
      title: "Reverse a String Using Stack",
      description: "Use a Stack to reverse the characters of a given string.",
      difficulty: "Intermediate",
      topics: ["Collections", "Stack", "String"],
      Sample_Input: "hello",
      Sample_Output: "olleh",
      solved: false,
      successRate: "91%",
      submissions: "10.1K"
    },
    {
      id: 102,
      title: "Count Word Frequency in String",
      description: "Count occurrences of each word in a sentence using HashMap.",
      difficulty: "Intermediate",
      topics: ["Collections", "HashMap", "String"],
      Sample_Input: "Java is fun and Java is powerful",
      Sample_Output: "{Java=2, is=2, fun=1, powerful=1}",
      solved: false,
      successRate: "89%",
      submissions: "9.8K"
    },
    {
      id: 103,
      title: "Sort ArrayList of Integers",
      description: "Sort an ArrayList of integers in ascending order using Collections.sort().",
      difficulty: "Intermediate",
      topics: ["Collections", "ArrayList", "Sorting"],
      Sample_Input: "[4, 1, 3, 2]",
      Sample_Output: "[1, 2, 3, 4]",
      solved: false,
      successRate: "93%",
      submissions: "12.2K"
    },
    {
      id: 104,
      title: "Find Duplicate Elements in List",
      description: "Identify duplicate elements in a list using HashSet.",
      difficulty: "Intermediate",
      topics: ["Collections", "HashSet"],
      Sample_Input: "[1, 2, 3, 2, 4, 1]",
      Sample_Output: "[1, 2]",
      solved: false,
      successRate: "90%",
      submissions: "9.9K"
    },
    {
      id: 105,
      title: "Remove Duplicates from ArrayList",
      description: "Remove duplicates from an ArrayList using Set.",
      difficulty: "Intermediate",
      topics: ["Collections", "Set"],
      Sample_Input: "[1, 2, 2, 3, 4, 4]",
      Sample_Output: "[1, 2, 3, 4]",
      solved: false,
      successRate: "92%",
      submissions: "11.1K"
    },
    {
      id: 106,
      title: "Sort HashMap by Values",
      description: "Sort a HashMap based on values instead of keys.",
      difficulty: "Intermediate",
      topics: ["Collections", "HashMap", "Sorting"],
      Sample_Input: "{A=3, B=1, C=2}",
      Sample_Output: "{B=1, C=2, A=3}",
      solved: false,
      successRate: "88%",
      submissions: "8.9K"
    },
    {
      id: 107,
      title: "Iterate Over HashMap",
      description: "Print all key-value pairs of a HashMap using Map.Entry.",
      difficulty: "Intermediate",
      topics: ["Collections", "HashMap"],
      Sample_Input: "{One=1, Two=2}",
      Sample_Output: "One:1, Two:2",
      solved: false,
      successRate: "95%",
      submissions: "12.8K"
    },
    {
      id: 108,
      title: "Use LinkedList as Queue",
      description: "Implement a queue using LinkedList with enqueue and dequeue operations.",
      difficulty: "Intermediate",
      topics: ["Collections", "LinkedList", "Queue"],
      Sample_Input: "Enqueue: [1,2,3], Dequeue: 1",
      Sample_Output: "[2,3]",
      solved: false,
      successRate: "90%",
      submissions: "10.3K"
    },
    {
      id: 109,
      title: "PriorityQueue Example",
      description: "Use PriorityQueue to display elements in ascending order.",
      difficulty: "Intermediate",
      topics: ["Collections", "PriorityQueue"],
      Sample_Input: "[5, 2, 8, 1]",
      Sample_Output: "[1, 2, 5, 8]",
      solved: false,
      successRate: "91%",
      submissions: "9.4K"
    },
    {
      id: 110,
      title: "HashMap Key Search",
      description: "Check if a key exists in a HashMap.",
      difficulty: "Intermediate",
      topics: ["Collections", "HashMap"],
      Sample_Input: "{A=1, B=2}, Key=B",
      Sample_Output: "Key found",
      solved: false,
      successRate: "92%",
      submissions: "10.7K"
    },
    {
      id: 111,
      title: "LinkedHashMap Example",
      description: "Demonstrate insertion order in LinkedHashMap.",
      difficulty: "Intermediate",
      topics: ["Collections", "LinkedHashMap"],
      Sample_Input: "{C=3, A=1, B=2}",
      Sample_Output: "{C=3, A=1, B=2}",
      solved: false,
      successRate: "89%",
      submissions: "9.6K"
    },
    {
      id: 112,
      title: "TreeMap Example",
      description: "Use TreeMap to store and sort keys in natural order.",
      difficulty: "Intermediate",
      topics: ["Collections", "TreeMap"],
      Sample_Input: "{Z=26, A=1, M=13}",
      Sample_Output: "{A=1, M=13, Z=26}",
      solved: false,
      successRate: "90%",
      submissions: "9.2K"
    },
    {
      id: 113,
      title: "Custom Object Sorting",
      description: "Sort a list of Employee objects by salary using Comparable.",
      difficulty: "Intermediate",
      topics: ["Collections", "Comparable", "Sorting"],
      Sample_Input: "[E1(3000), E2(2000)]",
      Sample_Output: "[E2, E1]",
      solved: false,
      successRate: "87%",
      submissions: "8.7K"
    },
    {
      id: 114,
      title: "Custom Comparator Example",
      description: "Use Comparator to sort Employee objects by name.",
      difficulty: "Intermediate",
      topics: ["Collections", "Comparator"],
      Sample_Input: "[John, Alex, Mary]",
      Sample_Output: "[Alex, John, Mary]",
      solved: false,
      successRate: "88%",
      submissions: "9.1K"
    },
    {
      id: 115,
      title: "Nested Try-Catch Example",
      description: "Write a program to demonstrate nested try-catch blocks.",
      difficulty: "Intermediate",
      topics: ["Exception Handling"],
      Sample_Input: "Divide by zero inside array access",
      Sample_Output: "Arithmetic Exception caught",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 116,
      title: "Multiple Catch Blocks",
      description: "Handle multiple exceptions in a single program.",
      difficulty: "Intermediate",
      topics: ["Exception Handling"],
      Sample_Input: "NullPointer and ArrayIndexOutOfBounds",
      Sample_Output: "Handled both exceptions",
      solved: false,
      successRate: "92%",
      submissions: "10.8K"
    },
    {
      id: 117,
      title: "Finally Block Example",
      description: "Demonstrate the use of finally block in exception handling.",
      difficulty: "Intermediate",
      topics: ["Exception Handling"],
      Sample_Input: "Divide by zero",
      Sample_Output: "Finally executed",
      solved: false,
      successRate: "93%",
      submissions: "11.2K"
    },
    {
      id: 118,
      title: "Throw and Throws Example",
      description: "Use throw and throws keywords to handle custom exceptions.",
      difficulty: "Intermediate",
      topics: ["Exception Handling"],
      Sample_Input: "Age < 18",
      Sample_Output: "Custom exception: InvalidAgeException",
      solved: false,
      successRate: "88%",
      submissions: "9.7K"
    },
    {
      id: 119,
      title: "File Reading Example",
      description: "Read content from a text file using FileReader.",
      difficulty: "Intermediate",
      topics: ["File I/O"],
      Sample_Input: "input.txt",
      Sample_Output: "File contents printed",
      solved: false,
      successRate: "91%",
      submissions: "10.2K"
    },
    {
      id: 120,
      title: "File Writing Example",
      description: "Write user input into a text file using FileWriter.",
      difficulty: "Intermediate",
      topics: ["File I/O"],
      Sample_Input: "Hello Java",
      Sample_Output: "Written successfully to output.txt",
      solved: false,
      successRate: "90%",
      submissions: "9.8K"
    },
    {
      id: 121,
      title: "Copy File Content",
      description: "Copy content from one file to another.",
      difficulty: "Intermediate",
      topics: ["File I/O"],
      Sample_Input: "source.txt, destination.txt",
      Sample_Output: "Content copied",
      solved: false,
      successRate: "91%",
      submissions: "10.3K"
    },
    {
      id: 122,
      title: "BufferedReader Example",
      description: "Read multiple lines from a file using BufferedReader.",
      difficulty: "Intermediate",
      topics: ["File I/O"],
      Sample_Input: "sample.txt",
      Sample_Output: "All lines printed",
      solved: false,
      successRate: "93%",
      submissions: "11.4K"
    },
    {
      id: 123,
      title: "BufferedWriter Example",
      description: "Write text into a file using BufferedWriter.",
      difficulty: "Intermediate",
      topics: ["File I/O"],
      Sample_Input: "Writing buffered output",
      Sample_Output: "File updated successfully",
      solved: false,
      successRate: "91%",
      submissions: "10.1K"
    },
    {
      id: 124,
      title: "Count Lines in File",
      description: "Count number of lines in a text file.",
      difficulty: "Intermediate",
      topics: ["File I/O"],
      Sample_Input: "log.txt",
      Sample_Output: "Lines: 42",
      solved: false,
      successRate: "90%",
      submissions: "9.4K"
    },
    {
      id: 125,
      title: "Search Word in File",
      description: "Find if a word exists in a text file.",
      difficulty: "Intermediate",
      topics: ["File I/O"],
      Sample_Input: "word=error",
      Sample_Output: "Word found",
      solved: false,
      successRate: "88%",
      submissions: "8.9K"
    },
    {
      id: 126,
      title: "Count Characters and Words in File",
      description: "Count total words and characters in a file.",
      difficulty: "Intermediate",
      topics: ["File I/O"],
      Sample_Input: "text.txt",
      Sample_Output: "Words=12, Chars=56",
      solved: false,
      successRate: "90%",
      submissions: "9.6K"
    },
    {
      id: 127,
      title: "Serialization Example",
      description: "Serialize and deserialize an object using ObjectOutputStream.",
      difficulty: "Intermediate",
      topics: ["File I/O", "Serialization"],
      Sample_Input: "Employee object",
      Sample_Output: "Serialized successfully",
      solved: false,
      successRate: "89%",
      submissions: "9.5K"
    },
    {
      id: 128,
      title: "StringBuilder Example",
      description: "Reverse a string using StringBuilder reverse() method.",
      difficulty: "Intermediate",
      topics: ["String", "StringBuilder"],
      Sample_Input: "Java",
      Sample_Output: "avaJ",
      solved: false,
      successRate: "95%",
      submissions: "12.5K"
    },
    {
      id: 129,
      title: "StringBuffer Append Example",
      description: "Use StringBuffer to append multiple strings efficiently.",
      difficulty: "Intermediate",
      topics: ["String", "StringBuffer"],
      Sample_Input: "Java + Programming",
      Sample_Output: "JavaProgramming",
      solved: false,
      successRate: "94%",
      submissions: "12.2K"
    },
    {
      id: 130,
      title: "Check String Rotation",
      description: "Check if one string is a rotation of another.",
      difficulty: "Intermediate",
      topics: ["String"],
      Sample_Input: "ABCD, CDAB",
      Sample_Output: "Rotation found",
      solved: false,
      successRate: "87%",
      submissions: "8.6K"
    },
    {
      id: 131,
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
      id: 132,
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
      id: 133,
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
      id: 134,
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
      id: 135,
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
      id: 136,
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
      id: 137,
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
      id: 138,
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
      id: 139,
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
      id: 140,
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
      id: 141,
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
      id: 142,
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
      id: 143,
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
      id: 144,
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
      id: 145,
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
      id: 146,
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
      id: 147,
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
      id: 148,
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
      id: 149,
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
      id: 150,
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
      id: 151,
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
      id: 152,
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
      id: 153,
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
      id: 154,
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
      id: 155,
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
      id: 156,
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
      id: 157,
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
      id: 158,
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
      id: 159,
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
      id: 160,
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
      id: 161,
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
      id: 162,
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
      id: 163,
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
      id: 164,
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
      id: 165,
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
      id: 166,
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
      id: 167,
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
      id: 168,
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
      id: 169,
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
      id: 170,
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
      id: 171,
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
      id: 172,
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
      id: 173,
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
      id: 174,
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
      id: 175,
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
      id: 176,
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
      id: 177,
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
      id: 178,
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
      id: 179,
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
      id: 180,
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
      id: 181,
      title: "Create a Thread by Extending Thread Class",
      description: "Write a program to create and start a thread by extending the Thread class.",
      difficulty: "Advanced",
      topics: ["Multithreading"],
      Sample_Input: "Print 'Hello from thread'",
      Sample_Output: "Hello from thread",
      solved: false,
      successRate: "89%",
      submissions: "9.3K"
    },
    {
      id: 182,
      title: "Create a Thread by Implementing Runnable",
      description: "Create a thread by implementing the Runnable interface and start it.",
      difficulty: "Advanced",
      topics: ["Multithreading"],
      Sample_Input: "Run MyThread",
      Sample_Output: "Thread running...",
      solved: false,
      successRate: "91%",
      submissions: "9.8K"
    },
    {
      id: 183,
      title: "Thread Sleep Example",
      description: "Demonstrate the use of Thread.sleep() method in Java.",
      difficulty: "Advanced",
      topics: ["Multithreading"],
      Sample_Input: "Sleep for 2 seconds",
      Sample_Output: "Paused for 2 seconds",
      solved: false,
      successRate: "92%",
      submissions: "10.2K"
    },
    {
      id: 184,
      title: "Thread Priority Example",
      description: "Set different thread priorities and observe execution order.",
      difficulty: "Advanced",
      topics: ["Multithreading"],
      Sample_Input: "Thread1=HIGH, Thread2=LOW",
      Sample_Output: "Thread1 executed first",
      solved: false,
      successRate: "88%",
      submissions: "9.1K"
    },
    {
      id: 185,
      title: "Thread Join Example",
      description: "Use the join() method to wait for one thread to finish before another starts.",
      difficulty: "Advanced",
      topics: ["Multithreading"],
      Sample_Input: "Thread1 joins Thread2",
      Sample_Output: "Thread1 completes after Thread2",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 186,
      title: "Synchronized Method Example",
      description: "Demonstrate synchronization by creating a synchronized method.",
      difficulty: "Advanced",
      topics: ["Multithreading", "Synchronization"],
      Sample_Input: "Multiple threads increment counter",
      Sample_Output: "No data race occurs",
      solved: false,
      successRate: "89%",
      submissions: "9.3K"
    },
    {
      id: 187,
      title: "Synchronized Block Example",
      description: "Use synchronized block to control thread access to shared resource.",
      difficulty: "Advanced",
      topics: ["Multithreading", "Synchronization"],
      Sample_Input: "Two threads accessing shared data",
      Sample_Output: "Thread-safe output",
      solved: false,
      successRate: "90%",
      submissions: "9.6K"
    },
    {
      id: 188,
      title: "Deadlock Example",
      description: "Write a program to demonstrate a deadlock situation.",
      difficulty: "Advanced",
      topics: ["Multithreading"],
      Sample_Input: "Two threads locking resources A & B",
      Sample_Output: "Program stuck (Deadlock)",
      solved: false,
      successRate: "82%",
      submissions: "7.8K"
    },
    {
      id: 189,
      title: "Avoid Deadlock Example",
      description: "Write a program to prevent deadlock using lock ordering.",
      difficulty: "Advanced",
      topics: ["Multithreading"],
      Sample_Input: "Acquire locks A then B",
      Sample_Output: "No deadlock occurs",
      solved: false,
      successRate: "87%",
      submissions: "8.2K"
    },
    {
      id: 190,
      title: "Inter-Thread Communication",
      description: "Implement producer-consumer using wait() and notify().",
      difficulty: "Advanced",
      topics: ["Multithreading", "Synchronization"],
      Sample_Input: "Producer adds item, Consumer removes item",
      Sample_Output: "Data synchronized",
      solved: false,
      successRate: "84%",
      submissions: "8.4K"
    },
    {
      id: 191,
      title: "Thread Pool Example",
      description: "Use ExecutorService to create a thread pool and execute multiple tasks.",
      difficulty: "Advanced",
      topics: ["Multithreading", "ExecutorService"],
      Sample_Input: "Run 5 tasks",
      Sample_Output: "Tasks executed concurrently",
      solved: false,
      successRate: "90%",
      submissions: "9.8K"
    },
    {
      id: 192,
      title: "Callable and Future Example",
      description: "Implement Callable interface to return a result from a thread.",
      difficulty: "Advanced",
      topics: ["Multithreading", "Callable"],
      Sample_Input: "Sum numbers 1-100",
      Sample_Output: "5050",
      solved: false,
      successRate: "92%",
      submissions: "10.1K"
    },
    {
      id: 193,
      title: "Lambda Expression for Runnable",
      description: "Use lambda expression to create and start a thread.",
      difficulty: "Advanced",
      topics: ["Lambda", "Multithreading"],
      Sample_Input: "() -> System.out.println('Thread running')",
      Sample_Output: "Thread running",
      solved: false,
      successRate: "94%",
      submissions: "10.5K"
    },
    {
      id: 194,
      title: "Stream API Filter Example",
      description: "Use Stream API to filter even numbers from a list.",
      difficulty: "Advanced",
      topics: ["Java 8 Streams"],
      Sample_Input: "[1,2,3,4,5,6]",
      Sample_Output: "[2,4,6]",
      solved: false,
      successRate: "96%",
      submissions: "11.1K"
    },
    {
      id: 195,
      title: "Map and Collect Example",
      description: "Use Stream map() to square numbers and collect to list.",
      difficulty: "Advanced",
      topics: ["Java 8 Streams"],
      Sample_Input: "[2,3,4]",
      Sample_Output: "[4,9,16]",
      solved: false,
      successRate: "95%",
      submissions: "11.4K"
    },
    {
      id: 196,
      title: "Stream Sorting Example",
      description: "Sort a list of strings alphabetically using Stream sorted().",
      difficulty: "Advanced",
      topics: ["Java 8 Streams"],
      Sample_Input: "[Java, C++, Python]",
      Sample_Output: "[C++, Java, Python]",
      solved: false,
      successRate: "94%",
      submissions: "11.2K"
    },
    {
      id: 197,
      title: "Reduce Example",
      description: "Use reduce() method to calculate sum of a list of integers.",
      difficulty: "Advanced",
      topics: ["Java 8 Streams"],
      Sample_Input: "[1,2,3,4,5]",
      Sample_Output: "15",
      solved: false,
      successRate: "93%",
      submissions: "10.9K"
    },
    {
      id: 198,
      title: "Parallel Stream Example",
      description: "Use parallelStream() to speed up computation.",
      difficulty: "Advanced",
      topics: ["Java 8 Streams"],
      Sample_Input: "[1,2,3,4]",
      Sample_Output: "Sum calculated in parallel",
      solved: false,
      successRate: "92%",
      submissions: "10.2K"
    },
    {
      id: 199,
      title: "Lambda Comparator Example",
      description: "Use lambda expression to sort custom objects by field.",
      difficulty: "Advanced",
      topics: ["Lambda", "Comparator"],
      Sample_Input: "[(A,20),(B,10)]",
      Sample_Output: "[(B,10),(A,20)]",
      solved: false,
      successRate: "91%",
      submissions: "9.9K"
    },
    {
      id: 200,
      title: "Predicate Functional Interface Example",
      description: "Use Predicate to filter names starting with 'A'.",
      difficulty: "Advanced",
      topics: ["Functional Interfaces", "Lambda"],
      Sample_Input: "[Amit, Raj, Ankit]",
      Sample_Output: "[Amit, Ankit]",
      solved: false,
      successRate: "94%",
      submissions: "10.7K"
    },
    {
      id: 201,
      title: "Function Interface Example",
      description: "Use Function<T,R> to convert String to its length.",
      difficulty: "Advanced",
      topics: ["Functional Interfaces"],
      Sample_Input: "Java",
      Sample_Output: "4",
      solved: false,
      successRate: "95%",
      submissions: "11.3K"
    },
    {
      id: 202,
      title: "Consumer Interface Example",
      description: "Use Consumer to print all elements of a list.",
      difficulty: "Advanced",
      topics: ["Functional Interfaces"],
      Sample_Input: "[1,2,3]",
      Sample_Output: "1 2 3",
      solved: false,
      successRate: "96%",
      submissions: "11.4K"
    },
    {
      id: 203,
      title: "Supplier Interface Example",
      description: "Use Supplier to generate random numbers.",
      difficulty: "Advanced",
      topics: ["Functional Interfaces"],
      Sample_Input: "Generate 5 numbers",
      Sample_Output: "[23, 11, 89, 77, 34]",
      solved: false,
      successRate: "94%",
      submissions: "10.9K"
    },
    {
      id: 204,
      title: "JDBC Connection Example",
      description: "Establish a connection to a MySQL database using JDBC.",
      difficulty: "Advanced",
      topics: ["JDBC"],
      Sample_Input: "DB_URL, username, password",
      Sample_Output: "Connection successful",
      solved: false,
      successRate: "90%",
      submissions: "9.8K"
    },
    {
      id: 205,
      title: "Insert Data into Database",
      description: "Insert new rows into a table using JDBC PreparedStatement.",
      difficulty: "Advanced",
      topics: ["JDBC"],
      Sample_Input: "INSERT INTO students VALUES (1, 'Amit')",
      Sample_Output: "1 row inserted",
      solved: false,
      successRate: "89%",
      submissions: "9.4K"
    },
    {
      id: 206,
      title: "Retrieve Data from Database",
      description: "Execute SELECT query and display results using ResultSet.",
      difficulty: "Advanced",
      topics: ["JDBC"],
      Sample_Input: "SELECT * FROM students",
      Sample_Output: "ID=1, Name=Amit",
      solved: false,
      successRate: "90%",
      submissions: "9.7K"
    },
    {
      id: 207,
      title: "Update Record Example",
      description: "Update a record in the database using JDBC.",
      difficulty: "Advanced",
      topics: ["JDBC"],
      Sample_Input: "UPDATE students SET name='Raj' WHERE id=1",
      Sample_Output: "1 row updated",
      solved: false,
      successRate: "88%",
      submissions: "9.1K"
    },
    {
      id: 208,
      title: "Delete Record Example",
      description: "Delete a record from the database using JDBC.",
      difficulty: "Advanced",
      topics: ["JDBC"],
      Sample_Input: "DELETE FROM students WHERE id=2",
      Sample_Output: "1 row deleted",
      solved: false,
      successRate: "89%",
      submissions: "9.3K"
    },
    {
      id: 209,
      title: "Batch Processing Example",
      description: "Execute multiple SQL statements in a batch using JDBC.",
      difficulty: "Advanced",
      topics: ["JDBC"],
      Sample_Input: "INSERT multiple records",
      Sample_Output: "Batch executed successfully",
      solved: false,
      successRate: "87%",
      submissions: "8.9K"
    },
    {
      id: 210,
      title: "Singleton Pattern Example",
      description: "Implement the Singleton design pattern in Java.",
      difficulty: "Advanced",
      topics: ["Design Patterns"],
      Sample_Input: "Singleton instance",
      Sample_Output: "Same instance returned twice",
      solved: false,
      successRate: "91%",
      submissions: "10.4K"
    },
    {
      id: 211,
      title: "Factory Pattern Example",
      description: "Implement Factory pattern to create different shape objects.",
      difficulty: "Advanced",
      topics: ["Design Patterns"],
      Sample_Input: "Get shape Circle",
      Sample_Output: "Drawing Circle",
      solved: false,
      successRate: "89%",
      submissions: "9.8K"
    },
    {
      id: 212,
      title: "Observer Pattern Example",
      description: "Implement the Observer pattern for notification updates.",
      difficulty: "Advanced",
      topics: ["Design Patterns"],
      Sample_Input: "Subject updates state",
      Sample_Output: "All observers notified",
      solved: false,
      successRate: "87%",
      submissions: "8.7K"
    },
    {
      id: 213,
      title: "Builder Pattern Example",
      description: "Use Builder pattern to create complex objects step by step.",
      difficulty: "Advanced",
      topics: ["Design Patterns"],
      Sample_Input: "Build car with engine, wheels",
      Sample_Output: "Car built successfully",
      solved: false,
      successRate: "88%",
      submissions: "9.1K"
    },
    {
      id: 214,
      title: "Prototype Pattern Example",
      description: "Implement Prototype pattern using clone() method.",
      difficulty: "Advanced",
      topics: ["Design Patterns"],
      Sample_Input: "Clone employee object",
      Sample_Output: "Employee cloned",
      solved: false,
      successRate: "89%",
      submissions: "9.3K"
    },
    {
      id: 215,
      title: "Adapter Pattern Example",
      description: "Use Adapter pattern to connect incompatible interfaces.",
      difficulty: "Advanced",
      topics: ["Design Patterns"],
      Sample_Input: "Convert media player formats",
      Sample_Output: "Adapter works successfully",
      solved: false,
      successRate: "86%",
      submissions: "8.6K"
    },
    {
      id: 216,
      title: "Decorator Pattern Example",
      description: "Add new behavior to objects dynamically using Decorator.",
      difficulty: "Advanced",
      topics: ["Design Patterns"],
      Sample_Input: "Add milk to coffee",
      Sample_Output: "Coffee + Milk",
      solved: false,
      successRate: "87%",
      submissions: "8.8K"
    },
    {
      id: 217,
      title: "Command Pattern Example",
      description: "Implement Command pattern for action execution requests.",
      difficulty: "Advanced",
      topics: ["Design Patterns"],
      Sample_Input: "Turn light ON",
      Sample_Output: "Light turned ON",
      solved: false,
      successRate: "86%",
      submissions: "8.5K"
    },
    {
      id: 218,
      title: "Strategy Pattern Example",
      description: "Switch between different algorithms dynamically.",
      difficulty: "Advanced",
      topics: ["Design Patterns"],
      Sample_Input: "Apply BubbleSort or QuickSort",
      Sample_Output: "Sorted array",
      solved: false,
      successRate: "88%",
      submissions: "9.0K"
    },
    {
      id: 219,
      title: "Template Pattern Example",
      description: "Implement Template Method to define skeleton of algorithm.",
      difficulty: "Advanced",
      topics: ["Design Patterns"],
      Sample_Input: "Make tea",
      Sample_Output: "Boil water -> Add tea -> Serve",
      solved: false,
      successRate: "89%",
      submissions: "9.2K"
    },
    {
      id: 220,
      title: "MVC Pattern Example",
      description: "Build a simple MVC structure for Student data.",
      difficulty: "Advanced",
      topics: ["Design Patterns"],
      Sample_Input: "Student model, view, controller",
      Sample_Output: "Data displayed via MVC",
      solved: false,
      successRate: "90%",
      submissions: "9.5K"
    },
    {
      id: 221,
      title: "Stream Grouping Example",
      description: "Use Collectors.groupingBy() to group data by category.",
      difficulty: "Advanced",
      topics: ["Streams", "Collectors"],
      Sample_Input: "Group by department",
      Sample_Output: "{IT=[E1,E2], HR=[E3]}",
      solved: false,
      successRate: "92%",
      submissions: "10.2K"
    },
    {
      id: 222,
      title: "Optional Class Example",
      description: "Use Optional to handle null values safely.",
      difficulty: "Advanced",
      topics: ["Optional", "Java 8"],
      Sample_Input: "Optional.ofNullable(null)",
      Sample_Output: "Empty Optional",
      solved: false,
      successRate: "93%",
      submissions: "10.8K"
    },
    {
      id: 223,
      title: "FlatMap Example",
      description: "Use flatMap() to flatten list of lists using Stream API.",
      difficulty: "Advanced",
      topics: ["Streams"],
      Sample_Input: "[[1,2],[3,4]]",
      Sample_Output: "[1,2,3,4]",
      solved: false,
      successRate: "94%",
      submissions: "11.1K"
    },
    {
      id: 224,
      title: "Parallel Sorting Example",
      description: "Use Arrays.parallelSort() for faster sorting.",
      difficulty: "Advanced",
      topics: ["Arrays", "Parallel Streams"],
      Sample_Input: "[5,4,3,2,1]",
      Sample_Output: "[1,2,3,4,5]",
      solved: false,
      successRate: "93%",
      submissions: "10.6K"
    },
    {
      id: 225,
      title: "CompletableFuture Example",
      description: "Use CompletableFuture to run async tasks.",
      difficulty: "Advanced",
      topics: ["Multithreading", "Async"],
      Sample_Input: "Fetch data asynchronously",
      Sample_Output: "Task completed",
      solved: false,
      successRate: "92%",
      submissions: "10.4K"
    },
    {
      id: 226,
      title: "Stream Partitioning Example",
      description: "Use partitioningBy() to split data based on predicate.",
      difficulty: "Advanced",
      topics: ["Streams"],
      Sample_Input: "[1,2,3,4,5]",
      Sample_Output: "{true=[2,4], false=[1,3,5]}",
      solved: false,
      successRate: "93%",
      submissions: "10.7K"
    },
    {
      id: 227,
      title: "Custom Exception Example",
      description: "Create and throw a user-defined exception class.",
      difficulty: "Advanced",
      topics: ["Exception Handling"],
      Sample_Input: "Age < 18",
      Sample_Output: "UnderAgeException thrown",
      solved: false,
      successRate: "91%",
      submissions: "10.1K"
    },
    {
      id: 228,
      title: "Try-with-Resources Example",
      description: "Use try-with-resources to auto-close file streams.",
      difficulty: "Advanced",
      topics: ["File I/O", "Exception Handling"],
      Sample_Input: "Read from file.txt",
      Sample_Output: "File content printed safely",
      solved: false,
      successRate: "94%",
      submissions: "11.0K"
    },
    {
      id: 229,
      title: "Serialization Example",
      description: "Serialize and deserialize an object using ObjectOutputStream.",
      difficulty: "Advanced",
      topics: ["Serialization"],
      Sample_Input: "Employee object",
      Sample_Output: "Object written and read successfully",
      solved: false,
      successRate: "93%",
      submissions: "10.8K"
    },
    {
      id: 230,
      title: "Reflection API Example",
      description: "Use Reflection to inspect class methods and fields at runtime.",
      difficulty: "Advanced",
      topics: ["Reflection"],
      Sample_Input: "Employee.class",
      Sample_Output: "Methods and fields printed",
      solved: false,
      successRate: "90%",
      submissions: "9.7K"
    },

    {
      id: 231,
      title: "Spring IOC Example",
      description: "Demonstrate Inversion of Control using Spring container.",
      difficulty: "Advanced",
      topics: ["Spring Core", "IOC"],
      Sample_Input: "Bean defined in XML",
      Sample_Output: "Bean created by container",
      solved: false,
      successRate: "91%",
      submissions: "9.5K"
    },
    {
      id: 232,
      title: "Spring Dependency Injection Example",
      description: "Implement constructor and setter-based dependency injection.",
      difficulty: "Advanced",
      topics: ["Spring Core", "DI"],
      Sample_Input: "Service injected into Controller",
      Sample_Output: "Dependency resolved successfully",
      solved: false,
      successRate: "93%",
      submissions: "10.2K"
    },
    {
      id: 233,
      title: "Annotation-Based Configuration Example",
      description: "Configure beans using @Configuration and @Bean annotations.",
      difficulty: "Advanced",
      topics: ["Spring Core"],
      Sample_Input: "@Configuration class",
      Sample_Output: "Beans loaded via annotations",
      solved: false,
      successRate: "94%",
      submissions: "10.8K"
    },
    {
      id: 234,
      title: "Spring Component Scanning Example",
      description: "Use @Component, @Service, and @Repository annotations.",
      difficulty: "Advanced",
      topics: ["Spring Core"],
      Sample_Input: "@Component annotated class",
      Sample_Output: "Automatically registered in context",
      solved: false,
      successRate: "93%",
      submissions: "9.9K"
    },
    {
      id: 235,
      title: "Spring Boot Starter Project",
      description: "Create a simple Spring Boot application using Spring Initializr.",
      difficulty: "Advanced",
      topics: ["Spring Boot"],
      Sample_Input: "Run Spring Boot main class",
      Sample_Output: "App started on port 8080",
      solved: false,
      successRate: "95%",
      submissions: "11.3K"
    },
    {
      id: 236,
      title: "REST Controller Example",
      description: "Create a REST API using @RestController and @GetMapping.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "REST API"],
      Sample_Input: "GET /hello",
      Sample_Output: "Hello World",
      solved: false,
      successRate: "96%",
      submissions: "12.1K"
    },
    {
      id: 237,
      title: "Spring Boot CRUD Example",
      description: "Implement CRUD operations for a User entity.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "JPA", "REST"],
      Sample_Input: "POST /users",
      Sample_Output: "User created successfully",
      solved: false,
      successRate: "93%",
      submissions: "10.7K"
    },
    {
      id: 238,
      title: "Spring Data JPA Example",
      description: "Use JpaRepository for database operations.",
      difficulty: "Advanced",
      topics: ["JPA", "Spring Data"],
      Sample_Input: "findById(1)",
      Sample_Output: "Returns user object",
      solved: false,
      successRate: "92%",
      submissions: "9.8K"
    },
    {
      id: 239,
      title: "Entity Relationship Example",
      description: "Implement OneToMany and ManyToOne relationships using Hibernate/JPA.",
      difficulty: "Advanced",
      topics: ["Hibernate", "JPA"],
      Sample_Input: "Fetch Order entity",
      Sample_Output: "Displays related Product entities",
      solved: false,
      successRate: "91%",
      submissions: "9.6K"
    },
    {
      id: 240,
      title: "JPQL Query Example",
      description: "Perform custom queries using JPQL in Spring Data JPA.",
      difficulty: "Advanced",
      topics: ["JPA"],
      Sample_Input: "@Query annotation",
      Sample_Output: "Filtered data retrieved",
      solved: false,
      successRate: "90%",
      submissions: "8.9K"
    },
    {
      id: 241,
      title: "Transaction Management Example",
      description: "Implement @Transactional to handle database transactions.",
      difficulty: "Advanced",
      topics: ["Spring", "Transaction"],
      Sample_Input: "Multiple DB operations",
      Sample_Output: "Atomic commit or rollback",
      solved: false,
      successRate: "91%",
      submissions: "9.4K"
    },
    {
      id: 242,
      title: "Exception Handling in REST API",
      description: "Use @ControllerAdvice and @ExceptionHandler.",
      difficulty: "Advanced",
      topics: ["REST", "Spring Boot"],
      Sample_Input: "Invalid user ID",
      Sample_Output: "Custom JSON error message",
      solved: false,
      successRate: "92%",
      submissions: "10.1K"
    },
    {
      id: 243,
      title: "Spring Boot Validation Example",
      description: "Use @Valid and Hibernate Validator for input validation.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "Validation"],
      Sample_Input: "POST /user with empty name",
      Sample_Output: "400 Bad Request",
      solved: false,
      successRate: "93%",
      submissions: "10.6K"
    },
    {
      id: 244,
      title: "Spring Boot Logging Example",
      description: "Integrate SLF4J and Logback for logging.",
      difficulty: "Advanced",
      topics: ["Logging"],
      Sample_Input: "log.info()",
      Sample_Output: "Logs printed to console",
      solved: false,
      successRate: "95%",
      submissions: "11.2K"
    },
    {
      id: 245,
      title: "Spring Boot Profiles Example",
      description: "Configure different profiles for dev, test, and prod.",
      difficulty: "Advanced",
      topics: ["Spring Boot"],
      Sample_Input: "spring.profiles.active=dev",
      Sample_Output: "Dev configuration loaded",
      solved: false,
      successRate: "94%",
      submissions: "10.5K"
    },
    {
      id: 246,
      title: "Spring Boot Security Basic Auth",
      description: "Add basic authentication using Spring Security.",
      difficulty: "Advanced",
      topics: ["Security"],
      Sample_Input: "Access /admin",
      Sample_Output: "401 Unauthorized (if not logged in)",
      solved: false,
      successRate: "93%",
      submissions: "9.9K"
    },
    {
      id: 247,
      title: "JWT Authentication Example",
      description: "Implement JWT authentication in a Spring Boot app.",
      difficulty: "Advanced",
      topics: ["Security", "JWT"],
      Sample_Input: "POST /login",
      Sample_Output: "JWT token returned",
      solved: false,
      successRate: "91%",
      submissions: "9.3K"
    },
    {
      id: 248,
      title: "Spring Boot File Upload Example",
      description: "Upload files using MultipartFile in REST API.",
      difficulty: "Advanced",
      topics: ["File Upload", "Spring Boot"],
      Sample_Input: "POST /upload",
      Sample_Output: "File uploaded successfully",
      solved: false,
      successRate: "94%",
      submissions: "10.8K"
    },
    {
      id: 249,
      title: "REST API Pagination Example",
      description: "Implement pagination with Pageable in Spring Data JPA.",
      difficulty: "Advanced",
      topics: ["REST", "JPA"],
      Sample_Input: "GET /users?page=1&size=10",
      Sample_Output: "Paginated results returned",
      solved: false,
      successRate: "92%",
      submissions: "9.8K"
    },
    {
      id: 250,
      title: "Spring Boot CORS Example",
      description: "Handle Cross-Origin Resource Sharing using @CrossOrigin.",
      difficulty: "Advanced",
      topics: ["REST", "CORS"],
      Sample_Input: "Frontend request from another domain",
      Sample_Output: "Access allowed",
      solved: false,
      successRate: "94%",
      submissions: "10.2K"
    },
    {
      id: 251,
      title: "Hibernate Caching Example",
      description: "Enable first and second-level caching in Hibernate.",
      difficulty: "Advanced",
      topics: ["Hibernate"],
      Sample_Input: "Query same object twice",
      Sample_Output: "Fetched from cache",
      solved: false,
      successRate: "91%",
      submissions: "9.6K"
    },
    {
      id: 252,
      title: "Spring Boot Scheduler Example",
      description: "Use @Scheduled annotation to automate tasks.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "Scheduler"],
      Sample_Input: "@Scheduled(fixedRate = 5000)",
      Sample_Output: "Task runs every 5 seconds",
      solved: false,
      successRate: "95%",
      submissions: "10.9K"
    },
    {
      id: 253,
      title: "Spring Boot Email Example",
      description: "Send email using JavaMailSender.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "Email"],
      Sample_Input: "Send confirmation email",
      Sample_Output: "Email sent successfully",
      solved: false,
      successRate: "93%",
      submissions: "10.1K"
    },
    {
      id: 254,
      title: "REST API Versioning Example",
      description: "Implement versioning strategies for APIs.",
      difficulty: "Advanced",
      topics: ["REST", "Versioning"],
      Sample_Input: "/v1/users and /v2/users",
      Sample_Output: "Different API versions served",
      solved: false,
      successRate: "92%",
      submissions: "9.8K"
    },
    {
      id: 255,
      title: "Spring Boot Swagger Integration",
      description: "Add Swagger UI documentation for REST APIs.",
      difficulty: "Advanced",
      topics: ["Swagger", "Documentation"],
      Sample_Input: "Access /swagger-ui.html",
      Sample_Output: "API docs displayed",
      solved: false,
      successRate: "95%",
      submissions: "11.5K"
    },
    {
      id: 256,
      title: "Spring Boot Dockerization Example",
      description: "Containerize your Spring Boot app using Docker.",
      difficulty: "Advanced",
      topics: ["DevOps", "Docker"],
      Sample_Input: "docker build .",
      Sample_Output: "App running in container",
      solved: false,
      successRate: "94%",
      submissions: "10.7K"
    },
    {
      id: 257,
      title: "Microservice Communication using RestTemplate",
      description: "Communicate between services using RestTemplate.",
      difficulty: "Advanced",
      topics: ["Microservices"],
      Sample_Input: "Service A calls Service B",
      Sample_Output: "Response received successfully",
      solved: false,
      successRate: "92%",
      submissions: "9.4K"
    },
    {
      id: 258,
      title: "Eureka Service Discovery Example",
      description: "Set up Eureka Server and register microservices.",
      difficulty: "Advanced",
      topics: ["Microservices", "Eureka"],
      Sample_Input: "Register service",
      Sample_Output: "Service visible on Eureka dashboard",
      solved: false,
      successRate: "91%",
      submissions: "9.2K"
    },
    {
      id: 259,
      title: "Spring Cloud Gateway Example",
      description: "Use Spring Cloud Gateway for routing requests.",
      difficulty: "Advanced",
      topics: ["Microservices", "Gateway"],
      Sample_Input: "GET /api/service",
      Sample_Output: "Routed to backend service",
      solved: false,
      successRate: "93%",
      submissions: "9.9K"
    },
    {
      id: 260,
      title: "Spring Boot Config Server Example",
      description: "Centralize configuration with Spring Cloud Config Server.",
      difficulty: "Advanced",
      topics: ["Microservices", "Config"],
      Sample_Input: "application.yml in Git",
      Sample_Output: "Config fetched at runtime",
      solved: false,
      successRate: "91%",
      submissions: "9.1K"
    },
    {
      id: 261,
      title: "Hystrix Circuit Breaker Example",
      description: "Use Hystrix for fault tolerance in microservices.",
      difficulty: "Advanced",
      topics: ["Microservices", "Resilience"],
      Sample_Input: "Service failure",
      Sample_Output: "Fallback executed",
      solved: false,
      successRate: "90%",
      submissions: "8.8K"
    },
    {
      id: 262,
      title: "Spring Boot Actuator Example",
      description: "Monitor app health and metrics with Actuator endpoints.",
      difficulty: "Advanced",
      topics: ["Monitoring"],
      Sample_Input: "/actuator/health",
      Sample_Output: "status: UP",
      solved: false,
      successRate: "95%",
      submissions: "11.0K"
    },
    {
      id: 263,
      title: "Spring Boot GraphQL Example",
      description: "Expose APIs using GraphQL in a Spring Boot app.",
      difficulty: "Advanced",
      topics: ["GraphQL"],
      Sample_Input: "{ user(id:1){name,email} }",
      Sample_Output: "User data returned",
      solved: false,
      successRate: "92%",
      submissions: "9.7K"
    },
    {
      id: 264,
      title: "Spring Boot Kafka Integration",
      description: "Produce and consume Kafka messages using Spring Boot.",
      difficulty: "Advanced",
      topics: ["Kafka", "Messaging"],
      Sample_Input: "Send message to topic",
      Sample_Output: "Consumer received message",
      solved: false,
      successRate: "91%",
      submissions: "9.6K"
    },
    {
      id: 265,
      title: "Spring Boot RabbitMQ Example",
      description: "Implement message queue using RabbitMQ.",
      difficulty: "Advanced",
      topics: ["Messaging"],
      Sample_Input: "Publish message",
      Sample_Output: "Subscriber received message",
      solved: false,
      successRate: "92%",
      submissions: "9.8K"
    },
    {
      id: 266,
      title: "Spring Boot Unit Testing Example",
      description: "Write unit tests using JUnit and Mockito.",
      difficulty: "Advanced",
      topics: ["Testing"],
      Sample_Input: "Run test suite",
      Sample_Output: "All tests passed",
      solved: false,
      successRate: "94%",
      submissions: "10.9K"
    },
    {
      id: 267,
      title: "Integration Testing Example",
      description: "Test REST endpoints using MockMvc.",
      difficulty: "Advanced",
      topics: ["Testing"],
      Sample_Input: "GET /users test",
      Sample_Output: "200 OK",
      solved: false,
      successRate: "93%",
      submissions: "10.4K"
    },
    {
      id: 268,
      title: "Spring Boot OAuth2 Example",
      description: "Implement OAuth2 authentication with Google login.",
      difficulty: "Advanced",
      topics: ["Security", "OAuth2"],
      Sample_Input: "Google OAuth login",
      Sample_Output: "Access token granted",
      solved: false,
      successRate: "90%",
      submissions: "9.1K"
    },
    {
      id: 269,
      title: "Spring Boot Microservice Gateway Logging",
      description: "Add logging for API gateway requests and responses.",
      difficulty: "Advanced",
      topics: ["Gateway", "Logging"],
      Sample_Input: "GET /api/order",
      Sample_Output: "Logged request and response",
      solved: false,
      successRate: "92%",
      submissions: "9.5K"
    },
    {
      id: 270,
      title: "Spring Boot Async Processing",
      description: "Use @Async for non-blocking task execution.",
      difficulty: "Advanced",
      topics: ["Concurrency"],
      Sample_Input: "Trigger async call",
      Sample_Output: "Executed in separate thread",
      solved: false,
      successRate: "93%",
      submissions: "9.9K"
    },
    {
      id: 271,
      title: "Spring Boot Redis Caching Example",
      description: "Cache REST API responses using Redis.",
      difficulty: "Advanced",
      topics: ["Caching", "Redis"],
      Sample_Input: "GET /products",
      Sample_Output: "Response served from cache",
      solved: false,
      successRate: "91%",
      submissions: "9.6K"
    },
    {
      id: 272,
      title: "Spring Boot WebSocket Chat App",
      description: "Create a real-time chat using WebSocket.",
      difficulty: "Advanced",
      topics: ["WebSocket"],
      Sample_Input: "Send chat message",
      Sample_Output: "Delivered to all connected clients",
      solved: false,
      successRate: "94%",
      submissions: "10.2K"
    },
    {
      id: 273,
      title: "Spring Boot File Download Example",
      description: "Implement file download functionality via REST.",
      difficulty: "Advanced",
      topics: ["File I/O", "REST"],
      Sample_Input: "GET /download",
      Sample_Output: "File downloaded",
      solved: false,
      successRate: "95%",
      submissions: "10.9K"
    },
    {
      id: 274,
      title: "Spring Boot PDF Report Generation",
      description: "Generate dynamic reports using iText or JasperReports.",
      difficulty: "Advanced",
      topics: ["Reporting"],
      Sample_Input: "Generate report",
      Sample_Output: "PDF file created",
      solved: false,
      successRate: "93%",
      submissions: "9.8K"
    },
    {
      id: 275,
      title: "Spring Boot Excel Export Example",
      description: "Export data to Excel format.",
      difficulty: "Advanced",
      topics: ["File I/O", "Excel"],
      Sample_Input: "GET /export",
      Sample_Output: "Excel file downloaded",
      solved: false,
      successRate: "93%",
      submissions: "9.9K"
    },
    {
      id: 276,
      title: "Spring Boot CSV Upload Example",
      description: "Upload and parse CSV data using OpenCSV.",
      difficulty: "Advanced",
      topics: ["File Upload", "CSV"],
      Sample_Input: "Upload users.csv",
      Sample_Output: "Data imported successfully",
      solved: false,
      successRate: "92%",
      submissions: "9.7K"
    },
    {
      id: 277,
      title: "Spring Boot API Gateway Security",
      description: "Secure Gateway routes using JWT authentication.",
      difficulty: "Advanced",
      topics: ["Gateway", "Security"],
      Sample_Input: "Access /api/orders",
      Sample_Output: "Authorized access only",
      solved: false,
      successRate: "90%",
      submissions: "8.9K"
    },
    {
      id: 278,
      title: "Spring Boot Multi-Module Project",
      description: "Split your project into multiple modules using Maven.",
      difficulty: "Advanced",
      topics: ["Maven", "Modularization"],
      Sample_Input: "Run parent module",
      Sample_Output: "All child modules built",
      solved: false,
      successRate: "91%",
      submissions: "9.5K"
    },
    {
      id: 279,
      title: "Spring Boot Unit Test Coverage Report",
      description: "Generate code coverage reports using JaCoCo.",
      difficulty: "Advanced",
      topics: ["Testing", "JaCoCo"],
      Sample_Input: "mvn test",
      Sample_Output: "Coverage report generated",
      solved: false,
      successRate: "93%",
      submissions: "9.9K"
    },
    {
      id: 280,
      title: "Spring Boot Full Stack Application",
      description: "Build and integrate React frontend with Spring Boot backend.",
      difficulty: "Advanced",
      topics: ["Full Stack", "Integration"],
      Sample_Input: "User registration",
      Sample_Output: "Frontend + backend interaction successful",
      solved: false,
      successRate: "96%",
      submissions: "12.4K"
    },

    {
      id: 280,
      title: "Online Banking Management System",
      description: "Develop a Spring Boot–based banking system with account creation, transactions, and statement generation.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "JPA", "MySQL", "REST API", "Security"],
      Sample_Input: "POST /api/account/create",
      Sample_Output: "{message: 'Account created successfully'}",
      solved: false,
      successRate: "95%",
      submissions: "12.4K"
    },
    {
      id: 281,
      title: "E-Commerce Backend System",
      description: "Design a full e-commerce backend with product catalog, cart, orders, and payment modules.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "Hibernate", "REST", "Microservices"],
      Sample_Input: "POST /api/order",
      Sample_Output: "{status: 'Order placed successfully'}",
      solved: false,
      successRate: "93%",
      submissions: "11.8K"
    },
    {
      id: 282,
      title: "Library Management System",
      description: "Create a system to manage books, members, and issue/return functionality with database persistence.",
      difficulty: "Medium",
      topics: ["Core Java", "JDBC", "MySQL", "OOP"],
      Sample_Input: "Add new book",
      Sample_Output: "Book successfully added to database",
      solved: false,
      successRate: "97%",
      submissions: "13.5K"
    },
    {
      id: 283,
      title: "Hospital Management System",
      description: "Build a complete system to manage patients, appointments, and billing using Spring Boot and JPA.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "Hibernate", "JPA", "Thymeleaf"],
      Sample_Input: "Book appointment",
      Sample_Output: "Appointment booked successfully",
      solved: false,
      successRate: "92%",
      submissions: "10.6K"
    },
    {
      id: 284,
      title: "Chat Application with WebSockets",
      description: "Implement a real-time chat application using Spring Boot and WebSocket API.",
      difficulty: "Advanced",
      topics: ["WebSocket", "Spring Boot", "Concurrency"],
      Sample_Input: "Send message to user",
      Sample_Output: "Message received instantly",
      solved: false,
      successRate: "90%",
      submissions: "9.9K"
    },
    {
      id: 285,
      title: "Employee Payroll Management System",
      description: "Develop a payroll processing system with salary calculations, reports, and tax deductions.",
      difficulty: "Medium",
      topics: ["JDBC", "Swing", "File I/O", "Collections"],
      Sample_Input: "Enter salary data",
      Sample_Output: "Payroll generated successfully",
      solved: false,
      successRate: "94%",
      submissions: "11.2K"
    },
    {
      id: 286,
      title: "Hotel Reservation System",
      description: "Build a system to handle room bookings, check-ins, and check-outs using MVC design.",
      difficulty: "Medium",
      topics: ["Core Java", "OOP", "MVC", "JDBC"],
      Sample_Input: "Book room for guest",
      Sample_Output: "Booking confirmed",
      solved: false,
      successRate: "95%",
      submissions: "12.1K"
    },
    {
      id: 287,
      title: "Inventory Management System",
      description: "Track stock levels, orders, sales, and deliveries with CRUD operations.",
      difficulty: "Medium",
      topics: ["JavaFX", "JDBC", "File Handling"],
      Sample_Input: "Add new stock item",
      Sample_Output: "Item added successfully",
      solved: false,
      successRate: "94%",
      submissions: "10.8K"
    },
    {
      id: 288,
      title: "Online Examination System",
      description: "Create a quiz system with timer, question randomization, and score calculation.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "MySQL", "Security"],
      Sample_Input: "Submit quiz answers",
      Sample_Output: "Score calculated successfully",
      solved: false,
      successRate: "93%",
      submissions: "10.5K"
    },
    {
      id: 289,
      title: "Bank ATM Simulation",
      description: "Simulate ATM functionalities including withdrawal, deposit, and balance check using OOP.",
      difficulty: "Medium",
      topics: ["Core Java", "OOP", "File I/O"],
      Sample_Input: "Withdraw ₹1000",
      Sample_Output: "New Balance: ₹9000",
      solved: false,
      successRate: "96%",
      submissions: "11.7K"
    },
    {
      id: 290,
      title: "Airline Ticket Reservation System",
      description: "Develop an airline booking platform with passenger management and ticket generation.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "MySQL", "REST API"],
      Sample_Input: "Book flight ticket",
      Sample_Output: "Ticket booked successfully",
      solved: false,
      successRate: "92%",
      submissions: "10.9K"
    },
    {
      id: 291,
      title: "Real Estate Listing Portal",
      description: "Build a property listing system with search, filter, and agent contact features.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "JPA", "REST API"],
      Sample_Input: "Search 2BHK in Delhi",
      Sample_Output: "5 listings found",
      solved: false,
      successRate: "91%",
      submissions: "9.8K"
    },
    {
      id: 292,
      title: "Social Media Backend",
      description: "Develop a microservice-based backend for a social app with user posts, comments, and likes.",
      difficulty: "Advanced",
      topics: ["Microservices", "Spring Cloud", "MongoDB"],
      Sample_Input: "POST /api/posts",
      Sample_Output: "{message: 'Post created'}",
      solved: false,
      successRate: "89%",
      submissions: "8.6K"
    },
    {
      id: 293,
      title: "Weather Forecast Application",
      description: "Fetch real-time weather data using an external API and display results in JavaFX.",
      difficulty: "Medium",
      topics: ["JavaFX", "API Integration", "JSON Parsing"],
      Sample_Input: "City: Mumbai",
      Sample_Output: "Temp: 32°C, Humidity: 70%",
      solved: false,
      successRate: "95%",
      submissions: "12.5K"
    },
    {
      id: 294,
      title: "Expense Tracker Application",
      description: "Track daily expenses, generate reports, and visualize data using charts.",
      difficulty: "Medium",
      topics: ["Swing", "Collections", "File Handling"],
      Sample_Input: "Add Expense: ₹500 Food",
      Sample_Output: "Expense recorded",
      solved: false,
      successRate: "96%",
      submissions: "12.8K"
    },
    {
      id: 295,
      title: "Student Result Management System",
      description: "Develop a result management tool to calculate and store student grades.",
      difficulty: "Medium",
      topics: ["JDBC", "MySQL", "Core Java"],
      Sample_Input: "Enter marks for student",
      Sample_Output: "Result saved successfully",
      solved: false,
      successRate: "97%",
      submissions: "13.1K"
    },
    {
      id: 296,
      title: "Car Rental System",
      description: "Design a car rental management app with vehicle booking and payment integration.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "REST API", "JPA"],
      Sample_Input: "Book car for 3 days",
      Sample_Output: "Booking confirmed successfully",
      solved: false,
      successRate: "93%",
      submissions: "10.9K"
    },
    {
      id: 297,
      title: "Online Voting System",
      description: "Implement a secure voting platform with admin and voter authentication.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "JWT", "MySQL"],
      Sample_Input: "Vote cast for candidate A",
      Sample_Output: "Vote recorded successfully",
      solved: false,
      successRate: "92%",
      submissions: "10.4K"
    },
    {
      id: 298,
      title: "Online Food Delivery System",
      description: "Develop an online platform to order food, track delivery, and manage menus.",
      difficulty: "Advanced",
      topics: ["Spring Boot", "JPA", "REST API"],
      Sample_Input: "Order Pizza",
      Sample_Output: "Order placed successfully",
      solved: false,
      successRate: "94%",
      submissions: "11.7K"
    },
    {
      id: 299,
      title: "Portfolio Analyzer System",
      description: "Analyze investment portfolios and display financial performance metrics using Java.",
      difficulty: "Advanced",
      topics: ["Streams", "JPA", "Spring Boot"],
      Sample_Input: "Portfolio ID=103",
      Sample_Output: "Return: 12.5%, Risk: Moderate",
      solved: false,
      successRate: "91%",
      submissions: "9.8K"
    },
    {
      id: 300,
      title: "Blockchain-based Product Verification System",
      description: "Implement a blockchain layer for verifying authenticity of products using Java and Spring Boot.",
      difficulty: "Expert",
      topics: ["Blockchain", "Spring Boot", "Security", "API Integration"],
      Sample_Input: "Verify product QR",
      Sample_Output: "Product verified on blockchain",
      solved: false,
      successRate: "89%",
      submissions: "8.4K"
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
                      language: question.language ? question.language : "Java",
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