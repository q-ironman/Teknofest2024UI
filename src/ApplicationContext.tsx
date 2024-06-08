import * as React from "react"
import useFetch from "./hooks/useFetch"
import RequestMessageTypes from "./model/RequestMesageTypes"

export interface IApplicationContext {
    qrInfo:any,
    setQrInfo:(data:any) => void,
    sendEmergencyBrakeCommandAsync:() => Promise<void>,
    sendEmptyTourCommandAsync: () => Promise<void>
} 

export interface IApplicationContextProviderProps{
    children:JSX.Element | JSX.Element[]
}
export const ApplicationContext = React.createContext({} as IApplicationContext)

export const ApplicationContextProvider = (props:IApplicationContextProviderProps) =>{
    const [qrInfo,setQrInfo] = React.useState<any| undefined>();
    const [telemetryData,setTelemetryData] = React.useState<any|undefined>();


    const {PostAsync,GetAsync} = useFetch();
    const [ws,Setws] = React.useState(null)

    const sendEmergencyBrakeCommandAsync = async () => {
        return await GetAsync("/api/MakeEmergencyBrake")
    }

    const sendEmptyTourCommandAsync =async () => {
        return await GetAsync("/api/EmptyTour")
    }
    const processWQrInfoData = (data:any) => {
        console.log(data)
        setQrInfo(data)
    }
    // function processTelemtryData(data: any) {
        
    // }
    
    const processSocketData = (message:any) => {
        var deserializedMessage = JSON.parse(message);

        switch (deserializedMessage.ClassType) {
            case RequestMessageTypes.SendQrInfoRequestMessage:
                processWQrInfoData(deserializedMessage.Data)
                break;
            // case RequestMessageTypes.CollectTelemetryRequestMessage:
            //     processTelemtryData(deserializedMessage.Data)
            //     break;
            default:
                break;
        }
    }
    const defaultContext = {
        qrInfo,
        setQrInfo,
        sendEmergencyBrakeCommandAsync,
        sendEmptyTourCommandAsync
    } as IApplicationContext

    React.useEffect(() => {
        const webSocket = new WebSocket(process.env.REACT_APP_WEB_SOCKET_URL as string)

        webSocket.onopen = () => {
            console.log("Connection opened")
        }

        webSocket.onmessage = (ev) =>{
            const message = ev.data;
            processSocketData(message)
        }

        webSocket.onclose= () => {
            console.log("Web socket connection closed");
        }

        webSocket.onerror = (error) => {
            console.error("Web socket error",error)
        }

        return () => {
            if(webSocket.readyState ==1){
                webSocket.close()
            }
        }
    },[])

    return (
        <ApplicationContext.Provider value={defaultContext}>
            {props.children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContext

