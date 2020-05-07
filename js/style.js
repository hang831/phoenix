// Smooth Scrolling(not working)
$('.showarea a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        100,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });




//Battery charging function
function chargeBattery(){
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244;";
    
    setTimeout(function(){
        battery.innerHTML = "&#xf243;";
    } , 1000);
    setTimeout(function(){
        battery.innerHTML = "&#xf242;";
    } , 2000);
    setTimeout(function(){
        battery.innerHTML = "&#xf241;";
    } , 3000);
    setTimeout(function(){
        battery.innerHTML = "&#xf240;";
    } , 4000);
}
//run Battery charging function
chargeBattery();
//run Battery charging function every 5 seconds
setInterval(chargeBattery, 5000);

//Security showing function
function securityShowing(){
    let security = document.getElementById('security');
    security.innerHTML = "&#xf3ed;";
    
    setTimeout(function(){
        security.innerHTML = "&#xf084;";
    } , 2000);
    setTimeout(function(){
        security.innerHTML = "&#xf577;";
    } , 4000);
    setTimeout(function(){
        security.innerHTML = "&#xf502;";
    } , 6000);
    setTimeout(function(){
        security.innerHTML = "&#xf2c2;";
    } , 8000);
}
//run Battery charging function
securityShowing();
//run Battery charging function every 5 seconds
setInterval(securityShowing, 10000);

