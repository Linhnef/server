import { Get, Route, Tags, Post, Body, Path } from 'tsoa';
import { User } from '../models';
import { getUsers, createUser, IUserPayload, getUser, ILoginPayload, login } from '../repositories/user.repositories';
import { TokenData } from '../middleware/token.middleware';

@Route('users')
@Tags('User')
export default class UserController {
    @Post('/login')
    public async login(@Body() body: ILoginPayload): Promise<TokenData | null> {
        return login(body);
    }
    @Get('/')
    public async getUsers(): Promise<Array<User>> {
        return getUsers();
    }

    @Post('/')
    public async createUser(@Body() body: IUserPayload): Promise<User> {
        return createUser(body);
    }

    @Get('/:email')
    public async getUser(@Path() email: string): Promise<User | null> {
        return getUser(email);
    }
}
