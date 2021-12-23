"ui";

ui.layout(

    <vertical gravity="center_horizontal">

        <button id="btn" text="控件事件（点击、长按）" />
        <text id="text" text="默认文本" textSize="20sp" gravity="center" />
        <button id="btn1" text="修改text控件文本" />

        <input id="ip" hint="输入任意内容" />
        <button id="btn2" text="获取输入框输入的文本" />

        <img id="img" src="https://bst.icons8.com/wp-content/uploads/2021/12/MicrosoftTeams-image-8.png" w="80" h="50" />
        <button id="btn3" text="修改图片" />

    </vertical>

)

// 按钮被点击触发事件
ui.btn.click(() => {
    toast("我被点击啦");
})

//按钮被长按触发事件
ui.btn.longClick(() => {
    toast("我被长按啦");
})

// 点击按钮修改text控件文本
ui.btn1.click(() => {
    ui.text.setText("修改成功" + random(1, 10)); //random() ：此函数为获取随机数
})

//点击按钮获取输入框输入的内容
ui.btn2.click(() => {

    var 输入框内容 = ui.ip.getText();
    toast("你输入了: " + 输入框内容);

})

//点击按钮修改图片
ui.btn3.click(() => {
    ui.img.setSource("https://img.xjh.me/img/63779265_p0.jpg");
})

