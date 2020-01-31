function catGenerator(){

  var img =  document.createElement('img');  
 var flexBox =  document.getElementById('flexbox');
 img.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
 
  flexBox.appendChild(img);

}