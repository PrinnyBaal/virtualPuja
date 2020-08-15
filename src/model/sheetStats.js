

let templeCounter=0;
const templeLimit=32;
let diyaLit=false;
let selectedGod="Ram";

let animationSpeed=2500; //in milliseconds, every 1000 translates to 1 second in between keyframes
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


  diyaUnlit:{
      art:"./images/diyaLeftUnlit.png",
      attribution:`Image by <a href="https://pixabay.com/users/aohodesign-1179866/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2866819">Pollawat Saengthong</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2866819">Pixabay</a>`,
  },
  diyaLit:{
    art:"./images/diyaLeft.png",
  },
  diyaLit2:{
    art:"./images/diyaLeft2.png",
  },
  diyaLit3:{
    art:"./images/diyaLeft3.png",
  },
  diyaLit4:{
    art:"./images/diyaLeft4.png",
  },
  BellButton:{
    art:"./images/bell.jpg",
    attribution:`Image by <a href="https://pixabay.com/users/confused_me-32339/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=430642">confused_me</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=430642">Pixabay</a>`,
  },
  BellButton2:{
    art:"./images/bell2.jpg",
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
  Ram2:{
    art:`./images/ramLeap2.jpg`,
    attribution:`<a href='https://www.freepik.com/vectors/banner'>Banner vector created by freepik - www.freepik.com</a>`,
  },
  Ram3:{
    art:`./images/ramLeap3.jpg`,
    attribution:`<a href='https://www.freepik.com/vectors/banner'>Banner vector created by freepik - www.freepik.com</a>`,
  },
  Ram4:{
    art:`./images/ramLeap4.jpg`,
    attribution:`<a href='https://www.freepik.com/vectors/banner'>Banner vector created by freepik - www.freepik.com</a>`,
  },
  Shiva:{
    art:`./images/shiva.jpg`,
    attribution:`https://www.flickr.com/photos/fotocastor/2438587239/sizes/z/`,
  },
  Shiva2:{
    art:`./images/shiva2.jpg`,
    attribution:`https://www.flickr.com/photos/fotocastor/2438587239/sizes/z/`,
  },
  Shiva3:{
    art:`./images/shiva3.jpg`,
    attribution:`https://www.flickr.com/photos/fotocastor/2438587239/sizes/z/`,
  },
  Shiva4:{
    art:`./images/shiva4.jpg`,
    attribution:`https://www.flickr.com/photos/fotocastor/2438587239/sizes/z/`,
  },
  Krishna:{
    art:`./images/Krishna.jpg`,
    attribution:`Image by <a href="https://pixabay.com/users/sebpowen-48887/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1307395">Seb Powen</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1307395">Pixabay</a>`
  },
  Krishna2:{
    art:`./images/Krishna2.jpg`,
    attribution:`Image by <a href="https://pixabay.com/users/sebpowen-48887/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1307395">Seb Powen</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1307395">Pixabay</a>`
  },
  Krishna3:{
    art:`./images/Krishna3.jpg`,
    attribution:`Image by <a href="https://pixabay.com/users/sebpowen-48887/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1307395">Seb Powen</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1307395">Pixabay</a>`
  },
  Krishna4:{
    art:`./images/Krishna4.jpg`,
    attribution:`Image by <a href="https://pixabay.com/users/sebpowen-48887/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1307395">Seb Powen</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1307395">Pixabay</a>`
  },
  Hanuman:{
    art:`./images/hanuman.jpg`,
    attribution:`Image by <a href="https://pixabay.com/users/tobrother-37903/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=123622">S Das</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=123622">Pixabay</a>`,
  },
  Hanuman2:{
    art:`./images/hanuman2.jpg`,
    attribution:`Image by <a href="https://pixabay.com/users/tobrother-37903/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=123622">S Das</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=123622">Pixabay</a>`,
  },
  Hanuman3:{
    art:`./images/hanuman3.jpg`,
    attribution:`Image by <a href="https://pixabay.com/users/tobrother-37903/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=123622">S Das</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=123622">Pixabay</a>`,
  },
  Hanuman4:{
    art:`./images/hanuman4.jpg`,
    attribution:`Image by <a href="https://pixabay.com/users/tobrother-37903/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=123622">S Das</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=123622">Pixabay</a>`,
  },
  bellChime:{
    sound:"./sounds/bell.wav",
  },
  chantRam:{
    sound:"./sounds/mantraRam.wav"
  },
  chantShiva:{
    sound:"./sounds/mantraShiva.wav"
  },
  chantKrishna:{
    sound:"./sounds/mantraKrishna.wav"
  },
  chantHanuman:{
    sound:"./sounds/mantraHanuman.wav"
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
    art:[assets.Ram.art, assets.Ram2.art,  assets.Ram3.art,  assets.Ram4.art],

  },
  Shiva:{
    art:[assets.Shiva.art, assets.Shiva2.art,  assets.Shiva3.art,  assets.Shiva4.art],
  },
  Hanuman:{
    art:[assets.Hanuman.art, assets.Hanuman2.art,  assets.Hanuman3.art,  assets.Hanuman4.art],
  },
  Krishna:{
    art:[assets.Krishna.art, assets.Krishna2.art,  assets.Krishna3.art,  assets.Krishna4.art],
  },
  litDiya:{
    art:[assets.diyaLit.art, assets.diyaLit2.art, assets.diyaLit3.art, assets.diyaLit4.art],
  }
}

function preloadImgs(){
  Object.values(assets).forEach((asset)=>{
    if (asset.art){
      let img=new Image();
      img.src=asset.art;
      console.log(img);
    }
  });

  for (let i=0; i<templeLimit; i++){
    let img=new Image();
    img.src=`./images/temple_${i}.png`;
    console.log(img);
  }

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

       //clearInterval(animation);
     }


      frameCount++;
      imgElement.style["background-image"]=`url('${animArray[selectedFrame]}')`;
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
