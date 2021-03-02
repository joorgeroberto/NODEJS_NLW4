import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    
    const usersRepository = getCustomRepository(UserRepository);

    // Tenta econtrara um usuário cadastrado que já exista com aquele email.
    // Relativo ao comando sql: SELECT * FROM USERS WHETE EMAIL = "EMAIL"
    const userAlreadyExists = await usersRepository.findOne({email});
    
    // Se já existir um usuário cadastrado com aquele email, não deixa cadastrar.
    if(userAlreadyExists) {
      return response.status(400).json({ error: "User already exists!" })
    }


    const user = usersRepository.create({ name, email });

    await usersRepository.save(user);

    // Status 201 é o status de criação
    return response.status(201).json(user);
  }
}

export { UserController };
