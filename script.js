document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded courses with real video URLs and quizzes
    const courses = [
        { 
            id: 1, 
            title: 'Python', 
            videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw', // Python Full Course
            quiz: [
                { question: 'What is the output of 2 + 2 in Python?', options: ['4', '22', '5', '3'], correctAnswer: '4' },
                { question: 'Which of these is a correct variable declaration in Python?', options: ['int x = 5;', 'var x = 5;', 'x = 5', 'let x = 5;'], correctAnswer: 'x = 5' },
                { question: 'What is the correct way to define a list in Python?', options: ['list()','[]','set()','{}'], correctAnswer: '[]' },
                { question: 'Which of these is a Python data type?', options: ['int', 'char', 'float', 'All of the above'], correctAnswer: 'All of the above' },
                { question: 'What does the "len()" function do in Python?', options: ['Find the length of an object', 'Convert string to integer', 'Return a value', 'All of the above'], correctAnswer: 'Find the length of an object' }
            ]
        },
        { 
            id: 2, 
            title: 'C Programming', 
            videoUrl: 'https://www.youtube.com/embed/KJgsSFOSQv0', // C Programming Full Course
            quiz: [
                { question: 'Which symbol is used to terminate a statement in C?', options: ['.', ';', ':', ''], correctAnswer: ';' },
                { question: 'What is the default return value of a main function?', options: ['0', '1', 'void', 'None'], correctAnswer: '0' },
                { question: 'Which function is used to output text in C?', options: ['print()', 'output()', 'printf()', 'echo()'], correctAnswer: 'printf()' },
                { question: 'Which data type is used to store a single character in C?', options: ['char', 'int', 'float', 'double'], correctAnswer: 'char' },
                { question: 'Which of the following is not a valid C data type?', options: ['int', 'char', 'boolean', 'float'], correctAnswer: 'boolean' }
            ]
        },
        { 
            id: 3, 
            title: 'C++ Programming', 
            videoUrl: 'https://www.youtube.com/embed/vLnPwxZdW4Y', // C++ Full Course
            quiz: [
                { question: 'Which of these is the correct syntax to declare a C++ class?', options: ['class MyClass;', 'class MyClass {}', 'MyClass class;', 'class:MyClass'], correctAnswer: 'class MyClass {}' },
                { question: 'In C++, the "new" keyword is used to:', options: ['Create an object', 'Declare a variable', 'Initialize a variable', 'None of the above'], correctAnswer: 'Create an object' },
                { question: 'Which function is used to input data in C++?', options: ['input()', 'cin', 'get()', 'scanf()'], correctAnswer: 'cin' },
                { question: 'Which is the correct syntax for a C++ constructor?', options: ['class MyClass()', 'MyClass()', 'constructor MyClass()', 'MyClass::MyClass()'], correctAnswer: 'MyClass()' },
                { question: 'Which operator is used for memory allocation in C++?', options: ['malloc()', 'new', 'allocate()', 'new[]'], correctAnswer: 'new' }
            ]
        },
        { 
            id: 4, 
            title: 'Java', 
            videoUrl: 'https://www.youtube.com/embed/grEKMHGYyns', // Java Full Course
            quiz: [
                { question: 'Which keyword is used to define a constant in Java?', options: ['constant', 'const', 'final', 'static'], correctAnswer: 'final' },
                { question: 'Which of these is a valid Java class declaration?', options: ['class MyClass {}', 'MyClass class {}', 'MyClass = class {}', 'class = MyClass {};'], correctAnswer: 'class MyClass {}' },
                { question: 'Which method is used to get the length of an array in Java?', options: ['length()', 'size()', 'getSize()', 'arrayLength()'], correctAnswer: 'length()' },
                { question: 'In Java, which operator is used to compare two objects for equality?', options: ['==', 'equals()', 'compare()', 'equal()'], correctAnswer: 'equals()' },
                { question: 'Which of the following is used to handle exceptions in Java?', options: ['try-catch', 'throw-catch', 'throw', 'error'], correctAnswer: 'try-catch' }
            ]
        },
        { 
            id: 5, 
    title: 'R Language', 
    videoUrl: 'https://www.youtube.com/embed/_V8eKsto3Ug', // Updated R Language Video
            quiz: [
                { question: 'What function is used to read a dataset in R?', options: ['read()', 'read.csv()', 'import()', 'load()'], correctAnswer: 'read.csv()' },
                { question: 'Which of these is a valid R variable name?', options: ['1variable', '_variable', 'var-1', 'variable@1'], correctAnswer: '_variable' },
                { question: 'Which function is used to get the structure of an R object?', options: ['str()', 'typeof()', 'structure()', 'summary()'], correctAnswer: 'str()' },
                { question: 'Which operator is used for assignment in R?', options: ['<-', '=', ':', '=>'], correctAnswer: '<-' },
                { question: 'How do you comment a line in R?', options: ['//', '#', '/*', ';;'], correctAnswer: '#' }
            ]
        },
        { 
            id: 6, 
            title: 'JavaScript', 
            videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg', // JavaScript Full Course
            quiz: [
                { question: 'Which symbol is used for single-line comments in JavaScript?', options: ['//', '#', '/*', '\\'], correctAnswer: '//' },
                { question: 'Which of these is not a valid JavaScript data type?', options: ['boolean', 'null', 'undefined', 'number[]'], correctAnswer: 'number[]' },
                { question: 'What is the purpose of the `typeof` operator in JavaScript?', options: ['Check variable type', 'Convert type', 'Define new type', 'None of the above'], correctAnswer: 'Check variable type' },
                { question: 'Which method is used to add a new element to the end of an array in JavaScript?', options: ['push()', 'append()', 'add()', 'insert()'], correctAnswer: 'push()' },
                { question: 'Which of these is a correct JavaScript function declaration?', options: ['function myFunc() {}', 'myFunc() {}', 'func myFunc {}', 'function myFunc {}'], correctAnswer: 'function myFunc() {}' }
            ]
        },
        { 
            id: 7, 
            title: 'HTML', 
            videoUrl: 'https://www.youtube.com/embed/UB1O30fR-EE', // HTML Full Course
            quiz: [
                { question: 'What is the correct HTML tag for inserting an image?', options: ['<img>', '<image>', '<src>', '<picture>'], correctAnswer: '<img>' },
                { question: 'Which HTML element is used to display a video?', options: ['<video>', '<audio>', '<media>', '<movie>'], correctAnswer: '<video>' },
                { question: 'What is the default value of the type attribute in an input field?', options: ['text', 'password', 'email', 'number'], correctAnswer: 'text' },
                { question: 'Which HTML tag is used to define an unordered list?', options: ['<ul>', '<ol>', '<list>', '<ulist>'], correctAnswer: '<ul>' },
                { question: 'What does the <br> tag do in HTML?', options: ['Creates a break in the content', 'Starts a new line', 'Ends the paragraph', 'Both A and B'], correctAnswer: 'Both A and B' }
            ]
        },
        { 
            id: 8, 
            title: 'React', 
            videoUrl: 'https://www.youtube.com/embed/DLX62G4lc44', // React Full Course
            quiz: [
                { question: 'What is the purpose of `useState` in React?', options: ['State management', 'Fetching data', 'Component rendering', 'Event handling'], correctAnswer: 'State management' },
                { question: 'What is JSX?', options: ['JavaScript and XML', 'JavaScript Extended Syntax', 'JSON syntax', 'JavaScript for XML'], correctAnswer: 'JavaScript and XML' },
                { question: 'Which function is used to trigger re-renders in React?', options: ['setState()', 'forceUpdate()', 'update()', 'render()'], correctAnswer: 'setState()' },
                { question: 'Which method is used to handle forms in React?', options: ['onSubmit()', 'handleSubmit()', 'submit()', 'formSubmit()'], correctAnswer: 'onSubmit()' },
                { question: 'What is the purpose of `props` in React?', options: ['Data flow between components', 'State management', 'UI rendering', 'None of the above'], correctAnswer: 'Data flow between components' }
            ]
        },
        { 
            id: 9, 
            title: 'CSS', 
            videoUrl: 'https://www.youtube.com/embed/1Rs2ND1ryYc', // CSS Full Course
            quiz: [
                { question: 'Which property is used to change the background color in CSS?', options: ['color', 'background-color', 'bgcolor', 'background'], correctAnswer: 'background-color' },
                { question: 'Which of these is the correct syntax for a CSS class?', options: ['.myclass {}', '#myclass {}', 'myclass {}', 'class.myclass {}'], correctAnswer: '.myclass {}' },
                { question: 'How do you select all elements of a specific class in CSS?', options: ['.myclass', '#myclass', 'myclass', '*myclass'], correctAnswer: '.myclass' },
                { question: 'Which property is used to set the font size in CSS?', options: ['font-size', 'text-size', 'font', 'size'], correctAnswer: 'font-size' },
                { question: 'What does the `float` property do in CSS?', options: ['Positions elements', 'Changes the size of elements', 'Changes the background color', 'None of the above'], correctAnswer: 'Positions elements' }
            ]
        },
        { 
            id: 10, 
            title: 'Angular', 
            videoUrl: 'https://www.youtube.com/embed/ZonIKpZeGCw', // Complete Tutorial to Authentication with Angular
            quiz: [
                { question: 'What does Angular use for two-way data binding?', options: ['ngModel', 'ngBind', 'ngIf', 'ngFor'], correctAnswer: 'ngModel' },
                { question: 'Which directive is used for iterating over a collection in Angular?', options: ['ngIf', 'ngFor', 'ngRepeat', 'ngForEach'], correctAnswer: 'ngFor' },
                { question: 'Which of these is the correct syntax for a component decorator in Angular?', options: ['@Component()', '@View()', '@Directive()', '@Template()'], correctAnswer: '@Component()' },
                { question: 'What is the purpose of Angular services?', options: ['To hold business logic', 'To store data', 'To manipulate DOM', 'To manage user inputs'], correctAnswer: 'To hold business logic' },
                { question: 'What language is Angular written in?', options: ['JavaScript', 'TypeScript', 'Java', 'Python'], correctAnswer: 'TypeScript' }
            ]
        },
        { 
            id: 11, 
            title: 'SQL', 
            videoUrl: 'https://www.youtube.com/embed/HXV3zeQKqGY', // SQL Full Course
            quiz: [
                { question: 'Which SQL keyword is used to retrieve data from a database?', options: ['SELECT', 'GET', 'FETCH', 'RETRIEVE'], correctAnswer: 'SELECT' },
                { question: 'Which of these is used to filter records in SQL?', options: ['WHERE', 'FILTER', 'LIMIT', 'ORDER BY'], correctAnswer: 'WHERE' },
                { question: 'Which clause is used to sort data in SQL?', options: ['ORDER BY', 'GROUP BY', 'HAVING', 'SORT'], correctAnswer: 'ORDER BY' },
                { question: 'Which function is used to count the number of rows in a SQL query?', options: ['COUNT()', 'SUM()', 'AVG()', 'MAX()'], correctAnswer: 'COUNT()' },
                { question: 'What is the primary key in SQL?', options: ['A unique identifier for records', 'A column used for sorting', 'A foreign key reference', 'A query function'], correctAnswer: 'A unique identifier for records' }
            ]
        },
        
            {id: 12, 
    title: 'MongoDB', 
    videoUrl: 'https://www.youtube.com/embed/qWYx5neOh2s', // MongoDB Crash Course With Python 2022
            quiz: [
                { question: 'What does MongoDB use to store data?', options: ['Tables', 'Documents', 'Files', 'Rows'], correctAnswer: 'Documents' },
                { question: 'What is the default port for MongoDB?', options: ['27017', '8080', '3306', '5432'], correctAnswer: '27017' },
                { question: 'Which MongoDB operation is used to add new documents to a collection?', options: ['insert()', 'add()', 'create()', 'put()'], correctAnswer: 'insert()' },
                { question: 'Which of these is a valid MongoDB query operator?', options: ['$eq', '$gt', '$lt', '$in'], correctAnswer: '$eq' },
                { question: 'Which MongoDB data type is used to store binary data?', options: ['Binary', 'Blob', 'Buffer', 'BinData'], correctAnswer: 'BinData' }
            ]
        },
        { 
            id: 13, 
            title: 'PHP', 
            videoUrl: 'https://www.youtube.com/embed/OK_JCtrrv-c', // PHP Full Course
            quiz: [
                { question: 'What is the correct syntax for including a file in PHP?', options: ['include("file.php");', 'require("file.php");', 'include file.php;', 'require file.php;'], correctAnswer: 'include("file.php");' },
                { question: 'What function is used to output text in PHP?', options: ['echo()', 'write()', 'print()', 'output()'], correctAnswer: 'echo()' },
                { question: 'Which symbol is used for single-line comments in PHP?', options: ['#', '//', ';', '/*'], correctAnswer: '//'},
                { question: 'How do you start a session in PHP?', options: ['session_start()', 'start_session()', 'init_session()', 'begin_session()'], correctAnswer: 'session_start()' },
                { question: 'Which of these is a valid variable declaration in PHP?', options: ['$x = 5;', 'var x = 5;', 'int x = 5;', 'let x = 5;'], correctAnswer: '$x = 5;' }
            ]
        },
        { 
             id: 14, 
             title: 'Python PyQt5', 
            
              videoUrl: 'https://www.youtube.com/embed/Vde5SH8e1OQ', // PyQt5 Tutorial - Setup and a Basic GUI Application
          
            quiz: [
                { question: 'Which method is used to run a PyQt5 application?', options: ['run()', 'exec_()', 'execute()', 'start()'], correctAnswer: 'exec_()' },
                { question: 'Which widget is used to display text in PyQt5?', options: ['QLabel', 'QTextEdit', 'QLineEdit', 'QTextBrowser'], correctAnswer: 'QLabel' },
                { question: 'Which layout manager is used for organizing widgets in PyQt5?', options: ['QVBoxLayout', 'QHBoxLayout', 'QGridLayout', 'All of the above'], correctAnswer: 'All of the above' },
                { question: 'Which PyQt5 class is used to create a button?', options: ['QPushButton', 'QButton', 'QPush', 'Button'], correctAnswer: 'QPushButton' },
                { question: 'How do you connect a signal to a slot in PyQt5?', options: ['button.clicked.connect(slot)', 'button.connect(slot)', 'button.slot.connect()', 'None of the above'], correctAnswer: 'button.clicked.connect(slot)' }
            ]
        },
        { 
            id: 15, 
            title: 'Data Structures', 
             videoUrl: 'https://www.youtube.com/embed/RBSGKlAvoiM', // Updated Data Structures Video
            quiz: [
                { question: 'What is the time complexity of searching an element in a binary search tree (BST)?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n^2)'], correctAnswer: 'O(log n)' },
                { question: 'Which data structure uses LIFO (Last In First Out) principle?', options: ['Queue', 'Stack', 'Linked List', 'Array'], correctAnswer: 'Stack' },
                { question: 'Which of these is an example of a dynamic data structure?', options: ['Array', 'Queue', 'Linked List', 'All of the above'], correctAnswer: 'Linked List' },
                { question: 'What does the term "hashing" mean in data structures?', options: ['Converting data to a unique hash code', 'Encrypting data', 'Sorting data', 'None of the above'], correctAnswer: 'Converting data to a unique hash code' },
                { question: 'Which of these operations is performed on a heap data structure?', options: ['insert()', 'delete()', 'heapify()', 'All of the above'], correctAnswer: 'All of the above' }
            ]
        }
    ];

    // Load courses into the UI
    const coursesList = document.getElementById('courses-list');
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>Learn ${course.title}</p>
        `;
        courseCard.addEventListener('click', () => {
            loadVideo(course.videoUrl);
            loadQuiz(course.quiz);
        });
        coursesList.appendChild(courseCard);
    });

    // Function to load the video lesson
    function loadVideo(videoUrl) {
        const iframePlayer = document.getElementById('video-player');
        iframePlayer.src = videoUrl;
        document.getElementById('video-player-container').style.display = 'block';

        // Add event listener to track video progress
        iframePlayer.addEventListener('timeupdate', () => {
            const videoProgress = document.getElementById('video-progress');
            const videoDuration = iframePlayer.duration;
            const currentTime = iframePlayer.currentTime;

            // Calculate progress as percentage
            const progressPercentage = (currentTime / videoDuration) * 100;
            videoProgress.value = progressPercentage;
        });
    }

    // Function to load quiz based on course
    function loadQuiz(quizData) {
        const quizContainer = document.getElementById('quiz-questions');
        quizContainer.innerHTML = '';
        quizData.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.innerHTML = `
                <h3>${question.question}</h3>
                ${question.options.map((option, i) => `
                    <input type="radio" name="question-${index}" value="${option}">
                    <label>${option}</label><br>
                `).join('')}
            `;
            quizContainer.appendChild(questionElement);
        });

        document.getElementById('quiz-container').style.display = 'block';

        // Track quiz progress
        const quizProgress = document.getElementById('quiz-progress');
        const totalQuestions = quizData.length;

        quizContainer.addEventListener('change', () => {
            // Count the number of answered questions
            const answeredQuestions = Array.from(quizContainer.querySelectorAll('input:checked')).length;
            const quizProgressPercentage = (answeredQuestions / totalQuestions) * 100;
            quizProgress.value = quizProgressPercentage;
        });
    }

    // Handle quiz submission
    document.getElementById('submit-quiz').addEventListener('click', () => {
        const quizQuestions = document.querySelectorAll('#quiz-questions div');
        let score = 0;
        let resultHTML = '';
        
        quizQuestions.forEach((questionElement, index) => {
            const selectedOption = questionElement.querySelector('input:checked');
            const correctAnswer = courses[index].quiz[selectedOption.name.split('-')[1]].correctAnswer;

            if (selectedOption) {
                if (selectedOption.value === correctAnswer) {
                    score++;
                } else {
                    resultHTML += `
                        <p><strong>Question ${index + 1}:</strong> Your answer: ${selectedOption.value} <br> Correct answer: ${correctAnswer}</p>
                    `;
                }
            } else {
                resultHTML += `
                    <p><strong>Question ${index + 1}:</strong> No answer selected. <br> Correct answer: ${correctAnswer}</p>
                `;
            }
        });

        resultHTML += `<p>Your total score is: ${score} out of ${quizQuestions.length}</p>`;
        document.getElementById('quiz-container').innerHTML = resultHTML;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Define hardcoded username and password for authentication
    const correctUsername = "user123";
    const correctPassword = "password123";
  
    // Get the login form and error message
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.getElementById('login-container');
    const coursesContainer = document.getElementById('courses-container');
    
    // Hide courses initially until the user logs in
    coursesContainer.style.display = 'none';
  
    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Get entered username and password
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Check if username and password are correct
      if (username === correctUsername && password === correctPassword) {
        // Show courses after successful login
        loginContainer.style.display = 'none';
        coursesContainer.style.display = 'block';
      } else {
        // Show error message
        errorMessage.style.display = 'block';
      }
    });
  
  });
  document.getElementById('logout-btn').addEventListener('click', () => {
    // Hide courses and show login again
    document.getElementById('courses-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
  });
  function updateProgressBar(progressPercentage) {
    // Ensure the percentage is within bounds (0 to 100)
    progressPercentage = Math.min(Math.max(progressPercentage, 0), 100);
  
    // Update the width of the progress bar
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = progressPercentage + '%';
  
    // Update the text showing the progress
    const progressText = document.querySelector('.progress-text');
    progressText.textContent = progressPercentage + '%';
  }
  
  