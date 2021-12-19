
$(document).ready(function () {

    // lấy dữ liệu các bài báo
    var myApi = 'https://gnews.io/api/v4/top-headlines?lang=en&token=0aa4377c703b3826630ff40f5458581a'

    fetch(myApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var htmls = ''
            $(data.articles).each(function (index, value) {
                htmls += '<div class="row">' + '<div class="col-md-6">' + '<a target="_blank" href="' + value.url + '">' + '<img src="' + value.image + '">' + '</a>' + '</div>' + '<div class="col-md-6">' +
                    '<h3>' + '<a target="_blank" href="' + value.url + '">' + value.title + '</a>' + '</h3><br>' + '<i>' + value.publishedAt + '</i><br>' + '<span>' + value.description + '</span><br>' +
                    '<a target="_blank" href="' + value.source.url + '">' + value.source.name + '</a>' + '</div>' + '</div>'
            })
            document.getElementById('content').innerHTML = htmls
        });

    $('.btn').click(function () {

    })

    //Tìm kiếm theo nội dung
    $('.btn').click(function () {

        var noidung = $('input').val();
        if (noidung != '') {
            console.log(noidung);
            // //var my = 'https://gnews.io/api/v4/search?lang=en&q="' + noidung + '"&token=0aa4377c703b3826630ff40f5458581a';
            var myAp = 'https://gnews.io/api/v4/search?q="' + noidung + '"&lang=en&token=0aa4377c703b3826630ff40f5458581a';

            fetch(myAp)
                .then(function (response) {
                    $('body').addClass("loading");
                    setTimeout(() => {
                        $('body').removeClass("loading");

                    }, 700)
                    return response.json();
                })
                .then(function (data) {
                    
                    var htmls = '';
                    $(data.articles).each(function (index, value) {
                        htmls += '<div class="row">' + '<div class="col-md-6">' + '<a target="_blank" href="' + value.url + '">' + '<img src="' + value.image + '">' + '</a>' + '</div>' + '<div class="col-md-6">' +
                            '<h3>' + '<a target="_blank" href="' + value.url + '">' + value.title + '</a>' + '</h3><br>' + '<i>' + value.publishedAt + '</i><br>' + '<span>' + value.description + '</span><br>' +
                            '<a target="_blank" href="' + value.source.url + '">' + value.source.name + '</a>' + '</div>' + '</div>';
                    });

                    
                    document.getElementById('content').innerHTML = htmls;
                });

            console.log(myAp);
            $('input').val('');
            $('body').removeClass("loading");

            return true;
        } else {
            return false;
        };

    });


});