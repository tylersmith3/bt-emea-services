
solsticePassword = prompt('Enter Solstice admin password, please.');

async function onlineStatus(ip) {
    
    try{
        const response = await fetch(`http://${ip}/api/config/m_displayInformation?password=${solsticePassword}`);
        const data = await response.json();
        const reportedIP = data.m_displayInformation.m_ipv4;
        const reportedName = data.m_displayInformation.m_displayName;
        if (reportedIP === ip) {
            console.log(`Your Solstice Pod in ${reportedName}, with IP address ${reportedIP}, is online.`);
        } else {
            console.log('Something went wrong.');
        }
    } catch(error) {
        console.log(error);
    }
}

onlineStatus('10.24.11.61');
onlineStatus('10.24.11.62');
onlineStatus('10.152.75.22');
onlineStatus('10.152.75.23');

async function vSZ() {

    const ipOfVSZ = '100.124.25.30';
    const apiURI = `https://${ipOfVSZ}:8443/wsg/api/public`;

    // const api_info = await fetch(`${apiURI}/apiInfo`);
    // const api_data = await api_info.json();
    // console.log(api_data);

    
    // Log on
    const logInURI = `${apiURI}/v9_0/serviceTicket`;
    const credentials = { "username": "tlead", "password": "XzRr#TB0@" }

    const logIn = await fetch(logInURI, {
        method: 'POST',
        headers: { 'Content-Type' : "application/json;charset=UTF-8" },
        body: { "username": "tlead", "password": "XzRr#TB0@" }
    });
    const vszLogInResponse = await logIn.json();
    const vszLogInHeaders = await logIn.headers();

    const sessionID = await vszLogInHeaders.Set-cookie;
    console.log(sessionID);
    
}

vSZ();
