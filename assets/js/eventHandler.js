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
              }
            } else {
              reject("Query failed: " + response.message);
            }
          },
          error: (error) => {console.error(error)},
        });
      });
    });
  };