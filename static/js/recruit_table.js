const carousel = [
    {
        itemActive:"carousel-item active",
        title:"新卒社員",
        content:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        className: "carousel-caption text-left",
        link:"personnel/shain.html",
        image:"static/images/image3.jpg"
    },{
        itemActive:"carousel-item",title:"ガリレオで働くママさん",
        content:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
        className:"carousel-caption",
        link:"personnel/work_mom.html",image:"static/images/image4.jpg"
    },{
        itemActive:"carousel-item",title:"外国人エンジニア",
        content:"在席、国籍数12ヶ国<br>アメリカ、ロシア、マレーシア、フィリピン、ベトナム、ミャンマー、インド、。。。",
        className:"carousel-caption text-right text-black",
        link:"personnel/foreign.html",image:"static/images/off_lady.jpg"},
];

const recruit = [
    {title:"職種",content:"エンジニアに特化した人材ビジネスの法人営業",},
    {title:"雇用形態",content:"正社員",},
    {title:"仕事内容 <br><br><br><br><br><br><br>",
    content:"・人材提案営業<br>・既存取引先内拡大営業<br>・新規開拓営業<br>・既存スタッフのフォロー<br><br>各企業の開発現場が抱える課題に対して解決のための提案やプロジェクトチームの立上げ等に向けて当社のエンジニアをマッチングしてエンジニア（人材）の提供を行って頂きます。",},
    {title:"給与",content:"月給制:220,000円~350,000円",},
    {title:"勤務地",content:"愛知県名古屋市中区錦一丁目6-36",},
    {title:"交通アクセス",content:"名古屋市営地下鉄　東山線・鶴舞線　伏見駅10番出口 徒歩5分",},
    {title:"勤務曜日・時間 <br><br>",content:"月、火、水、木、金<br>就業時間 9:00~18:00(休憩60分)",},
    {title:"資格・経験 <br><br>",content:"普通自動車免許<br>※自家用車の持込み（必須）",},
    {title:"休日・休暇 <br><br>",content:"土日、GW、夏季、年末年始(会社カレンダーによる)<br>年間休日:117日"}
];

const card_content = [
        {
            name:"選考スケジュール",
            content:"Last updated 3 mins ago",
            image:"static/images/gcalendar.png",
            link:"info/cal.html",
            className: "card mb-3 bg-primary opacity",
        },{
            name:"研修について",
            content:"ガリレオ技術センター",
            image:"static/images/training.jpg",
            link:"info/training.html",
            className: "card mb-3 text-white bg-light opacity",
        },{
            name:"インターンシップ",
            content:"１日か５日のインターンシップ",
            image:"static/images/internship.jpg",
            link:"info/internship.html",
            className: "card mb-3 text-white bg-light opacity",
        },{
            name: "社内イベント",
            content:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            image:"static/images/interview1.jpg",
            link:"",
            className: "card mb-3 bg-warning opacity",
        },{
            name:"「人にものを教えることはできない。みずから気づく手助けができるだけだ。」",
            content: "'You cannot teach a man anything, you can only help him find it within himself.'<span class='text-muted'><br>— Galileo Galilei</span>",
            image:"static/images/galileo.jpg",
            link:"",
            className: "card mb-3 bg-light opacity",
        },{
            name: "コラム",
            content:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            image:"static/images/interview2.png",
            link:"",
            className: "card mb-3 bg-info opacity",
        }
    ];

/* Build a carousel of pictures*/
const carouDiv = document.getElementById("myCarousel");
const olElem = document.createElement("ol");
olElem.setAttribute("class","carousel-indicators");
olElem.innerHTML = '<li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li>';
carouDiv.appendChild(olElem);
const innerDiv = document.createElement("div");
innerDiv.setAttribute("class","carousel-inner");

