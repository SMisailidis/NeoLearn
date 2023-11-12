import { fetchData } from "./eventHandler.js";

$(document).ready(function () {
  const stud_ID = JSON.parse(sessionStorage.getItem("userData"))[0].ID;
  const checkEnrolledCourses = () => {
    fetchData(jQuery, "assets/Back-End/checkEnrolledCourses.php", "POST", {
      ID: stud_ID,
    })
      .then((data) => {
        $.each(data, function (index, row) {
          $("#" + row.Course_ID)
            .attr("checked", true)
            .attr("title", "Already enrolled!");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  fetchData(jQuery, "assets/Back-End/retrieveAllCourses.php", "POST", undefined)
    .then((data) => {
      $.each(data, function (index, row) {
        const tr = $("<tr>").addClass("tableRowData");
        const td1 = $("<td>").addClass("tableData");
        const td2 = $("<td>").addClass("tableData");
        const td3 = $("<td>").addClass("tableData");
        const td4 = $("<td>").addClass("tableData");
        const checkbox = $("<input>")
          .attr("type", "checkbox")
          .attr("id", row.ID);
        td1.append(row.Title);
        td2.append(row.ID);
        td3.append(row.First_Name + " " + row.Last_Name);
        td4.append(checkbox);

        tr.append(td1).append(td2).append(td3).append(td4);

        $(".tableBody").append(tr);
      });
      checkEnrolledCourses();
    })
    .catch((error) => {
      console.error(error);
    });

  $(".tableBody").on("change", ":checkbox", function () {
    let course_ID = this.id;
    let state = $(this).is(":checked");

    fetchData(jQuery, "assets/Back-End/updateEnrolledCourses.php", "POST", {
      state: state,
      Course_ID: course_ID,
      Stud_ID: stud_ID,
    })
      .then((data) => {})
      .catch((error) => {
        console.error(error);
      });
  });
});
