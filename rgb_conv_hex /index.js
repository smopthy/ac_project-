(function () {
  
  const slidera = document.getElementById('slider_a')
  const sliderb = document.getElementById('slider_b')
  const sliderc = document.getElementById('slider_c')  

  const sliderValue_a = document.getElementById('slider_a_value')
  const sliderValue_b = document.getElementById('slider_b_value')
  const sliderValue_c = document.getElementById('slider_c_value')
  //  hexcode 
  const hex_code = document.querySelector('.hex_code')  
  const data_pantal = document.querySelector('.hex-div') 
  //const bodybg = document.querySelector('body') 

  sliderValue_a.innerText = slidera.value  
  sliderValue_b.innerText = sliderb.value  
  sliderValue_c.innerText = sliderc.value  
  
  charge()
  chargeColor()
  
      function charge () {
        let red = toHex(slidera.value )
        let green = toHex(sliderb.value )
        let blue = toHex(sliderc.value ) 

        return hex_code.innerHTML = `<div class= 'hex_code' >#${red}${green}${blue}</div>`  

      }

      function chargeColor () {
        let code = hex_code.innerText
        //return bodybg.style.background = code
        return data_pantal.innerHTML= `
             <div class="data-pantal col-12 " style= 'background-color: ${code}'></div>
        `
      }   
  

    slidera.oninput = function() {
      sliderValue_a.innerText = this.value; 
      charge()
      chargeColor()

  }

    sliderb.oninput = function() {
      sliderValue_b.innerText = this.value;
      charge()
      chargeColor()
  }

    sliderc.oninput = function() {
      sliderValue_c.innerText = this.value;
      charge()
      chargeColor()
      
  }
 
    function toHex(e){
      let hex = Number(e).toString(16) 
      if (hex.length === 1) {hex = '0' + hex} 
      return hex
    }

    

  })()

