const arx = {

    linspace: (inicio, fin, cantidad=1000) => 
        Array.from({length: cantidad}, (_, i) => 
            inicio + (fin - inicio) * i / (cantidad - 1)),

    arange(inicio, fin, intervalo) {
        const array
        for (let i = inicio; i < fin; i += dt) {
            array.push(i);
        };
        return array;
    },
    
    shape(array) {
        if (array.length !== 0 && array[0].length == undefined) {
            return [1, array.length]
        } else {
            return [array.length, array[0].length]
        }
    },

    mean(datos) {
        let promedio = 0;
        for (let i = 0; i < datos.length; i++) {
            promedio += datos[i];
        }
        promedio = promedio / datos.length;
        return promedio;
    },

    meshgrid(x, y) {
        const X = [];
        const Y = [];
        for (let i = 0; i < y.length; i++) {
            X.push(x);
        }
        for (let j = 0; j < y.length; j++) {
            Y.push(Array(x.length).fill(y[j]));
        }
        return [X, Y];
    }
};
arx.size = arx.shape;
