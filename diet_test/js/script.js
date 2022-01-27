var num = 1;
var index = 0;
var arr = new Array(10);

//question 객체
var q = {
    //다이어트 레시피 관심 정도
    1: {
        "question": "갑자기 요리하고 싶은 음식이 생긴 당신<br />여러 레시피를 찾아본다.",
        "question2": "어딘가 내 맘에 들지 않는다<br />레시피를 바꿔볼까?",
        "type": "EI",
        "A": "백종원이 된 것처럼<br />다른 레시피를 연구해본다.",
        "B": "다른 생각하기 귀찮으니<br />써있는 그대로 따라한다."
    },
    //약속 좋아함 or 싫어함
    2: {
        "question": "\"살 쪘다...다이어트 해야지!\"<br />친구에게 전화가 온다",
        "question2": "\"야~~오랜만에 술 먹자!!\"<br />어떻게 하지...?나가??",
        "type": "EI",
        "A": "\"원래 다이어트는 내일부터 아니겠어...?\"<br />라고 생각하며 약속을 잡는다.",
        "B": "\"아냐 살 너무쪘어...만나면 엄청 먹을 듯\"<br />라고 생각하며 안 나간다."
    },
    //마른 몸 선호 근육질 선호
    3: {
        "question": "다이어트를 결심한 당신<br />PT를 받기 시작했다",
        "question2": "트레이너가 근력운동만 시킨다<br />이때 드는 생각은??",
        "type": "EI",
        "A": "\"오 벌써 탄탄해진것 같네!\"<br />복근이 생긴 내 모습을 상상한다.",
        "B": "\"난 근육 크게 생기는 거 싫은데...\"<br />라고 생각하며 불안해한다."
    },
    //친목 좋아하냐 안좋아하냐
    4: {
        "question": "친구와 오랜만에 만나기로 한 당신<br />모르는 사람이 같이 온다고 한다.",
        "question2": "일단 알겠다고 하고 자리에 나간다<br />자리에 나간 나의 행동은?",
        "type": "EI",
        "A": "만나자마자 30분만에 친해져서<br />번호 교환을 한다.",
        "B": "조금 불편하지만 최대한 티를 덜내며<br />얘기를 나누려고 노력한다."
    },
    //건강에 좋은 음식 챙김 여부
    5: {
        "question": "다이어트는 계획을 세우는 당신<br />이번엔 식단 계획이다!",
        "question2": "이번엔 좀 제대로 하고싶다<br />어떻게 식단을 짤까?",
        "type": "EI",
        "A": "건강에 좋은 음식 뿐만 아니라<br />영양 보충을 위해 영양제도 구입한다",
        "B": "일단 체중감량이 중요하다!<br />닭가슴살, 고구마, 야채 위주로만 먹는다."
    },
    //전문가 도움
    6: {
        "question": "살이 잘 안빠진다...<br />식단 잘 지켰는데 왜 이래?",
        "question2": "왜 그런지 이유를 알아야겠다.<br />어떻게 알아볼까??",
        "type": "SN",
        "A": "전문 클리닉을 받아보거나<br />다이어트를 성공한 친구에게 물어본다.",
        "B": "유튜브 채널이나 서적을 보며<br />스스로 정보를 얻어본다."
    },
    //다이어트 이유
    7: {
        "question": "한달동안 짠음식을 너무 많이 먹었다<br />몸도 좀 부은거 같네",
        "question2": "이제 좀 가려서 먹어야겠다!<br />이렇게 생각한 이유는?",
        "type": "SN",
        "A": "부은 얼굴 너무 꼴보기 싫다<br />하 너무 돼지같아 조절하면서 먹자.",
        "B": "부종이 좀 심하네<br />이러다 고지혈증 걸리겠다."
    },
    //같이 운동하길 좋아하는지
    8: {
        "question": "체력이 너무 떨어지는 것 같아<br />운동을 좀 하긴 해야겠다",
        "question2": "친구랑 같이 크로스핏?<br />vs 1:1 필라테스 하기",
        "type": "SN",
        "A": "1:1은 좀 비싸긴 하지만<br/>혼자 하는게 편할 듯 필라테스 하자!",
        "B": "혼자하면 의지도 안 생기고<br/>외롭잖아...친구와 크로스핏을 한다."
    },
    //돈을 많이 쓰는가
    9: {
        "question": "다이어트 계획은 끝났다...<br />아 운동복이 없네",
        "question2": "닭가슴살도 없다...인터넷을 보던 당신<br />뭐 또 필요한거 없나?",
        "type": "SN",
        "A": "와 곤약볶음밥? 요가매트?<br />다 필요해 보인다 질러야지~",
        "B": "일단 운동복이랑 닭가슴살만 사고<br />필요하다 싶은 건 이후에 사자!."
    },
    //어느 체형일 때 매력적인가
    10: {
        "question": "다이어트 선언 후<br />주변 사람들이 얘기한다.",
        "question2": "야 넌 통통한게 귀여운데...<br />이때 당신의 반응은?",
        "type": "SN",
        "A": "아 그래...?난 잘 모르겠는데<br />몰라 일단 빼볼라고.",
        "B": "아냐 딱 예전에 3kg 빠졌을 때<br />제일 보기 좋더라고."
    }
}

