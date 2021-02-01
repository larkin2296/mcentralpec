import request from '../utils/request';

export function get_SMS(phone) {
    return request.post('/pub/sendRegisterSMS', { phone });
}
export function check_SMS(param) {
    return request.post('/pub/checkSMSCode', param);
}

export function go_register(param) {
    const headers = { 'Content-Type': 'multipart/form-data' }
    return request.post('/pub/register', param, { headers: headers });
}