import { fetchData } from "./eventHandler.js";

$(document).ready(function () {
  const studentID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
  const coursesList = $(".coursesList");
  const curriculumList = $(".currList");
  const backBtn = $(".quizLandingBackBtn");
  const portfolioBtn = $(".quizBackToPortfolioBtn");
  const listsHeading = $(".coursesListWrapper h2");
  let listsHeadingContent = listsHeading.text();

  fetchData($, "assets/Back-End/quizLandingViewCourses.php", "POST", {
    stud_ID: studentID,
  })
    .then((data) => {
      $.each(data, function (index, row) {
        const courseName = $("<a>")
          .text(row.Title)
          .addClass("anchors")
          .attr("id", row.ID);
        coursesList.append(
          $("<li>")
            .append(courseName)
            .addClass("animate__animated animate__fadeInRight")
        );
      });
    })
    .catch((error) => {
      console.error(error);
    });

  coursesList.on("click", ".anchors", function () {
    coursesList.css("display", "none");
    backBtn.css("display", "inline");
    portfolioBtn.css("display", "none");
    curriculumList.css("display", "block");
    listsHeading.text($(this).text());

    fetchData($, "assets/Back-End/quizLandingViewCurr.php", "POST", {
      course_ID: $(this).attr("id"),
    })
      .then((data) => {
        $.each(data, function (index, row) {
          const curricName = $("<a>")
            .text(row.Title)
            .addClass("anchors")
            .attr("id", row.ID)
            .attr("title", row.Title)
            .attr("href", `quiz.php?curID=${row.ID}&curName=${row.Title}`);

          curriculumList.append(
            $("<li>")
              .append(curricName)
              .addClass("animate__animated animate__fadeInRight")
          );
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  backBtn.on("click", function () {
    curriculumList.css("display", "none");
    portfolioBtn.css("display", "inline-flex");
    curriculumList.empty();
    coursesList.css("display", "block");
    $(this).css("display", "none");
    listsHeading.text(listsHeadingContent);
  });
});