//결과창 객체
var result = {
    "EN": {
        "toptitle": "다이어트계의 지식인 급?",
        "trackname": "정보 수집러 다이어터",
        "img": "./img/manyinfo.png",
        "personality": "다이어트를 시작할 때 이런저런 정보들을<br/>수집하고 체계적으로 준비하는 편입니다.",
        "personality2": "그래서 다른사람의 도움보다는 본인이 스스로<br/>정보를 찾아 나에게 맞는 다이어트를 해요",
        "personality3": "요리를 좋아하는 편이기 때문에<br/>다이어트 레시피에 관심이 많아요",
        "personality4": "그렇게 때문에 몸에 좋은 식재료가 있다면<br/>곧바로 챙기는 편입니다.",
        "personality5": "미용 목적에 다이어트 보다는<br/>건강을 위해 다이어트를 시작하는 편입니다.",
        "personality6": "체중에 딱히 집착하지 않기때문에<br/>다이어트 중 약속이 잡혀도 개의치 않습니다.",
      


    },
    "ES": {
        "toptitle": "다이어트 장비만 한보따리",
        "trackname": "장비 플렉스 다이어터",
        "img": "./img/flex.png",
        "personality": "원체 무언가를 시작 할 때 돈을 아끼지 않아<br/>다이어트에도 돈을 많이 투자하는 편입니다.",
        "personality2": "다이어트를 하기전에 운동복 뿐만 아니라<br/>각종 장비를 먼저 플렉스 해요",
        "personality3": "주변 사람에게 의존하는 편이라<br/>다이어트 시 조언을 구하러 다니는 편입니다.",
        "personality4": "같이 하는 운동을 좋아하는 편은 아니지만<br/>필요한 경우에는 단체운동을 하기도 해요",
        "personality5": "내가 어느 체형일 때 매력적일지 잘 몰라<br/>확실한 목표를 가지고 다이어트를 하지는 않아요",
        "personality6": "다이어트 목적은 주로 건강보다는<br/>미용의 목적으로 하는 편입니다.",
      
    },
    "IN": {
        "toptitle": "괜찮아 그냥 먹고 운동하자...!",
        "trackname": "건강한 돼지 다이어터",
        "img": "./img/exercise.png",
        "personality": "평소 식탐이 많아 식단 조절을<br/>힘들어 합니다.",
        "personality2": "그만큼 체중도 많이 신경쓰기 때문에<br/>참지 못하고 먹은날은 운동을 많이 하는 편이에요",
        "personality3": "그래도 같이하는 운동, 혼자하는 운동<br/>딱히 가리는 것 없이 잘 합니다.",
        "personality4": "하지만 먹고 운동하지 뭐...라는 마인드 때문에<br/>과하게 많이 먹기도 해요.",
        "personality5": "식단 조절을 힘들어 하기때문에<br/>계속 인터넷에 식단없이 빼는 법을 검색합니다.",
        "personality6": "그래도 다이어트에 크게 집착하거나<br/>스트레스를 받지는 않아요",
     
    },
    "IS": {
        "toptitle": "일주일 중 7번을 체중계에?",
        "trackname": "체중 강박 다이어터",
        "img": "./img/weight.png",
        "personality": "다이어트 목표가 항상 적게 나가는 체중이기 때문에<br/>체중계에 쉼없이 들락날락 하는편이에요",
        "personality2": "마른 몸을 원하기 때문에<br/>근육이 커지는 것도 좋아하지 않아요.",
        "personality3": "다이어트 레시피를 따로 개발하는데에 관심이 없어<br/>닭가슴살 같은 음식 위주로 먹으며 절식을 합니다.",
        "personality4": "그렇기 때문에 입이 터지기 쉬워<br/>다이어트 기간이 길지 않아요",
        "personality5": "다이어트 중에 어쩔수 없는 약속이 생기면<br/>스트레스를 받고는 합니다.",
        "personality6": "그래서 새로운 사람들과의 친목을<br/>선호하지 않는 편입니다.",
     
    },

}
//test 시작 function
function start() {
    $(".start").hide();
    $(".question").show();
    next();

}


