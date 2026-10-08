/* =====================================================
   STUDENT DETAILS

   CHANGE ONLY THIS SECTION FOR ANOTHER STUDENT.
   DO NOT CHANGE THE REST OF THE CODE.
===================================================== */

const studentData = {

    name: "Shalini M",

    initials: "SM",

    role: "B.Sc. Computer Science Student",

    tagline:
        "Motivated Computer Science student seeking an opportunity to apply my technical knowledge and problem-solving skills in a professional environment.",


    about:
        "I am interested in Artificial Intelligence, exploring emerging AI tools, research, and creative design. I aim to continuously learn new technologies, contribute to innovative projects, and grow as a skilled technology professional.",


    phone: "7339454746",

    email: "Shalinimathi2708@gmail.com",

    linkedin:
        "https://www.linkedin.com/",

    github:
        "https://github.com/",


    /* Personal Details */

    personalDetails: [

        ["Name", "Shalini M"],

        ["Course", "B.Sc. Computer Science"],

        ["Date of Birth", "27.08.2006"],

        ["Nationality", "Indian"],

        ["Sex", "Female"],

        ["Father's Name", "Mr. S. Mathiyalagan"],

        ["Mother's Name", "Mrs. M. Sundari"],

        ["Occupation", "Shopkeeper"],

        ["Languages Known", "Tamil, English"]

    ],


    /* Education */

    education: [

        [
            "SSLC",
            "Mani Matriculation Higher Secondary School, Kabisthalam",
            "92%",
            "2022"
        ],

        [
            "HSC",
            "Mani Matriculation Higher Secondary School, Kabisthalam",
            "88%",
            "2024"
        ],

        [
            "B.Sc. Computer Science",
            "SASTRA Deemed to be University, SRC, Kumbakonam",
            "90%",
            "2027"
        ]

    ],


    /* Technical Skills */

    technicalSkills: [

        "C",
        "C++",
        "Python",
        "HTML",
        "CSS",
        "MS Office",
        "Android Studio"

    ],


    /* Soft Skills */

    softSkills: [

        "Communication",
        "Teamwork",
        "Problem Solving",
        "Creativity",
        "Time Management",
        "Adaptability",
        "Quick Learning"

    ],


    /* Projects */

    projects: [

        {

            title: "Hotel Management Website",

            description:
                "Developed a responsive hotel management website with a user-friendly interface.",

            points: [

                "Form collects Name, Phone Number and Email ID.",

                "Visitor information is stored in Google Sheets.",

                "Google Apps Script is used for data transfer.",

                "Hotel rooms, swimming pool, facilities and contact details are displayed."

            ],

            technologies: [

                "HTML",
                "CSS",
                "JavaScript",
                "Google Sheets"

            ]

        }

    ],


    /* Certifications */

    certifications: [

        {

            title:
                "DCA – Diploma in Computer Applications",

            organization:
                "Bharathiyar Educational and Social Charitable Trust",

            details:
                "A+ | MS Word | MS Excel | MS PowerPoint"

        },

        {

            title:
                "Full-Stack (MERN) App/Web Development",

            organization:
                "Maiyyam",

            details:
                "Issued: 08 July 2026 | Certificate ID: MYMFSM362"

        },

        {

            title:
                "Artificial Intelligence Traineeship",

            organization:
                "Maiyyam",

            details:
                "Issued: 04 August 2026 | Certificate ID: MYMAIT1810"

        }

    ],


    /* Interests */

    interests: [

        {
            icon: "📚",
            title: "Reading",
            description: "Reading research articles"
        },

        {
            icon: "🤖",
            title: "AI Tools",
            description: "Exploring new AI tools"
        },

        {
            icon: "🎨",
            title: "Creative Design",
            description: "Designing and photo/video editing"
        }

    ]

};


/* =====================================================
   LOAD STUDENT INFORMATION
===================================================== */


document.getElementById("logoInitials").textContent =
    studentData.initials;

document.getElementById("navName").textContent =
    studentData.name;

document.getElementById("studentName").textContent =
    studentData.name;

document.getElementById("studentRole").textContent =
    studentData.role;

document.getElementById("studentTagline").textContent =
    studentData.tagline;

document.getElementById("aboutText").textContent =
    studentData.about;

document.getElementById("footerName").textContent =
    studentData.name;


