function init (){
    //create a event listener for the save button
    $('.SaveBtn').click((e)=>addEvent(e))

    //create a loop for every row, then straight to the save button. Attach listener to the save butttons
    function addEvent(e) {
        var Hour = e.target.parentElement.firstElementChild.innerText
        var Value = JSON.stringify(e.target.previousElementSibling.value)
        localStorage.setItem(hour, value);
    }
    
    //use local storage and assign time slots
    $('.hour').each(function() {
        var hourSaved = $(this)[0].innerText
        $(this)[0].nextElementSibling .innerText = localStorage.getItem(hourSaved)
    })

    //Add event function
    $('description').addClass('show');
    setTimeout(function(){
        $('.description').removeClass('show');
    }, 1000);

    function addTimeToHeader() {
        var TimeEl = document.getElementById("currentDay");
        TimeEl.textContent = moment();
    }
    addTimeToHeader();

    function addColorToTimeSlot() {
        var Time = moment().hours();
        $('.time-block').each(function(){
            var RowHour = parseInt($(this).attr('id').split('-')[1]);
            if(rowHour < time) {
                $(this).removeClass('future','present');
                $(this).addClass('past');
            } else if (rowHour === time) {
                $(this).removeClass('past','future');
                $(this).addClass('present');
            } else if (rowHour > time) {
                $(this).removeClass('past','present');
                $(this).addClass('future')
            }
        });
    }
    addColorToTimeSlot();
}
function GetHourOfTheDay () {}

//start
init()
