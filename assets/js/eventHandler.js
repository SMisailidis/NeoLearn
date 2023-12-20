/* 
  The fetchData function uses jQuery to handle asynchronous AJAX requests, 
  resolving with response data if successful, the success message if affected rows exist, 
  and rejecting with an error message otherwise. It assumes a JSON response format 
  and logs errors to the console. 
*/

export const fetchData = ($, url, method, data) => {
  return new Promise((resolve, reject) => {
    $(document).ready(() => {
      $.ajax({
        url: url,
        method: method,
        data: data,
        dataType: "json",
        success: (response) => {
          if (response.success) {
            if (!response.affected_rows) {
              resolve(response.data);
            } else if (response.affected_rows === 0) {
              reject("Query failed: " + response.message);
            } else {
              resolve(response.success);
            }
          } else {
            reject("Query failed: " + response.message);
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
    });
  });
};
