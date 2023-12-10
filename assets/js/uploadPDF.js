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