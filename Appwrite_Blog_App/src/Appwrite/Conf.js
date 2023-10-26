import { Client, Databases, Query, Storage } from "appwrite";
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
    async createpost({title,slug, content, featuredimage, status, userId }){
        try {
            return await this.databases.createDocument(Config.Database_id, Config.Collection_id, slug, {title, content, featuredimage, status, userId})
        } catch (error) {
            throw error
        }
    }
    async updatepost(slug,{title, content, featuredimage, status}){
        try {
            return await this.databases.updateDocument(Config.Database_id, Config.Collection_id, slug, {title, content, featuredimage, status})
        } catch (error) {
            throw error
        }
    }
    async deletepost(slug){
        try {
            await this.databases.deleteDocument(Config.Database_id, Config.Collection_id, slug)
            return true
        } catch (error) {
            return false
        }
    }
    async getpost(slug){
        try {
            return await this.databases.getDocument(Config.Database_id, Config.Collection_id, slug)
            
        } catch (error) {
            return false
            
        }
    }
    async allpost(queries= Query('status', 'active')){
        try {
            return await this.databases.listDocuments(Config.Database_id, Config.Collection_id, queries)
        } catch (error) {
            return false
        }
    }
}
const service = new Service()
export default service