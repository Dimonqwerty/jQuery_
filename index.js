$(document).ready(function () {
    $('#btn1').click(function (e) {
        e.preventDefault()
        $('#addHtml').html('<h1> New Element </h1>')
    })

    $('#btn2').click(function (e) {
        e.preventDefault()
        $('#hideHtml').hide()
    })

    $('#btn3').click(function (e) {
        e.preventDefault()
        $('section').remove()
    })

    $('#btn4').click(function (e) {
        e.preventDefault()
        $('#add').addClass('add').html('Lumos Maxima');
    })
})