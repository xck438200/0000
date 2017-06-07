/**
 * Created by user on 2017/6/5.
 */
//创建数据库
var db = openDatabase('noteapp', '1.0', '一个可以记录笔记的应用', 5 * 1024 * 1024);
//创建数据表
db.transaction(function (tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS note (id INTEGER PRIMARY KEY ASC, note_content TEXT, note_date TEXT)");
});
var noteForm = document.getElementById("note-form");
var text = noteForm.element["note-content"];
text.addEventListener("keyup",function () {
   localStorage.setItem("note", text.value)
});
text.value = localStorage.getItem("note");
//获得 submit按钮并监听它的点击事件
var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click",submitNote, false);
//提交笔记
function submitNote(ev) {
    ev.preventDefault();//组织默认事件发生,此处阻止的是默认向浏览器提交的数据
    var noteContent = text.value;
    var status = noteForm.element["submit-btn"].value;
    var noteID = noteForm.element["note-id"].value;
    if (status === "submit"){
        db.transaction(function (tx) {
            tx.executeSql("insert into note (note_content = ? where id = ?",
                [noteContent, noteID], onSuccess, onError);
        })
    }
}
function onSuccess(tx,rs) {
    console.log('成功');
    loadNote();
}
function onError(tx,e) {
    console.log('失败' + e.message);
}
function deleteNote() {
    db.transaction(function (tx) {
        tx.executeSql("delete from note where id = ?", [id] ,onSuccess,onError)
    });
}
//编辑
function editNote(id) {
    db.transaction(function (tx) {
        tx.executeSql("select * from note where id = ?",[id],function () {
            
        })
    })
}
