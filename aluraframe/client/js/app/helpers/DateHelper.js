class DateHelper {
    constructor(){
        throw new Error('Classe com metodos estaticos, nao deve ser estanciada')
    }

    static textoParaData(texto){
        return new Date(...texto   
                        .split('-')
                        .map((item, indice) => item - indice % 2)); // outra solucao
    }

    static dataParaTexto(data){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd')
            
        return  `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()};`       
    }
}

