var url = "https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c";
var data = [];
//撈取資料
function getData() {
    axios.get(url)
    .then(function (response) {
        data=response.data;
    })
}

getData();
