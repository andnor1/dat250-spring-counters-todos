package no.hvl.dat250.rest.todos;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/todos")
public class TodoController {

  private final Map<Long, Todo> todos = new HashMap<>();
  public static final String TODO_WITH_THE_ID_X_NOT_FOUND = "Todo with the id %s not found!";
  private Long ids = 0L;
  @PostMapping
  public Todo createTodo(@RequestBody Todo todo) {
    todo.setId(ids++);
    todos.put(todo.getId(), todo);
    return todo;
  }


  @GetMapping("/{id}")
  public Todo getTodoById(@PathVariable Long id) {
    if (!todos.containsKey(id)) {
      throw new RuntimeException(TODO_WITH_THE_ID_X_NOT_FOUND.formatted(id));
    }
    return todos.get(id);
  }

  @PutMapping("/{id}")
  public Todo updateTodo(@PathVariable Long id, @RequestBody Todo updatedTodo) {
    if (!todos.containsKey(id)) {
      throw new RuntimeException(TODO_WITH_THE_ID_X_NOT_FOUND.formatted(id));
    }
    Todo todo = todos.get(id);
    todo.setSummary(updatedTodo.getSummary());
    todo.setDescription(updatedTodo.getDescription());
    return todo;
  }

  @DeleteMapping("/{id}")
  public Todo delete(@PathVariable Long id) {
    if (!todos.containsKey(id)) {
      throw new RuntimeException(TODO_WITH_THE_ID_X_NOT_FOUND.formatted(id));
    }
    return todos.remove(id);
  }

  @GetMapping
  public List<Todo> getAllTodos() {
    return new ArrayList<>(todos.values());
  }
}
