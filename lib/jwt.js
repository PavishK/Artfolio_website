import { sign, verify } from 'jsonwebtoken';


export const generate_token = ( payload ) => {
    const secret = process.env.JWT_SECRET;
    const token = sign( payload, secret, { expiresIn:'1h'});
    return token;
}

export const verify_token = ( token ) => {
    const secret = process.env.JWT_SECRET;
    try {
        const payload = verify( token, secret);
        return payload;
    } catch (error) {
        return false;
    }
}