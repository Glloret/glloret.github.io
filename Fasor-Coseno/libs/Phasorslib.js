// Phasors lib

// Constructor for the Phasor class

function Phasor(module,argument,color, thickness) {
  this.mod= module;
  this.arg= argument;
  this.color= color || 'black';
  this.thickness= thickness || 5;
}


// Constructor for the PhasorDiagram class

function PhasorDiagram(config) {
    this.canvas = config.canvas.get(0);
    this.context = this.canvas.getContext('2d');
    this.diagramWidth= 250;
    this.diagramHeight= 250;
    this.centerX = this.diagramWidth/2;
    this.centerY = this.diagramHeight/2;
    
    //this.drawAxis();
    //this.drawPhasor();
 
}
PhasorDiagram.prototype.drawAxis= function() {
  var context = this.context;
  
  context.save();
  context.beginPath();
  context.moveTo(this.diagramWidth*0.05,this.centerY);
  context.lineTo(this.diagramWidth*0.95, this.centerY);
  context.lineWidth=2;
  context.strokeStyle='white';
  context.stroke();
  context.beginPath();
  context.moveTo(this.centerY,this.diagramHeight*0.05);
  context.lineTo(this.centerY, this.diagramHeight*0.95);
  context.strokeStyle='white';
  context.stroke();
  context.beginPath();
  context.moveTo(this.centerY,this.diagramHeight);
  context.lineTo(this.centerX,this.diagramHeight*3);
  context.stroke();
  context.beginPath();
  context.moveTo(this.diagramWidth*0.05,this.diagramHeight);
  context.lineTo(this.diagramWidth*0.95,this.diagramHeight);
  context.stroke();
  context.stroke();
  context.beginPath();
  context.moveTo(this.diagramWidth,this.diagramHeight*0.5);
  context.lineTo(this.diagramWidth*3.75,this.diagramHeight*0.5);
  context.stroke();
  context.beginPath();
  context.moveTo(this.diagramWidth,this.diagramHeight*0.05);
  context.lineTo(this.diagramWidth,this.diagramHeight*0.95);
  context.stroke();
  context.restore();
  
};

PhasorDiagram.prototype.drawPhasor=function(fasor,timefreq){
  var context = this.context;
  timefreq =timefreq || 0;
  context.save();
  
  context.translate(this.centerX,this.centerY);
  context.scale(1,-1);
  context.beginPath();
  context.moveTo(0,0);
  context.rotate(fasor.arg+timefreq);
  context.lineTo(fasor.mod-13,0);
  context.closePath();
   
  context.strokeStyle=fasor.color;
  context.lineWidth= fasor.thickness;
  context.stroke();
  
  context.beginPath();
  context.moveTo(fasor.mod,0);
  context.lineTo(fasor.mod-13,7);
  context.lineTo(fasor.mod-13,-7);
  context.closePath();
  context.fillStyle = fasor.color;
  context.fill();
  context.closePath();
  context.restore();

};
PhasorDiagram.prototype.drawPhasorSine=function(fasor,time,freq){
  var context = this.context;
  time =time || 0;
  freq= freq || 2;
  context.save();
  context.strokeStyle=fasor.color;
  context.lineWidth=2;
  context.beginPath();
  context.moveTo(this.diagramWidth,this.centerY);
  context.translate(this.diagramWidth,this.centerY);
  context.scale(1,-1);
  context.moveTo(0,fasor.mod*Math.sin(fasor.arg+time));
  for (var i=1; i<this.diagramWidth*2.75;i++){
    context.lineTo(i,fasor.mod*Math.sin((freq*i/100+time+fasor.arg)));
  }
  //context.lineTo(50,50);
  context.stroke();
  context.restore();
};
PhasorDiagram.prototype.drawPhasorCosine=function(fasor,time,freq){
  var context = this.context;
  time =time || 0;
  freq= freq || 2;
  context.save();
  context.strokeStyle=fasor.color;
  context.lineWidth=2;
  context.beginPath();
  context.moveTo(this.centerX,this.diagramHeight);
  context.translate(this.centerX,this.diagramHeight);
  context.scale(1,1);
  context.moveTo(fasor.mod*Math.cos(fasor.arg+time),1);
  for (var i=1; i<this.diagramWidth*2;i++){
    context.lineTo(fasor.mod*Math.cos((freq*i/100)+time+fasor.arg),i);
  }
  //context.lineTo(50,50);
  context.stroke();
  context.restore();
};



PhasorDiagram.prototype.clearDiagram= function(){
  canvas = this.canvas;
  canvas.width = canvas.width;
};
