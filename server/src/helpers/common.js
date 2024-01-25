import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';

export const generate_file_name = (file_name) =>{
    return uuidv4()+slugify(file_name);
}
