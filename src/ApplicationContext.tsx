import { message } from "antd"
import * as React from "react"
import Points from "../src/components/mapData.json"
import useFetch from "./hooks/useFetch"
import RequestMessageTypes from "./model/RequestMesageTypes"

export interface IApplicationContext {
    qrInfo: any,
    setQrInfo: (data: any) => void,
    sendEmergencyBrakeCommandAsync: () => Promise<void>,
    sendEmptyTourCommandAsync: () => Promise<void>,
    telemetryData: any,
    setTelemetryData: (data: any) => void,
    sendRouteInfoAsync: () => void,
    currentRoute: any,
    setCurrentRoute: (data?: any) => void,
    currentDirection: any,
    setCurrentDirection: (data?: any) => void
    routePoints: any,
    setRoutePoints: (data?: any) => void,
    mapData: any,
    setMapData: (data?: any) => void,
    obstaclePointCloud: any,
    setObstaclePointCloud: (data?: any) => void,
    loadingNode: any,
    setLoadingNode: (data?: any) => void,
    unloadingNode: any,
    setUnloadingNode: (data?: any) => void,
    currentLoadingNode: any,
    setCurrentLoadingNode: (data?: any) => void,
    currentUnloadingNode: any,
    setCurrentUnloadingNode: (data?: any) => void,
    controlPanelData: any,
    setControlPanelData: (data?: any) => void,
    sendControlPanelData:() => void,
    isEmergencyActive:boolean,
    setIsEmergencyActive:(data:boolean)=>void,
    sendLiftLoadCommandAsync:() => Promise<void>,
    isLiftLoadActive:boolean,
    setIsLiftLoadActive:(data?:boolean) => void
}

export interface IApplicationContextProviderProps {
    children: JSX.Element | JSX.Element[]
}
let obstaclePoints: any[] = [];
export const ApplicationContext = React.createContext({} as IApplicationContext)

