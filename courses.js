const result = document.getElementById("result");
const inpValue = document.getElementById("search-box").value;


if (inpValue === "") {
    const subheadings = document.querySelector('.subheading');
    for (const subheading in subheadings) {
        switch (subheading.id) {
            case 'codecademy':
                for (const course in codecademy) {
                    const imageContainer = document.createElement('div');
                    imageContainer.className = 'img-container';
                    subheading.append(imageContainer);

                    const textContainer = document.createElement('div');
                    textContainer.className = 'text-container';
                    subheading.append(textContainer);

                    const courseName = document.createElement('p');
                    courseName.id = `${course}`;
                    courseName.className = 'course-name';
                    courseName.innerHTML = course.course;
                    textContainer.append(courseName);

                    const finDate = document.createElement('p');
                    finDate.id = `${course}-fin`;
                    finDate.className = 'finish-date';
                    finDate.innerHTML = formatDate(course.finishDate);
                    textContainer.append(finDate);

                    if (course.hours !== null) {
                        const timeHours = document.createElement('p');
                        timeHours.id = `${course}-time`;
                        timeHours.className = 'time-duration';
                        timeHours.innerHTML = `${course.hours} Hours`;
                        textContainer.append(timeHours);
                    } else {
                        const timeWeeks = document.createElement('p');
                        timeWeeks.id = `${course}-time`;
                        timeWeeks.className = 'time-duration';
                        timeWeeks.innerHTML = `${course.hours} Weeks`;
                        textContainer.append(timeWeeks);
                    }
                }

                break;
            case 'adv-place':
                
                
                break;
            case 'senior':
                break;
            case 'foreign-lang':
                break;
            case 'datasci':
                break;
            default:
                break;
        }
    }
} else {

}

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












export const codecademy = {
    swift: {
        course: "Learn Swift",
        finishDate: "05-28-2022",
        hours: 25,
        weeks: null
    },
    html: {
        course: "Learn HTML",
        finishDate: "06-12-2022",
        hours: 9,
        weeks: null
    },
    css: {
        course: "Learn CSS",
        finishDate: "06-18-2022",
        hours: 10,
        weeks: null
    },
    cplusplus: {
        course: "Learn C++",
        finishDate: "07-01-2022",
        hours: 25,
        weeks: null
    },
    intermcplusplus: {
        course: "C++ for Programmers",
        finishDate: "07-05-2022",
        hours: 9,
        weeks: null
    },
    java: {
        course: "Learn Java",
        finishDate: "07-13-2022",
        hours: 25,
        weeks: null
    },
    beautifulsoup: {
        course: "Learn Web Scraping with BeautifulSoup",
        finishDate: "07-15-2022",
        hours: 1,
        weeks: null
    },
    intermswift: {
        course: "Learn Intermediate Swift",
        finishDate: "07-17-2022",
        hours: 9,
        weeks: null
    },
    cmdline: {
        course: "Learn Command Line",
        finishDate: "07-23-2022",
        hours: 8,
        weeks: null
    },
    javascript: {
        course: "Learn JavaScript",
        finishDate: "08-14-2022",
        hours: 20,
        weeks: null
    },
    kotlin: {
        course: "Learn Kotlin",
        finishDate: "10-23-2022",
        hours: 15,
        weeks: null
    },
    nflstats: {
        course: "Analyze NFL Stats with Python Case Study",
        finishDate: "10-26-2022",
        hours: 1,
        weeks: null
    },
    interactivejs: {
        course: "Building Interactive JavaScript Websites",
        finishDate: "11-05-2022",
        hours: 7,
        weeks: null
    },
    ioslevelone: {
        course: "Build iOS Apps with SwiftUI",
        finishDate: "12-28-2022",
        hours: null,
        weeks: 10
    },
    iosleveltwo: {
        course: "Build an Intermediate iOS App with Swift UI",
        finishDate: "01-14-2023",
        hours: null,
        weeks: 14
    },
    asyncjs: {
        course: "Learn JavaScript: Asynchronous Programming",
        finishDate: "01-14-2023",
        hours: 1,
        weeks: null
    },
    linalg: {
        course: "Linear Algebra",
        finishDate: "04-03-2023",
        hours: 2,
        weeks: null
    },
    chatgpt: {
        course: "Intro to ChatGPT",
        finishDate: "04-19-2023",
        hours: 7,
        weeks: null
    },
    jquery: {
        course: "Learn jQuery",
        finishDate: "05-05-2023",
        hours: 9,
        weeks: null
    },
    nodejs: {
        course: "Learn Node.js",
        finishDate: "05-14-2023",
        hours: 7,
        weeks: null
    },
    react: {
        course: "Learn React",
        finishDate: "05-30-2023",
        hours: 15,
        weeks: null
    },
    reactnative: {
        course: "Learn React Native",
        finishDate: "06-02-2023",
        hours: 7,
        weeks: null
    }
}

