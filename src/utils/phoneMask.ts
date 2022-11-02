export const maskPhoneNumber = (phone: string) => {
    if(phone) {
        let phoneNumber = phone.replace(/-/gm, '');
        let num = `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6, phoneNumber.length)}`;
        num = num.trim();
        return num.substring(0, 12)
    } else {
        return phone
    }
};