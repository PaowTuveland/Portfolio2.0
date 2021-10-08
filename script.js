function darkModeFunction(){
  let wrapper = document.getElementById("wrapper");
  if (document.getElementById("darkMode").checked){
    wrapper.classList.add("classLightMode");    
  }
  else{
    wrapper.classList.remove("classLightMode");  
  }
  
}
document.getElementById("darkMode").addEventListener("change", darkModeFunction);

