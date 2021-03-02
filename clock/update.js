setInterval(() => {
    d=new Date();
    // hour=document.getElementById("hour");
    htime=d.getHours();           
    mtime=d.getMinutes();           
    stime=d.getSeconds();           
    hRotation=30*htime+mtime/2;
    mRotation=6*mtime;
    sRotation=6*stime;
    hour.style.transform=`rotate(${hRotation}deg)`;
    minute.style.transform=`rotate(${mRotation}deg)`;
    seconds.style.transform=`rotate(${sRotation}deg)`;



}, 1000);