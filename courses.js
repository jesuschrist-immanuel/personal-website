// const result = document.getElementById("result");
// const inpValue = document.getElementById("search-box").value;

function formatDate(dateString) {
    // Split the date string into month, day, and year
    const [month, day, year] = dateString.split("-");

    // Create a Date object using the year, month (minus 1 since months are zero-based), and day
    const date = new Date(year, month - 1, day);

    // Format the date using built-in JavaScript methods
    const formattedDate = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    return formattedDate;
}


const codecademy = {
    swift: {
        course: "Learn Swift",
        finishDate: "05-28-2022",
        hours: 25,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-swift',
        image: '/assets/swift-logo.png'
    },
    html: {
        course: "Learn HTML",
        finishDate: "06-12-2022",
        hours: 9,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-html',
        image: '/assets/html-logo.png'
    },
    css: {
        course: "Learn CSS",
        finishDate: "06-18-2022",
        hours: 10,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-css',
        image: '/assets/css-logo.png'
    },
    cplusplus: {
        course: "Learn C++",
        finishDate: "07-01-2022",
        hours: 25,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-c-plus-plus',
        image: '/assets/cplusplus-logo.png'
    },
    intermcplusplus: {
        course: "C++ for Programmers",
        finishDate: "07-05-2022",
        hours: 9,
        weeks: null,
        link: 'https://www.codecademy.com/learn/c-plus-plus-for-programmers',
        image: '/assets/cplusplus-logo.png'
    },
    java: {
        course: "Learn Java",
        finishDate: "07-13-2022",
        hours: 25,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-java',
        image: '/assets/java-logo.png'
    },
    beautifulsoup: {
        course: "Learn Web Scraping with BeautifulSoup",
        finishDate: "07-15-2022",
        hours: 1,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-web-scraping',
        image: '/assets/beautiful-soup.png'
    },
    intermswift: {
        course: "Learn Intermediate Swift",
        finishDate: "07-17-2022",
        hours: 9,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-intermediate-swift',
        image: '/assets/swift-logo.png'
    },
    cmdline: {
        course: "Learn Command Line",
        finishDate: "07-23-2022",
        hours: 8,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-the-command-line',
        image: '/assets/cmd-line.png'
    },
    javascript: {
        course: "Learn JavaScript",
        finishDate: "08-14-2022",
        hours: 20,
        weeks: null,
        link: 'https://www.codecademy.com/learn/introduction-to-javascript',
        image: '/assets/js-logo.png'
    },
    kotlin: {
        course: "Learn Kotlin",
        finishDate: "10-23-2022",
        hours: 15,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-kotlin',
        image: '/assets/kotlin-logo.png'
    },
    nflstats: {
        course: "Analyze NFL Stats with Python Case Study",
        finishDate: "10-26-2022",
        hours: 1,
        weeks: null,
        link: 'https://www.codecademy.com/learn/case-study-analyze-nfl-stats',
        image: '/assets/python-logo.png'
    },
    interactivejs: {
        course: "Building Interactive JavaScript Websites",
        finishDate: "11-05-2022",
        hours: 7,
        weeks: null,
        link: 'https://www.codecademy.com/learn/build-interactive-websites',
        image: '/assets/js-logo.png'
    },
    ioslevelone: {
        course: "Build iOS Apps with SwiftUI",
        finishDate: "12-28-2022",
        hours: null,
        weeks: 10,
        link: 'https://www.codecademy.com/learn/paths/build-ios-apps-with-swiftui',
        image: '/assets/swift-logo.png'
    },
    iosleveltwo: {
        course: "Build an Intermediate iOS App with SwiftUI",
        finishDate: "01-14-2023",
        hours: null,
        weeks: 14,
        link: 'https://www.codecademy.com/learn/paths/build-an-intermediate-ios-app-with-swiftui',
        image: '/assets/swift-logo.png'
    },
    asyncjs: {
        course: "Learn JavaScript: Asynchronous Programming",
        finishDate: "01-14-2023",
        hours: 1,
        weeks: null,
        link: 'https://www.codecademy.com/learn/asynchronous-javascript',
        image: '/assets/js-logo.png'
    },
    linalg: {
        course: "Linear Algebra",
        finishDate: "04-03-2023",
        hours: 2,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-linear-algebra',
        image: '/assets/linalg-logo.png'
    },
    chatgpt: {
        course: "Intro to ChatGPT",
        finishDate: "04-19-2023",
        hours: 7,
        weeks: null,
        link: 'https://www.codecademy.com/learn/intro-to-chatgpt',
        image: '/assets/chatgpt-icon.png'
    },
    jquery: {
        course: "Learn jQuery",
        finishDate: "05-05-2023",
        hours: 9,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-jquery',
        image: '/assets/jquery-logo.png'
    },
    nodejs: {
        course: "Learn Node.js",
        finishDate: "05-14-2023",
        hours: 7,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-node-js',
        image: '/assets/nodejs-logo.png'
    },
    react: {
        course: "Learn React",
        finishDate: "05-30-2023",
        hours: 15,
        weeks: null,
        link: 'https://www.codecademy.com/learn/react-101',
        image: '/assets/react-logo.png'
    },
    reactnative: {
        course: "Learn React Native",
        finishDate: "06-02-2023",
        hours: 7,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-react-native',
        image: '/assets/react-logo.png'
    },
    redux: {
        course: "Learn Redux",
        finishDate: "06-23-2023",
        hours: 10,
        weeks: null,
        link: 'https://www.codecademy.com/learn/learn-redux',
        image: '/assets/redux-logo.png'
    }
}

