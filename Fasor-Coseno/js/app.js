// Relación entre fasor y onda
// Demo en HTML5


window.onload = function(){
  time=0;
  freq=2;
  window.config ={
    canvas: $('#phasorCanvas'),
    };
    diagrama = new PhasorDiagram(config);
    fasor1 =new Phasor(100,0,'khaki',5);
    fasores=[];
  	fasores.push(fasor1);
  	diagrama.drawAxis();
  	diagrama.drawPhasor(fasor1,time);
  	diagrama.drawPhasorSine(fasor1);
  	diagrama.drawPhasorCosine(fasor1);
    $('#slider-amp').bind('change',function(){
          actualiza();
    });
    $('#slider-fase').bind('change',function(){
          actualiza();
    });

  function actualiza(time,runAnimation){

    fasor1.mod= $('#slider-amp').val();
    fasor1.arg=parseFloat($('#slider-fase').val());
    diagrama.clearDiagram();
    diagrama.drawAxis();
    diagrama.drawPhasor(fasor1,time);
    diagrama.drawPhasorSine(fasor1,time,freq);
    diagrama.drawPhasorCosine(fasor1,time,freq);

  }
}
var runAnimation = {
  value: false
};

window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 40);
  };
})();