export const formatarData = (data: string): string => {
        
    if (!data) return '';

    const [ano, mes, dia] = data.split('-');

    return `${dia}/${mes}/${ano}`;
};


export const FormatarData = {
    formatarData
}
