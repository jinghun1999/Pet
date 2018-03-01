// created by tom chow @20171028
//import userStore from "../store/userStore";
/*
 * network request
 */
const request = {
    /**
     * GET请求，返回Json数据。
     *
     * 支持方法重载：
     * getJson(url, callback)
     * getJson(url, params, callback)
     *
     * @param url 请求地址，type：string
     * @param params 请求类型
     * @param callback 回调方法， type: function
     */
    getJson(url, params){
        return this._fetchGet(url, params);
    },

    _fetchGet(url, params){
        let getHandler = this.doGet;
        return new Promise(function (resolve, reject) {
            let successCallback = (result) => {
                resolve(result)//成功调用
            };
            let errorCallback = (error) => {
                reject(error)//异常调用
            };
            getHandler(url, params, successCallback, errorCallback)
        })
    },
    doGet(url, params, successCallback, errorCallback){
        if (params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }

        fetch(url, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Authorization': (user && user.token && user.token.token ? user.token.token:"") ,
            }
        }).then(response=>{
            //收获成功，开始解析
            response.json().then(responseData=>{
                if (responseData.Sign) {
                    successCallback(responseData.Message);
                } else {
                    if(!responseData.Exception){
                        errorCallback({ status : 9999 , mess : '访问错误：' + JSON.stringify(responseData) });//未能识别到错误
                    }else{
                        errorCallback({ status : 9998 , mess : responseData.Exception });//应用程序抛出的业务错误
                    }
                }
            }).catch( error => {
                errorCallback({status:response.status?response.status:9997 , mess:'数据请求失败'});
            });
        }).catch((error)=>{
            errorCallback({status:9996 , mess:'网络请求失败'});
        }).done();
    },


    /**
     * POST请求，返回Json数据。
     *
     * 支持方法重载：
     * postJson(url, callback)
     * postJson(url, body, callback)
     * postJson(url, headers, body, callback)
     *
     * @param url 请求地址，type：string
     * @param headers 请求头，type：json
     * @param body 请求类型，type：string or json
     * @param callback 回调方法， type: function
     */
    postJson(url, params){
        return this._fetchPost(url, params, 'json');
    },

    _fetchPost(url, params, type){
        let headers = {
                'Authorization':(user && user.token && user.token.token ? user.token.token:""),
            },
            body = null;
        if (params) {
            if (typeof params == 'object' && params.constructor == Object) {
                headers['Content-Type'] = 'application/json';
                body = JSON.stringify(params);
            } else if (typeof params == 'object' && params instanceof FormData) {
                body = params;
                headers["Content-Type"] = 'multipart/form-data';
            } else if( typeof params == 'object' && params instanceof Array ){
                headers['Content-Type'] = 'application/json';
                body = JSON.stringify(params);
            }
            else {
                body = params;
            }
        }
        return new Promise(function (resolve, reject) {
            let successCallback = (result) => {
                resolve(result)//成功调用
            };
            let errorCallback = (error) => {
                reject(error)//异常调用
            };

            fetch(url, {
                method: 'POST',
                headers,
                body
            }).then(response=>{
                //收获成功，开始解析
                response.json().then(responseData=>{
                    if (responseData.Sign) {
                        successCallback(responseData.Message);
                    } else {
                        if(!responseData.Exception){
                            errorCallback({ status : 9999 , mess : '访问错误' });//未能识别到错误
                        }else{
                            errorCallback({ status : 9998 , mess : responseData.Exception });//应用程序抛出的业务错误
                        }
                    }
                }).catch( error => {
                    errorCallback({status:response.status?response.status:9997 , mess:'数据请求失败'});
                });
            }).catch((error)=>{
                errorCallback({status:9996 , mess:'网络请求失败'});
            }).done();
        })
    },
};
export default request;