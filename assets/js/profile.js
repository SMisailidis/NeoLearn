import { fetchData } from "./eventHandler.js";
import modal from "./modal.js";
import toast from "./toast.js";

$(document).ready(function () {
  let userID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
  let userType = sessionStorage.getItem("userType");
  let initData = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const isUser = urlParams.get("ID") === userID;

  const data = isUser ? { table: userType } : { table: "student" };

  //Function that create Articles
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

  //Function for checking if 2 objects are equal
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

  //Function to navigate to changePassword
  const changePasswordHandler = (e) => {
    window.location.href = "changePassword.php";
  };

  //Function to navigate to view student or teacher courses
  const viewListHandler = (e) => {
    window.location.href =
      userType === "teacher" ? "viewCourses.php" : "viewStudCourses.php";
  };

  //Check if the inputs value is empty
  const validityCheck = (inputs) => {
    inputs.each(function () {
      if ($(this).val() === "") {
        return false;
      }
    });

    return true;
  };

  //Function for close modal
  modal.onClickCloseHandler(() => {
    const inputs = $(
      `:input:not(:button):not(input[name=Ipass]):not(input[name=Icours])`
    );
    modal.closeModal();
    inputs[0].value = initData[0].First_Name + " " + initData[0].Last_Name;
    inputs[1].value = initData[0].Email;
    inputs[2].value = initData[0].Phone_Number;
    inputs[3].value = initData[0].Birth_Date;
    inputs[4].value = initData[0].ID;
    inputs[5].value = initData[0].Academic_Email;
  });

  //Function for agree/save modal
  modal.onClickSaveHandler(() => {
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

      if (areObjectsEqual(newValues, initData[0])) {
        modal.closeModal();
      } else {
        fetchData(
          jQuery,
          "assets/Back-End/profileSaveChanges.php",
          "POST",
          newValues
        )
          .then((success) => {
            if (success) {
              toast.showToast();
              modal.closeModal();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  });

  //Function for save and edit profile
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
      modal.openModal();

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

  //Fetching data from db and rendering it
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

  //Setting texts to modal/toast
  modal.setTitle("Profile changes");
  modal.setContent("Are you willing to make the changes?");
  modal.setButtonsText("No", "Yes");
  toast.setContent("Published successfully!");
});
