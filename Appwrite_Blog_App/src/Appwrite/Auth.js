
import Config from "../Configure/config";
import { Client, Account, ID} from 'appwrite';
export class Authservice{
    client= new Client();
    account;
    constructor(){
        this.client.setEndpoint(Config.appwrite_Url).setProject(Config.Project_id);
        this.account= new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
            const useraccount= await this.account.create(ID.unique(), email, name, password)
            if(useraccount){
                return this.login({email, password})
            }
            else{
                return useraccount
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email, password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error;
            
        }
    }
    async currentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
    }
    async logout(){
       try {
        return await this.account.deleteSessions()
       } catch (error) {
        throw error
       }
    }
};
const authservice = new Authservice()
export default authservice