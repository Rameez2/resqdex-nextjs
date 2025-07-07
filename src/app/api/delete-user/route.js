

// src/app/api/delete-user/route.js

import { Client, Users } from 'node-appwrite';

const ServerKey = 'standard_5098dad07b661c7cb2f66c4a147099598716c4004abece6ffbf8ad276371610cbf8c3b297861efa62aaa96f4a855485da1df1b636bc14b99a0a4b5f8f3811b1a985a197cf81f91e9be260641c3229459343fa856b83b2a353e7d544fa19cdf712893e2a49d403f1f9575e1ba99a4554aed1f3f23ff1b3be2ceca0d37a85b65f4'

export async function POST(req) {
  try {
    const body = await req.json();
    const { userId } = body;

    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
    .setKey(ServerKey); // 🔑 Server Key with `users.write`

    const users = new Users(client);
    await users.delete(userId);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    console.error('Error deleting user:', err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}


