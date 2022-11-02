export const moneyMask = (value: string) => {
    value = value.replace('.', '').replace(',', '').replace(/\D/g, '')

    const options = { minimumFractionDigits: 1 }
    const result = new Intl.NumberFormat('en-US', options).format(parseFloat(value) / 100);

    console.log(result)

    return '$' + result
}