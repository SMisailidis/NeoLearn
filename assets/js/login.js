$(document).ready(function () {
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
          Home: "Portfolio.php",
        };
        break;
      case "teacher":
        navList = {
          Home: "Portfolio.php",
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

  const LogIn = (data) => {
    sessionStorage.setItem("userData", JSON.stringify(data));
    sessionStorage.setItem("userType", data.type);
    setNavList();
    window.location.href = "portfolio.php";
  };
});
