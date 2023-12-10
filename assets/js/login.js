import { fetchData } from "./eventHandler.js";

$(document).ready(function () {
  sessionStorage.clear();

  let form = $("#loginForm");

  form.on("submit", function (e) {
    e.preventDefault();

    validateInput();
  });

  const validateInput = () => {
    const am_to_table = {
      ics: "student",
      dia: "teacher",
      adm: "admin",
    };

    let username = $("#username").val();
    let password = $("#password").val();

    let type = am_to_table[username.slice(0, 3)];

    const credentials = {
      ID: username,
      password: password,
      table: type,
    };

    if (credentials.table) {
      fetchData(jQuery, "assets/Back-End/login.php", "POST", credentials)
        .then((data) => {
          data.type = type;
          delete data.Password;
          LogIn(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Invalid input");
    }
  };

  const setNavList = () => {
    let navList;

    switch (sessionStorage.getItem("userType")) {
      case "student":
        navList = {
          Home: { text: "My dashboard", url: "portofolio.php", imgURL: "" },
          Courses: { text: "My Courses", url: "courses.php", imgURL: "" },
          AddCourse: { text: "Add Course", url: "AddCourse.php", imgURL: "" },
          LogOut: { text: "Log Out", url: "LoginPage.php", imgURL: "" },
        };
        break;
      case "teacher":
        navList = {
          Home: { text: "My dashboard", url: "portofolio.php", imgURL: "" },
          Courses: { text: "My Courses", url: "courses.php", imgURL: "" },
          AddCourse: { text: "Add Course", url: "AddCourse.php", imgURL: "" },
          LogOut: { text: "Log Out", url: "LoginPage.php", imgURL: "" },
        };
        break;
      case "admin":
        navList = {
          Home: "Portfolio.php",
        };
        break;
      default:
        break;
    }
  };

  const setContentList = () => {
    let contentList;

    switch (sessionStorage.getItem("userType")) {
      case "student":
        contentList = {
          availCourses: {
            text: "Available Courses",
            url: "availCourses.php",
            imgURL: "assets/images/allCoursesIcon.png",
          },
          courses: {
            text: "My courses",
            url: "viewStudCourses.php",
            imgURL: "assets/images/ViewCoursesIcon.png",
          },
          addCourse: {
            text: "Profile Preferences",
            url: `profile.php?ID=${
              JSON.parse(sessionStorage.getItem("userData"))[0].ID
            }`,
            imgURL: "assets/images/accountInfoIcon.png",
          },
          quiz: {
            text: "Quiz",
            url: "quiz.php",
            imgURL: "assets/images/quizIcon.png",
          },
        };
        break;
      case "teacher":
        contentList = {
          viewAll: {
            text: "View All Courses",
            url: "viewCourses.php",
            imgURL: "assets/images/ViewCoursesIcon.png",
          },
          addCourse: {
            text: "Add Course",
            url: "addCourse.php",
            imgURL: "assets/images/addCourseIcon.png",
          },
          profilePref: {
            text: "Profile Preferences",
            url: `profile.php?ID=${
              JSON.parse(sessionStorage.getItem("userData"))[0].ID
            }`,
            imgURL: "assets/images/accountInfoIcon.png",
          },
          viewStud: {
            text: "View Students",
            url: "viewStuds.php",
            imgURL: "assets/images/showStudentsIcon.png",
          },
        };
        break;
      // case "admin":
      //   contentList = {
      //     Home: { text: "My dashboard", url: "portofolio.php", imgURL: "" },
      //     Courses: { text: "My Courses", url: "courses.php", imgURL: "" },
      //     AddCourse: { text: "Add Course", url: "AddCourse.php", imgURL: "" },
      //     LogOut: { text: "Log Out", url: "LoginPage.php", imgURL: "" },
      //   };
      //   break;
      default:
        break;
    }
    sessionStorage.setItem("userContent", JSON.stringify(contentList));
  };

  const LogIn = (data) => {
    sessionStorage.setItem("userData", JSON.stringify(data));
    sessionStorage.setItem("userType", data.type);
    setNavList();
    setContentList();
    window.location.href = "portfolio.php";
  };
});
