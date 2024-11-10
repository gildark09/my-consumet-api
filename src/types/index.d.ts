declare module '@consumet/extensions' {
  export namespace ANIME {
    export class Gogoanime {
      constructor(proxyConfig?: any);
      search(query: string, page?: number): Promise<any>;
      fetchTopAiring(page?: number): Promise<any>;
      fetchRecentEpisodes(page?: number): Promise<any>;
      fetchAnimeInfo(id: string): Promise<any>;
      fetchEpisodeSources(episodeId: string): Promise<any>;
    }
  }
}

declare module 'fastify' {
  export default function fastify(opts?: FastifyServerOptions): FastifyInstance;
  
  export interface FastifyServerOptions {
    logger?: boolean | object;
  }
  
  export interface FastifyInstance {
    register: any;
    get: any;
    log: any;
    listen: (opts: { port: number; host: string }) => Promise<void>;
  }
  
  export interface FastifyRequest {
    params: any;
    query: any;
  }
  
  export interface FastifyReply {
    send: (data: any) => void;
    status: (code: number) => FastifyReply;
  }
}

declare module '@fastify/cors' {
  const cors: any;
  export default cors;
}