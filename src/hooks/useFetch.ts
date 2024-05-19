export default function useFetch(baseUrl: any) {
    const PostAsync = async (body: any, endpoint: any) => {
        try {
            var res = await fetch(baseUrl + endpoint, {
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
    return {
        PostAsync
    }
}