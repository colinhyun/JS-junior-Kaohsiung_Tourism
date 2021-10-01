var url = "https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c";
var button_group_click = document.querySelector('.button-group-click');
var selectDistrict = document.querySelector('.selectDistrict');
var text_BigTitle = document.querySelector('.text_BigTitle');
var list = document.querySelector('.list');


var data = [];
//撈取資料
function getData() {
    axios.get(url)
        .then(function (response) {
            data = response.data;
            console.log(data); //有撈到資料
            //console.log(response.status); 200
        })
}

getData();

/* BUTTON 4個區域點擊 */
function updataListButton(e) {
    if (e.target.nodeName == 'BUTTON') {
        // 取得 button-group-click 裡面 所有button的資料
        var tabs = document.querySelectorAll('.button-group-click button');
        var type = e.target.value;
        text_BigTitle.textContent = type;
        if (type === "苓雅區") {
            renderData(data, type);
        } else if (type === "三民區") {
            renderData(data, type);
        } else if (type === "新興區") {
            renderData(data, type);
        } else if (type === "鹽埕區") {
            renderData(data, type);
        }
    }
}

function updataListSelect(e) {
    //console.log('updataListSelect okok');
    var type = e.target.value;
    console.log(type);
    text_BigTitle.textContent = type;
    switch (type) {
        case "三民區":
            renderData(data,type);
            break;
        case "仁武區":
            renderData(data,type);
            break;
        case "內門區":
            renderData(data,type);
            break;
        case "六龜區":
            renderData(data,type);
            break;
        case "前金區":
            renderData(data,type);
            break;
        case "前鎮區":
            renderData(data,type);
            break;
        case "大樹區":
            renderData(data,type);
             break;
        case "小港區":
            renderData(data,type);
            break;
        case "岡山區":
            renderData(data,type);
            break;
        case "左營區":
            renderData(data,type);
            break;
        case "新興區":
            renderData(data,type);
            break;
        case "旗津區":
            renderData(data,type);
            break;
        case "杉林區":
            renderData(data,type);
            break;
        case "梓官區":
            renderData(data,type);
            break;
        case "楠梓區":
            renderData(data,type);
            break;
        case "田寮區":
            renderData(data,type);
            break;
        case "甲仙區":
            renderData(data,type);
            break;
        case "美濃區":
            renderData(data,type);
            break;
        case "苓雅區":
            renderData(data,type);
            break;
        case "茂林區":
            renderData(data,type);
            break;
        case "茄萣區":
            renderData(data,type);
            break;
        case "鳳山區":
            renderData(data,type);
            break;
        case "鼓山區":
            renderData(data,type);
            break;
        default:
            break;
    }
}

function renderData(data,type) {
    //計算 json 裡的陣列長度 311
    var lenData = data.data.XML_Head.Infos.Info.length;

    // 設 str 可以塞HTML 
    var str = '';
    for (var i = 0; i < lenData; i++) {
        // 透過Add變數帶入311個的內容地址
        var Add = data.data.XML_Head.Infos.Info[i].Add;
        // 開放時間
        var Opentime = data.data.XML_Head.Infos.Info[i].Opentime;

        // 電話
        var Tel = data.data.XML_Head.Infos.Info[i].Tel;

        // 售票資訊
        var Ticketinfo = data.data.XML_Head.Infos.Info[i].Ticketinfo;

        // 圖片網址
        var Picture1 = data.data.XML_Head.Infos.Info[i].Picture1;

        var Name = data.data.XML_Head.Infos.Info[i].Name;



        // 假如 Add 裡面有 type(XX區(從上面updataList帶過來的type)) === 6 代表 Add 是 type 區
        if (Add.indexOf(type) === 6) {

            // 如果售票資訊為'' ，顯示免費參觀
            if (Ticketinfo === '') {
                Ticketinfo = '免費參觀';
            }

            // 組字串
            str += `<div class="col">
                            <div class="card h-100">
                                <div class="position-relative">
                                    <img src="` + Picture1 + `" class="card-img-top" alt="...">
                                    <div class="position-absolute bottom-0 w-100 d-flex justify-content-between">
                                        <h3 class="text-white">` + Name + `</h3>
                                        <span class="text-white">` + type + `</span>
                                    </div>
                                </div>
                              <div class="card-body">
                                <div class="d-flex ">
                                    <div>
                                      <img src="/images/icons_clock.png" class="" alt="gg">
                                    </div>
                                    <div>
                                      <p class="mt-1">` + Opentime + `</p>
                                    </div>
                                </div>
                                <div class="d-flex ">
                                  <div>
                                    <img src="/images/icons_pin.png" class="" alt="gg">
                                  </div>
                                  <span></span>
                                  <div>
                                    <p class="mt-1">` + Add + `</p>
                                  </div>
                              </div>
                              <div class="d-flex justify-content-between ">
                                  <div class="d-flex ">
                                      <div>
                                        <img src="/images/icons_phone.png" class="" alt="gg">
                                      </div>
                                      <div>
                                        <p class="mt-1">` + Tel + `</p>
                                      </div>
                                  </div>
                                  <div class="d-flex ">
                                      <div>
                                        <img src="/images/icons_tag.png" class="" alt="gg">
                                      </div>
                                      <div>
                                        <p class="mt-1">` + Ticketinfo + `</p>
                                      </div>
                                  </div>
                              </div>
                              </div>
                            </div>
                          </div>`
        }
    }
    // 顯示在網頁上
    list.innerHTML = str;
}

button_group_click.addEventListener('click', updataListButton);
selectDistrict.addEventListener('change',updataListSelect);