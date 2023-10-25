const Config={
   appwrite_Url: String(import.meta.env.VITE_APPWRITE_URL),
    Project_id: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    Database_id:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
   Collection_id:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
   Bucket_id: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default Config
