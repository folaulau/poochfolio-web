export const shortName = (name: string, len: number) => {
    if(name) {
        if(name.length > len) {
            return name.substring(0, len) + '...'
        } else {
            return name
        }
    }

    return name
}