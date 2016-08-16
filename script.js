
function timer(){
 var obj=document.getElementById('timer_inp');
 obj.innerHTML--;
 if(obj.innerHTML==0){setTimeout(function(){},1000);}
 else{setTimeout(timer,1000);}
}
  
setTimeout(timer,1000);
   

//Dotted
     function calcPointsCirc( cx,cy, rad, dashLength)
{
    var n = rad/dashLength,
        alpha = Math.PI * 2 / n,
        pointObj = {},
        points = [],
        i = -1;

    while( i < n )
    {
        var theta = alpha * i,
            theta2 = alpha * (i+1);

        points.push({x : (Math.cos(theta) * rad) + cx, y : (Math.sin(theta) * rad) + cy, ex : (Math.cos(theta2) * rad) + cx, ey : (Math.sin(theta2) * rad) + cy});
        i+=2;
    }              
    return points;            
} 

//General
    var canvasWidth = 500;
    var canvasHeight = 500;
    var example = document.getElementById("example");
    var ctx = example.getContext('2d');
    example.height = 500;
    example.width = 500;
    var radius1 = 239; 
    var radius2 = 152;
    var radius3 = 5;
    var radius4 = 17;
    var startAngle = 0; 
    var endAngle = (Math.PI/180)*360;
    
//Outer Arc 
    ctx.arc(250,250,radius1,startAngle,endAngle);
    ctx.fillStyle = '#D7D7D7'; 
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(250,250,radius1-6,startAngle,endAngle);
    ctx.strokeStyle = 'yellow';
    ctx.stroke();
   
//Inner Arc    
    ctx.arc(250,250,radius2,startAngle,endAngle);
    ctx.fillStyle = 'D7D7D7';
    ctx.fill();
    ctx.lineWidth = 25;
     
var pointArray= calcPointsCirc(250,250,radius2, 0.8);
    ctx.strokeStyle = "yellow";
    ctx.beginPath();

    for(p = 0; p < pointArray.length; p++){
        ctx.moveTo(pointArray[p].x, pointArray[p].y);
        ctx.lineTo(pointArray[p].ex, pointArray[p].ey);
        ctx.stroke();
    }    

     
//Text
  ctx.font = '40px Impact';
  ctx.fillStyle = 'black';
  ctx.fillText("60",233,75);
  ctx.textAlign="center"; 
     
  ctx.fillText("30",250,455);
  ctx.textAlign="center"; 
     
  ctx.fillText("45",50,250);
  ctx.textAlign="center"; 
     
  ctx.fillStyle = 'red';   
  ctx.fillText("15",450,250);
  ctx.textAlign="center"; 
     
     
//Pointer
   ctx.beginPath();
   ctx.arc(250,250,radius4,startAngle,endAngle);
   ctx.fillStyle = '#C70039';
   ctx.fill(); 
   ctx.lineWidth = '2';
   ctx.strokeStyle = 'black';
   ctx.stroke();
   
//Training
  ctx.beginPath();
    ctx.arc(250,250,radius1-12,3*Math.PI/2,Math.PI/6);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = '6';
    ctx.stroke();
    
//Go timer

function rotate() {
  ctx.translate(canvasWidth/2, canvasWidth/2);
  ctx.rotate((-Math.PI /300));
  ctx.translate(-canvasWidth/2, -canvasWidth/2);
  ctx.beginPath();
  ctx.lineWidth = '2';
  ctx.lineCap ='round';
  ctx.strokeStyle = '#C70039'; 
  ctx.moveTo(250, 250);
  ctx.lineTo(388, 340);
  ctx.stroke(); 
  
}
setInterval(rotate, 100);



