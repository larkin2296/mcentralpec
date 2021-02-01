import request from '../utils/request';

export function go_login(post){
    return request.post('/pub/accountLogin', post);
}
export function get_SMS(phone){
    return request.post('/pub/sendLoginSMS', {phone});
}
