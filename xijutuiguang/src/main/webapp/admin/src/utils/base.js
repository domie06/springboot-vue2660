const base = {
    get() {
        return {
            url : "http://localhost:8080/xijutuiguang/",
            name: "xijutuiguang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xijutuiguang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "戏剧推广网站"
        } 
    }
}
export default base
