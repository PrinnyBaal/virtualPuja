

// if (localStorage.getItem("savedChars") === null) {
//   localStorage.setItem('savedChars', JSON.stringify(savedChars));
// }
//
// if (localStorage.getItem("activeChar") === null) {
//   localStorage.setItem('activeChar', 0);
// }

// $.ajax({
//     url : folder,
//     success: function (data) {
//         console.log(data);
//         $(data).find("a").attr("href", function (i, val) {
//           console.log(val);
//             if( val.match(/\.(jpe?g|png|gif)$/) ) {
//                 $("body").append( "<img src='"+ folder + val +"'>" );
//             }
//         });
//     }
// });
let templeCounter=0;
const templeLimit=32;
let diyaLit=false;

let siteText={
  congrats:'Congratulations!',
  buildButton:`BUILD`,
  ramBtn:"Ram",
  shivaBtn:"Shiva",
  templeBtn:"Temple",
  krishnaBtn:"Krishna",
  hanumanBtn:"Hanuman",
}

let assets={

  DiyaLeft:{
    image:"",
    attribution:`Image by <a href="https://pixabay.com/users/aohodesign-1179866/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2866819">Pollawat Saengthong</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2866819">Pixabay</a>`,
  },
  diyaUnlit:{
      art:"./images/diyaLeftUnlit.png",
      attribution:`Image by <a href="https://pixabay.com/users/aohodesign-1179866/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2866819">Pollawat Saengthong</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2866819">Pixabay</a>`,
  },
  diyaLit:{
    art:"./images/diyaLeft.png",
  },
  BellButton:{
    art:"./images/bell.jpg",
    attribution:`Image by <a href="https://pixabay.com/users/confused_me-32339/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=430642">confused_me</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=430642">Pixabay</a>`,
  },
  ChantButton:{
    art:"./images/chantButton.png",
    attribution:`Image by <a href="https://pixabay.com/users/Clker-Free-Vector-Images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=33862">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=33862">Pixabay</a>`,
  },
  DiyaButton:{
    art:"./images/diyaButton.jpg",
    attribution:`Image by <a href="https://pixabay.com/users/aohodesign-1179866/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2866819">Pollawat Saengthong</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2866819">Pixabay</a>`,
  },
  garlandButton:{
    art:"./images/garlandButton.png",
    attribution:`Image by <a href="https://pixabay.com/users/GDJ-1086657/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3322667">Gordon Johnson</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3322667">Pixabay</a>`,
  },
  garland:{
    art:"./images/garland.png",
  },
  templeComplete:{
    art:`./images/templeComplete.jpg`,
    attribution:`Image by <a href="https://pixabay.com/users/krisnadathur-10660404/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3809492">Kris Nadathur</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3809492">Pixabay</a>`,
  },
  Ram:{
    art:`./images/ramLeap.jpg`,
    attribution:`<a href='https://www.freepik.com/vectors/banner'>Banner vector created by freepik - www.freepik.com</a>`,
  },
  Shiva:{
    art:`./images/shiva.jpg`,
    attribution:`https://www.flickr.com/photos/fotocastor/2438587239/sizes/z/`,
  },
  Krishna:{
    art:`./images/Krishna.jpg`,
    attribution:`Image by <a href="https://pixabay.com/users/sebpowen-48887/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1307395">Seb Powen</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1307395">Pixabay</a>`
  },
  Hanuman:{
    art:`./images/hanuman.jpg`,
    attribution:`Image by <a href="https://pixabay.com/users/tobrother-37903/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=123622">S Das</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=123622">Pixabay</a>`,
  },
  bellChime:{
    sound:"./sounds/bell.wav",
  },
  chant:{
    sound:"./sounds/murmer.wav"
  },
  alight:{
    sound:"./sounds/alight.wav"
  },
  flowerPlace:{
    sound:"./sounds/flowerPlace.wav"
  },
  brickDrop:{
    sound:"./sounds/brickDrop.wav"
  },
  success:{
    sound:"./sounds/success.wav"
  }
}

let godPages={
  Ram:{
    art:assets.Ram.art,

  },
  Shiva:{
    art:assets.Shiva.art,
  },
  Hanuman:{
    art:assets.Hanuman.art,
  },
  Krishna:{
    art:assets.Krishna.art,
  }
}

