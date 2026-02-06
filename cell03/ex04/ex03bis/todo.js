$(function () {

    const $list = $("#ft_list");

    // Load todo list from cookie
    loadTodos();

    // Create new TO DO
    $("#new-btn").click(function () {
        const text = prompt("Enter a new TO DO:");

        if (text && text.trim() !== "") {
            addTodo(text.trim());
            saveTodos();
        }
    });

    // Add TO DO at the top
    function addTodo(text) {
        const $todo = $("<div></div>").text(text);

        // Click to delete
        $todo.click(function () {
            if (confirm("Do you want to delete this TO DO?")) {
                $(this).remove();
                saveTodos();
            }
        });

        // Add at the top
        $list.prepend($todo);
    }

    // Save TO DOs to cookie
    function saveTodos() {
        const todos = [];

        $list.children().each(function () {
            todos.push($(this).text());
        });

        document.cookie =
            "todos=" +
            encodeURIComponent(JSON.stringify(todos)) +
            ";path=/";
    }

    // Load TO DOs from cookie
    function loadTodos() {
        const cookies = document.cookie.split("; ");
        let todoCookie = null;

        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i].startsWith("todos=")) {
                todoCookie = cookies[i].substring(6);
                break;
            }
        }

        if (!todoCookie) return;

        const todos = JSON.parse(decodeURIComponent(todoCookie));

        for (let i = todos.length - 1; i >= 0; i--) {
            addTodo(todos[i]);
        }
    }

});
