//ボタンをクリックしたときのコンストラクトを作成
const btn = document.getElementById('btn');

//クリック時のイベントを実行するべき
btn.addEventListener('click', () =>{
    setTimeout(() =>{
        document.getElementById('text').innerHTML = "ボタンをクリックしました";
    },2000);
});