function preloadImgs(){
  Object.values(assets).forEach((asset)=>{
    if (asset.art){
      let img=new Image();
      img.src=asset.art;
    }
  });

  for (let i=0; i<templeLimit; i++){
    let img=new Image();
    img.src=`../images/temple_${i}.png`;
    console.log(img);
  }

}
let attributions=[`<a href='https://www.freepik.com/vectors/banner'>Banner vector created by freepik - www.freepik.com</a>`]

let fontSelector={
  validFonts:false,
  getFonts:function(){
    return JSON.parse(localStorage.getItem("fonts"));
  },
  getFontList:function(){
    let detective = new fontSelector.fontDetector();
    if (localStorage.getItem("fonts")){
      cardForms.setFontOptions();
      return;
    }


    let untestedFonts=["Abadi MT Condensed Light", "Albertus Extra Bold", 'Zurich Ex BT','Zurich BlkEx BT',"Albertus Medium","Antique Olive ","Arial","Arial Black","Arial MT","Arial Narrow","Bazooka","Book Antiqua","Bookman Old Style ","Boulder","Calisto MT","Calligrapher","Century Gothic","Century Schoolbook","Cezanne","CG Omega","CG Times","Charlesworth","Chaucer","Clarendon Condensed","Comic Sans MS","Copperplate Gothic Bold","Copperplate Gothic Light","Cornerstone","Coronet","Courier","Courier New","Cuckoo","Dauphin","Denmark","Fransiscan","Garamond","Geneva","Haettenschweiler","Heather","Helvetica","Herald","Impact","Jester","Letter Gothic","Lithograph","Lithograph Light","Long Island","Lucida Console","Lucida Handwriting","Lucida Sans","Lucida Sans Unicode","Marigold","Market","Matisse ITC","MS LineDraw","News GothicMT","OCR A Extended","Old Century","Pegasus","Pickwick","Poster","Pythagoras","Sceptre","Sherwood","Signboard","Socket","Steamer","Storybook","Subway","Tahoma ","Technical",'Teletype','Tempus Sans ITC','Times','Times New Roman','Times New Roman PS','Trebuchet MS','Tristan','Tubular','Unicorn','Univers','Univers Condensed','Vagabond','Verdana','Westminster','Allegro','Amazone BT','AmerType Md BT','Arrus BT','Aurora Cn BT','AvantGarde Bk BT','AvantGarde Md BT','BankGothic Md BT','Benguiat Bk BT','BernhardFashion BT','BernhardMod BT','BinnerD','Bremen Bd BT','CaslonOpnface BT','Charter Bd BT','Charter BT','ChelthmITC Bk BT','CloisterBlack BT','CopperplGoth Bd BT','English 111 Vivace BT','EngraversGothic BT','Exotc350 Bd BT','Freefrm721 Blk BT','FrnkGothITC Bk BT','Futura Bk BT','Futura Lt BT','Futura Md BT','Futura ZBlk BT','FuturaBlack BT','Galliard BT','Geometr231 BT','Geometr231 Hv BT','Geometr231 Lt BT','GeoSlab 703 Lt BT','GeoSlab 703 XBd BT','GoudyHandtooled BT','GoudyOLSt BT','Humanst521 BT','Humanst 521 Cn BT','Humanst521 Lt BT ','Incised901 Bd BT ','Incised901 BT ','Incised901 Lt BT ','Informal011 BT ','Kabel Bk BT ','Kabel Ult BT ','Kaufmann Bd BT ','Kaufmann BT ','Korinna BT ','Lydian BT ','Monotype Corsiva','NewsGoth BT ','Onyx BT ','OzHandicraft BT','PosterBodoni BT','PTBarnum BT','Ribbon131 Bd BT','Serifa BT','Serifa Th BT','ShelleyVolante BT','Souvenir Lt BT','Swis721 BlkEx BT','Swiss911 XCm BT ','TypoUpright BT','ZapfEllipt BT','ZapfHumnst BT','ZapfHumnst Dm BT'];
    fontSelector.validFonts=untestedFonts.filter(font => detective.detect(font));

  },
  fontDetector:function(){
    /**
 * JavaScript code to detect available availability of a
 * particular font in a browser using JavaScript and CSS.
 *
 * Author : Lalit Patel
 * Website: http://www.lalit.org/lab/javascript-css-font-detect/
 * License: Apache Software License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Version: 0.15 (21 Sep 2009)
 *          Changed comparision font to default from sans-default-default,
 *          as in FF3.0 font of child element didnt fallback
 *          to parent element if the font is missing.
 * Version: 0.2 (04 Mar 2012)
 *          Comparing font against all the 3 generic font families ie,
 *          "monospace", "sans-serif" and "sans". If it doesn't match all 3
 *          then that font is 100% not available in the system
 * Version: 0.3 (24 Mar 2012)
 *          Replaced sans with serif in the list of baseFonts
 */

/**
 * Usage: d = new Detector();
 *        d.detect("font name");
 */
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ["monospace", "sans-serif", "serif"];

    //we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = "mmmmmmmmmmlli";

    //we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = "72px";

    var h = document.getElementsByTagName("body")[0];

    // create a SPAN in the document to get the width of the text we use to test
    var s = document.createElement("span");
    s.style.fontSize = testSize;
    s.innerHTML = testString;
    var defaultWidth = {};
    var defaultHeight = {};
    for (var index in baseFonts) {
        //get the default width for the three base fonts
        s.style.fontFamily = baseFonts[index];
        h.appendChild(s);
        defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
        defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
        h.removeChild(s);
    }

    function detect(font) {
        var detected = false;
        for (var index in baseFonts) {
            s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
            h.appendChild(s);
            var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
            h.removeChild(s);
            detected = detected || matched;
        }
        return detected;
    }

    this.detect = detect;
  },
}

