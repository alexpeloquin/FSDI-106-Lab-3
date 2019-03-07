
var catalog = [];
var uniqueId = 0;
var url = "http://restclass.azurewebsites.net";


function Item(brand, des, price, image, cat) {

    this.user = "Alexander";
    this.brand = brand;
    this.des = des;
    this.price = price;
    this.image = image;
    this.cat = cat;



}

function registerItem() {
    console.log("registering item")
    var isDataValid = true;
    var brand = $("#txtBrand").val();
    var des = $("#txtDes").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImg").val();
    var cat = $("#txtCat").val();


    if (!brand || brand.length < 3) {
        $("#txtBrand").addClass('error');
        isDataValid = false;
        $("#alert-error").removeClass('hidden');

    }
    else {
        $("#txtBrand").removeClass("error");
    }

    if (!des || des.length < 10) {
        $("#txtDes").addClass('error');
        isDataValid = false;
        $("#alert-error").removeClass('hidden');
    }
    else {
        $("#txtDes").removeClass('error')
    }
    console.log('value', isDataValid);

    if (isDataValid) {

        $("#alert-error").addClass('hidden');

        var theItem = new Item(brand, des, price, image, cat);
        console.log(theItem);
        sendtoServer(theItem);
        $("#txtBrand").val('');
        $("#txtDes").val('');
        $("#txtPrice").val('');
        $("#txtImg").val('');
        $("#txtCat").val('');


        $("#alert-saved").removeClass('hidden');

        setTimeout(function () {
            $("#alert-saved").addClass('hidden');
        }, 3000);

    }
}

function sendtoServer(item) {

    var theString = JSON.stringify(item);
    $.ajax({
        url: url + '/API/points',
        type: "POST",
        data: theString,
        contentType: "application/json",
        success: function (res) {
            console.log("Done!", res)
        },
        error: function (errorDetail) {
            console.error("Bad!", errorDetail);
        },


    })
}




function init() {
    $("#btnSave").click(registerItem);


}

window.onload = init;




