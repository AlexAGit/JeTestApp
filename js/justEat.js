window.JeApiTest = (function ($) {
    var setLocation = function (postcode, resultTable) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var result = JSON.parse(xhttp.responseText);

                resultTable.bootstrapTable('removeAll');
                var data = [];
                $.each(result.Restaurants, function (key, value) {
                    data.push({
                        name: value.Name,
                        rating: value.RatingAverage,
                        cuisineTypes: $.map(value.CuisineTypes, function (obj) {
                            return obj.Name
                        }).join(', ')
                    });
                });
                resultTable.bootstrapTable('load', data);
            }
        };
        xhttp.open("GET", "http://public.je-apis.com:80/restaurants?q=" + postcode, true);
        xhttp.setRequestHeader("Accept", "application/json");
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("Accept-Tenant", "uk");
        xhttp.setRequestHeader("Accept-Language", "en-GB");
        xhttp.setRequestHeader("Authorization", "Basic VGVjaFRlc3RBUEk6dXNlcjI=");
        xhttp.setRequestHeader("Accept-Version", "1");
        xhttp.send();
    }

    var retrievePostalCode = function (component, table) {
        var addressComponents = component.locationpicker('map').location.addressComponents;
        setLocation(addressComponents.postalCode, table);
    }

    return {
        retrievePostalCode: retrievePostalCode,
        setLocation: setLocation
    };

}(jQuery));