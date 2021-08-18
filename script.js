let add = $("#btnAdd");
let input = $("#inpAdd");
let list = $("#taskList")

add.click(()=>{
    console.log(input.val());
    let newTask  = $("<li>", {
        'class': "list-group-item",
        'text': input.val()
    })
    list.prepend(newTask)
    input.val('');
})