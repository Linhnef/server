import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.SECRET_KEY;

export interface TokenData {
    token: string;
    expiresIn: number;
}

export const createToken = (email: any): TokenData => {
    const expiresIn = 60 * 60;
    return {
        expiresIn,
        token: jwt.sign({ name: email }, secret || 'SECRET', { expiresIn: 60 * 60 })
    };
};

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json('Authentication error !!');
    jwt.verify(token, (secret || 'SECRET') as string, (err: any, user: any) => {
        console.log(err);
        if (err) return res.status(403).json('Authentication error !!');
        next();
    });
};