export const ApplicationContextProvider = (props: IApplicationContextProviderProps) => {
    const [qrInfo, setQrInfo] = React.useState<any | undefined>();
    const [telemetryData, setTelemetryData] = React.useState<any | undefined>();
    const [currentRoute, setCurrentRoute] = React.useState<any | undefined>(undefined);
    const [currentDirection, setCurrentDirection] = React.useState<any | undefined>(undefined);
    const [routePoints, setRoutePoints] = React.useState<any | undefined>(undefined);
    const [mapData, setMapData] = React.useState<any[] | undefined>(Points);
    const [obstaclePointCloud, setObstaclePointCloud] = React.useState<any[] | undefined>(undefined);
    const [currentLoadingNode, setCurrentLoadingNode] = React.useState<any | undefined>(undefined);
    const [currentUnloadingNode, setCurrentUnloadingNode] = React.useState<any | undefined>(undefined);
    const [controlPanelData, setControlPanelData] = React.useState<any>(undefined);
    const [isEmergencyActive,setIsEmergencyActive] = React.useState<boolean>(false);
    const [isLiftLoadActive,setIsLiftLoadActive] = React.useState<boolean>(false);

    const [loadingNode, setLoadingNode] = React.useState<any | undefined>(undefined);
    const [unloadingNode, setUnloadingNode] = React.useState<any | undefined>(undefined);
    const { PostAsync, GetAsync } = useFetch();
    const [ws, Setws] = React.useState(null)

    const sendRouteInfoAsync = async () => {
        if (!currentDirection || !currentRoute || !currentLoadingNode || !currentUnloadingNode) {
            message.error("Rota bilgileri eksik");
            return null;
        }

        let requestMessage = {
            direction: currentDirection,
            loadingNode: currentLoadingNode,
            unloadingNode: currentUnloadingNode,
            command: currentRoute,
        };
        console.log(requestMessage);

        try {
            const response = await PostAsync(requestMessage, "/api/StartCommand");
            return response;
        } catch (error) {
            console.error("Error sending route info:", error);
            return null;
        }
    }
    const sendEmergencyBrakeCommandAsync = async () => {
        if(isEmergencyActive){
            setIsEmergencyActive(false)
            return await GetAsync("/api/CancelEmergency")
        }
        setIsEmergencyActive(true);
        return await GetAsync("/api/MakeEmergencyBrake")
    }
    const sendLiftLoadCommandAsync = async () => {
        if(isLiftLoadActive){
            setIsLiftLoadActive(false)
            return await GetAsync("/api/CancelManualLift")
        }
        setIsLiftLoadActive(true);
        return await GetAsync("/api/SetManualLift")
    }
    const sendEmptyTourCommandAsync = async () => {
        if (!currentDirection || !currentRoute) {
            message.error("Rota bilgileri eksik");
            return null;
        }

        let requestMessage = {
            direction: currentDirection,
            startPoint: currentRoute[0]?.value,
        };

        try {
            const response = await PostAsync(requestMessage, "/api/EmptyTour");
            return response;
        } catch (error) {
            console.error("Error sending route info:", error);
            return null;
        }
    }
    const processWQrInfoData = (data: any) => {
        console.log(data)
        setQrInfo(data)
        setMapData(Points.map((k: any) => {
            if (k.Label === data.Name) {
                k.visible = true;
                return k;
            }
            return k;
        }));

    }
    function processTelemtryData(data: any) {
        console.log(data)
        setTelemetryData(data);
    }

    function processListData(data: any) {
        console.log(data)
        setObstaclePointCloud(data.Points)

    }
    const processSocketData = (message: any) => {
        var deserializedMessage = JSON.parse(message);

        switch (deserializedMessage.ClassType) {
            case RequestMessageTypes.SendQrInfoRequestMessage:
                processWQrInfoData(deserializedMessage.Data)
                break;
            case RequestMessageTypes.CollectTelemetryRequestMessage:
                processTelemtryData(deserializedMessage.Data)
                break;
            case RequestMessageTypes.DrawObstacleRequestMessage:
                processListData(deserializedMessage.Data)
                break;
            default:
                break;
        }
    }
    const sendControlPanelData = async () => {
        await PostAsync(controlPanelData,"/api/ControlPanel")
    }
    const defaultContext = {
        qrInfo,
        setQrInfo,
        sendEmergencyBrakeCommandAsync,
        sendEmptyTourCommandAsync,
        telemetryData,
        setTelemetryData,
        sendRouteInfoAsync,
        currentRoute,
        setCurrentRoute,
        currentDirection,
        setCurrentDirection,
        routePoints,
        setRoutePoints,
        mapData,
        setMapData,
        obstaclePointCloud,
        setObstaclePointCloud,
        currentLoadingNode,
        setCurrentLoadingNode,
        currentUnloadingNode,
        setCurrentUnloadingNode,
        loadingNode,
        setLoadingNode,
        unloadingNode,
        setUnloadingNode,
        controlPanelData,
        setControlPanelData,
        sendControlPanelData,
        isEmergencyActive,
        setIsEmergencyActive,
        sendLiftLoadCommandAsync,
        isLiftLoadActive,
        setIsLiftLoadActive
    } as IApplicationContext

    React.useEffect(() => {
        const webSocket = new WebSocket(process.env.REACT_APP_WEB_SOCKET_URL as string)

        webSocket.onopen = () => {
            console.log("Connection opened")
        }

        webSocket.onmessage = (ev) => {
            const message = ev.data;
            processSocketData(message)
        }

        webSocket.onclose = () => {
            console.log("Web socket connection closed");
        }

        webSocket.onerror = (error) => {
            console.error("Web socket error", error)
        }

        return () => {
            if (webSocket.readyState == 1) {
                webSocket.close()
            }
        }
    }, [])

    return (
        <ApplicationContext.Provider value={defaultContext}>
            {props.children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContext

