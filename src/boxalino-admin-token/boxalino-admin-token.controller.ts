import { Controller, Get, Param } from '@nestjs/common';

@Controller('winp/token/admin')
export class BoxalinoAdminTokenController {
  @Get('winp-audiences/audiences/:token')
  async user(@Param('token') token: string) {
    return {
      account: 'mobile_universe_api',
      project: 'win-p-mobileuniverse',
      email: 'erick@reduzer.tech',
      profile: [] as any[],
      token: token,
    };
  }
}
