export function getMesAndAnoAtual(){
    let data = new Date();
    let mes =
      data.getMonth() + 1 >= 10
        ? String(data.getMonth())
        : "0" + String(data.getMonth() + 1);
    let ano = String(new Date().getFullYear());
    return {mes, ano}
}

