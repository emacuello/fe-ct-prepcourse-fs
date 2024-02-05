// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1: 'Valor1',
    propiedad2: {
        propiedad21: 'Valor2.1',
        propiedad22: 'Valor2.2',
        propiedad23: {
            propiedad231: 'Valor2.3.1',
            propiedad232: 'Valor2.3.2'
        }
    },
    propiedad3: {
        propiedad4: 'Valor3.4',
        propiedad5: 'Valor3.5',
        propiedad6: {
            propiedad7: 'valor5',
            propiedad8: 'valor6',
            propiedad9: 'valor7',
        },
    },
    metodo: function () {
        return this.propiedad3.propiedad6.propiedad9();
    }
};

module.exports = objetoAnidado;
