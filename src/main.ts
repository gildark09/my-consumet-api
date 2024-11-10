require('dotenv').config();
import Fastify from 'fastify';
import cors from '@fastify/cors';
import anime from './routes/anime';

const app = Fastify({ 
  logger: true
});

const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

// Register CORS
app.register(cors, {
  origin: true,
  methods: ['GET', 'POST']
});

// Register only anime routes
app.register(anime, { prefix: '/anime' });

// Health check route
app.get('/health', async (request, reply) => {
  reply.send({ status: 'ok' });
});

const start = async () => {
  try {
    await app.listen({ port: PORT, host: HOST });
    console.log(`Server listening on ${HOST}:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();