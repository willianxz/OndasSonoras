var wave;
var button;
var buttonTriangle;
var buttonSquare;
var buttonSawTooth;
var buttonSine;
var sliderFrequencia;
var sliderAmplitude; 
var playing = false; //Começamos com o som desligado.

function setup() {
  
 //Criamos o canvas
 createCanvas(350, 200); 
 
 
 //Iniciamos o nosso oscilador
 wave = new p5.Oscillator();
 
 
 //Criamos os botões de controle da frequencia/amplitude
 
 // createSlider(valorMinimo, valorMaximo, valorAoIniciar);
 sliderFrequencia = createSlider(1, 10000, 100);
 sliderAmplitude = createSlider(0, 10, 0.5);
 
 //Setamos o tipo inicial da onda sendo Sine (senoidal)
  wave.setType('sine');

  //Criamos os botões
 button = createButton('Play/Pause');
 button.mousePressed(toggle);
 
 buttonTriangle = createButton('Triangle');
 buttonTriangle.mousePressed(setWaveTriangle);
 
 buttonSquare = createButton('Square');
 buttonSquare.mousePressed(setWaveSquare);
 
 buttonSawTooth = createButton('SawTooth');
 buttonSawTooth.mousePressed(setWaveSawTooth);
 
 buttonSine = createButton('Sine');
 buttonSine.mousePressed(setWaveSine);
 
 
}

function draw() {  

  //Armazena o tipo da onda
  var tipoOnda = wave.getType(); 
  
  //Setamos a frequencia da onda/amplitude com o valor selecionado pelo usuario
  wave.freq(sliderFrequencia.value());
  wave.amp(sliderAmplitude.value());
  
  //Se estiver vamos exibir as configurações selecionadas:
  if(playing){
    background(51);  
    textSize(30);
    fill(0, 255, 77);
    text("Frequencia: "+sliderFrequencia.value()+"Hz", 10, 150);
    text("Amplitude: "+sliderAmplitude.value(), 10, 100);
    text("Tipo da onda: "+tipoOnda, 10, 50);
    
  }else{
    background(51);
  }
}

//Para starta/parar ao clicar no botão de play.
function toggle(){  
  if(!playing){      
        wave.start();    
    playing = true;    
  }else{
    wave.stop();
    playing = false;
  }
  
}

//Funções para trocar o tipo da onda assim que o botão for clicado:

function setWaveTriangle(){
    wave.setType('triangle');
}

function setWaveSquare(){
    wave.setType('square');
}

function setWaveSawTooth(){
   wave.setType('sawtooth');
}

function setWaveSine(){
  wave.setType('sine');
}