let ci={
  jumpTo:function(anchor){
    console.log(anchor);
    window.location.href = "#"+anchor;
  },
  dieRoll:function(dieSides){
    return Math.floor(Math.random()*dieSides)+1;
  },
  array_move:function(arr, old_index, new_index) {
    //https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
  },
  checkCommonGround:function(array1, array2){
    //tests if array1 and 2 have ANY elements in common
    let commonGround=false;
    if (array1.length<array2.length){
      for (let i=0, len=array1.length; i<len; i++){
        if (array2.includes(array1[i])){commonGround=true; break;}
      }
    }else{
      for (let i=0, len=array2.length; i<len; i++){
        if (array1.includes(array2[i])){commonGround=true; break;}
      }
    }

    return commonGround;
  },
  copyToClipboard:(copyText)=>{
    /* Get the text field */


   /* Select the text field */

   let range = document.createRange();
   let selection=window.getSelection();
   range.selectNode(copyText);
   selection.removeAllRanges();
   selection.addRange(range);
   document.execCommand("copy");



   /* Alert the copied text */
   ci.fyiUser("Magic Word copied to clipboard");
 },
 fyiUser:(text)=>{
   $("#alertBanner").removeClass("activeAlert");
   $("#alertBanner").html(text);
   $("#alertBanner").addClass("activeAlert");
   setTimeout(removeBanner, 5000)

   function removeBanner(){
     $("#alertBanner").removeClass("activeAlert");
   }
 },
 spliceElem:(array, elem)=>{
   let pos=array.indexOf(elem);
   if (pos>=0){
     array.splice(pos,1);
   }else{
     console.error("Given bad Element, not found in array to splice");
   }

 },
 downloadJSON:(exportObj, exportName)=>{
   //https://stackoverflow.com/a/30800715
   var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
   var downloadAnchorNode = document.createElement('a');
   downloadAnchorNode.setAttribute("href",     dataStr);
   downloadAnchorNode.setAttribute("download", exportName + ".json");
   document.body.appendChild(downloadAnchorNode); // required for firefox
   downloadAnchorNode.click();
   downloadAnchorNode.remove();

 },
 animateImg:(imgID, animArray, animSpeed)=>{
   //currently is a neverending animation

   var imgElement=document.getElementById(imgID);
   var frameCount=0;  //just for testing
   var selectedFrame=0;
   var animation = setInterval(frame, animSpeed);


   return (animation);
   function frame() {
     if (frameCount == 10) {
       console.log("COUNt IT");
       console.log(imgElement.nodeValue);
        console.log(imgElement.hasAttributes());
        console.log(imgElement.parentNode);
        console.log(imgElement.parentElement);
       //clearInterval(animation);
     }


      frameCount++;
      imgElement.src=animArray[selectedFrame];
      selectedFrame++;
      if (selectedFrame>=animArray.length){
        selectedFrame=0;
      }

   }
 }

}



function resetStorage(){
  if (window.confirm("Do you really want to delete all your saved info?")) {
  localStorage.clear();
  location.reload();
}
}
