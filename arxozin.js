const arx = {

    linspace: (inicio, fin, cantidad=1000) => 
        Array.from({length: cantidad}, (_, i) => 
            inicio + (fin - inicio) * i / (cantidad - 1)),

    arange(inicio, fin, intervalo) {
        const array = [];
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
    },
    
    zeros(filas, columnas) {
        const array = [];
        for (let i = 0; i < filas; i++){
            array.push(Array(columnas).fill(0))
        }
        return array;
    },
    
    ones(filas, columnas) {
        const array = [];
        for (let i = 0; i < filas; i++){
            array.push(Array(columnas).fill(0))
        }
        return array;
    },
    
    eye(n) {
        let m = arx.zeros(n,n)
        for (let i = 0; i<n; i++) {
            m[i][i] = 1;
        };
        return m;
    },
    
    dot(A,B) {
        const a = arx.shape(A);
        const b = arx.shape(B);
        const C = arx.zeros(a[0],b[1]);
        if (a[1] == b[0]) {
            if (b[1] == 1) {
                for (let i = 0; i < a[0]; i++) {
                    for (let j = 0; j < b[1]; j++) {
                        C[i][j] += A[i][j]*B[j];
                    }
                }
            } else if (a[0] == 1) {
                for (let i = 0; i < a[0]; i++) {
                        for (let j = 0; j < b[1]; j++) {
                            C[i][j] += A[i]*B[i][j];
                        }
                    }
                } else {
                    for (let i = 0; i < a[0]; i++) {
                        for (let j = 0; j < b[1]; j++) {
                            for (let k = 0; k < a[1]; k++) {
                                C[i][k] += A[i][j]*B[j][k];
                            }
                        }
                    }
                }
                return C;
            }  else {
                console.log("Sizes don't match.")
                return;
        }
    },
    
    transpose(matrix) {
        const m = arx.shape(matrix);
        let M = arx.zeros(m[1],m[0]);
        if (m[0] == 1) {
            for (let i = 0; i < m[1]; i++) {
                M[i][0] = matrix[i];
            }
        } else if (m[1] == 1) {
            for (let i=0; i < m[0]; i++) {
                M[i] = matrix[i][0];
            }
        } else {
            for (let i=0; i < m[0]; i++) {
                for (let j=0; j < m[1]; j++) {
                    M[j][i] = matrix[i][j];
                }
            }
        }
        return M;
    }
    
};
arx.size = arx.shape;
