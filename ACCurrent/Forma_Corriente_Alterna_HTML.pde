/* @pjs font="DK Crayon Crumble.ttf"; 
preload="blackboard-backgrounds_s.jpeg"; 
 */

PImage bg;

int GUI_WIDTH=0;
int GUI_HEIGHT=150;
int SCREEN_WIDTH=1000;
int SCREEN_HEIGHT=600;

public int amp1 = 120;
public int freq1 = 2;
public float fase1 = 0;

void setup() {
  size(1000, 600);
  bg = loadImage("blackboard-backgrounds_s.jpeg");
  background(bg);
  smooth();
  frameRate(60);
  colorMode(HSB);
  noLoop();
}
void draw() {
  background(bg);
  draw_axes();
  dibuja_coseno(amp,freq,fase); 
 
  show_functions(amp,freq,fase);
}

void reset_valores() {
  amp = 120;
  freq = 2;
  fase = 0;
}

void draw_axes() {
  background(bg);
  stroke(255);
  strokeWeight(1);
  line(40, 300, 1500, 300);
  line(40, 40, 40, 580);
  line(900, 290, 900, 310);
  line(470, 290, 470, 310);

  line(35, 50, 45, 50);
  line(30, 100, 50, 100);
  line(35, 150, 45, 150);
  line(30, 200, 50, 200);
  line(35, 250, 45, 250);
  line(35, 350, 45, 350);
  line(30, 400, 50, 400);
  line(35, 450, 45, 450);
  line(30, 500, 50, 500);
  line(35, 550, 45, 550);

  PFont font3;
  font3 = createFont("DK Crayon Crumble.ttf",20); 
  textFont(font3);
  fill(255);
  text("1", 1340, 310, 670, 70);
  text("tiempo (s)", SCREEN_WIDTH-80, 310, 100, 25);

  text ("V(t) Voltios", 2, 35);

  PFont font4;
  font4 = createFont("DK Crayon Crumble.ttf",14); 
  textFont(font4);
  fill(255);

  text ("200", 2, 100);
  text ("100", 2, 200);
  text ("-100", 2, 400);
  text ("-200", 2, 500);
  text ("1", 910, 320);
  text ("0,5", 480, 320);
}

void dibuja_coseno(int amp, int freq, float fase) {
  float prevy1=0+300;
  stroke(0xEEFFFC90);
  strokeWeight(4);
  for ( int i=GUI_WIDTH+40 ; i < width;i++) {
    float y1= 300-amp*cos((float(freq)*PI*(i-(40)))/(860)+fase);
    if (i!=40) {
      line(i-1, int(prevy1), i, int(y1));
    }
    prevy1=y1;
  }
}

void show_functions(int amp, int freq, float fase) {

  PFont font;
  PFont font2;

  font = createFont("DK Crayon Crumble.ttf",50); 
  font2 = createFont("DK Crayon Crumble.ttf",22);
  textFont(font); 
  String s = "V(t)=" + amp;

  s = s + "·cos(" + freq + "·"+ "π" +"·t";

  if (round(fase) == 0) {
    s= s + ")";
  } 
  else if (round(fase)>0) {
    s= s + "+" + round(fase*10)/10+  ")";
  }
  else {
    s= s + round(fase*10)/10+  ")";
  }
  fill(255);
  text(s, SCREEN_WIDTH/3, SCREEN_HEIGHT-50);
  text("Corriente Alterna (CA)", 300, 40);
  textFont(font2);
  text("IES Santa Pola. Gaspar Lloret 2012", 700, 580);
}


