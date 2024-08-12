export const formatarTelefone = (valor: string) => {
  if (!valor) return "";

  const parte1 = valor.slice(0, 2);
  const parte2 = valor.slice(2, 7);
  const parte3 = valor.slice(7, 11);

  if (parte2) {
    if (parte3) {
      return `(${parte1}) ${parte2}-${parte3}`;
    } else {
      return `(${parte1}) ${parte2}`;
    }
  } else {
    return `(${parte1}`;
  }
};

export const formatarCPF = (valor: string) => {
  if (!valor) return "";

  let response = "";

  const parte1 = valor.slice(0, 3);
  const parte2 = valor.slice(3, 6);
  const parte3 = valor.slice(6, 9);
  const digitos = valor.slice(9);

  if (parte1) {
    response = `${parte1}`;
  }
  if (parte2) {
    response = `${parte1}.${parte2}`;
  }
  if (parte3) {
    response = `${parte1}.${parte2}.${parte3}`;
  }
  if (digitos) {
    response = `${parte1}.${parte2}.${parte3}-${digitos}`;
  }

  return response;
};

export const maskForValueInReal = (event: any) => {
  const rawValue = event.target.value.replace(/\D/g, "");

  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(rawValue / 100);

  return formattedValue;
};

export const maskForNumber = (event: any) => {
  const rawValue = event.target.value.replace(/\D/g, "");

  return rawValue;
};

export const transformToNumber = (value: string): number => {
  return parseFloat(
    value.replace(/,/g, ".").replace(/[a-zA-Z$\s]/g, ""),
  );
};
