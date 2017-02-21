var _this = this;
$(document).ready(function () {
    $('#add_img').click(function () {
    });
    $('#get_img').click(function () {
        $.getJSON(('api.php/image'), function (data) {
            var items = [];
            $.each(data, function (key, val) {
                _this.items.push("<p>Key: " + key + "</p>" + val);
            });
            $('#answer').val(items.join('</br>'));
        });
    });
    $('#delete_img').click(function () {
    });
});
