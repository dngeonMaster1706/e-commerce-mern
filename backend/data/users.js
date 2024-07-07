import bcrypt from 'bcryptjs'

const users=[
    {
        name:"Admin User",
        email:'admin@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:"Kaushik",
        email:'kaushik@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false,
    },
    {
        name:"John",
        email:'john@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false,
    },
] 

export default users