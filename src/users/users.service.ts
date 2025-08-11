import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  private users = [

    {
      id: 1,
      name: "Zeeshan Munir",
      email: "zeeshan@1gmail.com",
      role: "ADMIN"
    },
    {
      id: 2,
      name: "Ayesha Tariq",
      email: "ayesha.tariq@example.com",
      role: "ADMIN"
    },
    {
      id: 3,
      name: "Bilal Ahmed",
      email: "bilal.ahmed@example.com",
      role: "USER"
    },
    {
      id: 4,
      name: "Maria Khan",
      email: "maria.khan@example.com",
      role: "INTERN"
    },
    {
      id: 5,
      name: "Hassan Raza",
      email: "hassan.raza@example.com",
      role: "USER"
    },
    {
      id: 6,
      name: "Fatima Noor",
      email: "fatima.noor@example.com",
      role: "ADMIN"
    },
    {
      id: 7,
      name: "Umar Farooq",
      email: "umar.farooq@example.com",
      role: "USER"
    },
    {
      id: 8,
      name: "Sana Malik",
      email: "sana.malik@example.com",
      role: "INTERN"
    },
    {
      id: 9,
      name: "Ahmed Ali",
      email: "ahmed.ali@example.com",
      role: "USER"
    },
    {
      id: 10,
      name: "Rabia Aslam",
      email: "rabia.aslam@example.com",
      role: "ADMIN"
    }
  ];

  findAll(role?: 'INTERN' | 'ADMIN' | 'USER') {
    if (role) {
      return this.users.filter(users => users.role = role)
    }
    return this.users
  }

  findOne(id: number) {
    const user = this.users.find(users => users.id = id)
    return user
  }

  create(user: { name: string, email: string, role: string }) {
    const usersByHigherId = [...this.users].sort((a, b) => b.id = a.id)
    const newUser = {
      id: usersByHigherId[0].id + 1,
      ...user
    }
    this.users.push(newUser)
    return newUser
  }

  update(id: number, updatedUser: { name?: string, email?: string, role?: 'INTERN' | 'ADMIN' | 'USER' }) {
    this.users = this.users.map(user => {
      if (user.id === id) {
        return { ...user, ...updatedUser }
      }
      return user
    })
    return this.findOne(id)
  }

  delete(id: number) {
    const removedUser = this.findOne(id)
    this.users = this.users.filter(user => user.id !== id)
    return removedUser
  }

}