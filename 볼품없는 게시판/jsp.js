//이름을 매개변수로 넘기는 해당 value값을 넘겨주는 함수
const request = {}; //네임스페이스용 객체
request.getParameter = function(pName){
    if(!location.href.includes("?")) return null;

    var queryString = location.href.split("?")[1];
    var items = queryString.split("&");
    for(let i=0; i<items.length;i++){
        let name = items[i].split("=")[0];
        let value = items[i].split("=")[1];
        if(name == pName){
            value = decodeURIComponent(value); //한글 안깨지게 디코딩
            return value.replaceAll("+"," ") 
            break;  //요런걸 안 빼먹는게 중요!
        }
    }
    return null;    //못찾았을때 null
}