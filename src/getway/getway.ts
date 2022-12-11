import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import {Server} from 'socket.io'
import {OnModuleInit} from "@nestjs/common";
@WebSocketGateway()
export class Gateway implements OnModuleInit{

    @WebSocketServer()
    server:Server;


    onModuleInit(): any {
        this.server.on('connect',(socket)=>{
            console.log(socket.id)
            console.log("connect")

        })
    }


    @SubscribeMessage('newMessage')
    async onMessage(@MessageBody() body:any){
        console.log(body)
        this.server.emit('onmessage',{
            msg:"new",
            content:body
        })

    }


}