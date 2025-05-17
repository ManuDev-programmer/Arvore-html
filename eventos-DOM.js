    var a = window.document.getElementById('area')
    a.addEventListener('click', clicar)
    
    function clicar() {
      a.innerText = 'Clicou!'
      a.style.background = '#800800'
    }