const deeplearning = {
    deeplearningai: {
        course: "ChatGPT Prompt Engineering for Developers",
        finDate: "05-29-2023",
        hours: 1
    }
}

const ap = {
    calcbc: {
        course: "AP Calculus BC",
        type: "Self-Study",
        year: 2022,
        score: 5
    },
    stats: {
        course: "AP Statistics",
        type: "Self-Study",
        year: 2022,
        score: 5
    },
    csa: {
        course: "AP Computer Science A",
        type: "Self-Study",
        year: 2022,
        score: 5
    },
    physone: {
        course: "AP Physics 1",
        type: "Self-Study",
        year: 2022,
        score: 3
    },
    world: {
        course: "AP World History",
        type: "School",
        year: 2022,
        score: 5
    },
    psych: {
        course: "AP Psychology",
        type: "Self-Study",
        year: 2023,
        score: null /* To be filled later */
    },
    macro: {
        course: "AP Macroeconomics",
        type: "Self-Study",
        year: 2023,
        score: null /* To be filled later */
    },
    micro: {
        course: "AP Microeconomics",
        type: "Self-Study",
        year: 2023,
        score: null /* To be filled later */
    },
    bio: {
        course: "AP Biology",
        type: "School",
        year: 2023,
        score: null /* To be filled later */
    },
    ush: {
        course: "AP United States History",
        type: "School",
        year: 2023,
        score: null /* To be filled later */
    },
    /* Undecided courses */
    gov: {
        course: "AP Government and Politics",
        type: "School",
        year: 2024,
        score: null
    },
    chem: {
        course: "AP Chemistry",
        type: "Self-Study",
        year: 2024,
        score: null
    },
    envsci: {
        course: "AP Environmental Science",
        type: "Self-Study",
        year: 2024,
        score: null
    },
    hug: {
        course: "AP Human Geography",
        type: "Self-Study",
        year: 2024,
        score: null
    },
    euro: {
        course: "AP European History",
        type: "Self-Study",
        year: 2024,
        score: null
    },
    phystwo: {
        course: "AP Physics 2",
        type: "Self-Study",
        year: 2024,
        score: null
    }
}

const seniorcourses = {
    linalg: {
        course: "Linear Algebra",
        instructor: "Massachusetts Institute of Technology",
        provider: "Open CourseWare",
        url: 'https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/'
    },
    diffeq: {
        course: "Introduction to Differential Equations",
        instructor: "Massachusetts Institute of Technology",
        provider: "edX",
        url: 'https://www.edx.org/course/introduction-to-differential-equations-2?index=product&queryID=ba3d88e76cec4849479f3c11091b5584&position=1&results_level=second-level-results&search_index=product&term=Differential+Equations&campaign=Introduction+to+Differential+Equations&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch'
    },
    multvarcalc: {
        course: "Multivariable Calculus",
        instructor: "Massachusetts Institute of Technology",
        provider: "Open CourseWare",
        url: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/'
    },
    vectorcalc: {
        course: "Vector Calculus",
        instructor: "Brilliant",
        provider: "Brilliant",
        url: 'https://brilliant.org/courses/vector-calculus/'
    },
    django: {
        course: "Web Programming with Python and JavaScript",
        instructor: "Harvard University",
        provider: "edX",
        url: 'https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript?irclickid=T2a2OB1UrzBsRXyVUM3XD0JWUkAXXARm8T5J3U0&utm_source=affiliate&utm_medium=Ziff%20Davis%2C%20LLC.&utm_campaign=edX%20Tracking%20Link_&utm_content=TEXT_LINK&irgwc=1'
    }
}

