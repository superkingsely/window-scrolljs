// windows.scroll
let sections=document.querySelectorAll('section')
let navlinks=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop ;
        let height=sec.offsetHeight;
        let id = sec.getAttribute('id')
        console.log('top ' + top, 'sec.offsetTop ' + offset,height,id)

        if(top>=offset && top < offset+ height){
            console.log(` 1st top ${top} >= ${offset} && top${top} < ${offset + height} and height ===${height}`)
            console.log('working ha ha ha')
            navlinks.forEach(links=>{
                links.classList.remove('active')
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            })
        }
        else{
            console.log(`2nd top ${top} >= ${offset} && top${top} < ${offset + height} and height ===${height}`)

            console.log('not good')
        }
    })
}