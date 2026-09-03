import pino, { Logger } from "pino";

const isDevelopment = process.env.NODE_ENV === "development";
const isEdgeRuntime = process.env.NEXT_RUNTIME === "edge";

export const logger: Logger = pino({
  level: process.env.LOG_LEVEL || (isDevelopment ? "debug" : "info"),

  ...(isEdgeRuntime
    ? {
        browser: {
          asObject: true,
        },
      }
    : {
        transport: isDevelopment
          ? {
              target: "pino-pretty",
              options: {
                colorize: true,
                ignore: "pid,hostname",
                translateTime: "SYS:standard",
              },
            }
          : undefined,
      }),
});
