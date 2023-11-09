$(document).ready(function () {
  let form = $("#loginForm");

  form.on("submit", function (e) {
    e.preventDefault();

    validateInput();
  });

  const validateInput = () => {
    sessionStorage.clear();
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
      $.ajax({
        type: "POST",
        url: "assets/Back-End/login.php",
        data: credentials,
        dataType: "json",
        success: function (response) {
          if (response.success) {
            response.data[0].type = type;
            delete response.data[0].Password;
            LogIn(response.data);
          } else {
            alert("Query failed: " + response.message);
          }
        },
        error: function (xhr, status, error) {
          console.error("Error: " + error);
        },
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
            imgURL: "assets/images/accountInfoIcon.png",
          },
          courses: {
            text: "My courses",
            url: "viewStudCourses.php",
            imgURL: "assets/images/accountInfoIcon.png",
          },
          addCourse: {
            text: "Profile Preferences",
            url: "profile.php",
            imgURL: "assets/images/accountInfoIcon.png",
          },
          quiz: {
            text: "Quiz",
            url: "quiz.php",
            imgURL: "assets/images/accountInfoIcon.png",
          },
        };
        break;
      case "teacher":
        contentList = {
          viewAll: {
            text: "View All Courses",
            url: "viewStudCourses.php",
            imgURL: "assets/images/showStudentsIcon.png",
          },
          addCourse: {
            text: "Add Course",
            url: "addCourse.php",
            imgURL: "assets/images/addCourseIcon.png",
          },
          profilePref: {
            text: "Profile Preferences",
            url: "profile.php",
            imgURL: "assets/images/accountInfoIcon.png",
          },
          viewStud: {
            text: "View Students",
            url: "viewStud.php",
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
    sessionStorage.setItem("userType", data[0].type);
    setNavList();
    setContentList();
    window.location.href = "portfolio.php";
  };
});
