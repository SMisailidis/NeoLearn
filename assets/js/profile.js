import { fetchData } from "./eventHandler.js";

$(document).ready(function () {
  let userID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
  let userType = sessionStorage.getItem("userType");
  let initData = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const isUser = urlParams.get("ID") === userID;

  const data = isUser ? { table: userType } : { table: "student" };

  const createArticles = (articleID, labelText, inputValue) => {
    let article = $("<article>")
      .addClass("mainProfileContent")
      .attr("id", articleID);

    let label = $("<label>").attr("for", articleID).text(labelText);

    let input = $("<input>")
      .attr("type", "text")
      .attr("name", articleID)
      .attr("value", inputValue)
      .attr("readonly", true);

    return article.append(label).append(input);
  };

  const areObjectsEqual = (obj1, obj2) => {
    const modifiedObj1 = { ...obj1 };
    const modifiedObj2 = { ...obj2 };

    delete modifiedObj1.table;
    delete modifiedObj2.Password;

    const sortedString1 = JSON.stringify(
      modifiedObj1,
      Object.keys(modifiedObj1).sort()
    );
    const sortedString2 = JSON.stringify(
      modifiedObj2,
      Object.keys(modifiedObj2).sort()
    );

    return sortedString1 === sortedString2;
  };

  const changePasswordHandler = (e) => {
    console.log("hjajaha");
  };

  const viewListHandler = (e) => {
    console.log("haherhja");
  };

  const validityCheck = (inputs) => {
    inputs.each(function () {
      if ($(this).val() === "") {
        return false;
      }
    });

    return true;
  };

  const onCloseModal = () => {
    const inputs = $(
      `:input:not(:button):not(input[name=Ipass]):not(input[name=Icours])`
    );
    $("#exampleModalCenter").modal("hide");
    inputs[0].value = initData[0].First_Name + " " + initData[0].Last_Name;
    inputs[1].value = initData[0].Email;
    inputs[2].value = initData[0].Phone_Number;
    inputs[3].value = initData[0].Birth_Date;
    inputs[4].value = initData[0].ID;
    inputs[5].value = initData[0].Academic_Email;
  };

  $(".btn-secondary").on("click", onCloseModal);

  $(".btn-close").on("click", onCloseModal);

  $("#save").on("click", function () {
    const inputs = $(
      `:input:not(:button):not(input[name=Ipass]):not(input[name=Icours])`
    );
    if (validityCheck(inputs)) {
      const newValues = {
        First_Name: inputs[0].value.split(" ")[0],
        Last_Name: inputs[0].value.split(" ")[1],
        Email: inputs[1].value,
        Phone_Number: inputs[2].value,
        Birth_Date: inputs[3].value,
        Username: inputs[4].value,
        Academic_Email: inputs[5].value,
        table: userType,
        ID: userID,
      };

      console.log(areObjectsEqual(newValues, initData[0]));

      if (areObjectsEqual(newValues, initData[0])) {
        $("#exampleModalCenter").modal("hide");
      } else {
        fetchData(
          jQuery,
          "assets/Back-End/profileSaveChanges.php",
          "POST",
          newValues
        )
          .then((success) => {
            if (success) {
              $("#liveToast").removeClass("hide").addClass("show");
              $("#exampleModalCenter").modal("hide");

              setTimeout(function () {
                $("#liveToast").removeClass("show").addClass("hide");
              }, 3000);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  });

  $(".changeProfileButton").on("click", function (e) {
    const inputs = $(
      `:input:not(:button):not(input[name=Ipass]):not(input[name=Icours])`
    );
    let changes = {};
    if ($(this).text() === "Edit") {
      changes = {
        readonly: false,
        outlineStyle: "solid",
        outlineColor: "rgba(46, 109, 124, 0.4)",
      };
      inputs[0].focus();
      $(this).text("Save");
    } else {
      $("#exampleModalCenter").modal("show");

      changes = {
        readonly: true,
        outlineStyle: "none",
        outlineColor: "none",
      };
      $(this).text("Edit");
    }
    inputs.each(function () {
      $(this)
        .attr("readonly", changes.readonly)
        .css("outline-style", changes.outlineStyle)
        .css("outline-color", changes.outlineColor);
    });
  });

  fetchData(
    jQuery,
    `assets/Back-End/retrieveProfileContent.php?ID=${
      isUser ? userID : urlParams.get("ID")
    }`,
    "POST",
    data
  )
    .then((data) => {
      initData = data;
      let contentFullname = createArticles(
        "Ifullname",
        "Full Name:",
        data[0].First_Name + " " + data[0].Last_Name
      );

      let contentContact = createArticles(
        "Icontact",
        "Contant Email:",
        data[0].Email
      );

      let contentNumber = createArticles(
        "Inumber",
        "Phone Number:",
        data[0].Phone_Number
      );

      let contentBirth = createArticles(
        "Ibirth",
        "Date of Birth:",
        data[0].Birth_Date
      );

      let contentUsername = createArticles(
        "Iusername",
        "Username:",
        data[0].Username
      );

      let contentAcadEmail = createArticles(
        "IacadEmail",
        "Academic Email:",
        data[0].Academic_Email
      );

      let section1 = $("#section1");

      section1
        .find(".title")
        .after(contentBirth)
        .after(contentNumber)
        .after(contentContact)
        .after(contentFullname);

      let contentPass = $("<article>")
        .addClass("mainProfileContent button")
        .attr("id", "Ipass");
      let labelPass = $("<label>").attr("for", "Ipass").text("Password:");
      let inputPass = $("<input>")
        .attr("type", "password")
        .attr("name", "Ipass")
        .attr("value", data[0].Password)
        .attr("readonly", true);
      let wrapper1 = $("<div>")
        .addClass("wrapper")
        .append(labelPass)
        .append(inputPass);
      let changePassButton = $("<button>")
        .addClass("button")
        .attr("disabled", !isUser)
        .attr("id", "changePassword")
        .text("Change")
        .click(changePasswordHandler);

      contentPass.append(wrapper1).append(changePassButton);

      let contentList = $("<article>")
        .addClass("mainProfileContent button")
        .attr("id", "Icours");
      let labelList = $("<label>")
        .attr("for", "Icours")
        .text(userType === "teacher" ? "Courses teached:" : "Courses taken:");
      let inputList = $("<input>")
        .attr("readonly", true)
        .attr("name", "Icours")
        .attr("disabled", true);
      let wrapper2 = $("<div>")
        .addClass("wrapper")
        .append(labelList)
        .append(inputList);
      let fullListButton = $("<button>")
        .addClass("button")
        .attr("disabled", !isUser)
        .attr("id", "viewList")
        .text("Full List")
        .click(viewListHandler);
      contentList.append(wrapper2).append(fullListButton);

      let section2 = $("#section2");

      section2
        .find(".title")
        .after(contentList)
        .after(contentPass)
        .after(contentAcadEmail)
        .after(contentUsername);

      $(".changeProfileButton").attr("disabled", !isUser);
    })
    .catch((error) => {
      console.error(error);
    });
});
