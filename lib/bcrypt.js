import bcrypt from 'bcrypt';

export const hash_password = async( password ) => {
    const salt = 10;
    const hashed_password = await bcrypt.hash( password, salt);
    return hashed_password;
}

export const compare_password = async( password, hashed_password ) => {
    const is_valid_password = await bcrypt.compare( password, hashed_password);
    return is_valid_password;
}