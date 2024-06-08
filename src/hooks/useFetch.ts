export default function useFetch() {
    const PostAsync = async (body: any, endpoint: any) => {
        try {
            var res = await fetch(process.env.REACT_APP_API_URL + endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept":"application/json"
                },
                body : JSON.stringify(body)
            });
            return res
        } catch (error:any) {
            return error.message
        }
    }
    const GetAsync = async (endpoint:any) => {
        debugger
        try {
            var res = await fetch(process.env.REACT_APP_API_URL+endpoint,{
                method:"GET"
            })
            return res;
        } catch (error:any) {
            return error.message
        }
    } 
    return {
        PostAsync,
        GetAsync
    }
}