$(window).resize(()=>{
    if (window.innerWidth > 600) {
        $("#top-nav").show()
    } else {
        $("#top-nav").hide()
    }
})

$("#burger-menu").click(()=>{
    $("#top-nav").slideToggle(500)
})

$("#top-nav").click(()=>{
    if (window.innerWidth < 600) {
        $("#top-nav").toggle()
    }
})