/* =====================================================
   SOCIAL LINKS
===================================================== */

document.getElementById("linkedinLink").href =
    studentData.linkedin;

document.getElementById("githubLink").href =
    studentData.github;

document.getElementById("emailLink").href =
    `mailto:${studentData.email}`;


/* =====================================================
   PERSONAL DETAILS
===================================================== */

const personalContainer =
    document.getElementById("personalDetails");


studentData.personalDetails.forEach(detail => {

    const row = document.createElement("div");

    row.className = "personal-row";

    row.innerHTML = `

        <span>${detail[0]}</span>

        <strong>${detail[1]}</strong>

    `;

    personalContainer.appendChild(row);

});


/* =====================================================
   EDUCATION
===================================================== */

const educationTable =
    document.getElementById("educationTable");


studentData.education.forEach(education => {

    const row = document.createElement("tr");

    row.innerHTML = `

        <td>
            <strong>${education[0]}</strong>
        </td>

        <td>
            ${education[1]}
        </td>

        <td>
            <span class="score">
                ${education[2]}
            </span>
        </td>

        <td>
            ${education[3]}
        </td>

    `;

    educationTable.appendChild(row);

});


/* =====================================================
   TECHNICAL SKILLS
===================================================== */

const technicalSkills =
    document.getElementById("technicalSkills");


studentData.technicalSkills.forEach(skill => {

    const span = document.createElement("span");

    span.className = "skill";

    span.textContent = skill;

    technicalSkills.appendChild(span);

});


/* =====================================================
   SOFT SKILLS
===================================================== */

const softSkills =
    document.getElementById("softSkills");


studentData.softSkills.forEach(skill => {

    const span = document.createElement("span");

    span.className = "soft-skill";

    span.textContent = skill;

    softSkills.appendChild(span);

});


/* =====================================================
   PROJECTS
===================================================== */

const projectsContainer =
    document.getElementById("projectsContainer");


studentData.projects.forEach((project, index) => {

    const article = document.createElement("article");

    article.className = "project";

    const points = project.points
        .map(point => `<li>${point}</li>`)
        .join("");

    const technologies = project.technologies
        .map(tech => `<span class="tech">${tech}</span>`)
        .join("");

    article.innerHTML = `

        <div class="project-image">

            <i class="fa-solid fa-code"></i>

            <span>
                PROJECT ${String(index + 1).padStart(2, "0")}
            </span>

        </div>


        <div class="project-content">

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.description}
            </p>

            <ul>
                ${points}
            </ul>

            <div class="tech-list">
                ${technologies}
            </div>

        </div>

    `;

    projectsContainer.appendChild(article);

});


/* =====================================================
   CERTIFICATIONS
===================================================== */

const certificationsContainer =
    document.getElementById("certificationsContainer");


studentData.certifications.forEach(certificate => {

    const div = document.createElement("div");

    div.className = "certificate";

    div.innerHTML = `

        <h3>
            <i class="fa-solid fa-award"></i>
            ${certificate.title}
        </h3>

        <p>
            ${certificate.organization}
        </p>

        <p>
            ${certificate.details}
        </p>

    `;

    certificationsContainer.appendChild(div);

});


/* =====================================================
   INTERESTS
===================================================== */

const interestsContainer =
    document.getElementById("interestsContainer");


studentData.interests.forEach(interest => {

    const div = document.createElement("div");

    div.className = "interest";

    div.innerHTML = `

        <div class="interest-icon">
            ${interest.icon}
        </div>

        <h3>
            ${interest.title}
        </h3>

        <p>
            ${interest.description}
        </p>

    `;

    interestsContainer.appendChild(div);

});


/* =====================================================
   CONTACT
===================================================== */

document.getElementById("phoneText").textContent =
    studentData.phone;

document.getElementById("emailText").textContent =
    studentData.email;


document.getElementById("phoneLink").href =
    `tel:${studentData.phone}`;

document.getElementById("contactEmail").href =
    `mailto:${studentData.email}`;

document.getElementById("contactLinkedin").href =
    studentData.linkedin;


/* =====================================================
   TASK MANAGER
===================================================== */


