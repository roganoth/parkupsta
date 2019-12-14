$(document).ready(function () {
    $.ajax("/burgers", {
        type: "GET"
    }).then(function (data) {
        var burgs = data.burgers;
        var len = data.length;

        var burgs_elem = $("#uneatenBurgers");
        var eatenBurgs_elem = $("#devouredBurgers")
        for (i = 0; i < len; i++) {
            if (burgs[i].devoured === 0) {
                burgs_elem.append(
                    burgs[i].burger_name +
                    "<button data-burgid='" +
                    burgs[i].id +
                    "' class='eat'>Eat Da Burger!</button>")
            }
            else {
                eatenBurgs_elem.append(
                    burgs[i].burger_name +
                    "<button data-burgid='" +
                    burgs[i].id +
                    "' class='delBurger'>Wipe the plate!</button>")
            }
        };

        var
    });

    $(document).on("click", ".eat", function (event) {
        var id = $(this).data("burgid");

        $.ajax("/burgers" + id, {
            type: "UPDATE"
        }).then(function () {
            console.log("eaten id " + id);
            location.reload();
        });
    });

    $(document).on("click", "delBurger", function(event){
        var id = $(this).data("burgid");

        $.ajax("/burgers" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("deleted id " + id);
        });
    });
})