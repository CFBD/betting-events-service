import { connect } from 'amqplib';

const url = process.env.RABBIT_URL;
const vHost = process.env.VIRTUAL_HOST;
const user = process.env.RABBIT_USER;
const password = process.env.RABBIT_PASSWORD;

export interface RabbitInstance {
    publish: (eventType: string, message: any) => Promise<void>;
}

export const useRabbit = async (): Promise<RabbitInstance> => {

    // console.log(`amqp://${user}:${password}@${url}/${vHost}`);
    const connection = await connect(`amqp://${user}:${password}@${url}/${vHost}`);
    const channel = await connection.createChannel();

    const publish = async (eventType: string, message: any) => {
        await channel.assertExchange(eventType, "fanout");
        channel.publish(eventType, '', Buffer.from(JSON.stringify(message)))
    }

    return {
        publish
    }
}