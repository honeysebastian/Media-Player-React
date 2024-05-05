import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"

// save video called by Add.jsx
export const addVideoAPI= async(video)=>{
   return await commonAPI('POST',`${SERVER_URL}/allVideos`,video)
}

// get all video called by view component
export const getAllVideoAPI= async()=>{
   return await commonAPI('GET',`${SERVER_URL}/allVideos`,'')
}

// video removing api called by video card component
export const removeVideoAPI= async(videoId)=>{
   return await commonAPI('DELETE',`${SERVER_URL}/allVideos/${videoId}`,{})
}

// save history called by videoCard component
export const saveHistoryAPI= async(video)=>{
   return await commonAPI('POST',`${SERVER_URL}/history`,video)
}

// get video history calledby history component
export const getVideoHistoryAPI= async(video)=>{
   return await commonAPI('GET',`${SERVER_URL}/history`,'')
}

// video history removing api called by history component
export const removeHistoryAPI= async(videoId)=>{
   return await commonAPI('DELETE',`${SERVER_URL}/history/${videoId}`,{})
}