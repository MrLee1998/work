interface IUser {
    name: string;
    age: number;
}
// 自定义类型
type IUserInfoFunc = (user: IUser) => string;
const getUserInfo: IUserInfoFunc = (user) =>`
    name: ${user.name} ,age: ${user.age}
    `