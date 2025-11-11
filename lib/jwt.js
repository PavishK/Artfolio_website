import { sign, verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export const generate_token = ( payload ) => {
    const token = sign( payload, secret, { expiresIn:'1h'});
    return token;
}

export const verify_token = ( token ) => {
    try {
        const payload = verify( token, secret);
        return payload;
    } catch (error) {
        return false;
    }
}