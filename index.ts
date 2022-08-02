function windowopen()
{
    window.open('./index.html', '_blank',);
}

function init()
{
    const i = 1000;
    const y = 1;

    while(i>y)
    {
        windowopen();
    }
    
}

init();