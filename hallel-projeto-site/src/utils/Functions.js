export default function formatarData (inputData){
    if(inputData.length >= 11){
    const day = inputData.slice(8,10);
    const mounth = inputData.slice(5,7);
    const year = inputData.slice(0,4);
    return `${day}/${mounth}/${year}`
}
}