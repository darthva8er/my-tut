$(function()
{
    var score = 0;
    $('#bum').click(
        function()
        {
            score++;
            $('#counter').text(score);
            $.playSound("slap.mp3");
            $('#bum').addClass("shaker");
            if(score>0)
            {
                $.playSound("scream.mp3");
            }

        }
    )
    $('#start').click( function()
{
    score = 0;
    $('#counter').text(score);
})
    

})


