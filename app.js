
document.getElementById('output').style.visibility='hidden';
document.getElementById('kminput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility='visible';
    let val=e.target.value;
    let ip=document.getElementById('inputselect').value;
    if(ip==1){
        document.getElementById('kmop').style.visibility='hidden';
        document.getElementById('milesoutput').innerHTML=val/1.609;
        document.getElementById('meteroutput').innerHTML=val*1000;
        document.getElementById('feetoutput').innerHTML=val*3281;
    }else if(ip==2){
        document.getElementById('milop').style.visibility='hidden';
        document.getElementById('kmsoutput').innerHTML=val*1.69;
        document.getElementById('meteroutput').innerHTML=val*1609;
        document.getElementById('feetoutput').innerHTML=val*5280;
    }else if(ip==3){
        document.getElementById('metop').style.visibility='hidden';
        document.getElementById('kmsoutput').innerHTML=val/1000;
        document.getElementById('milesoutput').innerHTML=val/1609;
        document.getElementById('feetoutput').innerHTML=val*3.281;
    }else if(ip==4){
        document.getElementById('ftop').style.visibility='hidden';
        document.getElementById('kmsoutput').innerHTML=val/3281;
        document.getElementById('milesoutput').innerHTML=val/5280;
        document.getElementById('meteroutput').innerHTML=val/3.281;
    }
    
    
});









