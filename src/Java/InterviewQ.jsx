import React, { useState } from "react";
import "/src/java_css/interview-questions_java.css";
import { Link } from "react-router-dom";


const InterviewQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const questions = [
    {

      q: "What is Java?",
      a: "Java is a high-level, object-oriented, platform-independent programming language developed by Sun Microsystems.",
      difficulty: "Easy",
      category: "core java"
    },
    {
      q: "Why is Java platform-independent?",
      a: "Java code is compiled into bytecode which runs on the Java Virtual Machine (JVM), making it platform-independent.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What are the main features of Java?",
      a: "Key features include Object-Oriented, Platform Independent, Secure, Robust, Multithreaded, and Portable.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is JVM?",
      a: "The Java Virtual Machine (JVM) executes bytecode and provides platform independence and memory management.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is JDK?",
      a: "JDK (Java Development Kit) includes the JRE and tools needed for developing Java applications.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is JRE?",
      a: "JRE (Java Runtime Environment) provides libraries and JVM required to run Java applications.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "Explain the difference between JDK, JRE, and JVM.",
      a: "JDK = development tools, JRE = runtime environment, JVM = executes bytecode.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What are identifiers in Java?",
      a: "Identifiers are names given to classes, methods, variables, or labels in Java.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is a Java variable?",
      a: "A variable is a container that stores data of a specific type during program execution.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What are data types in Java?",
      a: "Java supports primitive types (int, float, char, etc.) and non-primitive types (arrays, strings, classes).",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is type casting in Java?",
      a: "Type casting converts one data type into another, such as int to double or vice versa.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is the difference between primitive and reference data types?",
      a: "Primitive types hold values directly; reference types store memory addresses of objects.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is the default value of a boolean variable?",
      a: "The default value of a boolean is false.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is a class in Java?",
      a: "A class is a blueprint or template from which objects are created.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What is an object in Java?",
      a: "An object is an instance of a class containing data and methods that operate on the data.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What is a constructor in Java?",
      a: "A constructor is a special method used to initialize objects when they are created.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "Can a constructor be overloaded?",
      a: "Yes, multiple constructors can exist in a class with different parameter lists.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What is method overloading?",
      a: "Method overloading means defining multiple methods with the same name but different parameter types or counts.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What is method overriding?",
      a: "Method overriding allows a subclass to provide a specific implementation of a method already defined in the parent class.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What is encapsulation?",
      a: "Encapsulation is the bundling of data and methods that operate on that data into a single unit (class).",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What is abstraction in Java?",
      a: "Abstraction hides implementation details and shows only the necessary features of an object.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What is inheritance?",
      a: "Inheritance allows one class to acquire the properties and behavior of another class.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What is polymorphism?",
      a: "Polymorphism allows objects to take multiple forms, usually by method overriding or overloading.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "What is the difference between compile-time and runtime polymorphism?",
      a: "Compile-time uses method overloading; runtime uses method overriding via dynamic binding.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is the use of the 'this' keyword?",
      a: "The 'this' keyword refers to the current instance of a class.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is the use of the 'super' keyword?",
      a: "The 'super' keyword is used to call the parent class constructor or methods.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "Can Java support multiple inheritance?",
      a: "No, Java does not support multiple inheritance through classes to avoid ambiguity, but it supports it through interfaces.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is an interface in Java?",
      a: "An interface defines abstract methods that must be implemented by any class that implements the interface.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is an abstract class?",
      a: "An abstract class is a class that cannot be instantiated and may contain abstract methods.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "Can an abstract class have a constructor?",
      a: "Yes, abstract classes can have constructors that are called during subclass instantiation.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is the difference between abstract class and interface?",
      a: "Abstract classes can have concrete methods and state; interfaces can only have abstract methods (until Java 8).",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What are access modifiers in Java?",
      a: "Access modifiers define the visibility of classes, methods, and variables (public, private, protected, default).",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is the 'static' keyword in Java?",
      a: "Static is used for class-level members that can be accessed without creating an instance.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "Can we override static methods in Java?",
      a: "No, static methods cannot be overridden, but they can be redefined in subclasses.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is the main() method in Java?",
      a: "The main() method is the entry point of any Java program: public static void main(String[] args).",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "Can we overload the main method in Java?",
      a: "Yes, but the JVM always calls the main(String[] args) version at runtime.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is the difference between == and equals()?",
      a: "== compares memory addresses; equals() compares object content if overridden.",
      difficulty: "Medium",
      category: "Core Java"
    },
    {
      q: "What is a package in Java?",
      a: "A package is a namespace used to group related classes and interfaces together.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is the default package in Java?",
      a: "If no package is declared, the class belongs to the default package.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What are wrapper classes?",
      a: "Wrapper classes convert primitive data types into objects (e.g., int → Integer).",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is autoboxing and unboxing?",
      a: "Autoboxing converts primitives to wrapper objects; unboxing does the reverse.",
      difficulty: "Easy",
      category: "Core Java"
    },
    {
      q: "What is garbage collection in Java?",
      a: "Garbage collection automatically removes unused objects to free up memory.",
      difficulty: "Medium",
      category: "Memory Management"
    },
    {
      q: "Can we force garbage collection in Java?",
      a: "No, we can only suggest using System.gc(), but JVM decides when to run GC.",
      difficulty: "Medium",
      category: "Memory Management"
    },
    {
      q: "What are final, finally, and finalize?",
      a: "final = constant, finally = block for cleanup, finalize() = method before object destruction.",
      difficulty: "Medium",
      category: "Core Java"
    },
    {
      q: "What is a static block?",
      a: "Static block runs once when the class is loaded, used for initializing static variables.",
      difficulty: "Medium",
      category: "Core Java"
    },
    {
      q: "What is a default constructor?",
      a: "A no-argument constructor automatically created by the compiler if no other constructor is defined.",
      difficulty: "Easy",
      category: "OOP"
    },
    {
      q: "Can a constructor be private?",
      a: "Yes, used in Singleton patterns to restrict object creation.",
      difficulty: "Medium",
      category: "Design Patterns"
    },
    {
      q: "What is the difference between 'this()' and 'super()'?",
      a: "this() calls another constructor in the same class; super() calls the parent constructor.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "Can we call a constructor from another constructor?",
      a: "Yes, using this() keyword as the first statement.",
      difficulty: "Medium",
      category: "OOP"
    },
    {
      q: "What is the use of the 'instanceof' operator?",
      a: "It checks if an object is an instance of a specific class or subclass.",
      difficulty: "Medium",
      category: "Core Java"
    },
    {
      q: "What is the difference between heap and stack memory?",
      a: "Heap stores objects; stack stores method calls and local variables.",
      difficulty: "Medium",
      category: "Memory Management"
    },
    {
      q: "What are Java Collections?",
      a: "Collections are data structures in Java used to store, retrieve, and manipulate groups of objects efficiently.",
      difficulty: "Easy",
      category: "Collections"
    },
    {
      q: "What is the Collection Framework in Java?",
      a: "It is a unified architecture that provides interfaces, classes, and algorithms for managing groups of objects.",
      difficulty: "Medium",
      category: "Collections"
    },
    {
      q: "What are the main interfaces in the Java Collection Framework?",
      a: "Key interfaces include List, Set, Queue, and Map.",
      difficulty: "Easy",
      category: "Collections"
    },
    {
      q: "What is the difference between List and Set?",
      a: "List allows duplicate elements and maintains insertion order, while Set disallows duplicates.",
      difficulty: "Easy",
      category: "Collections"
    },
    {
      q: "What is an ArrayList?",
      a: "ArrayList is a resizable array implementation of the List interface.",
      difficulty: "Easy",
      category: "Collections"
    },
    {
      q: "What is a LinkedList?",
      a: "LinkedList is a doubly linked list that implements List and Deque interfaces.",
      difficulty: "Medium",
      category: "Collections"
    },
    {
      q: "What is the difference between ArrayList and LinkedList?",
      a: "ArrayList is faster for retrieval, while LinkedList is faster for insertions and deletions.",
      difficulty: "Medium",
      category: "Collections"
    },
    {
      q: "What is a HashSet?",
      a: "HashSet is a collection that does not allow duplicate elements and uses hashing for storage.",
      difficulty: "Easy",
      category: "Collections"
    },
    {
      q: "What is a TreeSet?",
      a: "TreeSet stores elements in sorted order using a Red-Black tree.",
      difficulty: "Medium",
      category: "Collections"
    },
    {
      q: "What is a HashMap?",
      a: "HashMap stores key-value pairs and allows fast retrieval based on the key’s hash value.",
      difficulty: "Easy",
      category: "Collections"
    },
    {
      q: "What is the difference between HashMap and Hashtable?",
      a: "HashMap is non-synchronized and allows nulls; Hashtable is synchronized and doesn’t allow nulls.",
      difficulty: "Medium",
      category: "Collections"
    },
    {
      q: "What is a LinkedHashMap?",
      a: "LinkedHashMap maintains insertion order in addition to key-value storage.",
      difficulty: "Medium",
      category: "Collections"
    },
    {
      q: "What is a TreeMap?",
      a: "TreeMap stores key-value pairs in sorted order according to the natural ordering of keys.",
      difficulty: "Medium",
      category: "Collections"
    },
    {
      q: "What is the difference between Comparable and Comparator?",
      a: "Comparable defines natural ordering within a class; Comparator provides custom ordering externally.",
      difficulty: "Medium",
      category: "Collections"
    },
    {
      q: "What is Iterator in Java?",
      a: "Iterator is used to traverse elements of a collection one by one.",
      difficulty: "Easy",
      category: "Collections"
    },
    {
      q: "What is ListIterator?",
      a: "ListIterator allows bidirectional traversal of lists and supports element modification.",
      difficulty: "Medium",
      category: "Collections"
    },
    {
      q: "What is the difference between fail-fast and fail-safe iterators?",
      a: "Fail-fast throws ConcurrentModificationException; fail-safe works on a cloned copy.",
      difficulty: "Hard",
      category: "Collections"
    },
    {
      q: "What is the use of the Collections class?",
      a: "The Collections class provides utility methods like sort(), reverse(), and max() for collections.",
      difficulty: "Easy",
      category: "Collections"
    },
    {
      q: "What is the difference between Enumeration and Iterator?",
      a: "Enumeration is legacy and read-only; Iterator can remove elements while iterating.",
      difficulty: "Medium",
      category: "Collections"
    },
    {
      q: "What is the Map interface?",
      a: "Map stores key-value pairs where keys are unique and values can be duplicated.",
      difficulty: "Easy",
      category: "Collections"
    },
    {
      q: "How are keys compared in a HashMap?",
      a: "Keys are compared using equals() and hashCode() methods.",
      difficulty: "Medium",
      category: "Collections"
    },
    {
      q: "What happens when two keys have the same hashcode in a HashMap?",
      a: "They are stored in a linked list or tree structure in the same bucket.",
      difficulty: "Hard",
      category: "Collections"
    },
    {
      q: "What is String in Java?",
      a: "String is an immutable sequence of characters stored in the String pool.",
      difficulty: "Easy",
      category: "String Handling"
    },
    {
      q: "Why are Strings immutable in Java?",
      a: "Immutability ensures thread safety, security, and string pool optimization.",
      difficulty: "Medium",
      category: "String Handling"
    },
    {
      q: "What is StringBuffer?",
      a: "StringBuffer is a mutable, thread-safe sequence of characters.",
      difficulty: "Medium",
      category: "String Handling"
    },
    {
      q: "What is StringBuilder?",
      a: "StringBuilder is a mutable and faster alternative to StringBuffer without synchronization.",
      difficulty: "Medium",
      category: "String Handling"
    },
    {
      q: "What is the difference between equals() and == in Strings?",
      a: "equals() compares values; == compares object references.",
      difficulty: "Easy",
      category: "String Handling"
    },
    {
      q: "How are Strings stored in memory?",
      a: "They are stored in a special memory area called the String Constant Pool.",
      difficulty: "Medium",
      category: "String Handling"
    },
    {
      q: "What is exception handling in Java?",
      a: "It handles runtime errors gracefully using try, catch, finally, throw, and throws.",
      difficulty: "Easy",
      category: "Exception Handling"
    },
    {
      q: "What is the difference between checked and unchecked exceptions?",
      a: "Checked exceptions are compile-time; unchecked are runtime exceptions.",
      difficulty: "Medium",
      category: "Exception Handling"
    },
    {
      q: "What are the keywords used in exception handling?",
      a: "try, catch, finally, throw, and throws.",
      difficulty: "Easy",
      category: "Exception Handling"
    },
    {
      q: "Can we have multiple catch blocks?",
      a: "Yes, to handle different types of exceptions separately.",
      difficulty: "Easy",
      category: "Exception Handling"
    },
    {
      q: "What is the finally block used for?",
      a: "The finally block executes cleanup code like closing files or releasing resources.",
      difficulty: "Easy",
      category: "Exception Handling"
    },
    {
      q: "Can we have a try block without a catch block?",
      a: "Yes, only if it is followed by a finally block.",
      difficulty: "Medium",
      category: "Exception Handling"
    },
    {
      q: "What is throw and throws keyword?",
      a: "throw is used to explicitly throw an exception; throws declares exceptions in a method signature.",
      difficulty: "Medium",
      category: "Exception Handling"
    },
    {
      q: "What is the difference between final, finally, and finalize?",
      a: "final = constant, finally = cleanup block, finalize() = called before object destruction.",
      difficulty: "Medium",
      category: "Core Java"
    },
    {
      q: "What is File I/O in Java?",
      a: "File I/O allows reading and writing data from files using classes like FileReader, FileWriter, BufferedReader, etc.",
      difficulty: "Medium",
      category: "File I/O"
    },
    {
      q: "What is serialization?",
      a: "Serialization converts an object into a byte stream for storage or transmission.",
      difficulty: "Medium",
      category: "File I/O"
    },
    {
      q: "What is deserialization?",
      a: "Deserialization reconstructs an object from its byte stream representation.",
      difficulty: "Medium",
      category: "File I/O"
    },
    {
      q: "What is the transient keyword?",
      a: "The transient keyword prevents a variable from being serialized.",
      difficulty: "Hard",
      category: "File I/O"
    },
    {
      q: "What are Java 8 features?",
      a: "Java 8 introduced Lambdas, Streams, Optional, Functional Interfaces, and the Date/Time API.",
      difficulty: "Medium",
      category: "Java 8"
    },
    {
      q: "What is a lambda expression?",
      a: "A lambda expression provides a concise way to represent anonymous functions.",
      difficulty: "Medium",
      category: "Java 8"
    },
    {
      q: "What is a functional interface?",
      a: "A functional interface has exactly one abstract method and can be used with lambdas.",
      difficulty: "Medium",
      category: "Java 8"
    },
    {
      q: "What is the Stream API in Java?",
      a: "The Stream API processes data declaratively using map, filter, and reduce operations.",
      difficulty: "Medium",
      category: "Java 8"
    },
    {
      q: "What is Optional in Java?",
      a: "Optional is a container object that may or may not contain a non-null value, used to avoid NullPointerException.",
      difficulty: "Medium",
      category: "Java 8"
    },
    {
      q: "What is the default method in an interface?",
      a: "A default method allows adding new functionality to interfaces without breaking old implementations.",
      difficulty: "Medium",
      category: "Java 8"
    },
    {
      q: "What is the difference between map() and flatMap()?",
      a: "map() transforms each element; flatMap() flattens nested structures.",
      difficulty: "Hard",
      category: "Java 8"
    },
    {
      q: "What is the purpose of method references in Java 8?",
      a: "Method references provide shorthand syntax to refer to existing methods using :: operator.",
      difficulty: "Medium",
      category: "Java 8"
    },
    {
      q: "What is the new Date and Time API in Java 8?",
      a: "Java 8 introduced java.time package with classes like LocalDate, LocalTime, and ZonedDateTime.",
      difficulty: "Medium",
      category: "Java 8"
    },
    {
      q: "What is Stream.filter() used for?",
      a: "It filters elements of a stream based on a given predicate condition.",
      difficulty: "Easy",
      category: "Java 8"
    },
    {
      q: "Can we use parallel streams in Java?",
      a: "Yes, parallel streams split tasks across multiple threads for faster processing.",
      difficulty: "Hard",
      category: "Java 8"
    },
    {
      q: "What is a Predicate in Java?",
      a: "Predicate is a functional interface that takes an input and returns a boolean result.",
      difficulty: "Medium",
      category: "Java 8"
    },
    {
      q: "What is Function interface in Java?",
      a: "Function<T,R> represents a function that accepts one argument and produces a result.",
      difficulty: "Medium",
      category: "Java 8"
    },
    {
      q: "What is a thread in Java?",
      a: "A thread is a lightweight subprocess that enables concurrent execution in a Java program.",
      difficulty: "Easy",
      category: "Multithreading"
    },
    {
      q: "How do you create a thread in Java?",
      a: "By extending the Thread class or implementing the Runnable interface.",
      difficulty: "Easy",
      category: "Multithreading"
    },
    {
      q: "What is the difference between Thread and Runnable?",
      a: "Thread is a class that represents a thread; Runnable is an interface that defines the run() method.",
      difficulty: "Medium",
      category: "Multithreading"
    },
    {
      q: "What is the lifecycle of a thread?",
      a: "The thread lifecycle includes New, Runnable, Running, Blocked/Waiting, and Terminated states.",
      difficulty: "Medium",
      category: "Multithreading"
    },
    {
      q: "What are the main methods of the Thread class?",
      a: "Important methods include start(), run(), sleep(), join(), and interrupt().",
      difficulty: "Easy",
      category: "Multithreading"
    },
    {
      q: "What is thread synchronization?",
      a: "Synchronization ensures that only one thread accesses a shared resource at a time.",
      difficulty: "Medium",
      category: "Multithreading"
    },
    {
      q: "What is a synchronized block in Java?",
      a: "A synchronized block restricts access to a particular section of code for only one thread at a time.",
      difficulty: "Medium",
      category: "Multithreading"
    },
    {
      q: "What is the difference between synchronized method and synchronized block?",
      a: "A synchronized method locks the entire method; a synchronized block locks only the specified section.",
      difficulty: "Medium",
      category: "Multithreading"
    },
    {
      q: "What is inter-thread communication?",
      a: "It allows threads to communicate using wait(), notify(), and notifyAll() methods.",
      difficulty: "Medium",
      category: "Multithreading"
    },
    {
      q: "What is the volatile keyword in Java?",
      a: "volatile ensures visibility of variable changes across threads by reading directly from main memory.",
      difficulty: "Hard",
      category: "Multithreading"
    },
    {
      q: "What is the difference between sleep() and wait()?",
      a: "sleep() pauses a thread without releasing the lock; wait() releases the lock while waiting.",
      difficulty: "Medium",
      category: "Multithreading"
    },
    {
      q: "What is the join() method in Java?",
      a: "join() allows one thread to wait until another thread completes execution.",
      difficulty: "Easy",
      category: "Multithreading"
    },
    {
      q: "What is a daemon thread?",
      a: "A daemon thread runs in the background to perform tasks like garbage collection.",
      difficulty: "Medium",
      category: "Multithreading"
    },
    {
      q: "What is a deadlock in Java?",
      a: "A deadlock occurs when two or more threads are waiting indefinitely for each other’s lock.",
      difficulty: "Hard",
      category: "Concurrency"
    },
    {
      q: "How can we prevent deadlocks?",
      a: "By avoiding nested locks, using tryLock(), or following lock ordering principles.",
      difficulty: "Hard",
      category: "Concurrency"
    },
    {
      q: "What is the Executor framework in Java?",
      a: "It provides a high-level API to manage and control thread execution using thread pools.",
      difficulty: "Medium",
      category: "Concurrency"
    },
    {
      q: "What is Callable and Future in Java?",
      a: "Callable returns a result and can throw exceptions; Future holds the result of an asynchronous computation.",
      difficulty: "Medium",
      category: "Concurrency"
    },
    {
      q: "What is ConcurrentHashMap?",
      a: "A thread-safe implementation of HashMap that allows concurrent read and controlled write operations.",
      difficulty: "Medium",
      category: "Concurrency"
    },
    {
      q: "What is the difference between synchronizedMap and ConcurrentHashMap?",
      a: "synchronizedMap locks the entire map; ConcurrentHashMap locks portions for better concurrency.",
      difficulty: "Hard",
      category: "Concurrency"
    },
    {
      q: "What is the Java Memory Model?",
      a: "It defines how threads interact through memory and how changes by one thread become visible to others.",
      difficulty: "Hard",
      category: "Concurrency"
    },
    {
      q: "What is JDBC?",
      a: "JDBC (Java Database Connectivity) is an API that enables Java programs to interact with databases.",
      difficulty: "Easy",
      category: "JDBC"
    },
    {
      q: "What are the steps to connect Java with a database using JDBC?",
      a: "Load the driver, establish connection, create statement, execute query, and close connection.",
      difficulty: "Easy",
      category: "JDBC"
    },
    {
      q: "What are the JDBC driver types?",
      a: "Type 1: JDBC-ODBC Bridge, Type 2: Native-API, Type 3: Network Protocol, Type 4: Thin Driver.",
      difficulty: "Medium",
      category: "JDBC"
    },
    {
      q: "What is the difference between Statement and PreparedStatement?",
      a: "PreparedStatement is precompiled and more efficient; Statement executes static SQL queries.",
      difficulty: "Medium",
      category: "JDBC"
    },
    {
      q: "What is CallableStatement?",
      a: "CallableStatement is used to execute stored procedures in a database.",
      difficulty: "Medium",
      category: "JDBC"
    },
    {
      q: "What is ResultSet in JDBC?",
      a: "ResultSet represents a table of data returned by executing SQL queries.",
      difficulty: "Easy",
      category: "JDBC"
    },
    {
      q: "What are batch updates in JDBC?",
      a: "Batch updates allow executing multiple SQL statements together for better performance.",
      difficulty: "Medium",
      category: "JDBC"
    },
    {
      q: "What is connection pooling?",
      a: "Connection pooling reuses database connections for multiple requests to improve efficiency.",
      difficulty: "Medium",
      category: "JDBC"
    },
    {
      q: "What is a transaction in JDBC?",
      a: "A transaction is a sequence of operations treated as a single logical unit of work.",
      difficulty: "Medium",
      category: "JDBC"
    },
    {
      q: "What is auto-commit in JDBC?",
      a: "By default, JDBC commits every SQL statement automatically unless auto-commit is disabled.",
      difficulty: "Easy",
      category: "JDBC"
    },
    {
      q: "What are design patterns in Java?",
      a: "Design patterns are reusable solutions to common software design problems.",
      difficulty: "Easy",
      category: "Design Patterns"
    },
    {
      q: "What are the three types of design patterns?",
      a: "Creational, Structural, and Behavioral patterns.",
      difficulty: "Easy",
      category: "Design Patterns"
    },
    {
      q: "What is the Singleton pattern?",
      a: "Singleton ensures that only one instance of a class exists throughout the application.",
      difficulty: "Medium",
      category: "Design Patterns"
    },
    {
      q: "How do you implement a Singleton in Java?",
      a: "By using a private constructor, static instance, and a public static getInstance() method.",
      difficulty: "Medium",
      category: "Design Patterns"
    },
    {
      q: "What is the Factory pattern?",
      a: "Factory pattern creates objects without exposing instantiation logic to the client.",
      difficulty: "Medium",
      category: "Design Patterns"
    },
    {
      q: "What is the Abstract Factory pattern?",
      a: "Abstract Factory provides an interface for creating families of related objects.",
      difficulty: "Hard",
      category: "Design Patterns"
    },
    {
      q: "What is the Builder pattern?",
      a: "Builder pattern constructs complex objects step by step.",
      difficulty: "Medium",
      category: "Design Patterns"
    },
    {
      q: "What is the Prototype pattern?",
      a: "Prototype pattern creates new objects by copying existing ones.",
      difficulty: "Medium",
      category: "Design Patterns"
    },
    {
      q: "What is the Adapter pattern?",
      a: "Adapter pattern allows incompatible interfaces to work together by converting one interface into another.",
      difficulty: "Medium",
      category: "Design Patterns"
    },
    {
      q: "What is the Decorator pattern?",
      a: "Decorator pattern adds new functionalities to an object dynamically without altering its structure.",
      difficulty: "Medium",
      category: "Design Patterns"
    },
    {
      q: "What is the Observer pattern?",
      a: "Observer pattern defines a one-to-many relationship where observers are notified of changes in the subject.",
      difficulty: "Medium",
      category: "Design Patterns"
    },
    {
      q: "What is the Strategy pattern?",
      a: "Strategy pattern allows selecting algorithms at runtime using interchangeable strategies.",
      difficulty: "Medium",
      category: "Design Patterns"
    },
    {
      q: "What is the Command pattern?",
      a: "Command pattern encapsulates a request as an object, allowing undo and redo functionality.",
      difficulty: "Hard",
      category: "Design Patterns"
    },
    {
      q: "What is the Proxy pattern?",
      a: "Proxy pattern provides a surrogate or placeholder for another object to control access.",
      difficulty: "Hard",
      category: "Design Patterns"
    },
    {
      q: "What is the Template Method pattern?",
      a: "Template Method defines the skeleton of an algorithm and lets subclasses redefine certain steps.",
      difficulty: "Medium",
      category: "Design Patterns"
    },
    {
      q: "What is the MVC pattern?",
      a: "Model-View-Controller separates application logic into Model, View, and Controller components.",
      difficulty: "Easy",
      category: "Design Patterns"
    },
    {
      q: "What is the difference between design patterns and algorithms?",
      a: "Design patterns are reusable design templates; algorithms are step-by-step computational procedures.",
      difficulty: "Medium",
      category: "Design Patterns"
    },
    {
      q: "What are marker interfaces in Java?",
      a: "Marker interfaces are empty interfaces like Serializable and Cloneable used for metadata tagging.",
      difficulty: "Medium",
      category: "Advanced Java"
    },
    {
      q: "What is reflection in Java?",
      a: "Reflection allows inspecting and modifying classes, methods, and fields at runtime.",
      difficulty: "Hard",
      category: "Advanced Java"
    },
    {
      q: "What is annotation in Java?",
      a: "Annotations provide metadata information to the compiler and runtime environment.",
      difficulty: "Medium",
      category: "Advanced Java"
    },
    {
      q: "What is the difference between checked and runtime annotations?",
      a: "Checked annotations are processed at compile-time, runtime annotations at runtime.",
      difficulty: "Medium",
      category: "Advanced Java"
    },
    {
      q: "What is JavaBeans?",
      a: "JavaBeans are reusable software components that follow specific conventions like getters/setters and a no-arg constructor.",
      difficulty: "Easy",
      category: "Advanced Java"
    },
    {
      q: "What is serialization UID?",
      a: "It is a unique identifier that ensures compatibility during the serialization and deserialization process.",
      difficulty: "Medium",
      category: "Advanced Java"
    },

    {
      q: "What is the Spring Framework?",
      a: "Spring is a lightweight framework that provides comprehensive infrastructure support for developing Java applications.",
      difficulty: "Easy",
      category: "Spring"
    },
    {
      q: "What are the main features of the Spring Framework?",
      a: "Inversion of Control (IoC), Dependency Injection (DI), AOP, and transaction management.",
      difficulty: "Easy",
      category: "Spring"
    },
    {
      q: "What is Dependency Injection?",
      a: "Dependency Injection is a design pattern where an object receives its dependencies from an external source rather than creating them.",
      difficulty: "Medium",
      category: "Spring"
    },
    {
      q: "What are the types of Dependency Injection in Spring?",
      a: "Constructor-based and Setter-based injection.",
      difficulty: "Easy",
      category: "Spring"
    },
    {
      q: "What is Inversion of Control (IoC)?",
      a: "IoC is the principle where control of object creation and lifecycle is transferred from the application code to the Spring container.",
      difficulty: "Medium",
      category: "Spring"
    },
    {
      q: "What are the different types of Spring containers?",
      a: "BeanFactory, ApplicationContext, WebApplicationContext.",
      difficulty: "Medium",
      category: "Spring"
    },
    {
      q: "What is a Spring Bean?",
      a: "A Spring Bean is an object managed by the Spring IoC container.",
      difficulty: "Easy",
      category: "Spring"
    },
    {
      q: "What are the different bean scopes in Spring?",
      a: "singleton, prototype, request, session, and global-session.",
      difficulty: "Medium",
      category: "Spring"
    },
    {
      q: "What is autowiring in Spring?",
      a: "Autowiring automatically injects dependencies without explicit configuration using annotations like @Autowired.",
      difficulty: "Easy",
      category: "Spring"
    },
    {
      q: "What are Spring stereotypes?",
      a: "Annotations like @Component, @Service, @Repository, and @Controller used for component scanning.",
      difficulty: "Medium",
      category: "Spring"
    },
    {
      q: "What is Spring Boot?",
      a: "Spring Boot simplifies Spring development by providing auto-configuration and an embedded server for rapid application setup.",
      difficulty: "Easy",
      category: "Spring Boot"
    },
    {
      q: "What are the advantages of Spring Boot?",
      a: "Auto-configuration, embedded Tomcat, production-ready features, and minimal configuration.",
      difficulty: "Easy",
      category: "Spring Boot"
    },
    {
      q: "What is @SpringBootApplication annotation?",
      a: "It’s a combination of @Configuration, @EnableAutoConfiguration, and @ComponentScan annotations.",
      difficulty: "Easy",
      category: "Spring Boot"
    },
    {
      q: "What is a Spring Boot starter?",
      a: "Starters are dependency descriptors that simplify Maven or Gradle configurations, e.g., spring-boot-starter-web.",
      difficulty: "Medium",
      category: "Spring Boot"
    },
    {
      q: "What is the purpose of application.properties?",
      a: "It stores configuration values such as database URLs, port numbers, and logging settings.",
      difficulty: "Easy",
      category: "Spring Boot"
    },
    {
      q: "What is Spring Data JPA?",
      a: "Spring Data JPA simplifies database operations by providing repositories for CRUD operations using JPA.",
      difficulty: "Medium",
      category: "Spring Boot"
    },
    {
      q: "What is the difference between @Component and @Service?",
      a: "@Service is a specialized version of @Component, used to indicate business logic layer components.",
      difficulty: "Medium",
      category: "Spring"
    },
    {
      q: "What is AOP in Spring?",
      a: "Aspect-Oriented Programming enables separation of cross-cutting concerns like logging and security.",
      difficulty: "Hard",
      category: "Spring"
    },
    {
      q: "What are the main components of AOP?",
      a: "Aspect, Advice, Pointcut, Join Point, and Weaving.",
      difficulty: "Hard",
      category: "Spring"
    },
    {
      q: "What is the use of @Transactional annotation?",
      a: "It ensures that a method or class executes within a transactional context.",
      difficulty: "Medium",
      category: "Spring"
    },
    {
      q: "What is Hibernate?",
      a: "Hibernate is an ORM framework that maps Java objects to database tables.",
      difficulty: "Easy",
      category: "Hibernate"
    },
    {
      q: "What is ORM?",
      a: "Object-Relational Mapping converts data between incompatible systems using object-oriented programming.",
      difficulty: "Medium",
      category: "Hibernate"
    },
    {
      q: "What are the benefits of Hibernate?",
      a: "Reduces boilerplate JDBC code, provides caching, supports transactions, and is database-independent.",
      difficulty: "Easy",
      category: "Hibernate"
    },
    {
      q: "What are Hibernate annotations?",
      a: "Annotations like @Entity, @Table, @Id, @Column, and @GeneratedValue define mapping between Java and database tables.",
      difficulty: "Medium",
      category: "Hibernate"
    },
    {
      q: "What is lazy loading in Hibernate?",
      a: "Lazy loading delays fetching of associated data until it’s accessed.",
      difficulty: "Medium",
      category: "Hibernate"
    },
    {
      q: "What are the states of a Hibernate object?",
      a: "Transient, Persistent, and Detached.",
      difficulty: "Medium",
      category: "Hibernate"
    },
    {
      q: "What is HQL?",
      a: "Hibernate Query Language is an object-oriented query language similar to SQL but operates on entity objects.",
      difficulty: "Medium",
      category: "Hibernate"
    },
    {
      q: "What is caching in Hibernate?",
      a: "Caching improves performance by storing entities in memory to reduce database access.",
      difficulty: "Hard",
      category: "Hibernate"
    },
    {
      q: "What is the difference between first-level and second-level cache in Hibernate?",
      a: "First-level cache is session-specific; second-level cache is shared across sessions.",
      difficulty: "Hard",
      category: "Hibernate"
    },
    {
      q: "What is a microservice?",
      a: "A microservice is a small, independent service that performs a specific business function.",
      difficulty: "Easy",
      category: "Microservices"
    },
    {
      q: "What are the advantages of microservices architecture?",
      a: "Scalability, flexibility, independent deployment, and better fault isolation.",
      difficulty: "Medium",
      category: "Microservices"
    },
    {
      q: "What is the difference between monolithic and microservices architecture?",
      a: "Monolithic applications are single units; microservices are modular and independently deployable.",
      difficulty: "Medium",
      category: "Microservices"
    },
    {
      q: "What tools are commonly used in microservices?",
      a: "Spring Boot, Docker, Kubernetes, and REST APIs.",
      difficulty: "Medium",
      category: "Microservices"
    },
    {
      q: "What is REST API?",
      a: "REST (Representational State Transfer) is an architectural style for designing stateless web services.",
      difficulty: "Easy",
      category: "Spring Boot"
    },
    {
      q: "What is @RestController in Spring Boot?",
      a: "@RestController combines @Controller and @ResponseBody to simplify REST API creation.",
      difficulty: "Easy",
      category: "Spring Boot"
    },
    {
      q: "What is an actuator in Spring Boot?",
      a: "Actuator provides production-ready features like health checks and metrics monitoring.",
      difficulty: "Medium",
      category: "Spring Boot"
    },
    {
      q: "What is the difference between SOAP and REST?",
      a: "SOAP is protocol-based and uses XML; REST is architecture-based and supports multiple formats like JSON.",
      difficulty: "Medium",
      category: "Web Services"
    },
    {
      q: "What is the JVM?",
      a: "Java Virtual Machine is an abstract machine that executes Java bytecode.",
      difficulty: "Easy",
      category: "JVM Internals"
    },
    {
      q: "What are the components of JVM?",
      a: "Class Loader, Memory Area, Execution Engine, and Native Interface.",
      difficulty: "Medium",
      category: "JVM Internals"
    },
    {
      q: "What is JIT compiler?",
      a: "Just-In-Time compiler converts bytecode into native machine code during runtime for faster execution.",
      difficulty: "Medium",
      category: "JVM Internals"
    },
    {
      q: "What are the memory areas in JVM?",
      a: "Heap, Stack, Method Area, PC Register, and Native Method Stack.",
      difficulty: "Hard",
      category: "JVM Internals"
    },
    {
      q: "What is garbage collection in Java?",
      a: "Garbage collection automatically frees memory by removing unreachable objects.",
      difficulty: "Easy",
      category: "JVM Internals"
    },
    {
      q: "What are different types of garbage collectors?",
      a: "Serial GC, Parallel GC, CMS, and G1 Garbage Collector.",
      difficulty: "Medium",
      category: "JVM Internals"
    },
    {
      q: "What is memory leak in Java?",
      a: "A memory leak occurs when objects are no longer needed but remain referenced, preventing garbage collection.",
      difficulty: "Hard",
      category: "Performance"
    },
    {
      q: "What is class loading in Java?",
      a: "It is the process of loading class files into the JVM using the class loader subsystem.",
      difficulty: "Medium",
      category: "JVM Internals"
    },
    {
      q: "What are the phases of class loading?",
      a: "Loading, Linking (Verification, Preparation, Resolution), and Initialization.",
      difficulty: "Hard",
      category: "JVM Internals"
    },
    {
      q: "What is JDK Flight Recorder?",
      a: "It’s a profiling tool that records JVM and application performance data for diagnostics.",
      difficulty: "Hard",
      category: "Performance"
    },
    {
      q: "What are some ways to improve Java performance?",
      a: "Use efficient data structures, avoid unnecessary synchronization, and optimize garbage collection.",
      difficulty: "Medium",
      category: "Performance"
    },
    {
      q: "What is the difference between stack and heap memory?",
      a: "Stack stores method calls and local variables; heap stores objects and class instances.",
      difficulty: "Medium",
      category: "Memory Management"
    },
    {
      q: "What is the difference between strong, weak, soft, and phantom references?",
      a: "They determine how long objects are retained in memory and when GC can reclaim them.",
      difficulty: "Hard",
      category: "Memory Management"
    },
    {
      q: "What are some common performance profiling tools for Java?",
      a: "VisualVM, JConsole, JProfiler, and Java Mission Control.",
      difficulty: "Medium",
      category: "Performance"
    },
    {
      q: "What is the difference between fail-fast and fail-safe iterators?",
      a: "Fail-fast throws ConcurrentModificationException; fail-safe uses a copy of the collection.",
      difficulty: "Medium",
      category: "Collections"
    },
    {
      q: "What are Java modules?",
      a: "Modules introduced in Java 9 encapsulate packages and manage dependencies using module-info.java.",
      difficulty: "Hard",
      category: "Java 9+"
    },
    {
      q: "What is record class in Java?",
      a: "Records (Java 14+) are immutable data classes that reduce boilerplate code for DTOs.",
      difficulty: "Medium",
      category: "Java 14+"
    },
    {
      q: "What are sealed classes in Java?",
      a: "Sealed classes restrict which other classes can extend or implement them.",
      difficulty: "Medium",
      category: "Java 17+"
    },
    {
      q: "What is a virtual thread in Java?",
      a: "Virtual threads (Java 21+) are lightweight threads that reduce memory and improve concurrency.",
      difficulty: "Hard",
      category: "Java 21+"
    },
    {
      q: "Explain the difference between traditional and reactive programming in Java.",
      a: "Traditional is blocking and synchronous; reactive is non-blocking and asynchronous.",
      difficulty: "Hard",
      category: "Reactive Java"
    }
  ];

  const categories = ["All", ...new Set(questions.map(q => q.category))];

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "All" || q.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "#43e97b";
      case "Intermediate": return "#fcd34d";
      case "Advance": return "#f5576c";
      default: return "#667eea";
    }
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="interview-container">
      {/* Profile Circle */}
      <Link to="/pages/profile" className="profile-circle">
        <div className="profile-avatar">
          <span className="profile-text">👤</span>
        </div>
        <div className="profile-status"></div>
      </Link>
      {/* Background */}
      <div className="interview-background">
        <div className="interview-grid"></div>
        <div className="interview-orb orb-1"></div>
        <div className="interview-orb orb-2"></div>
      </div>

      {/* Header */}
      <div className="interview-header">
        <div className="header-badge-interview">
          <span className="badge-icon-interview">🎯</span>
          <span className="badge-text-interview">Interview Preparation</span>
        </div>
        <h1 className="interview-title">
          Java <span className="highlight-interview">Interview Questions</span>
        </h1>
        <p className="interview-subtitle">
          50 Essential Java questions covering all fundamental concepts for interview success
        </p>

        {/* Stats */}
        <div className="interview-stats">
          <div className="stat-card-interview">
            <span className="stat-number-interview">{questions.length}</span>
            <span className="stat-label-interview">Questions</span>
          </div>
          <div className="stat-card-interview">
            <span className="stat-number-interview">{categories.length - 1}</span>
            <span className="stat-label-interview">Categories</span>
          </div>
          <div className="stat-card-interview">
            <span className="stat-number-interview">3</span>
            <span className="stat-label-interview">Difficulty Levels</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="interview-filters">
        <div className="search-bar-interview">
          <span className="search-icon-interview">🔍</span>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input-interview"
          />
          {searchTerm && (
            <button
              className="clear-search-interview"
              onClick={() => setSearchTerm("")}
            >
              ✕
            </button>
          )}
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-chip-interview ${filterCategory === category ? "active" : ""}`}
              onClick={() => setFilterCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="results-count-interview">
        Showing {filteredQuestions.length} of {questions.length} questions
      </div>

      {/* Questions List */}
      <div className="questions-list">
        {filteredQuestions.map((item, index) => (
          <div
            key={index}
            className={`question-item ${expandedIndex === index ? "expanded" : ""}`}
            onClick={() => toggleExpand(index)}
          >
            <div className="question-header-interview">
              <div className="question-left">
                <span className="question-number-interview">Q{index + 1}</span>
                <h3 className="question-text">{item.q}</h3>
              </div>
              <div className="question-right">
                <span
                  className="difficulty-tag-interview"
                  style={{
                    background: getDifficultyColor(item.difficulty),
                    boxShadow: `0 4px 12px ${getDifficultyColor(item.difficulty)}40`
                  }}
                >
                  {item.difficulty}
                </span>
                <span className={`expand-icon ${expandedIndex === index ? "rotated" : ""}`}>
                  ▼
                </span>
              </div>
            </div>

            {expandedIndex === index && (
              <div className="question-answer">
                <div className="answer-label">Answer:</div>
                <p className="answer-text">{item.a}</p>
                <div className="answer-footer">
                  <span className="category-badge-interview">
                    📁 {item.category}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredQuestions.length === 0 && (
        <div className="no-results-interview">
          <div className="no-results-icon-interview">🔍</div>
          <h3>No questions found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default InterviewQ;