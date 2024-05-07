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
export const getVideoHistoryAPI= async()=>{
   return await commonAPI('GET',`${SERVER_URL}/history`,'')
}

// video history removing api called by history component
export const removeHistoryAPI= async(videoId)=>{
   return await commonAPI('DELETE',`${SERVER_URL}/history/${videoId}`,{})
}

// add category called by category component
export const addCategoryAPI= async(categoryDetails)=>{
   return await commonAPI('POST',`${SERVER_URL}/allCategory`,categoryDetails)
}

// get all category called by category component
export const getCategoryAPI= async()=>{
   return await commonAPI('GET',`${SERVER_URL}/allCategory`,'')
}

// category removing api called by category component
export const removeCategoryAPI= async(categoryId)=>{
   return await commonAPI('DELETE',`${SERVER_URL}/allCategory/${categoryId}`,{})
}

// get a video called by category component
export const getAVideoAPI= async(videoId)=>{
   return await commonAPI('GET',`${SERVER_URL}/allVideos/${videoId}`,'')
}

//update category  called by category component
export const updateCategoryAPI= async(categoryId,categoryDetails)=>{
   return await commonAPI('PUT',`${SERVER_URL}/allCategory/${categoryId}`,categoryDetails)
}

//get a single category  called by view component
export const getSingleCategoryAPI= async(categoryId)=>{
   return await commonAPI('GET',`${SERVER_URL}/allCategory/${categoryId}`,'')
}