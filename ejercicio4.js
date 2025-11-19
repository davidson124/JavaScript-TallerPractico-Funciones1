const invert = ['david', 'pedro', 'carlos', 'ana'];
function invertirArray(invertido){
    console.log(invertido);
    for(let d = invertido.length -1; d >= 0; d-- ){
        console.log(invertido[d]);
        invertido.push(invertido[d]);
    }
    return invertirArray;
}
invertirArray(invert);
