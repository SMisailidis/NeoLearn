/* 
  The `uploadPDF` function, using jQuery, 
  asynchronously uploads a PDF file to a specified server endpoint. 
  It returns a Promise, 
  resolving with the server response upon successful upload. Error details are logged to the console.
*/

export const uploadPDF = ($, url, data) => {
    return new Promise((resolve, reject) => {
      $(document).ready(() => {
        $.ajax({
          type: "post",
          url: url,
          processData: false,
          contentType: false,
          data: data,
          dataType: "json",
          success: (response) => {
            if (response.success) {
              resolve(response);
            }
          },
          error: (error) => {
            console.log(error);
          },
        });
      });
    });
  };