$(document).ready(function () {
    $.ajax("/burgers", {
        type: "GET"
    }).then(function (data) {
        var burgs = data.burgers;
        var len = data.burgers.length;

        var burgs_elem = $("#uneatenBurgers");
        var eatenBurgs_elem = $("#devouredBurgers")
        for (i = 0; i < len; i++) {
            if (burgs[i].devoured == 0) {
                burgs_elem.append(
                    "<li><p>" +
                    burgs[i].burger_name +
                    "<button data-burgid='" +
                    burgs[i].id +
                    "' class='eat'>Eat Da Burger!</button></p></li>")
            }
            else {
                eatenBurgs_elem.append(
                    "<li><p>" +
                    burgs[i].burger_name +
                    "<button data-burgid='" +
                    burgs[i].id +
                    "' class='delBurger'>Wipe the plate!</button></p></li>")
            }
        };
    });

    $(document).on("click", ".eat", function (event) {
        var id = $(this).data("burgid");

        $.ajax("/burgers" + id, {
            type: "PUT"
        }).then(function () {
            console.log("eaten id " + id);
            // location.reload();
        });
    });

    $(document).on("click", "delBurger", function (event) {
        var id = $(this).data("burgid");

        $.ajax("/burgers" + id, {
            type: "DELETE"
        }).then(function () {
            console.log("deleted id " + id);
            // location.reload();
        });
    });

    $("#addBurger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#addburger").val().trim(),
            devoured: false
        };

        $.ajax("/burgers", {
            type: "POST",
            data: JSON.stringify(newBurger),
            dataType: "json",
            contentType: "application/json"
        }).then(function() {
            console.log("added burger");
            // location.reload();
        });
    });
})