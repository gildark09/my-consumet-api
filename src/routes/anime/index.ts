import { FastifyInstance } from 'fastify';
import { ANIME } from '@consumet/extensions';

const gogoanime = new ANIME.Gogoanime();

export default async function (fastify: FastifyInstance) {
  // Get top airing anime
  fastify.get('/gogoanime/top-airing', async (request, reply) => {
    try {
      const page = request.query.page ? Number(request.query.page) : 1;
      const data = await gogoanime.fetchTopAiring(page);
      reply.send(data);
    } catch (err) {
      reply.status(500).send({ message: 'Something went wrong' });
    }
  });

  // Search for anime
  fastify.get('/gogoanime/search/:query', async (request, reply) => {
    try {
      const { query } = request.params;
      const page = request.query.page ? Number(request.query.page) : 1;
      const data = await gogoanime.search(query, page);
      reply.send(data);
    } catch (err) {
      reply.status(500).send({ message: 'Something went wrong' });
    }
  });

  // Get anime info
  fastify.get('/gogoanime/info/:id', async (request, reply) => {
    try {
      const { id } = request.params;
      const data = await gogoanime.fetchAnimeInfo(id);
      reply.send(data);
    } catch (err) {
      reply.status(500).send({ message: 'Something went wrong' });
    }
  });

  // Get streaming links
  fastify.get('/gogoanime/watch/:episodeId', async (request, reply) => {
    try {
      const { episodeId } = request.params;
      const data = await gogoanime.fetchEpisodeSources(episodeId);
      reply.send(data);
    } catch (err) {
      reply.status(500).send({ message: 'Something went wrong' });
    }
  });
}
