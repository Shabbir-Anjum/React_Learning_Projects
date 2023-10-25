import { Client } from "appwrite";
import Config from "../Configure/config";
export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client.setEndpoint(Config.appwrite_Url).setProject(Config.Project_id)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createpost({title,slug, content, featuredimage, status, userId })
}
const service = new Service()
export default service