let tasks = JSON.parse(
    localStorage.getItem("studentTasks")
) || [

    {
        id: 1,
        text: "Complete portfolio website",
        finished: true
    },

    {
        id: 2,
        text: "Learn JavaScript",
        finished: true
    },

    {
        id: 3,
        text: "Work on AI project",
        finished: false
    },

    {
        id: 4,
        text: "Read research articles",
        finished: false
    }

];


let currentFilter = "all";


const taskForm =
    document.getElementById("taskForm");

const taskInput =
    document.getElementById("taskInput");

const taskList =
    document.getElementById("taskList");


/* Save tasks */

function saveTasks() {

    localStorage.setItem(
        "studentTasks",
        JSON.stringify(tasks)
    );

}


/* Display tasks */

function displayTasks() {

    taskList.innerHTML = "";


    let filteredTasks = tasks.filter(task => {

        if (currentFilter === "finished") {

            return task.finished;

        }

        if (currentFilter === "pending") {

            return !task.finished;

        }

        return true;

    });


    if (filteredTasks.length === 0) {

        taskList.innerHTML = `

            <p style="
                text-align:center;
                padding:15px;
                color:#888;
                font-size:12px;
            ">
                No tasks found.
            </p>

        `;

    }


    filteredTasks.forEach(task => {

        const div =
            document.createElement("div");

        div.className =
            task.finished
                ? "task finished"
                : "task";


        div.innerHTML = `

            <button
                class="check-button"
                onclick="toggleTask(${task.id})">

                ${
                    task.finished
                        ? '<i class="fa-solid fa-check"></i>'
                        : ''
                }

            </button>


            <span class="task-text">
                ${task.text}
            </span>


            <span class="
                status
                ${task.finished
                    ? "finished"
                    : "pending"}
            ">

                ${
                    task.finished
                        ? "Finished"
                        : "Pending"
                }

            </span>


            <button
                class="delete-button"
                onclick="deleteTask(${task.id})">

                <i class="fa-solid fa-trash"></i>

            </button>

        `;


        taskList.appendChild(div);

    });


    updateProgress();

}


/* Add task */

taskForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const text =
            taskInput.value.trim();


        if (text === "") {

            alert("Please enter a task.");

            return;

        }


        tasks.push({

            id: Date.now(),

            text: text,

            finished: false

        });


        taskInput.value = "";


        saveTasks();

        displayTasks();

    }
);


/* Complete / Pending */

function toggleTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {

            return {

                ...task,

                finished: !task.finished

            };

        }

        return task;

    });


    saveTasks();

    displayTasks();

}


/* Delete */

function deleteTask(id) {

    tasks =
        tasks.filter(task => task.id !== id);


    saveTasks();

    displayTasks();

}


/* Filters */

document.querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                document
                    .querySelectorAll(".filter")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );


                this.classList.add("active");


                currentFilter =
                    this.dataset.filter;


                displayTasks();

            }
        );

    });


/* Progress */

function updateProgress() {

    const total =
        tasks.length;


    const finished =
        tasks.filter(task =>
            task.finished
        ).length;


    const percentage =
        total === 0
            ? 0
            : Math.round(
                (finished / total) * 100
            );


    document.getElementById(
        "taskCount"
    ).textContent = total;


    document.getElementById(
        "progressText"
    ).textContent =
        `${finished} of ${total} tasks completed`;


    document.getElementById(
        "progressPercentage"
    ).textContent =
        `${percentage}%`;


    document.getElementById(
        "progressBar"
    ).style.width =
        `${percentage}%`;

}


/* Start */

displayTasks();


/* =====================================================
   DARK MODE
===================================================== */

const darkModeBtn =
    document.getElementById("darkModeBtn");


darkModeBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle("dark");


        const icon =
            darkModeBtn.querySelector("i");


        if (
            document.body.classList.contains("dark")
        ) {

            icon.className =
                "fa-solid fa-sun";

        } else {

            icon.className =
                "fa-solid fa-moon";

        }

    }
);


/* =====================================================
   MOBILE NAVBAR
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navbarLinks =
    document.getElementById("navbarLinks");


menuBtn.addEventListener(
    "click",
    function() {

        navbarLinks.classList.toggle("show");

    }
);


/* Close mobile menu after clicking */

document.querySelectorAll(
    "#navbarLinks a"
).forEach(link => {

    link.addEventListener(
        "click",
        function() {

            navbarLinks.classList.remove("show");

        }
    );

});