const foreignlang = {
    span1: {
        course: "Spanish 1",
        provider: "School",
        grade: 100
    },
    span2: {
        course: "Spanish 2",
        provider: "School",
        grade: 100
    },
    duo: {
        course: "German",
        provider: "Duolingo",
        grade: null
    }
}

const datascience = {
    /* 365 Data Science courses */
    excel: {
        course: "Introduction to Microsoft Excel",
        finishDate: "03-22-2020",
        hours: 4,
        link: "https://learn.365datascience.com/courses/preview/introduction-to-microsoft-excel/"
    },
    advexcel: {
        course: "Advanced Microsoft Excel",
        finishDate: "03-23-2020",
        hours: 2,
        link: "https://learn.365datascience.com/courses/preview/advanced-microsoft-excel/"
    },
    math: {
        course: "Mathematics",
        finishDate: "03-23-2020",
        hours: 1,
        link: "https://learn.365datascience.com/courses/preview/mathematics/"
    },
    tableau: {
        course: "Introduction to Tableau",
        finishDate: "03-24-2020",
        hours: 2,
        link: "https://learn.365datascience.com/courses/preview/tableau/"
    },
    powerbi: {
        course: "Power BI",
        finishDate: "04-03-2020",
        hours: 8,
        link: "https://learn.365datascience.com/courses/preview/introduction-to-power-bi/"
    },
    data: {
        course: "Introduction to Data and Data Science",
        finishDate: "04-19-2020",
        hours: 2,
        link: "https://learn.365datascience.com/courses/preview/intro-to-data-and-data-science/"
    },
    stat: {
        course: "Statistics",
        finishDate: "04-20-2020",
        hours: 3,
        link: "https://learn.365datascience.com/courses/preview/statistics/"
    },
    prob: {
        course: "Probability",
        finishDate: "04-20-2020",
        hours: 4,
        link: "https://learn.365datascience.com/courses/preview/probability/"
    },
    sql: {
        course: "SQL",
        finishDate: "04-20-2020",
        hours: 8,
        link: "https://learn.365datascience.com/courses/preview/sql/"
    },
    sqltableau: {
        course: "SQL + Tableau",
        finishDate: "04-21-2020",
        hours: 1,
        link: "https://learn.365datascience.com/courses/preview/sql-tableau/"
    },
    python: {
        course: "Introduction to Python",
        finishDate: "04-22-2020",
        hours: 2,
        link: "https://learn.365datascience.com/courses/preview/introduction-to-python/"
    },
    bootcamp: {
        course: "Python Programmer Bootcamp",
        finishDate: "05-15-2020",
        hours: 11,
        link: "https://learn.365datascience.com/courses/preview/python-programmer-bootcamp/"
    },
    git: {
        course: "Git and Github",
        finishDate: "05-15-2020",
        hours: 1,
        link: "https://learn.365datascience.com/courses/preview/git-and-github/"
    },
    r: {
        course: "Introduction to R Programming",
        finishDate: "06-08-2020",
        hours: 6,
        link: "https://learn.365datascience.com/courses/preview/introduction-to-r-programming/"
    },
    mlpy: {
        course: "Machine Learning in Python",
        finishDate: "06-14-2020",
        hours: 5,
        link: "https://learn.365datascience.com/courses/preview/machine-learning-in-python/"
    },
    deep: {
        course: "Deep Learning with TensorFlow 2.0",
        finishDate: "06-29-2020",
        hours: 5,
        link: "https://learn.365datascience.com/courses/preview/deep-learning-with-tensorflow-2-0/"
    },
    triple: {
        course: "SQL + Tableau + Python",
        finishDate: "07-02-2020",
        hours: 4,
        link: "https://learn.365datascience.com/courses/preview/sql-tableau-python/"
    },
    dataviz: {
        course: "Data Visualization with Python, R, Tableau, and Excel",
        finishDate: "07-15-2020",
        hours: 9,
        link: "https://learn.365datascience.com/courses/preview/data-visualization/"
    },
    business: {
        course: "Introduction to Business Analytics",
        finishDate: "10-29-2020",
        hours: 5,
        link: "https://learn.365datascience.com/courses/preview/introduction-to-business-analytics/"
    },
    webscrape: {
        course: "Web Scraping and API Fundamentals with Python",
        finishDate: "06-06-2022",
        hours: 4,
        link: "https://learn.365datascience.com/courses/preview/web-scraping-and-api-fundamentals-in-python/"
    },
    pandas: {
        course: "Data Cleaning and Preprocessing with pandas",
        finishDate: "06-26-2022",
        hours: 2,
        link: "https://learn.365datascience.com/courses/preview/data-cleaning-preprocessing-pandas/"
    }
}