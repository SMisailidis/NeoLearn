import { fetchData } from "./eventHandler.js";

$(document).ready(function () {
  sessionStorage.clear();

  let form = $("#loginForm");

  //Function to reset the wrong inputs on typing
  $("#username, #password").on("input", function () {
    $(".form-label").removeClass("loginLabelError");
    $(".fa-solid").removeClass("iconError");
    $("#submit").removeClass("loginSubmitError");
    $(".spanError").css("display", "none");
  });

  //Function for form submit
  form.on("submit", function (e) {
    e.preventDefault();

    validateInput();
  });

  //Functio to validate the data and find out what the user is (teacher, student, admin)
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
          if (data.length === 0) {
            $(".form-label").addClass("loginLabelError");
            $(".fa-solid").addClass("iconError");
            $("#submit").addClass("loginSubmitError");
            $(".spanError").css("display", "inherit");
            return;
          }
          data.type = type;
          delete data.Password; //deleting the password for security
          LogIn(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      $(".form-label").addClass("loginLabelError");
      $(".fa-solid").addClass("iconError");
      // $("#submit").addClass("loginSubmitError");
      $(".spanError").css("display", "inherit");
    }
  };

  //Function to set the data of the aside navbar based on the type of the user
  const setNavList = () => {
    let navList;

    switch (sessionStorage.getItem("userType")) {
      case "student":
        navList = {
          Home: {
            text: "My dashboard",
            url: "portfolio.php",
            imgURL: "fa-solid fa-house-chimney",
          },
          AvailCourses: {
            text: "Available Courses",
            url: "availCourses.php",
            imgURL: "fa-solid fa-book",
          },
          MyCourses: {
            text: "My courses",
            url: "viewStudCourses.php",
            imgURL: "fa-solid fa-book-bookmark",
          },
          Quiz: {
            text: "Quiz",
            url: "portfolioQuizLandingPage.php",
            imgURL: "fa-solid fa-circle-question",
          },
          profile: {
            text: "Profile",
            url: `profile.php?ID=${
              JSON.parse(sessionStorage.getItem("userData"))[0].ID
            }`,
            imgURL: "fa-solid fa-user",
          },
        };
        break;
      case "teacher":
        navList = {
          Home: {
            text: "My dashboard",
            url: "portfolio.php",
            imgURL: "fa-solid fa-house-chimney",
          },
          Courses: {
            text: "View All Courses",
            url: "viewCourses.php",
            imgURL: "fa-solid fa-book",
          },
          AddCourse: {
            text: "Add Course",
            url: "AddCourse.php",
            imgURL: "fa-solid fa-square-plus",
          },
          ViewStudents: {
            text: "View Students",
            url: "viewStuds.php",
            imgURL: "fa-solid fa-people-group",
          },
          profile: {
            text: "Profile",
            url: `profile.php?ID=${
              JSON.parse(sessionStorage.getItem("userData"))[0].ID
            }`,
            imgURL: "fa-solid fa-user",
          },
        };
        break;
      case "admin":
        navList = {
          Home: {
            text: "My dashboard",
            url: "portfolio.php",
            imgURL: "fa-solid fa-house-chimney",
          },
          Students: {
            text: "View Students",
            url: "viewAllStudents.php",
            imgURL: "fa-solid fa-people-group",
          },
          Teachers: {
            text: "View Teachers",
            url: "viewAllTeachers.php",
            imgURL: "fa-solid fa-person-chalkboard",
          },
          Courses: {
            text: "View Courses",
            url: "viewAllCourses.php",
            imgURL: "fa-solid fa-book",
          },
          profile: {
            text: "Profile",
            url: `profile.php?ID=${
              JSON.parse(sessionStorage.getItem("userData"))[0].ID
            }`,
            imgURL: "fa-solid fa-user",
          },
        };
        break;
      default:
        break;
    }
    sessionStorage.setItem("userNavList", JSON.stringify(navList));
  };

  //Function to set the data of the portfolio based on the type of the user
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
            url: "portfolioQuizLandingPage.php",
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
      case "admin":
        contentList = {
          ViewStudents: {
            text: "View Students",
            url: "viewAllStudents.php",
            imgURL: "assets/images/showStudentsIcon.png",
          },
          ViewTeachers: {
            text: "View Teachers",
            url: "viewAllTeachers.php",
            imgURL: "assets/images/teacher.png",
          },
          Profile: {
            text: "Profile",
            url: `profile.php?ID=${
              JSON.parse(sessionStorage.getItem("userData"))[0].ID
            }`,
            imgURL: "assets/images/accountInfoIcon.png",
          },
          ViewCourses: {
            text: "View Courses",
            url: "viewAllCourses.php",
            imgURL: "assets/images/allCoursesIcon.png",
          },
        };
        break;
      default:
        break;
    }
    sessionStorage.setItem("userContent", JSON.stringify(contentList));
  };

  //Function to log in and navigate to the main portfolio
  const LogIn = (data) => {
    sessionStorage.setItem("userData", JSON.stringify(data));
    sessionStorage.setItem("userType", data.type);
    setNavList();
    setContentList();
    window.location.href = "portfolio.php";
  };
});
