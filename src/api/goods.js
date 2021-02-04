import request from '../utils/request';

export function get_type(post) {
    return request.post('/pub/getCategory', post);
}