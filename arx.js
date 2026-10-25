const arxozin = {

    linspace: (inicio, fin, pasos=1000) => 
        Array.from({length: pasos}, (_, i) => 
            inicio + (fin - inicio) * i / (pasos - 1)),

    shape: (matrix) => [matrix.length, matrix[0].length],

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
        for (let j = 0; j < x.length; j++) {
            Y.push(y);
        }
        return [X, Y];
    }
};
