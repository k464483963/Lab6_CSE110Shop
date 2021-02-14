// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  fetch('https://fakestoreapi.com/products')
        .then(function(resp){
              return resp.json();
        })
        .then(function(data){
              console.log(data);
              for(let i=0; i<data.length-1;i++){
                localStorage.setItem(JSON.stringify(data[i].id),JSON.stringify(data[i]));
              }
               console.log(localStorage);

              //  customElements.define(element name,class name)
        });




});