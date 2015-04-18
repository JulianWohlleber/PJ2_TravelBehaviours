var bike, plane, local, walk, train, auto, boat;
var importedData = null;
var radius = new Array();
var r = new Array();
var g = new Array();
var b = new Array();
var healthstatus = new Array();
var laenge;
var k = 11;
var S = 1300;
var tMode = new Array();
var resetter = 0;
var Color = 56;

document.addEventListener('DOMContentLoaded', function() {
    var URL = "https://docs.google.com/spreadsheets/d/1OPrbGMRBIWU88dPVyN-6wqTkqG_QA-nj0jpT4sOGBKM/pubhtml"
    Tabletop.init( { key: URL, callback: myData, simpleSheet: true } )
})

function setup() {
var myCanvas = createCanvas(S,420);
    myCanvas.parent('jsCanvas');
setFrameRate(120);
}

function myData(data){
  console.log(data);

  laenge = data.length;

  for(var i = 0; i<data.length; i++){
    //circle colors
    if(data[i].whatisyourprimarymodeoftransportationtoyourplaceofworkstudytraining == "bicycle"
 == "bicycle"){
      tMode[i] = bike;
      r[i] = 250;
      g[i] = 5;
      b[i] = 19;

    }
    if(data[i].whatisyourprimarymodeoftransportationtoyourplaceofworkstudytraining == "walking"){
      tMode[i] = walk;
      r[i] = 255;
      g[i] = 165;
      b[i] = 0;

    }
    if(data[i].whatisyourprimarymodeoftransportationtoyourplaceofworkstudytraining == "local public transport"){
      tMode[i] = local;
      r[i] = 0;
      g[i] = 120;
      b[i] = 250;
    }
    if(data[i].whatisyourprimarymodeoftransportationtoyourplaceofworkstudytraining == "train"){
      tMode[i] = train;
      r[i] = 0;
      g[i] = 160;
      b[i] = 250;
    }
    if(data[i].whatisyourprimarymodeoftransportationtoyourplaceofworkstudytraining == "personal automobile"){
      tMode[i] = auto;
      r[i] = 0;
      g[i] = 200;
      b[i] = 150;
    }
    if(data[i].whatisyourprimarymodeoftransportationtoyourplaceofworkstudytraining == "boat"){
      tMode[i] = boat;
      r[i] = 0;
      g[i] = 200;
      b[i] = 200;
    }
    if(data[i].whatisyourprimarymodeoftransportationtoyourplaceofworkstudytraining == "plane"){
      tMode[i] = plane;
      r[i] = 200;
      g[i] = 200;
      b[i] = 30;
    }
    radius[i] = data[i].whatisthetraveldistancebetweenyourhomeandyourplaceofworkstudytraining;

    if(data[i].haveyoubeenillthelast3weeks == "Yes"){
      healthstatus[i] = 1;
    }
    if(data[i].haveyoubeenillthelast3weeks == "No"){healthstatus[i] = 0
    }
  }

}

function sall() {
  if(resetter != 1){background(Color);    resetter = 1;}
  for(var i = 0; i<laenge; i++){
    noFill();
    strokeWeight(1);
    stroke(r[i],g[i],b[i]);

    var x = radius[i];
    // "S-c* a^x" beschränktes Wachstum, um unendlich große Kreise zu verhindern -- umso höher die Werte für radius, je geringer der unterschied zur nächstgrößeren größe
    //var rFormel = S-k* a^(x*10); -- habe mich letztendlich dagegen entschieden, da dadurch die weit entfernten distanzen extrem miteinander verschwimmen
    var rFormel = k * x;
    ellipse(150,300, rFormel, rFormel);
  }
}

function sick() {
  if(resetter != 2){background(Color); resetter=2}
  for(var i = 0; i<laenge; i++){
    if(healthstatus[i] == 1){
    noFill();
    strokeWeight(1);
    stroke(r[i],g[i],b[i]);

    var x = radius[i];
    // "S-c* a^x" beschränktes Wachstum, um unendlich große Kreise zu verhindern -- umso höher die Werte für radius, je geringer der unterschied zur nächstgrößeren größe
    //var rFormel = S-k* a^(x*10); -- habe mich letztendlich dagegen entschieden, da dadurch die weit entfernten distanzen extrem miteinander verschwimmen
    var rFormel = k * x;
    ellipse(150,300, rFormel, rFormel);
  }
}
}


function healthy() {
  if(resetter != 3){background(Color); resetter = 3}
  for(var i = 0; i<laenge; i++){
    if(healthstatus[i] == 0){
    noFill();
    strokeWeight(1);
    stroke(r[i],g[i],b[i]);

    var x = radius[i];
    // "S-c* a^x" beschränktes Wachstum, um unendlich große Kreise zu verhindern -- umso höher die Werte für radius, je geringer der unterschied zur nächstgrößeren größe
    //var rFormel = S-k* a^(x*10); -- habe mich letztendlich dagegen entschieden, da dadurch die weit entfernten distanzen extrem miteinander verschwimmen
    var rFormel = k * x;
    ellipse(150,300, rFormel, rFormel);
  }
}
}

function draw(){
  smooth();
  if(document.getElementById('sall').checked){sall();}
  if(document.getElementById('healthy').checked){healthy();}
  if(document.getElementById('sick').checked){sick();}
}
