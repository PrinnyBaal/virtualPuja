
sheetProj.view.sheetLogic = {
  setupUserInterface: function () {

    $("#ramBtn").html(siteText.ramBtn);
    $("#shivaBtn").html(siteText.shivaBtn);
    $("#templeBtn").html(siteText.templeBtn);
    $("#krishnaBtn").html(siteText.krishnaBtn);
    $("#hanumanBtn").html(siteText.hanumanBtn);

    $("#chantAudio").attr("src", assets.chant.sound);
    $('#chantAudio').prop("volume", 0.2);

    $("#alightAudio").attr("src", assets.alight.sound);
    $('#alightAudio').prop("volume", 0.4);

    $("#brickAudio").attr("src", assets.brickDrop.sound);
    $('#brickAudio').prop("volume", 0.4);

  displayGod("Ram");
   setupFlairs();
    setupTempleSite();
    preloadImgs();
    }
};

function displayGod(godName){

  let god=godPages[godName];
  diyaLit=false;
  createShrine();
  pray.reset();
  $("#shrine").css("background-image", `url(${god.art})`);
}

function createShrine(){
  let shrine=`  <div id="shrineRow">
      <div id="shrine">
        <div id="shrineGarland" class="invisible"></div>
        <div class="shrineDiya leftDiya"></div>
        <div class="shrineDiya rightDiya"></div>
      </div>
    </div>

    <div id="shrineButtonRow">
      <div id="garlandButton" onclick="pray.placeGarland()" class="shrineButton"></div>
      <div id="bellButton" onclick="pray.ringBell()" class="shrineButton"></div>
      <div id="diyaButton" onclick="pray.lightDiya()" class="shrineButton"></div>
      <div id="chantButton" onclick="pray.chant()" class="shrineButton"></div>
    </div>`;

  $("#creationArea").html(shrine);
  setupFlairs();
}

function createTemple(){
  let temple=`<div id="templeRow">
    <div id="temple" style="background-color:#3449eb">
      <div id="templeComplete"
      class ="invisible"
      ></div>

    </div>
  </div>

  <div id="shrineButtonRow">
    <button id="buildButton" onclick="myTemple.build()">${siteText.buildButton}</button>

  </div>`;
  $("#chantAudio").trigger("pause");
  $("#creationArea").html(temple);
  setupTempleSite();
}

function setupFlairs(){
  $("#shrineGarland").css("background-image", `url(${assets.garland.art})`);
  $(".shrineDiya").css("background-image", `url(${assets.diyaUnlit.art})`);

  $("#garlandButton").css("background-image", `url(${assets.garlandButton.art})`);
  $("#bellButton").css("background-image", `url(${assets.BellButton.art})`);
  $("#diyaButton").css("background-image", `url(${assets.DiyaButton.art})`);
  $("#chantButton").css("background-image", `url(${assets.ChantButton.art})`);


}

function setupTempleSite(){
  templeCounter=0;
  $("#temple").css("background-image", `url(./images/temple_${templeCounter}.png)`);
  $("#templeComplete").css("background-image", `url(./images/temple_${templeLimit}.png)`);
}

let pray={
  reset:()=>{
    $(".shrineDiya").css("background-image", `url(${assets.diyaUnlit.art})`);
    $("#shrineGarland").addClass("invisible");
    $("#chantAudio").trigger("pause");
  },
  lightDiya:()=>{
    if (!diyaLit){
      $(".shrineDiya").css("background-image", `url(${assets.diyaLit.art})`);
        $("#alightAudio").trigger("play");
      diyaLit=true;
    }

  },
  placeGarland:()=>{
    $("#shrineGarland").removeClass("invisible");
    new Audio(assets.flowerPlace.sound).play();
  },
  ringBell:()=>{
    new Audio(assets.bellChime.sound).play();
  },
  chant:()=>{
    $("#chantAudio").trigger("play");
  //  new Audio(assets.chant.sound).play();
},
}

let myTemple={
  build:()=>{

    templeCounter++;
    if (templeCounter<templeLimit){
      $("#temple").css("background-image", `url(./images/temple_${templeCounter}.png)`);
      let audio=new Audio(assets.brickDrop.sound);
      audio.volume=.4;
      audio.play();
      //$("#brickAudio").get(0).currentTime = 0;
    //  $("#brickAudio").get(0).play();
      //trigger("play");
    }else{
        $("#templeComplete").removeClass("invisible");
        $("#shrineButtonRow").html(`<div id="congratsMessage">${siteText.congrats}</div>`);
        new Audio(assets.success.sound).play();
    }


  },

}
