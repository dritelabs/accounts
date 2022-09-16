import { getUser } from './get-user';

interface Options {
  userId: string;
  clientId: string;
}

export async function verifyClientApproval(options: Options) {
  const user = await getUser({
    id: options.userId
  });

  return user.clientApprovals.find((clientApproval) => clientApproval.clientId === options.clientId);
}
