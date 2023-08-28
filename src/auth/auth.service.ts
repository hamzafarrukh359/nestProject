// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'; // Import the JwtService from @nestjs/jwt

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(payload: any): Promise<any> {
    // Validate the user based on the payload information (e.g., check if the user exists in the database)
    // You can customize this method to your authentication logic
    // Return the user's information or null if validation fails
    // Example:
    // const user = await yourUserService.findUserById(payload.sub);
    // if (user) return user;
    return null;
  }

  async generateToken(user: any): Promise<string> {
    // Generate a JWT token for the user
    // You can customize this method to add any user-specific data to the token
    const payload = { sub: user.id, username: user.username };
    return this.jwtService.sign(payload);
  }
}