//btn 클릭시 함수
function next() {

    if (num == 11) {
        $(".question").hide();
        $(".result").show();
        var track = "";
        ($("#EI").val() < 3) ? track += "I": track += "E";
        ($("#SN").val() < 3) ? track += "N": track += "S";


        $("#re_img").attr("src", result[track]["img"]);
        $("#tp_txt").html(result[track]["toptitle"]);
        $("#tr_txt").html(result[track]["trackname"]);
        $("#per_ex").html(result[track]["personality"]);
        $("#per_ex2").html(result[track]["personality2"]);
        $("#per_ex3").html(result[track]["personality3"]);
        $("#per_ex4").html(result[track]["personality4"]);
        $("#per_ex5").html(result[track]["personality5"]);
        $("#per_ex6").html(result[track]["personality6"]);
        $("#comment").html(result[track]["comment"]);
        $("#subjectlist").html(result[track]["subject"]);


    } else {

        $(".progress > .progress_bar").attr('style', 'width: calc(100/10*' + num + '%)');
        $("#pro_1").html(q[num]["question"]);
        $("#pro_2").html(q[num]["question2"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        $("#plus").html(num);
        num++;
    }
}

//뒤로 가기 버튼 누를시 prev() function
function prev() {

    if (num <= 2) {
        num = 2;
        $(".progress > .progress_bar").attr('style', 'width: calc(100/10*' + [num - 1] + '%)');
        $("#pro_1").html(q[num - 1]["question"]);
        $("#pro_2").html(q[num - 1]["question2"]);
        $("#type").val(q[num - 1]["type"]);
        $("#A").html(q[num - 1]["A"]);
        $("#B").html(q[num - 1]["B"]);
        $("#plus").html(num - 1);
    } else {

        num--;
        $(".progress > .progress_bar").attr('style', 'width: calc(100/10*' + [num - 1] + '%)');
        $("#pro_1").html(q[num - 1]["question"]);
        $("#pro_2").html(q[num - 1]["question2"]);
        $("#type").val(q[num - 1]["type"]);
        $("#A").html(q[num - 1]["A"]);
        $("#B").html(q[num - 1]["B"]);
        $("#plus").html(num - 1);

    }

}

function restart(){
    location.reload();
}




$(document).ready(function () {

      //#위 쪽 버튼 클릭시 일어나는 행위
    $("#A").click(function () {
        var type = $("#type").val();
        var preValue = $("#" + type).val();
        $("#" + type).val(parseInt(preValue) + 1);
        next();
        arr[index] = 1;
        index++; //배열 index

        //console.log(preValue);
        // console.log($("#" + type).val(parseInt(preValue) + 1));


    });
  
  //#아래 쪽 버튼 클릭시 일어나는 행위
    $("#B").click(function () {
        next();
        arr[index] = 2;
        index++; //배열 index


    });

     //#뒤로 버튼 클릭시 일어나는 행위
    $("#prev_Btn").click(function () {

       if(num == 1){
        postValue = 0;
        $("#EI").val(postValue);
        $("#SN").val(postValue);//값 초기화
       }

       else{
        prev();
        index = index-1;//각 버튼에 해당하는 index값 -1

        if(arr[index]==1){ //A버튼 감지
            var type2 = $("#type").val();
            var postValue = $("#" + type2).val();
            $("#" + type2).val(parseInt(postValue) - 1);
        }
        else{
            //2일때는 미처리
        }
       /*  var type2 = $("#type").val();
        var postValue = $("#" + type2).val();
        $("#" + type2).val(parseInt(postValue) - 1); */
       }


        // var type2 = $("#type").val();
        //var postValue = $("#" + type2).val();
        // $("#" + type2).val(parseInt(postValue) - 1);

    });

   


});
