class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // let copiaLista = new ListaNegociacoes();
        // this._negociacoes.forEach( negociacao => copiaLista.adiciona(negociacao));
        // return copiaLista; //--> uma Solução

        return [].concat(this._negociacoes)
    }
}