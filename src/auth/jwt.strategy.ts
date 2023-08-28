// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service'; // Implement this service to handle user authentication

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-secret-key',
    });
  }

  async validate(payload: any) {
    // The 'payload' here is the decoded JWT token
    // Validate the user's information (e.g., check if the user exists in the database)
    // Return the user or throw an error if authentication fails
    return this.authService.validateUser(payload);
  }
}