const slide=["first-slide","second-slide","third-slide"];
for (let idx=0;idx<3;idx++){
    const itemDiv = document.createElement("div");
    itemDiv.setAttribute("class",carousel[idx].itemActive);
    const image = document.createElement("img");
    image.setAttribute("class",slide[idx]);
    image.src = carousel[idx].image;
    itemDiv.appendChild(image);
    const containDiv = document.createElement("div");
    containDiv.setAttribute("class","container");
    var text = "<div class='" + carousel[idx].className + "'><h1>" + carousel[idx].title + "</h1><p>";
    text += carousel[idx].content + "</p><p><a class='btn btn-lg btn-primary' href='" + 
    carousel[idx].link + "' role='button'>もっと見る</a></p>";
    containDiv.innerHTML = text;
    itemDiv.appendChild(containDiv);
    innerDiv.appendChild(itemDiv);
}
carouDiv.appendChild(innerDiv);
/* Carousel controls */
const control = document.createElement("div");
control.innerHTML = '<a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>';
carouDiv.appendChild(control);
/* Build cards on 3x3 layouts*/
const mainDiv = document.getElementById("marketing");
const titleH2 = document.createElement("h2");
titleH2.innerText = "新入社員の言葉";
titleH2.setAttribute("class","featurette-heading")
mainDiv.appendChild(titleH2);

const innerTop = document.createElement("div");
innerTop.setAttribute("class","card-deck text-center");
for (let idx = 0; idx < 3;idx++){
    const cardDiv = document.createElement("div");
    const thisClass = card_content[idx].className;
    cardDiv.setAttribute("class",thisClass);    
    var text2 = "<img class='card-img-top' src='" + card_content[idx].image + "' alt='Card image'>";
    text2 += '<div class="card-body"><h5 class="card-title"><a href="'+ card_content[idx].link + 
    '" class="btn btn-light">'+ card_content[idx].name +'</a></h5><p class="card-text"><small class="text-muted">'+ 
    card_content[idx].content + '</small></p></div>';
    cardDiv.innerHTML = text2;
    innerTop.appendChild(cardDiv);
}
const innerBottom = document.createElement("div");
innerBottom.setAttribute("class","card-deck text-center");
for (let idx = 3; idx < 6;idx++){
    const cardDiv = document.createElement("div");
    const thisClass = card_content[idx].className;
    cardDiv.setAttribute("class",thisClass);    
    var text2 = "<img class='card-img-top' src='" + card_content[idx].image + "' alt='Card image'>";
    text2 += '<div class="card-body"><h5 class="card-title">'+ card_content[idx].name +'</h5><p class="card-text">'+
    card_content[idx].content +'</p><p class="card-text"><small class="text-muted">Minor text</small></p></div>'
    cardDiv.innerHTML = text2;

    innerBottom.appendChild(cardDiv);
}
mainDiv.appendChild(innerTop);
mainDiv.appendChild(innerBottom);

/* Build a table-like document*/
const recruitDiv = document.getElementById("recruit");
const titleRecuit = document.createElement("div");
var text = '<h2 class="featurette-heading">新卒採用</h2><h3 class="text-muted">応募職種</h3><p>Apply and be part of our team</p>'
titleRecuit.innerHTML = text;
recruitDiv.appendChild(titleRecuit);

const divRowTable = document.createElement("div");
divRowTable.setAttribute("class","row featurette");
const anomDiv = document.createElement("div");
for (let idx = 0; idx < 9; idx++){
    const dlElem = document.createElement("dl");
    const dtElem = document.createElement("dt");
    dtElem.innerHTML = "<span>" + recruit[idx].title + "</span>"
    const ddElem = document.createElement("dd");
    ddElem.innerHTML = recruit[idx].content;
    dlElem.appendChild(dtElem);
    dlElem.appendChild(ddElem);
    anomDiv.appendChild(dlElem);
}
divRowTable.appendChild(anomDiv);
const pElem = document.createElement("p");
pElem.innerText = "エントリーはこちらから";
//<p style="letter-spacing: 3px"></p>
divRowTable.appendChild(pElem);
recruitDiv.appendChild(divRowTable);

const divRowButtons = document.createElement("div");
divRowButtons.setAttribute("class","row featurette")
text = '<a id="rikunavi" href="https://job.rikunabi.com/2019/company/r698130078/" class="btn btn-light"><img src="static/images/riku2019.png"></a><a id="rikunavi" href="https://job.mynavi.jp/19/pc/search/corp103283/outline.html" class="btn btn-light"><img src="static/images/mynavi2019.png" height="35px"></a>';
divRowButtons.innerHTML = text;
recruitDiv.appendChild(divRowButtons);