export const ap = {
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

export const seniorcourses = {
    linalg: {
        course: "Linear Algebra - Foundations to Frontiers",
        instructor: "University of Texas - Austin",
        provider: "edX",
        url: URL('https://www.edx.org/course/linear-algebra-foundations-to-frontiers?index=product&queryID=23f5e639fc9c6aa87e87f5a5908906ed&position=1&results_level=second-level-results&search_index=product&term=Linear+Algebra&campaign=Linear+Algebra+-+Foundations+to+Frontiers&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch')
    },
    diffeq: {
        course: "Introduction to Differential Equations",
        instructor: "Massachusetts Institute of Technology",
        provider: "edX",
        url: URL('https://www.edx.org/course/introduction-to-differential-equations-2?index=product&queryID=ba3d88e76cec4849479f3c11091b5584&position=1&results_level=second-level-results&search_index=product&term=Differential+Equations&campaign=Introduction+to+Differential+Equations&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch')
    },
    multvarcalc: {
        course: "Multivariable Calculus",
        instructor: "Massachusetts Institute of Technology",
        provider: "Open CourseWare",
        url: URL('https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/')
    },
    vectorcalc: {
        course: "Vector Calculus",
        instructor: "Brilliant",
        provider: "Brilliant",
        url: URL('https://brilliant.org/courses/vector-calculus/')
    },
    django: {
        course: "Web Programming with Python and JavaScript",
        instructor: "Harvard University",
        provider: "edX",
        url: URL('https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript?irclickid=T2a2OB1UrzBsRXyVUM3XD0JWUkAXXARm8T5J3U0&utm_source=affiliate&utm_medium=Ziff%20Davis%2C%20LLC.&utm_campaign=edX%20Tracking%20Link_&utm_content=TEXT_LINK&irgwc=1')
    }
}

export const duolingo = {
    duo: {
        course: "German",
        provider: "Duolingo"
    }
}

export const datascience = {
    /* 365 Data Science courses */
    excel: {
        course: "Introduction to Microsoft Excel",
        finishDate: "03-22-2020",
        hours: 4
    },
    advexcel: {
        course: "Advanced Microsoft Excel",
        finishDate: "03-23-2020",
        hours: 2
    },
    math: {
        course: "Mathematics",
        finishDate: "03-23-2020",
        hours: 1
    },
    tableau: {
        course: "Introduction to Tableau",
        finishDate: "03-24-2020",
        hours: 2
    },
    powerbi: {
        course: "Power BI",
        finishDate: "04-03-2020",
        hours: 8
    },
    data: {
        course: "Introduction to Data and Data Science",
        finishDate: "04-19-2020",
        hours: 2
    },
    stat: {
        course: "Statistics",
        finishDate: "04-20-2020",
        hours: 3
    },
    prob: {
        course: "Probability",
        finishDate: "04-20-2020",
        hours: 4
    },
    sql: {
        course: "SQL",
        finishDate: "04-20-2020",
        hours: 8
    },
    sqltableau: {
        course: "SQL + Tableau",
        finishDate: "04-21-2020",
        hours: 1
    },
    python: {
        course: "Introduction to Python",
        finishDate: "04-22-2020",
        hours: 2
    },
    bootcamp: {
        course: "Python Programmer Bootcamp",
        finishDate: "05-15-2020",
        hours: 11
    },
    git: {
        course: "Git and Github",
        finishDate: "05-15-2020",
        hours: 1
    },
    r: {
        course: "Introduction to R Programming",
        finishDate: "06-08-2020",
        hours: 6
    },
    mlpy: {
        course: "Machine Learning in Python",
        finishDate: "06-14-2020",
        hours: 5
    },
    deep: {
        course: "Deep Learning with TensorFlow 2.0",
        finishDate: "06-29-2020",
        hours: 5
    },
    triple: {
        course: "SQL + Tableau + Python",
        finishDate: "07-02-2020",
        hours: 4
    },
    dataviz: {
        course: "Data Visualization with Python, R, Tableau, and Excel",
        finishDate: "07-15-2020",
        hours: 9
    },
    business: {
        course: "Introduction to Business Analytics",
        finishDate: "10-29-2020",
        hours: 5
    },
    webscrape: {
        course: "Web Scraping and API Fundamentals with Python",
        finishDate: "06-06-2022",
        hours: 4
    },
    pandas: {
        course: "Data Cleaning and Preprocessing with pandas",
        finishDate: "06-26-2022",
        hours: 2
    }
}