
var speed = 30;
var ConveyerBelt11Extension = document.getElementById('ConveyerBelt11Extension');
var ConveyerBelt11 = document.getElementById('ConveyerBelt11');
var cb11_id1 = document.getElementById('cb11_id1');
var cb11_id2 = document.getElementById('cb11_id2');
var i = 0;
var n = Math.floor(ConveyerBelt11Extension.offsetWidth/cb11_id1.offsetWidth);
for (i=0; i<=n; i++)
{
   cb11_id2.innerHTML += cb11_id1.innerHTML;
}

function ConveyerBelt11Move()
{
   if (ConveyerBelt11.scrollLeft >= cb11_id1.offsetWidth)
      ConveyerBelt11.scrollLeft -= cb11_id1.offsetWidth;
   else
         ConveyerBelt11.scrollLeft++;
}
var ConveyerBelt11Timer = setInterval(ConveyerBelt11Move, speed);
ConveyerBelt11.onmouseover = function() { clearInterval(ConveyerBelt11Timer); }
ConveyerBelt11.onmouseout = function() { ConveyerBelt11Timer = setInterval(ConveyerBelt11Move, speed); }

/* END OV CAROUSEL CODE */


