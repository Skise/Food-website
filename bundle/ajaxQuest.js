//XHR对象
function createXHR() {
    if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != 'undefined') {
        if (typeof arguments.callee.activeXString != 'string') {
            var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'],
                i, len;

            for (i = 0, len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {
                    //跳过
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error('No XHR object available.');
    }
}

//在url末尾添加字符串参数
function addURLParam(obj) {
    // url += (url.indexOf('?') == -1 ? '?' : '&');
    // url += encodeURIComponent(name) + '=' +encodeURIComponent(value);
    // return url;
    let query = '';
    for (let [keys, values] of Object.entries(obj)) {
        query += `&${encodeURIComponent(keys)}=${encodeURIComponent(values)}`
    }
    return query.slice(1);//去掉第一个&
}

//封装get请求
function getQuest(url, obj='', header=''){
    let xhr = createXHR();
    let urls = !!obj ? `url?${addURLParam(obj)}` : url;

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
           if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {

           } else {
               alert('Request was unsuccessful: ' + xhr.status);
           }
       } 
    };

    xhr.open('get', urls, true);
    xhr.setRequestHeader('captcha-code', header);//自定义请求头部
    xhr.send(null);

    return xhr;
}

//封装post请求
function postQuest(url, data, cf, header='') {
    let xhr = createXHR();
    xhr.onreadystatechange = cb;//自定义回调函数

    xhr.open('post', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');//自定义头部
    xhr.setRequestHeader('captcha-code', headers);//自定义头部
    xhr.send(JSON.stringify(data));
    return xhr;
}