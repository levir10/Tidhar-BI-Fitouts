// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        // ------------------->  should not share this with clints!! should be in a local file! 
        // client_id: process.env.FORGE_CLIENT_ID,
        // client_secret: process.env.FORGE_CLIENT_SECRET,
        // callback_url: process.env.FORGE_CALLBACK_URL
        client_id:  "NW31PXVIyaFA93enRSMz5YHKMHWhEUVY",
        client_secret: "Vc97ffa4a0f3f479",
        callback_url: "http://localhost:443/api/forge/callback/oauth"
        // callback_url: "http://bifitouts:443/api/forge/callback/oauth"
    },
    scopes: {
        // Required scopes for the server-side application-->privliges for our internal opperation in the server side ("back end")
        internal: ['bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],
        // Required scope for the client-side viewer-->priveliges for the client ("front end") 
        public: ['viewables:read']
    }
};
