const list = document.getElementById("ft_list");
const newBtn = document.getElementById("new-btn");

// Load todo list from cookie when page loads
window.onload = loadTodos;

// Create new TO DO
newBtn.onclick = function () {
    const text = prompt("Enter a new TO DO:");

    if (text && text.trim() !== "") {
        addTodo(text.trim());
        saveTodos();
    }
};

// Add TO DO at the top
function addTodo(text) {
    const todo = document.createElement("div");
    todo.textContent = text;

    // Click to delete
    todo.onclick = function () {
        if (confirm("Do you want to delete this TO DO?")) {
            todo.remove();
            saveTodos();
        }
    };

    // Add at the top
    list.prepend(todo);
}

// Save TO DOs to cookie
function saveTodos() {
    const todos = [];
    const items = list.children;

    for (let i = 0; i < items.length; i++) {
        todos.push(items[i].textContent);
    }

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
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
