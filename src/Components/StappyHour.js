import React from 'react'

 function StappyHour() {
    const vidIndex = Math.floor(Math.random() * 7); 
    const creedVids= ["https://www.youtube.com/embed/99j0zLuNhi8?start=60&autoplay=1", "https://www.youtube.com/embed/O-fyNgHdmLI?start=60&autoplay=1", "https://www.youtube.com/embed/qnkuBUAwfe0?start=60&autoplay=1", "https://www.youtube.com/embed/J16lInLZRms?start=60&autoplay=1", "https://www.youtube.com/embed/iBBqjGd3fHQ?start=60&autoplay=1","https://www.youtube.com/embed/8lKBro5YkPs?start=60&autoplay=1","https://www.youtube.com/embed/BkHjFzw1TUg?start=60&autoplay=1", "https://www.youtube.com/embed/3k3jxi4JhXA?start=60&autoplay=1"]
    return (
        <div>
            <iframe width="560" height="315" src={creedVids[vidIndex]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            Stappy Hour
        <img className='stappyHour' src={"https://s.abcnews.com/images/US/creed-1999-gty-jc-190712_hpEmbed_16x11_992.jpg"}/>
        </div>
    )
}

export default StappyHour