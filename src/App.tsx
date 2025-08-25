import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Play, CheckCircle, BookOpen, Zap, Trophy, Star } from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  htmlCode: string;
  jsCode: string;
  explanation: string;
  keyPoints: string[];
  nextConcept?: string;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Hello World - Your First JavaScript",
    description: "Let's start with the most basic JavaScript - displaying text on a webpage",
    level: 'beginner',
    htmlCode: `<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript</title>
</head>
<body>
    <h1>Welcome to JavaScript!</h1>
    <p id="demo">This will change...</p>
    
    <script>
        document.getElementById("demo").innerHTML = "Hello World!";
    </script>
</body>
</html>`,
    jsCode: `document.getElementById("demo").innerHTML = "Hello World!";`,
    explanation: "This is your first JavaScript code! We're selecting an HTML element with the ID 'demo' and changing its content to 'Hello World!'.",
    keyPoints: [
      "document.getElementById() finds an HTML element",
      "innerHTML changes the content inside an element",
      "JavaScript runs when the page loads"
    ],
    nextConcept: "Now let's learn about variables to store data"
  },
  {
    id: 2,
    title: "Variables - Storing Information",
    description: "Learn how to store and use data with variables",
    level: 'beginner',
    htmlCode: `<!DOCTYPE html>
<html>
<body>
    <h1>Working with Variables</h1>
    <p id="output"></p>
    <button onclick="showInfo()">Click to see my info</button>
    
    <script>
        let name = "Alex";
        let age = 25;
        let isStudent = true;
        
        function showInfo() {
            document.getElementById("output").innerHTML = 
                "Name: " + name + "<br>" +
                "Age: " + age + "<br>" +
                "Is Student: " + isStudent;
        }
    </script>
</body>
</html>`,
    jsCode: `let name = "Alex";
let age = 25;
let isStudent = true;

function showInfo() {
    document.getElementById("output").innerHTML = 
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Is Student: " + isStudent;
}`,
    explanation: "Variables are containers that store data. We use 'let' to create variables that can change, and we can store text (strings), numbers, and true/false values (booleans).",
    keyPoints: [
      "let creates a variable that can change",
      "Strings use quotes: \"text\" or 'text'",
      "Numbers don't need quotes: 25",
      "Booleans are true or false",
      "Functions group code together"
    ],
    nextConcept: "Let's make our code interactive with user input"
  },
  {
    id: 3,
    title: "User Input - Making It Interactive",
    description: "Get input from users and respond to their actions",
    level: 'beginner',
    htmlCode: `<!DOCTYPE html>
<html>
<body>
    <h1>Interactive JavaScript</h1>
    <input type="text" id="userName" placeholder="Enter your name">
    <button onclick="greetUser()">Greet Me!</button>
    <p id="greeting"></p>
    
    <script>
        function greetUser() {
            let name = document.getElementById("userName").value;
            let currentTime = new Date().getHours();
            let timeGreeting;
            
            if (currentTime < 12) {
                timeGreeting = "Good morning";
            } else if (currentTime < 18) {
                timeGreeting = "Good afternoon";
            } else {
                timeGreeting = "Good evening";
            }
            
            document.getElementById("greeting").innerHTML = 
                timeGreeting + ", " + name + "! Welcome to JavaScript!";
        }
    </script>
</body>
</html>`,
    jsCode: `function greetUser() {
    let name = document.getElementById("userName").value;
    let currentTime = new Date().getHours();
    let timeGreeting;
    
    if (currentTime < 12) {
        timeGreeting = "Good morning";
    } else if (currentTime < 18) {
        timeGreeting = "Good afternoon";
    } else {
        timeGreeting = "Good evening";
    }
    
    document.getElementById("greeting").innerHTML = 
        timeGreeting + ", " + name + "! Welcome to JavaScript!";
}`,
    explanation: "Now we're getting input from users and making decisions! We use .value to get text from input fields, and if/else statements to make choices based on conditions.",
    keyPoints: [
      ".value gets text from input fields",
      "if/else statements make decisions",
      "new Date() gets current date and time",
      "We can chain conditions with else if",
      "Functions can be called when buttons are clicked"
    ],
    nextConcept: "Let's work with lists of data using arrays"
  },
  {
    id: 4,
    title: "Arrays - Working with Lists",
    description: "Store and manipulate multiple pieces of data",
    level: 'beginner',
    htmlCode: `<!DOCTYPE html>
<html>
<body>
    <h1>My Favorite Movies</h1>
    <button onclick="addMovie()">Add Random Movie</button>
    <button onclick="showMovies()">Show All Movies</button>
    <button onclick="removeMovie()">Remove Last Movie</button>
    <ul id="movieList"></ul>
    <p id="movieCount"></p>
    
    <script>
        let movies = ["The Matrix", "Inception", "Interstellar"];
        let possibleMovies = ["Avatar", "Titanic", "Star Wars", "Jurassic Park", "The Avengers"];
        
        function showMovies() {
            let listHTML = "";
            for (let i = 0; i < movies.length; i++) {
                listHTML += "<li>" + movies[i] + "</li>";
            }
            document.getElementById("movieList").innerHTML = listHTML;
            document.getElementById("movieCount").innerHTML = 
                "Total movies: " + movies.length;
        }
        
        function addMovie() {
            let randomIndex = Math.floor(Math.random() * possibleMovies.length);
            let newMovie = possibleMovies[randomIndex];
            movies.push(newMovie);
            showMovies();
        }
        
        function removeMovie() {
            if (movies.length > 0) {
                movies.pop();
                showMovies();
            }
        }
        
        // Show initial movies
        showMovies();
    </script>
</body>
</html>`,
    jsCode: `let movies = ["The Matrix", "Inception", "Interstellar"];
let possibleMovies = ["Avatar", "Titanic", "Star Wars", "Jurassic Park", "The Avengers"];

function showMovies() {
    let listHTML = "";
    for (let i = 0; i < movies.length; i++) {
        listHTML += "<li>" + movies[i] + "</li>";
    }
    document.getElementById("movieList").innerHTML = listHTML;
    document.getElementById("movieCount").innerHTML = 
        "Total movies: " + movies.length;
}

function addMovie() {
    let randomIndex = Math.floor(Math.random() * possibleMovies.length);
    let newMovie = possibleMovies[randomIndex];
    movies.push(newMovie);
    showMovies();
}

function removeMovie() {
    if (movies.length > 0) {
        movies.pop();
        showMovies();
    }
}`,
    explanation: "Arrays let us store multiple items in one variable. We can add items with push(), remove with pop(), and loop through them with for loops.",
    keyPoints: [
      "Arrays store multiple values: [item1, item2, item3]",
      "for loops repeat code for each item",
      "push() adds items to the end",
      "pop() removes the last item",
      "Math.random() generates random numbers",
      ".length tells us how many items are in an array"
    ],
    nextConcept: "Let's organize our code better with objects"
  },
  {
    id: 5,
    title: "Objects - Organizing Related Data",
    description: "Group related information together using objects",
    level: 'intermediate',
    htmlCode: `<!DOCTYPE html>
<html>
<body>
    <h1>Student Management System</h1>
    <div id="studentInfo"></div>
    <button onclick="updateGrade()">Add Random Grade</button>
    <button onclick="showStudent()">Refresh Display</button>
    
    <script>
        let student = {
            name: "Sarah Johnson",
            age: 20,
            major: "Computer Science",
            grades: [85, 92, 78, 96],
            isEnrolled: true,
            
            calculateAverage: function() {
                let sum = 0;
                for (let i = 0; i < this.grades.length; i++) {
                    sum += this.grades[i];
                }
                return Math.round(sum / this.grades.length);
            },
            
            getStatus: function() {
                let avg = this.calculateAverage();
                if (avg >= 90) return "Excellent";
                if (avg >= 80) return "Good";
                if (avg >= 70) return "Satisfactory";
                return "Needs Improvement";
            }
        };
        
        function showStudent() {
            document.getElementById("studentInfo").innerHTML = 
                "<h2>" + student.name + "</h2>" +
                "<p><strong>Age:</strong> " + student.age + "</p>" +
                "<p><strong>Major:</strong> " + student.major + "</p>" +
                "<p><strong>Grades:</strong> " + student.grades.join(", ") + "</p>" +
                "<p><strong>Average:</strong> " + student.calculateAverage() + "%</p>" +
                "<p><strong>Status:</strong> " + student.getStatus() + "</p>" +
                "<p><strong>Enrolled:</strong> " + (student.isEnrolled ? "Yes" : "No") + "</p>";
        }
        
        function updateGrade() {
            let newGrade = Math.floor(Math.random() * 31) + 70; // 70-100
            student.grades.push(newGrade);
            showStudent();
        }
        
        // Show initial student info
        showStudent();
    </script>
</body>
</html>`,
    jsCode: `let student = {
    name: "Sarah Johnson",
    age: 20,
    major: "Computer Science",
    grades: [85, 92, 78, 96],
    isEnrolled: true,
    
    calculateAverage: function() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return Math.round(sum / this.grades.length);
    },
    
    getStatus: function() {
        let avg = this.calculateAverage();
        if (avg >= 90) return "Excellent";
        if (avg >= 80) return "Good";
        if (avg >= 70) return "Satisfactory";
        return "Needs Improvement";
    }
};`,
    explanation: "Objects group related data and functions together. We use properties to store data and methods (functions inside objects) to perform actions. The 'this' keyword refers to the current object.",
    keyPoints: [
      "Objects group related data: {property: value}",
      "Methods are functions inside objects",
      "'this' refers to the current object",
      "Dot notation accesses properties: object.property",
      "Objects can contain arrays, functions, and other objects",
      "join() converts arrays to strings"
    ],
    nextConcept: "Let's handle errors and make our code more robust"
  },
  {
    id: 6,
    title: "Error Handling - Making Code Bulletproof",
    description: "Handle errors gracefully and provide better user experience",
    level: 'intermediate',
    htmlCode: `<!DOCTYPE html>
<html>
<body>
    <h1>Calculator with Error Handling</h1>
    <input type="number" id="num1" placeholder="First number">
    <select id="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">×</option>
        <option value="/">/</option>
    </select>
    <input type="number" id="num2" placeholder="Second number">
    <button onclick="calculate()">Calculate</button>
    <div id="result"></div>
    <div id="history"></div>
    
    <script>
        let calculationHistory = [];
        
        function calculate() {
            try {
                let num1 = parseFloat(document.getElementById("num1").value);
                let num2 = parseFloat(document.getElementById("num2").value);
                let operation = document.getElementById("operation").value;
                
                // Validate inputs
                if (isNaN(num1) || isNaN(num2)) {
                    throw new Error("Please enter valid numbers");
                }
                
                let result;
                switch (operation) {
                    case "+":
                        result = num1 + num2;
                        break;
                    case "-":
                        result = num1 - num2;
                        break;
                    case "*":
                        result = num1 * num2;
                        break;
                    case "/":
                        if (num2 === 0) {
                            throw new Error("Cannot divide by zero!");
                        }
                        result = num1 / num2;
                        break;
                    default:
                        throw new Error("Invalid operation");
                }
                
                // Success - show result
                document.getElementById("result").innerHTML = 
                    "<div style='color: green; font-size: 1.2em; margin: 10px 0;'>" +
                    num1 + " " + operation + " " + num2 + " = " + result.toFixed(2) +
                    "</div>";
                
                // Add to history
                calculationHistory.push({
                    calculation: num1 + " " + operation + " " + num2,
                    result: result.toFixed(2),
                    timestamp: new Date().toLocaleTimeString()
                });
                
                updateHistory();
                
            } catch (error) {
                // Handle errors gracefully
                document.getElementById("result").innerHTML = 
                    "<div style='color: red; font-weight: bold; margin: 10px 0;'>" +
                    "Error: " + error.message +
                    "</div>";
            }
        }
        
        function updateHistory() {
            let historyHTML = "<h3>Calculation History:</h3>";
            for (let i = calculationHistory.length - 1; i >= 0 && i >= calculationHistory.length - 5; i--) {
                let calc = calculationHistory[i];
                historyHTML += "<div style='margin: 5px 0; padding: 5px; background: #f0f0f0;'>" +
                    calc.calculation + " = " + calc.result + " <small>(" + calc.timestamp + ")</small>" +
                    "</div>";
            }
            document.getElementById("history").innerHTML = historyHTML;
        }
    </script>
</body>
</html>`,
    jsCode: `function calculate() {
    try {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let operation = document.getElementById("operation").value;
        
        // Validate inputs
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Please enter valid numbers");
        }
        
        let result;
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "/":
                if (num2 === 0) {
                    throw new Error("Cannot divide by zero!");
                }
                result = num1 / num2;
                break;
            // ... other cases
        }
        
        // Success handling...
        
    } catch (error) {
        // Handle errors gracefully
        document.getElementById("result").innerHTML = 
            "<div style='color: red;'>Error: " + error.message + "</div>";
    }
}`,
    explanation: "Error handling prevents your app from crashing. try/catch blocks let you handle errors gracefully, and you can throw custom errors when something goes wrong.",
    keyPoints: [
      "try/catch blocks handle errors gracefully",
      "throw new Error() creates custom error messages",
      "parseFloat() converts strings to numbers",
      "isNaN() checks if something is 'Not a Number'",
      "switch statements handle multiple conditions",
      "Always validate user input"
    ],
    nextConcept: "Let's work with modern JavaScript features"
  },
  {
    id: 7,
    title: "Modern JavaScript - ES6+ Features",
    description: "Use modern JavaScript syntax for cleaner, more powerful code",
    level: 'advanced',
    htmlCode: `<!DOCTYPE html>
<html>
<body>
    <h1>Modern JavaScript Todo App</h1>
    <input type="text" id="todoInput" placeholder="Enter a new task">
    <button onclick="addTodo()">Add Task</button>
    <div id="todoStats"></div>
    <div id="todoList"></div>
    
    <script>
        class TodoApp {
            constructor() {
                this.todos = [
                    { id: 1, text: "Learn JavaScript basics", completed: true, priority: "high" },
                    { id: 2, text: "Build a web app", completed: false, priority: "medium" },
                    { id: 3, text: "Master ES6+ features", completed: false, priority: "high" }
                ];
                this.nextId = 4;
            }
            
            addTodo(text, priority = "medium") {
                if (!text.trim()) return false;
                
                const newTodo = {
                    id: this.nextId++,
                    text: text.trim(),
                    completed: false,
                    priority,
                    createdAt: new Date()
                };
                
                this.todos.push(newTodo);
                return true;
            }
            
            toggleTodo(id) {
                const todo = this.todos.find(t => t.id === id);
                if (todo) {
                    todo.completed = !todo.completed;
                }
            }
            
            deleteTodo(id) {
                this.todos = this.todos.filter(t => t.id !== id);
            }
            
            getStats() {
                const total = this.todos.length;
                const completed = this.todos.filter(t => t.completed).length;
                const highPriority = this.todos.filter(t => t.priority === "high" && !t.completed).length;
                
                return { total, completed, remaining: total - completed, highPriority };
            }
            
            renderTodos() {
                const todosByPriority = {
                    high: this.todos.filter(t => t.priority === "high"),
                    medium: this.todos.filter(t => t.priority === "medium"),
                    low: this.todos.filter(t => t.priority === "low")
                };
                
                let html = "";
                
                ["high", "medium", "low"].forEach(priority => {
                    if (todosByPriority[priority].length > 0) {
                        html += \`<h3 style="color: \${priority === 'high' ? 'red' : priority === 'medium' ? 'orange' : 'green'}">
                            \${priority.toUpperCase()} Priority
                        </h3>\`;
                        
                        todosByPriority[priority].forEach(todo => {
                            const { id, text, completed } = todo; // Destructuring
                            html += \`
                                <div style="margin: 10px 0; padding: 10px; border: 1px solid #ddd; 
                                           background: \${completed ? '#e8f5e8' : '#fff'}">
                                    <input type="checkbox" \${completed ? 'checked' : ''} 
                                           onchange="todoApp.toggleTodo(\${id}); todoApp.render()">
                                    <span style="text-decoration: \${completed ? 'line-through' : 'none'}; margin: 0 10px;">
                                        \${text}
                                    </span>
                                    <button onclick="todoApp.deleteTodo(\${id}); todoApp.render()" 
                                            style="background: red; color: white; border: none; padding: 5px 10px;">
                                        Delete
                                    </button>
                                </div>
                            \`;
                        });
                    }
                });
                
                return html;
            }
            
            render() {
                const stats = this.getStats();
                
                document.getElementById("todoStats").innerHTML = \`
                    <div style="background: #f0f0f0; padding: 15px; margin: 10px 0; border-radius: 5px;">
                        <strong>Stats:</strong> 
                        \${stats.total} total, 
                        \${stats.completed} completed, 
                        \${stats.remaining} remaining
                        \${stats.highPriority > 0 ? \`, \${stats.highPriority} high priority pending\` : ''}
                    </div>
                \`;
                
                document.getElementById("todoList").innerHTML = this.renderTodos();
            }
        }
        
        // Create app instance
        const todoApp = new TodoApp();
        
        function addTodo() {
            const input = document.getElementById("todoInput");
            const text = input.value;
            
            if (todoApp.addTodo(text)) {
                input.value = "";
                todoApp.render();
            } else {
                alert("Please enter a valid task!");
            }
        }
        
        // Initial render
        todoApp.render();
        
        // Add enter key support
        document.getElementById("todoInput").addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                addTodo();
            }
        });
    </script>
</body>
</html>`,
    jsCode: `class TodoApp {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    
    addTodo(text, priority = "medium") {
        if (!text.trim()) return false;
        
        const newTodo = {
            id: this.nextId++,
            text: text.trim(),
            completed: false,
            priority,
            createdAt: new Date()
        };
        
        this.todos.push(newTodo);
        return true;
    }
    
    getStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        return { total, completed, remaining: total - completed };
    }
}

// Template literals with \${} for dynamic content
const html = \`<div>Total: \${stats.total}</div>\`;

// Arrow functions
const completed = this.todos.filter(t => t.completed);

// Destructuring
const { id, text, completed } = todo;`,
    explanation: "Modern JavaScript (ES6+) gives us powerful features like classes, template literals, arrow functions, and destructuring that make code cleaner and more maintainable.",
    keyPoints: [
      "Classes organize code with constructor and methods",
      "Template literals use backticks and ${} for dynamic content",
      "Arrow functions: (param) => result",
      "Destructuring extracts values: const {name, age} = person",
      "Default parameters: function(param = defaultValue)",
      "find() and filter() are powerful array methods"
    ],
    nextConcept: "Let's work with APIs and asynchronous code"
  },
  {
    id: 8,
    title: "Async JavaScript - Working with APIs",
    description: "Fetch data from APIs and handle asynchronous operations",
    level: 'advanced',
    htmlCode: `<!DOCTYPE html>
<html>
<body>
    <h1>Weather App with API</h1>
    <div style="margin: 20px 0;">
        <input type="text" id="cityInput" placeholder="Enter city name" value="London">
        <button onclick="getWeather()">Get Weather</button>
        <button onclick="getRandomQuote()">Get Inspirational Quote</button>
    </div>
    
    <div id="loading" style="display: none; color: blue;">Loading...</div>
    <div id="weatherResult"></div>
    <div id="quoteResult"></div>
    <div id="errorMessage"></div>
    
    <script>
        // Simulate weather API (since we can't use real API keys in this demo)
        const mockWeatherData = {
            "london": { temp: 15, description: "Cloudy", humidity: 65, windSpeed: 12 },
            "paris": { temp: 18, description: "Sunny", humidity: 45, windSpeed: 8 },
            "tokyo": { temp: 22, description: "Rainy", humidity: 80, windSpeed: 15 },
            "newyork": { temp: 12, description: "Snowy", humidity: 70, windSpeed: 20 },
            "sydney": { temp: 25, description: "Sunny", humidity: 55, windSpeed: 10 }
        };
        
        const inspirationalQuotes = [
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
            { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
            { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
            { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" }
        ];
        
        // Simulate API delay
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        // Simulate weather API call
        async function fetchWeatherData(city) {
            await delay(1000); // Simulate network delay
            
            const cityKey = city.toLowerCase().replace(/\s+/g, '');
            const weatherData = mockWeatherData[cityKey];
            
            if (!weatherData) {
                throw new Error(\`Weather data not found for \${city}. Try: London, Paris, Tokyo, New York, or Sydney\`);
            }
            
            return {
                city: city,
                temperature: weatherData.temp,
                description: weatherData.description,
                humidity: weatherData.humidity,
                windSpeed: weatherData.windSpeed,
                timestamp: new Date().toLocaleString()
            };
        }
        
        // Simulate quote API call
        async function fetchRandomQuote() {
            await delay(800);
            const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
            return inspirationalQuotes[randomIndex];
        }
        
        async function getWeather() {
            const city = document.getElementById("cityInput").value.trim();
            
            if (!city) {
                showError("Please enter a city name");
                return;
            }
            
            try {
                showLoading(true);
                clearMessages();
                
                const weatherData = await fetchWeatherData(city);
                
                displayWeather(weatherData);
                
            } catch (error) {
                showError(error.message);
            } finally {
                showLoading(false);
            }
        }
        
        async function getRandomQuote() {
            try {
                showLoading(true);
                clearMessages();
                
                const quote = await fetchRandomQuote();
                
                document.getElementById("quoteResult").innerHTML = \`
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                                color: white; padding: 20px; border-radius: 10px; margin: 15px 0;">
                        <h3>💡 Daily Inspiration</h3>
                        <p style="font-style: italic; font-size: 1.1em; margin: 10px 0;">
                            "\${quote.text}"
                        </p>
                        <p style="text-align: right; font-weight: bold;">
                            - \${quote.author}
                        </p>
                    </div>
                \`;
                
            } catch (error) {
                showError("Failed to fetch quote: " + error.message);
            } finally {
                showLoading(false);
            }
        }
        
        function displayWeather(data) {
            const tempColor = data.temperature > 20 ? '#ff6b6b' : data.temperature > 10 ? '#feca57' : '#48dbfb';
            
            document.getElementById("weatherResult").innerHTML = \`
                <div style="background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%); 
                            color: white; padding: 20px; border-radius: 10px; margin: 15px 0;">
                    <h3>🌤️ Weather in \${data.city}</h3>
                    <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
                        <div>
                            <p style="font-size: 2em; margin: 10px 0;">
                                <span style="color: \${tempColor};">\${data.temperature}°C</span>
                            </p>
                            <p style="font-size: 1.2em;">\${data.description}</p>
                        </div>
                        <div style="text-align: right;">
                            <p>💧 Humidity: \${data.humidity}%</p>
                            <p>💨 Wind: \${data.windSpeed} km/h</p>
                            <p style="font-size: 0.9em; opacity: 0.8;">
                                Updated: \${data.timestamp}
                            </p>
                        </div>
                    </div>
                </div>
            \`;
        }
        
        function showLoading(show) {
            document.getElementById("loading").style.display = show ? "block" : "none";
        }
        
        function showError(message) {
            document.getElementById("errorMessage").innerHTML = \`
                <div style="background: #ff7675; color: white; padding: 15px; 
                            border-radius: 5px; margin: 10px 0;">
                    ❌ \${message}
                </div>
            \`;
        }
        
        function clearMessages() {
            document.getElementById("errorMessage").innerHTML = "";
            document.getElementById("weatherResult").innerHTML = "";
            document.getElementById("quoteResult").innerHTML = "";
        }
        
        // Add enter key support
        document.getElementById("cityInput").addEventListener("keypress", async (e) => {
            if (e.key === "Enter") {
                await getWeather();
            }
        });
        
        // Load initial weather
        window.addEventListener("load", () => {
            getWeather();
        });
    </script>
</body>
</html>`,
    jsCode: `// Async function with try/catch
async function getWeather() {
    try {
        showLoading(true);
        
        // await pauses execution until Promise resolves
        const weatherData = await fetchWeatherData(city);
        
        displayWeather(weatherData);
        
    } catch (error) {
        showError(error.message);
    } finally {
        // finally always runs
        showLoading(false);
    }
}

// Promise-based function
function fetchWeatherData(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (city === "error") {
                reject(new Error("City not found"));
            } else {
                resolve({ temp: 20, description: "Sunny" });
            }
        }, 1000);
    });
}

// Alternative: using .then() and .catch()
fetchWeatherData("London")
    .then(data => displayWeather(data))
    .catch(error => showError(error.message));`,
    explanation: "Asynchronous JavaScript lets us handle operations that take time (like API calls) without blocking the user interface. async/await makes asynchronous code look like synchronous code.",
    keyPoints: [
      "async functions can use await to pause execution",
      "await only works inside async functions",
      "try/catch handles errors in async code",
      "finally block always runs after try/catch",
      "Promises represent future values",
      "setTimeout simulates network delays"
    ],
    nextConcept: "Let's build advanced interactive features"
  },
  {
    id: 9,
    title: "Advanced DOM Manipulation",
    description: "Create dynamic, interactive user interfaces with advanced DOM techniques",
    level: 'expert',
    htmlCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        .draggable {
            cursor: move;
            user-select: none;
            transition: transform 0.2s ease;
        }
        .dragging {
            transform: rotate(5deg) scale(1.05);
            opacity: 0.8;
            z-index: 1000;
        }
        .drop-zone {
            min-height: 100px;
            border: 2px dashed #ccc;
            border-radius: 8px;
            padding: 20px;
            margin: 10px 0;
            transition: all 0.3s ease;
        }
        .drop-zone.drag-over {
            border-color: #007bff;
            background-color: #f0f8ff;
        }
        .task-item {
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            margin: 10px 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .priority-high { border-left: 5px solid #ff4757; }
        .priority-medium { border-left: 5px solid #ffa502; }
        .priority-low { border-left: 5px solid #2ed573; }
    </style>
</head>
<body>
    <h1>🚀 Advanced Task Management System</h1>
    
    <div style="margin: 20px 0;">
        <input type="text" id="taskInput" placeholder="Enter new task" style="padding: 10px; width: 300px;">
        <select id="prioritySelect" style="padding: 10px;">
            <option value="high">High Priority</option>
            <option value="medium" selected>Medium Priority</option>
            <option value="low">Low Priority</option>
        </select>
        <button onclick="addTask()" style="padding: 10px 20px;">Add Task</button>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
        <div>
            <h3>📋 To Do</h3>
            <div id="todo-zone" class="drop-zone" data-status="todo">
                <p style="color: #666; text-align: center;">Drop tasks here</p>
            </div>
        </div>
        
        <div>
            <h3>⚡ In Progress</h3>
            <div id="progress-zone" class="drop-zone" data-status="progress">
                <p style="color: #666; text-align: center;">Drop tasks here</p>
            </div>
        </div>
        
        <div>
            <h3>✅ Completed</h3>
            <div id="completed-zone" class="drop-zone" data-status="completed">
                <p style="color: #666; text-align: center;">Drop tasks here</p>
            </div>
        </div>
    </div>
    
    <div id="taskStats" style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;"></div>
    
    <script>
        class AdvancedTaskManager {
            constructor() {
                this.tasks = [
                    { id: 1, text: "Learn JavaScript fundamentals", priority: "high", status: "completed", createdAt: new Date(Date.now() - 86400000) },
                    { id: 2, text: "Build interactive web app", priority: "high", status: "progress", createdAt: new Date(Date.now() - 3600000) },
                    { id: 3, text: "Master async programming", priority: "medium", status: "todo", createdAt: new Date() }
                ];
                this.nextId = 4;
                this.draggedElement = null;
                this.setupEventListeners();
                this.render();
            }
            
            setupEventListeners() {
                // Global drag and drop event listeners
                document.addEventListener('dragstart', (e) => this.handleDragStart(e));
                document.addEventListener('dragend', (e) => this.handleDragEnd(e));
                document.addEventListener('dragover', (e) => this.handleDragOver(e));
                document.addEventListener('drop', (e) => this.handleDrop(e));
                document.addEventListener('dragenter', (e) => this.handleDragEnter(e));
                document.addEventListener('dragleave', (e) => this.handleDragLeave(e));
                
                // Keyboard shortcuts
                document.addEventListener('keydown', (e) => {
                    if (e.ctrlKey && e.key === 'Enter') {
                        addTask();
                    }
                });
                
                // Auto-save to localStorage
                window.addEventListener('beforeunload', () => {
                    localStorage.setItem('tasks', JSON.stringify(this.tasks));
                });
                
                // Load from localStorage
                const savedTasks = localStorage.getItem('tasks');
                if (savedTasks) {
                    try {
                        this.tasks = JSON.parse(savedTasks);
                        this.nextId = Math.max(...this.tasks.map(t => t.id)) + 1;
                    } catch (e) {
                        console.error('Failed to load saved tasks:', e);
                    }
                }
            }
            
            addTask(text, priority = 'medium') {
                if (!text || !text.trim()) return false;
                
                const newTask = {
                    id: this.nextId++,
                    text: text.trim(),
                    priority,
                    status: 'todo',
                    createdAt: new Date()
                };
                
                this.tasks.push(newTask);
                this.render();
                return true;
            }
            
            updateTaskStatus(taskId, newStatus) {
                const task = this.tasks.find(t => t.id === taskId);
                if (task) {
                    task.status = newStatus;
                    if (newStatus === 'completed') {
                        task.completedAt = new Date();
                    }
                    this.render();
                }
            }
            
            deleteTask(taskId) {
                this.tasks = this.tasks.filter(t => t.id !== taskId);
                this.render();
            }
            
            handleDragStart(e) {
                if (e.target.classList.contains('draggable')) {
                    this.draggedElement = e.target;
                    e.target.classList.add('dragging');
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text/html', e.target.outerHTML);
                }
            }
            
            handleDragEnd(e) {
                if (e.target.classList.contains('draggable')) {
                    e.target.classList.remove('dragging');
                    this.draggedElement = null;
                }
            }
            
            handleDragOver(e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            }
            
            handleDragEnter(e) {
                if (e.target.classList.contains('drop-zone')) {
                    e.target.classList.add('drag-over');
                }
            }
            
            handleDragLeave(e) {
                if (e.target.classList.contains('drop-zone')) {
                    e.target.classList.remove('drag-over');
                }
            }
            
            handleDrop(e) {
                e.preventDefault();
                
                const dropZone = e.target.closest('.drop-zone');
                if (dropZone && this.draggedElement) {
                    dropZone.classList.remove('drag-over');
                    
                    const taskId = parseInt(this.draggedElement.dataset.taskId);
                    const newStatus = dropZone.dataset.status;
                    
                    this.updateTaskStatus(taskId, newStatus);
                }
            }
            
            getTasksByStatus(status) {
                return this.tasks.filter(t => t.status === status);
            }
            
            getStats() {
                const total = this.tasks.length;
                const completed = this.tasks.filter(t => t.status === 'completed').length;
                const inProgress = this.tasks.filter(t => t.status === 'progress').length;
                const todo = this.tasks.filter(t => t.status === 'todo').length;
                const highPriority = this.tasks.filter(t => t.priority === 'high' && t.status !== 'completed').length;
                
                return { total, completed, inProgress, todo, highPriority };
            }
            
            renderTask(task) {
                const timeAgo = this.getTimeAgo(task.createdAt);
                
                return \`
                    <div class="task-item draggable priority-\${task.priority}" 
                         draggable="true" 
                         data-task-id="\${task.id}">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div style="flex: 1;">
                                <p style="margin: 0 0 8px 0; font-weight: 500;">\${task.text}</p>
                                <div style="display: flex; gap: 10px; font-size: 0.85em; color: #666;">
                                    <span class="priority-badge priority-\${task.priority}">
                                        \${task.priority.toUpperCase()}
                                    </span>
                                    <span>📅 \${timeAgo}</span>
                                    \${task.completedAt ? \`<span>✅ \${this.getTimeAgo(task.completedAt)}</span>\` : ''}
                                </div>
                            </div>
                            <button onclick="taskManager.deleteTask(\${task.id})" 
                                    style="background: #ff4757; color: white; border: none; 
                                           border-radius: 4px; padding: 5px 8px; cursor: pointer;">
                                🗑️
                            </button>
                        </div>
                    </div>
                \`;
            }
            
            getTimeAgo(date) {
                const now = new Date();
                const diffMs = now - new Date(date);
                const diffMins = Math.floor(diffMs / 60000);
                const diffHours = Math.floor(diffMs / 3600000);
                const diffDays = Math.floor(diffMs / 86400000);
                
                if (diffMins < 1) return 'Just now';
                if (diffMins < 60) return \`\${diffMins}m ago\`;
                if (diffHours < 24) return \`\${diffHours}h ago\`;
                return \`\${diffDays}d ago\`;
            }
            
            render() {
                // Render tasks in each zone
                ['todo', 'progress', 'completed'].forEach(status => {
                    const zone = document.getElementById(\`\${status}-zone\`);
                    const tasks = this.getTasksByStatus(status);
                    
                    if (tasks.length === 0) {
                        zone.innerHTML = \`<p style="color: #666; text-align: center;">Drop tasks here</p>\`;
                    } else {
                        zone.innerHTML = tasks.map(task => this.renderTask(task)).join('');
                    }
                });
                
                // Render stats
                const stats = this.getStats();
                document.getElementById('taskStats').innerHTML = \`
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        <div style="text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #007bff;">\${stats.total}</div>
                            <div>Total Tasks</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #28a745;">\${stats.completed}</div>
                            <div>Completed</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #ffc107;">\${stats.inProgress}</div>
                            <div>In Progress</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #6c757d;">\${stats.todo}</div>
                            <div>To Do</div>
                        </div>
                        \${stats.highPriority > 0 ? \`
                        <div style="text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #dc3545;">\${stats.highPriority}</div>
                            <div>High Priority</div>
                        </div>
                        \` : ''}
                    </div>
                \`;
            }
        }
        
        // Initialize the task manager
        const taskManager = new AdvancedTaskManager();
        
        function addTask() {
            const input = document.getElementById('taskInput');
            const priority = document.getElementById('prioritySelect').value;
            const text = input.value.trim();
            
            if (taskManager.addTask(text, priority)) {
                input.value = '';
                input.focus();
            } else {
                alert('Please enter a valid task!');
            }
        }
        
        // Add enter key support
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    </script>
</body>
</html>`,
    jsCode: `class AdvancedTaskManager {
    constructor() {
        this.tasks = [];
        this.draggedElement = null;
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Drag and drop
        document.addEventListener('dragstart', (e) => this.handleDragStart(e));
        document.addEventListener('drop', (e) => this.handleDrop(e));
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                addTask();
            }
        });
        
        // Auto-save
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        });
    }
    
    handleDragStart(e) {
        if (e.target.classList.contains('draggable')) {
            this.draggedElement = e.target;
            e.dataTransfer.effectAllowed = 'move';
        }
    }
    
    handleDrop(e) {
        e.preventDefault();
        const dropZone = e.target.closest('.drop-zone');
        if (dropZone && this.draggedElement) {
            const taskId = parseInt(this.draggedElement.dataset.taskId);
            const newStatus = dropZone.dataset.status;
            this.updateTaskStatus(taskId, newStatus);
        }
    }
}`,
    explanation: "Advanced DOM manipulation combines multiple concepts: drag & drop, event delegation, local storage, keyboard shortcuts, and complex state management to create rich, interactive experiences.",
    keyPoints: [
      "Event delegation handles events on dynamically created elements",
      "Drag & drop API provides native drag/drop functionality",
      "localStorage persists data between sessions",
      "Event listeners can be added globally for efficiency",
      "CSS classes can be toggled for visual feedback",
      "Data attributes store custom data on elements"
    ],
    nextConcept: "Congratulations! You've mastered JavaScript fundamentals!"
  },
  {
    id: 10,
    title: "🎉 Congratulations - You're a JavaScript Expert!",
    description: "You've completed the journey from beginner to expert. Here's what you've learned and what's next.",
    level: 'expert',
    htmlCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 20px;
            min-height: 100vh;
        }
        .achievement-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            margin: 15px 0;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease;
        }
        .achievement-card:hover {
            transform: translateY(-5px);
        }
        .skill-progress {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            height: 20px;
            margin: 10px 0;
            overflow: hidden;
        }
        .skill-fill {
            height: 100%;
            background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
            border-radius: 10px;
            transition: width 2s ease;
        }
        .celebration {
            text-align: center;
            animation: bounce 2s infinite;
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-30px); }
            60% { transform: translateY(-15px); }
        }
        .next-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
    </style>
</head>
<body>
    <div class="celebration">
        <h1 style="font-size: 3em; margin: 20px 0;">🎉 Congratulations! 🎉</h1>
        <h2>You've Mastered JavaScript!</h2>
    </div>
    
    <div class="achievement-card">
        <h3>🏆 Your Learning Journey</h3>
        <p>You've successfully completed all 9 progressive lessons, building your skills from absolute beginner to JavaScript expert!</p>
    </div>
    
    <div class="achievement-card">
        <h3>📊 Skills Mastered</h3>
        <div id="skillsContainer"></div>
    </div>
    
    <div class="achievement-card">
        <h3>🚀 What You Can Build Now</h3>
        <div class="next-steps">
            <div>
                <h4>🌐 Web Applications</h4>
                <ul>
                    <li>Interactive dashboards</li>
                    <li>Real-time chat apps</li>
                    <li>E-commerce sites</li>
                    <li>Social media platforms</li>
                </ul>
            </div>
            <div>
                <h4>📱 Mobile Apps</h4>
                <ul>
                    <li>React Native apps</li>
                    <li>Progressive Web Apps</li>
                    <li>Hybrid mobile apps</li>
                    <li>Cross-platform solutions</li>
                </ul>
            </div>
            <div>
                <h4>🖥️ Desktop Applications</h4>
                <ul>
                    <li>Electron apps</li>
                    <li>Node.js tools</li>
                    <li>Development utilities</li>
                    <li>System automation</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="achievement-card">
        <h3>📚 Recommended Next Steps</h3>
        <div class="next-steps">
            <div>
                <h4>🔧 Frameworks & Libraries</h4>
                <ul>
                    <li><strong>React</strong> - Build user interfaces</li>
                    <li><strong>Vue.js</strong> - Progressive framework</li>
                    <li><strong>Node.js</strong> - Server-side JavaScript</li>
                    <li><strong>Express.js</strong> - Web application framework</li>
                </ul>
            </div>
            <div>
                <h4>🗄️ Databases & APIs</h4>
                <ul>
                    <li><strong>MongoDB</strong> - NoSQL database</li>
                    <li><strong>REST APIs</strong> - Web services</li>
                    <li><strong>GraphQL</strong> - Query language</li>
                    <li><strong>Firebase</strong> - Backend as a service</li>
                </ul>
            </div>
            <div>
                <h4>🛠️ Development Tools</h4>
                <ul>
                    <li><strong>Git</strong> - Version control</li>
                    <li><strong>Webpack</strong> - Module bundler</li>
                    <li><strong>Jest</strong> - Testing framework</li>
                    <li><strong>TypeScript</strong> - Typed JavaScript</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="achievement-card">
        <h3>💡 Keep Learning Tips</h3>
        <ul>
            <li><strong>Build Projects:</strong> Apply what you've learned by building real applications</li>
            <li><strong>Read Code:</strong> Study open-source projects on GitHub</li>
            <li><strong>Join Communities:</strong> Participate in developer forums and Discord servers</li>
            <li><strong>Stay Updated:</strong> Follow JavaScript news and new features</li>
            <li><strong>Practice Daily:</strong> Code a little bit every day to maintain your skills</li>
            <li><strong>Teach Others:</strong> Explaining concepts helps solidify your understanding</li>
        </ul>
    </div>
    
    <div class="achievement-card" style="text-align: center;">
        <h3>🌟 You're Ready to Change the World with Code!</h3>
        <p style="font-size: 1.2em;">The skills you've learned are the foundation for creating amazing digital experiences. Go build something incredible!</p>
        <button onclick="restartJourney()" style="background: linear-gradient(45deg, #ff6b6b, #ee5a24); 
                color: white; border: none; padding: 15px 30px; border-radius: 25px; 
                font-size: 1.1em; cursor: pointer; margin: 20px;">
            🔄 Restart Learning Journey
        </button>
    </div>
    
    <script>
        const skills = [
            { name: "JavaScript Basics", level: 100 },
            { name: "Variables & Data Types", level: 100 },
            { name: "Functions & Control Flow", level: 100 },
            { name: "Arrays & Objects", level: 100 },
            { name: "Error Handling", level: 100 },
            { name: "Modern ES6+ Features", level: 100 },
            { name: "Async Programming", level: 100 },
            { name: "DOM Manipulation", level: 100 },
            { name: "Event Handling", level: 100 },
            { name: "API Integration", level: 100 }
        ];
        
        function renderSkills() {
            const container = document.getElementById('skillsContainer');
            
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    const skillElement = document.createElement('div');
                    skillElement.innerHTML = \`
                        <div style="margin: 15px 0;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <span>\${skill.name}</span>
                                <span>\${skill.level}%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="skill-fill" style="width: \${skill.level}%"></div>
                            </div>
                        </div>
                    \`;
                    container.appendChild(skillElement);
                }, index * 200);
            });
        }
        
        function restartJourney() {
            if (confirm("Are you sure you want to restart your learning journey? This will take you back to lesson 1.")) {
                // In a real app, this would reset the progress
                alert("🚀 Great! Starting over is a fantastic way to reinforce your learning. In a real app, this would reset your progress.");
            }
        }
        
        // Animate skills on load
        window.addEventListener('load', () => {
            setTimeout(renderSkills, 1000);
        });
        
        // Add some celebration effects
        function createConfetti() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
            
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.style.cssText = \`
                        position: fixed;
                        top: -10px;
                        left: \${Math.random() * 100}%;
                        width: 10px;
                        height: 10px;
                        background: \${colors[Math.floor(Math.random() * colors.length)]};
                        pointer-events: none;
                        animation: fall \${Math.random() * 3 + 2}s linear forwards;
                        z-index: 1000;
                    \`;
                    
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 5000);
                }, i * 100);
            }
        }
        
        // Add CSS for confetti animation
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                }
            }
        \`;
        document.head.appendChild(style);
        
        // Start confetti after page loads
        setTimeout(createConfetti, 2000);
        
        // Add periodic confetti
        setInterval(createConfetti, 10000);
    </script>
</body>
</html>`,
    jsCode: `// 🎉 Congratulations! Here's a summary of what you've mastered:

// 1. JavaScript Fundamentals
console.log("Hello, World!");
let message = "You did it!";

// 2. Variables and Data Types
const name = "JavaScript Expert";
let score = 100;
let isComplete = true;

// 3. Functions and Control Flow
function celebrate(achievement) {
    if (achievement === "JavaScript Master") {
        return "🎉 Congratulations! 🎉";
    }
    return "Keep learning!";
}

// 4. Arrays and Objects
const skills = ["Variables", "Functions", "Objects", "Async", "DOM"];
const developer = {
    name: "You",
    level: "Expert",
    skills: skills,
    canBuild: ["Web Apps", "Mobile Apps", "APIs", "Games"]
};

// 5. Modern JavaScript (ES6+)
const buildApp = (type) => \`Building \${type} app...\`;
const { name: devName, level } = developer;
const allSkills = [...skills, "React", "Node.js"];

// 6. Async Programming
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

// 7. Advanced DOM Manipulation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.interactive');
    elements.forEach(el => {
        el.addEventListener('click', handleClick);
    });
});

// 🚀 You're now ready to build amazing things!`,
    explanation: "🎉 Congratulations! You've completed your JavaScript journey from beginner to expert. You now have all the fundamental skills needed to build modern web applications, mobile apps, and more!",
    keyPoints: [
      "You've mastered all core JavaScript concepts",
      "You can build interactive web applications",
      "You understand modern JavaScript (ES6+) features",
      "You can work with APIs and async programming",
      "You have the foundation for learning frameworks like React",
      "You're ready to start building real projects!"
    ]
  }
];

function App() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const lesson = lessons[currentLesson];

  const nextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCompletedLessons(prev => [...prev, currentLesson]);
      setCurrentLesson(prev => prev + 1);
      setShowCode(false);
    }
  };

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(prev => prev - 1);
      setShowCode(false);
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-orange-500';
      case 'expert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'beginner': return <BookOpen className="w-5 h-5" />;
      case 'intermediate': return <Code className="w-5 h-5" />;
      case 'advanced': return <Zap className="w-5 h-5" />;
      case 'expert': return <Trophy className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  useEffect(() => {
    // Auto-scroll to top when lesson changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentLesson]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-indigo-500">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-600 p-3 rounded-xl">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">JavaScript Journey</h1>
                <p className="text-gray-600">From Beginner to Expert</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className={`px-4 py-2 rounded-full text-white text-sm font-medium flex items-center space-x-2 ${getLevelColor(lesson.level)}`}>
                {getLevelIcon(lesson.level)}
                <span className="capitalize">{lesson.level}</span>
              </div>
              <div className="text-sm text-gray-600">
                Lesson {currentLesson + 1} of {lessons.length}
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{Math.round(((currentLesson + 1) / lessons.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentLesson + 1) / lessons.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">{lesson.title}</h2>
                <p className="text-indigo-100 text-lg">{lesson.description}</p>
              </div>
              
              <div className="p-6">
                <div className="prose max-w-none mb-6">
                  <p className="text-gray-700 text-lg leading-relaxed">{lesson.explanation}</p>
                </div>

                {/* Key Points */}
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    Key Learning Points
                  </h3>
                  <ul className="space-y-2">
                    {lesson.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start text-blue-800">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code Toggle */}
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => setShowCode(!showCode)}
                    className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    <span>{showCode ? 'Hide Code' : 'Show Code'}</span>
                  </button>
                </div>

                {/* Code Display */}
                {showCode && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Complete HTML Example:</h4>
                      <div className="bg-gray-900 rounded-lg overflow-hidden">
                        <div className="bg-gray-800 px-4 py-2 text-gray-300 text-sm font-medium">
                          HTML + JavaScript
                        </div>
                        <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                          <code>{lesson.htmlCode}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">JavaScript Focus:</h4>
                      <div className="bg-gray-900 rounded-lg overflow-hidden">
                        <div className="bg-gray-800 px-4 py-2 text-gray-300 text-sm font-medium">
                          JavaScript
                        </div>
                        <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                          <code>{lesson.jsCode}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                )}

                {/* Next Concept Preview */}
                {lesson.nextConcept && (
                  <div className="bg-green-50 rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Coming Up Next:</h3>
                    <p className="text-green-800">{lesson.nextConcept}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Navigation */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Navigation</h3>
              <div className="space-y-3">
                <button
                  onClick={prevLesson}
                  disabled={currentLesson === 0}
                  className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                  <span>Previous Lesson</span>
                </button>
                
                <button
                  onClick={nextLesson}
                  disabled={currentLesson === lessons.length - 1}
                  className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <span>
                    {currentLesson === lessons.length - 1 ? 'Journey Complete!' : 'Next Lesson'}
                  </span>
                  {currentLesson !== lessons.length - 1 && <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Lesson Overview */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">All Lessons</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {lessons.map((lessonItem, index) => (
                  <div
                    key={lessonItem.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      index === currentLesson
                        ? 'bg-indigo-100 border-2 border-indigo-500'
                        : completedLessons.includes(index)
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setCurrentLesson(index);
                      setShowCode(false);
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        index === currentLesson
                          ? 'bg-indigo-500 text-white'
                          : completedLessons.includes(index)
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {completedLessons.includes(index) ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${
                          index === currentLesson ? 'text-indigo-900' : 'text-gray-900'
                        }`}>
                          {lessonItem.title}
                        </p>
                        <p className={`text-xs truncate ${
                          index === currentLesson ? 'text-indigo-600' : 'text-gray-500'
                        }`}>
                          {lessonItem.level}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-semibold text-green-600">{completedLessons.length}/{lessons.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Current Level</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(lesson.level)}`}>
                    {lesson.level}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Mastery</span>
                  <span className="font-semibold text-indigo-600">
                    {Math.round(((completedLessons.length + 1) / lessons.length) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
