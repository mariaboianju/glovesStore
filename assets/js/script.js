
$(document).ready(function (e) {
    $.ajax({
        url:
            "assets/php/getAllGloves.php",
        type: "POST",
        dataType: "json",
        data: {

            id: $(e.relatedTarget).attr("data-id")
        },
        success: function (result) {
            var resultCode = result.status.code;
            if (resultCode == 200) {


                console.log(result)
            } else {
              
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            
        }
    });
});
