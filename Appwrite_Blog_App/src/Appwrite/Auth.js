import Config from "../Configure/config";

export class Authservice{
    client= new Client();
    account;
    constructor(){
        this.client.setEndpoint(Config.appwrite_Url).setProject(Config.Project_id)
    }
};
const authservice = new Authservice()
export default authservice