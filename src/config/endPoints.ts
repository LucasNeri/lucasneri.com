// eslint-disable-next-line
const isLocalHost = (url : any) => {
    return url == "127.0.0.1" || url == "localhost" || url.indexOf("192.168") != -1
}

// const protocolWs = isLocalHost(url) ? 'ws://' : 'wss://'

const endPoints = {
};

export default endPoints;