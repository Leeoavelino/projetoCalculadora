function criaCalculadora(){

    return{

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnApagar: document.querySelector('.btn-del'),
        btnIgual: document.querySelector('.btn-eq'),

        inicia(){
            this.display.focus()
            this.cliqueBotoes()
            this.pressionaEnter()
            
            
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.resultadoDisplay()
                    
                }
            })
        },

        pressionaApagar(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 8){
                    this.apagarDisplay()
                    
                }
            })
        },


        apagarDisplay(){
            this.display.value = this.display.value.slice(0, -1)
            this.display.focus()
        },

        clearDisplay(){
            this.display.value = ' ' 
            this.display.focus()
        },
        resultadoDisplay(){
            let conta = this.display.value
            try{
                conta = eval(conta)
                if(!conta){
                    alert(`conta invalida`)
                    return
                }
                this.display.value = String(conta)
            }catch(e){
                alert(`conta invalida`)
                this.display.value = ' '
                return
            }
        },

        cliqueBotoes(){

            document.addEventListener('click', function(e){

                
                const el = e.target

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-del')){
                    this.apagarDisplay()
                }
                if(el.classList.contains('btn-eq')){
                    this.resultadoDisplay()
                }

                this.display.focus()
                

            }.bind(this))
        },

        btnParaDisplay(valor){
            this.display.value += valor
            this.display.focus()
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()