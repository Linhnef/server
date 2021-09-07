import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import { User } from '../models';
import { createToken, TokenData } from '../middleware/token.middleware';

export interface ILoginPayload {
    email: string;
    password: string;
}

export interface IUserPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const login = async (data: ILoginPayload): Promise<TokenData | null> => {
    const authenticationRepository = await getRepository(User);
    const user = await authenticationRepository.findOne({ email: data.email });
    if (!user) return null;
    const validPassword = await bcrypt.compare(data.password, user.password);
    if (!validPassword) return null;
    return createToken(data.email);
};

export const getUsers = async (): Promise<Array<User>> => {
    const userRepository = getRepository(User);
    return userRepository.find();
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
    const userRepository = getRepository(User);
    const user = new User();
    return userRepository.save({
        ...user,
        ...payload
    });
};

export const getUser = async (email: string): Promise<User | null> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ email: email });
    if (!user) return null;
    return user;
};
